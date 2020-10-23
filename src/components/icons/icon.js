import React from 'react';
import PropTypes from 'prop-types';
import {
  IconSun,
  IconMoon,
  IconAppStore,
  IconCodepen,
  IconExternal,
  IconFolder,
  IconFork,
  IconGitHub,
  IconInstagram,
  IconLinkedin,
  IconLocation,
  IconPlayStore,
  IconStar,
  IconTwitter,
  IconZap,
  IconArrowDown,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'AppStore':
      return <IconAppStore />;
    case 'Codepen':
      return <IconCodepen />;
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'Fork':
      return <IconFork />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Location':
      return <IconLocation />;
    case 'PlayStore':
      return <IconPlayStore />;
    case 'Star':
      return <IconStar />;
    case 'Twitter':
      return <IconTwitter />;
    case 'Zap':
      return <IconZap />;
    case 'dark':
      return <IconSun />;
    case 'light':
      return <IconMoon />;
    case 'ArrowDown':
      return <IconArrowDown />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
