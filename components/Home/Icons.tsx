function Svg({ size, children }: React.PropsWithChildren<{ size: number }>) {
  return (
    <svg
      width={size}
      height={size}
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

function Path({ d }: { d: string }) {
  return (
    <path
      d={d}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

function Github({ size = 24 }: { size?: number }) {
  return (
    <Svg size={size}>
      <Path d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3" />
    </Svg>
  );
}

function Twitter({ size = 24 }: { size?: number }) {
  return (
    <Svg size={size}>
      <Path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z" />
    </Svg>
  );
}

function LocationPin({ size = 24 }: { size?: number }) {
  return (
    <Svg size={size}>
      <Path d="M20 10c0 4.418-8 12-8 12s-8-7.582-8-12a8 8 0 1116 0z" />
      <Path d="M12 11a1 1 0 100-2 1 1 0 000 2z" />
    </Svg>
  );
}

let Icons: {
  Github: typeof Github;
  Twitter: typeof Twitter;
  LocationPin: typeof LocationPin;
} = {
  Github,
  Twitter,
  LocationPin
};

export default Icons;
