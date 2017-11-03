const routes = module.exports = require('next-routes')()

routes
.add('index', '/', 'IndexPage')
.add('news.list', '/news/list/:page', 'NewsListPage')
