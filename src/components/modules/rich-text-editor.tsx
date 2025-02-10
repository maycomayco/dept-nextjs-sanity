import { PortableText } from 'next-sanity';

export default function RichTextEditor({
  content,
}: Partial<{
  content: any;
}>) {
  return (
    <section className="section text-center">
      <PortableText value={content} />
    </section>
  );
}
