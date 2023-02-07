import React, { Component, useEffect, useState } from "react";
import axios from 'axios';
import "./userHome.css";


export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

      const [form, setForm] = React.useState({
        title: "",
        description: "",
        file: null
      });

      function handleChange(event) {
        const inputValue =
          event.target.name === "file" ? event.target.files[0] : event.target.value;

        setForm({
          ...form,
          [event.target.name]: inputValue
        });
      }

      function handleSubmit(event) {
        event.preventDefault();
        const videoData = new FormData();
        videoData.append("videoFile",form.file);
        videoData.append("title",form.title);
        videoData.append("description",form.description);

        axios.post("http://localhost:5000/upload",videoData)
        .then(response => {
          console.log(response.data);
        })


      }



  return (
    <div id="user_home">
      <h1>Welcome</h1><h6>{userData.fname}</h6>
      <h6>{userData.email}</h6>
      <br />
      <br />


      <div>
      <h3>Upload Youtube Video</h3>
      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>
          <div>
          <label>Video Title</label>
            <input
              onChange={handleChange}
              type="text"
              name="title"
              autoComplete="off"
              placeholder="Title"
            />
          </div>
          </td>
          </tr>
          <tr>
            <td>
            <div>
        <label>Description</label>
          <input
            onChange={handleChange}
            type="text"
            name="description"
            autoComplete="off"
            placeholder="Description"
          />
        </div>
            </td>
          </tr>
          <tr>
            <td>
            <div>
          <input id="chooseVid"
            onChange={handleChange}
            accept="video/mp4"
            type="file"
            name="file"
            placeholder="Add Video File"
          />
        </div>
            </td>
          </tr>
          </table>
        <br></br>
        <br></br>
        <div id="video_container">
        <button id="vid_btn" type="submit">Upload Video</button>
        </div>
        
      </form>
    </div>
       <br></br>
       <br></br>
       
      <button onClick={logOut} className="btn btn-primary">
        Log Out
      </button>
    </div>
  );
}