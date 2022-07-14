import "./Select.css";
import SelectItem from "./SelectItem";

const Select = ({ setSelectedTheme, onSetAppTheme }) => {

  const selectData = [
    { id: 0, theme: "light", label: "Light theme" },
    { id: 1, theme: "dark", label: "Dark theme" },
  ]

  const selectItems = selectData.map((item) => (
    <SelectItem
      key={item.id}
      {...item}
      setSelectedTheme={setSelectedTheme}
      onSetAppTheme={onSetAppTheme} />
  ))

  return (
    <div className="select-item">
      <button className="uk-button uk-button-default" type="button">Choose theme</button>
      <div className="select-box" uk-dropdown="true">
        <ul className="uk-nav uk-dropdown-nav">
          {selectItems}
        </ul>
      </div>
    </div>
  )
}

export default Select;