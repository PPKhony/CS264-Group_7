package cs.tu.cs264.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;

@RestController
@CrossOrigin
@RequestMapping("/api/attachfile")
public class FileAttachmentController {
    @PostMapping("/uploadpdf")
    public ResponseEntity<String> uploadPdf(@RequestPart("pdfFile") MultipartFile file) throws IOException {
        // Replace this path with the actual path where you want to save the uploaded PDF file
        String destinationPath = "C:\\Users\\PPKhon\\Desktop\\pdf";

        // Create the destination directory if it doesn't exist
        Files.createDirectories(Path.of(destinationPath));

        // Save the uploaded PDF file to the destination directory
        String fileName = file.getOriginalFilename();
        Path filePath = Path.of(destinationPath, fileName);
        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        return ResponseEntity.ok("File uploaded successfully! Path: " + filePath.toString());
    }
}
