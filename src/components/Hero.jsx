import { Container, Stack } from "react-bootstrap";

export default function Hero() {
  return (
    <div className="container d-section" id="hero">
      <div>
        <p className="second-font">Hi, my name is</p>
        <h1 className="bold l-gray">
          <strong>Shivam.</strong>
        </h1>
        <h2 className="bold d-gray">I am an aspiring web developer.</h2>
        <p>
          I'm a fourth year engineering student who is passionate about the web
          development. Currently I'm looking for opportunities to work. I'm
          interested to learn more about this awesome & complex world of
          programming.
        </p>
        <button className="s-button">Check out my projects!</button>
      </div>
    </div>
  );
}
