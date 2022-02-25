import React from 'react';
import styled from 'styled-components';
import { useQueryClient } from 'react-query';
import { useResults } from '../util/util';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 660px;
  background-color: #ffffff;
  border-radius: 42px;
  lint-height: 25.6px;
`;

const SearchedItem = styled.li`
  padding: 5px 0px 5px 5px;
  margin-bottom: 5px;
  border-bottom: 1px solid #efefef;
  list-style: none;
  &:hover {
    background: #cae9ff;
    color: #ffffff;
  }
  cursor: pointer;
`;

const ResultHeader = styled.span`
  font-size: 0.8rem;
  color: #3b3b3b;
`;

const ResultField = ({ inputValue, setInputValue }) => {
  const queryClient = useQueryClient();

  const { status, data, error } = useResults(inputValue);

  const onHandleList = name => {
    setInputValue(name);
  };

  const getDataByStatus = () => {
    switch (status) {
      case 'loading':
        return <div>Loading</div>;
      case 'error':
        return <span>Error: {error.message}</span>;
      default:
        return (
          <ul>
            <ResultHeader>추천 검색어</ResultHeader>
            {data?.map(item => {
              return (
                <SearchedItem
                  key={item.id}
                  value={item.name}
                  onClick={() => onHandleList(item.name)}
                >
                  {item.name}
                </SearchedItem>
              );
            })}
          </ul>
        );
    }
  };

  return data ? <Wrapper>{getDataByStatus()}</Wrapper> : null;
};

export default ResultField;
