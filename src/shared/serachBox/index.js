import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const SearchBox = function () {
  const onSubmit = (e) => {
    e.preventDefault();
    history.push(`/results/${value}`);
  };

  const [value, setValue] = useState('');

  const history = useHistory();

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <input
              type="text"
              onChange={onChange}
        />
        <Button type="submit" />
      </Form>
    </Container>
  );
};

const Container = styled.div`

`;

const Form = styled.form`
  display: flex;
`;

const Button = styled.div`
    width: 64px;
  height: 40px;
`;

export default SearchBox;
