import { pgTable, serial, date, varchar, timestamp } from "drizzle-orm/pg-core";

export const postsTable = pgTable("postsTable", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  content: varchar("content", { length: 500 }).notNull(),
  date: timestamp("date").notNull().defaultNow(),
});

export type Post = typeof postsTable.$inferSelect;

export const commentsTable = pgTable("commentsTable", {
  id: serial("id").primaryKey(),
  user: varchar("user", { length: 255 }).notNull(),
  content: varchar("content", { length: 500 }).notNull(),
  date: date("date").notNull().defaultNow(),
  postId: serial("postId").references(() => postsTable.id),
});
export type Comment = typeof commentsTable.$inferSelect;
