import { Accordion, Icon } from "semantic-ui-react";

const Level4RaceAccordian = ({
  activeIndex,
  setActiveIndex,
  activeSubIndex,
  setActiveSubIndex,
}) => {
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
        <p>
          Third Group Main Content.
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
              <p>Content 4.A</p>
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
              <p>Content 4.B</p>
            </Accordion.Content>
            {/*  */}
          </Accordion.Accordion>
        </p>
      </Accordion.Content>
    </>
  );
};
export default Level4RaceAccordian;
