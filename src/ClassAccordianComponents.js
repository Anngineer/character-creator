import { useState } from "react";
import { Accordion } from "semantic-ui-react";
import Level1ClassAccordion from "./ClassAccordian/Level1ClassAccordion";
import Level2ClassAccordion from "./ClassAccordian/Level2ClassAccordian";
import Level3ClassAccordion from "./ClassAccordian/Level3ClassAccordian";
import Level4ClassAccordion from "./ClassAccordian/Level4ClassAccordian";

const ClassAccordianComponents = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSubIndex, setActiveSubIndex] = useState(null);

  return (
    <div
      className="class-accordian"
      style={{ color: "#080a21", textAlign: "left" }}
    >
      {/* <Accordion styled fluid inverted> */}
      <Accordion styled fluid>
        {/* First Group of Accordian */}
        <Level1ClassAccordion
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          activeSubIndex={activeSubIndex}
          setActiveSubIndex={setActiveSubIndex}
        />

        {/* Second Group Of Accordian */}
        <Level2ClassAccordion
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          activeSubIndex={activeSubIndex}
          setActiveSubIndex={setActiveSubIndex}
        />

        {/*  */}

        {/* Third Group Of Accordian */}
        <Level3ClassAccordion
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          activeSubIndex={activeSubIndex}
          setActiveSubIndex={setActiveSubIndex}
        />
        {/*  */}

        {/* Fourth Group Of Accordian */}
        <Level4ClassAccordion
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          activeSubIndex={activeSubIndex}
          setActiveSubIndex={setActiveSubIndex}
        />
      </Accordion>
    </div>
  );
};
export default ClassAccordianComponents;
