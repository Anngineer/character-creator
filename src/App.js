import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import SideMenu from "./SideMenu";
import Home from "./Home";
import RacePage from "./RacePage";
import ClassPage from "./ClassPage";
import AbilityPage from "./AbilityPage";
import CharacterPage from "./CharacterPage";

function App() {
  const [activeItem, setActiveItem] = useState(null);
  function handleMenuClick(e, value) {
    setActiveItem(value);
  }

  const [race, setRace] = useState(null);
  const [raceData, setRaceData] = useState(null);
  const [dndClass, setdndClass] = useState(null);
  const [STR, setSTR] = useState(null);
  const [DEX, setDEX] = useState(null);
  const [CON, setCON] = useState(null);
  const [INT, setINT] = useState(null);
  const [WIS, setWIS] = useState(null);
  const [CHA, setCHA] = useState(null);
  const [inBuild, setInBuild] = useState(
    null
    // () => {
    //   // getting localState info
    //   const localInBuild = localStorage.getItem("inBuild");
    //   let response = null;
    //   if (localInBuild) {
    //     response = localInBuild;
    //   }
    //   return response;
    // }
    // localStorage.getItem("inBuild") ? true : false
    // null
  );
  const [buildTopic, setBuildTopic] = useState(
    null
    // () => {

    // getting local state info
    //   const localBuildTopic = localStorage.getItem("buildTopic");
    //   let response = null;
    //   if (localBuildTopic) {
    //     response = localBuildTopic;
    //   }

    //   return response;
    // }
  );
  return (
    <Router>
      <div className="App">
        <div className="main-section">
          <SideMenu handleMenuClick={handleMenuClick} activeItem={activeItem} />
          <div>
            {inBuild && <p>inBuild : "true"</p>}
            {!inBuild && <p>inBuild isn't saved</p>}
            {!buildTopic && <p>buildTopic isn't saved</p>}
            {buildTopic && <p>buildTopic is {buildTopic}</p>}
            {!activeItem && <p>activeItem isn't saved</p>}
            {activeItem && <p>activeItem is {activeItem}</p>}
            {!race && <p>Race isn't saved</p>}
            {race && <p>Race is {race}</p>}
            {!dndClass && <p>Class isn't saved</p>}
            {dndClass && <p>Class is {dndClass}</p>}
            {raceData && <p>raceData is {raceData.raceName}</p>}
          </div>
          <div className="content">
            <Switch />
            <Route exact path="/">
              <Home
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                inBuild={inBuild}
                setInBuild={setInBuild}
                buildTopic={buildTopic}
                setBuildTopic={setBuildTopic}
                setRace={setRace}
                race={race}
                setRaceData={setRaceData}
                dndClass={dndClass}
                setdndClass={setdndClass}
              />
            </Route>
            <Route exact path="/race">
              <RacePage
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                race={race}
                setRace={setRace}
                raceData={raceData}
                setRaceData={setRaceData}
                inBuild={inBuild}
                setInBuild={setInBuild}
                buildTopic={buildTopic}
                setBuildTopic={setBuildTopic}
              />
            </Route>
            <Route path="/classes">
              <ClassPage
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                dndClass={dndClass}
                setdndClass={setdndClass}
                inBuild={inBuild}
                setInBuild={setInBuild}
                buildTopic={buildTopic}
                setBuildTopic={setBuildTopic}
              />
            </Route>
            <Route path="/ability">
              <AbilityPage
                raceData={raceData}
                race={race}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                setSTR={setSTR}
                setDEX={setDEX}
                setCON={setCON}
                setINT={setINT}
                setWIS={setWIS}
                setCHA={setCHA}
                inBuild={inBuild}
                setInBuild={setInBuild}
                buildTopic={buildTopic}
                setBuildTopic={setBuildTopic}
              />
            </Route>
            <Route path="/character">
              {/* <div>Character Sheet</div> */}
              <CharacterPage
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                inBuild={inBuild}
                setInBuild={setInBuild}
                buildTopic={buildTopic}
                setBuildTopic={setBuildTopic}
              />
            </Route>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
