export const WelcomePage = ({ onPlay, setOnPlay }) => {
  return (
    <div className={`overlay ${onPlay ? "opacity-0 w-0 h-0" : ""}`}>
      <div className="intro">
        <h1 className="logo">Siddam Vinay</h1>
        <h1 className="message">
          Welcome to my journey, fasten your seat belts.
        </h1>
        <button
          className="explore"
          onClick={() => {
            setOnPlay(!onPlay);
          }}
        >
          Explore
        </button>
      </div>
    </div>
  );
};
