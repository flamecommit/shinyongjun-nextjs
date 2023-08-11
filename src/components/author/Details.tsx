'use client';

import styled from 'styled-components';
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript';
import { SiSass } from '@react-icons/all-files/si/SiSass';
import { SiReact } from '@react-icons/all-files/si/SiReact';
import { SiNextDotJs } from '@react-icons/all-files/si/SiNextDotJs';
import { SiNodeDotJs } from '@react-icons/all-files/si/SiNodeDotJs';
import { SiGit } from '@react-icons/all-files/si/SiGit';
import { SiJquery } from '@react-icons/all-files/si/SiJquery';
import { SiNotion } from '@react-icons/all-files/si/SiNotion';
import { SiJira } from '@react-icons/all-files/si/SiJira';
import { SiConfluence } from '@react-icons/all-files/si/SiConfluence';
import { SiAzuredevops } from '@react-icons/all-files/si/SiAzuredevops';
import { SiRedux } from '@react-icons/all-files/si/SiRedux';
import Figma from '@/assets/icons/figma.svg';
import VSCode from '@/assets/icons/vscode.svg';
import Gmail from '@/assets/icons/gmail.svg';
import Photoshop from '@/assets/icons/photoshop.svg';
import Vue from '@/assets/icons/vue.svg';
import Nuxt from '@/assets/icons/nuxt.svg';
import Css from '@/assets/icons/css.svg';
import Html from '@/assets/icons/html.svg';
import Javascript from '@/assets/icons/javascript.svg';
import Zeplin from '@/assets/icons/zeplin.svg';
import { device } from '@/styles/mixin';

function AuthorDetails() {
  return (
    <StyledAuthorDetails>
      <section>
        <h3 className="section-title">Stacks</h3>
        <div className="item-list">
          <div className="item">
            <img src={Html.src} alt="" />
            HTML
          </div>
          <div className="item">
            <img src={Css.src} alt="" />
            CSS
          </div>
          <div className="item">
            <SiSass style={{ color: '#C66394' }} />
            SASS
          </div>
          <div className="item">
            <img src={Javascript.src} alt="" />
            Javascript
          </div>
          <div className="item">
            <SiTypescript style={{ color: '#2F74C0' }} />
            Typescript
          </div>
          <div className="item">
            <SiNodeDotJs style={{ color: '#87BF00' }} />
            Node.js
          </div>
          <div className="item">
            <SiGit style={{ color: '#E84D31' }} />
            Git
          </div>
          <div className="item">
            <SiReact style={{ color: '#5ED3F3' }} />
            React
          </div>
          <div className="item">
            <SiRedux style={{ color: '#593D88' }} />
            Redux
          </div>
          <div className="item">
            <SiNextDotJs style={{ color: '#000000' }} />
            Next.js
          </div>
          <div className="item">
            <img src={Vue.src} alt="" />
            Vue.js
          </div>
          <div className="item">
            <img src={Nuxt.src} alt="" />
            Nuxt.js
          </div>
          <div className="item">
            <SiJquery style={{ color: '#1066A9' }} />
            JQuery
          </div>
        </div>
      </section>
      <section>
        <h3 className="section-title">Tools</h3>
        <div className="item-list">
          <div className="item">
            <img src={VSCode.src} alt="" />
            VSCode
          </div>
          <div className="item">
            <img src={Figma.src} alt="" />
            Figma
          </div>
          <div className="item">
            <img src={Photoshop.src} alt="" />
            Photoshop
          </div>
          <div className="item">
            <img src={Zeplin.src} alt="" />
            Zeplin
          </div>
          <div className="item">
            <SiNotion style={{ color: '#000000' }} />
            Notion
          </div>
          <div className="item">
            <SiJira style={{ color: '#2580F7' }} />
            Jira
          </div>
          <div className="item">
            <SiConfluence style={{ color: '#2684FF' }} />
            Confluence
          </div>
          <div className="item">
            <SiAzuredevops style={{ color: '#0078D4' }} />
            Azure DevOps
          </div>
        </div>
      </section>
      <section>
        <h3 className="section-title">Contact</h3>
        <div className="item-list">
          <div className="item">
            <img src={Gmail.src} alt="" />
            <a href="mailto:shinyj1991@gmail.com">shinyj1991@gmail.com</a>
          </div>
        </div>
      </section>
    </StyledAuthorDetails>
  );
}

const StyledAuthorDetails = styled.div`
  > section {
    margin-top: 60px;
    font-family: 'Roboto';
  }
  .section-title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 12px;
  }
  .item-list {
    display: flex;
    flex-wrap: wrap;
    column-gap: 24px;
    row-gap: 18px;
    max-width: 600px;
    .item {
      display: flex;
      align-items: center;
      column-gap: 4px;
      font-size: 14px;
      img,
      svg {
        min-width: 18px;
        height: 18px;
      }
    }
  }
  @media ${device.mobile} {
    .section-title {
      font-size: 18px;
    }
  }
`;

export default AuthorDetails;
