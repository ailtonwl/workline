'use client';
import clsx from 'clsx';

export function Header() {
  console.log('====================================');
  console.log('Header');
  console.log('====================================');
  return (
    <h1
      className={clsx(
        'text-xl',
        'font-bold',
        'text-blue-500',
        'hover:text-blue-50',
        'hover:bg-blue-500',
        'transition',
        'duration-300',
      )}
      onClick={() => alert('215')}
    >
      Texto no meu h1
    </h1>
  );
}
