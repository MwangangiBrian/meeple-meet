CREATE TYPE "public"."game_condition" AS ENUM('NEW', 'USED', 'LIKE_NEW', 'GOOD', 'FAIR', 'POOR');--> statement-breakpoint
CREATE TYPE "public"."lending_preference" AS ENUM('LOCAL_ONLY', 'SHIPPING_OK', 'PICKUP_ONLY');--> statement-breakpoint
CREATE TYPE "public"."role" AS ENUM('USER', 'ADMIN');--> statement-breakpoint
CREATE TABLE "games" (
	"game_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text,
	"condition" "game_condition" NOT NULL,
	"min_players" integer NOT NULL,
	"max_players" integer NOT NULL,
	"playing_time" integer NOT NULL,
	"image_urls" text[],
	"complexity_rating" numeric(3, 1) NOT NULL,
	"is_available" boolean DEFAULT true,
	"lending_preference" "lending_preference" NOT NULL,
	"owner_id" uuid NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "games_game_id_unique" UNIQUE("game_id")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"username" varchar(255) NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"bio" text,
	"role" "role" DEFAULT 'USER' NOT NULL,
	"last_activity_date" date DEFAULT now(),
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "users_id_unique" UNIQUE("id"),
	CONSTRAINT "users_username_unique" UNIQUE("username"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "games" ADD CONSTRAINT "games_owner_id_users_id_fk" FOREIGN KEY ("owner_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE cascade;