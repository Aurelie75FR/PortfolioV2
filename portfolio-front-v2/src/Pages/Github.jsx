import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../styles/Github.css";

function Github() {
  // const datas = [
  //   {
  //     id :1 ,
  //     image : "",
  //     link :"",
  //     title : "",
  //     description : "",
  //   },
  //   {
  //     id : ,
  //     image : "",
  //     link :"",
  //     title : "",
  //     description : "",
  //   },
  //   {
  //     id : ,
  //     image : "",
  //     link :"",
  //     title : "",
  //     description : "",
  //   },
  //   {
  //     id : ,
  //     image : "",
  //     link :"",
  //     title : "",
  //     description : "",
  //   },
  //   {
  //     id : ,
  //     image : "",
  //     link :"",
  //     title : "",
  //     description : "",
  //   },
  //   {
  //     id : ,
  //     image : "",
  //     link :"",
  //     title : "",
  //     description : "",
  //   },
  // ]

  return (
    <div className="github" id="Github">
      <h2 className="title-code-project"> {"< "}Codes et Projets {" />"}</h2>
      <Carousel
        autoPlay
        infiniteLoop
        interval={5000}
        showStatus={false}
        showIndicators={true}
        showArrows={false}
        showThumbs={false}
        
      >
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
              href="https://github.com/Aurelie75FR/lab-react-ironbeers"
              className="git-title-link"
            >
              React Ironbeers
            </a>
            <p className="git-description">Beer Api et CRUD</p>
          </div>
        </div>
        {/* <div className="git-content">
          <img src="/images/IronBeer.PNG" alt="IronBeer" className="git-img" />
          <div className="git-overlay">
            <a
              href="https://github.com/Aurelie75FR/lab-ironbeers"
              className="git-title-link"
            >
              Node Ironbeers
            </a>
            <p className="git-description">Lorem ipsum dolor sit amet.</p>
          </div>
        </div> */}
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
            <p className="git-description">Entrainement sur le Router et CRUD</p>
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
            <p className="git-description">Lorem ipsum dolor sit amet.</p>
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
            <p className="git-description">Entrainement sur les methods avec Mongoose</p>
          </div>
        </div>
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
      </Carousel>
      <div className="wave-three"></div>
    </div>
  );
}

export default Github;
