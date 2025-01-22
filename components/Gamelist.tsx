import React from 'react';
import GameCard from './GameCard';

interface Props {
  title: string;
  games: Game[];
  containerClassName?: string;
}

function Gamelist({ title, games , containerClassName }: Props) {
  return (
    <section className={containerClassName}>
      <h2 className=" text-4xl text-light-100">{title}</h2>

      <ul className="book-list">
        {games.map((game) => (
          <GameCard key={game.title} {...game} />
        ))}
      </ul>
    </section>
  );
}

export default Gamelist;
