import React from "react";
import { Link } from "react-router-dom";

const Learn = () => (
  <div>
    <h1 className="text-center">hello</h1>
    <p>
      Lorem ipsum dolor sit amet, est ut enim consequat. Nostrum fastidii
      partiendo sed ne, no mutat ludus aperiri mea, per in choro dolorem
      electram. Invidunt reprimique assueverit quo ne, eruditi graecis pro ut.
      Usu ut diceret scaevola evertitur, appareat voluptatibus ad vel.
    </p>
    <Link to="/contact" role="button" className="btn btn-link">
      Learn Less
    </Link>
  </div>
);

export default Learn;
