import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const RestaurantForm = () => {
  const [formData, setFormData] = useState({
    address: "",
    phone: "",
    name: "",
    email: "",
    time: "",
    title: "",
    cover: "",
    subtitle: "",
    place: "",
    location:"",
    rating: "",
    fooditems: [{ foodname: "", foodimage: "", price: "", itemrating: "" }],
  });

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedMenus = [...formData.fooditems];
    updatedMenus[index][name] = value;
    setFormData({ ...formData, fooditems: updatedMenus });
  };

  const handleAddMenu = () => {
    setFormData({
      ...formData,
      fooditems: [
        ...formData.fooditems,
        { foodname: "", foodimage: "", price: "", itemrating: "" },
      ],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const display =await axios.post('http://localhost:5000/collection',{title,cover,subtitle,place,rating,fooditems})
      // console.log(display.data)
      const response = await fetch("http://localhost:4000/createcollection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);
      // Reset the form after successful submission
      setFormData({
        address: "",
        phone: "",
        name: "",
        email: "",
        time: "",
        title: "",
        cover: "",
        subtitle: "",
        place: "",
        location:"",
        rating: "",
        fooditems: [{ foodname: "", foodimage: "", price: "", itemrating: "" }],
      });
      alert(` ${formData} updated..!!!`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-width">
      <Form onSubmit={handleSubmit} className="add-form ">
        <Form.Group className="mb-3">
          <Form.Label className="add-form-title">Restaurant details</Form.Label>
          <p>Name, address and location</p>
          <Form.Control
            type="text"
            placeholder="Restaurant name"
            name="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="subtitle"
            name="subtitle"
            value={formData.subtitle}
            onChange={(e) =>
              setFormData({ ...formData, subtitle: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="place"
            name="place"
            value={formData.place}
            onChange={(e) =>
              setFormData({ ...formData, place: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="location"
            name="location"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Restaurant address"
            name="address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="phone number"
            name="phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="add-form-title">Restaurant owner details</Form.Label>
          <Form.Control
            type="text"
            placeholder="Restaurant owner full name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Restaurant owner email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="add-form-title">Restaurant rating& timings</Form.Label>
          <Form.Control
            type="text"
            placeholder="opening hours"
            name="time"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="rating"
            name="rating"
            value={formData.rating}
            onChange={(e) =>
              setFormData({ ...formData, rating: e.target.value })
            }
          />
        </Form.Group>
        <div className="mb-3 w-96">
          <label
            htmlFor="formFile"
            className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
          >
            Upload images
          </label>
          <input
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            type="file"
            id="formFile"
            name="cover"
            value={formData.cover}
            onChange={(e) =>
              setFormData({ ...formData, cover: e.target.value })
            }
          />
        </div>

        {formData.fooditems.map((display, index) => (
          <div key={index}>
            <Form.Group className="mb-3">
              <Form.Label className="add-form-title">Food items</Form.Label>

              <Form.Control
                type="text"
                placeholder="food name"
                name="foodname"
                value={display.foodname}
                onChange={(e) => handleInputChange(e, index)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder=" price"
                name="price"
                value={display.price}
                onChange={(e) => handleInputChange(e, index)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="food rating"
                name="itemrating"
                value={display.itemrating}
                onChange={(e) => handleInputChange(e, index)}
              />
            </Form.Group>

            <div className="mb-3 w-96">
              <label
                htmlFor="formFile"
                className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
              >
                food images
              </label>
              <input
                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                type="file"
                id="formFile"
                name="foodimage"
                value={display.foodimage}
                onChange={(e) => handleInputChange(e, index)}
              />
            </div>
          </div>
        ))}
        
        <div className="add-menu-item">
          <Button type="button" onClick={handleAddMenu}>
            Add Menu Item
          </Button>
        </div>
        <div className="form-submit">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default RestaurantForm;
