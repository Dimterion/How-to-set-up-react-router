import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="errorPage-container">
      Error. This page doesn't exist. Return to the{" "}
      <Link to="/">Home page</Link>
    </div>
  );
}

export default Error;
