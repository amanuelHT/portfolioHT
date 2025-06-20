import { ReactNode } from 'react';

type SectionWrapperProps = {
  children: React.ReactNode;
  id?: string;
};

export default function SectionWrapper({ children, id }: SectionWrapperProps) {
  return (
    <section id={id} className="max-w-screen-lg mx-auto px-6 py-16">
      {children}
    </section>
  );
}
