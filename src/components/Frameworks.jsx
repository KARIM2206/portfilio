import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "react",
    "javascript",
    "tailwindcss",
    "git",
    "html5",
    "css3",
    "nextdotjs",
    "nodedotjs",
    "express",
    "mongodb",
    "typescript",
    "mysql",
    "prisma",
    "github",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={50}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={40} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <div className="flex items-center justify-center w-full h-full p-2 duration-200 bg-white rounded-full shadow-lg hover:scale-110 shadow-white/20">
    <img src={src} className="object-contain w-full h-full" alt="icon" />
  </div>
);
