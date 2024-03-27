import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hello, I'm <span className="font-semibold mx-2 text-white">ATB</span> 👋
        <br />
        I'm a Software Engineer 🇹🇷 from Turkey
      </h1>
    );

  const stages = [
    {
      text: "I'm a developer who loves to create crazy projects on my own",
      buttonText: "Do you want to learn more?",
      link: "/about",
    },
    {
      text: "I've managed to complete many projects. Do you want to see what I am?",
      buttonText: "Visit my portfolio",
      link: "/projects",
    },
    {
      text: "Do you need a project or are you looking for a developer? I'm as close as a few clicks away",
      buttonText: "Let's talk",
      link: "/contact",
    },
  ];

  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">
        {stages[currentStage - 2].text}
      </p>

      <Link
        to={stages[currentStage - 2].link}
        className="neo-brutalism-white neo-btn"
      >
        {stages[currentStage - 2].buttonText}
        <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
};

export default HomeInfo;
