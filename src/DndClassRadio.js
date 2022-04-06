import { Form, Radio } from "semantic-ui-react";

const DndClassRadio = ({ dndClass, setdndClass, formValue, setFormValue }) => {
  const handleChange = (value) => {
    setFormValue(value);
  };
  return (
    <div className="RaceRadio">
      <Form>
        <Radio
          className="radio-input"
          value="Barbarian"
          checked={formValue === "Barbarian"}
          onChange={() => handleChange("Barbarian")}
        />
        Barbarian
        <Radio
          className="radio-input"
          value="Cleric"
          checked={formValue === "Cleric"}
          onChange={() => handleChange("Cleric")}
        />
        Cleric
        <Radio
          className="radio-input"
          value="Druid"
          checked={formValue === "Druid"}
          onChange={() => handleChange("Druid")}
        />{" "}
        Druid
        <Radio
          className="radio-input"
          style={{ color: "white" }}
          //   label="Gnome"
          value="Rogue"
          checked={formValue === "Rogue"}
          onChange={() => handleChange("Rogue")}
        />{" "}
        Rogue
        <button onClick={() => setFormValue(null)}>Nothing</button>
      </Form>
    </div>
  );
};
export default DndClassRadio;
