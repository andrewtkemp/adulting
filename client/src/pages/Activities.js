import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Activities() {
  // Setting our component's initial state
  const [activities, setActivities] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setActivities
  useEffect(() => {
    loadActivities()
  }, [])

  // Loads all books and sets them to books
  function loadActivities() {
    API.getActivities()
      .then(res => 
        setActivities(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads Activities from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadActivities())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload Activities from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveBook({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
        .then(res => loadActivities())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Activities Did I Do?</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="date"
                placeholder="Date (required)"
              />
              <Input
                onChange={handleInputChange}
                name="activity"
                placeholder="Activity (required)"
              />
              <Input
                onChange={handleInputChange}
                name="time"
                placeholder="Amount of time (required)"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit Activity
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Activities On My List</h1>
            </Jumbotron>
            {activities.length ? (
              <List>
                {activities.map(actiity => (
                  <ListItem key={actiity._id}>
                    <Link to={"/actiities/" + actiity._id}>
                      <strong>
                        {actiity.title} by {actiity.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteActivity(activity._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Activities;
