import { Accordion, Icon } from "semantic-ui-react";
import useGet from "../useGet";

const Level4ClassAccordian = ({
  activeIndex,
  setActiveIndex,
  activeSubIndex,
  setActiveSubIndex,
}) => {
  const classBlurb = `Stealthy and nimble, Rogues often find themselves on the wrong side of the law.`;
  const {
    data: classData,
    error,
    isPending,
  } = useGet("https://www.dnd5eapi.co/api/classes/rogue");
  const {
    data: subclassData,
    isPending: isSubclassPending,
    error: subclassError,
  } = useGet("https://www.dnd5eapi.co/api/subclasses/thief");
  const loadingStatement = "Information on the class Rogue is loading...";
  const errorStatement =
    "There was a problem loading information on the class Rogue.";
  return (
    <>
      <Accordion.Title
        active={activeIndex === 4}
        Index={4}
        onClick={() => setActiveIndex(activeIndex === 4 ? -1 : 4)}
      >
        <Icon name="dropdown" />
        Rogue
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 4}>
        <div>
          {classData && classBlurb}
          {isPending && loadingStatement}
          {error && errorStatement}
          <Accordion.Accordion>
            {/*Sub Accordian */}
            {/* Level 4-A of Sub Accordian, Index 7 */}
            <Accordion.Title
              active={activeSubIndex === 7}
              Index={7}
              onClick={() => setActiveSubIndex(activeSubIndex === 7 ? -1 : 7)}
            >
              <Icon name="dropdown" />
              Rogue Stats
            </Accordion.Title>
            <Accordion.Content active={activeSubIndex === 7}>
              {/* <p>Content 4.A</p>*/}
              {error && <p> {errorStatement}</p>}
              {isPending && <p>{loadingStatement}</p>}
              {classData && (
                <div className="class-stats">
                  <p>
                    <b>{classData.name} Hit Die</b> is {classData.hit_die}.
                  </p>
                  <p>
                    <b> Proficiencies are:&nbsp;</b>
                    {classData.proficiencies
                      .map((prof) => prof.name)
                      .join(", ")}
                  </p>
                  <p>
                    <b>Equipment includes:&nbsp;</b>
                    {classData.starting_equipment
                      .map((equip) => equip.equipment.name)
                      .join(", ")}
                  </p>
                </div>
              )}
            </Accordion.Content>
            {/* Level 4-B of Sub Accordian, Index 8 */}
            <Accordion.Title
              active={activeSubIndex === 8}
              Index={8}
              onClick={() => setActiveSubIndex(activeSubIndex === 8 ? -1 : 8)}
            >
              <Icon name="dropdown" />
              Rogue Qualities
            </Accordion.Title>
            <Accordion.Content active={activeSubIndex === 8}>
              {/* <p>Content 4.B</p> */}
              {subclassError && <p> {errorStatement}</p>}
              {isSubclassPending && <p>{loadingStatement}</p>}
              {subclassData && (
                <div className="class-qualities">
                  <p>
                    <b>
                      {subclassData.name} Subclass,{" "}
                      {subclassData.subclass_flavor}{" "}
                    </b>
                  </p>
                  <p>{subclassData.desc[0]}</p>
                </div>
              )}
            </Accordion.Content>
            {/*  */}
          </Accordion.Accordion>
        </div>
      </Accordion.Content>
    </>
  );
};
export default Level4ClassAccordian;
