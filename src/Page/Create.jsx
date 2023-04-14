import React, { useState } from "react";
import "../assets/Css/Create.css";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Create() {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [
        {
          header: [1, 2, 3, 4, 5, 6, false],
        },
      ],
      [
        {
          font: [],
        },
      ],
      [
        {
          size: [],
        },
      ],
      ["bold", "italic", "underline", "blockquote", ],
      [{list:"ordered"},
      {list:"bullet"},
      {indent:"-1"},
      {indent:"+1"}],
      ["link", "image","video"]
    ],
  };

  return (
    <div className="box-cointainer">
      <div className="img">
        {/* <img style={{ margin: "auto" }} src={imgbanner} alt="banner" /> */}
      </div>
      <div className="form">
        {/* <div className="title">Welcome</div> */}
        <div className="subtitle">Add your Pdf and details</div>
        <div className="input-container ic1">
          <input id="" className="input" type="text" placeholder=" " />
          <div className="cut"></div>
          <label htmlFor="firstname" className="placeholder">
            Title
          </label>
        </div>
        <div className="input-container ic2">
          <input id="lastname" className="input" type="text" placeholder=" " />
          <div className="cut"></div>
          <label htmlFor="lastname" className="placeholder">
            Sub Title
          </label>
        </div>
        <div className="textarea-container ic2">
          <textarea id="lastname" className="input" type="text" placeholder=" " />
          <div className="cut"></div>
          <label htmlFor="lastname" className="placeholder">
            Description
          </label>
        </div>
        <div className="input-container ic2">
          <input id="email" className="input" type="file" placeholder=" " />
          <div className="cut cut-short"></div>
          <label htmlFor="email" className="placeholder">
            Trumnail Image
          </label>
        </div>
        <div className="input-container ic2">
          <input id="email" className="input" type="file" placeholder=" " />
          <div className="cut cut-short"></div>
          <label htmlFor="email" className="placeholder">
            Upload pdf
          </label>
        </div>
        <div className="input-container ic2">
          <input id="email" className="input" type="name" placeholder=" " />
          <div className="cut cut-short"></div>
          <label htmlFor="email" className="placeholder">
            PDF name
          </label>
        </div>
        <div className="input-container ic2">
          <input id="email" className="input" type="text" placeholder=" " />
          <div className="cut cut-short"></div>
          <label htmlFor="email" className="placeholder">
            url
          </label>
        </div>
        <div className="input-container ic2">
          <select id="email" className="input" placeholder=" ">
            <option value="volvo" className="option">
              --Select--
            </option>
            <option value="volvo">Automobile</option>
            <option value="saab">Business</option>
            <option value="mercedes">Education</option>
            <option value="audi">Government</option>
          </select>
          <div className="cut cut-short"></div>
          <label htmlFor="email" className="placeholder">
            Category
          </label>
        </div>
        <div className="subtitle ic2">Main cotent</div>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          className="quil "
          />

          {/* <div dangerouslySetInnerHTML={{ _html:value }} /> */}
        <button type="text" className="submit">
          submit
        </button>
          </div>
    </div>
  );
}

export default Create;