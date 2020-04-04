import React from 'react';

import {
  useParams
} from "react-router-dom";

function Share() {
  let { id } = useParams();
  return (
    <>
    <h3>Share: {id}</h3>
  </>
  );
}

export default Share;