import views


def setup_routes(app):
    app.router.add_view('/', views.IndexView)
    app.router.add_view('/messages', views.MessageView)
    app.router.add_view(r'/message/{pk:\d+}', views.MessageDetailView)
