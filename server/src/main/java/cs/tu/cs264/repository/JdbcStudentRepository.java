package cs.tu.cs264.repository;

import cs.tu.cs264.model.DB_Request;
import cs.tu.cs264.model.DB_Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Repository
public class JdbcStudentRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private UUID u;
    public JdbcStudentRepository() {
        u = UUID.randomUUID();
    }

    public DB_Student querystuIDByUUID(String uuid) {
        try {
            String sql = "SELECT studentid from student WHERE uuid = ?";
            return jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<>(DB_Student.class), uuid);
        } catch (Exception e) {
             return null;
        }
    }
    public String saveRequest(DB_Student db_student) {
        try {
            String uuid = u.toString();
            String insertQuery = "INSERT INTO Student (uuid , date, email, prefix, name, topic," +
                    "studentID, department, studentYear, advisor, studentPhone, parentPhone, " +
                    "addressNumber, moo, tumbol, amphur, province) " +
                    "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? , ?)";

            jdbcTemplate.update(insertQuery ,uuid ,new SimpleDateFormat("dd-MM-yyyy HH:mm:ss").format(new Date())  ,
                    db_student.getEmail(),db_student.getPrefix(),db_student.getName(),db_student.getTopic(),db_student.getStudentID(),
                    db_student.getDepartment(), db_student.getStudentYear(),db_student.getAdvisor(),db_student.getStudentPhone(),
                    db_student.getParentPhone(),db_student.getAddressNumber(),db_student.getMoo(),db_student.getTumbol(),db_student.getAmphur()
                    ,db_student.getProvience());

            String sql_2 = "INSERT INTO Request (UUID ,courseCode, courseName , credits , dayTime , instructor , section , type)" +
                    "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
            for(DB_Request s : db_student.getRegister()) {
                jdbcTemplate.update(sql_2,uuid,s.getCourseCode(),s.getCourseName(),s.getCredits(),s.getDayTime(),s.getInstructor(),s.getSection(),"register");
            }

            for (DB_Request s: db_student.getWithdraw()) {
                jdbcTemplate.update(sql_2,uuid,s.getCourseCode(),s.getCourseName(),s.getCredits(),s.getDayTime(),s.getInstructor(),s.getSection(),"withdraw");
            }
            return uuid;
        } catch (Exception e) {
            return "Data was occurs something";
        } finally {
            u = UUID.randomUUID();
        }
    }

    public List<DB_Request> queryRequestByInstructor(String instructor) {
        String sql = "SELECT * FROM request where instructor = ? ORDER BY no DESC;";
        List<DB_Request> req;
        req = jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(DB_Request.class) , instructor);

        return req;
    }

    public  List<DB_Student> queryStudentDataByUUID(String UUID) {
        String sql = "SELECT * FROM student where UUID = ? ";
        return  jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(DB_Student.class), UUID);
    }


    public boolean updateRequestByUUIDAndSubjectName(String status , String uuid, String courseCode , String details) {
        try {
            String sql = "UPDATE Request SET status = ? WHERE uuid = ? AND courseCode = ? ";
            String sql_2 = "UPDATE Request SET details = ? WHERE uuid = ? AND courseCode = ? ";
            jdbcTemplate.update(sql, status , uuid , courseCode);
            jdbcTemplate.update(sql_2, details , uuid , courseCode);
            return true;
        } catch (Exception e) {
            return false;
        }
    }


}