import WebServer from './web.server'
let webServer = new WebServer();
webServer.start()
  .then(() => {
    console.log('Web server started!')
  })
  .catch(err => {
    console.error(err)
    console.error('Failed to start web server')
  });

webServer.app.get('/XForward',(req,res)=>{
  // let XForward=req.headers;
  // res.send(JSON(XForward));
  let ip=req.headers['x-forwarded-for']||'No proxy'

  let allHeaders=(req.headers)
  console.log(allHeaders);3
  console.log(JSON.stringify(allHeaders))
  console.log(typeof(allHeaders))
})