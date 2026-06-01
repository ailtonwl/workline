import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header>
      <h1
        className={clsx(
          'text-4xl/normal font-extrabold py-8',
          'sm:text-5xl sm:py-10',
          'md:text-6xl md:py-11',
          'lg:text-7xl lg:py-12',
        )}
      >
        <Link href='#'>
          <Image src='/logowl.png' width={343} height={70} alt='Logomarca' />
          <span className='text-2xl'>Revenda ATS Informática</span>
        </Link>
      </h1>
    </header>
  );
}
