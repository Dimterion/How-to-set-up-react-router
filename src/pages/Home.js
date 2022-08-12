import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homePage-container">
      <h1>A simple page created with Create React App and React Router</h1>
      <p>
        It was made for an article on how to set up React Router which can be
        checked <Link to="/article">here</Link>
      </p>
    </div>
  );
}

export default Home;
