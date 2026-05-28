import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostHeading } from '@/components/PostHeading';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />
      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <Link className='w-full h-full overflow-hidden rounded-xl' href='#'>
          <Image
            className='w-full h-full object-cover object-center group-hover:scale-105 transition'
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='Título do post'
            priority
          />
        </Link>
        <div className='flex flex-col gap-2 sm:justify-center'>
          <time
            className='text-slate-600 block text-sm/tight'
            dateTime='2025-04-20'
          >
            20/04/2025 10:00
          </time>
          <PostHeading url='#' as='h1'>
            Facere labore culpa
          </PostHeading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
            delectus, doloribus a illum, facere labore culpa repudiandae
            voluptatem consequuntur voluptate perferendis quae quia. Debitis
            error possimus, ipsa atque incidunt sapiente.
          </p>
        </div>
      </section>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <h1 className='text-6xl font-bold text-center py-8'>Aqui é a Footer</h1>
      </footer>
    </Container>
  );
}
