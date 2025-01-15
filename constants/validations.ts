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
// CREATE TABLE users (
//     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
//     username VARCHAR(50) UNIQUE NOT NULL,
//     email VARCHAR(255) UNIQUE NOT NULL,
//     password_hash VARCHAR(255) NOT NULL,
//     full_name VARCHAR(100),
//     bio TEXT,
//     avatar_url VARCHAR(255),
//     location_lat DECIMAL(9,6),
//     location_lng DECIMAL(9,6),
//     address TEXT,
//     phone VARCHAR(20),
//     reputation_score INTEGER DEFAULT 100,
//     is_verified BOOLEAN DEFAULT false,
//     preferred_game_types TEXT[],
//     max_lending_distance INTEGER DEFAULT 25, -- in kilometers
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//     updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
// );