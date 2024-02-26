import { deleteComment, getComments, getPosts } from "@/app/actions";
import AddComment from "@/app/components/AddComment";
import CommentCard from "@/app/components/CommentCard";
import DeleteComment from "@/app/components/DeleteComment";
import DeletePost from "@/app/components/DeletePost";
import Navbar from "@/app/components/Navbar";

type PostPageId = {
  params: { postId: string };
};

export default async function post({ params: { postId } }: PostPageId) {
  const posts = await getPosts();
  const post = posts.find((post) => post.id === Number(postId))!;

  const comments = await getComments(Number(postId));

  return (
    <div>
      <h1 className="h1">{post.title}</h1>

      <p className="text-xl m-10 m-auto">{post.content}</p>

      <div id="Comments">
        <p className="h3">Comment Section:</p>
        {comments.map((comment) => (
          <div className="flex">
            <CommentCard comment={comment} />
            <DeleteComment comment={comment} />
          </div>
        ))}

        <div>
          <AddComment postId={Number(postId)} />
        </div>
      </div>
      <DeletePost id={post.id} />
    </div>
  );
}
