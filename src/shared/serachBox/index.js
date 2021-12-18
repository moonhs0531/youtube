import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { SearchIcon } from '../../icons';

const [value, setValue] = useState('');

const onSubmit = (e) => {
  e.preventDefault();
  history.push(`/results/${value}`);
  console.log(e);
};

const history = useHistory();

const onChange = (event) => {
  setValue(event.target.value);
};

const SearchBox = function () {
  return (
    <Container>
      <form onSubmit={onSubmit}>
        <input
            type="text"
            onChange={onChange}
        />
        <Button type="submit">
          <SearchIcon />
        </Button>
      </form>
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
