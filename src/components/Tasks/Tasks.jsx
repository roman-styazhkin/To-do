import "./Tasks.css";
import TaskItem from "../TaskItem/TaskItem";
import Container from "../Container/Container";

const Tasks = () => {
  return (
    <section className="tasks">
      <Container className="tasks__inner">
        <TaskItem />
      </Container>
    </section >
  )
}

export default Tasks;