export default function Section({ children }: React.PropsWithChildren) {
  return (
    <section className="overflow-hidden p-10 lg:p-20 border-b border-b-black/20 dark:border-b-white/20">
      {children}
    </section>
  );
}
