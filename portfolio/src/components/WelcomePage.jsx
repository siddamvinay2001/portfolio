export const WelcomePage = ({ onPlay, setOnPlay }) => {
    return (
      <div className="overlay">
        <div className="intro">
          <h1 className="logo">Siddam Vinay</h1>
          <h1 className="message">Welcome to my journey, fasten your seat belts.</h1>
          <button
            className="explore"
            onClick={() => {
              setOnPlay(!onPlay);
              console.log('Button clicked! New onPlay state:', !onPlay);
            }}
          >
            Explore
          </button>
        </div>
      </div>
    );
  };
  