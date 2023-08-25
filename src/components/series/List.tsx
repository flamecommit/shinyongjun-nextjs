'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { HiOutlineHashtag } from '@react-icons/all-files/hi/HiOutlineHashtag';
import { device } from '@/styles/mixin';
import { config } from '@/styles/config';
import { TSeries } from '@/types/post';

interface Props {
  series: TSeries[];
}

function SeriesList({ series }: Props) {
  return (
    <StyledSeriesList>
      {series.map((item) => {
        return (
          <div key={item.index} className="series-item">
            <Link href={`/series/${item.index}`} className="title">
              <HiOutlineHashtag />
              {item.series} ({item.count})
            </Link>
          </div>
        );
      })}
    </StyledSeriesList>
  );
}

const StyledSeriesList = styled.div`
  display: grid;
  row-gap: 24px;
  .series-item {
    a {
      display: flex;
      align-items: center;
      column-gap: 6px;
      font-weight: 500;
      font-size: 20px;
      &:hover {
        color: ${config.hoverText};
        text-decoration: underline;
      }
    }
  }
  @media ${device.mobile} {
    .series-item {
      a {
        font-size: 16px;
      }
    }
  }
`;

export default SeriesList;
