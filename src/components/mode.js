import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '@components/icons';
import { loaderDelay } from '@utils';

const Button = styled.button`
  margin-top: auto;
  cursor: pointer;
  background-color: ${props => (props.dark ? '#fff' : '#05001b')};
  border-radius: 50% !important;
  padding: 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  justify-self: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  outline: none;
  border: none;
`;
const ModeWrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: auto;
  height: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  justify-self: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: transparent;
  z-index: 100000;
  @media (max-width: 480px) {
    display: none;
  }
`;

const Mode = ({ darkModeHandler, isDark }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), loaderDelay);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <ModeWrapper>
      {isMounted && (
        <Button onClick={darkModeHandler} dark={isDark}>
          <Icon name={isDark ? 'dark' : 'light'} />
        </Button>
      )}
    </ModeWrapper>
  );
};

Mode.propTypes = {
  isDark: PropTypes.bool,
  darkModeHandler: PropTypes.func,
};

export default Mode;
