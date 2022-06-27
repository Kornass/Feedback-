import Card from "./shared/Card";
import { Link } from "react-router-dom";
function About() {
  return (
    <Card>
      <div className="about">
        <h1>About</h1>
        <p>Rate your experience with us</p>
        <p>Version 1.0.1</p>
        <p>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </p>
      </div>
    </Card>
  );
}

export default About;
