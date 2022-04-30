const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(function(_req, _res, next){
    setTimeout(next, 500);
  });
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})