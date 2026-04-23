import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function submitContactMessage(data: ContactMessage) {
  const { error } = await supabase.from('contact_messages').insert([data]);
  if (error) throw error;
}
