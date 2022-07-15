import "./Tasks.css";
import TaskItem from "../TaskItem/TaskItem";
import Container from "../Container/Container";
import TasksEmpty from "./TasksEmpty";

const Tasks = ({ tasks }) => {

  const renderElems = () => {
    const elems = tasks.map((item) => {
      return <TaskItem key={item.id} {...item} />
    })

    return elems;
  }

  return (
    <section className="tasks">
      <Container className="tasks__inner">
        {!tasks.length ? <TasksEmpty /> : renderElems()}
      </Container>
    </section >
  )
}

export default Tasks;