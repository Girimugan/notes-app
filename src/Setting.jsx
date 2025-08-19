
import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./Setting.css"; 

const Setting = () => {
  return (
    <div className="setting-container">
      <h2 className="setting-title">Location Options</h2>

      <Row className="g-4">
        <Col md={6} lg={4}>
          <Card className="setting-card">
            <Card.Img
              variant="top"
              src="https://picsum.photos/400/200?random=11"
              className="setting-img"
            />
            <Card.Body>
              <Card.Title className="card-title">Theme Settings</Card.Title>
              <Card.Text className="card-text">
                Switch between light and dark mode to personalize your dashboard.
              </Card.Text>
              <Button variant="primary">Change Theme</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card className="setting-card">
            <Card.Img
              variant="top"
              src="https://picsum.photos/400/200?random=12"
              className="setting-img"
            />
            <Card.Body>
              <Card.Title className="card-title">Notification Settings</Card.Title>
              <Card.Text className="card-text">
                Manage email and app notifications according to your needs.
              </Card.Text>
              <Button variant="success">Update</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card className="setting-card">
            <Card.Img
              variant="top"
              src="https://picsum.photos/400/200?random=13"
              className="setting-img"
            />
            <Card.Body>
              <Card.Title className="card-title">Privacy Settings</Card.Title>
              <Card.Text className="card-text">
                Control who can see your personal details and activities.
              </Card.Text>
              <Button variant="warning">Manage Privacy</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Setting;

