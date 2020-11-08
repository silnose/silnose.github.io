import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Carousel } from '@components';

const StyledCoursesSection = styled.section`
  max-width: 1000px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--secondary);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .certificates-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  .basic {
    & .link-button {
      ${({ theme }) => theme.mixins.smallButton};
      margin-left: 5px;
      width: 20vw;
      @media (max-width: 480px) {
        display: block;
        width: 85vw;
        text-align: center;
        margin-bottom: 5px;
      }
    }
  }
`;

const Courses = () => {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledCoursesSection id="getting-better" ref={revealContainer}>
      <h2 className="overline">Recent courses that I take and more... </h2>

      <h2 className="title">Getting better</h2>
      <div className="basic">
        <a href="/kaizen.pdf" className="link-button" target="_blank">
          Personal
        </a>

        <a href="/agile.pdf" className="link-button" target="_blank">
          Team
        </a>

        <a href="/desc.pdf" className="link-button" target="_blank">
          Interact
        </a>
      </div>

      <Carousel />
    </StyledCoursesSection>
  );
};

export default Courses;
