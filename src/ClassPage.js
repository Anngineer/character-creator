// import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import BreadcrumbMenu from "./BreadcrumbMenu";
import ClassAccordianComponents from "./ClassAccordianComponents";
import useGet from "./useGet";
import DndClassRadio from "./DndClassRadio";
const ClassPage = ({
  activeItem,
  setActiveItem,
  inBuild,
  setInBuild,
  buildTopic,
  setBuildTopic,
  dndClass,
  setdndClass,
}) => {
  const [formValue, setFormValue] = useState(null);
  const {
    data: classesData,
    error,
    isPending,
  } = useGet("https://www.dnd5eapi.co/api/classes");
  return (
    <div className="classes-page">
      {(activeItem !== "classes" || !activeItem) && (
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

      {activeItem === "classes" && (
        <div>
          <BreadcrumbMenu
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />

          <h1>Classes</h1>
          <p>Time to choose your occupation.</p>
          <p>
            Devote yourself to being a healer or destroy to your enemies through
            pure rage!
          </p>
          <p>
            Here are four possible paths for your character. Pick one at the
            bottom of the page.
          </p>
          <ClassAccordianComponents />
          <DndClassRadio
            dndClass={dndClass}
            setdndClass={setdndClass}
            formValue={formValue}
            setFormValue={setFormValue}
          />

          {isPending && (
            <Button
              // onClick={() => setActiveItem("ability")}
              basic
              // to="/ability"
              color="orange"
              style={{ color: "#080a21" }}
            >
              Data is loading...
            </Button>
          )}
          {classesData && !formValue && (
            <Button basic color="orange" style={{ color: "#080a21" }}>
              Select one of the Classes
            </Button>
          )}
          {classesData && formValue && (
            <Button
              onClick={() => {
                setActiveItem("ability");
                setBuildTopic("ability");
                setdndClass(formValue);
                localStorage.setItem("dndClass", formValue);
                localStorage.setItem("buildTopic", "ability");
                console.log(
                  "changed active item, buildtopic, and local storage was set buildTopic:ability"
                );
              }}
              as={Link}
              to="/ability"
              color="orange"
              style={{ color: "#080a21" }}
            >
              Become a {formValue}!
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
export default ClassPage;
