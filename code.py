import web
render = web.template.render('templates/')
urls = (
    '/','index',
    '/info', 'infopage'
)

class index:
    def GET(self):
        return render.index()
class infopage:
    def GET(self):
        return render.infopage()


if __name__ == "__main__":
    app = web.application(urls, globals())
    app.run()
