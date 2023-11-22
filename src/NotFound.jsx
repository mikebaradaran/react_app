import { Link } from "react-router-dom";

function NotFound() {
  return (
    <p>
      <div>Sorry page not found</div>
      <Link to="/">back to home...</Link>
    </p>
  );
}

export default NotFound;
