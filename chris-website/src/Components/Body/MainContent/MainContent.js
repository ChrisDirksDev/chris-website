import React from 'react';
import './MainContent.css';

import HomeContent from './Home/HomeContent';
import ContactForm from './Contact/ContactForm';
import InterestCard from './Interests/InterestCard'
import ProjectCard from './Projects/ProjectCard'
import TopicSelector from './TopicSelector/TopicSelector'

import DiscordImage from './robot.svg'
import EarlyWorkImage from './earlywork.svg'
import GameImage from './gameengine.svg'
import WebsiteImage from './website.svg'

import Pets from './pets.svg'
import Development from './development.svg'
import Games from './space-invaders.svg'
import Animes from './studio-ghibli.svg'

import Pet1 from './Interests/frame-pets.png'
import Pet2 from './Interests/frame-pets2.png'
import Dev from './Interests/frame-development.png'
import Game from './Interests/frame-games.png'
import Anime from './Interests/frame-anime.png'

import FileViewer from 'react-file-viewer';
import Policy from './Privacy Policy - Chris Dirks.pdf'
const TopicSelectorData = {
  Projects: {
    Images: [
      GameImage,
      DiscordImage,
      WebsiteImage,
      EarlyWorkImage
    ],
    Content: [
      "2D Game Engine",
      "Discord Bot",
      "This Website",
      "My Early Work"
    ]
  },
  Interests: {
    Images: [
      Pets,
      Development,
      Games,
      Animes
    ],
    Content: [
      "Pets",
      "Development",
      "Games",
      "Anime"
    ]
  }
}

const PageContentData = {
  Projects: {
    Images: [
      GameImage,
      DiscordImage,
      WebsiteImage,
      EarlyWorkImage
    ],
    Content: [
      "2D Game Engine",
      "Discord Bot",
      "This Website",
      "My Early Work"
    ],
    Links: [
      {
        ref: 'https://www.google.com/',
        content: 'Github'
      },
      {
        ref: 'https://www.google.com/',
        content: 'Github'
      },
      {
        ref: 'https://www.google.com/',
        content: 'Github'
      },
      {
        ref: 'https://www.google.com/',
        content: 'Github'
      }
    ]
  },
  Interests: {
    Images: [
      Pet1,
      Pet2,
      Dev,
      Game,
      Anime
    ],
    Content: [
      "My previous job had me locatied in a an office building with floor to ceiling exterioir windows and I had a great view of the office side yard. I decided it would be fun for our team  and the office as a whole to have a bird feeder to bring local wildlife close to enhance the views of nature we were luck to have. Ever since I have been an avid bird watcher and always try to have some feeding stations up whereever I am living. My favorite bird is the secretary bird. Just look at these beautiful bastards.",
      "I have a strong affinity for dogs and will almost always ask to say hello to any new ones I meet. During christmas of 2017, I visitied a shlter with my mother and we found Koby. We immediatly bonded. He is a gold lab mix, loves to play fetch, and greet strangers. He stays with my parents most days due to housing restrictions but comes to play often. He is the closts thing to a pet I have and I love him dearly.",
      "At heart I am a builder. I like making things, taking them apart, and putting them back together. Thats why being a developer has fit my life so well. I have spent countless hours working on side projects for reasons as simple as fun, or as pragmatic as to increase my skills. Jump over to my projects or click here to see some non-commericial work ive engaged in over the last 10 years.",
      "Ever since I was young. I have been fascinated with technology. NES, N64, Gameboy, xbox, and even our first pc helped shaped the person I am today.I have met many great friends through games. My hours of gaming helped foster my love for technology and most importantly, software. I primarily enjoy story driven titles that give you options on how to play the game. My favorite titles however utilize multiple storytelling mediums including visual, audio, reading, dialog, and narration to form complete experiances.",
      "Growing up in the late 90's I experianced anime for the first time through movies such as My Neigbor Totoro and Kiki's delivery service. I staying up late as a early teen watching Cowboy bebop, Full metal Alchemist, and Samurai Champloo exposed me to new visual, and storytelling methods that I didnt know were possible. Ive kept that wonder through all these years and always have a backlog of anime series or movies to watch or catch up on."
    ]
  }
}

let defaultContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error velit, ut officia, beatae quas reprehenderit nostrum totam perspiciatis modi minus obcaecati nisi alias sapiente commodi dignissimos temporibus nesciunt qui laboriosam.';
const MainContent = ({topic, content, onContactClick, onTopicClick}) => {

    let getContent = () => {
      switch (topic) {
        case 'HOME':
          switch (content) {
            case 0:
            return (
              <HomeContent onContactClick={onContactClick}/>
            );
          }
        case 'PROJECTS':
          switch (content) {
            case 0:
              return (
                <TopicSelector Images={TopicSelectorData.Projects.Images} Content={TopicSelectorData.Projects.Content} click={onTopicClick}/>
              );
            case 1:
              return (
                <ProjectCard ImageURL={GameImage} Content={PageContentData.Projects.Content[0]} Link={PageContentData.Projects.Links[0]}/>
              );
            case 2:
              return (
                <ProjectCard ImageURL={DiscordImage} Content={PageContentData.Projects.Content[1]} Link={PageContentData.Projects.Links[1]}/>
              );
            case 3:
              return (
                <ProjectCard ImageURL={WebsiteImage} Content={PageContentData.Projects.Content[2]} Link={PageContentData.Projects.Links[2]}/>
              );
            case 4:
              return (
                <ProjectCard ImageURL={EarlyWorkImage} Content={PageContentData.Projects.Content[3]} Link={PageContentData.Projects.Links[3]}/>
              );
            }
        case 'INTERESTS':
          switch (content) {
            case 0:
              return (
                <TopicSelector Images={TopicSelectorData.Interests.Images} Content={TopicSelectorData.Interests.Content} click={onTopicClick}/>
              );
            case 1:
              return (
                <div className="flex-col items-center">
                  <InterestCard ImageURL={Pet1} Content={PageContentData.Interests.Content[0]}/>
                  <InterestCard ImageURL={Pet2} Content={PageContentData.Interests.Content[1]}/>
                </div>
              );
            case 2:
              return (
                <InterestCard ImageURL={Dev} Content={PageContentData.Interests.Content[2]}/>
              );
            case 3:
              return (
                <InterestCard ImageURL={Game} Content={PageContentData.Interests.Content[3]}/>
              );
            case 4:
              return (
                <InterestCard ImageURL={Anime} Content={PageContentData.Interests.Content[4]}/>
              );
          }
        case 'CONTACTME':
          switch (content) {
              case 0:
              return (
                <ContactForm/>
              );
            }
        case 'POLICY':
          switch (content) {
              case 0:
              return (
                <div className="Policy f5">
                <p>Privacy Policy<br />Effective date: January 01, 2019<br />Chris Dirks ("I", "we", or "our") operates the active website: https://www.chrisdirks.com (the "Service").<br />This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. <br />We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.</p>
<p>Information Collection And Use<br />We collect several different types of information for various purposes to provide and improve our Service to you.<br />Types of Data Collected<br />Personal Data<br />While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:<br />* Email address<br />* First name and last name<br />* Cookies and Usage Data<br />Usage Data<br />We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.<br />Tracking &amp; Cookies Data<br />We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.<br />Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.<br />You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.<br />Examples of Cookies we use:<br />* Session Cookies. We use Session Cookies to operate our Service.<br />* Preference Cookies. We use Preference Cookies to remember your preferences and various settings.<br />* Security Cookies. We use Security Cookies for security purposes.<br />Use of Data<br />Chris Dirks and https://www.chrisdirks.com uses the collected data for various purposes:<br />* To provide and maintain the Service<br />* To notify you about changes to our Service<br />* To allow you to participate in interactive features of our Service when you choose to do so<br />* To provide customer care and support<br />* To provide analysis or valuable information so that we can improve the Service<br />* To monitor the usage of the Service<br />* To detect, prevent and address technical issues<br />Transfer Of Data<br />Your information, including Personal Data, may be transferred to &mdash; and maintained on &mdash; computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.<br />If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to the United States and process it there.<br />Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.<br />Chris Dirks and https://www.chrisdirks.com will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.<br />Disclosure Of Data<br />Legal Requirements<br />Chris Dirks and https://www.chrisdirks.com may disclose your Personal Data in the good faith belief that such action is necessary to:<br />* To comply with a legal obligation<br />* To protect the rights or property of Chris Dirks and https://chrisdirks.com<br />* To prevent or investigate possible wrongdoing in connection with the Service<br />* To protect the personal safety of users of the Service or the public<br />* To protect against legal liability<br />Security Of Data<br />The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.<br />Service Providers<br />We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.<br />These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.<br />Links To Other Sites<br />Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.<br />We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.<br />Children's Privacy<br />Our Service does not address anyone under the age of 18 ("Children").<br />We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.<br />Changes To This Privacy Policy<br />We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.<br />We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.<br />You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.<br />Contact Us<br />If you have any questions about this Privacy Policy, please contact us:<br />* By email: chrisdirks.developer@gmail.com<br />* By website: Through the contact form on the Contact page of this website</p>
                </div>
              );
            }
        
      }
      return (<p>No Content Yet</p>)
    };

    return(
      <div className="MainContent flex">
        {getContent() }
      </div>
  
    )
}

export default MainContent;