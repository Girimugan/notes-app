import React from 'react';
import About from './About';
import Contact from './Contact';
import User from './User';

function Home() {
  const bgStyle = {
    background: 'linear-gradient(135deg, #ff7e5f, #feb47b, #86fde8, #acb6e5)',
    width: '100%',
    height: '600px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '2rem',
    fontWeight: 'bold',
  };

  return (
    <>
      <div style={bgStyle}>
        <h1>Transforming Ideas Into Beautiful Experiences</h1>
      </div>
      <About />
      <Contact />
      <User />
    </>
  );
}

export default Home;
