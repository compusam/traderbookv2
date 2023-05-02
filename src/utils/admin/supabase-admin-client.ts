import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase-types";

// export const supabaseAdmin = createClient<Database>(
//   process.env.NEXT_PUBLIC_SUPABASE_URL || "",
//   process.env.SUPABASE_SERVICE_ROLE_KEY || ""
// );
const supabaseUrl = 'https://uakmtnvrnuzfcaahjmmj.supabase.co'
export const supabaseAdmin = createClient<Database>(  supabaseUrl,  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVha210bnZybnV6ZmNhYWhqbW1qIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4Mjg5OTMwNiwiZXhwIjoxOTk4NDc1MzA2fQ.xFlebiPzcA5lGmj9A43H33kRWrpER1HIN4BCySZLlm4');
