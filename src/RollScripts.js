import { useState } from "react";
import dice1 from "./images/dice1.png";
import dice2 from "./images/dice2.png";
import dice3 from "./images/dice3.png";
import dice4 from "./images/dice4.png";
import dice5 from "./images/dice5.png";
import dice6 from "./images/dice6.png";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
// import { Button, Transition, Image } from "semantic-ui-react";

const RollScripts = ({
  rolls,
  setRolls,
  click,
  setClick,
  doneRolling,
  setDoneRolling,
  setActiveItem,
  setBuildTopic,
}) => {
  const [diceA, setDiceA] = useState(null);
  const [diceB, setDiceB] = useState(null);
  const [diceC, setDiceC] = useState(null);
  const [diceD, setDiceD] = useState(null);
  const [diceE, setDiceE] = useState(null);
  const [diceF, setDiceF] = useState(null);
  const [diceG, setDiceG] = useState(null);
  function resetDice() {
    setDiceA(null);
    setDiceB(null);
    setDiceC(null);
    setDiceD(null);
    setDiceE(null);
    setDiceF(null);
    setDiceG(null);
  }
  function handleFourDie(a, b, c, d) {
    setDiceA(a);
    setDiceB(b);
    setDiceC(c);
    setDiceD(d);
  }
  function handleThreeDie(e, f, g) {
    setDiceE(e);
    setDiceF(f);
    setDiceG(g);
  }
  let [a, b, c, d] = [null, null, null, null];
  let [e, f, g] = [null, null, null];
  function handleRoll() {
    resetDice();

    console.log(click);
    if (click < 6) {
      let oldRolls = rolls;
      console.log("rolling!");
      let dieRolls = [
        Math.floor(1 + Math.random() * 6),
        Math.floor(1 + Math.random() * 6),
        Math.floor(1 + Math.random() * 6),
        Math.floor(1 + Math.random() * 6),
      ];
      [a, b, c, d] = dieRolls;
      handleFourDie(a, b, c, d);
      console.log("You rolled an", a, b, c, d);
      console.log("We're dropping the lowest roll, so you have");
      let minRoll = Math.min(a, b, c, d);
      let index = dieRolls.indexOf(minRoll);
      dieRolls.splice(index, 1);
      [e, f, g] = dieRolls;
      handleThreeDie(e, f, g);
      console.log(dieRolls);
      console.log(`We're adding ${e}+${f}+${g} to get ${e + f + g}`);

      let currentRoll = dieRolls[0] + dieRolls[1] + dieRolls[2];
      oldRolls[click] = currentRoll;
      console.log(oldRolls);
      setClick(click + 1);
      setRolls(oldRolls);

      //   return;
    } else {
      console.log("done rolling!");
      setDoneRolling(true);
    }

    console.log("finished!", click);
  }
  return (
    <div className="diceSection">
      {!doneRolling && (
        <Button
          basic
          color="orange"
          style={{ color: "#080a21" }}
          onClick={() => handleRoll()}
        >
          Click to Roll
        </Button>
      )}
      {/* <h3>Dice Roll Pictures</h3> */}
      <div className="diceImageDisplay">
        {/* DICE A */}
        {diceA && diceA === 1 && (
          <img src={dice1} alt="die " className="diceImage"></img>
        )}
        {diceA && diceA === 2 && (
          <img src={dice2} alt="die " className="diceImage"></img>
        )}
        {diceA && diceA === 3 && (
          <img src={dice3} alt="die " className="diceImage"></img>
        )}
        {diceA && diceA === 4 && (
          <img src={dice4} alt="die " className="diceImage"></img>
        )}
        {diceA && diceA === 5 && (
          <img src={dice5} alt="die " className="diceImage"></img>
        )}
        {diceA && diceA === 6 && (
          <img src={dice6} alt="die " className="diceImage"></img>
        )}
        {/* </Transition> */}
        {/* DICE B */}
        {diceB && diceB === 1 && (
          <img src={dice1} alt="die 1" className="diceImage"></img>
        )}
        {diceB && diceB === 2 && (
          <img src={dice2} alt="die 2" className="diceImage"></img>
        )}
        {diceB && diceB === 3 && (
          <img src={dice3} alt="die 3" className="diceImage"></img>
        )}
        {diceB && diceB === 4 && (
          <img src={dice4} alt="die 4" className="diceImage"></img>
        )}
        {diceB && diceB === 5 && (
          <img src={dice5} alt="die 5" className="diceImage"></img>
        )}
        {diceB && diceB === 6 && (
          <img src={dice6} alt="die 6" className="diceImage"></img>
        )}

        {/* DICE C */}
        {diceC && diceC === 1 && (
          <img src={dice1} alt="die 1" className="diceImage"></img>
        )}
        {diceC && diceC === 2 && (
          <img src={dice2} alt="die 2" className="diceImage"></img>
        )}
        {diceC && diceC === 3 && (
          <img src={dice3} alt="die 3" className="diceImage"></img>
        )}
        {diceC && diceC === 4 && (
          <img src={dice4} alt="die 4" className="diceImage"></img>
        )}
        {diceC && diceC === 5 && (
          <img src={dice5} alt="die 5" className="diceImage"></img>
        )}
        {diceC && diceC === 6 && (
          <img src={dice6} alt="die 6" className="diceImage"></img>
        )}

        {/* DICE D */}
        {diceD && diceD === 1 && (
          <img src={dice1} alt="die 1" className="diceImage"></img>
        )}
        {diceD && diceD === 2 && (
          <img src={dice2} alt="die 2" className="diceImage"></img>
        )}
        {diceD && diceD === 3 && (
          <img src={dice3} alt="die 3" className="diceImage"></img>
        )}
        {diceD && diceD === 4 && (
          <img src={dice4} alt="die 4" className="diceImage"></img>
        )}
        {diceD && diceD === 5 && (
          <img src={dice5} alt="die 5" className="diceImage"></img>
        )}
        {diceD && diceD === 6 && (
          <img src={dice6} alt="die 6" className="diceImage"></img>
        )}
      </div>
      {diceA && (
        <div>
          <p>
            Nice roll! You rolled a{" "}
            <code>
              {" "}
              {diceA}, {diceB}, {diceC}, and {diceD}!
            </code>
            <br />
            Drop the lowest roll and add the remaining to get{" "}
            <code>
              {diceE} + {diceF} + {diceG} = {diceE + diceF + diceG}.
            </code>
          </p>
        </div>
      )}
      {/* {doneRolling && (
        <Button
          color="orange"
          style={{ color: "#080a21" }}
          onClick={() => {
            setActiveItem("character");
            setBuildTopic("character");
            localStorage.setItem("buildTopic", "character");
          }}
          as={Link}
          to="/character"
        >
          Click to Finish!
        </Button>
      )} */}
    </div>
  );
};
export default RollScripts;
