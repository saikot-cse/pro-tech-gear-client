import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
  useEffect(() => {
    document.title = "Loading";
    document.body.style.background = "#2b2f32";
  }, []);
  return (
    <div
      style={{ height: "300px" }}
      className="w-100 d-flex justify-content-center align-items-center"
    >
      <Spinner animation="border" variant="warning" />
    </div>
  );
};

export default Loading;