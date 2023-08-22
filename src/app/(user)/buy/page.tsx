import { groq } from 'next-sanity';
import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Container from '@/components/container';
import { client } from '@/lib/sanity.client';
import urlFor from '@/lib/urlFor';
import ButtonFilter from '@/components/buy/button-filter';

const query = groq`
*[_type in ["buy_home", "buy_apartment"]]{
  ...,
  property_type[]->,
} | order(createdAt desc)
`;

interface Filter {
  Rumah?: string;
  Apartment?: number;
}

export const revalidate = 15;

export default async function page() {
  const posts = await client.fetch(query);

  return (
    <section className='mt-8'>
      <Container>
        <h1>Kumpulan Properti Kami</h1>
        <div className='my-8 flex items-center justify-between '>
          <div>
            <ButtonFilter />
          </div>
          <div>
            <Input
              type='text'
              placeholder='Cari Properti Anda...'
              className='w-72 rounded-xl'
            />
          </div>
        </div>

        <div className='mt-12 grid grid-cols-2 gap-4'>
          {posts.map((data: Post) => (
            <Card key={data._id} className='border-none'>
              <CardHeader className='p-1'>
                <Image
                  src={urlFor(data.mainImage).url()}
                  className='h-96 w-full rounded-md object-cover'
                  width='0'
                  height='0'
                  sizes='100vw'
                  alt={data.title}
                />
              </CardHeader>
              <CardContent className='px-3 pt-2'>
                <CardTitle>{data.title}</CardTitle>
                <CardDescription>{data.price}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
