'use client';

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { FiChevronsRight } from '@react-icons/all-files/fi/FiChevronsRight';
import { FiChevronLeft } from '@react-icons/all-files/fi/FiChevronLeft';
import { FiChevronsLeft } from '@react-icons/all-files/fi/FiChevronsLeft';
import { FiChevronRight } from '@react-icons/all-files/fi/FiChevronRight';
import { config } from '@/styles/config';
import { PAGE_GROUP_SIZE, PAGE_LIST_SIZE } from '@/constants/score';

type Props = {
  currentPage: number;
  totalCount: number;
  setCurrentPage: (page: number) => void;
};

function CommonPagination({ currentPage, totalCount, setCurrentPage }: Props) {
  const lastPage = Math.ceil(totalCount / PAGE_LIST_SIZE);
  const [currentGroupIndex, setCurrentGroupIndex] = useState<number>(0);
  const lastGroupIndex = Math.ceil(lastPage / PAGE_GROUP_SIZE) - 1;
  const [pageList, setPageList] = useState<number[]>([1]);

  useEffect(() => {
    const temp = [];
    const startPage = currentGroupIndex * PAGE_GROUP_SIZE + 1;
    const endPage =
      currentGroupIndex === lastGroupIndex
        ? lastPage
        : startPage + PAGE_GROUP_SIZE - 1;

    for (let i = startPage; i <= endPage; i++) {
      temp.push(i);
    }

    setPageList(temp);
  }, [currentGroupIndex, lastPage, lastGroupIndex]);

  useEffect(() => {
    setCurrentGroupIndex(Math.floor((currentPage - 1) / PAGE_GROUP_SIZE));
    window.scrollTo({
      top: 0,
    });
  }, [currentPage]);

  return (
    <StyledCommonPagination>
      <button type="button" onClick={() => setCurrentPage(1)}>
        <FiChevronsLeft />
      </button>
      <button
        type="button"
        onClick={() => {
          const prevGroupIndex =
            currentGroupIndex > 0 ? (currentGroupIndex - 1) * 5 + 5 : 1;
          setCurrentPage(prevGroupIndex);
        }}
      >
        <FiChevronLeft />
      </button>
      <div className="page-list">
        {pageList.map((page) => {
          return (
            <button
              type="button"
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`${currentPage === page && 'active'}`}
            >
              {page}
            </button>
          );
        })}
      </div>
      <button
        type="button"
        onClick={() => {
          const nextGroupIndex =
            currentGroupIndex < lastGroupIndex
              ? (currentGroupIndex + 1) * 5 + 1
              : lastPage;
          setCurrentPage(nextGroupIndex);
        }}
      >
        <FiChevronRight />
      </button>
      <button type="button" onClick={() => setCurrentPage(lastPage)}>
        <FiChevronsRight />
      </button>
    </StyledCommonPagination>
  );
}

const StyledCommonPagination = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  column-gap: 3px;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border: 1px solid ${config.primaryLine};
    &:hover,
    &.active {
      background-color: ${config.primaryBg};
    }
  }
  .page-list {
    display: flex;
    margin-inline: 12px;
    column-gap: 3px;
  }
`;

export default CommonPagination;
