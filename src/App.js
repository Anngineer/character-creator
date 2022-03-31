import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import SideMenu from "./SideMenu";
import Home from "./Home";
import RacePage from "./RacePage";
import ClassPage from "./ClassPage";

function App() {
  const [activeItem, setActiveItem] = useState(null);
  function handleMenuClick(e, value) {
    setActiveItem(value);
  }
  return (
    <Router>
      <div className="App">
        <div className="main-section">
          <SideMenu handleMenuClick={handleMenuClick} activeItem={activeItem} />
          <div className="content">
            <Switch />
            <Route exact path="/">
              <Home activeItem={activeItem} setActiveItem={setActiveItem} />
            </Route>
            <Route exact path="/race">
              <RacePage activeItem={activeItem} setActiveItem={setActiveItem} />
            </Route>
            <Route path="/classes">
              <ClassPage
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
            </Route>
            <Route path="/ability">
              <div>Ability</div>
            </Route>
            <Route path="/description">
              <div>Descriptions</div>
            </Route>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
