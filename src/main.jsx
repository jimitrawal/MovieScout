import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.css'

import StarRating from "./StarRating";
import { useState } from "react";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating}/>
//       <p>This movies was rated {movieRating} stars</p>
//     </div>
//   );
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={10} />
    <StarRating maxRating={5} defaultRating={2} />

    <Test /> */}
  </React.StrictMode>
);
