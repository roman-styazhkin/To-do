import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Tasks from "./components/Tasks/Tasks";
import ThemeService from "./service/ThemeService";
import { useState } from "react";
import { uid } from 'uid';

const App = () => {
  const [, setAppTheme] = useState("");
  const themes = new ThemeService();
  const userTasks = JSON.parse(localStorage.getItem("user-tasks")) || [];
  const [appTasks, setAppTasks] = useState(userTasks);

  const onSetAppTheme = (themeName) => {
    setAppTheme(themeName);
    localStorage.setItem("appTheme", themeName);
  }

  const getFormTask = (name, body) => {
    const newObjTask = {
      id: uid(),
      name,
      body,
    };

    setAppTasks((prevState) => {
      const newData = [newObjTask, ...prevState];
      localStorage.setItem("user-tasks", JSON.stringify(newData));
      return newData;
    });
  }

  return (
    <div className="App">
      <Header
        setSelectedTheme={themes.setSelectedTheme}
        onSetAppTheme={onSetAppTheme} />
      <Form getFormTask={getFormTask} />
      <Tasks tasks={appTasks} />
    </div >
  )
}

export default App;