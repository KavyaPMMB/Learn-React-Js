import React, { useState } from 'react';
import { Button, Card, Form, FormGroup, FormLabel, FormControl, FormCheck, Dropdown } from 'react-bootstrap';

function Login3() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    selectedOption: '',
    pythonChecked: false,
    phpChecked: false,
    selectedValue: '',
  });
  

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Card style={{ width: '500px', padding: '20px' }}>
        <Card.Title style={{ textAlign: 'center' }}>
          <h2>LOGIN</h2>
        </Card.Title>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicRadio">
              <Form.Label>Choose an option:</Form.Label>
              {[1, 2, 3].map((option) => (
                <Form.Check
                  key={option}
                  type="radio"
                  name="selectedOption"
                  label={`Option ${option}`}
                  value={`option${option}`}
                  checked={formData.selectedOption === `option${option}`}
                  onChange={handleChange}
                />
              ))}
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Python"
                name="pythonChecked"
                checked={formData.pythonChecked}
                onChange={handleChange}
              />
              <Form.Check type="checkbox" label="PHP" name="phpChecked" checked={formData.phpChecked} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicSelect">
              <Form.Label>Select an option:</Form.Label>
              <Form.Select name="selectedValue" value={formData.selectedValue} onChange={handleChange}>
                {[1, 2, 3].map((option) => (
                  <option key={option} value={`option${option}`}>
                    Option {option}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              style={{ justifyContent: 'center', display: 'block', margin: '0 auto' }}
            >
              LOGIN
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login3;
