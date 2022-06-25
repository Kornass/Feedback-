import Card from "./shared/Card";
import { Link } from "react-router-dom";
function About() {
  return (
    <Card>
      <div className="about">
        <h1>About</h1>
        <p>
          <Link to="/">Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default About;
