package cs.tu.cs264.model;

public class Document {
    public String getRequestID() {
        return requestID;
    }

    public void setRequestID(String requestID){
        this.requestID = requestID;
    }

    public String getRequestFile() {
        return request_file;
    }

    public void setRequestFile(String request_file) {
        this.request_file = request_file;
    }

    private String requestID;
    private String request_file;
}
