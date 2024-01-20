import { useState } from "react";
import CharacterSVG from "./assets/characterSVG";

export default function CreatorOptions() {
  const [hairStyle, setHairStyle] = useState("1");
  const [beardStyle, setBeardStyle] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [eyeColor, setEyeColor] = useState("");

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
      <select id="hairr" onChange={(event) => setHairStyle(event.target.value)}>
        <option value="1">styl 1</option>
        <option value="2">styl 2</option>
        <option value="3">styl 3</option>
        <option value="4">styl 4</option>
        <option value="5">styl 5</option>
        <option value="6">styl 6</option>
        <option value="7">styl 7</option>
      </select>
      <br />
      Broda:
      <select
        id="beard"
        onChange={(event) => setBeardStyle(event.target.value)}
      >
        <option value="1">styl 1</option>
        <option value="2">styl 2</option>
        <option value="3">styl 3</option>
        <option value="4">styl 4</option>
        <option value="5">styl 5</option>
        <option value="6">styl 6</option>
      </select>
      <br />
      Kolor włosów:
      <select
        id="hair_color"
        onChange={(event) => setHairColor(event.target.value)}
      >
        <option value="#F0F0F0">białe</option>
        <option value="#7A7A7A">szare</option>
        <option value="#000000">czarne</option>
        <option value="#634225">brązowe</option>
        <option value="#FFC75D">bląd</option>
        <option value="#FF704A">rude</option>
      </select>
      <br />
      Kolor oczu:
      <select
        id="eye_color"
        onChange={(event) => setEyeColor(event.target.value)}
      >
        <option value="#000000">czarne</option>
        <option value="#7E4816">brązowe</option>
        <option value="#FFC54A">piwne</option>
        <option value="#2E2BC1">niebieskie</option>
        <option value="#378818">zielone</option>
      </select>
      <br />
    </>
  );
}
