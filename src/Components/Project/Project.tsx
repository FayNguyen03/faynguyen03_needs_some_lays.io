import React from 'react'
import ProjectCard from './ProjectCard';
import './Project.css';

const verticalProject: any[] = [
    {
        image: '/Projects/AND101P10Screens.gif',
        name: 'MORNING MOSAIC',
        icons: ['devicon-android-plain', 'devicon-kotlin-plain', 'devicon-androidstudio-plain'],
        description: 'A morning app check for their horoscope prediction of the day, and read some news while they are starting their daily day',
        github: 'https://github.com/AND101-THE-GIRLS/MORNING_MOSAIC'
    },
    {
        image: '/Projects/wordle.gif',
        name: 'WORDLE',
        icons: ['devicon-android-plain', 'devicon-kotlin-plain', 'devicon-androidstudio-plain'],
        description: 'It\'s Wordle Time!!!!',
        github: 'https://github.com/FayNguyen03/WORDLE'
    },
    {
        image: '/Projects/KitchenStory.png',
        name: 'KITCHEN STORY',
        icons: ['devicon-android-plain', 'devicon-kotlin-plain', 'devicon-androidstudio-plain', 'devicon-sqlite-plain', 'devicon-postman-plain'],
        description: 'An Android app that allows users to generate the list of recipes for homecooked meals based on the available ingredients that users have at home. After clicking on recipe, users will see step by step instructions to make the homecooked meals. The app will also show the information about the nutritions ad calories for each meal.',
        github: 'https://github.com/Android-102-Project/capstone-project.git',
        link: 'https://youtu.be/p_rFoG0tTxI',
        linkIcon: 'fa-brands fa-youtube'
    },
]
const horizontalProject: any[] = [
    
    {
        image: '/Projects/Restaurant.png',
        name: 'RESTAURANT INVENTORY MANAGEMENT',
        icons: ['devicon-csharp-plain', 'devicon-dotnetcore-plain', 'fa-solid fa-database', 'devicon-microsoftsqlserver-plain-wordmark', 'devicon-visualstudio-plain'],
        description: 'A GUI system that streamlines the restaurant staff\'s booking processes, customer records management, and staff administration and requires a login procedure for access',
        github: 'https://github.com/FayNguyen03/RestaurantManagement'
    },
    {
        image: '/Projects/First Page.png',
        name: 'STUDEE',
        icons: ['devicon-cplusplus-plain', 'devicon-react-original', 'devicon-git-plain', 'fa-solid fa-terminal'],
        description: 'A networking platform for students who need academic support and who want to become tutors',
        github: 'https://github.com/FayNguyen03/STUDEE'
    },
    
    {
        image: '/Projects/DS.png',
        name: 'DATA SCIENCE PORTFOLIO WEBSITE',
        icons: ['devicon-r-plain'],
        description: 'Website built with Quarto and RMarkdown and hosted by GitHub and RStudio, where I displayed my Data Science-related projects, ranging from analyzing data based on geopgraphical factors to a website to summarize and introduce museums in Minnesota.',
        link: 'https://faynguyen03.github.io/faynguyen.github.io/',
        linkIcon: 'bi bi-globe'
    },
    
    {
        image: '/Projects/SecureCloudStorage.png',
        name: 'SECURE CLOUD STORAGE',
        icons: ['devicon-csharp-plain', 'devicon-html5-plain', 'devicon-css3-plain', 'devicon-mysql-plain colored'],
        description: 'A simple version of secure cloud storage using C\# and ASP.NET. The application will secure all files that are uploaded to the cloud such that only people that gain access or are a part of the accessible group will be able to decrypt uploaded files. Any member of the group should be able to upload encrypted files to the cloud service. To all other users the files will be encrypted.',
        github: 'https://github.com/FayNguyen03/secure-cloud-storage-application.git',
        link: 'https://drive.google.com/file/d/1bmrjb4dlXsaOzBZtGSYwwjh_yBWzhsb-/view?usp=sharing',
        linkIcon: 'fa-solid fa-video'
    },
    {
        image: '/Projects/WebProxy.png',
        name: 'CLI WEB PROXY SERVER',
        icons: ['devicon-csharp-plain', 'devicon-dotnetcore-plain', 'fa-solid fa-server'],
        description: 'A multi-threaded web proxy server that handles HTTP and HTTPS requests, dynamically block and unblock URLs, and efficienly cache HTTP requests locally and save bandwidth.',
        github: 'https://github.com/FayNguyen03/Web-Server-Proxy.git',
        link: 'https://drive.google.com/file/d/13w7haV3JCmmz3Adg7BI5TpUmqR_ywPT-/view?usp=sharing',
        linkIcon: 'fa-solid fa-video'
    },
    {
        image: '/Projects/ER Model.png',
        name: 'St.Olaf College MSCS Department Information Management',
        icons: ['devicon-mysql-plain colored', 'fa-solid fa-database'],
        description: 'A holistic database design to store and manage student, faculty, course, degree path, major, grade, and course registration information related to the department.',
        github: 'https://github.com/FayNguyen03/MSCS-Information-Management.git',
    }
];

const Project: React.FC = () => {
  return (
    <div className='project'> 
        <div className='vertical-project'>
            {
                verticalProject.map((project) =>{
                    return <ProjectCard image = {project.image}
                                        name= {project.name}
                                        icons= {project.icons}
                                        description= {project.description}
                                        {...(project.github && {github:project.github})}
                                        {...(project.link && {link:project.link})} 
                                        {...(project.linkIcon && {linkIcon:project.linkIcon})}
                                        />
                })
            }
        </div>
        <div className='horizontal-project'>
            {
                horizontalProject.map((project) =>{
                    return <ProjectCard image = {project.image}
                                        name= {project.name}
                                        icons= {project.icons}
                                        description= {project.description}
                                        {...(project.github && {github:project.github})}
                                        {...(project.link && {link:project.link})} 
                                        {...(project.linkIcon && {linkIcon:project.linkIcon})}
                                        />
                })
            }
        </div>
    </div>
    
  )
}

export default Project
