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
        onClick={(e) => handleMenuClick(e, "race")}
        as={Link}
        to="/race"
        // disabled
      />
      <Menu.Item
        value="classes"
        name="classes"
        active={activeItem === "classes"}
        onClick={(e) => handleMenuClick(e, "classes")}
        as={Link}
        to="/classes"
      />
      <Menu.Item
        value="ability"
        name="ability"
        active={activeItem === "ability"}
        onClick={(e) => handleMenuClick(e, "ability")}
        as={Link}
        to="/ability"
      />
      <Menu.Item
        value="description"
        name="description"
        active={activeItem === "description"}
        onClick={(e) => handleMenuClick(e, "description")}
        as={Link}
        to="/description"
      />
    </Menu>
  );
  // Home Menu
  const homeSideMenu = (
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
        onClick={(e) => handleMenuClick(e, "race")}
        as={Link}
        to="/race"
      />
      <Menu.Item
        value="classes"
        name="classes"
        active={activeItem === "classes"}
        // onClick={(e) => handleMenuClick(e, "classes")}
        // as={Link}
        // to="/classes"
        // disabled
        className="disabled-menu-link"
      />
      <Menu.Item
        value="ability"
        name="ability"
        active={activeItem === "ability"}
        // onClick={(e) => handleMenuClick(e, "ability")}
        // as={Link}
        // to="/ability"
        // disabled
        className="disabled-menu-link"
      />
      <Menu.Item
        value="description"
        name="description"
        active={activeItem === "description"}
        // onClick={(e) => handleMenuClick(e, "description")}
        // as={Link}
        // to="/description"
        // disabled
        className="disabled-menu-link"
      />
    </Menu>
  );
  // Race Menu
  const raceSideMenu = (
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
        onClick={(e) => handleMenuClick(e, "race")}
        as={Link}
        to="/race"
      />
      <Menu.Item
        value="classes"
        name="classes"
        active={activeItem === "classes"}
        // onClick={(e) => handleMenuClick(e, "classes")}
        // as={Link}
        // to="/classes"
        // disabled
        className="disabled-menu-link"
      />
      <Menu.Item
        value="ability"
        name="ability"
        active={activeItem === "ability"}
        // onClick={(e) => handleMenuClick(e, "ability")}
        // as={Link}
        // to="/ability"
        // disabled
        className="disabled-menu-link"
      />
      <Menu.Item
        value="description"
        name="description"
        active={activeItem === "description"}
        // onClick={(e) => handleMenuClick(e, "description")}
        // as={Link}
        // to="/description"
        // disabled
        className="disabled-menu-link"
      />
    </Menu>
  );
  const classesSideMenu = (
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
        // disabled
        className="disabled-menu-link"
      />
      <Menu.Item
        value="classes"
        name="classes"
        active={activeItem === "classes"}
        onClick={(e) => handleMenuClick(e, "classes")}
        as={Link}
        to="/classes"
        // disabled
      />
      <Menu.Item
        value="ability"
        name="ability"
        active={activeItem === "ability"}
        // onClick={(e) => handleMenuClick(e, "ability")}
        // as={Link}
        // to="/ability"
        // disabled
        className="disabled-menu-link"
      />
      <Menu.Item
        value="description"
        name="description"
        active={activeItem === "description"}
        // onClick={(e) => handleMenuClick(e, "description")}
        // as={Link}
        // to="/description"
        // disabled
        className="disabled-menu-link"
      />
    </Menu>
  );
  const abilitySideMenu = (
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
        // disabled
        className="disabled-menu-link"
      />
      <Menu.Item
        value="classes"
        name="classes"
        active={activeItem === "classes"}
        // onClick={(e) => handleMenuClick(e, "classes")}
        // as={Link}
        // to="/classes"
        // disabled
        className="disabled-menu-link"
      />
      <Menu.Item
        value="ability"
        name="ability"
        active={activeItem === "ability"}
        onClick={(e) => handleMenuClick(e, "ability")}
        as={Link}
        to="/ability"
        // disabled
        className="disabled-menu-link"
      />
      <Menu.Item
        value="description"
        name="description"
        active={activeItem === "description"}
        // onClick={(e) => handleMenuClick(e, "description")}
        // as={Link}
        // to="/description"
        // disabled
        className="disabled-menu-link"
      />
    </Menu>
  );
  const descriptionSideMenu = (
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
        // disabled
        className="disabled-menu-link"
      />
      <Menu.Item
        value="classes"
        name="classes"
        active={activeItem === "classes"}
        onClick={(e) => handleMenuClick(e, "classes")}
        as={Link}
        to="/classes"
        // disabled
      />
      <Menu.Item
        value="ability"
        name="ability"
        active={activeItem === "ability"}
        // onClick={(e) => handleMenuClick(e, "ability")}
        // as={Link}
        // to="/ability"
        // disabled
        className="disabled-menu-link"
      />
      <Menu.Item
        value="description"
        name="description"
        active={activeItem === "description"}
        onClick={(e) => handleMenuClick(e, "description")}
        as={Link}
        to="/description"
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

          {matches.medium && activeItem === "home" && <>{homeSideMenu}</>}
          {matches.medium && activeItem === "race" && <>{raceSideMenu}</>}
          {matches.medium && activeItem === "classes" && <>{classesSideMenu}</>}

          {matches.medium && activeItem === "ability" && <>{abilitySideMenu}</>}
          {matches.medium && activeItem === "description" && (
            <>{descriptionSideMenu}</>
          )}
        </div>
      )}
    </Media>
  );
}
export default SideMenu;
