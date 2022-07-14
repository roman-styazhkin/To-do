import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Tasks from "./components/Tasks/Tasks";
import ToDoService from "./data/ToDoService";

const App = () => {

  const tasks = new ToDoService().getToDoResponse();

  return (
    <div className="App">
      <Header />
      <Form />
      <Tasks tasks={tasks} />
    </div >
  )
}

export default App;