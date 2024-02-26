ALTER TABLE "postsTable" ADD COLUMN "postsId" serial NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "postsTable" ADD CONSTRAINT "postsTable_postsId_postsTable_id_fk" FOREIGN KEY ("postsId") REFERENCES "postsTable"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
