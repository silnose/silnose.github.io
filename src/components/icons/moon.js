import * as React from 'react';

function IconMoon(props) {
  return (
    <svg
      aria-hidden="true"
      width="1.5em"
      height="1.5em"
      style={{
        msTransform: 'rotate(360deg)',
        WebkitTransform: 'rotate(360deg)',
      }}
      viewBox="0 0 750 850"
      transform="rotate(360)"
      {...props}>
      <path
        d="M732 392q3-2 7-1t3 5q-4 76-36 142t-84 114-122 74-147 23q-71-4-133-33t-109-77-77-109T1 397q-4-78 23-147t74-122 114-84T354 8q4 0 6 3t-2 7q-31 40-46 90t-8 106q5 45 25 85t51 71 71 51 85 25q56 7 106-8t90-46z"
        fill="#fff"
      />
    </svg>
  );
}

export default IconMoon;
