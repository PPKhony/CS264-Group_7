import {Navbar , Container , Nav } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useState } from "react";
function Header() {
	const {auth} = useAuth();
	// console.log(auth);
  const [isShow,setIsShow] = useState(()=>{ 
    if (auth.type=="student") return false; else return true;
    });
  return (
    <>
      <Navbar className="bg-body-tertiary rounded mb-4">
        <Container>
          <div>
						<img src="02_โลโก้ธรรมจักร_ขาว-ดำ-removebg-preview.png" style={{width: "15vw"}}/>
					</div> 
          <Nav.Link as={Link} to="/attachfile" disabled={isShow} className=" p-2" style={{marginLeft: "2rem"}}>การแนบไฟล์เพิ่มเติม</Nav.Link>
          {/* <Nav.Link as={Link}  disabled={isShow} className=" p-2" style={{marginLeft: "2rem"}}>นี้คือสีขาว</Nav.Link> */}
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="d-flexbox" style={{textAlign: "right"}}>
              Signed in as: <a>{auth.displayname_th}</a>
              <br/>
              Username ID : <a>{auth.username}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
