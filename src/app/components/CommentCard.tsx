'use client'

type Comment= {
    user: string;
    date: string | null;
    id: number;
    content: string;
    postId: number;
}

export default function CommentCard({ comment }: { comment: Comment }) {
    return (
      <div className="card">
        <p className="h2 text-left">{comment.user}</p>
        <p className="neutral">published on {String(comment.date)}</p>
        <p className="mt-10">{comment.content}</p>
        
      </div>
    );
  }