"use client";

import { Post } from "@/db/schema";

type PostCardProps = Post;

export default function PostCard({ title, content, date }: PostCardProps) {
  return (
    <div className="card">
      <p className="h2">{title}</p>
      <p>{content}</p>
      <p className="h3 italics">
        published {String(date.toUTCString().split("00")[0])}
      </p>
    </div>
  );
}
