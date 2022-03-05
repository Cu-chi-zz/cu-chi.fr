import React from 'react';
import ReactTooltip from 'react-tooltip';

const DiscordName = () => {
  let username = "Cuchi#3120"

  return (
    <div className='discord-name'>
      <p data-tip data-for="copy" id="username" onClick={() => {
        navigator.clipboard.writeText(username);
      }}>{username}</p>
      <ReactTooltip className="copy-tooltip" id="copy" place="top" type="dark" effect="solid">
        <span>Click to copy</span>
      </ReactTooltip>
    </div>
  );
};

export default DiscordName;