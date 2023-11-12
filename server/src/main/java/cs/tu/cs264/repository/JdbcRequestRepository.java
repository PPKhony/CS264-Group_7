package cs.tu.cs264.repository;
import java.util.List;
import cs.tu.cs264.model.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class JdbcRequestRepository {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public void saveRequest(Request request) {
        String sql = "INSERT INTO Request (studentID, addLate, dropW, crossProgram, resign, etc, semester, subjectID, subjectName, section, resignSemester, resignYear, cause) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, request.getStudentID(), request.isAddLate(), request.isDropW(), request.isCrossProgram(),
                request.isResign(), request.getEtc(), request.getSemester(), request.getSubjectID(), request.getSubjectName(),
                request.getSection(), request.getResignSemester(), request.getResignYear(), request.getCause());
    }
    
    public List<Request> getAllRequests() {
        String sql = "SELECT * FROM Request";
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Request.class));
    }
}
