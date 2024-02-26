import { redirect } from "next/navigation";
import { deletePost } from "../actions";
import { revalidatePath } from "next/cache";



export default async function DeletePost({ id }: { id:number}) {

  async function handleDelete() {
    'use server'
    await deletePost(id)
    revalidatePath('/')
    

  }

  return (
    <form action={handleDelete}>
        <button
      
      className="rounded bg-red-500 text-l text-white h-16 p-3"
    >
      delete post
    </button>
    </form>
    
  );
}
