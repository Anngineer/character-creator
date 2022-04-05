import { Accordion, Icon } from "semantic-ui-react";
import useGet from "../useGet";

const Level2RaceAccordian = ({
  activeIndex,
  setActiveIndex,
  activeSubIndex,
  setActiveSubIndex,
}) => {
  const race2Blurb =
    "Often ambitious and creative, humans are a socially-minded race.  They make up for shorter lifespans by developing systems that outlast them and carry their values through each generation. ";
  const {
    data: raceData,
    error,
    isPending,
  } = useGet("https://www.dnd5eapi.co/api/races/human");
  const loadingStatement = "Information on Humans is loading...";
  const errorStatement = "There was a problem loading information on Humans.";

  return (
    <>
      <Accordion.Title
        active={activeIndex === 1}
        Index={1}
        onClick={() => setActiveIndex(activeIndex === 1 ? -1 : 1)}
      >
        <Icon name="dropdown" />
        Human
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 1}>
        <div>
          {raceData && race2Blurb}
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
              Human Stats
            </Accordion.Title>
            <Accordion.Content active={activeSubIndex === 3}>
              {/* <p>Content 2.A</p> */}
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
            {/* Level 2-B of Sub Accordian, Index 4 */}
            <Accordion.Title
              active={activeSubIndex === 4}
              Index={4}
              onClick={() => setActiveSubIndex(activeSubIndex === 4 ? -1 : 4)}
            >
              <Icon name="dropdown" />
              Human Qualities
            </Accordion.Title>
            <Accordion.Content active={activeSubIndex === 4}>
              {/* <p>Content 2.B</p> */}
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
export default Level2RaceAccordian;
