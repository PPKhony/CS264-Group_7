package cs.tu.cs264.controller;
import cs.tu.cs264.model.Document;
import cs.tu.cs264.repository.JdbcDocumentRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = {"Documents"})
public class DocumentController {
    @Autowired
    private JdbcDocumentRepository userDao;

    @PostMapping
    public void addDocument(@RequestBody Document document) {

        userDao.saveDocument(document);
    }
    @GetMapping
    public List<Document> getAllDocuments() {
        return userDao.getAllDocuments();
    }
}
