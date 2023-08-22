import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Milestones() {
  return (
    <section>
      <div className='grid grid-cols-4 content-center gap-4'>
        <div>
          <h2 className='text-4xl'>50</h2>
          <p className='text-gray-500'>Properti Siap Dibeli</p>
        </div>
        <div>
          <h2 className='text-4xl'>50</h2>
          <p className='text-gray-500'>Pengalaman Dibidang Properti</p>
        </div>

        <div className='col-span-2 justify-self-end'>
          <div className='flex h-16 w-72 items-center justify-between rounded-xl bg-indigo-600 px-3 text-white'>
            <p>Kontak kami untuk info</p>
            <Link href='/' className='group rounded-lg bg-white p-2'>
              <ArrowRight
                color='#4f46e5'
                className='h-7 w-7 transition-all duration-300 group-hover:rotate-45'
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
