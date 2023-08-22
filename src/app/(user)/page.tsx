import Container from '@/components/container';
import AboutUs from '@/components/home/about-us';
import { Faq } from '@/components/home/faq';
import Hero from '@/components/home/hero';
import PopularProperty from '@/components/home/popular-property';
import WhyUs from '@/components/home/why-us';
import Services from '@/components/home/services';
import { Separator } from '@/components/ui/separator';
import RecentProject from '@/components/home/recent-project';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import NewProperty from '@/components/home/new-property';

const query = groq`
*[_type in ["buy_home", "buy_apartment"]]{
  ...,
  property_type[]->,
} | order(createdAt desc)
`;

export const revalidate = 15;

export default async function page() {
  const posts = await client.fetch(query);

  return (
    <>
      <div>
        <Container>
          <Hero
            title={'Find Your Next Property'}
            subtitle={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim soluta, consequatur provident sapiente praesentium minima!'
            }
          />

          <AboutUs />
          <Separator className='my-12 ' />
        </Container>

        <NewProperty posts={posts} />
        <PopularProperty posts={posts} />
        <RecentProject />

        <Container>
          <WhyUs />
          <Services />
          <Faq />
        </Container>
      </div>
    </>
  );
}
