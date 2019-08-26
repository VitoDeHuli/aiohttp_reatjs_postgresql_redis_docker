import logging

from aiohttp.web import View, json_response as response, HTTPNotFound

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


class MessageDetailView(View):
    TITLE = 'Detail message'

    async def get(self):
        pk = self.request.match_info.get('pk')

        async with self.request.app['pg_engine'].acquire() as conn:
            result = conn.execute(tbl_message.select().where(tbl_message.c.id == pk))
            try:
                row = result.fetchone()
            except AttributeError:
                return HTTPNotFound()

            log.debug(row)
            ts = '{:%Y-%m-%d %H:%M:%S}'.format(row.timestamp)

        return response({
            'title': f'{self.TITLE}: {row.id}',
            'object': {'username': row.username,
                       'timestamp': ts,
                       'message': row.message}})
