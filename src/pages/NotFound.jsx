import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="text-center py-32">
      <p className="text-6xl lg:text-8xl py-9">404</p>
      <p className="text-2xl">This Country is not Exist :)</p>
      <Link
        className="my-10 inline-block rounded-md bg-white p-3 md:mb-20"
        to="/"
      >
        Go To Home
      </Link>
    </div>
  )
};

export default NotFound;
