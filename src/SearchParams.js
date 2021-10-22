import { useState } from "react";

const ANIMALS = ["dog", "cat", "bird", "lizard", "turtle"];

const SearchParams = () => {
  const [location, setLocation] = useState("Broken Arrow, OK");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");

  const breeds = [""];

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
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
