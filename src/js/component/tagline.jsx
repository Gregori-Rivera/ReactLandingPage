import React from "react";

const Tagline = () => {
  return (
    <div
      className="bg-image p-3 shadow-1-strong mb-5 "
      style={{
        backgroundImage: `URL('https://picsum.photos/id/213/2000/300')`,
        backgroundSize: "cover",
        height: "270px", 
      }}
    >
        
      <h1 className="display-1 mb-3 pb-2 text-dark text-start">
        A Warm Welcome!
      </h1>
      <p className="text-start text-dark">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
      <div className="text-start">
        <button type="button" className="btn btn-primary">
          Call to Action!
        </button>
      </div>
    </div>
  );
};

export default Tagline;
