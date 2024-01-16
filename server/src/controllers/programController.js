import { removeProgram,inProgram,checkName,getTasks } from "../programs/queries.js";
import pool from "../../db.js";

export const getPrograms = async (req, res) => {
    // let { data: Programs, error } = await supabase
    // .from('table1')
    // .select();
    let rows = await getTasks();
    return res.status(200).json({
      msg: rows
    });
  };
  
  export const addPrograms = async (req, res) => {
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
    } = req.body;
  
    try {
  
      // Add program to the database
      const result = await pool.query(
        `INSERT INTO programs ("name", "price", "domain", "program_type", "registrations_status", "description", "placement_assurance", "image_url", "university_name", "faculty_profile", "learning_hours", "certificate_diploma", "eligibility_criteria") 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *`,
        [
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
        ]
      );
  
      res.status(201).json({ message: 'Program created successfully', insertedProgram: result.rows[0] });
    } catch (error) {
      console.error('Error adding program:', error.message);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  
  
  export const deleteProgram = async (req, res) => {
    const programName = req.params.Name;
  
    try {
      // Use the pool to execute the DELETE query
      const result = await pool.query('DELETE FROM programs WHERE "name" = $1 RETURNING *', [programName]);
  
      if (result.rows.length === 0) {
        // If no rows were affected, the program with the specified name was not found
        res.status(404).json({ error: 'Program not found' });
      } else {
        // Successful deletion
        res.status(200).json({ message: 'Program deleted successfully', deletedProgram: result.rows[0] });
      }
    } catch (error) {
      console.error('Error deleting program:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  
  export const updateProgram = async (req, res) => {
    const oldProgramName = req.params.Name; // The current Name value in the database
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
    } = req.body;
  
    try {
      // Use the pool to execute the UPDATE query
      const result = await pool.query(
        `UPDATE programs 
         SET "name"=$1, "price"=$2, "domain"=$3, "program_type"=$4, "registrations_status"=$5, "description"=$6, "placement_assurance"=$7, "image_url"=$8, "university_name"=$9, "faculty_profile"=$10, "learning_hours"=$11, "certificate_diploma"=$12, "eligibility_criteria"=$13
         WHERE "Name" = $14 
         RETURNING *`,
        [
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
          oldProgramName, // Use the old Name value in the WHERE clause
        ]
      );
  
      if (result.rows.length === 0) {
        res.status(404).json({ error: 'Program not found' });
      } else {
        res.status(200).json({ message: 'Program updated successfully', updatedProgram: result.rows[0] });
      }
    } catch (error) {
      console.error('Error updating program:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  