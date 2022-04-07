import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import BreadcrumbMenu from "./BreadcrumbMenu";
import wizard from "./images/wizard.png";

const Home = ({
  activeItem,
  setActiveItem,
  inBuild,
  setInBuild,
  buildTopic,
  setBuildTopic,
  race,
  setRace,
  setRaceData,
  dndClass,
  setdndClass,
}) => {
  const resetCharacterBuilder = () => {
    setRace(false);
    setRaceData(false);
    setdndClass(false);
    setInBuild(false);
    setBuildTopic(false);
    setActiveItem("home");
  };

  return (
    <div className="home">
      <BreadcrumbMenu activeItem={activeItem} setActiveItem={setActiveItem} />

      <img
        src={wizard}
        alt="wizard with a white beard and glowing staff"
        style={{ width: "10rem" }}
      />
      <h2>Welcome!</h2>
      <p>Step into another world and adventure with friends.</p>
      <p>
        Using D&#38;D's 5th Edition API, we'll build a character for a role
        playing game (RPG). Let's dive in!
      </p>
      {/* If you aren't in a build, */}
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
                setBuildTopic("race");
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
              }}
            >
              Make a New Character
            </Button>
            {/* <Button
              onClick={() => {
                resetCharacterBuilder();
                console.log("the states should reset");
              }}
            >
              Switch out of build mode
            </Button> */}
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
              }}
            >
              Make a New Character
            </Button>
            {/* <Button
              onClick={() => {
                setInBuild(false);
                setBuildTopic(false);
              }}
            >
              Switch out of build mode
            </Button> */}
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
                // Reset all of the other info
              }}
            >
              Make a New Character
            </Button>
            {/* <Button
              onClick={() => {
                setInBuild(false);
                setBuildTopic(false);
                // Reset all of the other info
              }}
            >
              Switch out of build mode
            </Button>*/}
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
              to="/character" // Go to the location of the build
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
              }}
            >
              Make a New Character
            </Button>
            {/* <Button
              onClick={() => {
                setInBuild(false);
                setBuildTopic(false);
                // Reset all of the other info
              }}
            >
              Switch out of build mode
            </Button> */}
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
              {/* <Button
                onClick={() => {
                  setInBuild(false);
                  setBuildTopic(false);
                  // Reset all of the other info
                }}
              >
                Switch out of build mode
              </Button> */}
            </div>
          </>
        )}
    </div>
  );
};

export default Home;
