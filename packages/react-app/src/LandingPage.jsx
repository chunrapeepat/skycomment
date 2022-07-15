import { useState } from "react";
import Icon, { CaretRightOutlined } from "@ant-design/icons";
import styled from "styled-components";
import CommentWidget from "./CommentWidget";

const Container = styled.div`
  width: 600px;
  margin: auto;

  @media (max-width: 630px) {
    padding: 0 15px;
    width: 100%;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
  cursor: pointer;

  & div {
    font-size: 4rem;
    margin-right: 18px;
    transform: translateY(-6px);
  }
  & h1 {
    display: block;
    color: rgb(25, 33, 57);
    font-size: 3rem;
    margin: 0;
  }
`;
const Panel = styled.div`
  border-radius: 7px;
  border: 1px solid #ddd;
  margin-top: 25px;

  & h2 {
    display: block;
    background: #f3f3f3;
    margin: 0;
    padding: 7px 15px;
    font-size: 1.2rem;
    border-bottom: 1px solid #ddd;
  }

  & > div {
    padding: 15px;
  }

  & h3 {
    font-size: 1rem;
    margin: 0;
    margin-bottom: 7px;
  }

  & pre {
    display: inline;
    background: #ddd;
    border-radius: 3px;
  }
`;
const Try = styled.h2`
  padding-top: 50px;
  padding-bottom: 25px;
  display: block;
  text-align: center;
  margin: 0;
  font-size: 1.6rem;
`;
const Footer = styled.div`
  margin-top: 30px;
  padding-bottom: 50px;
  text-align: center;

  & a {
    font-weight: bold;
  }
`;
const HeartSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
);

const LandingPage = () => {
  const [value, setValue] = useState(`${process.env.REACT_APP_DOMAIN_NAME}`);

  const codeSnippet = `<iframe src="${process.env.REACT_APP_DOMAIN_NAME}/embed?url=${value}" id="skycomment" width="100%" frameBorder="0"></iframe>

<script>window.addEventListener("message",function(t){"string"==typeof t.data&&-1!=t.data.indexOf("height:")&&(document.getElementById("skycomment").style.height=t.data.split(":")[1]+"px")});</script>
`;

  return (
    <Container>
      <Logo>
        <div>🌥</div>
        <h1>
          <b>Sky</b>Comment
        </h1>
      </Logo>
      <Panel>
        <h2>About SkyComment</h2>
        <div>
          <p>
            SkyComment is a fully decentralized comments widget implemented and designed for the Skynet Community, lets
            visitors leave comments on your website with their MySky identity.
          </p>
          <p>
            <a href="https://github.com/chunza2542/skycomment#why-skycomment" target="_blank">
              <CaretRightOutlined /> Why I created SkyComment?
            </a>
          </p>
          <p>
            <b>Features:</b>
            <li>
              Open source 🌍 (See{" "}
              <a target="_blank" href="https://github.com/chunza2542/skycomment#contribution">
                contribution guide
              </a>
              )
            </li>
            <li>Sign-in with your non-custodial MySky accounts (No Facebook, Google, or Twitter accounts needed 🙅‍♀️)</li>
            <li>LaTex supported for commenting 🧮</li>
            <li>Everything is stored and hosted on Skynet decentralized infrastructure 💽</li>
          </p>
          <a href="https://github.com/chunza2542/skycomment" target="_blank">
            <CaretRightOutlined /> Learn more about SkyComment
          </a>
        </div>
      </Panel>

      <Try>👇 Try it yourself!</Try>
      <CommentWidget commentURL="" />

      <Footer>
        Crafted with <Icon component={HeartSvg} style={{ color: "hotpink" }} /> by{" "}
        <a target="_blank" href="https://twitter.com/chunza2542">
          @chunza2542
        </a>
      </Footer>
    </Container>
  );
};

export default LandingPage;
