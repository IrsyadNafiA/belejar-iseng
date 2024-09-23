import express, { response } from "express";
import routes from "./routes/index.mjs";
import cookieParser from "cookie-parser";
import session from "express-session";
import { mockUsers } from "./utils/constants.mjs";

const app = express();

app.use(express.json());
app.use(cookieParser("testtest"));
app.use(
  session({
    secret: "irsyad lagi belajar",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 60000 * 60, // 1 hour
    },
  })
);
app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  console.log(req.session.id);
  req.session.visited = true;
  res.cookie("test", "test", { maxAge: 30000, signed: true });
  res.status(201).send({
    message: "Hello World",
  });
});

app.post("/api/auth", (req, res) => {
  const {
    body: { username, password },
  } = req;
  const findUser = mockUsers.find((user) => user.username === username);
  if (!findUser || findUser.password !== password)
    return response.status(401).send({ msg: "BAD CREDENTIALS" });

  req.session.user = findUser;
  return res.status(200).send(findUser);
});

app.get("/api/auth/status", (req, res) => {
  req.sessionStore.get(req.sessionID, (err, sessionData) => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log(sessionData);
  });
  return req.session.user
    ? res.status(200).send(req.session.user)
    : res.status(401).send({ msg: "Not Authenticated" });
});

app.post("/api/cart", (req, res) => {
  if (!req.session.user) return res.sendStatus(401);
  const { body: item } = req;
  const { cart } = req.session;
  if (cart) {
    cart.push(item);
  } else {
    req.session.cart = [item];
  }
  return res.status(201).send(item);
});

app.get("/api/cart", (req, res) => {
  if (!req.session.user) return res.sendStatus(401);
  return res.send(req.session.cart ?? []);
});
