import React from 'react'
import { Container, Row, Col } from "reactstrap";
import Header from './Header'
import Post from './Post';
import SideCard from './SideCard'

function Main() {
    return (
        <>
            <Header />

            <main className="my-5 py-5">
                <Container className="px-0">
                    <Row className="g-0 pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
                        <Col
                            xs={{ order: 2 }}
                            md={{ size: 4, order: 1 }}
                            tag="aside"
                            className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0"
                        >
                            <SideCard />
                        </Col>

                        <Col
                            xs={{ order: 1 }}
                            md={{ size: 7, offset: 1 }}
                            tag="section"
                            className="py-5 mb-5 py-md-0 mb-md-0"
                        >
                            <Post />
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}

export default Main