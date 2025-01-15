import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';

type GameCoverVariant = 'extraSmall' | 'small' | 'medium' | 'regular' | 'wide';

const variantStyles: Record<GameCoverVariant, string> = {
  extraSmall: 'book-cover_extra_small',
  small: 'book-cover_small',
  medium: 'book-cover_medium',
  regular: 'book-cover_regular',
  wide: 'book-cover_wide',
};

interface Props {
  variant?: GameCoverVariant;
  className?: string;
  coverColor: string;
  coverURL: string;
}

function GameCover({
  className,
  variant = 'regular',
  coverColor = '#012B48',
  coverURL = 'https://placehold.co/400x600.png',
}: Props) {
  return (
    <div
      className={cn(
        'relative transition-all duration-300',
        variantStyles[variant],
        className,
      )}
    >
      Game Cover SVG
      <div
        className="absolute z-10"
        style={{ left: '12%', width: '87.5%', height: '88%' }}
      >
        <Image src={coverURL} alt="Game cover" fill className='rounded-sn object-fill' />
      </div>
    </div>
  );
}

export default GameCover;
