import Container from '@/components/container';

export default function page() {
  return (
    <Container>
      <h2>About us</h2>
      <div>
        <img
          className='mx-auto my-5 h-[400px] w-full rounded-lg lg:my-7'
          src='/img/header.jpg'
          alt='properties'
        ></img>
      </div>
      <div>
        <p>
          Established in 2022 lely.properties was built around a simple but
          elusive concept: provide brokers and clients with the highest level of
          service in the industry through cutting-edge sales and marketing
          programs and a culture that values innovation, relationships and a
          strong local focus.
        </p>
        <p className='mt-4 '>
          Lely.properties has emerged as the go-to brokerage for intelligent,
          high-quality services and solutions geared to commercial real estate
          owners, investors, managers and users.
        </p>
      </div>
    </Container>
  );
}
