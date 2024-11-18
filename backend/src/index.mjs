import express, { response } from "express";
import routes from "./routes/index.mjs";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import "./strategies/local-strategy.mjs";

const app = express();

mongoose
  .connect("mongodb://localhost/learning")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

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
    store: MongoStore.create({
      client: mongoose.connection.getClient(),
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.post("/api/auth", passport.authenticate("local"), (req, res) => {
  res.sendStatus(200);
});

app.get("/api/auth/status", (req, res) => {
  console.log(`Inside status /auth/status endpoint`);
  console.log(req.user);
  console.log(req.session);
  console.log(req.sessionID);
  return req.user ? res.send(req.user) : res.sendStatus(401);
});

app.post("/api/auth/logout", (req, res) => {
  if (!req.user) return res.sendStatus(401);

  req.logout((err) => {
    if (err) return res.sendStatus(500);
    return res.sendStatus(200);
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// SESSION PT.2
// app.get("/", (req, res) => {
//   console.log(req.session.id);
//   req.session.visited = true;
//   res.cookie("test", "test", { maxAge: 30000, signed: true });
//   res.status(201).send({
//     message: "Hello World",
//   });
// });

// app.post("/api/auth", (req, res) => {
//   const {
//     body: { username, password },
//   } = req;
//   const findUser = mockUsers.find((user) => user.username === username);
//   if (!findUser || findUser.password !== password)
//     return response.status(401).send({ msg: "BAD CREDENTIALS" });

//   req.session.user = findUser;
//   return res.status(200).send(findUser);
// });

// app.get("/api/auth/status", (req, res) => {
//   req.sessionStore.get(req.sessionID, (err, sessionData) => {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//     console.log(sessionData);
//   });
//   return req.session.user
//     ? res.status(200).send(req.session.user)
//     : res.status(401).send({ msg: "Not Authenticated" });
// });

// app.post("/api/cart", (req, res) => {
//   if (!req.session.user) return res.sendStatus(401);
//   const { body: item } = req;
//   const { cart } = req.session;
//   if (cart) {
//     cart.push(item);
//   } else {
//     req.session.cart = [item];
//   }
//   return res.status(201).send(item);
// });

// app.get("/api/cart", (req, res) => {
//   if (!req.session.user) return res.sendStatus(401);
//   return res.send(req.session.cart ?? []);
// });
