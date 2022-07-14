import "./SelectItem.css";

const SelectItem = ({ label, theme, setSelectedTheme, onSetAppTheme }) => {
  const onClickSelect = (e) => {
    const themeName = e.target.dataset.theme;
    setSelectedTheme(themeName);
    onSetAppTheme(themeName);
  }

  return (
    <li
      className="uk-nav-header select-elem"
      data-theme={theme}
      onClick={onClickSelect}>{label}
    </li>
  )
}

export default SelectItem;