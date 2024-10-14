import { response, Router } from "express";
import {
  query,
  validationResult,
  body,
  matchedData,
  checkSchema,
} from "express-validator";
import { mockUsers } from "../utils/constants.mjs";
import {
  getUserValidationSchema,
  createUserValidationSchema,
} from "../utils/validationSchemas.mjs";
import { resolveIndexByUserId } from "../utils/middlewares.mjs";
import { User } from "../mongoose/schemas/user.mjs";
import { hashPassword } from "../utils/helpers.mjs";

const router = Router();

router.get("/api/users", (req, res) => {});

router.post(
  "/api/users",
  checkSchema(createUserValidationSchema),
  async (request, response) => {
    // Schemas Validation
    const result = validationResult(request);
    if (!result.isEmpty()) return response.status(400).send(result.array());

    // Create User
    const data = matchedData(request);
    console.log(data);
    data.password = hashPassword(data.password);
    console.log(data);
    const newUser = new User(data);
    try {
      const savedUser = await newUser.save();
      return response.status(201).send(savedUser);
    } catch (err) {
      console.log(err);
      return response.sendStatus(400);
    }
  }
);

// PAST
// router.get("/api/users", checkSchema(getUserValidationSchema), (req, res) => {
//   console.log(req.session.id);
//   req.sessionStore.get(req.session.id, (err, sessionData) => {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//     console.log(sessionData);
//   });
//   const result = validationResult(req);
//   // console.log(result);
//   const {
//     query: { filter, value },
//   } = req;
//   if (!filter && !value) return res.send(mockUsers);
//   if (filter && value)
//     return res.send(mockUsers.filter((user) => user[filter].includes(value)));
//   return res.send(mockUsers);
// });

// router.get("/api/users/:id", resolveIndexByUserId, (req, res) => {
//   const { findUserIndex } = req;
//   const findUser = mockUsers[findUserIndex];
//   return res.send(findUser);
// });

// router.post(
//   "/api/users",
//   checkSchema(createUserValidationSchema),
//   (req, res) => {
//     const result = validationResult(req);
//     console.log(result);
//     if (!result.isEmpty())
//       return res.status(400).send({ errors: result.array() });

//     const data = matchedData(req);
//     const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...data };
//     mockUsers.push(newUser);
//     return res.status(201).send(newUser);
//   }
// );

// router.put("/api/users/:id", resolveIndexByUserId, (req, res) => {
//   const { body, findUserIndex } = req;
//   mockUsers[findUserIndex] = { id: mockUsers[findUserIndex].id, ...body };
//   return res.sendStatus(200);
// });

// router.patch("/api/users/:id", resolveIndexByUserId, (req, res) => {
//   const { body, findUserIndex } = req;
//   mockUsers[findUserIndex] = { ...mockUsers[findUserIndex], ...body };
//   return res.sendStatus(200);
// });

// router.delete("/api/users/:id", resolveIndexByUserId, (req, res) => {
//   const { findUserIndex } = req;
//   mockUsers.splice(findUserIndex, 1);
//   return res.sendStatus(200);
// });

export default router;
