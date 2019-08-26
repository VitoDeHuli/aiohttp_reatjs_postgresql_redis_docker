from collections import OrderedDict

from aiohttp_utils import negotiation

from . import views


def setup_routes(app):
    app.router.add_resource_object('/', views.IndexView())

    negotiation.setup(
        app,
        renderers=OrderedDict([
            ('application/json', negotiation.render_json)
        ])
    )
