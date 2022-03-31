import { Button } from "semantic-ui-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BreadcrumbMenu from "./BreadcrumbMenu";

const Home = ({ activeItem, setActiveItem }) => {
  useEffect(() => {
    if (activeItem !== "home") {
      setActiveItem("home");
    }
  }, []);
  return (
    <div className="home">
      <BreadcrumbMenu activeItem={activeItem} setActiveItem={setActiveItem} />

      <h2>Welcome!</h2>
      <p>Let's make a character.</p>
      <p>
        About: This is a short role-playing game (rpg) that uses parts of
        Dungeons and Dragons 5th Edition API.
      </p>
      {/* If no local storage exists, */}
      <Button basic color="orange">
        Intro Guide
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
      {/* If a local storage exists */}
      {/* Welcome back! It looks like you have a character in progress. 
      button - jump back into our character
      button - start a new character */}
      {/* If they choose to jump in, then determine what kind of local storage key(return to page: "race") is held and move to that location. */}
    </div>
  );
};

export default Home;
