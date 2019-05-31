import React from "react";

const Loading = ({isLoading, error}) => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    else if (error) {
      return <div>Sorry, there was a problem loading the page.{error}</div>;
    }
    else {
      return null;
    }
  };

  export default Loading;