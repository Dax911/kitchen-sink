import React, { useEffect } from "react";

const MyComponent = ({walletaddress}: any) => {
  const [showElement, setShowElement] = React.useState(true);
  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 5000);
  }, []);

if (showElement === true) {
  return (
    <div>
      <div>
          <div className="md:flex-row animate-fade-in">
          <div className="alert shadown-lg rounded alert-success md:flex-row animate-fade-in">{walletaddress}</div>

          </div>
        {" "}
      </div>
    </div>
  );
}
};

export default MyComponent;
