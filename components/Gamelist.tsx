import React from 'react';
import GameCard from './GameCard';

interface Props {
  title: string;
  books: Book[];
  containerClassName?: string;
}

function Gamelist({ title, books, containerClassName }: Props) {
  return (
    <section className={containerClassName}>
      <h2 className="font-bebas-neue text-4xl text-light-100">{title}</h2>

      <ul className="book-list">
        {books.map((book) => (
          <GameCard key={book.title} {...book} />
        ))}
      </ul>
    </section>
  );
}

export default Gamelist;
