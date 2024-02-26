"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { addPost } from "../actions";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (title.length < 3 || content.length < 3) {
      alert("please enter valid title and content");
    } else {
      try {
        await addPost({ title, content });
      } catch (error) {
        console.error(error);
      }
    }
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <p className="h2">New Post</p>

      <input
        type="text"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="post title"
        className="input"
      />

      <textarea
        id="content"
        placeholder="post content"
        onChange={(e) => setContent(e.target.value)}
        className="input"
      />
      <button className="btn-primary">Add Post</button>
    </form>
  );
}
