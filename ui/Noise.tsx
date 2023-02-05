import { useWindowSize } from '@/hooks';
import { motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState, type FC } from 'react';

const Noise: FC = () => {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLCanvasElement>(null);
  const { width, height } = useWindowSize();

  // Function to generate noise effect
  const generateNoise = useCallback((ctx: CanvasRenderingContext2D) => {
    let w = ctx.canvas.width,
      h = ctx.canvas.height,
      /* This creates a new ImageData object
        with the specified dimensions(i.e canvas
        width and height). All pixels are set to
        transparent black (i.e rgba(0,0,0,0)). */
      idata = ctx.createImageData(w, h),
      // Creating Uint32Array typed array
      buffer32 = new Uint32Array(idata.data.buffer),
      buffer_len = buffer32.length,
      i = 0;

    for (; i < buffer_len; i++) buffer32[i] = ((255 * Math.random()) | 0) << 24;

    /* The putImageData() method puts the
        image data (from a specified ImageData
        object) back onto the canvas. */
    ctx.putImageData(idata, 0, 0);
  }, []);

  useEffect(() => {
    setMounted(true);

    if (mounted) {
      let canvas = ref.current,
        /* The getContext() method returns an object
          that provides methods and properties for
          drawing on the canvas. */
        ctx = canvas.getContext('2d');

      /* Setting canvas width and height equal
          to window screen width and height. */
      canvas.width = width;
      canvas.height = height;
      // Creating animation effect
      var toggle = true;
      (function loop() {
        toggle = !toggle;
        if (toggle) {
          // Loop function is called each
          // time before next repaint
          requestAnimationFrame(loop);
          return;
        }
        generateNoise(ctx);
        requestAnimationFrame(loop);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, width, height]);

  if (!mounted) return null;

  return (
    <motion.div
      className="h-full w-full -z-10 absolute top-0 left-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.3, ease: 'easeInOut' }}
    >
      <style jsx>{`
        #canvas {
          opacity: 0.1;
          background-color: var(--color-white20);
        }
      `}</style>
      <canvas id="canvas" ref={ref} />
    </motion.div>
  );
};

export default Noise;
