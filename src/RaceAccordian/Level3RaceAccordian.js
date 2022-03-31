import { Accordion, Icon } from "semantic-ui-react";

const Level3RaceAccordian = ({
  activeIndex,
  setActiveIndex,
  activeSubIndex,
  setActiveSubIndex,
}) => {
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
        <p>
          Third Group Main Content.
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
              <p>Content 3.A</p>
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
              <p>Content 3.B</p>
            </Accordion.Content>
            {/*  */}
          </Accordion.Accordion>
        </p>
      </Accordion.Content>
    </>
  );
};
export default Level3RaceAccordian;
