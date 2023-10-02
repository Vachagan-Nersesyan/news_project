import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";


function UserCardComp() {
    return (
        <div>
            <Card style={
                {
                    width: '18rem',
                    display: 'flex',
                    borderRadius: '3em',
                    height: '38em',

                }

            }
            >
                <Card.Body
                    style={
                        {
                            padding: '5em',
                            background: "linear-gradient(red, black)",
                            borderRadius: '3em'
                        }
                    }
                >

                </Card.Body>


                <Card.Body
                    style={
                        {
                            transform: "translateY(-5em)",
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '2em'
                        }
                    }
                >
                    <Card.Img
                        variant="top"
                        src="/static/secImages/1.png"

                        style={
                            {
                                width: '50%',
                                marginBottom: '1em',
                                borderRadius: '50%',
                                border: '1px solid black'
                            }
                        }

                    />

                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Product Design</Card.Text>


                    <Card.Body
                        style={
                            {
                                borderBottom: '3px solid red',
                                width: '70%',
                                marginBottom: '1em'
                            }
                        }
                    ></Card.Body>



                    <Card.Text className='text-center'>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>



                    <Card.Body>
                        <Button className='m-2 bg-success border-0' variant="primary"><FaTwitter /></Button>
                        <Button className='m-2 bg-success border-0' variant="primary"><FaFacebook /></Button>
                        <Button className='m-2 bg-success border-0' variant="primary"><FaInstagram /></Button>
                    </Card.Body>

                </Card.Body>
            </Card>
        </div>
    )
}



export default UserCardComp