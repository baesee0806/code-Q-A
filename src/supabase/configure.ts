import { createClient } from "@supabase/supabase-js";

interface Database {
  public: {
    Tables: {
      question: {
        Row: {
          id: number;
          created_at: Date;
          user_id: string;
          title: string;
          content: string;
          language: string;
          importance: number;
          check: boolean;
        };
        Insert: {
          id: number;
          created_at: Date;
          user_id: string;
          title: string;
          content: string;
          language: string;
          importance: number;
          check: boolean;
          Update: {
            id?: number;
            created_at?: Date;
            user_id?: string;
            title?: string;
            content?: string;
            language?: string;
            importance?: number;
            check?: boolean;
          };
        };
      };
    };
  };
}

const supabaseUrl = "https://albgdhihqxloiwnbkssr.supabase.co";
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

export const supabase = createClient<Database>(
  supabaseUrl as string,
  supabaseKey as string
);
