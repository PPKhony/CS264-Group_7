import {Navbar , Container } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
function Header() {
	const {auth} = useAuth();
	// console.log(auth);
  return (
    <>
      <Navbar className="bg-body-tertiary rounded mb-4">
        <Container>
          <Navbar.Brand className="m-0">
						<img src="02_โลโก้ธรรมจักร_ขาว-ดำ-removebg-preview.png" style={{width: "15vw"}}/>
					</Navbar.Brand>
          <Navbar.Toggle />
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
