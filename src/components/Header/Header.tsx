import Navigation from "../Navigation/Navigation";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <h1>
        Roadmapper<sup style={{ fontSize: "8px" }}>TM</sup>
      </h1>
      <Navigation />
    </header>
  );
}
