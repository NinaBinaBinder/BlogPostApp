CREATE TABLE IF NOT EXISTS "postsTable" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"content" varchar(500) NOT NULL,
	"date" date DEFAULT now()
);
