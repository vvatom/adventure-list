import { useState } from "react";
import CharacterSVG from "./assets/CharacterSVG";
import Select from "./Select";

export default function CreatorOptions() {
  const [hairStyle, setHairStyle] = useState("1");
  const [beardStyle, setBeardStyle] = useState("1");
  const [hairColor, setHairColor] = useState("#F0F0F0");
  const [eyeColor, setEyeColor] = useState("#000000");

  return (
    <>
      <CharacterSVG
        hairStyle={hairStyle}
        beardStyle={beardStyle}
        hairColor={hairColor}
        eyeColor={eyeColor}
      />
      <br />
      Włosy:
      <Select
        onChange={setHairStyle}
        options={[
          { value: "1", text: "styl 1" },
          { value: "2", text: "styl 2" },
          { value: "3", text: "styl 3" },
          { value: "4", text: "styl 4" },
          { value: "5", text: "styl 5" },
          { value: "6", text: "styl 6" },
          { value: "7", text: "styl 7" },
        ]}
        value={hairStyle}
      />
      <br />
      Broda:
      <Select
        onChange={setBeardStyle}
        options={[
          { value: "1", text: "styl 1" },
          { value: "2", text: "styl 2" },
          { value: "3", text: "styl 3" },
          { value: "4", text: "styl 4" },
          { value: "5", text: "styl 5" },
          { value: "6", text: "styl 6" },
        ]}
        value={beardStyle}
      />
      <br />
      Kolor włosów:
      <Select
        onChange={setHairColor}
        options={[
          { value: "#F0F0F0", text: "białe" },
          { value: "#7A7A7A", text: "szare" },
          { value: "#000000", text: "czarne" },
          { value: "#634225", text: "brązowe" },
          { value: "#FFC75D", text: "bląd" },
          { value: "#FF704A", text: "rude" },
        ]}
        value={hairColor}
      />
      <br />
      Kolor oczu:
      <Select
        onChange={setEyeColor}
        options={[
          { value: "#000000", text: "czarne" },
          { value: "#7E4816", text: "brązowe" },
          { value: "#FFC54A", text: "piwne" },
          { value: "#2E2BC1", text: "niebieskie" },
          { value: "#378818", text: "zielone" },
        ]}
        value={eyeColor}
      />
      <br />
    </>
  );
}
