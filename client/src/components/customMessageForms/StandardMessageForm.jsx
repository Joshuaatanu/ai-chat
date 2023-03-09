import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

function StandardMessageForm() {
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");
  const [preview, setPreview] = useState("");

  const handleChange = (e) => setMessage(e.target.value);

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
      </div>
    </div>
  );
}

export default StandardMessageForm;
