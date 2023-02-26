import clsx from 'clsx';

type Props = {
  fullHeight?: boolean;
  fullWidth?: boolean;
  border?: boolean;
  adaptiveBorder?: boolean;
  style?: string;
};

export default function Section({
  children,
  fullHeight = false,
  fullWidth = false,
  border = true,
  adaptiveBorder = false,
  style
}: React.PropsWithChildren<Props>) {
  return (
    <section
      className={clsx(
        style,
        fullHeight && 'safe-h-screen',
        fullWidth && 'flex-grow',
        border
          ? adaptiveBorder
            ? 'border-b border-b-dark/20 dark:border-b-light/20 lg:border-r lg:border-r-dark/20 lg:dark:border-r-light/20 lg:border-b-0'
            : 'border-b border-b-dark/20 dark:border-b-light/20 border-r-0'
          : 'border-0',
        'overflow-hidden'
      )}
    >
      {children}
    </section>
  );
}
