const { createClient } = require('@supabase/supabase-js');
require('dotenv').config()
// Supabase credentials
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_API_KEY;

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

// Query data from a table
(async () => {
  const { data, error } = await supabase.from('customers').select('*');
  if (error) {
    console.error('Error fetching data:', error);
  } else {
    console.log("Connected Successfully");
  }
})();
module.exports = supabase;
