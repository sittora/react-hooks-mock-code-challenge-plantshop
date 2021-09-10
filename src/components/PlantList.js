import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onDeletePlant, onUpdatePlant }) {
  // const [plants, setPlants] = useState([])


  // useEffect(() => {
  //   fetch(`http://localhost:6001/plants`)
  //     .then(response => response.json())
  //     .then(plantsArray => {
  //       setPlants(plantsArray)
  //     })
  // }, [])


  //  plants.map ((plantObject) => (
  //    <PlantCard key={plantObject.id} name={plantObject.name} image={plantObject.image} price={plantObject.price}/>;
  // })



  return (
    <ul className="cards">
      {plants.map ((plant) => {
     <PlantCard key={plant.id} plant={plant} onDeletePlant={onDeletePlant} onUpdatePlant={onUpdatePlant}/>;
      
  })}
      </ul>
  );
}

export default PlantList;



