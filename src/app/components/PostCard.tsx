"use client";

import { Post } from "../actions";
import DeletePost from "./DeletePost";



export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="card">
      <p className="h2">{post.title}</p>
      <p>{post.content}</p>
      <p className="h3 italics">published {String(post.date.toUTCString().split('00')[0])}</p>
    </div>
  );
}
