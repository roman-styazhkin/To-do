import Select from "../Select/Select";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="uk-container header__inner">
        <h1 className="header__title">To do list</h1>
        <Select />
      </div>
    </header>
  )
}

export default Header;