import AbilityTable from "./AbilityTable";
import { useState } from "react";
import RollScripts from "./RollScripts";
import BreadcrumbMenu from "./BreadcrumbMenu";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const AbilityPage = ({
  race,
  raceData,
  activeItem,
  setActiveItem,
  setBuildTopic,
  setAbilities,
}) => {
  const [rolls, setRolls] = useState([null, null, null, null, null, null]);
  const [click, setClick] = useState(0);
  const [doneRolling, setDoneRolling] = useState(false);

  return (
    <div className="AbilityPage">
      {(activeItem !== "ability" || !activeItem) && (
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

      {activeItem === "ability" && (
        <div>
          <BreadcrumbMenu
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <h2>Ability Stats</h2>
          {!doneRolling && (
            <p>Roll the die to let fate determine your abilities!</p>
          )}
          {doneRolling && <p>Fate has determined your abilities!</p>}
          <RollScripts
            rolls={rolls}
            setRolls={setRolls}
            click={click}
            setClick={setClick}
            doneRolling={doneRolling}
            setDoneRolling={setDoneRolling}
            setActiveItem={setActiveItem}
            setBuildTopic={setBuildTopic}
          />

          <AbilityTable
            race={race}
            raceData={raceData}
            doneRolling={doneRolling}
            rolls={rolls}
            setAbilities={setAbilities}
            setActiveItem={setActiveItem}
            setBuildTopic={setBuildTopic}
          />
        </div>
      )}
    </div>
  );
};
export default AbilityPage;
