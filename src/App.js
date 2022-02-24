import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import Layout from './view/Layout';
import HeadLine from './components/HeadLine';
import InputField from './components/InputField';

import {
  QueryClient,
  QueryClient,
  QueryClientProvider,
  useQuery,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const QueryClient = new QueryClient();

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 290px 0px;
  max-width: 700px;
  width: 700px;
  padding: 20px 0px;
`;

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const onChangeInput = useCallback((e) => {
    setInputValue(e.target.value);
  }, [inputValue]);

  const onSubmit = () => {
    if (inputValue === "") {
      return;
    } 
    refetch();
  }


  const onHandleResults = () => {
    const mockup = [
      { name: "Klatskin's tumor", id: 125 },
      { name: '간세포암', id: 133 },
      { name: '갑상선암종', id: 187 },
      { name: '고환암', id: 335 },
      { name: '뼈암', id: 375 },
      { name: '구강암', id: 445 },
      { name: '치은암', id: 449 },
    ];
    const matched = mockup.filter(item => findMatchKeyword(item, inputValue));
    if (matched) {
      // dispatch(setResults(matched));
    }
  };

  const findMatchKeyword = (item, inputValue) => {
    const indexOfMatchedLetter = inputValue
      .toLowerCase()
      .indexOf(item.toLowerCase().subString(0, inputValue.length));
    if (inputValue === '') {
      return false;
    } else {
      if (indexOfMatchedLetter > 0) {
        return item;
      }
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Container>
          <HeadLine />
          <InputField onChange={onChange} inputValue={inputValue} onSubmit={onSubmit}/>
        </Container>
      </Layout>
    </QueryClientProvider>
  );
};

export default App;
