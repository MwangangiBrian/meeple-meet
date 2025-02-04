import { z } from 'zod';

export const signUpSchema = z.object({
    userName: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
})


export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string()
})


export const gameSchema = z.object({
    title: z.string().trim().min(3),
    description: z.string().trim().min(10),
    condition: z.enum(['NEW', 'USED', 'LIKE_NEW', 'GOOD', 'FAIR', 'POOR']),
    minPlayers: z.coerce.number().min(1),
    maxPlayers: z.coerce.number().min(1),
    playingTime: z.coerce.number().min(1),
    imageUrls: z.string().min(1),
    complexityRating: z.coerce.number().min(1).max(10),
    lendingPreference: z.enum(['LOCAL_ONLY', 'SHIPPING_OK', 'PICKUP_ONLY']),

})