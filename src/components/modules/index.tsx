import RichTextEditor from '@/components/modules/rich-text-editor';
import { type BlogPost, type Module, type Page } from '@/types';

export default function ModulesResolver({
  modules,
  page,
  post,
}: {
  modules?: Module[];
  page?: Page;
  post?: BlogPost;
}) {
  return (
    <>
      {modules?.map((module) => {
        switch (module._type) {
          case 'rich-text-editor':
            return <RichTextEditor {...module} key={module._key} />;

          default:
            return <div key={module._key} data-type={module._type} />;
        }
      })}
    </>
  );
}
