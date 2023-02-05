import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 | Not Found</title>
      </Head>
      <div className="flex flex-col max-w-[720px] gap-6 mx-auto h-full items-center justify-center p-8">
        <div className="overflow-hidden">
          <motion.p
            className="text-xs text-white40 text-center"
            initial={{ opacity: 0, y: 20, skew: -30 }}
            animate={{ opacity: 1, y: 0, skew: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.6 }}
          >
            404 &bull; PAGE NOT FOUND
          </motion.p>
        </div>
        <h1 className="text-3xl text-white text-center font-semibold">
          {"It seems like you lost your way, isn't it?"
            .split('')
            .map((c, i) => {
              return (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  key={c + i}
                >
                  {c}
                </motion.span>
              );
            })}
        </h1>
        <Link
          href="/"
          className="text-white60 font-medium text-center hover:text-white85 hover:underline overflow-hidden"
        >
          <motion.p
            initial={{ opacity: 0, y: 20, skew: -30 }}
            animate={{ opacity: 1, y: 0, skew: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.6 }}
          >
            back to the homepage.
          </motion.p>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
