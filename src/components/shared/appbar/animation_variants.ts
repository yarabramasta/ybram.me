export const logoText = {
  default: {
    fontSize: '0.875rem',
    color: 'var(--white60)'
  },
  scroll: {
    fontSize: '1rem',
    color: 'var(--white85)'
  }
};

export const barStroke = {
  default: {
    width: 0,
    opacity: 0
  },
  scroll: {
    width: '100%',
    opacity: 1,
    transition: {
      ease: 'linear',
      width: {
        delay: 0.1
      }
    }
  }
};

export const transition = { ease: [0.16, 1, 0.3, 1], duration: 0.3 };
