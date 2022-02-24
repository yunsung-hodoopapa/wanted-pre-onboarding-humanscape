import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 660px;
  position: relative;
  background-color: #ffffff;
  border-radius: 42px;
  lint-height: 25.6px;
`;

const ResultField = () => {
  return <Wrapper>이것을 결과창이다!</Wrapper>;
};

export default ResultField;
