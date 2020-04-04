import React from 'react';

import {
  useParams
} from "react-router-dom";
import cookie from 'cookie'
import { Icon, Step } from 'semantic-ui-react'
function Start() {
  document.cookie=cookie.serialize('comuniappAuth', 'hey')
  return <h3>Create new community</h3>;
}

export default Start;
