import { usePathname } from 'next/navigation';

import { Button } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between py-3'>
      <Link href='/'>
        <h1 className='text-lg font-semibold'>Lely Properties</h1>
      </Link>
      <ul className='flex space-x-6'>
        <NavLink href={'/buy'}>Dijual</NavLink>
        <NavLink href={'/rent'}>Disewa</NavLink>
        <NavLink href={'/new-project'}>Proyek Baru</NavLink>
        <NavLink href={'/about'}>Tentang</NavLink>
      </ul>
      <Link href='/advertise'>
        <Button variant={'default'} size={'lg'}>
          Pasang Iklan
        </Button>
      </Link>
    </nav>
  );
}

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathName = usePathname();

  return (
    <li>
      <Link
        href={href}
        className={cn(
          'rounded-lg px-3 py-2 text-sm font-semibold hover:bg-zinc-100',
          pathName === href && 'bg-zinc-100'
        )}
      >
        {children}
      </Link>
    </li>
  );
};
