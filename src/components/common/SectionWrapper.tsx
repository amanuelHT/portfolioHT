'use client';

type Props = {
  id?: string;
  children: React.ReactNode;
};

export default function SectionWrapper({ id, children }: Props) {
  return (
    <section id={id} className="py-0 md:py-1">
      <div className="max-w-4x1.5 mx-auto px-12">{children}</div>
    </section>
  );
}
