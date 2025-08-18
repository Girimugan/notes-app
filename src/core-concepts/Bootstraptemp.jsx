import React, { useState, useEffect, Component } from "react";

function Useeffect() {
    const [time, settime] = useState(new Date());
    
    useEffect(() =>{
      const interval = setInterval(() =>{
        settime(new Date());
      }, 1000);

      return () => {
       clearInterval(interval);
      };
    }, []);

    return <h1>{time.toLocaleTimeString()}</h1>
}

export default Useeffect;


//    * Fetching data*   //




// import React, { useState, useEffect, Component } from "react";

// function Useeffect() {

//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(fetch('https://jsonplaceholder.typicode.com/posts'))
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch((error) => console.error('Error fetching  data;', error));

//   }, []);
  

//   if (loading) return <p>Loading...</p>

//   return (
//     <ul>
//       {data.slice(0, 5).map((post) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   );


// }

// export default Useeffect;


//    ///

// import React, { useState, useEffect, Component } from "react";

// function Useeffect(props) {
//     const [time, settime] = useState(0);
    
//     useEffect(() =>{ console.log("hi");
//     });
//     useEffect(() =>{ console.log("welcome");
//     },[]);
//     useEffect(() =>{ console.log("ok");
//     },[time]);

//     return <h1 onClick={()=>settime(time+7)}>{time}
//     <span>{props.res}</span></h1>
// }

//  const [p,c]=useState("git")

// export default Useeffect;


//    * Props passing values *   //

//  const userData = {
//     name :"Giri",
//     Age : 20,
//     email : "giri@gmail.com",
//   };

//   return la  <Props
//       name = {userData.name} email = {userData.email} />
//     </>

//     import React from "react";
    
//     function Value(props) {
//       return (
//         <div>
//           <h1>{props.name}</h1>
//           <h1>{props.email}</h1>
//         </div>
//       );
//     }
    
//     export default Value;



// /    ** Use Reducer  **     ///



//   const counter = (count, action) => {
//     switch (action.type) {
//       case "a":
//         return count + 1
//       case "b":
//         return count - 1
//       default:
//         return count
//     }

//   }

//   const [counts, dispatch] = useReducer(counter, 0)
//   return (
//     <div style={style}>
//       <p>Component Three</p>
//       <p>counter value {counts}</p>
//       <button onClick={() => { dispatch({ type: "a", payload: "Giri" }) }}>incre</button>
//       <button onClick={() => { dispatch({ type: "b" }) }}>decr</button>
//       <button onClick={() => { dispatch({ type: "c" }) }}>multi</button>
//       <button onClick={updateStyle}>Click Me</button>
//     </div>
//   );
// }

//  width: 700px;
//   margin: auto;
//   padding: 30px;
//   border: 2px solid lightgreen;
//   border-radius: 10px;
//   background-color: lightpink;