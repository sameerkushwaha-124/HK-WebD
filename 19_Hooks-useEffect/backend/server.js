const express = require("express");
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());

// Helper function to generate random TODOs
function getRandomTodos(count = 10) {
  const titles = ['Buy groceries', 'Call mom', 'Finish project', 'Read book', 'Workout'];
  const descriptions = [
    'Milk, Bread, Eggs, Cheese',
    'Check in about the weekend plans',
    'Due by Monday',
    'At least one chapter',
    'Cardio and strength training'
  ];

  const todos = [];

  for (let i = 0; i < count; i++) {
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    const randomDescription = descriptions[Math.floor(Math.random() * descriptions.length)];

    todos.push({
      title: randomTitle,
      description: randomDescription
    });
  }

  return todos;
}


app.get('/api/random/todos', function (req, res){
    const todos = getRandomTodos();
    res.json(todos);
})


app.listen(3000, function(req, res){
    console.log('server is running on the port 3000');
});