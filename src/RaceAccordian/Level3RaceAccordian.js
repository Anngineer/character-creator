import { Accordion, Icon } from "semantic-ui-react";
import useGet from "../useGet";

const Level3RaceAccordian = ({
  activeIndex,
  setActiveIndex,
  activeSubIndex,
  setActiveSubIndex,
}) => {
  const race3Blurb =
    "With the strength and bravery of orcs and the cleverness of humanity, half-orcs feel their emotions intensly and often overwhelmingly.";
  const {
    data: raceData,
    error,
    isPending,
  } = useGet("https://www.dnd5eapi.co/api/races/half-orc");
  const loadingStatement = "Information on Half-Orc is loading...";
  const errorStatement =
    "There was a problem loading information on Half-Orcs.";

  return (
    <>
      <Accordion.Title
        active={activeIndex === 3}
        Index={3}
        onClick={() => setActiveIndex(activeIndex === 3 ? -1 : 3)}
      >
        <Icon name="dropdown" />
        Half-Orc
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 3}>
        <div>
          {/* Third Group Main Content. */}
          {raceData && race3Blurb}
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
              Half-Orc Stats
            </Accordion.Title>
            <Accordion.Content active={activeSubIndex === 5}>
              {/* <p>Content 3.A</p> */}
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
            {/* Level 3-B of Sub Accordian, Index 6 */}
            <Accordion.Title
              active={activeSubIndex === 6}
              Index={6}
              onClick={() => setActiveSubIndex(activeSubIndex === 6 ? -1 : 6)}
            >
              <Icon name="dropdown" />
              Half-Orc Qualities
            </Accordion.Title>
            <Accordion.Content active={activeSubIndex === 6}>
              {/* <p>Content 3.B</p> */}
              {isPending && <p>{loadingStatement}</p>}
              {error && <p>{errorStatement}</p>}
              {raceData && (
                <div className="race-qualities">
                  <p>
                    <b>Traits: </b>
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
export default Level3RaceAccordian;
