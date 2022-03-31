import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import BreadcrumbMenu from "./BreadcrumbMenu";
import ClassAccordianComponents from "./ClassAccordianComponents";

const ClassPage = ({ activeItem, setActiveItem }) => {
  useEffect(() => {
    if (activeItem !== "classes") {
      setActiveItem("classes");
    }
  }, []);
  return (
    <div className="classes-page">
      <BreadcrumbMenu activeItem={activeItem} setActiveItem={setActiveItem} />

      <h1>Class</h1>
      <p>
        Step into another world and decide what kind of class you want to be
        there.{" "}
      </p>
      <p>
        Explore four of the classes. At the bottom of the page, choose which
        you'd like to be.
      </p>
      <ClassAccordianComponents />
      <Button
        onClick={() => setActiveItem("ability")}
        as={Link}
        to="/ability"
        color="orange"
        style={{ color: "#080a21" }}
      >
        Temporary Button
      </Button>
    </div>
  );
};
export default ClassPage;
