package cs.tu.cs264.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Loginuser {
    private String email;
    private String name;
    private String time;
    private String type;
    private Boolean status;
}
