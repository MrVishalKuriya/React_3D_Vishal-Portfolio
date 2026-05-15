import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Graceful fallback to prevent app crash if keys are missing
export const supabase = (supabaseUrl && supabaseKey) 
  ? createClient(supabaseUrl, supabaseKey)
  : { 
      from: () => ({ 
        insert: async () => ({ error: null }),
        select: () => ({ error: null })
      }) 
    };
