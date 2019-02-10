import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { Form } from './Form';

afterEach(cleanup);

describe(`<App />`, () => {
  it(`submits an email`, () => {
    const fakeHandler = jest.fn();
    const fakeEmail = 'fake@email.com';
    const { getByLabelText, getByText } = render(
      <Form onSubmitEmail={fakeHandler} />
    );

    const inputNode = getByLabelText(/email/i);
    const buttonNode = getByText(/submit/i);
    fireEvent.change(inputNode, { target: { value: fakeEmail } });
    expect(inputNode.value).toBe(fakeEmail);

    fireEvent.click(buttonNode);
    expect(fakeHandler).toHaveBeenCalledTimes(1);
  });
});
