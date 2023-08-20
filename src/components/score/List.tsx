'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { IoIosMusicalNotes } from '@react-icons/all-files/io/IoIosMusicalNotes';
import { Score } from '@/services/score';
import { device } from '@/styles/mixin';
import CommonEmpty from '../common/Empty';

type Props = {
  scoreList: Score[];
};

// 2마디 = 동기 = motive
// 4마디 = 작은악절 = Phrase
// 8마디 = 큰악절 = period, sentence

function ScoreList({ scoreList }: Props) {
  return (
    <StyledScoreList>
      {scoreList.length ? (
        scoreList.map((score) => {
          return (
            <div key={score.slug} className="score-item">
              <Link href={`/score/${score.slug}`} className="title">
                <IoIosMusicalNotes />
                {score.artist} - {score.title}
              </Link>
            </div>
          );
        })
      ) : (
        <CommonEmpty>검색 결과가 없습니다.</CommonEmpty>
      )}
    </StyledScoreList>
  );
}

const StyledScoreList = styled.div`
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

export default ScoreList;
