import React from "react";

function Activities() {


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
                name="category"
                placeholder="Category (required)"
              />
               <Input
                onChange={handleInputChange}
                name="activity"
                placeholder="Activity (required)"
              />
              <Input
                onChange={handleInputChange}
                name="date"
                placeholder="Date (required)"
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
                {activities.map(activity => (
                  <ListItem key={activity._id}>
                    <Link to={"/actiities/" + activity._id}>
                      <strong>
                        {activity.title} by {activity.author}
                      </strong>
                    </Link>
                    {<DeleteBtn onClick={() => deleteActivity(activity._id)} />}
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
