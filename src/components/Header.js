import React from 'react';

let headerWords = [
  "Hi!",
  "Hello!",
  "Welcome!",
  "Salutations",
  "Hi there!",
  "Hey!",
  "Greetings"
]

const Header = () => {
  const intBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
    <div className='bg'>
      <h1>{headerWords[intBetween(0, headerWords.length - 1)]}</h1>
      <div className="line"></div>
    </div>
  );
};

export default Header;