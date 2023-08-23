'use client';

import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { device } from '@/styles/mixin';

function Giscus() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://giscus.app/client.js';
    scriptElem.async = true;
    scriptElem.crossOrigin = 'anonymous';

    scriptElem.setAttribute('data-repo', 'shinyj1991/shinyongjun-nextjs');
    scriptElem.setAttribute('data-repo-id', 'R_kgDOKAn1Tg');
    scriptElem.setAttribute('data-category', 'General');
    scriptElem.setAttribute('data-category-id', 'DIC_kwDOKAn1Ts4CYhyN');
    scriptElem.setAttribute('data-mapping', 'pathname');
    scriptElem.setAttribute('data-strict', '1');
    scriptElem.setAttribute('data-reactions-enabled', '1');
    scriptElem.setAttribute('data-emit-metadata', '0');
    scriptElem.setAttribute('data-input-position', 'bottom');
    scriptElem.setAttribute('data-theme', 'light');
    scriptElem.setAttribute('data-lang', 'ko');

    ref.current.appendChild(scriptElem);
  }, []);

  return (
    <StyledGiscus>
      <section ref={ref} />
    </StyledGiscus>
  );
}

const StyledGiscus = styled.div`
  margin-top: 60px;
  @media ${device.mobile} {
    margin-top: 42px;
  }
`;

export default Giscus;
