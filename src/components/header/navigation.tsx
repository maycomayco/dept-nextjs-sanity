import CTA from '@/components/cta';
import { getSite } from '@/sanity/lib/queries';

export default async function Navigation() {
  const { headerMenu } = await getSite();

  return (
    <nav
      className="max-md:anim-fade-to-r flex gap-y-2 [grid-area:nav] max-md:my-4 max-md:flex-col max-md:header-closed:hidden md:justify-center"
      role="navigation"
    >
      {headerMenu?.items?.map((item, key) => {
        switch (item._type) {
          case 'link':
            return <CTA key={key} className="hover:link md:px-3" link={item} />;

          // case 'link.list':
          //   return <LinkList {...item} key={key} />;

          default:
            return null;
        }
      })}
    </nav>
  );
}
