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
  race,
  setRace,
  dndClass,
  setdndClass,
}) => {
  // useEffect(() => {
  //   if (activeItem !== "home") {
  //     setActiveItem("home");
  //   }
  // }, []);
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
      {!inBuild && (
        <div className="button-wrapper">
          <Button basic color="orange">
            Intro Tutorial
          </Button>
          <Button
            color="orange"
            style={{ color: "#080a21" }}
            as={Link}
            to="/race"
            onClick={() => {
              setActiveItem("race");
              setInBuild(true);
              setBuildTopic("race");
              localStorage.setItem("inBuild", "true");
              localStorage.setItem("buildTopic", "race");
            }}
          >
            Make a Character
          </Button>
        </div>
      )}
      {/* In build in race */}

      {inBuild && buildTopic === "race" && (
        <>
          <h4>Note: It looks like you already are building a character.</h4>
          <div className="button-wrapper">
            <Button basic color="orange">
              Intro Tutorial
            </Button>
            <Button
              color="orange"
              style={{ color: "#080a21" }}
              as={Link}
              to="/race" // Go to the location of the build
              onClick={() => {
                setActiveItem("race");
                // setInBuild(false);
                setBuildTopic("race");
                localStorage.setItem("buildTopic", "race");
              }}
            >
              Continue Character
            </Button>
            <Button
              color="orange"
              style={{ color: "#080a21" }}
              as={Link}
              to="/race"
              onClick={() => {
                setActiveItem("race");
                setInBuild(true);
                setBuildTopic("race");
                // Reset all of the other info
                localStorage.setItem("buildTopic", "race");
              }}
            >
              Make a New Character
            </Button>
            <Button
              onClick={() => {
                setInBuild(false);
                setBuildTopic(false);
                setActiveItem("home");
                setRace(false);
                setdndClass(false);

                // Reset all of the other info
                localStorage.removeItem("inBuild");
                localStorage.removeItem("buildTopic");
                localStorage.removeItem("dndClass");
                localStorage.removeItem("race");
              }}
            >
              Switch out of build mode
            </Button>
          </div>
        </>
      )}
      {/* In build in race */}
      {inBuild && buildTopic === "classes" && (
        <>
          <h4>Note: It looks like you have a character in progress.</h4>
          <div className="button-wrapper">
            <Button basic color="orange">
              Intro Tutorial
            </Button>
            <Button
              color="orange"
              style={{ color: "#080a21" }}
              as={Link}
              to="/classes" // Go to the location of the build
              onClick={() => {
                setActiveItem("classes");
                setInBuild(true);
                setBuildTopic("classes");
              }}
            >
              Continue Character
            </Button>
            <Button
              color="orange"
              style={{ color: "#080a21" }}
              as={Link}
              to="/race"
              onClick={() => {
                setActiveItem("race");
                setInBuild(true);
                setBuildTopic("race");
                // Reset all of the other info
                localStorage.setItem("buildTopic", "race");
              }}
            >
              Make a New Character
            </Button>
            <Button
              onClick={() => {
                setInBuild(false);
                setBuildTopic(false);

                localStorage.removeItem("inBuild");
                localStorage.removeItem("buildTopic");

                // Reset all of the other info
              }}
            >
              Switch out of build mode
            </Button>
          </div>
        </>
      )}
      {/* when buildTopic is Ability */}
      {inBuild && buildTopic === "ability" && (
        <>
          <h4>Note: It looks like you already are building a character.</h4>
          <div className="button-wrapper">
            <Button basic color="orange">
              Intro Tutorial
            </Button>
            <Button
              color="orange"
              style={{ color: "#080a21" }}
              as={Link}
              to="/ability" // Go to the location of the build
              onClick={() => {
                setActiveItem("ability");
                setInBuild(true);
                setBuildTopic("ability");
              }}
            >
              Continue Character
            </Button>
            <Button
              color="orange"
              style={{ color: "#080a21" }}
              as={Link}
              to="/race"
              onClick={() => {
                setActiveItem("race");
                setInBuild(true);
                setBuildTopic("race");
                localStorage.setItem("buildTopic", "race");

                // Reset all of the other info
              }}
            >
              Make a New Character
            </Button>
            <Button
              onClick={() => {
                setInBuild(false);
                setBuildTopic(false);

                // Reset all of the other info
                localStorage.removeItem("inBuild");
                localStorage.removeItem("buildTopic");
              }}
            >
              Switch out of build mode
            </Button>
          </div>
        </>
      )}
      {/* when buildTopic is character */}
      {inBuild && buildTopic === "character" && (
        <>
          <h4>Note: It looks like you already are building a character.</h4>
          <div className="button-wrapper">
            <Button basic color="orange">
              Intro Tutorial
            </Button>
            <Button
              color="orange"
              style={{ color: "#080a21" }}
              as={Link}
              to="/ability" // Go to the location of the build
              onClick={() => {
                setActiveItem("character");
                setInBuild(true);
                setBuildTopic("character");
              }}
            >
              Continue Character
            </Button>
            <Button
              color="orange"
              style={{ color: "#080a21" }}
              as={Link}
              to="/race"
              onClick={() => {
                setActiveItem("race");
                setInBuild(true);
                setBuildTopic("race");
                // Reset all of the other info
                localStorage.setItem("buildTopic", "race");
              }}
            >
              Make a New Character
            </Button>
            <Button
              onClick={() => {
                setInBuild(false);
                setBuildTopic(false);
                // Reset all of the other info
                localStorage.removeItem("inBuild");
                localStorage.removeItem("buildTopic");
              }}
            >
              Switch out of build mode
            </Button>
          </div>
        </>
      )}
      {/* we're in build but there isn't a buildTopic */}
      {inBuild &&
        buildTopic !== "race" &&
        buildTopic !== "classes" &&
        buildTopic !== "ability" &&
        buildTopic !== "character" && (
          <>
            <div className="button-wrapper">
              <Button basic color="orange">
                Intro Tutorial
              </Button>

              <Button
                color="orange"
                style={{ color: "#080a21" }}
                as={Link}
                to="/race"
                onClick={() => {
                  setActiveItem("race");
                  setInBuild(true);
                  setBuildTopic("race");
                  // Reset all of the other info
                  localStorage.setItem("buildTopic", "race");
                }}
              >
                Make a New Character
              </Button>
              <Button
                onClick={() => {
                  setInBuild(false);
                  setBuildTopic(false);
                  // Reset all of the other info
                  localStorage.removeItem("inBuild");
                  localStorage.removeItem("buildTopic");
                }}
              >
                Switch out of build mode
              </Button>
            </div>
          </>
        )}
      {/* If a local storage exists */}
      {/* Welcome back! It looks like you have a character in progress. 
      button - jump back into our character
      button - start a new character */}
      {/* If they choose to jump in, then determine what kind of local storage key(return to page: "race") is held and move to that location. */}
    </div>
  );
};

export default Home;
