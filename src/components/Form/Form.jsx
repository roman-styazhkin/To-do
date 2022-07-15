import { uid } from 'uid';
import { useState } from "react";
import "./Form.css";

const Form = ({ getFormTask }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    body: "",
  });

  const setInputValue = (e, prop) => {
    setFormData((prevState) => ({
      ...prevState,
      id: uid(16),
      [prop]: e.target.value,
    }))
  }

  const onInputChange = (e) => {
    setInputValue(e, e.target.name)
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    getFormTask(formData)
  }

  return (
    <form className="form-item" onSubmit={onFormSubmit}>
      <fieldset className="uk-fieldset">

        <legend className="uk-legend">Task form</legend>

        <div className="uk-margin">
          <input
            className="uk-input form-input"
            type="text"
            placeholder="Task title"
            name="name"
            onChange={onInputChange}
            autoComplete="off" />
        </div>

        <div className="uk-margin">
          <textarea
            className="uk-textarea form-textarea"
            rows="5"
            placeholder="Task description"
            name="body"
            onChange={onInputChange}
            autoComplete="off"></textarea>
        </div>

      </fieldset>

      <button className="uk-button uk-button-primary" type="submit">add a new task</button>
    </form>
  )
}

export default Form;