const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./db");
const app = express();
const cors = require('cors');


app.use(express.json());  // it will parse upcoming data to object (json object). we generally use middleware based on content type. basically app.use(express.json()) check header through it knows that data is json or not.
app.use(cors());         


// body - > title desc
app.post("/todo", async function (req, res) {
  const createPayload = req.body; // typeof req.body =>  object if middlewared used to parse into json object. we do app.use(express.urlencoded()) for the form data.
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload) {
    res.status(411).json({
      msg: "You sent the wrong data",
    });
    return;
  }

  // put data in mongodb
  await Todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo Created.",
  });
});

app.get("/todos", async function (req, res) {
  try {
    const todos = await Todo.find({});
    res.json({
      todos,
    });
  } catch (err) {
    res.status(411).json({
        err
    })
  }
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload) {
    res.status(411).json({
      msg: "Your input data is wrong.",
    });
    return;
  }

  // update in the data base. update takes two argument first one is condition.
  await Todo.findByIdAndUpdate(
    {
      // update me aisa nhi hain sare fields ko update karna jaroory hain
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo Marked as completed",
  });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
