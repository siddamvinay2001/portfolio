export const TextSection = ({ currentState, setCurrentState }) => {
  const textConfigs = [
    {
      id: 0,
      title: "Welcome explorer",
      description: ["Scroll to begin the journey"],
    },
    {
      id: 1,
      title: "Work Experience",
      description: ["IC2"],
    },
    {
      id: 2,
      title: "Education",
      description: ["IC2"],
    },
    {
      id: 3,
      title: "Projects",
      description: ["HTML,CSS"],
    },
    {
      id: 4,
      title: "Skills",
      description: ["Our flight attendants will help you have a great journey"],
    },
    {
      id: 5,
      title: "Contact",
      description: ["We provide a large selection of media..."],
    },
  ];

  const title = currentState > -1 ? textConfigs[currentState].title : "";
  const description =
    currentState > -1 ? textConfigs[currentState].description : "";

  return (
    <div className="absolute top-28 left-0 right-0 z-10 flex flex-col items-center  justify-center">
      {currentState > -1 && (
        <div className="text-center py-4 px-8 bg-white max-w-3/5 font-serif text-black rounded-md">
          {title.length > 0 && <div>{title}</div>}
          {description.length > 0 &&
            description.map((sentence, index) => (
              <div key={index}>{sentence}</div>
            ))}
          <button
            className="mt-3 w-8 h-8 text-sm text-red-200 bg-red-500 rounded-lg"
            onClick={() => setCurrentState(-1)}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};
