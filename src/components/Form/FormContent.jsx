import FormActions from "./FormActions";

const FormContent = ({ onInputChange, onClickCancel, formData }) => {
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
            value={formData.name}
            required />
        </div>

        <div className="uk-margin">
          <textarea
            className="uk-textarea form-textarea"
            placeholder="Task description"
            name="body"
            type="text"
            onChange={onInputChange}
            autoComplete="off"
            value={formData.body}
          />
        </div>
      </fieldset>
      <FormActions onClickCancel={onClickCancel} />
    </>
  )
}

export default FormContent;