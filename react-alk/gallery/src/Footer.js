import React from "react";

//css-in-js
const style = {
  color: "purple",
  padding: "14px",
  backgroundColor: "rgba(173, 255, 47, 0.9)"
};

const Footer = () => {
  return (
    <footer style={style}>
        <div className='Footer_bold'>ALK</div>
        {/* powyżej css z pliku Footer.css */}
      <div>ALK</div>
      {/* powyżej css in js ze styli powyżej */}
      <div>2020</div>
    </footer>
  );
};

export default Footer;
