import logging

from aiohttp.web import View, json_response as response

import status
from models import tbl_message

log = logging.getLogger(__name__)


class IndexView(View):
    TITLE = 'Index page'

    async def get(self):
        return response({
            'title': self.TITLE,
            'text': 'Hello World'})


class MessageView(View):
    TITLE = 'Messages'

    async def get(self):
        msgs = []

        async with self.request.app['pg_engine'].acquire() as conn:
            async for row in conn.execute(tbl_message.select().order_by(
                    tbl_message.c.timestamp.desc())):
                ts = '{:%Y-%m-%d %H:%M:%S}'.format(row.timestamp)
                msgs.append({'username': row.username,
                             'timestamp': ts})

        return response({
            'title': self.TITLE,
            'object_list': msgs})

    async def post(self):
        new_message, missing_fields = {}, []
        fields = ['username', 'message']
        data = await self.request.post()
        log.debug(data)
        for f in fields:
            new_message[f] = data.get(f)
            if not new_message[f]:
                missing_fields.append(f)

        if missing_fields:
            return response({'text': 'Invalid form submission, missing fields: {}'.format(
                ', '.join(missing_fields))},
                status=status.HTTP_400_BAD_REQUEST)

        async with self.request.app['pg_engine'].acquire() as conn:
            await conn.execute(tbl_message.insert().values(
                username=new_message['username'],
                message=new_message['message'],
            ))

        return response({'text': 'Message is successfully created.',
                         'redirect_url': str(self.request.app.router['message_list'].url_for())},
                        status=status.HTTP_201_CREATED)


class MessageDetailView(View):
    TITLE = 'Detail message'

    async def get(self):
        pk = self.request.match_info.get('pk')

        async with self.request.app['pg_engine'].acquire() as conn:
            result = await conn.execute(tbl_message.select(tbl_message.c.id == pk))
            row = await result.fetchone()
            log.debug(row)
            if not row:
                return response({'text': 'Message not found'}, status=status.HTTP_404_NOT_FOUND)

        return response({
            'title': f'{self.TITLE}: {row.id}',
            'object': {'username': row.username,
                       'timestamp': '{:%Y-%m-%d %H:%M:%S}'.format(row.timestamp),
                       'message': row.message}})
