import "./TaskItem.css";

const TaskItem = () => {
  return (
    <div className="uk-card uk-card-default uk-width-1-2@m task-item">
      <div className="uk-card-header">
        <div className="uk-grid-small uk-flex-middle" uk-grid="true">
          <div className="uk-width-expand">
            <h3 className="uk-card-title uk-margin-remove-bottom">Header</h3>
            <p className="uk-text-meta uk-margin-remove-top"><time dateTime="2016-04-01T19:00">April 01, 2016</time></p>
          </div>
        </div>
      </div>
      <div className="uk-card-body">
        <p>One drift least extent. Differed rapturous returned poor extent arose can. Opinion whole fanny colonel dried day talking behind seemed visit miss to. Sixteen gate charmed sent father regret talked stand sportsmen off are esteem roof linen confined. Surprise things ready cheerful improved there me covered screened.</p>
      </div>
      <div className="uk-card-footer">
        <button className="uk-button uk-button-danger">
          Delete task
        </button>
      </div>
    </div>
  )
}

export default TaskItem;