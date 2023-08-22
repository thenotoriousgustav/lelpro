import Image from 'next/image';
import Link from 'next/link';

import urlFor from '@/lib/urlFor';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

import { Button } from '../ui/button';
import HeadingSection from './heading-section';
import Container from '../container';

type Props = {
  posts: Post[];
};

export default function PopularProperty({ posts }: Props) {
  return (
    <Container className='py-16'>
      <section>
        <HeadingSection
          title='Properti Populer'
          desc='Dapatkan rumah baru dengan harga murah hanya di lely properties'
        >
          <Link href='/property'>
            <Button variant={'link'} className='text-base'>
              Lihat Semua Popular Property
            </Button>
          </Link>
        </HeadingSection>

        <div className='mt-4 grid grid-cols-4 gap-4'>
          {posts.slice(0, 6).map((post) => (
            <Card key={post._id} className='border-none bg-secondary'>
              <CardHeader className='p-1'>
                <Image
                  src={urlFor(post.mainImage).url()}
                  className='h-80 w-full rounded-md object-cover'
                  width='0'
                  height='0'
                  sizes='100vw'
                  alt='img'
                />
              </CardHeader>
              <CardContent className='px-3 pt-2'>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.price}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Container>
  );
}
