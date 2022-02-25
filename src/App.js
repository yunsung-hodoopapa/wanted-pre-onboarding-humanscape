import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import GlobalStyle from './view/GlobalStyle';
import Layout from './view/Layout';
import HeadLine from './components/HeadLine';
import InputField from './components/InputField';
import ResultField from './components/ResultField';
import { QueryClientProvider, QueryClient } from 'react-query';
import { debounce } from './util/util';

const queryClient = new QueryClient();

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 29px 20px;
  max-width: 700px;
  width: 700px;
  padding: 20px 0px;
`;

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const onChangeInput = useCallback(
    e => {
      debounce(setInputValue(e.target.value), 500);
    },
    [inputValue],
  );

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Layout>
        <Container>
          <HeadLine />
          <InputField onChangeInput={onChangeInput} inputValue={inputValue} />
          <br />
          <ResultField inputValue={inputValue} setInputValue={setInputValue} />
        </Container>
      </Layout>
    </QueryClientProvider>
  );
};

export default App;
