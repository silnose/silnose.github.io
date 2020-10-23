import * as React from 'react';

function IconArrowDown(props) {
  return (
    <svg
      aria-hidden="true"
      width="1.5em"
      height="1.5em"
      style={{
        msTransform: 'rotate(360deg)',
        WebkitTransform: 'rotate(360deg)',
      }}
      viewBox="0 0 36 36"
      transform="rotate(360)"
      {...props}>
      <path
        className="prefix__clr-i-outline prefix__clr-i-outline-path-1"
        d="M18 34A10 10 0 018 24V12a10 10 0 0120 0v12a10 10 0 01-10 10zm0-30a8 8 0 00-8 8v12a8 8 0 0016 0V12a8 8 0 00-8-8z"
        fill="#b583f6"
      />
      <path
        className="prefix__clr-i-outline prefix__clr-i-outline-path-2"
        d="M18 15a1 1 0 01-1-1v-4a1 1 0 012 0v4a1 1 0 01-1 1z"
        fill="#b583f6"
      />
    </svg>
  );
}

export default IconArrowDown;
