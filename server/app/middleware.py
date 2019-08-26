import logging

logger = logging.getLogger(__name__)


async def request_logging_middleware(app, handler):
    async def middleware_handler(request):
        logger.debug('%s %s %s', request.method, request.path, request.query)
        return await handler(request)
    return middleware_handler


def setup_middlewares(app):
    app.middlewares.append(request_logging_middleware)
