import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Upload.css';

const Upload = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    address: '',
    projectTitle: '',
    projectDescription: '',
    projectExperience: '',
    shareLink: ''
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/upload');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    console.log("Submitted Successfully");
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/upload', formData, { headers: { 'Content-Type': 'application/json' } });

      console.log('Operation successful');
      setFormData({
        email: '',
        password: '',
        address: '',
        projectTitle: '',
        projectDescription: '',
        projectExperience: '',
        shareLink: ''
      });

      // Refresh data after insert or update
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };
  const handleUpdate = async (e) => {
    if (e) {
      e.preventDefault();
    }
  
    try {
      // Fetch the data from the server
      const response = await axios.get('http://localhost:3001/api/data');
      const dataFromServer = response.data;
  
      console.log('Data from server:', dataFromServer);
  
      // Check if the email exists in the fetched data
      const selectedItem = dataFromServer.find(item => item[0] === formData.email);

      console.log('Selected item:', selectedItem);
  
      if (selectedItem) {
        // If the email exists, proceed with the update
        await axios.put(`http://localhost:3001/api/update/${formData.email}`, formData, {
          headers: { 'Content-Type': 'application/json' }
        });
  
        console.log('Update operation successful');
  
        // Reset the form data
        setFormData({
          email: '',
          password: '',
          address: '',
          projectTitle: '',
          projectDescription: '',
          projectExperience: '',
          shareLink: ''
        });
  
        // Refresh data after update
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3001/api/data');
            setData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error.response || error.message || error);
          }
        };
        
      } else {
        console.log('Email not found for update');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  
  
 const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/delete/${id}`);
      console.log('Delete operation successful');

      // Refresh data after delete
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };
 return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group col-md-6">
        <label htmlFor="inputAddress2">Address</label>
        <input type="text" className="form-control" id="address" placeholder="address of the project" value={formData.address} onChange={handleChange}/>
      </div>
         <div className="form-group col-md-6">
        <label htmlFor="inputAddress2">Project Title</label>
        <input type="text" className="form-control" id="projectTitle" placeholder="Title of the project" value={formData.projectTitle} onChange={handleChange}/>
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="inputAddress2">Project Description</label>
        <input type="text" className="form-control" id="projectDescription" placeholder="Description of the project" value={formData.projectDescription} onChange={handleChange}/>
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="inputAddress2">Project Experience</label>
        <input type="text" className="form-control" id="projectExperience" placeholder="Experience of the project" value={formData.projectExperience} onChange={handleChange}/>
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="inputAddress2">ShareLink</label>
        <input type="text" className="form-control" id="shareLink" placeholder="shareLink of the project" value={formData.shareLink} onChange={handleChange}/>
      </div>
      
          <button type="submit" className="btn btn-primary">Upload</button>
          <button type="button" onClick={handleUpdate}>
  Update
</button>


        </form>
       
      </div>
    </>
  );
};
  

export default Upload;
