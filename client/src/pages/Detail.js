import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {
  const [activity, setActivity] = useState({})

  // When this component mounts, grab the activity with the _id of props.match.params.id

  const {id} = useParams()
  useEffect(() => {
    API.getActivity(id)
      .then(res => setActivity(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {activity.category} by {activity.description}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
      
        <Row>
          <Col size="md-2">
            <Link to="/">← Back </Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;
