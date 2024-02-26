"use server";

import db from "@/db/connection";
import { commentsTable, postsTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getPosts() {
  const posts = await db.select().from(postsTable);
  return posts;
}

export async function addPost({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  await db.insert(postsTable).values({ title, content });
}

export async function getComments(postId: number) {
  const comment = await db
    .select()
    .from(commentsTable)
    .where(eq(commentsTable.postId, postId));
  return comment;
}

export async function addComment({
  postId,
  user,
  content,
}: {
  postId: number;
  user: string;
  content: string;
}) {
  await db.insert(commentsTable).values({ postId, user, content });
}

export async function deleteComment({ comment }: { comment: Comment }) {
  await db.delete(commentsTable).where(eq(commentsTable.id, comment.id));
}

export async function deletePost(postId: number) {
  await db.delete(postsTable).where(eq(postsTable.id, postId));
}
