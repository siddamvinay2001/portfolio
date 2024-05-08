"use client";

export const TextSection = ({ currentState, setCurrentState }) => {
  const textConfigs = [
    {
      id: 0,
      title: "Welcome explorer",
      description: "Scroll to begin journey",
    },
    {
      id: 1,
      title: "Work Experience",
      description: `• Software engineer IC2 at Service Now\n  - Led end-to-end implementation of a dynamic product details page and designed RESTful APIs for fetching product details.\n  - Implemented pagination on the home page, reducing load time from 120s to 3s and enhancing user experience.\n  - Resolved HTTP errors (400/413) by optimizing database calls and payload sizes, improving system reliability.\n  - Developed an internal testing tool for ServiceNow applications, streamlining testing processes.\n  - Designed and developed a comprehensive dashboard system to visualize collected metrics, providing actionable insights and enhancing data-driven decision-making processes within the organization.`,
    },
    {
      id: 2,
      title: "Education",
      description: `• B.Tech - National Institute of Technology Warangal\n  Electronics and Communication Engineering\n  Duration: 08/2018 - 06/2022\n  CGPA: 7.55\n• Intermediate - Sri Chaitanya Junior Kalasala, Chandanagar\n  Math, Physics, Chemistry\n  Duration: 05/2016 - 05/2018\n  Percentage: 97.7%\n• School (SSC) - Alphores High School\n  Exam Year: 04/2016\n  Grade: 9.8`,
    },
    {
      id: 3,
      title: "Projects",
      description: `• Next.js Website for Dental Clinic\n- https://saivijyadentalclinic-vc6l.vercel.app/\n- Developed a custom website for a dental clinic showcasing treatments, patient testimonials, etc.\n\n• Google reCAPTCHA Widget (05/2021 - 06/2021)\n- Developed custom reCAPTCHA widget using ServiceNow platform for web pages to prevent spam and fraudulent activities`,
    },
    {
      id: 4,
      title: "Skills",
      description: `• C++, JavaScript, TypeScript, Java basics\n• Data Structures and Algorithms, Database Management System, System Design, OOPs Concepts\n• MySQL, MongoDB\n• HTML, CSS, SCSS, Tailwind CSS\n• Next.js, React.js, Three.js, Express.js, Node.js`,
    },
    {
      id: 5,
      title: "Contact",
      description: `• Email: siddamvinay1368@gmail.com\n• Github\n- https://github.com/siddamvinay2001\n• LinkedIn\n- https://www.linkedin.com/in/vinay-siddam-84051b1a9/`,
    },
    {
      id: 6,
      title: "Thank you",
      description: `Hope you enjoyed the journey`,
    },
  ];

  if (currentState == 0) {
    setTimeout(() => {}, 500);
  }

  const title = currentState > -1 ? textConfigs[currentState].title : "";
  const description =
    currentState > -1 ? textConfigs[currentState].description : "";

  return (
    <div className="absolute top-20 z-10 w-full flex justify-around	">
    <div className="max-h-[80%] max-w-[80%] flex flex-col justify-center">
      {currentState > -1 && (
        <div className="text-center left-[50%] py-4 px-8 overflow-y-auto bg-white max-w-3/5 font-serif text-black rounded-lg">
          {title.length > 0 && <div className="text-lg font-bold">{title}</div>}
          {description.length > 0 && (
            <div className="text-md text-left mt-3">
              {description.split("\n").map((line, index) => (
                <div key={index}>
                  {line.startsWith("•") ? (
                    <p className="font-bold">{line}</p> // Bold bullet points
                  ) : line.includes("http") ||
                    line.includes("https") ||
                    line.includes("://") ? (
                    <p>
                      <a
                        href={line.trim()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline hover:no-underline"
                      >
                        {line.trim()}
                      </a>
                    </p>
                  ) : (
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;{line}</span>
                  )}
                </div>
              ))}
            </div>
          )}
          <button
            className="mt-3 w-8 h-8 text-sm text-red-200 bg-red-500 rounded-lg"
            onClick={() => {
              if (currentState !== 6) setCurrentState(-1);
              else window.location.reload();
            }}
          >
            X
          </button>
        </div>
      )}
    </div>
    </div>
  );
};
