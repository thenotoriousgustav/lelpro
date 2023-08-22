'use client';

import Image from 'next/image';

import { Swiper, useSwiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { sliderSettings } from '@/lib/slider';
import urlFor from '@/lib/urlFor';

import SliderButton from './slider-button';
import HeadingSection from './heading-section';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import 'swiper/swiper.min.css';
import Container from '../container';

type Props = {
  posts: Post[];
};

export default function NewProperty({ posts }: Props) {
  const swiper = useSwiper();

  return (
    <Container className='w-full bg-indigo-50 py-16'>
      <section>
        <Swiper
          {...sliderSettings}
          navigation={true}
          modules={[Navigation]}
          className='flex flex-col-reverse '
        >
          <HeadingSection
            title='Properti Terbaru'
            desc='Dapatkan rumah baru dengan harga murah hanya di lely properties'
          >
            <SliderButton />
          </HeadingSection>
          <div>
            {posts.map((post) => (
              <SwiperSlide key={post._id}>
                <Card className='border-none'>
                  <CardHeader className='p-1'>
                    <Image
                      src={urlFor(post.mainImage).url()}
                      className='h-72 w-full rounded-md object-cover'
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
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </section>
    </Container>
  );
}
