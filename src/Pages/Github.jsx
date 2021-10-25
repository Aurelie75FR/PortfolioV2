import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../styles/Github.css";

function Github() {
  const labs = [
    {
      image: "/images/PizzaBuild.PNG",
      link: "https://github.com/Aurelie75FR/lab-dom-pizza-builder",
      title: "JS DOM Pizza Builder",
      description: "Pur Javascript DOM et logique",
    },
    {
      image: "/images/JS-Viking.PNG",
      link: "https://github.com/Aurelie75FR/lab-javascript-vikings",
      title: "JS Vikings",
      description: "JS entrainement sur les class",
    },
    {
      image: "/images/tripleTriad.PNG",
      link: "https://eloquent-euler-5df74e.netlify.app/",
      title: "JS Mini Jeux",
      description: "Jeux de cartes inspiré de FF8",
    },
    {
      image: "/images/mongooseRecipes.PNG",
      link: "https://github.com/Aurelie75FR/lab-mongoose-recipes",
      title: "Node Mongoose Recipes",
      description: "Entrainement sur les methods avec Mongoose",
    },
    {
      image: "/images/Artistify.PNG",
      link: "https://github.com/Aurelie75FR/artistify",
      title: "Node Artistify",
      description: "Authentification et CRUD",
    },
    {
      image: "/images/IronBeer.PNG",
      link: "https://github.com/Aurelie75FR/lab-ironbeers",
      title: "Node Ironbeers",
      description: "Beer API et CRUD",
    },
    {
      image: "/images/IronCine.PNG",
      link: "https://github.com/Aurelie75FR/lab-express-cinema",
      title: "Node Express Cinema",
      description: "Entrainement sur le Router et CRUD",
    },
    {
      image: "/images/luvIt.PNG",
      link: "https://luvit-social-app.herokuapp.com/",
      title: "Node LuvIt",
      description: "Application Marque-pages | Pinterest Clone",
    },
    {
      image: "/images/ReactIronBeers.PNG",
      link: "https://github.com/Aurelie75FR/lab-react-ironbeers",
      title: "React Ironbeers",
      description: "React Beer API et CRUD",
    },
    {
      image: "/images/wikiCounties.PNG",
      link: "https://github.com/Aurelie75FR/lab-wiki-countries",
      title: "React Wiki Countries",
      description: "Entrainement sur match.params.history/react-router-dom",
    },
    {
      image: "/images/IronContact.PNG",
      link: "https://github.com/Aurelie75FR/lab-react-ironcontacts",
      title: "React IronContacts",
      description: "Usage des methods et searchBar",
    },
    {
      image: "",
      Link: "https://github.com/Aurelie75FR/labRedoHooks",
      title: "Lab Redo Hooks",
      description: "Refactorisation des labs React class component en hooks",
    },
  ];

  return (
    <div className="github">
      <h2 className="title-code-project">
        {"< "}Codes et Projets{" />"}
      </h2>
      <p className="github-tips">Lien à cliquer sur le titre</p>
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
        {labs.map((el, index) => {
          return (
            <div className="git-content" key={index}>
              <img src={el.image} alt={el.title} className="git-img" />
              <div className="git-overlay">
                <a href={el.link} className="git-title-link">
                  {el.title}
                </a>
                <p className="git-description">{el.description}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
      <div className="wave-three"></div>
    </div>
  );
}

export default Github;
