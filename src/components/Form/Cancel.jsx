import "./Cancel.css";

const Cancel = ({ onClickCancel }) => {
  return (
    <button
      className="uk-button uk-button-default"
      onClick={onClickCancel}
    >cancel</button>
  )
}

export default Cancel;