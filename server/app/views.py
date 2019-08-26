from aiohttp_utils import Response


class IndexView:

    async def get(self, request):
        name = request.match_info.get('name', 'World')
        return Response({
            'message': 'Hello ' + name
        })
