import { Accordion, Icon } from "semantic-ui-react";
import useGet from "../useGet";

const Level2ClassAccordian = ({
  activeIndex,
  setActiveIndex,
  activeSubIndex,
  setActiveSubIndex,
}) => {
  const classBlurb = `Clerics are a conduit for the powers of the gods, weilding magic to heal and champion their divine domain. `;
  const loadingStatement = "Information on the class Cleric is loading...";
  const errorStatement =
    "There was a problem loading information on the class Cleric.";
  const {
    data: classData,

    isPending,
    error,
  } = useGet("https://www.dnd5eapi.co/api/classes/cleric");
  const {
    data: subclassData,
    isPending: isSubclassPending,
    error: subclassError,
  } = useGet("https://www.dnd5eapi.co/api/subclasses/life");
  return (
    <>
      <Accordion.Title
        active={activeIndex === 1}
        Index={1}
        onClick={() => setActiveIndex(activeIndex === 1 ? -1 : 1)}
      >
        <Icon name="dropdown" />
        Cleric
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 1}>
        <div>
          {/* Second Group Main Content. */}
          {classData && classBlurb}
          {isPending && loadingStatement}
          {error && errorStatement}
          <Accordion.Accordion>
            {/*Sub Accordian */}
            {/* Level 2-A of Sub Accordian, Index 3 */}
            <Accordion.Title
              active={activeSubIndex === 3}
              Index={3}
              onClick={() => setActiveSubIndex(activeSubIndex === 3 ? -1 : 3)}
            >
              <Icon name="dropdown" />
              Cleric Stats
            </Accordion.Title>
            <Accordion.Content active={activeSubIndex === 3}>
              {/* <p>Content 2.A</p> */}
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
                    , Mace or Warhammer, Scale Mail or Armor, Crossbow, Priest's
                    Pack
                  </p>
                  <p>
                    <b>Spells</b>:&nbsp;{" "}
                    {classData.spellcasting.info[1].desc[1]}
                  </p>
                </div>
              )}
            </Accordion.Content>
            {/* Level 2-B of Sub Accordian, Index 4 */}
            <Accordion.Title
              active={activeSubIndex === 4}
              Index={4}
              onClick={() => setActiveSubIndex(activeSubIndex === 4 ? -1 : 4)}
            >
              <Icon name="dropdown" />
              Cleric Qualities
            </Accordion.Title>
            <Accordion.Content active={activeSubIndex === 4}>
              {/* <p>Content 2.B</p> */}
              {subclassError && <p> {errorStatement}</p>}
              {isSubclassPending && <p>{loadingStatement}</p>}
              {classData && subclassData && (
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
export default Level2ClassAccordian;
