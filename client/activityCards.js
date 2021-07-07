// workBack was the data for the backend cards


<div className="row justify-content-center" id="back">
          {workBack.map((workBack) => (
            <Card className="col-12" style={{ width: "30rem" }}>
             
              <Card.Body>
                <Card.Category>{workBack.title}</Card.Category>
                <Card.Subtitle className="mb-2 text-muted">Backend Application</Card.Subtitle>
                <Card.Text>{workBack.description}</Card.Text>
                <Card.Text>TECHNOLOGIES USED:  {workBack.technology}</Card.Text>
                <Button target="_blank" href={workBack.repo}>See the Repo</Button>
                <Button target="_blank" href={workBack.demo}>See a Demo</Button>
              </Card.Body>
            </Card>
          ))}
        </div>