import AbilityTable from "./AbilityTable";
import { useState } from "react";
import Backend from "./Backend";
import RollScripts from "./RollScripts";
import BreadcrumbMenu from "./BreadcrumbMenu";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const AbilityPage = ({
  race,
  raceData,
  setRaceData,
  activeItem,
  setActiveItem,
  inBuild,
  setInBuild,
  buildTopic,
  setBuildTopic,
  setSTR,
  setDEX,
  setCON,
  setINT,
  setWIS,
  setCHA,
}) => {
  // const [race, setRace] = useState(null);
  // const [raceData, setRaceData] = useState(null);
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

          {doneRolling && (
            <p>
              Fate has determined your abilities! Let's see your whole character
              by clicking below.
            </p>
          )}
          <RollScripts
            rolls={rolls}
            setRolls={setRolls}
            click={click}
            setClick={setClick}
            doneRolling={doneRolling}
            setDoneRolling={setDoneRolling}
            setActiveItem={setActiveItem}
            setBuildTopic={setBuildTopic}
            setSTR={setSTR}
            setDEX={setDEX}
            setCON={setCON}
            setINT={setINT}
            setWIS={setWIS}
            setCHA={setCHA}
          />

          <AbilityTable
            race={race}
            raceData={raceData}
            setRaceData={setRaceData}
            rolls={rolls}
          />
        </div>
      )}
    </div>
  );
};
export default AbilityPage;
