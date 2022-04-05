import { Accordion, Icon } from "semantic-ui-react";
import useGet from "../useGet";

const Level1RaceAccordian = ({
  activeIndex,
  setActiveIndex,
  activeSubIndex,
  setActiveSubIndex,
}) => {
  const race1Blurb =
    "Elegant and conscientious, elves are often reserved and slow to change. They focus intently on their goals and interests.";
  const {
    data: raceData,
    error,
    isPending,
  } = useGet("https://www.dnd5eapi.co/api/races/elf");
  const loadingStatement = "Information on Elves is loading...";
  const errorStatement = "There was a problem loading information on Elves.";
  return (
    <>
      <Accordion.Title
        active={activeIndex === 0}
        Index={0}
        onClick={() => setActiveIndex(activeIndex === 0 ? -1 : 0)}
      >
        <Icon name="dropdown" />
        Elf
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 0}>
        <div>
          {raceData && race1Blurb}
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
              Elf Stats
            </Accordion.Title>
            <Accordion.Content active={activeSubIndex === 0}>
              {/* <p>Content 1.A</p> */}
              {isPending && <p>{loadingStatement}</p>}
              {error && <p>{errorStatement}</p>}
              {raceData && (
                <div className="race-stats">
                  <p>
                    <b>{raceData.name} speed</b> is {raceData.speed} feet per
                    turn.
                  </p>
                  <p>
                    The <b>Ability Bonuses</b> are: &nbsp;
                    {raceData.ability_bonuses
                      .map(
                        (ability) =>
                          `${ability.ability_score.name} + ${ability.bonus}`
                      )
                      .join(", ")}
                  </p>
                  <p>
                    <b>Age</b>: {raceData.age}
                  </p>
                  <p>
                    <b>Size</b>: {raceData.size_description}
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
              Elf Qualities
            </Accordion.Title>
            <Accordion.Content active={activeSubIndex === 1}>
              {/* <p>Content 1.B</p> */}
              {isPending && <p>{loadingStatement}</p>}
              {error && <p>{errorStatement}</p>}
              {raceData && (
                <div className="race-qualities">
                  <p>
                    <b>Traits</b>:{" "}
                    {raceData.traits.map((trait) => trait.name).join(", ")}
                  </p>
                  <p>
                    <b>Alignment</b>: {raceData.alignment}
                  </p>
                  <p>
                    <b>Language</b>: {raceData.language_desc}
                  </p>
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
export default Level1RaceAccordian;
