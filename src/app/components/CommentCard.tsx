"use client";

import DeleteComment from "./DeleteComment";

type Comment = {
  user: string;
  date: Date;
  id: number;
  content: string;
  postId: number;
};

export default function CommentCard({ comment }: { comment: Comment }) {
  return (
    <div className="card w-2/4">
      <DeleteComment comment={comment}></DeleteComment>
      <p className="h2 text-left">{comment.user}</p>
      <p className="neutral">
        published on {String(comment.date.toUTCString()).split("00")[0]}
      </p>
      <p className="mt-10">{comment.content}</p>
    </div>
  );
}
