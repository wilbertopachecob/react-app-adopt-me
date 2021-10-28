import { useState, useEffect, useContext } from "react";
import useBreedList from "../hooks/useBreedList";
import Results from "./Results";
import Select from "./Select";
import env from "../const/env";
import ThemeContext from "../contexts/ThemeContext";

const ANIMALS = ["dog", "cat", "bird", "reptile", "rabbit"];
const COLORS = ["darkblue", "hotpink", "thistle", "coral"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

  const [breeds, status] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets(e = null) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const res = await fetch(
      `${env.HOST}pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
    return false;
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          <input
            value={location}
            id="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <Select
          setCB={setAnimal}
          id={`animals`}
          value={animal}
          label={`Animals`}
          items={["", ...ANIMALS]}
        ></Select>
        <Select
          setCB={setBreed}
          id={`breeds`}
          value={breed}
          label={`Breeds`}
          items={["", ...breeds]}
        ></Select>
        <Select
          setCB={setTheme}
          id={`btnTheme`}
          value={theme}
          label={`Buttons Theme`}
          items={COLORS}
        ></Select>
        <button
          style={{ backgroundColor: theme }}
          onClick={(e) => requestPets(e)}
          type="button"
        >
          Submit
        </button>
      </form>
      <Results pets={pets} status={status} />
    </div>
  );
};

export default SearchParams;
