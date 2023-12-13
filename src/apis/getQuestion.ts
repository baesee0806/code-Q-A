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
  } else if (sort === "Oldest") {
    query = query.order("created_at", { ascending: true });
  }
  // else if(sort==='View'){
  //   query = query.order("view", { ascending: sort === "View" });

  let { data, error } = await query;

  if (error) {
    throw error;
  }

  return data;
};

// 최신순
export const fetchLatestData = async () => {
  const { data: question, error } = await supabase
    .from("question")
    .select("*")
    .order("created_at", { ascending: false });

  return { question, error };
};
// 오래된 순
export const fetchOldestData = async () => {
  const { data: question, error } = await supabase
    .from("question")
    .select("*")
    .order("created_at", { ascending: true });

  return { question, error };
};
// 조회순
export const fetchViewData = async () => {
  const { data: question, error } = await supabase
    .from("question")
    .select("*")
    .order("view", { ascending: false });

  return { question, error };
};

// const user = async () => {
//   const { data, error } = await supabase.auth.getUser();
//   console.log(data);
// };
