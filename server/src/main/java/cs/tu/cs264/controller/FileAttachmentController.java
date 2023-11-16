package cs.tu.cs264.controller;

import cs.tu.cs264.model.DB_Attachment;
import cs.tu.cs264.model.DB_Request;
import cs.tu.cs264.repository.JdbcAttachmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@RestController
@CrossOrigin
@RequestMapping("/api/attachfile")
public class FileAttachmentController {

    @Autowired
    JdbcAttachmentRepository jdbcAttachmentRepository;

    @PostMapping("/uploadpdf")
    public ResponseEntity<String> uploadPdf(@RequestPart("pdfFile") MultipartFile file,@RequestPart("uuid") String uuid) throws IOException {
        // Replace this path with the actual path where you want to save the uploaded PDF file
        String destinationPath = "C:\\Users\\PPKhon\\Desktop\\pdf";

        // Create the destination directory if it doesn't exist
        Files.createDirectories(Path.of(destinationPath));

        // Save the uploaded PDF file to the destination directory
        String fileName = uuid+"_"+file.getOriginalFilename();
        Path filePath = Path.of(destinationPath, fileName);
        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        //new obj to inject to jdbc db
        DB_Attachment db_attachment = new DB_Attachment();
        db_attachment.setRequest_file("C:\\Users\\PPKhon\\Desktop\\pdf"+filePath.toString());
        db_attachment.setRequestID(uuid);

        jdbcAttachmentRepository.saveAttach(db_attachment);
        return ResponseEntity.ok("File uploaded successfully!");
    }

    @GetMapping("/download")
    public ResponseEntity<Resource> downloadFile() throws IOException {
        // Replace this path with the actual path of the file you want to return
        String filePath = "C:\\Users\\PPKhon\\Desktop\\pdf\\e2dab35b-828a-4992-ae56-90259509a6a2_CS102_HW5.2_6509611858.c";

        // Load the file as a MultipartFile
        Path path = Paths.get(filePath);
        String fileName = path.getFileName().toString();
        byte[] fileContent = Files.readAllBytes(path);
        ByteArrayResource resource = new ByteArrayResource(fileContent);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileName + "\"")
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .contentLength(fileContent.length)
                .body(resource);
    }
}
