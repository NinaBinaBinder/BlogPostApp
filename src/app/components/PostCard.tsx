"use client";

import { Post } from "../actions";



export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="card">
      <p className="h2">{post.title}</p>
      <p>{post.content}</p>
      <p className="from-neutral-400 italics">published {String(post.date)}</p>
    </div>
  );
}
