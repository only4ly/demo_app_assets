const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();
const compress = require('koa-compress') 

// or use absolute paths
app.use(compress())
app.use(serve(__dirname + '/assets'));
 
app.listen(3000);
 
console.log('listening on port 3000');