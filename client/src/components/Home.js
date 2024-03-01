import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div
        className="image-container"
        style={{
          position: 'relative',
          height: '460px', 
          color: '#fff',
          textAlign: 'center',
          width: '1150px',
          margin: '220px',
          marginTop: '30px',
        }}
      >
        <img
          src="https://www.jobberman.com/discover/wp-content/uploads/2016/10/Jobberman_Preparing_for_Interviews.png"
          alt="Background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', 
            zIndex: 1,
            marginBottom:'20px'
          }}
        />
        <div style={{ zIndex: 3 }}>
          <Link to="/Signup">
            <button
              className="get-started-button"
              style={{
                backgroundColor: 'rgb(219, 60, 21)',
                color: '#fff',
                padding: '10px 20px',
                fontSize: '1rem',
                border: '2px solid white', 
                borderRadius: '20px',
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)', 
                transformOrigin: 'bottom', 
                transform: 'translateY(0)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              Get Started <span>&rarr;</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
