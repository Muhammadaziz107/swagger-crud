const pool = require("../db");

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query("delete from users where id= $1 returning *", [
      id,
    ]);
    res.json(deleteUser.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCourse = await pool.query(
      "delete from courses where id= $1 returning *",
      [id]
    );
    res.json(deleteCourse.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteLesson = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteLesson = await pool.query(
      "delete from lessons where id= $1 returning *",
      [id]
    );
    res.json(deleteLesson.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteLibrary = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteLibrary = await pool.query(
      "delete from library where id= $1 returning *",
      [id]
    );
    res.json(deleteLibrary.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteLibraryBranch = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteLibraryBranch = await pool.query(
      "delete from library_branch where id= $1 returning *",
      [id]
    );
    res.json(deleteLibraryBranch.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await pool.query("delete from books where id= $1 returning *", [
      id,
    ]);
    res.json(deleteBook.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};
