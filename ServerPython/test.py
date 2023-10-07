import tornado.ioloop
import tornado.web

class MainHandler(tornado.web.RequestHandler):
    def set_default_headers(self):
        self.set_header('Access-Control-Allow-Origin', '*')
        self.set_header('Access-Control-Allow-Headers', '*')
        self.set_header('Access-Control-Max-Age', 1000)
        self.set_header('Content-type', 'application/json')
        self.set_header('Access-Control-Allow-Methods', 'POST , GET, OPTION')
        self.set_header('Access-Control-Allow-Credentials', 'true')
        self.set_header('Access-Control-Allow-Headers', 
                        'Content-type, Access-Control-Allow-Origin, Access-Control-Allow-Headers, X-Requested-By, expires, x-requested-with, pragma, cache-control, if-modified-since, Access-Control-Allow-Methods')
                        
    def options(self):
        pass
        
    def post(self):
        req = self.request.body.decode('utf-8')
        print("post call!!")
        print(req)
        f = open("testData.txt", 'r', encoding='utf8')
        resText = f.read()
        self.write(resText)
        print(resText)
        f.close()
        print("post call end !!!")
    
    def get(self):
        print("get call!!")
        f = open("testData.txt", 'r', encoding='utf8')
        resText = f.read()
        self.write(resText)
        print(resText)
        f.close()
        
def make_app():
    return tornado.web.Application([
        (r"/", MainHandler),
    ])

if __name__ == "__main__":
    app = make_app()
    port= 8888
    app.listen(port)
    print('Test Web Server Start listening '+str(port)+' !!!')
    tornado.ioloop.IOLoop.current().start()
