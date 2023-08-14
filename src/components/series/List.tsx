'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { SeriesType } from '@/services/post';
import { device } from '@/styles/mixin';

interface Props {
  series: SeriesType[];
}

function SeriesList({ series }: Props) {
  return (
    <StyledSeriesList>
      {series.map((item) => {
        return (
          <div key={item.index} className="series-item">
            <Link href={`/series/${item.index}`}>
              # {item.series} ({item.count})
            </Link>
          </div>
        );
      })}
    </StyledSeriesList>
  );
}

const StyledSeriesList = styled.div`
  display: grid;
  row-gap: 12px;
  .series-item {
    a {
      font-weight: 500;
      font-size: 20px;
      &:hover {
        color: #1f883d;
      }
    }
  }
  @media ${device.mobile} {
    a {
      font-size: 16px;
    }
  }
`;

export default SeriesList;
