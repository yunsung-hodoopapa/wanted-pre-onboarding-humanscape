import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 34px;
  line-height: 1.6;
`;

const HeadLine = () => {
  return (
    <>
      <HeaderContainer>
        질환을 검색해보세요
      </HeaderContainer>
    </>
  );
};

export default HeadLine;
