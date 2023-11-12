package cs.tu.cs264.repository;
import cs.tu.cs264.model.Document;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class JdbcDocumentRepository {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public void saveDocument(Document document) {
        String sql = "INSERT INTO Documents (requestID, request_file) " +
                "VALUES (?, ?, ?)";
        jdbcTemplate.update(sql, document.getRequestID(), document.getRequestFile());
    }

    public List<Document> getAllDocuments() {
        String sql = "SELECT * FROM Documents";
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Document.class));
    }
}
