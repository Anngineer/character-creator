// import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import BreadcrumbMenu from "./BreadcrumbMenu";
import ClassAccordianComponents from "./ClassAccordianComponents";
import useGet from "./useGet";
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
  // useEffect(() => {
  //   if (activeItem !== "classes") {
  //     setActiveItem("classes");
  //   }
  // }, []);
  // Instead of changing the active item, return something else that says go back to the first page and restart the process.
  const {
    data: classesData,
    error,
    isPending,
  } = useGet("https://www.dnd5eapi.co/api/classes");
  return (
    <div className="classes-page">
      <BreadcrumbMenu activeItem={activeItem} setActiveItem={setActiveItem} />

      <h1>Classes</h1>
      <p>Time to choose your occupation.</p>
      <p>
        Devote yourself to being a healer or destroy to your enemies through
        pure rage!
      </p>
      <p>
        Here are four possible paths for your character. Pick one at the bottom
        of the page.
      </p>
      <ClassAccordianComponents />
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
      {classesData && (
        <Button
          onClick={() => setActiveItem("ability")}
          as={Link}
          to="/ability"
          color="orange"
          style={{ color: "#080a21" }}
        >
          Temporary Button
        </Button>
      )}
    </div>
  );
};
export default ClassPage;
