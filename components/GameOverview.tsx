import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import GameCover from './GameCover';

const GameOverview = ({
  title,
  author,
  genre,
  rating,
  totalCopies,
  availableCopies,
  description,
  color,
  coverURL
}: Book) => {
  return (
    <section className="book-overview">
      <div className="flex flex-1 flex-col gap-5">
        <h1>{title}</h1>
        <div className="book-info">
          <p>
            By <span className="font-bold text-light-200">{author}</span>
          </p>
          <p>
            category {''}
            <span className="font-bold text-light-200">{genre}</span>
          </p>
          <div className="flex flex-row gap-1">
            <Image src="/icons/star.svg" alt="star" width={22} height={22} />
            <p>{rating}</p>
          </div>

          <div className="book-copies">
            <p>
              Total Books: <span>{totalCopies}</span>
            </p>
            <p>
              Games Available: <span>{availableCopies}</span>
            </p>
          </div>
          <p className="book-description">{description}</p>

          <Button className="book-overview_btn">
            <Image src="/icons/book.svg" alt="book" width={20} height={20} />
            <p className="font-bebas-neue">Lend Game</p>
          </Button>
        </div>
      </div>
      <div className="relative flex justify-center">
        <div className="relative">
          <GameCover
            variant="wide"
            className="z-10"
            coverColor={color}
            coverURL={coverURL}
          />
          <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
            <GameCover variant="wide" coverColor={color} coverURL={coverURL} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameOverview;
