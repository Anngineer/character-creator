import { useState } from "react";
import { Accordion, Icon } from "semantic-ui-react";

const RaceAccordian = () => {
  const [activeRaceIndex, setActiveRaceIndex] = useState(0);
  const [activeSubRaceIndex, setActiveSubRaceIndex] = useState(null);

  return (
    <div style={{ color: "#080a21", textAlign: "left" }}>
      <Accordion styled fluid>
        {/* First Group of Accordian */}
        <Accordion.Title
          active={activeRaceIndex === 0}
          RaceIndex={0}
          onClick={() => setActiveRaceIndex(activeRaceIndex === 0 ? -1 : 0)}
        >
          <Icon name="dropdown" />
          Elf
        </Accordion.Title>
        <Accordion.Content active={activeRaceIndex === 0}>
          <p>
            First Group Main Content
            <Accordion.Accordion>
              {/*Sub Accordian */}
              {/* Level 1-A of Sub Accordian, RaceIndex 0 */}
              <Accordion.Title
                active={activeSubRaceIndex === 0}
                RaceIndex={0}
                onClick={() =>
                  setActiveSubRaceIndex(activeSubRaceIndex === 0 ? -1 : 0)
                }
              >
                <Icon name="dropdown" />
                Elf Stats
              </Accordion.Title>
              <Accordion.Content active={activeSubRaceIndex === 0}>
                <p>Content 1.A</p>
              </Accordion.Content>
              {/* Level 1-B of Sub Accordian, RaceIndex 1 */}
              <Accordion.Title
                active={activeSubRaceIndex === 1}
                RaceIndex={1}
                onClick={() =>
                  setActiveSubRaceIndex(activeSubRaceIndex === 1 ? -1 : 1)
                }
              >
                <Icon name="dropdown" />
                Elf Qualities
              </Accordion.Title>
              <Accordion.Content active={activeSubRaceIndex === 1}>
                <p>Content 1.B</p>
              </Accordion.Content>
              {/*  */}
            </Accordion.Accordion>
          </p>
        </Accordion.Content>

        {/* Second Group Of Accordian */}
        <Accordion.Title
          active={activeRaceIndex === 1}
          RaceIndex={1}
          onClick={() => setActiveRaceIndex(activeRaceIndex === 1 ? -1 : 1)}
        >
          <Icon name="dropdown" />
          Human
        </Accordion.Title>
        <Accordion.Content active={activeRaceIndex === 1}>
          <p>
            Second Group Main Content.
            <Accordion.Accordion>
              {/*Sub Accordian */}
              {/* Level 2-A of Sub Accordian, RaceIndex 3 */}
              <Accordion.Title
                active={activeSubRaceIndex === 3}
                RaceIndex={3}
                onClick={() =>
                  setActiveSubRaceIndex(activeSubRaceIndex === 3 ? -1 : 3)
                }
              >
                <Icon name="dropdown" />
                Human Stats
              </Accordion.Title>
              <Accordion.Content active={activeSubRaceIndex === 3}>
                <p>Content 2.A</p>
              </Accordion.Content>
              {/* Level 2-B of Sub Accordian, RaceIndex 4 */}
              <Accordion.Title
                active={activeSubRaceIndex === 4}
                RaceIndex={4}
                onClick={() =>
                  setActiveSubRaceIndex(activeSubRaceIndex === 4 ? -1 : 4)
                }
              >
                <Icon name="dropdown" />
                Human Qualities
              </Accordion.Title>
              <Accordion.Content active={activeSubRaceIndex === 4}>
                <p>Content 2.B</p>
              </Accordion.Content>
              {/*  */}
            </Accordion.Accordion>
          </p>
        </Accordion.Content>
        {/*  */}

        {/* Third Group Of Accordian */}
        <Accordion.Title
          active={activeRaceIndex === 3}
          RaceIndex={3}
          onClick={() => setActiveRaceIndex(activeRaceIndex === 3 ? -1 : 3)}
        >
          <Icon name="dropdown" />
          Half-Orc
        </Accordion.Title>
        <Accordion.Content active={activeRaceIndex === 3}>
          <p>
            Third Group Main Content.
            <Accordion.Accordion>
              {/*Sub Accordian */}
              {/* Level 3-A of Sub Accordian, RaceIndex 5 */}
              <Accordion.Title
                active={activeSubRaceIndex === 5}
                RaceIndex={5}
                onClick={() =>
                  setActiveSubRaceIndex(activeSubRaceIndex === 5 ? -1 : 5)
                }
              >
                <Icon name="dropdown" />
                Half-Orc Stats
              </Accordion.Title>
              <Accordion.Content active={activeSubRaceIndex === 5}>
                <p>Content 3.A</p>
              </Accordion.Content>
              {/* Level 3-B of Sub Accordian, RaceIndex 6 */}
              <Accordion.Title
                active={activeSubRaceIndex === 6}
                RaceIndex={6}
                onClick={() =>
                  setActiveSubRaceIndex(activeSubRaceIndex === 6 ? -1 : 6)
                }
              >
                <Icon name="dropdown" />
                Half-Orc Qualities
              </Accordion.Title>
              <Accordion.Content active={activeSubRaceIndex === 6}>
                <p>Content 3.B</p>
              </Accordion.Content>
              {/*  */}
            </Accordion.Accordion>
          </p>
        </Accordion.Content>
        {/*  */}

        {/* Fourth Group Of Accordian */}
        <Accordion.Title
          active={activeRaceIndex === 4}
          RaceIndex={4}
          onClick={() => setActiveRaceIndex(activeRaceIndex === 4 ? -1 : 4)}
        >
          <Icon name="dropdown" />
          Gnome
        </Accordion.Title>
        <Accordion.Content active={activeRaceIndex === 4}>
          <p>
            Third Group Main Content.
            <Accordion.Accordion>
              {/*Sub Accordian */}
              {/* Level 4-A of Sub Accordian, RaceIndex 7 */}
              <Accordion.Title
                active={activeSubRaceIndex === 7}
                RaceIndex={7}
                onClick={() =>
                  setActiveSubRaceIndex(activeSubRaceIndex === 7 ? -1 : 7)
                }
              >
                <Icon name="dropdown" />
                Gnome Stats
              </Accordion.Title>
              <Accordion.Content active={activeSubRaceIndex === 7}>
                <p>Content 4.A</p>
              </Accordion.Content>
              {/* Level 4-B of Sub Accordian, RaceIndex 8 */}
              <Accordion.Title
                active={activeSubRaceIndex === 8}
                RaceIndex={8}
                onClick={() =>
                  setActiveSubRaceIndex(activeSubRaceIndex === 8 ? -1 : 8)
                }
              >
                <Icon name="dropdown" />
                Gnome Qualities
              </Accordion.Title>
              <Accordion.Content active={activeSubRaceIndex === 8}>
                <p>Content 4.B</p>
              </Accordion.Content>
              {/*  */}
            </Accordion.Accordion>
          </p>
        </Accordion.Content>
      </Accordion>
    </div>
  );
};
export default RaceAccordian;
