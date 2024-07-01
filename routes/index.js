var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "What's up?",
    user: "Grace",
    added: new Date(),
  },
  {
    text: "Good morning!",
    user: "David",
    added: new Date(),
  },
  {
    text: "Nice to meet you!",
    user: "Helen",
    added: new Date(),
  },
  {
    text: "Have a great day!",
    user: "Jane",
    added: new Date(),
  },
  {
    text: "See you later!",
    user: "Isaac",
    added: new Date(),
  },
  {
    text: "Take care!",
    user: "Frank",
    added: new Date(),
  },
  {
    text: "Cheers!",
    user: "Beatrice",
    added: new Date(),
  },
  {
    text: "Welcome back!",
    user: "Ella",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "MiniMessageboard", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "New Form" });
});

router.post("/new", function (req, res, next) {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;
  const added = new Date();

  messages.push({ text: messageText, user: messageUser, added: added });
  res.redirect("/");
});

module.exports = router;
