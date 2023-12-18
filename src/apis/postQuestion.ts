import { supabase } from "../supabase/configure";

interface PostQuestionProps {
  title: string;
  content: string | undefined;
  stack: string | null;
  importance: string | null;
}

export const postQuestion = async ({
  title,
  content,
  stack,
  importance,
}: PostQuestionProps) => {
  const { data, error } = await supabase.from("question").insert([
    {
      title: title,
      content: content,
      language: stack,
      importance: importance,
      user_id: localStorage.getItem("id"),
      check: false,
      view: 0,
      created_at: new Date(),
    },
  ]);

  if (error) {
    throw error;
  }

  return data;
};
// const user_id = async () => {
//   const user = (await supabase.auth.getUser()).data.user?.id;
//   console.log(user);
// };
// user_id();
