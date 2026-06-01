import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

type PostConverProps = {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
};

export function PostCoverImage({ imageProps, linkProps }: PostConverProps) {
  return (
    <Link
      {...linkProps}
      className={clsx(
        'w-full',
        'h-full',
        'overflow-hidden',
        'rounded-xl',
        linkProps.className,
      )}
      href='#'
    >
      <Image
        {...imageProps}
        className={clsx(
          'w-full',
          'h-full',
          'object-cover',
          'object-center',
          'group-hover:scale-105',
          'transition',
          linkProps.className,
        )}
        alt={imageProps.alt}
      />
    </Link>
  );
}
