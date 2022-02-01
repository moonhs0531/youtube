import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { SearchIcon } from '../../icons';

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
        <Input
              type="text"
              onChange={onChange}
        />
        <Button type="submit">
          <SearchIcon />
        </Button>
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
  background-color: #888;
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg{
    width: 24px;
    height: 24px;
    fill: #fff;
  }
`;
const Input = styled.input`
    width: 492px;
  height: 40px;
  background-color: #222;
  border: 1px solid #888;
  outline: 0;
  color: #fff;
  padding: 8px;
  font-size: 16px;
`;
export default SearchBox;
