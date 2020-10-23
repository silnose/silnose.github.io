import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const Greeting = () => {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const getGreetings = () => {
      const now = new Date();
      const hrs = now.getHours();
      let result = 'Hey ';

      if (hrs > 0) {
        result = 'Mornin Sunshine!';
      } // REALLY early
      if (hrs > 6) {
        result = 'Good morning';
      } // After 6am
      if (hrs > 12) {
        result = 'Good afternoon';
      } // After 12pm
      if (hrs > 17) {
        result = 'Good evening';
      } // After 5pm
      if (hrs > 22) {
        result = 'Good night';
      } // After 10pm
      setMsg(result);
    };
    getGreetings();
  }, []);

  const StyledGreeting = styled.div`
    h1 {
      margin: 1px 0 30px 0px;
      color: var(--secondary);
      font-family: var(--font-mono);
      font-size: clamp(var(--fz-sm), 6vw, var(--fz-md));
      font-weight: 400;

      @media (max-width: 480px) {
        margin: 0 0 20px 2px;
      }
    }
  `;

  return (
    <StyledGreeting>
      <h1>Hey! {msg}</h1>
    </StyledGreeting>
  );
};
export default Greeting;
