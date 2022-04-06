import AbilityTable from "./AbilityTable";
import { useState } from "react";
import Backend from "./Backend";
import RollScripts from "./RollScripts";
import BreadcrumbMenu from "./BreadcrumbMenu";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const AbilityPage = ({
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
  const [race, setRace] = useState(null);
  const [raceData, setRaceData] = useState(null);
  const [rolls, setRolls] = useState([null, null, null, null, null, null]);
  const [click, setClick] = useState(0);
  const [doneRolling, setDoneRolling] = useState(false);
  function handleButtonClick(race) {
    // setDnDClass("cleric");
    setRace(race);

    handleRaceData(race);
  }
  function handleRaceData(race) {
    if (race === "human") {
      setRaceData(Backend.humanRace);
    } else if (race === "half-orc") {
      setRaceData(Backend.halforcRace);
    } else if (race === "gnome") {
      setRaceData(Backend.gnomeRace);
    } else if (race === "elf") {
      setRaceData(Backend.elfRace);
    }
  }

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

          <h1>Ability Stats</h1>
          <button onClick={() => handleButtonClick("human")}>
            Set Race as human
          </button>
          <button onClick={() => handleButtonClick("half-orc")}>
            Set Race as half-orc
          </button>
          <button onClick={() => handleButtonClick("gnome")}>
            Set Race as gnome
          </button>
          <button onClick={() => handleButtonClick("elf")}>
            Set Race as elf
          </button>

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
          {race && <p>Character is a {race}.</p>}
          <AbilityTable race={race} raceData={raceData} rolls={rolls} />
        </div>
      )}
    </div>
  );
};
export default AbilityPage;
