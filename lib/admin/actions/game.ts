'use server';

import { db } from '@/db/drizzle';
import { games } from '@/db/schema';

const createGame = async (params: GameParams) => {
    try {
        const newGame = await db.insert(games).values({...params, ownerId: params.ownerId}).returning();
        return{
            success: true,
            data: JSON.parse(JSON.stringify(newGame[0]))
        }
        
    } catch (error) {
        console.log(error);
        return{
            success: false,
            message: 'An error occurred while creating game'
        }
        
    }
}