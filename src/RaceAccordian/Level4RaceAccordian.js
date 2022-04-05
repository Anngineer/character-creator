import { Accordion, Icon } from "semantic-ui-react";
import useGet from "../useGet";

const Level4RaceAccordian = ({
  activeIndex,
  setActiveIndex,
  activeSubIndex,
  setActiveSubIndex,
}) => {
  const race4Blurb =
    "Petite in size, gnomes are filled to the brim with vibrancy, curiousity, and enthusiasm for life. They throw themselves into whatever pursuit or adventure that they choose with passion and exhuberance. ";
  const {
    data: raceData,
    error,
    isPending,
  } = useGet("https://www.dnd5eapi.co/api/races/gnome");
  const loadingStatement = "Information on Gnomes is loading...";
  const errorStatement = "There was a problem loading information on Gnomes.";
  return (
    <>
      <Accordion.Title
        active={activeIndex === 4}
        Index={4}
        onClick={() => setActiveIndex(activeIndex === 4 ? -1 : 4)}
      >
        <Icon name="dropdown" />
        Gnome
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 4}>
        <div>
          {/* Third Group Main Content. */}
          {raceData && race4Blurb}
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
              Gnome Stats
            </Accordion.Title>
            <Accordion.Content active={activeSubIndex === 7}>
              {/* <p>Content 4.A</p> */}
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
            {/* Level 4-B of Sub Accordian, Index 8 */}
            <Accordion.Title
              active={activeSubIndex === 8}
              Index={8}
              onClick={() => setActiveSubIndex(activeSubIndex === 8 ? -1 : 8)}
            >
              <Icon name="dropdown" />
              Gnome Qualities
            </Accordion.Title>
            <Accordion.Content active={activeSubIndex === 8}>
              {/* <p>Content 4.B</p> */}
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
export default Level4RaceAccordian;
