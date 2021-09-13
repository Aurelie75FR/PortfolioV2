import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Github from "./Pages/Github";
import Contact from "./Pages/Contact";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/apropos" component={About} />
        <Route exact path="/projets" component={Github} />
        <Route exact path="/contact" component={Contact} />

        <Route path="/" component={() => <div>Error 404</div>} />
      </Switch>
      {/* <Home/> */}
      {/* <About/> */}
      {/* <Github/> */}
      {/* <Contact/> */}
    </>
  );
}

export default App;
