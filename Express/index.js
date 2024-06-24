const express = require("express");
const routes = require("./routes.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(routes);

// const auth = (req, resp, next) => {
//   let user = { name: "Nabin", type: "Admin" };
//   req.user = user;
//   if (user != null) {
//     next();
//   } else {
//     next("user unauthenticated");
//   }
// };

// const typeCheck = (req, resp, next) => {
//   if (req.user.type == "Admin") {
//     next();
//   } else {
//     next("admin only");
//   }
// };

// app.use(auth,typeCheck, (req, resp, next) => {
//   resp.send("Hello " + req.user.name);
// });

app.use((error, req, res, next) => {
  res.send({
    message: error,
  });
});

app.listen(5000, () => {
  console.log("Server Started");
});

// Apllication Middle Ware app.use((req, resp , next)
// Built/First Party in Middleware
// Router Middleware
// Third-party middleware
// Error Handeling middleware
