// import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import BreadcrumbMenu from "./BreadcrumbMenu";
import RaceAccordianComponents from "./RaceAccordianComponents";
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
  return (
    <div className="race-page">
      <BreadcrumbMenu activeItem={activeItem} setActiveItem={setActiveItem} />

      <h1>Races</h1>
      <p>
        Step into another world and decide what kind of race you want to be
        there.{" "}
      </p>
      <p>
        Explore four of the races. At the bottom of the page, choose which you'd
        like to be.
      </p>
      <RaceAccordianComponents />
      {isPending && (
        <Button
          // onClick={() => setActiveItem("ability")}

          // to="/ability"
          color="orange"
          style={{ color: "#080a21" }}
        >
          Data is loading...
        </Button>
      )}
      {raceData && (
        <Button
          onClick={() => setActiveItem("classes")}
          as={Link}
          to="/classes"
          color="orange"
          style={{ color: "#080a21" }}
        >
          Temporary Button
        </Button>
      )}
    </div>
  );
};
export default RacePage;
