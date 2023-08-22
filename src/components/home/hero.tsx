import { Button } from '@/components/ui/button';
import Milestones from './milestones';

interface Props {
  title: string;
  subtitle: string;
}

export default function Hero({ title, subtitle }: Props) {
  return (
    <section className='h-screen'>
      <div className='relative my-2 h-[54%] w-full rounded-xl bg-hero bg-cover bg-center'>
        <div className='pt-16 text-center'>
          <h1 className='text-7xl font-bold tracking-tight lg:text-8xl'>
            {title}
          </h1>
          <p className='mx-auto mt-6 w-6/12 text-lg leading-7 text-gray-500'>
            {subtitle}
          </p>
        </div>

        <div className='absolute -bottom-7 left-0 w-full'>
          <SearchHero />
        </div>
      </div>
      <div className='mt-16'>
        <Milestones />
      </div>
    </section>
  );
}

const SearchHero = () => {
  return (
    <div className='flex items-center justify-center'>
      <input
        type='text'
        placeholder='Cari Properti Anda...'
        className='bg-tertiary h-14 w-1/2 rounded-full border border-gray-300 px-4 py-2 text-lg focus:outline-none'
      />
      <Button className='-ml-[9.4rem] h-11 w-36 rounded-full px-4 py-1 text-white'>
        Cari
      </Button>
    </div>
  );
};
