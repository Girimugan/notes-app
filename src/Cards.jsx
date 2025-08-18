import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css';

const containerStyle = {
  background: "linear-gradient(135deg,rgb(41, 167, 240), #fcb69f)", 
  padding: "130px 0", 
  minHeight: "100vh"
  
};

const cardStyle = {
  width: "249px",
  height: "400px",
  background: "#f8f9fa",
  border: "1px solid #ddd",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  margin: "0 auto",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
  
};

const Democards = () => {
  return (
    <div style={containerStyle}>
      <div className="container">
        <div className="row justify-content-center gap-3">

          <div className="col-auto">
            <div style={cardStyle}>
            <div className="number"><h1>01</h1></div>
              <h4>Teaching</h4>
              <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
              <button className="btn1">LEARN MORE</button>
            </div>
          </div>

          <div className="col-auto">
            <div style={cardStyle}>
              <div className="number"><h1>02</h1></div>
              <h4>Innovations</h4>
              <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
              <button className="btn1">LEARN MORE</button>
            </div>
          </div>

          <div className="col-auto">
            <div style={cardStyle}>
              <div className="number"><h1>03</h1></div>
              <h4>Student</h4>
              <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
              <button className="btn1">LEARN MORE</button>
            </div>
          </div>

          <div className="col-auto">
            <div style={cardStyle}>
              <div className="number"><h1>04</h1></div>
              <h4>Resoures</h4>
              <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
              <button className="btn1">LEARN MORE</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Democards;
