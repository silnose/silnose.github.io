import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, platzi } from '@config';
import sr from '@utils/sr';

const StyledCoursesSection = styled.section`
  max-width: 600px;
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
`;

const Courses = () => {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledCoursesSection id="certificates" ref={revealContainer}>
      <h2 className="overline">Recent courses that I take </h2>

      <h2 className="title">Kaizen Mode On</h2>

      <a className="certificates-link" href={platzi} target="_blank" rel="noopener noreferrer">
        Certificates
      </a>
    </StyledCoursesSection>
  );
};

export default Courses;
