import clsx from 'clsx';

export default function Section({
  children,
  fullHeight = false,
  border = true
}: React.PropsWithChildren<{ fullHeight?: boolean; border?: boolean }>) {
  return (
    <section
      className={clsx(
        fullHeight && 'safe-h-screen',
        border ? 'border-b' : 'border-0',
        'overflow-hidden p-10 lg:p-20 border-b-dark/20 dark:border-b-light/20'
      )}
    >
      {children}
    </section>
  );
}
