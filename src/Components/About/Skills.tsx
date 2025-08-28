import LogoLoop from "../../ReactBitsEffect/LogoLoop"
import { SiCplusplus, SiHaskell, SiReact, SiTypescript, SiTailwindcss, SiJavascript, SiRstudioide, SiGnubash, SiAndroidstudio, SiTableau, SiPostman, SiJson, SiVite, SiSplunk } from 'react-icons/si';
import { DiMysql, DiPostgresql, DiProlog, DiVisualstudio, DiMongodb } from "react-icons/di";
import { FaPython, FaHtml5, FaCss3Alt, FaRust, FaGitAlt, FaNodeJs, FaBootstrap, FaDocker } from "react-icons/fa";
import { TbBrandKotlin, TbBrandCSharp } from "react-icons/tb";
import { AiOutlineDotNet } from "react-icons/ai";

const programmingLanguages = [
    { node: <SiCplusplus />, title: "C++", href: "https://isocpp.org" },
    { node: <TbBrandCSharp />, title: "C#", href: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <DiMysql />, title: "MySQL", href: "https://www.mysql.com" },
    { node: <DiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
    { node: <FaPython />, title: "Python", href: "https://www.python.org" },
    { node: <FaHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
    { node: <FaCss3Alt />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { node: <TbBrandKotlin />, title: "Kotlin", href: "https://kotlinlang.org" },
    { node: <FaRust />, title: "Rust", href: "https://www.rust-lang.org" },
    { node: <SiHaskell />, title: "Haskell", href: "https://www.haskell.org" },
    { node: <SiRstudioide />, title: "R", href: "https://www.r-project.org" },
    { node: <SiGnubash />, title: "Bash", href: "https://www.gnu.org/software/bash/" },
    { node: <DiProlog />, title: "Prolog", href: "https://www.swi-prolog.org" },
    { node: <SiAndroidstudio />, title: "Android", href: "https://developer.android.com/studio" },
    { node: <DiVisualstudio />, title: "Visual Studio", href: "https://visualstudio.microsoft.com" },
    { node: <FaGitAlt />, title: "Git", href: "https://git-scm.com" },
    { node: <SiTableau />, title: "Tableau", href: "https://www.tableau.com" },
    { node: <AiOutlineDotNet />, title: ".NET", href: "https://dotnet.microsoft.com" },
    { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
    { node: <SiJson />, title: "JSON", href: "https://www.json.org/json-en.html" },
    { node: <DiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <FaNodeJs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
    { node: <FaBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com" },
    { node: <FaDocker />, title: "Docker", href: "https://www.docker.com" },
    { node: <SiSplunk />, title: "Splunk", href: "https://www.splunk.com" },
];

const Skills: React.FC = () => {
    return (
        <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
        <LogoLoop
            logos={programmingLanguages}
            speed={120}
            direction="left"
            logoHeight={60}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
        />
        </div>
    );
}

export default Skills;