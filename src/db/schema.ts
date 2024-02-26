import { pgTable, serial, date, varchar, timestamp } from "drizzle-orm/pg-core";

export const postsTable = pgTable("postsTable", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  content: varchar("content", { length: 500 }).notNull(),
  date: timestamp("date").defaultNow(),
});

export const commentsTable = pgTable("commentsTable", {
  id: serial("id").primaryKey(),
  user: varchar("user", { length: 255 }).notNull(),
  content: varchar("content", { length: 500 }).notNull(),
  date: date("date").defaultNow(),
  postId: serial("postId").references(() => postsTable.id),
});
