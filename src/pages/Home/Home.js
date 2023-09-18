import React from "react";
import "./Home.css";
import useIntersectionObserver from "../../components/IntersectionObserver";

export const Home = () => {
  useIntersectionObserver("hiddenHome", "showHome");

  return(
    <section className="containerHome">
      <div className="contentHome">
        <div className="leftColumnHome">
          <div className="photoPorsche"></div>
        </div>
        <section className="textHome">
          <section className="hiddenHome">
            <h1>ARG Serwis</h1>
            <p className="p1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              ac est euismod, accumsan lectus sit amet, consequat lacus. Aenean
              suscipit hendrerit euismod. Maecenas vitae porta magna, quis
              scelerisque justo. Nunc vestibulum a massa et blandit. Fusce
              posuere fermentum odio nec vehicula. Sed tristique massa mauris,
              non sodales ante dignissim et. Integer commodo varius libero, at
              eleifend arcu viverra vitae. Aenean imperdiet metus et dolor
              suscipit suscipit.
            </p>
            <br></br>
            <br></br>
            <p className="p2">
              Aenean dui arcu, dapibus a finibus in, malesuada quis lorem. Nulla
              auctor ante vel rhoncus tincidunt. Sed a pulvinar lectus. Etiam
              ornare nibh nec lacinia aliquam. In dictum quam vitae libero
              convallis, in fringilla orci facilisis. Morbi a arcu vel justo
              feugiat suscipit elementum in lacus. Donec auctor diam ac tellus
              rhoncus, et euismod lectus gravida. Praesent dictum varius dolor,
              pellentesque venenatis neque semper at. Ut non maximus tellus.
            </p>
          </section>
        </section>
      </div>
    </section>
  );
};
