'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import Container from '../container';
import HeadingSection from './heading-section';

const property = [
  {
    id: 1,
    img: '/img/header.jpg',
    title: 'Lorem, ipsum.',
    desc: 100000000,
  },
  {
    id: 2,
    img: '/img/header.jpg',
    title: 'Lorem, ipsum.',
    desc: 100000000,
  },
  {
    id: 3,
    img: '/img/header.jpg',
    title: 'Lorem, ipsum.',
    desc: 100000000,
  },
];

export default function RecentProject() {
  return (
    <Container className='w-full bg-indigo-50 pt-16'>
      <section>
        <HeadingSection
          title='Proyek Pilihan'
          desc='Dapatkan rumah baru dengan harga murah hanya di lely properties'
        >
          <Link href='/property'>
            <Button variant={'link'} className='text-base'>
              Lihat Semua Pilihan Proyek
            </Button>
          </Link>
        </HeadingSection>

        {/* <div className='mb-4'>
          <Image
            src='/img/header.jpg'
            className='h-96 w-full rounded-md bg-bottom object-cover'
            width='0'
            height='0'
            sizes='100vw'
            alt='img'
          />
        </div> */}
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
          }}
          className='flex flex-col-reverse pb-16'
        >
          <div>
            {property.map((item) => (
              <SwiperSlide>
                <Card key={item.id} className='border-none'>
                  <CardHeader className='p-1'>
                    <Image
                      src={item.img}
                      className='h-72 w-full rounded-md object-cover'
                      width='0'
                      height='0'
                      sizes='100vw'
                      alt='img'
                    />
                  </CardHeader>
                  <CardContent className='px-3 pt-2'>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.desc}</CardDescription>
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
