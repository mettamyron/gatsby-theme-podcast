import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


export default ({ children }) => (
    <>
        {children}
        <Form>
            <Container fluid="true" >
                <Row xs={2} md={2} lg={2} noGutters>
                    <Col sm>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" size="sm" />
                        </Form.Group>
                    </Col>
                    <Col sm>
                        <Button type="submit" size="sm">Go</Button>
                    </Col>
                </Row>
            </Container>
        </Form>
        <p><Button
            variant="primary"
            size="sm"
            href="https://substack.maitri.fm/subscribe"
        >Subscribe</Button></p>
    </>
);