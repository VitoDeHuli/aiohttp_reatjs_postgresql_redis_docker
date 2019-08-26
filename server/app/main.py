import base64
import logging

import aiohttp_session
from aiohttp import web
from aiohttp_session.cookie_storage import EncryptedCookieStorage
from aiohttp_utils import routing
from aiopg.sa import create_engine

from .management import pg_dsn
from .routes import setup_routes
from .settings import Settings


async def startup(app: web.Application):
    app['pg_engine'] = await create_engine(pg_dsn(app['settings']))


async def cleanup(app: web.Application):
    app['pg_engine'].close()
    await app['pg_engine'].wait_closed()


def create_app():
    app = web.Application(router=routing.ResourceRouter())
    settings = Settings()
    app.update(
        name='server',
        settings=settings,
        static='/static/',
    )
    app.on_startup.append(startup)
    app.on_cleanup.append(cleanup)

    secret_key = base64.urlsafe_b64decode(settings.COOKIE_SECRET)
    aiohttp_session.setup(app, EncryptedCookieStorage(secret_key))

    setup_routes(app)
    return app


def main():
    logging.basicConfig(level=logging.DEBUG)
    app = create_app()
    web.run_app(app, host=app['settings'].HOST, port=app['settings'].PORT)


if __name__ == '__main__':
    main()
