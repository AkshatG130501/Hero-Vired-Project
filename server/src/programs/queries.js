import pool from "../../db.js"

export const getTasks = async () => {
    try {
      const result = await pool.query(`
      SELECT * FROM programs;`);
      console.log(result);
      if (result.rows) {
        console.log(`showing all entries`);
        console.table(result.rows);
      } else {
        console.log(`cannot show entries`);
      }
      return result.rows;
    } catch (error) {
      console.log(`something went wrong in getTasks \n${error}\nthis is not cool`);
    }
}

export const checkName = "SELECT COUNT(*) FROM programs WHERE programs.name = $1";
export const inProgram = "INSERT INTO programs (name, Price, Domain, Program_Type, Registrations, Description, Placement_Assurance, Image_url, University_Name, Faculty_Profile, Learning_Hours_and_Duration, Certificate_or_Diploma, Eligibility_Criteria) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *";
export const removeProgram = "DELETE FROM programs WHERE id = $1";



