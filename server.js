import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const PORT = 3001;

server.use(middlewares);

// CORS fix
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

server.use(router);

server.listen(PORT, () => {
  console.log("JSON Server running on", PORT);
});
