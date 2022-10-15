import React, { useState, useEffect } from "react";

const SingleColor = ({ index, rgb, weight, hexColor }) => {
  console.log(hexColor);
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [alert]);

  const hexValue = `#${hexColor}`;
  console.log(hexValue);
  return (
    <article
      className={`color ${index > 10 ? "color-light" : null} `}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">Weight: {weight}%</p>
      <p className="color-value">{hexValue}</p>
      <button
        type="submit"
        className="btn-small"
        onClick={() => {
          setAlert(true);
          navigator.clipboard.writeText(hexValue);
        }}
      >
        Copy to clipboard
      </button>
      {alert ? <p className="alert">copied</p> : null}
    </article>
  );
};

export default SingleColor;
