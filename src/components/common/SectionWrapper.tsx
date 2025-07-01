// SectionWrapper.tsx
'use client';

type Props = {
  id?: string;
  children: React.ReactNode;
};

export default function SectionWrapper({ id, children }: Props) {
  return (
    <section id={id} className="py-8 md:py-5"> {/* reduced from py-20 */}
      <div className="max-w-4x3 mx-auto px-4">{children}</div>
    </section>
  );
}
