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
      description: `• Software developer-IC2 at Service Now\n  - Led Agile development teams, facilitated onboarding of new team members, conducted code reviews and optimizations.\n• Associate Software developer-IC1 at Service Now\n  - Contributed to team projects, collaborated on feature development, and provided support.\n• Intern at Service Now\n  - Gained hands-on experience in software development processes, assisted with testing, and participated in team meetings.`,
    },
    {
      id: 2,
      title: "Education",
      description: `• B.Tech - National Institute of Technology Warangal\n  Electronics and Communication Engineering\n  Duration: 08/2018 - 06/2022\n  CGPA: 7.55\n• Intermediate -  Sri Chaitanya Junior Kalasala, Chandanagar\n  Math, Physics, Chemistry\n  Duration: 05/2016 - 05/2018\n  Percentage: 97.7%\n• School (SSC) -  Alphores High School\n  Exam Year: 04/2016\n  Grade: 9.8`,
    },
    {
      id: 3,
      title: "Projects",
      description: `• App Manager Revamp (08/2022 - 05/2023)\n- Implemented end-to-end UI revamp for the app manager's home page\n- Created custom reusable components and improved load time from 120 seconds to 3 seconds using pagination\n- Implemented product details page, improved performance by reducing API calls\n - Addressed 404 errors by reducing size of payload\n\n• Next.js Website for Dental Clinic\n - https://saivijyadentalclinic-vc6l.vercel.app/\n- Developed a custom website for a dental clinic showcasing treatments, patient testimonials, etc.\n\n• Dashboard for Major Incident Management (09/2021 - 11/2023)\n- Created Key Performance Indicators, visualizations, and widgets for major incident management\n\n• Artifacts App Manager (06/2022 - 08/2022)\n- Built internal tool for testing app snapshots, reducing time spent on lengthy store review process\n\n• Google reCAPTCHA Widget (05/2021 - 06/2021)\n- Developed custom reCAPTCHA widget for web pages to prevent spam and fraudulent activities`,
    },
    {
      id: 4,
      title: "Skills",
      description: `• C++, JavaScript, TypeScript, Java basics\n• Data Structures and Algorithms, Database Management System, System Design, OOPs Concepts\n• MySQL, MongoDB\n• HTML, CSS, SCSS, Tailwind CSS\n• Next.js, React.js, Three.js, Express.js, Node.js`,
    },
    {
      id: 5,
      title: "Contact",
      description: `• Email: siddamvinay1368@gmail.com\n• Github: https://github.com/siddamvinay2001\n• LinkedIn: https://www.linkedin.com/in/vinay-siddam-84051b1a9/`,
    },
    {
      id: 6,
      title: "Thank you",
      description: `Hope you enjoyed your journey`,
    },
  ];

  if (currentState == 0) {
    setTimeout(() => {}, 500);
  }

  const title = currentState > -1 ? textConfigs[currentState].title : "";
  const description =
    currentState > -1 ? textConfigs[currentState].description : "";

  return (
    <div className="absolute top-20 left-0 max-h-[80%] right-0 z-10 flex flex-col items-center mb-20  justify-center">
      {currentState > -1 && (
        <div className="text-center py-4 px-8 overflow-y-auto bg-white max-w-3/5  font-serif text-black rounded-md">
          {title.length > 0 && <div className="text-lg">{title}</div>}
          {description.length > 0 && (
            <div className="text-md text-left mt-3">
              {description.split("\n").map((line, index) => (
                <div key={index}>
                  {line.startsWith("•") ? (
                    <p>{line}</p>
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
              if (currentState != 6) setCurrentState(-1);
              else window.location.reload();
            }}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};
