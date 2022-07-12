import React, { useEffect, useState } from 'react';

const Description = () => {
  // thanks to https://stackoverflow.com/a/8207708
  const calcTimeZone = (offset) => {
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000) + 60000 * 60;
    var nd = new Date(utc + (3600000*offset));
    return nd.toLocaleString();
  };
  const [date, setDate] = useState(calcTimeZone(1.0))

  useEffect(() => {
    setInterval(() => {
      setDate(calcTimeZone(1.0))
    }, 1000)
  }, [])
  return (
    <div className='description'>
      <p>Welcome on my website.<br /><br />
      Let me introduce myself, I'm Cuchi, a french guy having fun doing cool stuff with code.<br />
      I mostly work with Lua <span className="less-opacity">(more specifically on FiveM)</span>, C#, HTML/CSS/JS <span className="less-opacity">(I can do cool and modern interfaces)</span>.
      I touch a bit of everything, this page was made thanks to React. I always learn more over time.<br /><br />
      <i className="fas fa-road"></i> <b>Contact me only for FiveM purpose.</b><br /><br />
      You can see my work on github <span className="less-opacity">(even if most of my big project are private)</span> and you can let stars on projects that you like and you think attractive<br />
      Any question? Any request? I'm always available on discord and I can <span className="less-opacity"></span>promise to answer you in less than 16 hours 🥴<br /><br />
      Current time in France : {date}<br />
      <span className="less-opacity">You can find source code <b><a href='https://github.com/Cu-chi/cu-chi.fr' target="_blank">here</a></b></span>
      </p>
    </div>
  );
};

export default Description;