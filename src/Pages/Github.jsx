import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../styles/Github.css";

function Github() {
  return (
    <div className="github" >
      <h2 className="title-code-project">
        {"< "}Codes et Projets{" />"}
      </h2>
      <p className="github-tips" >Lien à cliquer sur le titre</p>
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showStatus={false}
        showIndicators={true}
        showArrows={false}
        showThumbs={false}
        // dynamicHeight={true}
      >
        <div className="git-content">
          <img
            src="/images/PizzaBuild.PNG"
            alt="js dom pizza"
            className="git-img"
          />
          <div className="git-overlay">
            <a
              href="https://github.com/Aurelie75FR/lab-dom-pizza-builder"
              className="git-title-link"
            >
              JS DOM Pizza Builder
            </a>
            <p className="git-description">Pur Javascript DOM et logique</p>
          </div>
        </div>
        <div className="git-content">
          <img src="/images/JS-Viking.PNG" alt="Viking" className="git-img" />
          <div className="git-overlay">
            <a
              href="https://github.com/Aurelie75FR/lab-javascript-vikings"
              className="git-title-link"
            >
              JS Vikings
            </a>
            <p className="git-description">JS entrainement sur les class</p>
          </div>
        </div>
        <div className="git-content">
          <img
            src="/images/tripleTriad.PNG"
            alt="triple triad"
            className="git-img"
          />
          <div className="git-overlay">
            <a
              href="https://eloquent-euler-5df74e.netlify.app/"
              className="git-title-link"
            >
              JS Mini Jeux
            </a>
            <p className="git-description">Jeux de cartes inspiré de FF8</p>
          </div>
        </div>
        <div className="git-content">
          <img
            src="/images/mongooseRecipes.PNG"
            alt="mongoose"
            className="git-img"
          />
          <div className="git-overlay">
            <a
              href="https://github.com/Aurelie75FR/lab-mongoose-recipes"
              className="git-title-link"
            >
              Node Mongoose Recipes
            </a>
            <p className="git-description">
              Entrainement sur les methods avec Mongoose
            </p>
          </div>
        </div>
        <div className="git-content">
          <img
            src="/images/Artistify.PNG"
            alt="artistify"
            className="git-img"
          />
          <div className="git-overlay">
            <a
              href="https://github.com/Aurelie75FR/artistify"
              className="git-title-link"
            >
              Node Artistify
            </a>
            <p className="git-description">Authentification et CRUD</p>
          </div>
        </div>
        <div className="git-content">
          <img src="/images/IronBeer.PNG" alt="IronBeer" className="git-img" />
          <div className="git-overlay">
            <a
              href="https://github.com/Aurelie75FR/lab-ironbeers"
              className="git-title-link"
            >
              Node Ironbeers
            </a>
            <p className="git-description">Beer API et CRUD</p>
          </div>
        </div>
        <div className="git-content">
          <img
            src="/images/IronCine.PNG"
            alt="Express Cinema"
            className="git-img"
          />
          <div className="git-overlay">
            <a
              href="https://github.com/Aurelie75FR/lab-express-cinema"
              className="git-title-link"
            >
              Node Express Cinema
            </a>
            <p className="git-description">
              Entrainement sur le Router et CRUD
            </p>
          </div>
        </div>
        <div className="git-content">
          <img src="/images/luvIt.PNG" alt="luvIt" className="git-img" />
          <div className="git-overlay">
            <a
              href="https://github.com/Aurelie75FR/lab-ironbeers"
              className="git-title-link"
            >
              Node LuvIt
            </a>
            <p className="git-description">
              Application Marque-pages | Pinterest Clone
            </p>
          </div>
        </div>
        <div className="git-content">
          <img
            src="/images/ReactIronBeers.PNG"
            alt="IronBeer"
            className="git-img"
          />
          <div className="git-overlay">
            <a
              href="https://github.com/Aurelie75FR/lab-react-ironbeers"
              className="git-title-link"
            >
              React Ironbeers
            </a>
            <p className="git-description">React Beer Api et CRUD</p>
          </div>
        </div>
        <div className="git-content">
          <img
            src="/images/wikiCounties.PNG"
            alt="wiki Countries"
            className="git-img"
          />
          <div className="git-overlay">
            <a
              href="https://github.com/Aurelie75FR/lab-wiki-countries"
              className="git-title-link"
            >
              React Wiki Countries
            </a>
            <p className="git-description">Api et Entrainement sur history</p>
          </div>
        </div>
        <div className="git-content">
          <img
            src="/images/IronContact.PNG"
            alt="react ironcontacts"
            className="git-img"
          />
          <div className="git-overlay">
            <a
              href="https://github.com/Aurelie75FR/lab-react-ironcontacts"
              className="git-title-link"
            >
              React IronContacts
            </a>
            <p className="git-description">Usage des methods et searchBar</p>
          </div>
        </div>
      </Carousel>
      <div className="wave-three"></div>
    </div>
  );
}

export default Github;
