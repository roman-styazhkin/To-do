import "./Select.css";

const Select = () => {
  return (
    <div className="select-item">
      <button className="uk-button uk-button-default" type="button">Choose theme</button>
      <div uk-dropdown="true">
        <ul className="uk-nav uk-dropdown-nav">
          <li className="uk-nav-header uk-nav-header--active">Light theme</li>
          <li className="uk-nav-header">Dark theme</li>
        </ul>
      </div>
    </div>
  )
}

export default Select;