import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 style={{ color: "white" }}>Leave a Feedback for us!</h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
