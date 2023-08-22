import { useSwiper } from 'swiper/react';
import { Button } from '@/components/ui/button';

export default function SliderButton() {
  const swiper = useSwiper();
  return (
    <div className=' flex space-x-4'>
      <Button onClick={() => swiper.slidePrev()} variant={'secondary'}>
        Prev
      </Button>
      <Button onClick={() => swiper.slideNext()}>Next</Button>
    </div>
  );
}
