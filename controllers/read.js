const pool = require("../db");

exports.getAllUsers = async (req, res) => {
  try {
    const getAllUsers = await pool.query("select * from users");
    res.json(getAllUsers.rows);
  } catch (error) {
    console.log(error);
  }
};

exports.getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    let data = {};
    const getOneUser = await pool.query("select * from users where id = $1;", [id]);
    data = getOneUser.rows[0];

    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const getAllCourses = await pool.query(`select * from courses`);
    res.json(getAllCourses.rows);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getAllLibrary = async (req, res) => {
  try {
    const getAllLibrary = await pool.query(`select * from library`);
    res.json(getAllLibrary.rows);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getAllLibraryBranch = async (req, res) => {
  try {
    const getAllLibraryBranch = await pool.query(`select * from library_branch`);
    res.json(getAllLibraryBranch.rows);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const getAllBooks = await pool.query(`select * from books`);
    res.json(getAllBooks.rows);
  } catch (error) {
    res.status(500).json(error);
  }
};

// exports.getTeam = async (req, res) => {
//   try {
//     const { id } = req.params;
//     let data = {};
//     const teamData = await pool.query("SELECT * FROM TEAM WHERE id =$1", [id]);
//     const employees = await pool.query(
//       "SELECT * FROM EMPLOYEE WHERE ID IN (SELECT team_id  from  EMPLOYEE_ASSIGNMENT where TEAM_ID=$1)",
//       [id]
//     );
//     data = teamData.rows[0];
//     if (data) {
//       data.employees = employees.rows;
//     } else {
//       data = {
//         info: "No team data found for this id",
//       };
//     }
//     res.json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };
