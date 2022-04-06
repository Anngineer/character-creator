// import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import BreadcrumbMenu from "./BreadcrumbMenu";
import RaceAccordianComponents from "./RaceAccordianComponents";
import RaceRadio from "./RaceRadio";
import useGet from "./useGet";

const RacePage = ({
  activeItem,
  setActiveItem,
  inBuild,
  setInBuild,
  buildTopic,
  setBuildTopic,
  race,
  setRace,
}) => {
  // useEffect(() => {
  //   if (activeItem !== "race") {
  //     setActiveItem("race");
  //   }
  // }, []);
  // Instead of changing the active Item, if it doesn't match up, have an error link that sends them back to the home page.
  const {
    data: raceData,
    error,
    isPending,
  } = useGet("https://www.dnd5eapi.co/api/races");
  const [formValue, setFormValue] = useState(null);
  return (
    <div className="race-page">
      {(activeItem !== "race" || !activeItem) && (
        <div style={{ width: "70%" }}>
          <p style={{ fontSize: "1.2rem" }}>
            {" "}
            Whoops! It looks like you're on the wrong step.
            <br /> Let's jump back home and navigate from there.
          </p>

          <Button as={Link} to="/" color="orange" style={{ color: "#080a21" }}>
            Return Home
          </Button>
        </div>
      )}
      {activeItem === "race" && (
        <div>
          <BreadcrumbMenu
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />

          <h1>Races</h1>
          <p>Have you wanted to be elegant as an elf or strong as an orc?</p>
          <p>
            Explore four of the races. At the bottom of the page, choose which
            you'd like to be.
          </p>
          <p>{formValue}</p>
          <RaceAccordianComponents />
          <RaceRadio
            race={race}
            setRace={setRace}
            formValue={formValue}
            setFormValue={setFormValue}
          />

          {isPending && (
            <Button
              // onClick={() => setActiveItem("ability")}

              // to="/ability"
              color="orange"
              basic
              style={{ color: "#080a21" }}
            >
              Data is loading...
            </Button>
          )}
          {raceData && !formValue && (
            <Button color="orange" style={{ color: "#080a21" }} basic>
              Click One of The Races Above
            </Button>
          )}
          {raceData && formValue && (
            <Button
              // onClick={() => setActiveItem("classes")}
              onClick={() => {
                setActiveItem("classes");
                setRace(formValue);
                setBuildTopic("classes");
                localStorage.setItem("race", formValue);
                localStorage.setItem("buildTopic", "classes");
              }}
              as={Link}
              to="/classes"
              color="orange"
              style={{ color: "#080a21" }}
            >
              I have chosen!
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
export default RacePage;
