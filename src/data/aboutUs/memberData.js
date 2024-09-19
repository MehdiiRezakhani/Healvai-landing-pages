// Avatar
import MehdiRezakhaniPic from '@/assets/about/member/MehdiRezakhani/MehdiRezakhani2.jpeg'
//Projects
import CryptoPic from "@/assets/about/member/MehdiRezakhani/projects/CryptoShot.png";
import OnlineShopPic from "@/assets/about/member/MehdiRezakhani/projects/EcommerceShot.png";
import MobileAppsPic from "@/assets/about/member/MehdiRezakhani/projects/MobileApp.jpg";
import ArianaTask_Pic from '@/assets/about/member/MehdiRezakhani/projects/ArianaTaskShot.jpg';
import Customizify_Pic from '@/assets/about/member/MehdiRezakhani/projects/CustomizifyPic.png';
import Merdinaco_Pic from '@/assets/about/member/MehdiRezakhani/projects/Merdincao.png';

//Skills
import HTML_Logo from '@/assets/about/member/MehdiRezakhani/skills/HtmlIcon.svg';
import CSS_Logo from '@/assets/about/member/MehdiRezakhani/skills/CssIcon.svg';
import Sass_Logo from '@/assets/about/member/MehdiRezakhani/skills/SassIcon.svg';
import React_Logo from '@/assets/about/member/MehdiRezakhani/skills/ReactIcon.svg';
import Redux_Logo from '@/assets/about/member/MehdiRezakhani/skills/reduxIcon.svg';
import TS_Logo from '@/assets/about/member/MehdiRezakhani/skills/typescriptIcon.svg';
import JS_Logo from '@/assets/about/member/MehdiRezakhani/skills/JSicon.svg';
import MaterialUI_Logo from '@/assets/about/member/MehdiRezakhani/skills/material-uiIcon.svg';
import Git_Logo from '@/assets/about/member/MehdiRezakhani/skills/GitIcon.svg';
import WordPress_Logo from '@/assets/about/member/MehdiRezakhani/skills/wordpressIcon.svg';
import NextJS_Logo from '@/assets/about/member/MehdiRezakhani/skills/nextjs.svg';
import ReactNative_Logo from '@/assets/about/member/MehdiRezakhani/skills/reactnative.svg';
import RestfulAPI_Logo from '@/assets/about/member/MehdiRezakhani/skills/restfulapi.svg';
import NPM_Logo from '@/assets/about/member/MehdiRezakhani/skills/npm.svg';
import Babel_Logo from '@/assets/about/member/MehdiRezakhani/skills/babel.svg';
import Webpack_Logo from '@/assets/about/member/MehdiRezakhani/skills/webpack.svg';
import TailwindCSS_Logo from '@/assets/about/member/MehdiRezakhani/skills/webpack.svg';
import GraphQL_Logo from '@/assets/about/member/MehdiRezakhani/skills/graphql.svg';
import Agile_Logo from '@/assets/about/member/MehdiRezakhani/skills/agile.svg';
import PWA_Logo from '@/assets/about/member/MehdiRezakhani/skills/pwa.svg';
import Responsive_Logo from '@/assets/about/member/MehdiRezakhani/skills/responsive.svg';

//Education
import UT_Logo from '@/assets/about/member/MehdiRezakhani/ex/UT_Logo.png'
import HighSchool_Logo from '@/assets/about/member/MehdiRezakhani/ex/HighSchool_Logo.svg'
//Ex
import Healvia_Logo from '@/assets/about/member/MehdiRezakhani/ex/HLogo.svg';
import PantoHealth_Logo from '@/assets/about/member/MehdiRezakhani/ex/pantohealth_logo.jpeg';
import Digid_Logo from '@/assets/about/member/MehdiRezakhani/ex/Digid_Logo.png'
import Rizo_Logo from '@/assets/about/member/MehdiRezakhani/ex/RizoLogo.png';
import Dorminaco_Logo from '@/assets/about/member/MehdiRezakhani/ex/Dorminaco_Logo.png';
import NeginAndroid_Logo from '@/assets/about/member/MehdiRezakhani/ex/NeginAndroid_Logo.jpg';

const membersData = {
    mehdirezakhani:{
        summery:{
            avatar:MehdiRezakhaniPic,
            // resumeFile: MehdiRezakhaniResume,
            name:"Mehdi Rezakhani",
            position:"Mobile & Web Developer",
            summery:"Results-oriented Front-End Developer with 3+ years of experience crafting high-performing web applications using modern frameworks (ReactJS, NextJS, TypeScript) and best practices. Proven track record of leading and mentoring teams, delivering complex projects on time and within budget. Skilled in UI/UX design principles, API integration, and automated testing to ensure application quality. Eager to leverage my skills and knowledge to contribute to a team focused on innovation and user-centric development.",
            Linkedin:"mehdiirezakhani",
            Github:"MehdiiRezakhani",
            Email:"mehdiirezakhani@gmail.com",
            phone:"+989210393561",
        },
        SkillsData:[
            {name:"ReactJS", image:React_Logo},
            {name:"NextJS", image:NextJS_Logo},
            {name:"Redux", image:Redux_Logo},
            {name:"GraphQL", image:GraphQL_Logo},
            {name:"Restful API", image:RestfulAPI_Logo},
            {name:"Babel", image:Babel_Logo},
            {name:"NPM", image:NPM_Logo},
            {name:"Webpack", image:Webpack_Logo},
            {name:"JavaScript", image:JS_Logo},
            {name:"TypeScript", image:TS_Logo},
            {name:"HTML", image:HTML_Logo},
            {name:"CSS", image:CSS_Logo},
            {name:"Sass", image:Sass_Logo},
            {name:"TailwindCSS", image:TailwindCSS_Logo},
            {name:"Material UI", image:MaterialUI_Logo},
            {name:"PWA", image:PWA_Logo},
            {name:"Responsive Design", image:Responsive_Logo},
            {name:"Git", image:Git_Logo},
            {name:"WordPress", image:WordPress_Logo},
            {name:"Agile(Scrum)", image:Agile_Logo},
            {name:"ReactNative", image:ReactNative_Logo},
        ],
        WorkExData : [
            {
                position:"Founder & Developer", 
                kind:"Self Employed", 
                date:"Jun 2023 - Present", 
                company:"Healvia", 
                companyLogo:Healvia_Logo, 
                companyLink:process.env.NEXT_PUBLIC_BASE_URL, 
                description:"Led the development of an AI-powered digital health platform, focusing on utilizing best practices and libraries to optimize development time and cost. Developed automated tests to ensure application functionality and maintain a high level of quality throughout the development process. Designed and built a responsive user interface that adapts seamlessly across various screen sizes, optimizing accessibility for all users. Played a key role in researching and developing a novel premium system based on cryptocurrency, fostering a secure and innovative approach to user engagement."
            },
            {
                position:"Front-End Developer", 
                kind:"Full Time", 
                date:"Nov 2023 - Present", 
                company:"PantoHealth", 
                companyLogo:PantoHealth_Logo, 
                companyLink:"https://pantohealth.com/", 
                description:"Enhanced application stability and user experience by actively identifying and resolving numerous bugs, ensuring optimal functionality. Developed and integrated reusable UI components that significantly improved the overall visual appeal and user interaction of the application. Established a robust state management system using Zustand, enabling efficient handling of API requests and maintaining application state in a centralized and predictable manner."
            },
            {
                position:"Front-End Developer", 
                kind:"Contract", 
                date:"Dec 2022 - Oct 2023", 
                company:"Rizo Studio", 
                companyLogo:Rizo_Logo, 
                companyLink:"https://rizostudio.com/", 
                description:"Built and deployed web applications using NextJS, ReactJS, and TypeScript, following best practices and industry standards. Implemented unit, integration, and end-to-end tests using Jest and Cypress to ensure the quality and reliability of web applications. Participate in product releases and code reviews with 2 senior developers and team leads."
            },
            {
                position:"Front-End Developer", 
                kind:"Contract", 
                date:"July 2022 - Nov 2022", 
                company:"Digid", 
                companyLogo:Digid_Logo, 
                companyLink:"https://Digid.ca", 
                description:"Collaborated with cross-functional teams to design, develop, and deliver new features and enhancements to web applications. Worked with designers to create and implement user-friendly and visually appealing interfaces for web applications."
            },
            {
                position:"Founder & Front-End Developer", 
                kind:"Self Employed", 
                date:"Dec 2020 - April 2022", 
                company:"Dorminaco", 
                companyLogo:Dorminaco_Logo, 
                companyLink:"https://Dorminaco.ir", 
                description:"Worked in an Agile, collaborative environment to receive design requirements and peer program. Utilized HTML, CSS, JS, and ReactJS to create +50 responsive landing pages."
            },
            {
                position:"Founder & Android Developer", 
                kind:"Self Employed", 
                date:"Feb 2016 - Aug 2018", 
                company:"NeginAndroid", 
                companyLogo:NeginAndroid_Logo, 
                companyLink:"https://cafebazaar.ir/developer/mehdi-253", 
                description:"Production and development of educational application."
            }
        ],
        EducationData: [
          { 
            institution:"University of Tehran", 
            logo:UT_Logo , 
            date:"2019-2023", 
            degree:"Bachelor of Engineering", 
            field:"Polymer Engineering"
          },
          {
            institution:"Emam High School", 
            logo:HighSchool_Logo, 
            date:"2016-2019", 
            degree:"High School Diploma", 
            field:"Mathematical Physics"
          },
        ],
        ProjectsData: [
            {
              name: "Customizify",
              image: Customizify_Pic,
              description:
                "Developed a Progressive Web App (PWA) for 3D T-shirt customization, enabling users to personalize their shirts in an immersive and responsive experience. Utilized Three.js to create a real-time 3D rendering engine, allowing users to visualize their design choices in a dynamic environment. Implemented TailwindCSS for a utility-first approach to styling, ensuring a clean and responsive UI across various devices.",
              source: "https://github.com/MehdiiRezakhani/Customizify",
            },
            {
              name: "Crypto-View",
              image: CryptoPic,
              description:
                "Developed a comprehensive crypto price tracker website using React.js and React-Router-Dom for dynamic routing. Implemented data fetching from CoinGecko and Bitcoin.com APIs with Axios for efficient data retrieval. Created interactive charts using Chart.js to visualize crypto price fluctuations.Designed a user-friendly interface with Material-UI components for a sleek and intuitive user experience.",
              source: "https://github.com/MehdiiRezakhani/crypto-view",
            },
            {
              name: "Empeperor",
              image: Merdinaco_Pic,
              description:
                "I developed some landing pages for a cryptocurrency with creative UI and fantastic animations using Next.js, TailwindCSS.",
              source:'https://github.com/MehdiiRezakhani/Empeperor'
            },
            {
              name: "Online-Shop",
              image: OnlineShopPic,
              description:
                "This project is A Single-Page-Application. API from https://fakestoreapi.com/ is used by Axios. I used ReactJS, React-Router-Dom, and CSS in this project.",
              source: "https://github.com/MehdiiRezakhani/Online-shop",
            },
            {
              name: "Mobile Apps",
              link: "https://cafebazaar.ir/developer/mehdi-253",
              image: MobileAppsPic,
              description:
                "Production and development of educational application. Application development is my favorite job and I have some experience in Android  programming. I have published several Android apps in Cafe Bazaar.",
            },
            {
                name: "Ariana Task",
                image: ArianaTask_Pic,
                description:
                  "You can enter your name, age, and skills in a form and see the result on the charts. react, react-router-dom, redux, react-chartjs, chart.js, uuid have been used in this project. By redux, the data set and get in localStorage.",
                source: "https://github.com/MehdiiRezakhani/Ariana-Task",
              },
        ],
    },
}

export const getMemberData = (memberName) => {
    const data = membersData[memberName]
    return data
}
