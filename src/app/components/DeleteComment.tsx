"use client";

import { useRouter } from "next/navigation";
import { deleteComment } from "../actions";
import { Comment } from "../actions";

export default function DeleteComment({ comment }: { comment: Comment }) {
  const router = useRouter();
  async function handleDelete() {
    deleteComment({ comment });
    router.refresh();
  }

  return (
    <button
      onClick={handleDelete}
      className="rounded bg-red-500 text-l text-white h-16 p-3"
    >
      delete comment
    </button>
  );
}
