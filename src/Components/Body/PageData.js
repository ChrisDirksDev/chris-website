import DiscordImage from './MainContent/Media/robot.svg'
import EarlyWorkImage from './MainContent/Media/earlywork.svg'
import GameImage from './MainContent/Media/gameengine.svg'
import WebsiteImage from './MainContent/Media/website.svg'

import Pet1 from './MainContent/Media/frame-pets.png'
import Pet2 from './MainContent/Media/frame-pets2.png'
import Dev from './MainContent/Media/frame-development.png'
import Game from './MainContent/Media/frame-games.png'
import Anime from './MainContent/Media/frame-anime.png'

const TopicData = [
    {
      id: 0,
      value: 'HOME',
      title: 'Home',
      links: [
        {
          id: 0,
          type: 'homeDefault',
          title: 'Home',
          value: 'Home-Default',
        }
      ]
    },
    {
      id: 1,
      value: 'INTERESTS',
      title: 'Interests',
      links: [
        {
          id: 0,
          type: 'topic-selector',
          title: 'Topic Selector',
          value: 'Interests-Default',
          data: {
            Headline: "Pretty boring, but if you really want to know...",
            Images: [
              {prefix:'fas',name: 'kiwi-bird'},
              {prefix:'fas',name: 'user-cog'},
              {prefix:'fas',name: 'dice-d20'},
              {prefix:'fas',name: 'dragon'}
            ],
            Content: [
              "Pets",
              "Development",
              "Games",
              "Anime"
            ],
            HoverContent: [
              "Talking about my birdwatching hobby and my best buddy Koby.",
              "Going over my love for making things with programming.",
              "Discussing how games have shaped who I am today as well as what I like to play.",
              "Reviewing how anime has positivly affected my personal and work life."
            ],
            Values: [
              'Interests-Pets',
              'Interests-Development',
              'Interests-Games',
              'Interests-Anime',
            ]
          }
        },
        {
          id: 1,
          type: 'interestDouble',
          title: 'Pets',
          value: 'Interests-Pets',
          icon: {prefix:'fas',name: 'kiwi-bird'},
          data: [
            {
              Title: "Birds",
              Image: Pet1,
              Content: "My previous job had me located in an office building with floor to ceiling exterior windows and I had a great view of the office side yard. I decided it would be fun for our team and the office as a whole to have a bird feeder to bring local wildlife close to enhance the views of nature we were lucky to have. Ever since I have been an avid bird watcher and always try to have some feeding stations up wherever I am living. My favorite bird is the secretary bird. Just look at these beautiful bastards.",
              Link: {
                ref: null,
                content: null
              },
              icon: {prefix:'fas',name: 'kiwi-bird'},
            },
            {
              Title: "Koby",
              Image: Pet2,
              Content: "I have a strong affinity for dogs and will almost always ask to say hello to any new ones I meet. During Christmas of 2016, I visited a shelter with my mother and we found Koby. We immediately bonded. He is a gold lab mix, loves to play fetch, and greet strangers. He stays with my parents most days due to housing restrictions but comes to play often. He is the closest thing to a pet I have, and I love him dearly.",
              Link: {
                ref: null,
                content: null
              },
              icon: null
            },
          ] 
        },
        {
          id: 2,
          type: 'interestsDefault',
          title: 'Development',
          value: 'Interests-Development',
          icon: {prefix:'fas',name: 'user-cog'},
          data: {
            Title: "Development",
            Image: Dev,
            Content: "At heart, I am a builder. I like making things, taking them apart, and putting them back together. That's why being a developer has fit my life so well. I have spent countless hours working on side projects for reasons as simple as fun, or as pragmatic as to increase my skills. Jump over to my projects or click here to see some non-commercial work I've engaged in over the last 10 years.",
            Link: {
              ref: null,
              content: null
            },
            icon: {prefix:'fas',name: 'user-cog'},
          }
        },
        {
          id: 3,
          type: 'interestsDefault',
          title: 'Games',
          value: 'Interests-Games',
          icon: {prefix:'fas',name: 'dice-d20'},
          data: {
            Title: "Games",
            Image: Game,
            Content: "Ever since I was young. I have been fascinated with technology. NES, N64, Gameboy, XBOX, and even our first PC helped shaped the person I am today. I have met many great friends through games. My hours of gaming helped foster my love for technology and most importantly, software. I primarily enjoy story driven titles that give you options on how to play the game. My favorite titles, however, utilize multiple storytelling mediums including visual, audio, reading, dialogue, and narration to form complete experiences.",
            Link: {
              ref: null,
              content: null
            },
            icon: {prefix:'fas',name: 'dice-d20'},
          }
        },
        {
          id: 4,
          Title: "Anime",
          type: 'interestsDefault',
          title: 'Anime',
          value: 'Interests-Anime',
          icon: {prefix:'fas',name: 'dragon'},
          data: {
            Title: "Anime",
            Image: Anime,
            Content: "Growing up in the late 90's I experienced anime for the first time through movies such as My Neighbor Totoro and Kiki's Delivery Service. Staying up late as an early teen watching Cowboy Bebop, Full Metal Alchemist, and Samurai Champloo exposed me to new visual, and storytelling methods that I didn't know were possible. I've kept that wonder through all these years, and always have a backlog of anime series or movies to watch or catch up on.",
            Link: {
              ref: null,
              content: null
            },
            icon: {prefix:'fas',name: 'dragon'},
          }
        },
      ]
    },
    {
      id: 2,
      value: 'PROJECTS',
      title: 'Projects',
      links: [
        {
          id: 0,
          type: 'topic-selector',
          title: 'Topic Selector',
          value: 'Projects-Default',
          data: {
            Headline: "Pick from my list of projects here",
            Images: [
              {prefix:'fas',name: 'laptop-code'},
              {prefix:'fas',name: 'robot'},
              {prefix:'fas',name: 'gamepad'},
              {prefix:'fas',name: 'graduation-cap'}
            ],
            Content: [
              "This Website",
              "Discord Bot",
              "2D Game Engine",
              "My Early Work"
            ],
            HoverContent: [
              "This very website that I made myself using React.",
              "A Discord bot I made for fun using Javascript and Node.js.",
              "A longtime side project developing a 2d game engine from the ground up.",
              "My early schoolwork I did including coursework and Internships."
            ],
            Values: [
              'Projects-Website',
              'Projects-Bot',
              'Projects-Engine',
              'Projects-Early',
            ]
          }
        },
        {
          id: 1,
          type: 'projectsDefault',
          title: 'Game Engine',
          value: 'Projects-Engine',
          icon: {prefix:'fas',name: 'gamepad'},
          data: {
            Title: 'Game Engine',
            Image: GameImage,
            Content: "A side project to develop a 2D game engine from the ground up. Built using C#, and OpenGL, this project is helping me gain a greater understanding of developing larger, multi-module applications from scratch. Developing the physics engine has helped me further my knowledge of physics as well as general mathematics. Working on the rendering engine has given me new insight into the complicated nature of graphics rendering. This project is both a work of passion and skills development. Check out the GitHub link to take a look at it yourself.",
            Link: {
              ref: 'https://github.com/ChrisDirksDev/rpg-engine',
              content: 'Github'
            },
            icon: {prefix:'fas',name: 'gamepad'},
          }
        },
        {
          id: 2,
          type: 'projectsDefault',
          title: 'Discord Bot',
          value: 'Projects-Bot',
          icon: {prefix:'fas',name: 'robot'},
          data: {
            Title: 'Discord Bot',
            Image: DiscordImage,
            Content: "A bot made for discord servers. Developed using javascript and Node.js. I made this bot to increase my knowledge of Node.js and the backend functionality of chatbots. Features several chat features such as dice rolling, 8 Ball answers to directed questions, admin functions, quotes, and others.... \n I also learned about AWS from this project as this bot is hosted on AWS and utilizes their databases for storage. Fun and very informative.",
            Link: {
              ref: 'https://github.com/ChrisDirksDev/DiscordBot',
              content: 'Github'
            },
            icon: {prefix:'fas',name: 'robot'},
          }
        },
        {
          id: 3,
          type: 'projectsDefault',
          title: 'This Website',
          value: 'Projects-Website',
          icon: {prefix:'fas',name: 'laptop-code'},
          data: {
            Title: 'This Website',
            Image: WebsiteImage,
            Content: "This Website is one of my projects as well. It was made using React, JSX, JS(ES6), HTML5, and CSS. Check out the media below to see some of the changes the site underwent during development. I learned a lot over time about positioning, styling, and organization during the site's development and I believe it really shows in the evolution of the pages.",
            Link: {
              ref: 'https://github.com/ChrisDirksDev/chris-website',
              content: 'Github'
            },
            icon: {prefix:'fas',name: 'laptop-code'},
          }
        },
        {
          id: 4,
          type: 'projectsDefault',
          title: 'Early Work',
          value: 'Projects-Early',
          icon: {prefix:'fas',name: 'graduation-cap'},
          data: {
            Title: "My Early Work",
            Image: EarlyWorkImage,
            Content: 'I will soon have listed here some of the early projects I worked on during school and for Companies during internships. My main focus during school was Game Development using Unity and Javascript. My internship focused on web projects using web-workers, and WebGL.',
            Link: {
              ref: null,
              content: null
            },
            icon: {prefix:'fas',name: 'graduation-cap'},
          }
        },
      ]
    },
    {
      id: 3,
      value: 'CONTACTME',
      title: 'Contact Me',
      links: [
        {
          id: 0,
          type: 'contactDefault',
          title: 'Contact Me',
          value: 'Contact-Default'
        }
      ]
    },
    {
      id: 4,
      value: 'POLICY',
      title: 'Privacy Policy',
      links: [
        {
          id: 0,
          type: 'policyDefault',
          title: 'Privacy Policy',
          value: 'Privacy-Default'
        }
      ]
    }
  ];

export default TopicData;