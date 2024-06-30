import { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import axios from "axios";
// import { storage } from "../../firebase";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import $ from "jquery";

window.jQuery = window.$ = $;
require("jquery-nice-select");

const CreateNewContent = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputRoyality, setInputRoyality] = useState("");
  const [inputNoOfCopies, setInputNoOfCopies] = useState("");
  const [inputImage, setInputImage] = useState("img/bg-img/17.jpg");
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [termsAgreed, setTermsAgreed] = useState(false);

  const [fileValid, setFileValid] = useState(true);
  const [priceValid, setPriceValid] = useState(true);
  const [titleValid, setTitleValid] = useState(true);
  const [descriptionValid, setDescriptionValid] = useState(true);
  const [royalityValid, setRoyalityValid] = useState(true);
  const [noOfCopiesValid, setNoOfCopiesValid] = useState(true);
  const [previewImageFileTypeValid, setPreviewImageFileTypeValid] = useState(true);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setFile(file);
      setFileValid(true);

      if (file.type === 'application/pdf') {
        computeSHA256(file);
      }
    } else {
      setFile(null);
      setFileValid(false);
    }
  };

  const computeSHA256 = (file) => {
    const reader = new FileReader();
    reader.onload = async (event) => {
        const arrayBuffer = event.target.result;
        const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        console.log('SHA256 Hash:', hashHex);
    };
    reader.readAsArrayBuffer(file);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setInputImage(fileReader.result);
        setPreviewImageFileTypeValid(true);
      };
      fileReader.readAsDataURL(file);
    } else {
      setInputImage("img/bg-img/17.jpg");
      setPreviewImageFileTypeValid(false);
    }
  };

  const handleUpload = async (event) => {
    event.preventDefault(); // Prevent default form submission

    if (!file) {
      setFileValid(false);
      return;
    }

    let validSubmission = true;

    const isPositiveNumber = /^[0-9]*\.?[0-9]+$/;
    const isPositiveInteger = /^\d+$/;

    if (
      !isPositiveNumber.test(inputPrice.trim()) ||
      parseFloat(inputPrice.trim()) <= 0
    ) {
      setPriceValid(false);
      validSubmission = false;
    } else {
      setPriceValid(true);
    }

    if (!inputTitle.trim()) {
      setTitleValid(false);
      validSubmission = false;
    } else {
      setTitleValid(true);
    }

    if (!inputDescription.trim()) {
      setDescriptionValid(false);
      validSubmission = false;
    } else {
      setDescriptionValid(true);
    }

    if (
      !isPositiveNumber.test(inputRoyality.trim()) ||
      parseFloat(inputRoyality.trim()) <= 0
    ) {
      setRoyalityValid(false);
      validSubmission = false;
    } else {
      setRoyalityValid(true);
    }

    if (
      !isPositiveInteger.test(inputNoOfCopies.trim()) ||
      parseInt(inputNoOfCopies.trim(), 10) <= 0
    ) {
      setNoOfCopiesValid(false);
      validSubmission = false;
    } else {
      setNoOfCopiesValid(true);
    }

    if (!termsAgreed) {
      alert("You must agree to the terms and conditions to proceed.");
      validSubmission = false;
    }

    if (!validSubmission) return;

    // if (file) {
    //   const storageRef = ref(storage, `files/${file.name}`);
    //   const uploadTask = uploadBytesResumable(storageRef, file);

    //   uploadTask.on('state_changed',
    //     (snapshot) => {
    //       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //       setUploadProgress(progress);
    //     },
    //     (error) => {
    //       console.error('Error uploading file: ', error);
    //     },
    //     () => {
    //       // Upload completed successfully, get download URL
    //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //         console.log('File available at: ', downloadURL);
    //       }).catch((error) => {
    //         console.error('Error getting download URL: ', error);
    //       });
    //     }
    //   );
    // }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', inputTitle);
    formData.append('darkblock_description', inputDescription);
    // formData.append('nft_contract', 'Your_NFT_Contract_Address');
    formData.append('nft_token', 'Your_NFT_Token_ID');
    formData.append('creator_address', 'HA9LMqhmy2cUsxfTvmnd2X5Zh4fuyizEhCEZsQJXrM2o');
    formData.append('nft_platform', 'Solana');
    formData.append('nft_standard', 'Metaplex');
    formData.append('apiKey', 'Your_API_Key');

    try {
      const response = await axios.post('https://api.darkblock.io/v1/darkblock/upgrade', formData, {
        headers: formData.getHeaders()
      });
      const data = response.data;
      console.log('File uploaded successfully:', data);
      setUploadProgress(100);
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadProgress(0);
    }
  };

  const selectCata = useRef();

  useEffect(() => {
    $(selectCata.current).niceSelect();
  }, []);

  return (
    <div className="create-new-wrapper">
      <div className="container">
        <div className="row g-5 justify-content-center">
          <div className="col-12 col-lg-8">
            {/* Create New Form */}
            <div className="create-new-form border shadow-sm p-4 p-sm-5">
              <h2 className="mb-4">Create New Study NFT Pass</h2>

              <Form onSubmit={handleUpload}>
                <div className="row align-items-center">
                  {/* Upload Files */}
                  <div className="col-12">
                    <Form.Group className="mb-4">
                      <Form.Label className="mb-2 fz-16">
                        Upload Files
                      </Form.Label>
                      <Form.Control
                        className="bg-transparent"
                        id="formFileMultiple"
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        isInvalid={!fileValid}
                      />
                      {!fileValid && (
                        <Form.Control.Feedback type="invalid">
                          Please select a file to upload.
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </div>

                  {/* Upload Preview Image */}
                  <div className="col-12">
                    <Form.Group className="mb-4">
                      <Form.Label className="mb-2 fz-16">
                        Upload Preview Image
                      </Form.Label>
                      <Form.Control
                        className="bg-transparent"
                        id="formImageMultiple"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                      {!previewImageFileTypeValid && (
                        <Form.Text className="text-danger">
                          Please upload a valid image file (e.g., JPEG, PNG).
                        </Form.Text>
                      )}
                    </Form.Group>
                  </div>

                  {/* Checkbox */}
                  <div className="col-12">
                    <Form.Group className="mb-4">
                      <Form.Check
                        inline
                        type="radio"
                        label="Fixed price"
                        id="fixedPrice"
                        name="inlineRadioOptions"
                        defaultChecked
                      />

                      <Form.Check
                        inline
                        type="radio"
                        label="Smart price"
                        id="UnlockPurchased"
                        name="inlineRadioOptions"
                      />
                    </Form.Group>
                  </div>

                  {/* Title */}
                  <div className="col-12">
                    <Form.Group className="mb-4">
                      <Form.Label className="mb-2 fz-16">Title</Form.Label>
                      <Form.Control
                        id="title"
                        type="text"
                        placeholder="Enter a title"
                        value={inputTitle}
                        onChange={(e) => setInputTitle(e.target.value)}
                        isInvalid={!titleValid}
                      />
                      {!titleValid && (
                        <Form.Control.Feedback type="invalid">
                          Please enter title.
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </div>

                  {/* Description */}
                  <div className="col-12">
                    <Form.Group className="mb-4">
                      <Form.Label className="mb-2 fz-16">
                        Description
                      </Form.Label>
                      <Form.Control
                        id="description"
                        as="textarea"
                        placeholder="Write short description"
                        value={inputDescription}
                        onChange={(e) => setInputDescription(e.target.value)}
                        isInvalid={!descriptionValid}
                      />
                      {!descriptionValid && (
                        <Form.Control.Feedback type="invalid">
                          Please enter a description.
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </div>

                  {/* Price */}
                  <div className="col-12 col-md-6">
                    <Form.Group className="mb-4">
                      <Form.Label className="mb-2 fz-16">
                        Price (SOL)
                      </Form.Label>
                      <Form.Control
                        id="price"
                        type="text"
                        placeholder="Enter a price in SOL"
                        value={inputPrice}
                        onChange={(e) => setInputPrice(e.target.value)}
                        isInvalid={!priceValid}
                      />
                      {!priceValid && (
                        <Form.Control.Feedback type="invalid">
                          Please enter a valid price.
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </div>

                  {/* Category */}
                  <div className="col-12 col-md-6">
                    <h5>Categories</h5>
                    <select
                      ref={selectCata}
                      className="filter-select bg-gray w-100 mb-4"
                    >
                      <option value={1}>Slide</option>
                      <option value={2}>Exam Papers</option>
                      <option value={3}>Exercises</option>
                      <option value={4}>Books</option>
                      <option value={5}>Records</option>
                    </select>
                  </div>

                  {/* Starting Date */}
                  {/* <div className="col-12 col-sm-6">
                    <Form.Group className="mb-4">
                      <Form.Label className="mb-2 fz-16">
                        Starting Date
                      </Form.Label>
                      <Form.Control id="startingDate" type="date" />
                    </Form.Group>
                  </div> */}

                  {/* Ending Date */}
                  {/* <div className="col-12 col-sm-6">
                    <Form.Group className="mb-4">
                      <Form.Label className="mb-2 fz-16">
                        Ending Date
                      </Form.Label>
                      <Form.Control id="endingDate" type="date" />
                    </Form.Group>
                  </div> */}

                  {/* Royality */}
                  <div className="col-12 col-md-6">
                    <Form.Group className="mb-4">
                      <Form.Label className="mb-2 fz-16">
                        Royality (%)
                      </Form.Label>
                      <Form.Control
                        id="royality"
                        type="text"
                        placeholder="Enter a royality in %"
                        value={inputRoyality}
                        onChange={(e) => setInputRoyality(e.target.value)}
                        isInvalid={!royalityValid}
                      />
                      {!royalityValid && (
                        <Form.Control.Feedback type="invalid">
                          Please enter a valid royality.
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </div>

                  {/* No of Copies */}
                  <div className="col-12 col-md-6">
                    <Form.Group className="mb-4">
                      <Form.Label className="mb-2 fz-16">
                        No of copies
                      </Form.Label>
                      <Form.Control
                        id="noOfcopies"
                        type="text"
                        placeholder="Enter a number of copies"
                        value={inputNoOfCopies}
                        onChange={(e) => setInputNoOfCopies(e.target.value)}
                        isInvalid={!noOfCopiesValid}
                      />
                      {!noOfCopiesValid && (
                        <Form.Control.Feedback type="invalid">
                          Please enter a valid number.
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </div>

                  {/* Size */}
                  {/* <div className="col-12 col-sm-6 col-lg-4">
                    <Form.Group className="mb-4">
                      <Form.Label className="mb-2 fz-16">Size</Form.Label>
                      <Form.Control id="size" type="text" placeholder="20MB" />
                    </Form.Group>
                  </div> */}

                  {/* Agree with Terms */}
                  <div className="col-12 col-md-8">
                    <Form.Check
                      className="mb-4 mb-md-0"
                      type="checkbox"
                      label="I agree to all terms & conditions."
                      id="rememberMe"
                      checked={termsAgreed}
                      onChange={() => setTermsAgreed(!termsAgreed)}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 col-md-4">
                    <button
                      className="btn btn-primary rounded-pill w-100"
                      onClick={handleUpload}
                      type="submit"
                    >
                      Create
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>

          <div className="col-12 col-sm-8 col-lg-4">
            {/* Preview Card */}
            <div className="nft-card card shadow-sm">
              <div className="card-body">
                <div className="img-wrap">
                  <img src={inputImage} alt="Preview" />

                  {/* Badge */}
                  <div className="badge bg-dark position-absolute">
                    <img src="img/core-img/fire.png" alt="" />
                    Featured
                  </div>
                </div>

                {/* Others Info */}
                <div className="row gx-2 align-items-center mt-3">
                  <div className="col-8">
                    <span className="d-block fz-12">
                      <i className="bi bi-arrow-up" />
                      Floor price {inputPrice} SOL
                    </span>
                  </div>
                  <div className="col-4 text-end">
                    <button className="wishlist-btn" type="button">
                      <i className="bi" />
                    </button>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="row gx-2 align-items-center mt-2">
                  <div className="col-8">
                    <div className="name-info d-flex align-items-center">
                      <div className="author-img position-relative">
                        <img
                          className="shadow"
                          src="img/bg-img/u1.jpg"
                          alt=""
                        />
                        <i className="bi bi-check position-absolute bg-success" />
                      </div>
                      <div className="name-author">
                        <Link
                          className="name d-block hover-primary text-truncate"
                          to="#"
                        >
                          {inputTitle}
                        </Link>
                        <Link
                          className="author d-block fz-12 hover-primary text-truncate"
                          to="#"
                        >
                          @creative_art
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="price text-end">
                      <span className="fz-12 d-block">Current Bid</span>
                      <h6 className="mb-0">{inputPrice} SOL</h6>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div className="row gx-2 align-items-center mt-3">
                  <div className="col-6">
                    <Link
                      className="btn btn-primary btn-sm rounded-pill"
                      to="#"
                    >
                      Place bid
                    </Link>
                  </div>
                  <div className="col-6 text-end">
                    <Link
                      className="btn btn-minimal btn-sm hover-primary"
                      to="#"
                    >
                      <i className="bi bi-activity me-1" />
                      Activity
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <h5 className="mb-0 mt-3 text-center">
              <i className="bi bi-eye me-1" />
              Live Preview
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;
