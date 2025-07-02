'use client';

type Props = {
  id?: string;
  children: React.ReactNode;
};

export default function SectionWrapper({ id, children }: Props) {
  return (
    <section id={id} className="py-8 md:py-5">
      <div className="max-w-4xl mx-auto px-4">{children}</div>
    </section>
  );
}
