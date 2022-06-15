const pool = require("../db");

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, password } = req.body;
    const updateUser = await pool.query(
      "update users set name = $1, password = $2 where id= $7 returning *",
      [name, password, id]
    );
    res.json(updateUser.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, description } = req.body;
    const teamData = await pool.query(
      "UPDATE TEAM SET name=$1, email=$2, description=$3 where id= $4 returning *",
      [name, email, description, id]
    );
    res.json(teamData.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};
