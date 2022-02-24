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
        국매임상시험 검색하고 온라인으로 참여하기
      </HeaderContainer>
    </>
  );
};

export default HeadLine;
