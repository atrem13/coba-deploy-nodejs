const http = require('http');
const server = http.createServer((req, res)=>{
  
  // parse url
  const parsedUrl = url.parse(req.url, true);
  
  // get http method
  const method = req.method.toLowerCase();
  
  // get path
  const path = parsedUrl.pathname;


  res.end("hello world this is method ${method} and path ${path}");
});
server.listen(3000, ()=> {
  console.log("server running on port 3000");
});