import Booklist from "@/components/Gamelist";
import GameOverview from "@/components/GameOverview";
import { sampleBooks } from "@/constants";
import { db } from "@/db/drizzle";
import { users } from "@/db/schema";


const Home= async() =>{
  // const result = await db.select().from(users)
  // console.log(JSON.stringify(result, null, 2))

  return (
  <>
  <GameOverview { ...sampleBooks[0]} />

  <Booklist 
  title = "Latest Games"
  books={sampleBooks}
  constainerClassName='mt-28'
  />
  </>
  );
}

export default Home