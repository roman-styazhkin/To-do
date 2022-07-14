import Select from "../Select/Select";
import "./Header.css";

const Header = ({ setSelectedTheme, onSetAppTheme }) => {
  return (
    <header className="header">
      <div className="uk-container header__inner">
        <h1 className="header__title">To do list</h1>
        <Select
          setSelectedTheme={setSelectedTheme}
          onSetAppTheme={onSetAppTheme}
        />
      </div>
    </header>
  )
}

export default Header;