import React from 'react';
import { Button } from '../ui/button';
import { Building2 } from 'lucide-react';

export default function Cta() {
  return (
    <section className='mt-16'>
      <div className='flex justify-around text-sm'>
        <div>
          <Button className='block h-20 bg-white px-7 font-bold text-black shadow-md hover:bg-accent hover:shadow-md '>
            <Building2 size={36} />
            Cari Properti
          </Button>
        </div>
        <div>
          <Button className='h-20 bg-white px-7 font-bold text-black shadow-md hover:bg-accent hover:shadow-md'>
            Cari Properti
          </Button>
        </div>
        <div>
          <Button className='h-20 bg-white px-7 font-bold text-black shadow-md hover:bg-accent hover:shadow-md'>
            Cari Properti
          </Button>
        </div>
        <div>
          <Button className='h-20 bg-white px-7 font-bold text-black shadow-md hover:bg-accent hover:shadow-md'>
            Cari Properti
          </Button>
        </div>
        <div>
          <Button className='h-20 bg-white px-7 font-bold text-black shadow-md hover:bg-accent hover:shadow-md'>
            Cari Properti
          </Button>
        </div>
      </div>
    </section>
  );
}
