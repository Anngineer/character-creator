import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import SideMenu from "./SideMenu";
import Home from "./Home";
import RacePage from "./RacePage";
import ClassPage from "./ClassPage";
import AbilityPage from "./AbilityPage";
import CharacterPage from "./CharacterPage";
import ScrollToTop from "./ScrollToTop";

function App() {
  const [activeItem, setActiveItem] = useState("home");
  function handleMenuClick(e, value) {
    setActiveItem(value);
  }

  const [race, setRace] = useState(null);
  const [raceData, setRaceData] = useState(null);
  const [dndClass, setdndClass] = useState(null);
  const [abilities, setAbilities] = useState([
    { STR: 0 },
    { DEX: 0 },
    { CON: 0 },
    { INT: 0 },
    { WIS: 0 },
    { CHA: 0 },
  ]);

  const [inBuild, setInBuild] = useState(null);
  const [buildTopic, setBuildTopic] = useState(null);
  return (
    <BrowserRouter
      basename={`/character-creator` || "" || window.location.pathname}
    >
      <ScrollToTop>
        <div className="App">
          <div className="main-section">
            <SideMenu
              handleMenuClick={handleMenuClick}
              activeItem={activeItem}
            />
            {/* <div>
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
          </div> */}
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
                  setBuildTopic={setBuildTopic}
                />
              </Route>
              <Route path="/classes">
                <ClassPage
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                  dndClass={dndClass}
                  setdndClass={setdndClass}
                  setBuildTopic={setBuildTopic}
                />
              </Route>
              <Route path="/ability">
                <AbilityPage
                  raceData={raceData}
                  race={race}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                  abilities={abilities}
                  setAbilities={setAbilities}
                  setBuildTopic={setBuildTopic}
                />
              </Route>
              <Route path="/character">
                <CharacterPage
                  race={race}
                  dndClass={dndClass}
                  abilities={abilities}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                  setBuildTopic={setBuildTopic}
                />
              </Route>
            </div>
          </div>
          <Footer />
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
