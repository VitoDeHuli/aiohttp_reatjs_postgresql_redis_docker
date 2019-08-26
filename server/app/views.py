from aiohttp import web
from aiohttp_utils import Response

import status


class IndexView(web.View):

    async def get(self):
        return Response({
            'title': 'Index page',
            'text': 'Hello World',
        }, status=status.HTTP_200_OK)
