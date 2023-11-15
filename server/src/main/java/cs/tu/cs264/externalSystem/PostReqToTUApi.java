package cs.tu.cs264.externalSystem;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import cs.tu.cs264.model.Web_Loginpage;

public class PostReqToTUApi {
    public static String postReqToTUApi(Web_Loginpage webLoginpage) throws Exception{
        HttpResponse<String> response = Unirest.post("https://restapi.tu.ac.th/api/v1/auth/Ad/verify")
                .header("Application-Key", "TUb1d8c81c7d3108c00ed2a9f0954d87a4dbad497d6b2d177f5e4f728f49db33540bfe9a657bd43a6593ac4efc4bd3ee39")
                .body("{\r\n    \"UserName\": \""+ webLoginpage.getUsername()+"\",\r\n"+
                        "\"PassWord\": \""+ webLoginpage.getPassword() +"\"\r\n}")
                .asString();
        return response.getBody();
    }
}
