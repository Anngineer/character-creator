const CharacterSheet = ({ race }) => {
  return (
    <div>
      <h3>Character Sheet Info</h3>
      {race && <div>The race is {race}</div>}
    </div>
  );
};
export default CharacterSheet;
