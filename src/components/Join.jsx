import React from 'react';

import {
  useParams
} from "react-router-dom";

import { Icon, Step } from 'semantic-ui-react'

function Join() {
  let { id } = useParams();
  return (
    <>
    <h3>Join: {id}</h3>
    <Step.Group>
      <Step>
        <Icon name='truck' />
        <Step.Content>
          <Step.Title>Shipping</Step.Title>
          <Step.Description>Choose your shipping options</Step.Description>
        </Step.Content>
      </Step>

      <Step active>
        <Icon name='payment' />
        <Step.Content>
          <Step.Title>Billing</Step.Title>
          <Step.Description>Enter billing information</Step.Description>
        </Step.Content>
      </Step>

      <Step disabled>
        <Icon name='info' />
        <Step.Content>
          <Step.Title>Confirm Order</Step.Title>
        </Step.Content>
      </Step>
    </Step.Group>
  </>
  );
}

export default Join;
