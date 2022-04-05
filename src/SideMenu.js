import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Media from "react-media";

function SideMenu(props) {
  const handleMenuClick = props.handleMenuClick;
  const activeItem = props.activeItem;
  const sideMenu = (
    <Menu pointing secondary inverted vertical>
      <Menu.Item
        value="home"
        name="home"
        active={activeItem === "home"}
        onClick={(e) => handleMenuClick(e, "home")}
        as={Link}
        to="/"
      />
      <Menu.Item
        value="race"
        name="race"
        active={activeItem === "race"}
        // onClick={(e) => handleMenuClick(e, "race")}
        // as={Link}
        // to="/race"
      />
      <Menu.Item
        value="classes"
        name="classes"
        active={activeItem === "classes"}
        // onClick={(e) => handleMenuClick(e, "classes")}
        // as={Link}
        // to="/classes"
      />
      <Menu.Item
        value="ability"
        name="ability"
        active={activeItem === "ability"}
        // onClick={(e) => handleMenuClick(e, "ability")}
        // as={Link}
        // to="/ability"
      />
      <Menu.Item
        value="character"
        name="character"
        active={activeItem === "character"}
        // onClick={(e) => handleMenuClick(e, "character")}
        // as={Link}
        // to="/character"
      />
    </Menu>
  );
  return (
    <Media
      queries={{
        small: "(max-width: 499px)",
        medium: "(min-width: 500px)",
      }}
    >
      {(matches) => (
        <div>
          {matches.small && <></>}
          {matches.medium && <div>{sideMenu}</div>}
        </div>
      )}
    </Media>
  );
}
export default SideMenu;
