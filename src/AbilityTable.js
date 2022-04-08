import { Table } from "semantic-ui-react";
import Media from "react-media";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const AbilityTable = ({
  raceData,
  doneRolling,
  rolls,
  setAbilities,
  setActiveItem,
  setBuildTopic,
}) => {
  const handleAbilityStats = () => {
    const STRNum = raceData.modSTR + rolls[0];
    const DEXNum = raceData.modDEX + rolls[1];
    const CONNum = raceData.modCON + rolls[2];
    const INTNum = raceData.modINT + rolls[3];
    const WISNum = raceData.modWIS + rolls[4];
    const CHANum = raceData.modCHA + rolls[5];
    setAbilities([
      { STR: STRNum },
      { DEX: DEXNum },
      { CON: CONNum },
      { INT: INTNum },
      { WIS: WISNum },
      { CHA: CHANum },
    ]);
    setActiveItem("character");
    setBuildTopic("character");
  };
  const largeTable = (
    <div>
      {raceData && (
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Ability</Table.HeaderCell>
              <Table.HeaderCell>Racial Boost</Table.HeaderCell>
              <Table.HeaderCell>Roll</Table.HeaderCell>
              <Table.HeaderCell>Total</Table.HeaderCell>
              <Table.HeaderCell>Modifier</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>Strength</Table.Cell>
              <Table.Cell>{raceData.modSTR}</Table.Cell>
              <Table.Cell>{rolls[0]}</Table.Cell>
              <Table.Cell>{rolls[0] && raceData.modSTR + rolls[0]}</Table.Cell>
              <Table.Cell>
                {rolls[0] && Math.floor((raceData.modSTR + rolls[0] - 10) / 2)}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Dexterity</Table.Cell>
              <Table.Cell>{raceData.modDEX}</Table.Cell>
              <Table.Cell>{rolls[1]}</Table.Cell>
              <Table.Cell>{rolls[1] && raceData.modDEX + rolls[1]}</Table.Cell>
              <Table.Cell>
                {rolls[1] && Math.floor((raceData.modDEX + rolls[1] - 10) / 2)}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Constitution</Table.Cell>
              <Table.Cell>{raceData.modCON}</Table.Cell>
              <Table.Cell>{rolls[2]}</Table.Cell>
              <Table.Cell>{rolls[2] && raceData.modCON + rolls[2]}</Table.Cell>
              <Table.Cell>
                {rolls[2] && Math.floor((raceData.modCON + rolls[2] - 10) / 2)}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Intelligence</Table.Cell>
              <Table.Cell>{raceData.modINT}</Table.Cell>
              <Table.Cell>{rolls[3]}</Table.Cell>
              <Table.Cell>{rolls[3] && raceData.modINT + rolls[3]}</Table.Cell>
              <Table.Cell>
                {rolls[3] && Math.floor((raceData.modINT + rolls[3] - 10) / 2)}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Wisdom</Table.Cell>
              <Table.Cell>{raceData.modWIS}</Table.Cell>
              <Table.Cell>{rolls[4]}</Table.Cell>
              <Table.Cell>{rolls[4] && raceData.modWIS + rolls[4]}</Table.Cell>
              <Table.Cell>
                {rolls[4] && Math.floor((raceData.modWIS + rolls[4] - 10) / 2)}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Charisma</Table.Cell>
              <Table.Cell>{raceData.modCHA}</Table.Cell>
              <Table.Cell>{rolls[5]}</Table.Cell>
              <Table.Cell>{rolls[5] && raceData.modCHA + rolls[5]}</Table.Cell>
              <Table.Cell>
                {rolls[5] && Math.floor((raceData.modCHA + rolls[5] - 10) / 2)}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      )}
    </div>
  );
  const smallTables = (
    <div>
      {raceData && (
        <Table celled unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Ability</Table.HeaderCell>
              <Table.HeaderCell>Racial Boost</Table.HeaderCell>
              <Table.HeaderCell>Roll</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Strength</Table.Cell>
              <Table.Cell>{raceData.modSTR}</Table.Cell>
              <Table.Cell>{rolls[0]}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Dexterity</Table.Cell>
              <Table.Cell>{raceData.modDEX}</Table.Cell>
              <Table.Cell>{rolls[1]}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Constitution</Table.Cell>
              <Table.Cell>{raceData.modCON}</Table.Cell>
              <Table.Cell>{rolls[2]}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Intelligence</Table.Cell>
              <Table.Cell>{raceData.modINT}</Table.Cell>
              <Table.Cell>{rolls[3]}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Wisdom</Table.Cell>
              <Table.Cell>{raceData.modWIS}</Table.Cell>
              <Table.Cell>{rolls[4]}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Charisma</Table.Cell>
              <Table.Cell>{raceData.modCHA}</Table.Cell>
              <Table.Cell>{rolls[5]}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      )}
    </div>
  );
  return (
    <div>
      {/* <h4>Ability Table</h4> */}
      <div>
        {doneRolling && (
          <Button
            as={Link}
            to="/character"
            color="orange"
            style={{ color: "#080a21", marginTop: "0" }}
            onClick={() => handleAbilityStats()}
          >
            Click to Finish!
          </Button>
        )}
        <Media
          queries={{
            small: "(max-width: 769px)",
            medium: "(min-width: 770px)",
          }}
        >
          {(matches) => (
            <div>
              {matches.small && (
                <div className="ability-table"> {smallTables}</div>
              )}
              {matches.medium && (
                <div className="ability-table">{largeTable}</div>
              )}
            </div>
          )}
        </Media>
      </div>
    </div>
  );
};
export default AbilityTable;
