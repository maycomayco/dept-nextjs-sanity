import { isDev } from '@/lib/env';

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-md">
      <section className="my-10 w-full rounded-lg border-2 border-black bg-white p-12 text-center">
        <h1 className="text-5xl font-medium">I&apos;m a starter package</h1>
        <br />
        <p>A simple starter with some goods.</p>

        <p>
          <code>dev environment: {isDev ? 'yes' : 'no'}</code>
        </p>
      </section>
    </div>
  );
}
