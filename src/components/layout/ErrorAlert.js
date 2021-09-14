import React from "react";

const ErrorAlert = ({ errorMsg }) => {
  return (
    errorMsg !== null && (
      <div className='p-8 border border-0 border-red-500 text-gray-700'>
        {errorMsg}
      </div>
    )
  );
};

export default ErrorAlert;
