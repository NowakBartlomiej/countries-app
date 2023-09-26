import Countries from '@/components/countries/countries';
import Options from '@/components/options/options';

export const metadata = {
  title: 'Home Page',
  description: 'This is the home page',
  category: 'education',
  keywords: ['geography', 'countries', 'country', 'map', 'education'],
  icons: {
    icon: 'logo.svg',
  },
};

const Page = () => {
  return (
    <section>
      <Options />
    </section>
  );
};

export default Page;
