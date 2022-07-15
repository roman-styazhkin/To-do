import FormActions from "./FormActions";

const FormContent = ({ onInputChange, onClickCancel }) => {
  return (
    <>
      <fieldset className="uk-fieldset">
        <legend className="uk-legend">Task form</legend>

        <div className="uk-margin">
          <input
            className="uk-textarea form-textarea form-textarea--name"
            type="text"
            placeholder="Task Title"
            name="name"
            onChange={onInputChange}
            autoComplete="off"
            required />
        </div>

        <div className="uk-margin">
          <textarea
            className="uk-textarea form-textarea"
            placeholder="Task description"
            name="body"
            onChange={onInputChange}
            autoComplete="off"
          />
        </div>
      </fieldset>
      <FormActions onClickCancel={onClickCancel} />
    </>
  )
}

export default FormContent;