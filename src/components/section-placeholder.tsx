// PLACEHOLDER SECTION (section-placeholder.tsx)

type PlaceholderProps = {
  name?: string;
  id?: string;
};

export default function PlaceholderSection({ name, id }: PlaceholderProps) {
  return (
    <section
      id={id}
      className="flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-teal-700 to-blue-950 p-24"
    >
      <h2 className="text-center text-4xl font-bold text-white">{name}</h2>
    </section>
  );
}
