const routes = module.exports = require('next-routes')()

routes
.add('index', '/', 'IndexPage')
.add('about', '/about/:name', 'AboutPage')
.add('BarPage', '/foo/bar', 'BarPage')