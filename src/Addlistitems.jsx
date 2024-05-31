import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

function Propertyadding() {
  const [formData, setFormData] = useState({
    description: '',
    address: '',
    regularPrice: '',
    offer: '',
    discountPrice: '',
    bathrooms: '',
    bedrooms: '',
    furnished: '',
    parking: '',
    type: '',
    propertysize: '',
    email: '',
    phone: '',
    image: [],
    location: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const display = await axios.post('http://localhost:4000/createlist', formData);
      console.log(display.data);
    } catch (error) {
      console.error('Error creating listing:', error);
    }
    alert(`${formData.email} successfully created list..!!!`);
  };

  return (
    <div className="add">
      <h2>Add your property..</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>
{/* 
        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>regular price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter the address"
            name="regularprice"
            value={formData.regularPrice}
            onChange={handleChange}
            required
          />
        </Form.Group> */}


        
        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>discountPrice</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter the address"
            name="discountPrice"
            value={formData.discountPrice}
            onChange={handleChange}
            required
          />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>bathrooms</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter the address"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>bedrooms</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter the address"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            required
          />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>furnished</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the address"
            name="furnished"
            value={formData.furnished}
            onChange={handleChange}
            required
          />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>parking</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the address"
            name="parking"
            value={formData.parking}
            onChange={handleChange}
            required
          />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>type</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the address"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter the address"
            name="parking"
            value={formData.email}
            onChange={handleChange}
            
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>propertysize</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the address"
            name="propertysize"
            value={formData.propertysize}
            onChange={handleChange}
            required
          />
        </Form.Group>




        




        





        {/* Add more form fields here */}

        <Button
          type="submit"
          style={{ float: 'right' }}
          className="signbut"
        >
          Add
        </Button>
      </Form>
    </div>
  );
}

export default Propertyadding;
