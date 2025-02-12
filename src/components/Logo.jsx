import { Link } from "react-router-dom";
import LogoIcon from "../assets/LogoIcon";
const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-3 font-semibold">
      <LogoIcon />
      <p className="font-semibold">Around the world</p>
    </Link>
  );
};

export default Logo;
