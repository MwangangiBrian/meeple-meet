import {
  text,
  pgTable,
  uuid,
  date,
  timestamp,
  pgEnum,
  varchar,
  integer,
  boolean,
  decimal,
} from 'drizzle-orm/pg-core';

// enums
export const ROLE_ENUM = pgEnum('role', ['USER', 'ADMIN']);
export const GAME_CONDITION_ENUM = pgEnum('game_condition', ['NEW', 'USED', 'LIKE_NEW', 'GOOD', 'FAIR', 'POOR']);
export const LEND_PREFERENCE_ENUM = pgEnum('lending_preference', ['LOCAL_ONLY', 'SHIPPING_OK', 'PICKUP_ONLY']);

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().notNull().primaryKey().unique(),
  userName: varchar('username', { length: 255 }).notNull().unique(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  bio: text('bio'),
  role: ROLE_ENUM('role').notNull().default('USER'),
  lastActivityDate: date('last_activity_date').defaultNow(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
});

export const games = pgTable('games', {
  gameId: uuid('game_id').defaultRandom().notNull().primaryKey().unique(),
  title: varchar('title', { length: 255}).notNull(),
  description: text('description'),
  condition: GAME_CONDITION_ENUM('condition').notNull(),
  minPlayers: integer('min_players').notNull(),
  maxPlayers: integer('max_players').notNull(),
  playingTime: integer('playing_time').notNull(),
  imageUrls: text('image_urls').array(),
  complexityRating: decimal('complexity_rating', { precision: 3, scale: 1 }).notNull(),
  isAvailable: boolean('is_available').default(true),
  lendingPreference: LEND_PREFERENCE_ENUM('lending_preference').notNull(),
  ownerId: uuid('owner_id').references(() => users.id, {onDelete: 'cascade', onUpdate: 'cascade'}).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
})
