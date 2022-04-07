import { Accordion, Icon } from "semantic-ui-react";
import useGet from "../useGet";

const Level3ClassAccordian = ({
  activeIndex,
  setActiveIndex,
  activeSubIndex,
  setActiveSubIndex,
}) => {
  const classBlurb = `A spiritual connection with nature drives and empowers druids, who use their mystical abilities to protect and commune with nature.`;
  const loadingStatement = "Information on the class Druid is loading...";
  const errorStatement =
    "There was a problem loading information on the class Druid.";
  const {
    data: classData,
    isPending,
    error,
  } = useGet("https://www.dnd5eapi.co/api/classes/druid");
  const {
    data: subclassData,
    isPending: isSubclassPending,
    error: subclassError,
  } = useGet("https://www.dnd5eapi.co/api/subclasses/land");
  return (
    <>
      <Accordion.Title
        active={activeIndex === 3}
        Index={3}
        onClick={() => setActiveIndex(activeIndex === 3 ? -1 : 3)}
      >
        <Icon name="dropdown" />
        Druid
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 3}>
        <div>
          {/* Third Group Main Content. */}
          {classData && classBlurb}
          {isPending && loadingStatement}
          {error && errorStatement}
          <Accordion.Accordion>
            {/*Sub Accordian */}
            {/* Level 3-A of Sub Accordian, Index 5 */}
            <Accordion.Title
              active={activeSubIndex === 5}
              Index={5}
              onClick={() => setActiveSubIndex(activeSubIndex === 5 ? -1 : 5)}
            >
              <Icon name="dropdown" />
              Druid Stats
            </Accordion.Title>
            <Accordion.Content active={activeSubIndex === 5}>
              {/* <p>Content 3.A</p> */}
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
                    Wooden Shield or Simple Weapon, Scimitar,{" "}
                    {classData.starting_equipment
                      .map((equip) => equip.equipment.name)
                      .join(", ")}
                  </p>
                  <p>
                    <b>Spells</b>:&nbsp;{" "}
                    {classData.spellcasting.info[1].desc[1]}
                  </p>
                </div>
              )}
            </Accordion.Content>
            {/* Level 3-B of Sub Accordian, Index 6 */}
            <Accordion.Title
              active={activeSubIndex === 6}
              Index={6}
              onClick={() => setActiveSubIndex(activeSubIndex === 6 ? -1 : 6)}
            >
              <Icon name="dropdown" />
              Druid Qualities
            </Accordion.Title>
            <Accordion.Content active={activeSubIndex === 6}>
              {/* <p>Content 3.B</p> */}
              {subclassError && <p> {errorStatement}</p>}
              {isSubclassPending && <p>{loadingStatement}</p>}
              {subclassData && classData && (
                <div className="class-qualities">
                  <p>
                    <b>
                      {subclassData.name} Subclass,{" "}
                      {subclassData.subclass_flavor}{" "}
                    </b>
                  </p>
                  <p>{subclassData.desc[0]}</p>
                  <br />
                  <p>
                    <b>Spellcasting </b>
                  </p>
                  <p>{classData.spellcasting.info[0].desc[0]}</p>
                  <p>{classData.spellcasting.info[2].desc[0]}</p>
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
export default Level3ClassAccordian;
