import "./Tasks.css";
import TaskItem from "../TaskItem/TaskItem";
import Container from "../Container/Container";

const Tasks = ({ tasks }) => {

  if (!tasks.length) {
    return;
  }

  const elems = tasks.map((item) => (
    <TaskItem key={item.id} {...item} />
  ))

  return (
    <section className="tasks">
      <Container className="tasks__inner">
        {elems}
      </Container>
    </section >
  )
}

export default Tasks;