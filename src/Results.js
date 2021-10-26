import Pet from "./Pet";
import { STATES } from "./const/states";

const Results = ({ pets, status }) => {
  console.log({status});
  if (status === STATES.LOADING) {
    return (
      <div className="search">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="search">
      {!pets.length ? (
        <h1>No pets found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            key={pet.id}
            location={`${pet.city}, ${pet.state}`}
            images={pet.images}
            breed={pet.breed}
            id={pet.id}
            name={pet.name}
          />
        ))
      )}
    </div>
  );
};

export default Results;
