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

exports.getAllLessons = async (req, res) => {
  try {
    const getAllLessons = await pool.query(`select * from lessons`);
    res.json(getAllLessons.rows);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getOneCourse = async (req, res) => {
  try {
    const { id } = req.params;
    let data = {};
    const getOneUser = await pool.query("select * from courses where id = $1;", [id]);
    data = getOneUser.rows[0];

    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getOneLesson = async (req, res) => {
  try {
    const { id } = req.params;
    let data = {};
    const getOneUser = await pool.query("select * from lessons where id = $1;", [id]);
    data = getOneUser.rows[0];

    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getOneLibrary = async (req, res) => {
  try {
    const { id } = req.params;
    let data = {};
    const getOneUser = await pool.query("select * from library where id = $1;", [id]);
    data = getOneUser.rows[0];

    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getOneLibraryBranch = async (req, res) => {
  try {
    const { id } = req.params;
    let data = {};
    const getOneUser = await pool.query("select * from library_branch where id = $1;", [
      id,
    ]);
    data = getOneUser.rows[0];

    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getOneBook = async (req, res) => {
  try {
    const { id } = req.params;
    let data = {};
    const getOneUser = await pool.query("select * from books where id = $1;", [id]);
    data = getOneUser.rows[0];

    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
