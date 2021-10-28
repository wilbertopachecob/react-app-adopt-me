import { useState, useEffect, useContext } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
import env from "./const/env";
import ThemeContext from "./ThemeContext";

const ANIMALS = ["dog", "cat", "bird", "reptile", "rabbit"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

  const [breeds, status] = useBreedList(animal);
  // const breeds = [""];

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function updateAnimal(e) {
    console.log(e.target.value);
    setAnimal(e.target.value);
  }

  async function requestPets(e = null) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const res = await fetch(
      `${env.HOST}pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    console.log(json.pets);
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
        <label htmlFor="animals">
          Animals
          <select
            value={animal}
            id="animals"
            onChange={updateAnimal}
            onBlur={updateAnimal}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breeds">
          Breeds
          <select
            value={breed}
            id="breeds"
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="btnTheme">
          Buttons Theme
          <select
            value={theme}
            id="btnTheme"
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option value="darkblue">Dark blue</option>
            <option value="hotpink">Hot Pink</option>
            <option value="thistle">Thistle</option>
            <option value="coral">Coral</option>
          </select>
        </label>
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
