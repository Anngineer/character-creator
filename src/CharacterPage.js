import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const CharacterPage = ({ race, activeItem }) => {
  return (
    <div className="CharacterPage">
      {(activeItem !== "character" || !activeItem) && (
        <div style={{ width: "70%" }}>
          <p style={{ fontSize: "1.2rem" }}>
            {" "}
            Argh, matey! You're not done finishing your character yet!
            <br /> Go back home and navigate from there.
          </p>

          <Button as={Link} to="/" color="orange" style={{ color: "#080a21" }}>
            Return Home
          </Button>
        </div>
      )}
      {activeItem === "character" && (
        <div>
          <h3>Character Sheet Info</h3>
          {race && <div>The race is {race}</div>}
        </div>
      )}
    </div>
  );
};
export default CharacterPage;