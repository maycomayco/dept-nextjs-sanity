import { PortableText } from 'next-sanity';

export default function RichTextEditor({
  content,
}: Partial<{
  content: any;
}>) {
  return (
    <section className="text-center">
      <div className="mx-auto max-w-screen-md">
        <PortableText value={content} />
      </div>
    </section>
  );
}
