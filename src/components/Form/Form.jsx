import "./Form.css";

const Form = () => {
  return (
    <form className="form-item">
      <fieldset className="uk-fieldset">

        <legend className="uk-legend">Task form</legend>

        <div className="uk-margin">
          <input className="uk-input form-input" type="text" placeholder="Task title" />
        </div>

        <div className="uk-margin">
          <textarea className="uk-textarea form-textarea" rows="5" placeholder="Task description"></textarea>
        </div>

      </fieldset>

      <button className="uk-button uk-button-primary" type="submit">add a new task</button>
    </form>
  )
}

export default Form;