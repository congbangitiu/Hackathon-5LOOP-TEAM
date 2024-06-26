import {useEffect, useRef, useState} from "react";
import Form from "react-bootstrap/Form";

import $ from "jquery";

window.jQuery = window.$ = $;
require("jquery-nice-select");

const CreateNewContent = () => {
  const [inputTitle, setInputTitle] = useState("OOAD IU #8543");
  const [inputImage, setInputImage] = useState("img/bg-img/17.jpg");
  const ImagehandleChange = (event) => {
    setInputImage(URL.createObjectURL(event.target.files[0]));
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
              <h2 className="mb-4">Create New AI Conversation</h2>

              <Form>
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
                        onChange={ImagehandleChange}
                      />
                    </Form.Group>
                  </div>

                  {/* Checkbox */}
                  <div className="col-12">
                    <Form.Group className="mb-4">
                      <Form.Check
                        inline
                        type="radio"
                        label="Summarizing"
                        id="fixedPrice"
                        name="inlineRadioOptions"
                        defaultChecked
                      />

                      <Form.Check
                        inline
                        type="radio"
                        label="Explaining"
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
                        value={inputTitle}
                        onChange={(e) => setInputTitle(e.target.value)}
                      />
                    </Form.Group>
                  </div>

                  {/* Description */}
                  <div className="col-12">
                    <Form.Group className="mb-4">
                      <Form.Label className="mb-2 fz-16">Prompt</Form.Label>
                      <Form.Control
                        id="description"
                        as="textarea"
                        placeholder="Write short prompt to tell AI which part you need to focus more on"
                      />
                    </Form.Group>
                  </div>

                  {/* Catagory */}
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

                  {/* Ending Date */}
                  <div className="col-12 col-sm-6">
                    <Form.Group className="mb-4">
                      <Form.Label className="mb-2 fz-16">
                        Your exam date
                      </Form.Label>
                      <Form.Control id="endingDate" type="date" />
                    </Form.Group>
                  </div>

                  {/* Agree with Terms */}
                  <div className="col-12 col-md-8">
                    <Form.Check
                      className="mb-4 mb-md-0"
                      type="checkbox"
                      label="I agree to all terms & conditions."
                      id="rememberMe"
                      defaultChecked
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 col-md-4">
                    <button
                      className="btn btn-primary rounded-pill w-100"
                      type="submit"
                    >
                      Create
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;
