import MenuItem from "./MenuItem";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <MenuItem nav="Головна" />
      <MenuItem nav="Питання" />
      <MenuItem nav="Матерiaли" />
      <MenuItem nav="Koнтакти" />
    </div>
  );
}

export default Header;
