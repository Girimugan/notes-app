import { useState } from "react";

function Equal() {
    const [person, setPerson] = useState({
        Name: "Giri",
        Age: 19,
        Location: "Chennai",
    });

    return (
        <div>
            <h5>Name:{person.Name}</h5>
            <h5>Age:{person.Age}</h5>
            <h5>Location:{person.Location}</h5>

            {/* <button onClick={() => setPerson({ ...person, Name: "Girimugan" })}>
                Update Name
            </button>

             <button onClick={() => setPerson({ ...person, Age: 20 })}>
                Update Age
            </button>

            <button onClick={() => setPerson({ ...person, Location: "Coimbatore" })}>
                Update Location
            </button> */}

            <button onClick={() => setPerson({Name:"Girimuagn",Age:20,Location:"Coimbatore"})}>Update all</button>

        </div>
    )
}
export default Equal;