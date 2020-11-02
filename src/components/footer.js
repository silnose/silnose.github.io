import React from 'react';

import styled from 'styled-components';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledCredit = styled.div`
  color: var(--tertiary);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  a {
    padding: 10px;
  }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      width: auto;
      height: 15px;
      margin-right: 5px;
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <StyledCredit tabindex="-1">
      <a href="https://github.com/silnose">
        <div> {'</>'} with 💜 from 🇦🇷 </div>
      </a>
      <br />
      <small>
        <a href="https://github.com/bchiang7">Thanks @bchiang7</a>
      </small>
    </StyledCredit>
  </StyledFooter>
);

export default Footer;
