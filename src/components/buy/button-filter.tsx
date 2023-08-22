'use client';

import { useState } from 'react';
import { Button } from '../ui/button';

export default function ButtonFilter() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <>
      <Button variant={'default'} className='rounded-lg'>
        All Category
      </Button>
      <Button variant={'ghost'}>Rumah</Button>
      <Button variant={'ghost'}>Apartment</Button>
      <Button variant={'ghost'}>Mansion</Button>
    </>
  );
}
