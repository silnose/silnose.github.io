import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { professionalTitle } from '@config';
import { navDelay, loaderDelay } from '@utils';
import { IconArrowDown } from '../icons';
import { Greeting } from '../greeting';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;

  h4 {
    margin-top: 5px;
    color: var(--tertiary);
    line-height: 0.9;
  }

  h6 {
    opacity: 0.9;
  }
  p {
    margin: 20px 0 0;
    max-width: 500px;
  }

  pre {
    background: var(--code);
    color: turquoise;
    page-break-inside: avoid;
    font-family: monospace;
    font-size: 0.2rem;
    line-height: 1.8;
    letter-spacing: 1;
    margin-bottom: 1rem;
    margin-left: 5px;
    max-width: 90vw;
    min-width: 80vw;
    overflow: hidden;
    padding-left: 1rem;
    display: block;
    word-wrap: break-word;
    height: 283px;
    border-radius: 5px;
    & span {
      color: #eb7feb;
    }
  }
  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-left: 5px;
  }
`;

const Arrow = styled.div`
  margin: 0 auto;
  position: relative;
  bottom: -2rem;
  left: 50%;
  margin-left: -20px;
  width: 30px;
  height: 30px;
  animation: bounce 2s infinite;
  @media (max-width: 480px) {
    display: none;
  }
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-15px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;
const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <Greeting />;
  const two = <h1 className="big-heading">I'm Silvana Murgo</h1>;
  const three = (
    <h6 className="small-heading">
      {'<'}
      {professionalTitle}
      {'/>'}
    </h6>
  );
  const four = (
    <pre>
      <code>
        const <span>about</span> = &#123; <br />
        &nbsp;&nbsp;
        <span>software_developer</span>:&nbsp;
        <span role="img" aria-label="Software Developer">
          🧑‍💻,
        </span>
        <br />
        &nbsp;&nbsp;
        <span>happy_team_player</span>:&nbsp;
        <span role="img" aria-label="Sr Meme Engineer">
          💃,
        </span>
        <br />
        &nbsp;&nbsp;
        <span>sr_meme_engineer</span>:&nbsp;
        <span role="img" aria-label="Sr Meme Engineer">
          🤓,
        </span>
        <br />
        &nbsp;&nbsp;
        <span>argentinian</span>:&nbsp;
        <span role="img" aria-label="Argentinian">
          🇦🇷,
        </span>
        <br />
        &nbsp;&nbsp;
        <span>self_taught</span>:&nbsp;
        <span role="img" aria-label="Self-Taught">
          👩‍🎓,
        </span>
        <br />
        &nbsp;&nbsp;
        <span>disruptive</span>:&nbsp;
        <span role="img" aria-label="Disruptive">
          🤸‍♀️,
        </span>
        <br />
        &nbsp;&nbsp;
        <span>kaizen</span>:&nbsp;
        <span role="img" aria-label="Kaizen">
          🧘‍♀️,
        </span>
        <br />
        &nbsp;&nbsp;
        <span>cook</span>:&nbsp;
        <span role="img" aria-label="Cooker">
          🧑‍🍳,
        </span>
        <br />
        &#125;;
      </code>
    </pre>
  );

  const items = [one, two, three, four];

  return (
    <>
      <StyledHeroSection>
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
        {isMounted && (
          <Arrow>
            <IconArrowDown />
          </Arrow>
        )}
      </StyledHeroSection>
    </>
  );
};

export default Hero;
