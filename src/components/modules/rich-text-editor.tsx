import { PortableText } from 'next-sanity';

export default function RichTextEditor({
  content,
}: Partial<{
  content: any;
}>) {
  return (
    <section className="section-fullwidth relative overflow-hidden text-center">
      <div className="z-10 mx-auto max-w-screen-md">
        <PortableText value={content} />
      </div>
    </section>
  );
}
