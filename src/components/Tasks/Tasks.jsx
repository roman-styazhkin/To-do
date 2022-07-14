import "./Tasks.css";
import { useState } from "react";
import TaskItem from "../TaskItem/TaskItem";
import Container from "../Container/Container";
import ToDoService from "../../data/ToDoService";

const Tasks = ({ tasks }) => {
  const [items, setItems] = useState([])

  tasks.then((data) => setItems(data));
  const elems = items.slice(0, 10).map((item) => <TaskItem key={item.id} {...item} />);

  return (
    <section className="tasks">
      <Container className="tasks__inner">
        {elems}
      </Container>
    </section >
  )
}

export default Tasks;