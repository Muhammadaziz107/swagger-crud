const pool = require("../db");

// exports.updateUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, password } = req.body;
//     const updateUser = await pool.query(
//       "update users set name = $1, password = $2 where id= $3 returning *",
//       [name, password, id]
//     );
//     res.json(updateUser.rows[0]);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

exports.updateCourses = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const updateCourses = await pool.query(
      "update courses set name=$1, description=$2 where id= $3 returning *",
      [name, description, id]
    );
    res.json(updateCourses.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateLessons = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, photo, description, course_id } = req.body;
    const updateLessons = await pool.query(
      "update lessons set name = $1, photo = $2, description = $3, course_id =$4 where id= $5 returning *",
      [name, photo, description, course_id, id]
    );
    res.json(updateLessons.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateLibrary = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updateCourses = await pool.query(
      "update library set name=$1 where id= $2 returning *",
      [name, id]
    );
    res.json(updateCourses.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateLibraryBranch = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, library_id } = req.body;
    const updateCourses = await pool.query(
      "update library set name=$1, library_id=$2 where id= $3 returning *",
      [name, library_id, id]
    );
    res.json(updateCourses.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, photo, description, library_branch_id } = req.body;
    const updateCourses = await pool.query(
      "update library set name=$1, photo=$2, description=$3, library_branch_id=$4  where id= $5 returning *",
      [name, photo, description, library_branch_id, id]
    );
    res.json(updateCourses.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.giveAdminRole = async (req, res) => {
  try {
    const { id } = req.body;
    const giveAdminRole = await pool.query(
      "update users set isAdmin = true where id = $1 and isSuperAdmin = true",
      [id]
    );
    res.json(giveAdminRole.rows[0]);
  } catch (error) {
    console.log(error);
  }
};
