import React from 'react';
import ReactTooltip from 'react-tooltip';

const SocialLinks = () => {
  var links = [
    {
      "label": "Github",
      "link": "https://github.com/Cu-chi",
      "fa": "fab fa-github"
    },
    {
      "label": "Discord",
      "link": "https://discord.gg/qvFmwj2a2T",
      "fa": "fab fa-discord"
    },
    {
      "label": "Youtube",
      "link": "https://www.youtube.com/c/Cuchii",
      "fa": "fab fa-youtube"
    },
    {
      "label": "Shop",
      "link": "https://cuchi-store.tebex.io/",
      "fa": "fas fa-shopping-cart"
    }
  ];

  return (
    <div className='social-links'>
      {links.map((socialLink, i) => (
        <div key={i}>
          <a href={socialLink.link} target="_blank" data-tip data-for={socialLink.label}><i className={socialLink.fa}></i></a>
          <ReactTooltip id={socialLink.label} place="top" type="dark" effect="solid">
            <span>{socialLink.label}</span>
          </ReactTooltip>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
