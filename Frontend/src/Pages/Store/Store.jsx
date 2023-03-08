import axios from "axios";
import React, { useState } from "react";
import "./Store.css";
import { UserAuth } from "../../Utils/AuthContext";
import Cookies from "js-cookie";
function Store() {
  const options = {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
      "Content-Type": "application/json",
    },
  };
  const { auth } = UserAuth();
  const [selectedFile, setSelectedFile] = useState();
  const [created, setCreated] = useState(false);
  const [storeInfo, setStoreInfo] = useState({
    name: "",
    price: "",
    category: "",
  });

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStoreInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    //
    e.preventDefault();

    try {
      const { data, status } = await axios.get(
        `${import.meta.env.VITE_APP_URL}auth`,
        {
          headers: { Authorization: `Bearer ${Cookies.get("token")}` },
        }
      );
      if (status === 200) {
        try {
          const getStore = await axios.post(
            `${import.meta.env.VITE_APP_URL}store`,
            {},
            {
              headers: {
                Authorization: `Bearer ${Cookies.get("token")}`,
                "Content-Type": "application/json",
              },
            }
          );
        } catch (error) {
          if (error.response.status === 409) {
            try {
              const postItem = await axios.post(
                `${import.meta.env.VITE_APP_URL}store/item`,
                storeInfo,
                {
                  headers: {
                    Authorization: `Bearer ${Cookies.get("token")}`,
                    "Content-Type": "application/json",
                  },
                }
              );
              // updated with the image
              if (postItem.data.success === true) {
                // upload the image
                try {
                  const formData = new FormData();
                  formData.append("image", selectedFile);
                  const { data, status } = await axios({
                    method: "post",
                    url: `${import.meta.env.VITE_APP_URL}upload`,
                    data: formData,
                  });

                  if (data) {
                    const updateItem = axios.put(
                      `${import.meta.env.VITE_APP_URL}store/item/${
                        postItem.data.data.id
                      }`,
                      {
                        imageUrl: data.fileDestination,
                      },
                      options
                    );
                  }
                } catch (error) {
                  console.log(error);
                }
              }

              setCreated(true);
            } catch (error) {}
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="store container p-5 ">
      <h2 className="text-center mb-5">Welcome to SkyCart</h2>
      <h5 className="text-center">Create an Item</h5>
      <div>
        <form className=" store__form" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label for="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              name="name"
              value={storeInfo.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label for="price" className="form-label">
              Price
            </label>
            <input
              type="text"
              className="form-control"
              id="Price"
              value={storeInfo.price}
              name="price"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2">
            <label for="category" className="form-label">
              Category
            </label>
            <input
              className="form-control"
              list="datalistOptions"
              id="category"
              placeholder="Type to search..."
              value={storeInfo.category}
              onChange={handleChange}
              name="category"
              required
            />
            <datalist id="datalistOptions">
              <option value="mobile" />
              <option value="Laptop" />
              <option value="Watches" />
              <option value="Accessories" />
            </datalist>
          </div>
          <div className="mb-4">
            <label for="file" className="form-label">
              Upload file
            </label>
            <input
              type="file"
              className="form-control"
              id="file"
              required
              onChange={changeHandler}
            />
          </div>

          <button type="submit " className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Store;
