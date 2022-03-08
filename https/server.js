const http = require("http"); //criar o servidor
const fs = require("fs"); //manipular arquivos
const path = require("path"); //caminho corretos dos arquivos

http.createServer((req, res) => {
  const file = req.url === '/' ? 'index.html' : req.url
  const filePath = path.join(__dirname, 'public', file)
  const extname = path.extname(filePath)

  const allowedFileTypes = ['.html', '.css', '.js']
  const allowed = allowedFileTypes.find(item => item == extname)

  if(!allowed) return

  fs.readFile(
    filePath,
    (err, content) => {
      if(err) throw err

      res.end(content)
    }
  )

}).listen(5000, () => console.log("Server is running"));










  




  //===================Rodando um servider simples=====
// http
// .createServer((req, res) => {
//   if(req.url === "/") {
//     fs.readFile(
//       path.join(__dirname, "public", "index.html"),
//       (err, content) => {
//         if(err) throw err;

//         res.end(content);
//       }
//     );
//   }
// })
// .listen(5000, () => console.log("Server is running"));
