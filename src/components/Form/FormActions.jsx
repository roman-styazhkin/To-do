import Cancel from "./Cancel";
import Submit from "./Submit";

const FormActions = ({ onClickCancel }) => {
  return (
    <div className="form-actions">
      <Submit />
      <Cancel onClickCancel={onClickCancel} />
    </div>
  )
}

export default FormActions;
