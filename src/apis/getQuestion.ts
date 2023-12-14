import { supabase } from "../supabase/configure";

export const fetchFilteredData = async (
  q: string | null,
  lang: string | null,
  sort: string | null,
  check: string | null
) => {
  let query = supabase.from("question").select("*");

  if (q) {
    query = query.ilike("title", `%${q}%`);
  }

  if (lang) {
    query = query.eq("language", lang);
  }

  if (check) {
    query = query.eq("check", check === "on" ? true : false);
  }

  if (sort === "Latest") {
    query = query.order("created_at", { ascending: false });
  }
  if (sort === "Oldest") {
    query = query.order("created_at", { ascending: true });
  }
  if (sort === "View") {
    query = query.order("view", { ascending: false });
  }

  let { data, error } = await query;

  if (error) {
    throw error;
  }

  return data;
};

// const user = async () => {
//   const { data, error } = await supabase.auth.getUser();
//   console.log(data);
// };
