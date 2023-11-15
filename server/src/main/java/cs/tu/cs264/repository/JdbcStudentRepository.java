//package cs.tu.cs264.repository;
//
//import cs.tu.cs264.model.DB_Request;
//import cs.tu.cs264.model.DB_Student;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.jdbc.core.JdbcTemplate;
//import org.springframework.stereotype.Repository;
//
//import java.text.SimpleDateFormat;
//import java.util.Date;
//import java.util.UUID;
//
//@Repository
//public class StudentRepository {
//
//    @Autowired
//    private JdbcTemplate jdbcTemplate;
//    UUID u;
//    public StudentRepository() {
//        u = UUID.randomUUID();
//    }
//
//
//    public void saveStudent(DB_Student db_student) {
//        String uuid = u.toString();
//        String sql = "";
//        jdbcTemplate.update(sql, ,new SimpleDateFormat("dd-MM-yyyy HH:mm:ss").format(new Date()));
//
//        String sql_2 = "";
//
//        for (DB_Request s: db_student.getRegister()) {
//            jdbcTemplate.update(sql_2, );
//        }
//        for (DB_Request s: db_student.getWithdraw()) {
//            jdbcTemplate.update(sql_2, s.getCourseCode());
//        }
//
//        u = UUID.randomUUID();
//    }
//
//    public List<Student> getStudentById(String studentId) {
//        String sql = "SELECT *  FROM student WHERE student.studentId = ?";
//        List<Student> st;
//        st =  jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Student.class) , studentId);
//
//        String sql_2 = "SELECT *  FROM subject WHERE UUID = ? AND Type = ?";
//        for (Student s: st) {
//            List<Subject> subJ = jdbcTemplate.query(sql_2, new BeanPropertyRowMapper<>(Subject.class) , s.getUUID() , "Register");
//            s.setRegisterSubject(subJ.toArray(new Subject[0]));
//        }
//        for (Student s: st) {
//            List<Subject> subJ = jdbcTemplate.query(sql_2, new BeanPropertyRowMapper<>(Subject.class) , s.getUUID() , "Withdraw") ;
//            s.setRegisterWithdraw(subJ.toArray(new Subject[0]));
//        }
//
//        return st;
//    }
//
//    @Override
//    public boolean updateStudentNameById(String studentId, String studentName) {
//        String sql = "UPDATE STUDENT SET studentFirstName = ? WHERE studentId = ?";
//        jdbcTemplate.update(sql, studentName , studentId);
//        return true;
//    }
//
//    @Override
//    public boolean deleteStudentById(String studentId) {
//        String sqlDeleteSubjectByUUID = "DELETE FROM subject WHERE UUID = ?";
//        String sqlDeleteStudentByStudentId = "DELETE FROM student WHERE studentId = ?";
//        List<Student> arr = getStudentById(studentId);
//        for (Student s : arr) {
//            jdbcTemplate.update(sqlDeleteSubjectByUUID, s.getUUID());
//        }
//        jdbcTemplate.update(sqlDeleteStudentByStudentId, studentId);
//        return true;
//    }
//}