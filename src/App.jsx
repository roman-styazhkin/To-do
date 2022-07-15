import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Tasks from "./components/Tasks/Tasks";
import ThemeService from "./service/ThemeService";
import { useState } from "react";

const App = () => {
  const [, setAppTheme] = useState("");
  const themes = new ThemeService();
  const [appTasks, setAppTasks] = useState({});

  const tasks = 1;

  const onSetAppTheme = (themeName) => {
    setAppTheme(themeName)
    localStorage.setItem("appTheme", themeName)
  }

  const getFormTask = (task) => {
    setAppTasks();
  }

  return (
    <div className="App">
      <Header
        setSelectedTheme={themes.setSelectedTheme}
        onSetAppTheme={onSetAppTheme} />
      <Form getFormTask={getFormTask} />
      <Tasks tasks={tasks} />
    </div >
  )
}

export default App;