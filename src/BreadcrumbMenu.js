import { Breadcrumb } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Media from "react-media";

const BreadcrumbMenu = ({ activeItem, setActiveItem }) => {
  const homeBreadcrumb = (
    <Breadcrumb className="breadcrumbMenu">
      <Breadcrumb.Section
        as={Link}
        to="/"
        onClick={() => setActiveItem("home")}
      >
        Home
      </Breadcrumb.Section>
    </Breadcrumb>
  );
  const raceBreadcrumb = (
    <Breadcrumb className="breadcrumbMenu">
      <Breadcrumb.Section
        as={Link}
        to="/"
        onClick={() => setActiveItem("home")}
      >
        Home
      </Breadcrumb.Section>
      <Breadcrumb.Divider icon="right chevron" />
      <Breadcrumb.Section
        as={Link}
        to="/race"
        onClick={() => setActiveItem("race")}
      >
        Race
      </Breadcrumb.Section>
    </Breadcrumb>
  );
  const classBreadcrumb = (
    <Breadcrumb className="breadcrumbMenu">
      <Breadcrumb.Section
        as={Link}
        to="/"
        onClick={() => setActiveItem("home")}
      >
        Home
      </Breadcrumb.Section>
      <Breadcrumb.Divider icon="right chevron" />
      <Breadcrumb.Section
      // as={Link}
      // to="/race"
      // onClick={() => setActiveItem("race")}
      >
        Race
      </Breadcrumb.Section>
      <Breadcrumb.Divider icon="right arrow" />
      <Breadcrumb.Section
        as={Link}
        to="/classes"
        onClick={() => setActiveItem("classes")}
      >
        Classes
      </Breadcrumb.Section>
    </Breadcrumb>
  );
  const abilityBreadcrumb = (
    <Breadcrumb className="breadcrumbMenu">
      <Breadcrumb.Section
        as={Link}
        to="/"
        onClick={() => setActiveItem("home")}
      >
        Home
      </Breadcrumb.Section>
      <Breadcrumb.Divider icon="right chevron" />
      <Breadcrumb.Section
      // as={Link}
      // to="/race"
      // onClick={() => setActiveItem("race")}
      >
        Race
      </Breadcrumb.Section>
      <Breadcrumb.Divider icon="right arrow" />
      <Breadcrumb.Section
      // as={Link}
      // to="/classes"
      // onClick={() => setActiveItem("classes")}
      >
        Classes
      </Breadcrumb.Section>
      <Breadcrumb.Divider icon="right arrow" />
      <Breadcrumb.Section
        as={Link}
        to="/ability"
        onClick={() => setActiveItem("ability")}
      >
        Ability
      </Breadcrumb.Section>
    </Breadcrumb>
  );
  const characterBreadcrumb = (
    <Breadcrumb className="breadcrumbMenu">
      <Breadcrumb.Section
        as={Link}
        to="/"
        onClick={() => setActiveItem("home")}
      >
        Home
      </Breadcrumb.Section>
      <Breadcrumb.Divider icon="right chevron" />
      <Breadcrumb.Section
        as={Link}
        to="/race"
        onClick={() => setActiveItem("race")}
      >
        Race
      </Breadcrumb.Section>
      <Breadcrumb.Divider icon="right arrow" />
      <Breadcrumb.Section
        as={Link}
        to="/classes"
        onClick={() => setActiveItem("classes")}
      >
        Classes
      </Breadcrumb.Section>
      <Breadcrumb.Divider icon="right arrow" />
      <Breadcrumb.Section
        as={Link}
        to="/ability"
        onClick={() => setActiveItem("ability")}
      >
        Ability
      </Breadcrumb.Section>
      <Breadcrumb.Divider icon="right arrow" />

      <Breadcrumb.Section
        as={Link}
        to="/character"
        onClick={() => setActiveItem("character")}
      >
        Character
      </Breadcrumb.Section>
    </Breadcrumb>
  );

  //
  return (
    <Media
      queries={{
        small: "(max-width: 499px)",
        medium: "(min-width: 500px)",
      }}
    >
      {(matches) => (
        <div>
          {matches.small && activeItem === "home" && <>{homeBreadcrumb}</>}
          {matches.small && activeItem === "race" && <>{raceBreadcrumb}</>}
          {matches.small && activeItem === "classes" && <>{classBreadcrumb}</>}

          {matches.small && activeItem === "ability" && (
            <>{abilityBreadcrumb}</>
          )}
          {matches.small && activeItem === "character" && (
            <>{characterBreadcrumb}</>
          )}
        </div>
      )}
    </Media>
  );
};
export default BreadcrumbMenu;
