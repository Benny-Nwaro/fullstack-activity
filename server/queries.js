const { description } = req.body;
const newTodo = await pool.query(
  "INSERT INTO(description) VALUES($1) RETURNING *",
  [description]
);
res.json(newTodo.rows[0]);

//Get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//Get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    const id = request.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id =$1", [id]);
    res.json(todo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//Update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const id = req.params;
    const description = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );
    res.json("todo was updated");
  } catch (error) {
    console.error(error.message);
  }
});

//Delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const id = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json("Todo deleted");
  } catch (error) {
    console.error(error.message);
  }
});
