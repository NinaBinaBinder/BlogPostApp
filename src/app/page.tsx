import PostCard from "./components/PostCard";
import AddPost from "./components/AddPost";
import { getPosts } from "./actions";
import Link from "next/link";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main >
      <p className="h1">All Posts</p>
      <div className="cols">
        {posts.map((post) => (
          <Link href={`./post/${post.id}`}>
            <PostCard
              post={{
                title: post.title,
                content: post.content,
                date: "placeholder date",
              }}
            />
          </Link>
        ))}
      </div>
      <AddPost></AddPost>
    </main>
  );
}
