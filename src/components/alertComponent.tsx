import React, { useEffect } from "react";

const MyComponent = ( {walletaddress}: any, showElement = true) => 

showElement ?
    <div>
      <div>
          <div className="md:flex-row animate-fade-in">
          <div className="alert shadown-lg rounded alert-success md:flex-row animate-fade-in">{walletaddress}</div>

          </div>
        {" "}
      </div>
    </div> : false



export default MyComponent;
