'use client';

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Score } from '@/services/score';
import { device } from '@/styles/mixin';
import ScoreList from './List';
import CommonSearch from '../common/Search';
import CommonPagination from '../common/Pagination';

type Props = {
  scoreList: Score[];
};

// 2마디 = 동기 = motive
// 4마디 = 작은악절 = Phrase
// 8마디 = 큰악절 = period, sentence

function ScoreListWrapper({ scoreList }: Props) {
  const ITEM_PER_PAGE = 10;

  const [displayList, setDisplayList] = useState<Score[]>([...scoreList]);
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    // Keyword 검색 시 Origin List 에서 검색 후 결과 개수 상관없이 전부 노출.
    if (searchKeyword) {
      const searchResult = scoreList.filter((score) => {
        return (
          score.artist.includes(searchKeyword) ||
          score.title.includes(searchKeyword)
        );
      });
      setDisplayList(searchResult);
    } else {
      const startIndex = (currentPage - 1) * ITEM_PER_PAGE;
      const endIndex = startIndex + ITEM_PER_PAGE;
      const searchResult = scoreList.slice(startIndex, endIndex);
      setDisplayList(searchResult);
    }
  }, [searchKeyword, scoreList, currentPage]);

  return (
    <StyledScoreListWrapper>
      <CommonSearch setSearchKeyword={setSearchKeyword} />
      <ScoreList scoreList={displayList} />
      {!searchKeyword && (
        <CommonPagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalCount={scoreList.length}
        />
      )}
    </StyledScoreListWrapper>
  );
}

const StyledScoreListWrapper = styled.div`
  display: grid;
  row-gap: 24px;
  .score-item {
    .title {
      display: flex;
      align-items: center;
      column-gap: 6px;
      font-weight: 500;
      font-size: 20px;
      &:hover {
        color: #1f883d;
      }
    }
  }
  @media ${device.mobile} {
    .score-item {
      .title {
        font-size: 16px;
      }
    }
  }
`;

export default ScoreListWrapper;
