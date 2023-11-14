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
        String sql = "INSERT INTO Request (studentID, add_drop, subjectID, subjectName, section, professor_fullname, cause, requestID) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, request.getStudentID(), request.getAdd_drop(), request.getSubjectID(), request.getSubjectName(), request.getProfessor_fullname(), request.getCause(), request.getRequestID());
    }
    
    public List<Request> getAllRequests() {
        String sql = "SELECT * FROM Request";
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Request.class));
    }
}
