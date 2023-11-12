package cs.tu.cs264.model;

public class Attach {

    public String getStudentID(){
        return studentID;
    }

    public void setStudentID(String studentID){
        this.studentID = studentID;
    }

    public String getRequestID(){
        return requestID;
    }

    public void setRequestID(String requestID){
        this.requestID = requestID;
    }

    public String getEvidenceFile(){
        return evidenceFile;
    }

    public void setEvidenceFile(String evidenceFile){
        this.evidenceFile = evidenceFile;
    }

    private String studentID;
    private String requestID;
    private String evidenceFile;
}
