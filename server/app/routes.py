import views


def setup_routes(app):
    app.router.add_view('/api/', views.IndexView, name='index')
    app.router.add_view('/api/messages/', views.MessageView, name='message_list')
    app.router.add_view(r'/api/message/{pk:\d+}/', views.MessageDetailView, name='message_detail')
