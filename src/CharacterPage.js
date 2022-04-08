import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import BreadcrumbMenu from "./BreadcrumbMenu";

const CharacterPage = ({
  race,
  dndClass,
  abilities,
  activeItem,
  setActiveItem,
  setInBuild,
  setBuildTopic,
}) => {
  return (
    <div className="CharacterPage">
      <BreadcrumbMenu activeItem={activeItem} setActiveItem={setActiveItem} />

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
          <h2>Well done, adventure!</h2>
          <p>
            You have passed through the first trial of self-discovery and are
            ready to journey through this magical land!
          </p>
          <p>Here is a summary of your choices.</p>
          <div className="character-summary">
            <h3>Character Sheet Info</h3>

            {/* Race Line */}
            {race && (
              <p>
                <b>{race}</b>
              </p>
            )}
            {race === "Elf" && (
              <p>
                As an <b>Elf</b>, you have dark vision and the ability to put
                others in a trance. Elegant and conscientious, elves are often
                reserved and slow to change. They focus intently on their goals
                and interests.
              </p>
            )}
            {race === "Human" && (
              <p>
                As a <b>Human</b>, you are well rounded. Often ambitious and
                creative, humans are a socially-minded race. They make up for
                shorter lifespans by developing systems that outlast them and
                carry their values through each generation.
              </p>
            )}
            {race === "Half-Orc" && (
              <p>
                As a <b>Half Orc</b>, you have dark vision, savage attacks, and
                relentless endurance. With the strength and bravery of orcs and
                the cleverness of humanity, half orcs feel their emotions
                intensly and often overwhelmingly.{" "}
              </p>
            )}
            {race === "Gnome" && (
              <p>
                As a <b>Gnome</b>, you have dark vision and gnome cunning.
                Petite in size, gnomes are filled to the brim with vibrancy,
                curiousity, and enthusiasm for life. They throw themselves into
                whatever pursuit or adventure that they choose with passion and
                exhuberance.
              </p>
            )}
            <br />
            {/* Class Line */}
            {dndClass && (
              <p>
                <b>{dndClass}</b>
              </p>
            )}
            {dndClass === "Barbarian" && (
              <p>
                You have chosen the path of a <b>Barbarian</b>! Strong fighters
                unhampered by restrictive "civil society," barbarians channel
                pure rage and anger into martial power.
              </p>
            )}
            {dndClass === "Cleric" && (
              <p>
                You have chosen the path of a <b>Cleric</b>! Clerics are a
                conduit for the powers of the gods, weilding magic to heal and
                champion their divine domain.
              </p>
            )}
            {dndClass === "Druid" && (
              <p>
                You have chosen the path of a <b>Druid</b>! A spiritual
                connection with nature drives and empowers druids, who use their
                mystical abilities to protect and commune with nature.
              </p>
            )}
            {dndClass === "Rogue" && (
              <p>
                You have chosen the path of a <b>Rogue</b>! Stealthy and nimble,
                Rogues often find themselves on the wrong side of the law.
              </p>
            )}
            <br />
            {abilities && (
              <>
                <p>
                  <b>Ability Stats</b>
                </p>
                <p>
                  {" "}
                  Strength: {abilities[0].STR}, Dexterity: {abilities[1].DEX},
                  Constitution: {abilities[2].CON}, Intelligence:{" "}
                  {abilities[3].INT}, Wisdom: {abilities[4].WIS}, Charisma:{" "}
                  {abilities[5].CHA}{" "}
                </p>
              </>
            )}
          </div>

          <p>
            Share <a href={"https://stackoverflow.com/"}> this website</a> with
            friends or make a new character!
          </p>
          {/* Make the href the url of the site */}
          <Button
            color="orange"
            style={{ color: "#080a21" }}
            href={"https://stackoverflow.com/"} // make this the url of this site
            // as={Link}
            // to="/"
            onClick={() => {
              setActiveItem("home");
              setInBuild(false);
              setBuildTopic(false);
              // Reset all of the other info
            }}
          >
            Make a New Character
          </Button>
        </div>
      )}
    </div>
  );
};
export default CharacterPage;
