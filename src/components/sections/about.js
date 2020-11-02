import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { srConfig, professionalTitle } from '@config';
import sr from '@utils/sr';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--secondary);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--secondary);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      /* filter: grayscale(100%) contrast(1); */
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--primary);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--secondary);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, traceSVG: { color: "#64ffda" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const revealContainer = useRef(null);
  const revealArchiveLink = useRef(null);
  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'JavaScript (ES6+)',
    'NPM',
    'HTML5 & (S)CSS',
    'CSS3',
    'Bootstrap',
    'ReactJS',
    'Redux',
    'React Hooks',
    'React Context',
    'WebPack',
    'PWA',
    'Vue',
    'NodeJS',
    'API Rest',
    'GraphQL',
    'Cypress.js',
    'Jest',
    'GIT',
    '.NetCore',
    'Swift',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Let me introduce myself, I'm Silvana! (<i>aka silnose</i>) a {professionalTitle} based
              in Argentina. I have 8+ years of experience in design and development of software
              solutions.
            </p>
            <p>
              I graduated from Mendoza University, with a
              <a href="http://um.edu.ar/es/ua/fi.html" target="_blank" rel="noopener noreferrer">
                Informatic Enginner Degree
              </a>
              , in the meantime I started my profesional carrear taking to the cloud and digitizing
              some local companies.
            </p>

            <p>
              I've worked with{' '}
              <Link to="/archive" ref={revealArchiveLink}>
                various types of projects
              </Link>{' '}
              and have mastered multiple programming languages and coding as well as software
              testing and debugging.
            </p>
            <p>
              Currently I'm improving my{' '}
              <a
                href="https://github.com/search?q=user%3Asilnose+javascript&type=repositories"
                target="_blank"
                rel="noopener noreferrer">
                Javascript
              </a>{' '}
              skills. I am a continuous learner I'm always looking for new things to learn, with
              Google as my mentor and VScode as my notebook.
            </p>

            <p>
              I'm always interested in the entire <b>frontend</b> spectrum that's why I'm focusing
              on making <b> accessible and usable developments</b> accessible to everyone
            </p>

            <p>
              I like to feel the satisfaction of the job done so my main interest is to work for
              objectives. I am always in search of &nbsp;
              <b>continuous improvement and innovation of processes.</b>
            </p>

            <p>My current stack includes:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Img fluid={data.avatar.childImageSharp.fluid} alt="Avatar" className="img " />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
