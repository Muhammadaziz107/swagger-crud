const pool=require('./db');

exports.deleteEmployee=async (req,res)=>{
    try {
        const {id}=req.params;
        let data={};
        const employeeAssignmentData=await pool.query("DELETE from EMPLOYEE_ASSIGNMENT where employee_id=$1 returning *",[id]);
        const employeeData= await pool.query("Delete from employee where id =$1 returning *",[id]);
        data=employeeData.rows[0];
        if(data){
            data.teams=employeeAssignmentData.rows
        }else{
            data={
                info:"No employee to delete"
            }
        }
        res.json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.deleteTeam=async (req,res)=>{
    try {
        const {id}=req.params;
        let data={};
        const employeeAssignmentData=await pool.query("DELETE from EMPLOYEE_ASSIGNMENT where team_id=$1 returning *",[id]);
        const teamData= await pool.query("Delete from team where id =$1 returning *",[id]);
        data=teamData.rows[0];
        if(data){
            data.employees=employeeAssignmentData.rows
        }else{
            data={
                info:"No team to delete"
            }
        }
        res.json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.deleteEmployeeAssignment=async (req,res)=>{
    try {
        const {employee_id,team_id}=req.params;
        const employeeAssignmentData=await pool.query("DELETE from EMPLOYEE_ASSIGNMENT where team_id=$1 and employee_id=$2 returning *",[team_id,employee_id]);
        res.json(employeeAssignmentData.rows[0]);
    } catch (error) {
        res.status(500).json(error);
    }
}