import React from 'react';
import styled from 'styled-components';
import { Icon } from '@components/icons';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { truncate } from '../utils/truncate';
const StyledCarouselSection = styled.section`
  margin: 0 auto;
  max-width: 100%;
  padding: 0;
  & ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: space-between;
    padding: 0;
    & li {
      border-radius: var(--border-radius);
      border: 2px solid var(--quaternary);
      background-color: transparent;
      height: 18vh;
      width: 150px;
      margin-top: 10px;
      position: relative;
      transition: transform 450ms ease 0s;
      padding: 5px;
      margin-left: 2px;
      white-space: nowrap;
      overflow: hidden;
      @media (max-width: 480px) {
        height: 20vh;
        width: 110px;
      }

      &:hover {
        transform: scale(1.08);
        opacity: 1;
      }

      h3 {
        margin-top: 15px;
        color: var(--quinary);
        font-size: var(--fz-md);
        text-align: center;

        @media (max-width: 480px) {
          font-size: var(--fz-xxs);
        }
      }

      & div {
        text-align: center;

        a {
          padding: 5px;

          svg {
            width: 17px;
            height: 17px;
          }
        }
      }
    }
  }
`;
function Carousel() {
  const data = useStaticQuery(graphql`
    query {
      courses: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/courses/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              cover {
                childImageSharp {
                  fluid(maxWidth: 100, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                  fixed(width: 32, height: 32) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              github
              external
            }
          }
        }
      }
    }
  `);

  const courses = data.courses.edges.filter(({ node }) => node);

  return (
    <>
      <StyledCarouselSection id="container">
        <ul>
          {courses &&
            courses.map(({ node }, i) => {
              const { frontmatter } = node;
              const { external, title, github, cover } = frontmatter;
              return (
                <li key={i} title={title}>
                  <Img
                    fixed={cover.childImageSharp.fixed}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt={title}
                    className="img"
                    style={{
                      borderRadius: '50%',
                    }}
                  />
                  <h3>{truncate(title)}</h3>{' '}
                  <div>
                    {github && (
                      <a href={github} aria-label="GitHub Link" target="_blank" rel="noreferrer">
                        <Icon name="GitHub" />
                      </a>
                    )}{' '}
                    <a href={external} aria-label="External Link" target="_blank" rel="noreferrer">
                      <Icon name="External" />
                    </a>
                  </div>
                </li>
              );
            })}
        </ul>
      </StyledCarouselSection>
    </>
  );
}

export default Carousel;
