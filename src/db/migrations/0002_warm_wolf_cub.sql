CREATE TABLE IF NOT EXISTS "commentsTable" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"content" varchar(500) NOT NULL,
	"date" date DEFAULT now(),
	"postsId" serial NOT NULL
);
--> statement-breakpoint
ALTER TABLE "postsTable" DROP CONSTRAINT "postsTable_postsId_postsTable_id_fk";
--> statement-breakpoint
ALTER TABLE "postsTable" DROP COLUMN IF EXISTS "postsId";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "commentsTable" ADD CONSTRAINT "commentsTable_postsId_postsTable_id_fk" FOREIGN KEY ("postsId") REFERENCES "postsTable"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
