import Link from 'next/link';
import React from 'react';
import GameCover from './GameCover';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from './ui/button';

function GameCard({
  id,
  title,
  genre,
  color,
  coverURL,
  isLoanedGame = false,
}: Game) {
  return (
    <li className={cn(isLoanedGame && 'sx:w-52 w-full')}>
      <Link
        href={`game/${id}`}
        className={cn(isLoanedGame && 'w-full flex flex-col items-center')}
      >
        <GameCover coverColor={color} coverURL={coverURL} />
        <div>
          <p className="book-title">{title}</p>
          <p className="book-genre">{genre}</p>
        </div>
      </Link>

      {isLoanedGame && (
        <div className='mt-3 w-full'>
        <div className="book-loaned">
          <Image
            src="/icons/calender.svg"
            alt="calendar"
            width={18}
            height={18}
            className="object-contain"
          />
          <p className="text-light-100">11 days left to return</p>
        </div>
        <Button className='book-btn'>Download receipt</Button>
        </div>
      )}
    </li>
  );
}

export default GameCard;
