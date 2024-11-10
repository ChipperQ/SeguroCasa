import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://thwukucniurioodgdntd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRod3VrdWNuaXVyaW9vZGdkbnRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgxNjUwMTcsImV4cCI6MjA0Mzc0MTAxN30.HgyMAvFgyJqk5KrV54MDt4PEYGz3sbkyjetukG4732s'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
