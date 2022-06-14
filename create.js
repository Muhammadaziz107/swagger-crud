const pool=require('./db');

exports.createEmployee= async(req,res)=>{
    try {
        const {name,date_of_joining,designation, gender, email,bio}=req.body;
        const employeeData= await pool.query("INSERT INTO EMPLOYEE(name,date_of_joining,designation,gender,email,bio) VALUES($1,$2,$3,$4,$5,$6) returning *",
                    [name,date_of_joining,designation, gender, email,bio])
        res.json(employeeData.rows[0]);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.createTeam=async(req,res)=>{
    try {
        const {name,email,description}=req.body;
        const teamData= await pool.query("INSERT INTO TEAM(name,email,description) VALUES($1,$2,$3) returning *",
                    [name,email,description])
        res.json(teamData.rows[0]);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.createEmployeeAssignment= async(req,res)=>{
    try {
        const {employee_id,team_id}=req.body;
        const employeeAssignmentData= await pool.query("INSERT INTO EMPLOYEE_ASSIGNMENT(employee_id,team_id) VALUES($1,$2) returning *",
                    [employee_id,team_id])
        res.json(employeeAssignmentData.rows[0]);
    } catch (error) {
        res.status(500).json(error);
    }
}