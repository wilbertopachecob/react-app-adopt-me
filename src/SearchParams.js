import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Broken Arrow, OK");
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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
