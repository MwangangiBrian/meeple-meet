import React from 'react';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import GameForm from '@/components/admin/games/GameForm';
import { Button } from '@/components/ui/button';

const page = () => {
  return (
    <>
    
      <Link href={'/admin/games'} className='max-w-7 flex items-center py-2 px-4'>
        <div className="flex items-center px-2 py-1 rounded-sm">
          <Button>
            <ArrowLeftIcon />
          <span className='ml-2 text-sm'>Back</span>
          </Button>
        </div>
      </Link>
      <section>
        <GameForm />
      </section>
    </>
  );
};

export default page;
