package cs.tu.cs264.model;

public class Attach {
    public String getRequest_file() {
        return request_file;
    }

    public void setRequest_file(String request_file) {
        this.request_file = request_file;
    }

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

    public String getEvidence_type(){
        return evidence_type;
    }

    public void setEvidence_type(String evidence_type){
        this.evidence_type = evidence_type;
    }

    private String request_file;
    private String studentID;
    private String requestID;
    private String evidence_type;
}
