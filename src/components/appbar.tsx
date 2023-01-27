import { motion } from 'framer-motion';
import { type FC } from 'react';

const AppBar: FC = () => {
  return (
    <motion.header className="w-screen px-normal py-4 relative">
      <div className="w-full max-w-[640px] flex flex-row items-center justify-beetwen">
        <div className="flex flex-row gap-2 items-center justify-start w-fit">
          <motion.svg
            id="a"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            height={24}
          >
            <path
              d="M235,128c0,1.88-.49,3.72-1.43,5.35l-48.13,83.31c-.94,1.63-2.3,2.99-3.93,3.93-1.63,.94-3.49,1.43-5.37,1.42H79.87c-1.88,0-3.74-.48-5.37-1.42-1.63-.94-2.99-2.29-3.93-3.93L22.43,133.35c-.94-1.63-1.43-3.47-1.43-5.35s.49-3.72,1.43-5.35L70.56,39.35c.94-1.63,2.3-2.99,3.93-3.92,1.63-.94,3.49-1.43,5.37-1.42h96.26c1.89,0,3.74,.48,5.37,1.42,1.63,.94,2.99,2.29,3.93,3.92l48.13,83.31c.94,1.63,1.43,3.47,1.43,5.35Zm-106,51v-40m-24,0h48m-48,0v-40m48,40v-40"
              stroke="#7400e9"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </motion.svg>
          <h3 className="text-sm font-medium text-white70">Yara Bramasta</h3>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 h-[1px] w-full bg-white20" />
    </motion.header>
  );
};

export default AppBar;
