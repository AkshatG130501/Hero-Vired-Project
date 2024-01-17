import supabase from "../config/supabaseClient.js";

export const getPrograms = async (req, res) => {
  const {data,error} = await supabase.from('programs').select();
  if(data){
    res.send(data);
  }else{
    console.log(error);
  }
};
  
export const addPrograms = async (req, res) => {
  try {
    const {
      name,
      price,
      domain,
      program_type,
      registrations_status,
      description,
      placement_assurance,
      image_url,
      university_name,
      faculty_profile,
      learning_hours,
      certificate_diploma,
      eligibility_criteria,
      userid
    } = req.body;

    const { data, error } = await supabase
      .from('programs')
      .insert([
        {
          name,
          price,
          domain,
          program_type,
          registrations_status,
          description,
          placement_assurance,
          image_url,
          university_name,
          faculty_profile,
          learning_hours,
          certificate_diploma,
          eligibility_criteria,
          userid
        }
      ]);

    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    res.status(201).json({ msg: 'Program added successfully', data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
  
  
  
export const deleteProgram = async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from('programs')
      .delete()
      .eq('programid', id);

    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    // Check if any rows were deleted
    if (data && data.length > 0) {
      res.json({ msg: 'Data deleted successfully' });
    } else {
      res.status(200).json({ error: 'Data not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
  
  
export const updateProgram = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    price,
    domain,
    program_type,
    registrations_status,
    description,
    placement_assurance,
    image_url,
    university_name,
    faculty_profile,
    learning_hours,
    certificate_diploma,
    eligibility_criteria
  } = req.body;

  try {
    const { data, error } = await supabase
      .from('programs') 
      .update({
        name,
        price,
        domain,
        program_type,
        registrations_status,
        description,
        placement_assurance,
        image_url,
        university_name,
        faculty_profile,
        learning_hours,
        certificate_diploma,
        eligibility_criteria
      })
      .eq('programid', id);

    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    // Check if any rows were updated
    if (data && data.length > 0) {
      res.json({ msg: 'Data updated successfully' });
    } else {
      res.status(200).json({ error: 'Data not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
  
  