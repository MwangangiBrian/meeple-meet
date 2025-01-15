import {
  integer,
  text,
  boolean,
  pgTable,
  uuid,
  date,
  timestamp,
  pgEnum,
  varchar,
} from 'drizzle-orm/pg-core';

export const ROLE_ENUM = pgEnum('role', ['USER', 'ADMIN']);

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
