import React, { useState, useEffect } from 'react';
import { CiStar } from 'react-icons/ci';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Agentcard() {
  const { pname, pemail } = useParams();
  const [first, setFirst] = useState([]);

  useEffect(() => {
    const handleItems = async () => {
      try {
        const response = await axios.get('http://localhost:4008/getlist');
        setFirst(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    handleItems();
  }, []);


  const filteredData = first.filter((item) => item.name === pname);

  
  const displayContent = filteredData.length > 0 && (
    <div className='explore-card cur-po'>
      {filteredData.map((display) => (
        <div className='explore-card-cover' style={{ display: 'flex', marginTop: '3%', marginLeft: '5%', marginRight: '5%' }}  key={display.id}>
          <img className='explore-card-image' variant='top' src={display.image} />
          <div style={{ paddingLeft: '2%' }}>
            <div className='res-row'>
              <div className='res-name'>{display.type}</div>
              <h3>{display.regularPrice}</h3>
              <h3>{display.description}</h3>
            </div>
            <div className='res-row'>
              <div className='res-name'>{display.description}</div>
            </div>
            <div className='res-row'>
              <span className='res-cuisine-tag'>{display.phone}</span>
            </div>
            <div className='res-row'>
              <a href={display.location}>view</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return <div>{displayContent}</div>;
}

export default Agentcard;
