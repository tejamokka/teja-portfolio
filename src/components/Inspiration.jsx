import { useState } from "react";
import virat from "../assets/virat.jpg"; // Import the image of Virat Kohli
import kid from "../assets/cheeku.jpg"; // Import the image of the kid

function Inspiration() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="inspiration" className="inspiration">
      <h2>Hall of Inspiration</h2>

      <div className="inspiration-profiles">

  <button onClick={() => setSelected("virat")}>
    <img src={virat} alt="Virat Kohli" />
    Virat Kohli
  </button>

  <button onClick={() => setSelected("kid")}>
    <img src={kid} alt="The Kid" />
    The Kid
  </button>

</div>

      {selected === "virat" && (
  <div className="profile-info">
    <h3>Virat Kohli</h3>
    <p>His discipline, dedication, and mindset inspire me.</p>
  </div>
)}
      {selected === "person2" && (
        <div className="inspiration-info">
          <h3>Person 2</h3>
          <p>
            Information about the second person will appear here.
          </p>
        </div>
      )}

    </section>
  );
}

export default Inspiration;