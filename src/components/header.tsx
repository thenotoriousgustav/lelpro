'use client';

import { X } from 'lucide-react';

import { useState } from 'react';

import Container from './container';
import Navbar from './navbar';
import { Button } from './ui/button';

export default function Header() {
  return (
    <header>
      <Banner
        title={'Beli satu rumah gratis apartment, hanya di lely properties ✨'}
      />
      <Container>
        <Navbar />
      </Container>
    </header>
  );
}

function Banner({ title }: { title: string }) {
  const [close, setClose] = useState(true);

  return (
    <>
      {close ? (
        <div className='flex items-center justify-center space-x-2 bg-primary py-1'>
          <h4 className='text-base font-normal text-gray-200'>{title}</h4>
          <Button variant={'link'} onClick={() => setClose(!close)}>
            <X color='white' size={18} />
          </Button>
        </div>
      ) : null}
    </>
  );
}
