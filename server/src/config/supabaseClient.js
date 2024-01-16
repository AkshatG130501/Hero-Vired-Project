import { createClient } from '@supabase/supabase-js'


const supabaseUrl = "https://qfswourohtqpxqzgldnh.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmc3dvdXJvaHRxcHhxemdsZG5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU0Mjg4MDksImV4cCI6MjAyMTAwNDgwOX0.7E7QABxWTahkvJd49YRxzoIMYNMyC3adgWKG9HIeBYw"

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase