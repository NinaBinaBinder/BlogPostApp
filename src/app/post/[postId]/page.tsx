import { getComments, getPosts } from "@/app/actions";
import AddComment from "@/app/components/AddComment";
import CommentCard from "@/app/components/CommentCard";
import DeleteComment from "@/app/components/DeleteComment";

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

      <p className="text-xl m-10">{post.content}</p>

      <div className="flex flex-col">
        {comments.length === 0 ? 
          <p className="h3 mx-10">no comments yet :((</p> : <p></p>}

        {comments.map((comment) => (
          <CommentCard comment={comment} />
        ))}

        <div>
          <AddComment postId={Number(postId)} />
        </div>
      </div>
    </div>
  );
}
