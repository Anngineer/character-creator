import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import SideMenu from "./SideMenu";
import Home from "./Home";
import RacePage from "./RacePage";
import ClassPage from "./ClassPage";
import AbilityPage from "./AbilityPage";

function App() {
  const [activeItem, setActiveItem] = useState(null);
  function handleMenuClick(e, value) {
    setActiveItem(value);
  }
  const [race, setRace] = useState(null);
  const [dndClass, setdndClass] = useState(null);
  const [STR, setSTR] = useState(null);
  const [DEX, setDEX] = useState(null);
  const [CON, setCON] = useState(null);
  const [INT, setINT] = useState(null);
  const [WIS, setWIS] = useState(null);
  const [CHA, setCHA] = useState(null);
  const [inBuild, setInBuild] = useState(null);
  const [buildTopic, setBuildTopic] = useState(null);
  return (
    <Router>
      <div className="App">
        <div className="main-section">
          <SideMenu handleMenuClick={handleMenuClick} activeItem={activeItem} />
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
              />
            </Route>
            <Route exact path="/race">
              <RacePage
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                race={race}
                setRace={setRace}
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
              <div>Character Sheet</div>
            </Route>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
