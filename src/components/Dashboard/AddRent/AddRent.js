import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import "./AddRent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";

const AddRent = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { register, handleSubmit, errors } = useForm();
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const history = useHistory();
  const onSubmitEvent = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("bed", info.bed);
    formData.append("bath", info.bath);
    formData.append("location", info.location);
    formData.append("price", info.price);

    fetch("https://apartment-hunt-backend-server.herokuapp.com/addService", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
    history.push("/");
  };

  return (
    <div className="adminService p-4">
      <form action="" onSubmit={handleSubmit(onSubmitEvent)}>
        <section className="addServiceSec">
          <div className="row p-4">
            <div className="col-md-6">
              <div className="mb-3">
                <div className="input-group-prepend">
                  <b> Service Title </b>
                </div>
                <input
                  onBlur={handleBlur}
                  className="w-100 mx-auto "
                  name="name"
                  placeholder="Enter title"
                  ref={register({ required: true })}
                />
                {errors.eventName && (
                  <span className="error">Service Title is required</span>
                )}
              </div>

              <div className="mb-3">
                <div className="input-group-prepend">
                  <b> Location </b>
                </div>
                <input
                  onBlur={handleBlur}
                  className="w-100 mx-auto "
                  name="location"
                  placeholder="Location"
                  ref={register({ required: true })}
                />
                {errors.eventName && (
                  <span className="error">Service Title is required</span>
                )}
              </div>

              <div className="mb-3">
                <div className="input-group-prepend">
                  <b> No of Bathroom </b>
                </div>
                <input
                  onBlur={handleBlur}
                  className="w-100 mx-auto "
                  name="bath"
                  type="number"
                  placeholder="Bathroom"
                  ref={register({ required: true })}
                />
                {errors.eventName && (
                  <span className="error">Service Title is required</span>
                )}
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <div className="input-group-prepend">
                  <b> Price </b>
                </div>
                <input
                  onBlur={handleBlur}
                  className="w-100 mx-auto "
                  name="price"
                  type="number"
                  placeholder="Price"
                  ref={register({ required: true })}
                />
                {errors.eventName && (
                  <span className="error">Service Title is required</span>
                )}
              </div>

              <div className="mb-3">
                <div className="input-group-prepend">
                  <b> No of Bedroom </b>
                </div>
                <input
                  onBlur={handleBlur}
                  className="w-100 mx-auto "
                  name="bed"
                  type="number"
                  placeholder="Enter title"
                  ref={register({ required: true })}
                />
                {errors.eventName && (
                  <span className="error">Service Title is required</span>
                )}
              </div>

              <b>Icon</b>
              <div className="input-group mb-3">
                <input
                  id="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-100 mx-auto btn btn-dark "
                  type="file"
                  name="img"
                  ref={register({ required: true })}
                />
                {errors.eventBanner && (
                  <span className="error">Icon is required</span>
                )}
                <label className="btn btnUpload w-50" for="file">
                  Upload Image
                </label>
              </div>
              {file && <p className="text-success">Image has been uploaded</p>}
            </div>
          </div>
        </section>
        <div className=" d-flex justify-content-end mt-2">
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRent;
