'use client';

import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/stores/store';

function DiaryGiscus() {
  const ref = useRef<HTMLDivElement>(null);
  const { currentDate } = useSelector((state: RootState) => state.diary);

  useEffect(() => {
    if (!ref.current || !currentDate || ref.current.hasChildNodes()) return;

    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://giscus.app/client.js';
    scriptElem.async = true;
    scriptElem.crossOrigin = 'anonymous';

    scriptElem.setAttribute('data-repo', 'shinyj1991/shinyongjun-nextjs');
    scriptElem.setAttribute('data-repo-id', 'R_kgDOKAn1Tg');
    scriptElem.setAttribute('data-category', 'General');
    scriptElem.setAttribute('data-category-id', 'DIC_kwDOKAn1Ts4CYhyN');
    scriptElem.setAttribute('data-mapping', 'title');
    scriptElem.setAttribute('data-strict', '1');
    scriptElem.setAttribute('data-reactions-enabled', '0');
    scriptElem.setAttribute('data-emit-metadata', '0');
    scriptElem.setAttribute('data-input-position', 'bottom');
    scriptElem.setAttribute('data-theme', 'light');
    scriptElem.setAttribute('data-lang', 'ko');

    ref.current.appendChild(scriptElem);
  }, [currentDate]);

  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      'iframe.giscus-frame',
    );
    iframe?.contentWindow?.postMessage(
      {
        giscus: { setConfig: { term: `shinyongjun | Diary - ${currentDate}` } },
      },
      'https://giscus.app',
    );
  }, [currentDate]);

  return <section ref={ref} />;
}

export default DiaryGiscus;
