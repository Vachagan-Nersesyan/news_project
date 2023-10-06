import { Col } from 'react-bootstrap'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function NewsCardComp({ info ,showFullText }) {
    return (
            <Col lg={3} md={4} sm={6} xs={12} >
                <Card className='mb-4' onClick={() => showFullText(info)}>
                    <Card.Img variant="top" src={info.picture} />
                    <Card.Body>
                        <Card.Title>{info.title}</Card.Title>
                        <Card.Text>
                            {info.text}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
    )
}

export default NewsCardComp