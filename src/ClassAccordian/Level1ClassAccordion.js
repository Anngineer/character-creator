import { Accordion, Icon } from "semantic-ui-react";
import useGet from "../useGet";

const Level1ClassAccordian = ({
  activeIndex,
  setActiveIndex,
  activeSubIndex,
  setActiveSubIndex,
}) => {
  const classBlurb = `Strong fighters unhampered by restrictive "civil society," barbarians channel pure rage and anger into martial power.  `;
  const {
    data: classData,
    error,
    isPending,
  } = useGet("https://www.dnd5eapi.co/api/classes/barbarian");
  const {
    data: subclassData,
    isPending: isSubclassPending,
    error: subclassError,
  } = useGet("https://www.dnd5eapi.co/api/subclasses/berserker");
  const loadingStatement = "Information on the class Barbarian is loading...";
  const errorStatement =
    "There was a problem loading information on the class Barbarian.";
  return (
    <>
      <Accordion.Title
        active={activeIndex === 0}
        Index={0}
        onClick={() => setActiveIndex(activeIndex === 0 ? -1 : 0)}
      >
        <Icon name="dropdown" />
        {/* Class 1 */}
        Barbarian
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 0}>
        <div>
          {/* First Group Main Content */}
          {classData && classBlurb}
          {isPending && loadingStatement}
          {error && errorStatement}
          <Accordion.Accordion>
            {/*Sub Accordian */}
            {/* Level 1-A of Sub Accordian, Index 0 */}
            <Accordion.Title
              active={activeSubIndex === 0}
              Index={0}
              onClick={() => setActiveSubIndex(activeSubIndex === 0 ? -1 : 0)}
            >
              <Icon name="dropdown" />
              Barbarian Stats
            </Accordion.Title>
            <Accordion.Content active={activeSubIndex === 0}>
              {/* <p>Content 1.A</p> */}
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
            {/* Level 1-B of Sub Accordian, Index 1 */}
            <Accordion.Title
              active={activeSubIndex === 1}
              Index={1}
              onClick={() => setActiveSubIndex(activeSubIndex === 1 ? -1 : 1)}
            >
              <Icon name="dropdown" />
              Barbarian Qualities
            </Accordion.Title>
            <Accordion.Content active={activeSubIndex === 1}>
              {/* <p>Content 1.B</p> */}
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
export default Level1ClassAccordian;
