"use client";

import { FormEvent, useState } from "react";
import { addComment } from "../actions";

import { useRouter } from "next/navigation";

export default function AddComment({ postId }: { postId: number }) {
  const [user, setUser] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (user.length < 3 || content.length < 3) {
      alert("please enter valid username");
    } else {
      try {
        await addComment({ postId, user, content });
      } catch (error) {
        console.error(error);
      }
    }
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <p className="h2"> New Comment</p>

      <input
        className="input"
        type="text"
        id="user"
        placeholder="user name"
        onChange={(e) => setUser(e.target.value)}
      />

      <textarea
        className="input"
        id="content"
        placeholder="comment"
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="btn-primary">Add Comment</button>
    </form>
  );
}
