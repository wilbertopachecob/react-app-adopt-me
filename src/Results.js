import Pet from "./Pet";

const Results = ({pets}) => (
    <div className="search">
        {
            !pets ? (
                <h1>No pets found</h1>
            ) : (
                pets.map(pet => (
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
            )
        }
    </div>
)

export default Results;