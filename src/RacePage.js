import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import BreadcrumbMenu from "./BreadcrumbMenu";
import RaceAccordianComponents from "./RaceAccordianComponents";

const RacePage = ({ activeItem, setActiveItem }) => {
  useEffect(() => {
    if (activeItem !== "race") {
      setActiveItem("race");
    }
  }, []);
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
      <Button
        onClick={() => setActiveItem("classes")}
        as={Link}
        to="/classes"
        color="orange"
        style={{ color: "#080a21" }}
      >
        Temporary Button
      </Button>
    </div>
  );
};
export default RacePage;
