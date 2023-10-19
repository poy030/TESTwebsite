import { createClient } from '@supabase/supabase-js'
const { createClient } = supabase;
const supabaseUrl = 'https://uavvpcvlcfcgoueparwj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhdnZwY3ZsY2ZjZ291ZXBhcndqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc2Mzg0OTIsImV4cCI6MjAxMzIxNDQ5Mn0.EjkfKFz17snJ0wqjLj67RCatwwz-sME7D31MrVujlgM'
const supabase = supabase.createClient(supabaseUrl, supabaseKey)
async function populateStudentData() {
    try {
        const { data, error } = await supabase.from('students').select('name, score');

        if (error) throw error;  // If there's an error with Supabase, throw it

        const table = document.getElementById("studentsTable").getElementsByTagName('tbody')[0];
        data.forEach(student => {
            let newRow = table.insertRow();
            let cell1 = newRow.insertCell(0);
            let cell2 = newRow.insertCell(1);
            cell1.textContent = student.name;  // Using textContent instead of innerHTML
            cell2.textContent = student.score;
        });
    } catch (error) {
        console.error("Failed to fetch student data:", error);
        alert("Error fetching student data. Please try again later.");
    }
}

window.onload = populateStudentData;
