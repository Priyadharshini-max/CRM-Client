import { Container, Button } from 'react-bootstrap';
export default function Password() {
    return (

        <Container className="PWcontainer">
            <form>
                <label>Email id :  </label><br /><br />
                <input type="email" name="email" /><br /><br />

                <label>Password :  </label><br /><br />
                <input type="password" name="password" />
                <Button className="passwordBtn" variant="primary" type="submit" >
             Submit
           </Button>
            </form>
        </Container>

    )
}