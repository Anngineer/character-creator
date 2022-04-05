import AbilityTable from "./AbilityTable";
import { useState } from "react";
import Backend from "./Backend";
import RollScripts from "./RollScripts";
import BreadcrumbMenu from "./BreadcrumbMenu";

const AbilityPage = ({ activeItem, setActiveItem }) => {
  const [race, setRace] = useState(null);
  const [raceData, setRaceData] = useState(null);
  const [rolls, setRolls] = useState([null, null, null, null, null, null]);
  const [click, setClick] = useState(0);
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
      <BreadcrumbMenu activeItem={activeItem} setActiveItem={setActiveItem} />

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
      <button onClick={() => handleButtonClick("elf")}>Set Race as elf</button>

      <RollScripts
        rolls={rolls}
        setRolls={setRolls}
        click={click}
        setClick={setClick}
        setActiveItem={setActiveItem}
      />
      {race && <p>Character is a {race}.</p>}
      <AbilityTable race={race} raceData={raceData} rolls={rolls} />
    </div>
  );
};
export default AbilityPage;
