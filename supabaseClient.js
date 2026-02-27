const { createClient } = supabase;

window.supabaseClient = createClient(
  "https://tcgspigynbhhrlgtfnux.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjZ3NwaWd5bmJoaHJsZ3RmbnV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2OTAwMDksImV4cCI6MjA4NzI2NjAwOX0.s6XnSwWiha7GD000I4xyXRqWtWzK1hsrMVuRpFQNgaU"
);