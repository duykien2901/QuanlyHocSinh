import { Result, Button } from "antd";
import { useHistory } from "react-router";

import React from "react";

function PageNotFound({ history }) {
  const goBack = () => {
    history.goBack();
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist or you don't have permission"
      extra={
        <Button type="primary" onClick={goBack}>
          Back Home
        </Button>
      }
    />
  );
}

export default PageNotFound;
