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

  h2 {
    & small {
      font-size: var(--fz-sm);
      color: var(--secondary);
      font-family: var(--font-mono);
      font-weight: 400;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--tertiary);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 500px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
    margin-left: 5px;
  }
  .resume-button {
    ${({ theme }) => theme.mixins.bigButton};
    margin-left: 10px;
    margin-top: 10px;
  }

  .scrollDown-button {
    margin: 0 auto;
    & svg {
      margin-top: 70px;
      @media (max-width: 480px) {
        display: none;
      }
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
  const two = <h2 className="big-heading">I'm Silvana Murgo</h2>;
  // const three = <h3 className="big-heading">I build things for the web.</h3>;
  const four = (
    <code>
      [
      <span role="img" aria-label="Software Developer">
        🧑‍💻
      </span>
      : '{professionalTitle}' ,
      <span role="img" aria-label="Argentinian">
        🇦🇷
      </span>
      : 'Argentinian' ,
      <span role="img" aria-label="Cooker">
        🧑‍🍳
      </span>
      : 'Cooker' ,
      <span role="img" aria-label="Self-Taught">
        👩‍🎓
      </span>
      : Self Taught,
      <span role="img" aria-label="Disruptive">
        🤸‍♀️
      </span>
      : Disruptive,
      <span role="img" aria-label="Kaizen">
        🧘‍♀️
      </span>
      : Keizen,
      <span role="img" aria-label="Sr Meme Engineer">
        🤓
      </span>{' '}
      :'Sr Meme Engineer' ]{' '}
    </code>
  );
  const five = (
    <>
      <a href="#contact" className="email-link">
        Get In Touch
      </a>
      {/* <a href="/resume.pdf" className="resume-button">
        Take my Resume
      </a> */}
    </>
  );

  const items = [one, two, four, five];

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
          <div className="scrollDown-button">
            <IconArrowDown />
          </div>
        )}
      </StyledHeroSection>
    </>
  );
};

export default Hero;
