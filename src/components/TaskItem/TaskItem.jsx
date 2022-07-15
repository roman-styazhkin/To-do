import "./TaskItem.css";

const TaskItem = ({ name, body }) => {
  const taskTitle = name[0].toUpperCase() + name.slice(1);

  if (body.length > 150) {
    body = body.slice(0, 150) + "...";
  }

  return (
    <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m task-item">
      <button className="uk-card-badge uk-label" type="button">delete</button>
      <h3 className="uk-card-title task-title">{taskTitle}</h3>
      <p>{body}</p>
    </div>
  )
}

export default TaskItem;