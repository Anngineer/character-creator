import { Form, Radio } from "semantic-ui-react";

const DndClassRadio = ({ dndClass, setdndClass, formValue, setFormValue }) => {
  const handleChange = (value) => {
    setFormValue(value);
  };
  return (
    <div className="class-radio">
      <Form>
        <div className="radio-option">
          <Radio
            className="radio-input"
            value="Barbarian"
            checked={formValue === "Barbarian"}
            onChange={() => handleChange("Barbarian")}
          />
          Barbarian
        </div>
        <div className="radio-option">
          <Radio
            className="radio-input"
            value="Cleric"
            checked={formValue === "Cleric"}
            onChange={() => handleChange("Cleric")}
          />
          Cleric
        </div>
        <div className="radio-option">
          <Radio
            className="radio-input"
            value="Druid"
            checked={formValue === "Druid"}
            onChange={() => handleChange("Druid")}
          />{" "}
          Druid
        </div>
        <div className="radio-option">
          <Radio
            className="radio-input"
            style={{ color: "white" }}
            value="Rogue"
            checked={formValue === "Rogue"}
            onChange={() => handleChange("Rogue")}
          />{" "}
          Rogue
        </div>
        {/* <button onClick={() => setFormValue(null)}>Nothing</button> */}
      </Form>
    </div>
  );
};
export default DndClassRadio;
