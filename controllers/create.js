const pool = require("../db");

exports.Register = async (req, res) => {
  try {
    const { name, password } = req.body;
    const registerUser = await pool.query(
      "insert into users(name, password) VALUES($1, $2) returning *",
      [name, password]
    );
    res.json(registerUser.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

exports.Login = async (req, res) => {
  try {
    const { name, password } = req.body;
    const loginUser = await pool.query(
      "select * from users where name = $1 and password = $2",
      [name, password]
    );
    res.json(loginUser.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

exports.giveAdminRole = async (req, res) => {
  try {
    const { id } = req.body;
    const giveAdminRole = await pool.query(
      "update users set isAdmin = true where id = $1",
      [id]
    );
    res.json(giveAdminRole.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

exports.newCourse = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newCourse = await pool.query(
      "insert into courses(name, description) VALUES($1, $2) returning *",
      [name, description]
    );
    res.json(newCourse.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

exports.newLesson = async (req, res) => {
  try {
    const { name, photo, description, course_id } = req.body;
    const newCourse = await pool.query(
      "insert into lessons(name, photo, description, course_id) VALUES($1, $2, $3, $4) returning *",
      [name, photo, description, course_id]
    );
    res.json(newCourse.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

exports.newLibrary = async (req, res) => {
  try {
    const { name } = req.body;
    const newCourse = await pool.query(
      "insert into library(name) VALUES($1) returning *",
      [name]
    );
    res.json(newCourse.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

exports.newLibraryBranch = async (req, res) => {
  try {
    const { name, library_id } = req.body;
    const newCourse = await pool.query(
      "insert into library_branch(name, library_id) VALUES($1, $2) returning *",
      [name, library_id]
    );
    res.json(newCourse.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

exports.newBook = async (req, res) => {
  try {
    const { name, photo, description, library_branch_id } = req.body;
    const newCourse = await pool.query(
      "insert into library_branch(name, library_id) VALUES($1, $2) returning *",
      [name, photo, description, library_branch_id]
    );
    res.json(newCourse.rows[0]);
  } catch (error) {
    console.log(error);
  }
};
