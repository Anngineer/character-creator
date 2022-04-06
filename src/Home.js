import { Button } from "semantic-ui-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BreadcrumbMenu from "./BreadcrumbMenu";

const Home = ({
  activeItem,
  setActiveItem,
  inBuild,
  setInBuild,
  buildTopic,
  setBuildTopic,
}) => {
  useEffect(() => {
    if (activeItem !== "home") {
      setActiveItem("home");
    }
  }, []);
  return (
    <div className="home">
      <BreadcrumbMenu activeItem={activeItem} setActiveItem={setActiveItem} />

      <h2>Welcome!</h2>
      <p>Step into another world and adventure with friends.</p>
      <p>
        Using D&#38;D's 5th Edition API, we'll build a character for a role
        playing game (RPG).
      </p>
      {/* If no local storage exists, */}
      <div className="button-wrapper">
        <Button basic color="orange">
          Intro Tutorial
        </Button>
        <Button
          color="orange"
          style={{ color: "#080a21" }}
          as={Link}
          to="/race"
          onClick={() => setActiveItem("race")}
        >
          Make a Character
        </Button>
      </div>
      {/* If a local storage exists */}
      {/* Welcome back! It looks like you have a character in progress. 
      button - jump back into our character
      button - start a new character */}
      {/* If they choose to jump in, then determine what kind of local storage key(return to page: "race") is held and move to that location. */}
    </div>
  );
};

export default Home;
