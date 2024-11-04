export const SectionContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <section className="mx-auto mt-2 max-w-3xl bg-gray-800 text-gray-200">
      {children}
    </section>
  );
};
