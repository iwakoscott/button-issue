import React from 'react';
import { Button } from '@material-ui/core';

export function Form({ onSubmitEmail }) {
  const submitHandler = event => {
    event.preventDefault();
    onSubmitEmail(event.target.elements[0].value);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="email-input">Email:</label>
      <input type="text" id="email-input" />
      <Button type="submit">Submit</Button>
    </form>
  );
}
