import {
  PaperAirplaneIcon,
  PaperClipIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Dropzone from "react-dropzone";

function MessageFormUI({ setAttachment, message, handleChange, handleSubmit }) {
    const [preview,setPreview] =useState("")
  return (
    <div className="message-form-container">
      {preview && (
        <div className="message-form-preview">
          <img
            src={preview}
            onLoad={() => URL.revokeObjectURL(preview)}
            alt=""
            className="message-form-preview"
          />
          <XMarkIcon
            className="message-form-icon-x"
            onClick={() => {
              setPreview("");
              setAttachment("");
            }}
          />
        </div>
      )}
      <div className="message-form">
        <div className="message-form-input-container">
          <input
            type="text"
            className="message-form-input"
            value={message}
            onChange={handleChange}
            placeholder="send message ..."
          />
        </div>
        <div className="message-form-icons">
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            onClick={true}
            onDrop={(acceptedFiles) => {
              setAttachment(acceptedFiles[0]);
              setPreview(URL.createObjectURL(acceptedFiles[0]));
            }}
          >
            {({ getRootProps, getInputProps, open }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <PaperClipIcon
                  className="message-form-icon-clip"
                  onClick={open}
                />
              </div>
            )}
          </Dropzone>
          <hr className="vertical-line" />
          <PaperAirplaneIcon
            className="message-form-icon-airplane"
            onClick={() => {
              setPreview("");
              handleSubmit();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default MessageFormUI;
