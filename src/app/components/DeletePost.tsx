import { deletePost } from "../actions";
import { revalidatePath } from "next/cache";

export default async function DeletePost({ id }: { id: number }) {
  async function handleDelete() {
    "use server";
    await deletePost(id);
    revalidatePath("/");
  }

  return (
    <form action={handleDelete}>
      <button className="deleteButton">delete post</button>
    </form>
  );
}
