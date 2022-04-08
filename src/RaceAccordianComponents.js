import { useState } from "react";
import { Accordion } from "semantic-ui-react";
import Level1RaceAccordion from "./RaceAccordian/Level1RaceAccordion";
import Level2RaceAccordion from "./RaceAccordian/Level2RaceAccordian";
import Level3RaceAccordion from "./RaceAccordian/Level3RaceAccordian";
import Level4RaceAccordion from "./RaceAccordian/Level4RaceAccordian";

const RaceAccordianComponents = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSubIndex, setActiveSubIndex] = useState(-1);

  return (
    <div
      className="race-accordian"
      style={{ color: "#080a21", textAlign: "left" }}
    >
      <Accordion styled fluid>
        {/* First Group of Accordian */}
        <Level1RaceAccordion
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          activeSubIndex={activeSubIndex}
          setActiveSubIndex={setActiveSubIndex}
        />

        {/* Second Group Of Accordian */}
        <Level2RaceAccordion
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          activeSubIndex={activeSubIndex}
          setActiveSubIndex={setActiveSubIndex}
        />

        {/*  */}

        {/* Third Group Of Accordian */}
        <Level3RaceAccordion
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          activeSubIndex={activeSubIndex}
          setActiveSubIndex={setActiveSubIndex}
        />
        {/*  */}

        {/* Fourth Group Of Accordian */}
        <Level4RaceAccordion
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          activeSubIndex={activeSubIndex}
          setActiveSubIndex={setActiveSubIndex}
        />
      </Accordion>
    </div>
  );
};
export default RaceAccordianComponents;
