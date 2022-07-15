import "./Button.css";

const Button = ({ onClickVisible }) => {
  return (
    <button
      className="uk-button uk-button-primary uk-button-large main-button"
      onClick={onClickVisible}
    >Add a new task</button>
  )
}

export default Button;