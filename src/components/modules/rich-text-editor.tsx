import moduleProps from '@/lib/module-props';
import { PortableText } from 'next-sanity';

export default function RichTextEditor({
  content,
  ...props
}: Partial<{
  content: any;
}>) {
  return (
    <section className="section text-center" {...moduleProps(props)}>
      <PortableText value={content} />
    </section>
  );
}
