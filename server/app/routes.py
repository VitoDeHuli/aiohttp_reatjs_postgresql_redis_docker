import views


def setup_routes(app):
    app.router.add_view('/', views.IndexView, name='index')
    app.router.add_view('/messages', views.MessageView, name='message_list')
    app.router.add_view(r'/message/{pk:\d+}', views.MessageDetailView, name='message_detail')
