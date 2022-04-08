import { Form, Radio } from "semantic-ui-react";

const RaceRadio = ({ race, setRace, formValue, setFormValue }) => {
  const handleChange = (value) => {
    setFormValue(value);
  };
  return (
    <div className="race-radio">
      <Form>
        <div className="radio-option">
          <Radio
            className="radio-input"
            //   label="Elf"
            value="Elf"
            checked={formValue === "Elf"}
            onChange={() => {
              handleChange("Elf");
              console.log("clicked ELF");
            }}
          />{" "}
          Elf{" "}
        </div>
        <div className="radio-option">
          <Radio
            className="radio-input"
            //   label="Human"
            value="Human"
            checked={formValue === "Human"}
            onChange={() => handleChange("Human")}
          />
          Human
        </div>
        <div className="radio-option">
          <Radio
            className="radio-input"
            //   label="Half-Orc"
            value="Half-Orc"
            checked={formValue === "Half-Orc"}
            onChange={() => handleChange("Half-Orc")}
          />{" "}
          Half Orc
        </div>
        <div className="radio-option">
          <Radio
            className="radio-input"
            style={{ color: "white" }}
            //   label="Gnome"
            value="Gnome"
            checked={formValue === "Gnome"}
            onChange={() => handleChange("Gnome")}
          />{" "}
          Gnome
        </div>
        {/* <button onClick={() => setFormValue(null)}>Nothing</button> */}
      </Form>
    </div>
  );
};
export default RaceRadio;
