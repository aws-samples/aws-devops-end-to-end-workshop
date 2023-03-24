import React from "react";
import { useParams } from 'react-router-dom';

export const withRouter = (WrappedComponent: any) => (props: any) => {
  const params = useParams();
 
  return (
    <WrappedComponent
      {...props}
      params={params}
    />
  );
};