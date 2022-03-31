import { Accordion, Icon } from "semantic-ui-react";

const Level2ClassAccordian = ({
  activeIndex,
  setActiveIndex,
  activeSubIndex,
  setActiveSubIndex,
}) => {
  return (
    <>
      <Accordion.Title
        active={activeIndex === 1}
        Index={1}
        onClick={() => setActiveIndex(activeIndex === 1 ? -1 : 1)}
      >
        <Icon name="dropdown" />
        Class 2
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 1}>
        <p>
          Second Group Main Content.
          <Accordion.Accordion>
            {/*Sub Accordian */}
            {/* Level 2-A of Sub Accordian, Index 3 */}
            <Accordion.Title
              active={activeSubIndex === 3}
              Index={3}
              onClick={() => setActiveSubIndex(activeSubIndex === 3 ? -1 : 3)}
            >
              <Icon name="dropdown" />
              Class 2 Stats
            </Accordion.Title>
            <Accordion.Content active={activeSubIndex === 3}>
              <p>Content 2.A</p>
            </Accordion.Content>
            {/* Level 2-B of Sub Accordian, Index 4 */}
            <Accordion.Title
              active={activeSubIndex === 4}
              Index={4}
              onClick={() => setActiveSubIndex(activeSubIndex === 4 ? -1 : 4)}
            >
              <Icon name="dropdown" />
              Class 2 Qualities
            </Accordion.Title>
            <Accordion.Content active={activeSubIndex === 4}>
              <p>Content 2.B</p>
            </Accordion.Content>
            {/*  */}
          </Accordion.Accordion>
        </p>
      </Accordion.Content>
    </>
  );
};
export default Level2ClassAccordian;
