'use client';

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Score } from '@/services/score';
import ScoreList from './List';
import CommonSearch from '../common/Search';
import CommonPagination from '../common/Pagination';
import CommonSpinner from '../common/Spinner';
import { PAGE_LIST_SIZE } from '@/constants/score';

type Props = {
  scoreList: Score[];
};

// 2마디 = 동기 = motive
// 4마디 = 작은악절 = Phrase
// 8마디 = 큰악절 = period, sentence

function ScoreListWrapper({ scoreList }: Props) {
  const [isMounted, setIsMounted] = useState(false);
  const [displayList, setDisplayList] = useState<Score[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    // Keyword 검색 시 Origin List 에서 검색 후 결과 개수 상관없이 전부 노출.
    if (searchKeyword) {
      const searchResult = scoreList.filter((score) => {
        const displayTitle = `${score.artist} - ${score.title}`;
        return displayTitle.includes(searchKeyword);
      });
      setDisplayList(searchResult);
    } else {
      const startIndex = (currentPage - 1) * PAGE_LIST_SIZE;
      const endIndex = startIndex + PAGE_LIST_SIZE;
      const searchResult = scoreList.slice(startIndex, endIndex);
      setDisplayList(searchResult);
    }
    setIsMounted(true);
  }, [scoreList, searchKeyword, currentPage]);

  return (
    <StyledScoreListWrapper>
      <CommonSearch setSearchKeyword={setSearchKeyword} />
      {isMounted ? (
        <>
          <ScoreList scoreList={displayList} />
          {!searchKeyword && (
            <CommonPagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalCount={scoreList.length}
            />
          )}
        </>
      ) : (
        <CommonSpinner />
      )}
    </StyledScoreListWrapper>
  );
}

const StyledScoreListWrapper = styled.div`
  display: grid;
  row-gap: 24px;
`;

export default ScoreListWrapper;
