
import React, { useState } from 'react';
import axios from 'axios';

const ArrayForm = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Password: '',
    products: [{ productName: '', productPrice: '' }],
  });

  const handleChange = (index, key, value) => {
    
    const newProducts = [...formData.products];
    newProducts[index][key] = value;
    setFormData({ ...formData, products: newProducts });
  };

  const addProductField = () => {
    setFormData({
      ...formData,
      products: [...formData.products, { productName: '', productPrice: '' }],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:4000/createarray', formData);
      console.log('Data submitted successfully!');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={formData.Name}
          onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="text"
          value={formData.Email}
          onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={formData.Password}
          onChange={(e) => setFormData({ ...formData, Password: e.target.value })}
        />
      </label>
      <br />
      <h4>Products:</h4>
      {formData.products.map((product, index) => (
        <div key={index}>
          <label>
            Product Name:
            <input
              type="text"
              value={product.productName}
              onChange={(e) => handleChange(index, 'productName', e.target.value)}
            />
          </label>
          <label>
            Product Price:
            <input
              type="number"
              value={product.productPrice}
              onChange={(e) => handleChange(index, 'productPrice', e.target.value)}
            />
          </label>
        </div>
      ))}
      <button type="button" onClick={addProductField}>
        Add Product
      </button>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ArrayForm;
