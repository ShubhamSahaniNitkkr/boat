import Head from 'next/head';
import { Categories, VlogWidget, VlogCard } from '../components';
import { getVlogs } from '../services';

export default function Home({ vlogs }) {
  console.log('/////', vlogs);
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Boat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {vlogs.map((vlog) => (
            <VlogCard vlog={vlog.node} key={`${vlog.title}`} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <VlogWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const vlogs = (await getVlogs()) || [];
  return {
    props: { vlogs },
  };
}
