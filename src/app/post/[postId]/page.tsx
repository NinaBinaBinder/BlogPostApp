import { getComments, getPosts } from "@/app/actions";
import AddComment from "@/app/components/AddComment";
import CommentCard from "@/app/components/CommentCard";

type PostPageId = {
  params: { postId: string };
};

export default async function Post({ params: { postId } }: PostPageId) {
  const posts = await getPosts();
  // never use `!`
  // const post = posts.find((post) => post.id === Number(postId))!;
  const post = posts.find((post) => post.id === Number(postId));

  if (post === undefined) {
    // or redirect
    // return redirect("/")
    return <p>this post was not found</p>;
  }

  const comments = await getComments(Number(postId));

  return (
    <div>
      <h1 className="h1">{post.title}</h1>
      <p className="text-xl m-10">{post.content}</p>
      <div className="flex flex-col">
        {comments.length === 0 ? (
          <p className="h3 mx-10">no comments yet :((</p>
        ) : (
          // null
          <p></p>
        )}

        {comments.map((comment) => (
          <CommentCard comment={comment} key={comment.id} />
        ))}

        <>
          <AddComment postId={Number(postId)} />
        </>
      </div>
    </div>
  );
}
