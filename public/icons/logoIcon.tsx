import type { FC } from 'react';

type LogoIconProps = {
  width?: number;
  height?: number;
  color?: string;
};

const LogoIcon: FC<LogoIconProps> = ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 270.000000 120.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#FF5252' }} />
        <stop offset="100%" style={{ stopColor: '#651414' }} />
      </linearGradient>
    </defs>
    <g
      transform="translate(0.000000,180.000000) scale(0.100000,-0.100000)"
      fill="url(#logoGradient)"
      stroke="none"
    >
      <path d="M720 1630 c-306 -79 -500 -323 -500 -627 0 -127 23 -189 100 -265 47 -46 70 -60 125 -77 37 -12 91 -21 120 -21 109 0 246 66 320 153 l35 42 0 -87 0 -88 110 0 110 0 0 495 0 495 -110 0 -110 0 0 -254 c0 -221 -2 -262 -19 -315 -50 -162 -186 -285 -317 -286 -51 0 -66 4 -97 28 -89 68 -96 182 -21 328 60 114 179 208 317 250 l67 21 0 46 c0 26 3 77 7 115 l6 67 -34 -1 c-19 0 -68 -9 -109 -19z" />
      <path d="M1270 1155 l0 -495 110 0 110 0 2 333 3 332 135 -333 134 -332 128 0 128 0 0 322 0 323 106 -260 c58 -143 117 -288 131 -322 l25 -63 88 0 88 0 -115 283 c-63 155 -153 378 -200 495 l-85 212 -129 0 -129 0 -2 -312 -3 -313 -127 310 -126 310 -136 3 -136 3 0 -496z" />
      <path d="M2294 1640 c-39 -16 -74 -68 -74 -112 0 -103 107 -162 191 -105 121 81 18 272 -117 217z m112 -28 c45 -36 56 -90 29 -142 -19 -37 -43 -50 -94 -50 -106 0 -147 133 -59 194 30 21 98 20 124 -2z" />
      <path d="M2297 1572 c-39 -43 -8 -114 50 -114 26 0 70 38 58 50 -3 3 -12 -4 -21 -16 -17 -25 -56 -29 -73 -8 -7 8 -11 30 -9 48 2 26 9 35 31 43 25 8 31 6 48 -15 13 -18 19 -20 19 -9 0 40 -73 55 -103 21z" />
    </g>
  </svg>
);
export default LogoIcon;
