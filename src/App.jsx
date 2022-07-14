import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Tasks from "./components/Tasks/Tasks";
import ToDoService from "./service/ToDoService";
import ThemeService from "./service/ThemeService";
import { useState } from "react";

const App = () => {
  const [, setAppTheme] = useState("");

  const tasks = new ToDoService().getToDoResponse();
  const themes = new ThemeService();

  const onSetAppTheme = (themeName) => {
    setAppTheme(themeName)
    localStorage.setItem("appTheme", themeName)
  }

  return (
    <div className="App">
      <Header
        setSelectedTheme={themes.setSelectedTheme}
        onSetAppTheme={onSetAppTheme} />
      <Form />
      <Tasks tasks={tasks} />
    </div >
  )
}

export default App;