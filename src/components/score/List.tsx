'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { Score } from '@/services/score';
import { device } from '@/styles/mixin';

type Props = {
  scoreList: Score[];
};

// 2마디 = 동기 = motive
// 4마디 = 작은악절 = Phrase
// 8마디 = 큰악절 = period, sentence

function ScoreList({ scoreList }: Props) {
  return (
    <StyledScoreList>
      {scoreList.map((score) => {
        return (
          <div key={score.slug} className="score-item">
            <Link href={`/score/${score.slug}`} className="title">
              {score.artist} - {score.title}
            </Link>
          </div>
        );
      })}
    </StyledScoreList>
  );
}

const StyledScoreList = styled.div`
  display: grid;
  .score-item {
    padding: 30px 0;
    border-bottom: 1px solid #dddddd;
    &:first-child {
      border-top: 1px solid #dddddd;
    }
    .title {
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
