import "./TaskItem.css";

const TaskItem = ({ name, body }) => {
  const taskTitle = name[0].toUpperCase() + name.slice(1);
  const month = new Date().toLocaleDateString("en-En", { month: "short" })
  const day = new Date().getDate();
  const year = new Date().getFullYear()
  const date = `${month}, ${day}, ${year}`;

  if (body.length > 150) {
    body = body.slice(0, 150) + "...";
  }

  const now = Date.now();
  const end = new Date().setHours(23, 59, 59, 999);

  console.log(now >= end);
  if (now >= end) {
    localStorage.clear();
  }

  return (
    <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m task-item">
      <button className="uk-card-badge uk-label" type="button">delete</button>
      <h3 className="uk-card-title task-title">
        {taskTitle}

        <p className="uk-text-meta uk-margin-remove-top"><time dateTime="2016-04-01T19:00">{date}</time></p>
      </h3>
      <p>{body}</p>
    </div>
  )
}

export default TaskItem;