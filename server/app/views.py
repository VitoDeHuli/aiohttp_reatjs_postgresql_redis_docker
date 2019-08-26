from aiohttp import web

import status


class IndexView(web.View):

    async def get(self):
        return web.json_response({
            'title': 'Index page',
            'text': 'Hello World',
        }, status=status.HTTP_200_OK)
