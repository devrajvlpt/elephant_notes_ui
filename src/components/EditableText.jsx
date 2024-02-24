import React, { useState, useRef, useEffect } from 'react';

const EditableText = () => {
  const [text, setText] = useState('Click to edit');
  const [isEditing, setIsEditing] = useState(false);
  const textInputRef = useRef(null);

  const enableEditing = () => {
    setIsEditing(true);
  };

  const updateText = (event) => {
    setText(event.target.value);
  };

  const disableEditing = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Save changes on Enter key
      disableEditing();
    }if (event.key === 'Escape') {
      disableEditing();
    }
  };

  useEffect(() => {
    if (isEditing) {
      textInputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div  className={`editable px-2 ${isEditing ? 'active' : ''}`} onClick={enableEditing}>
      {isEditing ? (
        <input
          ref={textInputRef}
          type="text"
          value={text}
          onChange={updateText}
          onBlur={disableEditing}
          onKeyDown={handleKeyDown}
          className="border border-gray-500 p-0.5 outline-none w-full px-2 rounded-sm"
        />
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};

export default EditableText;
