package cs.tu.cs264.repository;
import cs.tu.cs264.model.Attach;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class JdbcAttachRepository{
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public void saveAttach(Attach attach) {
        String sql = "INSERT INTO Attach (studentID, requestID, request_file, evidence_type) " +
                "VALUES (?, ?, ?, ?)";
        jdbcTemplate.update(sql, attach.getStudentID(), attach.getRequestID(), attach.getRequest_file(), attach.getEvidence_type());
    }

    public List<Attach> getAllAttachs(){
        String sql = "SELECT * FROM Attach";
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Attach.class));
    }
}

