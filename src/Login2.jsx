import React, { useState } from 'react';
import { Button, Card, Form, FormGroup, FormLabel, FormControl, FormCheck, Dropdown } from 'react-bootstrap';


function Login2() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [pythonChecked, setPythonChecked] = useState(false);
  const [phpChecked, setPhpChecked] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");


  const handlePassword = (event) => {
    setPassword(event.target.value);
  };


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


  const handlePythonChange = (event) => {
    setPythonChecked(event.target.checked);
  };


  const handlePhpChange = (event) => {
    setPhpChecked(event.target.checked);
  };


  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Selected Option:", selectedOption);
    console.log("Python Checked:", pythonChecked);
    console.log("PHP Checked:", phpChecked);
    console.log("Selected Value:", selectedValue);
  };


  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <Card style={{ width: "500px", padding: "20px" }}>
        <Card.Title style={{ textAlign: "center" }}>
          <h2>LOGIN</h2>
        </Card.Title>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" placeholder="Enter username" value={username} onChange={(event)=>setUsername(event.target.value)} required/>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={handlePassword} />
            </Form.Group>


            <Form.Group controlId="formBasicRadio">
              <Form.Label>Choose an option:</Form.Label>
              <Form.Check type="radio" name="option" label="Option 1" value="option1"  onChange={handleOptionChange} />
              <Form.Check type="radio" name="option" label="Option 2" value="option2"  onChange={handleOptionChange} />
              <Form.Check type="radio" name="option" label="Option 3" value="option3"  onChange={handleOptionChange} />
            </Form.Group>


            <Form.Group controlId="formBasicCheckbox">
             
            <Form.Check type="checkbox" label="Python" checked={pythonChecked} onChange={handlePythonChange} />
            <Form.Check type="checkbox" label="PHP" checked={phpChecked} onChange={handlePhpChange} />


            </Form.Group>




            <Form.Group controlId="formBasicSelect">
              <Form.Label>Select an option:</Form.Label>
              <Form.Select value={selectedValue} onChange={handleDropdownChange}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Form.Select>
            </Form.Group>


            <Button  variant="primary" type="submit"    style={{ justifyContent: "center", display: "block", margin: "0 auto" }}>
              LOGIN
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}


export default Login2;


