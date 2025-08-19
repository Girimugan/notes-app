
import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./Profile.css"; 

const Profile = () => {
  return (
    <div className="profile-container">
      <h2 className="profile-title">Profile Information</h2>

      <Row className="g-4">
        
        <Col md={6} lg={3}>
          <Card className="profile-card">
            <Card.Body>
              <Card.Title>Personal Info</Card.Title>
              <Card.Text>
                Name: John Doe <br />
                Age: 25
              </Card.Text>
              <Button variant="primary">Edit</Button>
            </Card.Body>
          </Card>
        </Col>

        
        <Col md={6} lg={3}>
          <Card className="profile-card">
            <Card.Body>
              <Card.Title>Contact</Card.Title>
              <Card.Text>
                Email: john@example.com <br />
                Phone: +91 9876543210
              </Card.Text>
              <Button variant="success">Update</Button>
            </Card.Body>
          </Card>
        </Col>

        
        <Col md={6} lg={3}>
          <Card className="profile-card">
            <Card.Body>
              <Card.Title>Settings</Card.Title>
              <Card.Text>
                Theme: Dark <br />
                Notifications: ON
              </Card.Text>
              <Button variant="warning">Change</Button>
            </Card.Body>
          </Card>
        </Col>

      
        <Col md={6} lg={3}>
          <Card className="profile-card">
            <Card.Body>
              <Card.Title>Activity</Card.Title>
              <Card.Text>
                Last Login: Today <br />
                Status: Active
              </Card.Text>
              <Button variant="danger">Logout</Button>
            </Card.Body>
          </Card>
        </Col>

       
        <Col md={6} lg={3}>
          <Card className="profile-card">
            <Card.Body>
              <Card.Title>Personal Info</Card.Title>
              <Card.Text>
                Name: John Doe <br />
                Age: 25
              </Card.Text>
              <Button variant="primary">Edit</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="profile-card">
            <Card.Body>
              <Card.Title>Personal Info</Card.Title>
              <Card.Text>
                Name: John Doe <br />
                Age: 25
              </Card.Text>
              <Button variant="primary">Edit</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="profile-card">
            <Card.Body>
              <Card.Title>Personal Info</Card.Title>
              <Card.Text>
                Name: John Doe <br />
                Age: 25
              </Card.Text>
              <Button variant="primary">Edit</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="profile-card">
            <Card.Body>
              <Card.Title>Personal Info</Card.Title>
              <Card.Text>
                Name: John Doe <br />
                Age: 25
              </Card.Text>
              <Button variant="primary">Edit</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;




