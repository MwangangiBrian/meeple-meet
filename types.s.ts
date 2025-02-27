interface Game {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  totalCopies: number;
  availableCopies: number;
  description: string;
  color: string;
  coverURL: string;
  video: string;
  summary: string;
  isLoanedGame?: boolean;
}


interface AuthCredentials{
  userName: string;
  email:string;
  password: string;
}