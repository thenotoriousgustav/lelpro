import Link from 'next/link';
import Container from './container';
import { Button } from './ui/button';

interface FooterLink {
  href: string;
  children: React.ReactNode;
}

export default function Footer() {
  return (
    <footer className='mt-divider'>
      <section className='flex h-80 w-full flex-col justify-center bg-hero bg-cover bg-bottom'>
        <Container>
          <p className='text-white'>Cari Properti Dengan Kami</p>
          <h1 className='mt-4 w-6/12 tracking-normal'>
            Cari Properti Berkualitas Hanya Di Lely Properties
          </h1>
          <Button variant={'secondary'} className='mt-8'>
            Cari Sekarang
          </Button>
        </Container>
      </section>

      <section className='bg-foreground py-10 text-white'>
        <Container className='flex justify-between'>
          <div className='w-4/12'>
            <h2>Lely Properties</h2>
            <p className='mt-6 text-gray-500'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              enim eum praesentium, fuga quae tenetur.
            </p>
          </div>

          <div className='grid grid-cols-3 gap-x-10'>
            <FooterList />
          </div>
        </Container>
      </section>
    </footer>
  );
}

const FooterList = () => {
  return (
    <>
      <div>
        <h4>Perusahaan</h4>
        <div>
          <FooterLink href={'/'}>Tentang Kami</FooterLink>
          <FooterLink href={'/'}>Kontak Kami</FooterLink>
          <FooterLink href={'/'}>Karir</FooterLink>
        </div>
      </div>
      <div>
        <h4>Dukungan</h4>
        <div>
          <FooterLink href={'/'}>Iklankan Properti Anda</FooterLink>
          <FooterLink href={'/'}>Kebijakan Privasi</FooterLink>
          <FooterLink href={'/'}>Faq</FooterLink>
        </div>
      </div>
      <div>
        <h4>Hubungi Kami</h4>
        <div>
          <FooterLink href={'/'}>+62 859 4047 6706</FooterLink>
          <FooterLink href={'/'}>rhezagustam@gmail.com</FooterLink>
        </div>
      </div>
    </>
  );
};

const FooterLink = ({ href, children }: FooterLink) => {
  return (
    <Link href={href}>
      <Button variant={'link'} className='block p-0'>
        {children}
      </Button>
    </Link>
  );
};
