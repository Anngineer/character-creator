import { Accordion, Icon } from "semantic-ui-react";

const Level1ClassAccordian = ({
  activeIndex,
  setActiveIndex,
  activeSubIndex,
  setActiveSubIndex,
}) => {
  return (
    <>
      <Accordion.Title
        active={activeIndex === 0}
        Index={0}
        onClick={() => setActiveIndex(activeIndex === 0 ? -1 : 0)}
      >
        <Icon name="dropdown" />
        Class 1
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 0}>
        <p>
          First Group Main Content
          <Accordion.Accordion>
            {/*Sub Accordian */}
            {/* Level 1-A of Sub Accordian, Index 0 */}
            <Accordion.Title
              active={activeSubIndex === 0}
              Index={0}
              onClick={() => setActiveSubIndex(activeSubIndex === 0 ? -1 : 0)}
            >
              <Icon name="dropdown" />
              Class 1 Stats
            </Accordion.Title>
            <Accordion.Content active={activeSubIndex === 0}>
              <p>Content 1.A</p>
            </Accordion.Content>
            {/* Level 1-B of Sub Accordian, Index 1 */}
            <Accordion.Title
              active={activeSubIndex === 1}
              Index={1}
              onClick={() => setActiveSubIndex(activeSubIndex === 1 ? -1 : 1)}
            >
              <Icon name="dropdown" />
              Class 1 Qualities
            </Accordion.Title>
            <Accordion.Content active={activeSubIndex === 1}>
              <p>Content 1.B</p>
            </Accordion.Content>
            {/*  */}
          </Accordion.Accordion>
        </p>
      </Accordion.Content>
    </>
  );
};
export default Level1ClassAccordian;
