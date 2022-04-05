const humanRace = {
  raceName: "Human",
  modSTR: 1,
  modDEX: 1,
  modCON: 1,
  modINT: 1,
  modWIS: 1,
  modCHA: 1,
};
const elfRace = {
  raceName: "Elf",
  modSTR: 0,
  modDEX: 1,
  modCON: 0,
  modINT: 0,
  modWIS: 0,
  modCHA: 0,
};
const halforcRace = {
  raceName: "Half-Orc",
  modSTR: 2,
  modDEX: 0,
  modCON: 1,
  modINT: 0,
  modWIS: 0,
  modCHA: 0,
};
const gnomeRace = {
  raceName: "Gnome",
  modSTR: 0,
  modDEX: 0,
  modCON: 0,
  modINT: 2,
  modWIS: 0,
  modCHA: 0,
};

const Backend = { humanRace, elfRace, halforcRace, gnomeRace };

export default Backend;
