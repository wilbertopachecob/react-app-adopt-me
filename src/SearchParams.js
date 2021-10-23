import { useState, useEffect } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
import env from "./const/env";

const ANIMALS = ["dog", "cat", "bird", "reptile", "rabbit"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);

  const [breeds] = useBreedList(animal);
  // const breeds = [""];

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function updateAnimal(e) {
    console.log(e.target.value);
    setAnimal(e.target.value);
  }

  async function requestPets(e = null) {
    console.log("CALLED", e);
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
        <button onClick={(e) => requestPets(e)} type="button">
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
