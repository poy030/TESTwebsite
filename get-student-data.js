import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uavvpcvlcfcgoueparwj.supabase.co' // provided by Supabase for your project
const supabaseAnonKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhdnZwY3ZsY2ZjZ291ZXBhcndqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc2Mzg0OTIsImV4cCI6MjAxMzIxNDQ5Mn0.EjkfKFz17snJ0wqjLj67RCatwwz-sME7D31MrVujlgM
 // provided by Supabase for your project

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function getStudentData() {
    let { data, error } = await supabase
      .from('students')
      .select('name, score')

    if (error) {
        console.error("Error fetching data:", error);
        return;
    }
    
    // Process 'data' as needed
    console.log(data);
}

getStudentData();
