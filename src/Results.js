import Pet from "./Pet";
import { STATES } from "./const/states";

const Results = ({ pets, status }) => (
  <div className="search">
    {status === STATES.LOADING ? <div className="loader"></div> : ""}
    {!pets ? (
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

export default Results;
