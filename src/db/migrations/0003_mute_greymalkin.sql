ALTER TABLE "commentsTable" RENAME COLUMN "postsId" TO "postId";--> statement-breakpoint
ALTER TABLE "commentsTable" DROP CONSTRAINT "commentsTable_postsId_postsTable_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "commentsTable" ADD CONSTRAINT "commentsTable_postId_postsTable_id_fk" FOREIGN KEY ("postId") REFERENCES "postsTable"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
