import PostCard from "./components/PostCard";
import AddPost from "./components/AddPost";
import { getPosts } from "./actions";
import Link from "next/link";
import DeletePost from "./components/DeletePost";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <p className="h1">All Posts</p>
      <div className="cols">
        {posts.map((post) => (
          <div key={post.id}>
            <DeletePost id={post.id}></DeletePost>
            <Link href={`./post/${post.id}`}>
              <PostCard {...post} />
            </Link>
          </div>
        ))}
      </div>
      <AddPost></AddPost>
    </main>
  );
}
