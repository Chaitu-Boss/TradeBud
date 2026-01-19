import { createClient } from '@supabase/supabase-js'
// Create a single supabase client for interacting with your database
const supabase = createClient("https://fiuvddmcssyneuxoxpki.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpdXZkZG1jc3N5bmV1eG94cGtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg2NDM1ODgsImV4cCI6MjA4NDIxOTU4OH0.iWqSu-0HOGD160oyapSHBIDPovv4NHNqA_lizV101_8")

export default supabase