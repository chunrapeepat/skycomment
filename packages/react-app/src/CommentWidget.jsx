import React, { useState, useCallback, useEffect } from "react";
import { Comment, CommentEditor } from "./components/index";
import styled from "styled-components";
import Icon, { CopyOutlined, FileDoneOutlined, LinkOutlined, LogoutOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Divider } from "antd";
import { Button } from "./components/Button";
import Address from "./components/Address";
import Blockie from "./components/Blockie";

const DropdownItem = styled.div`
  display: flex;
  align-items: center;

  & svg {
    margin-right: 7px;
  }

  ${props =>
    props.disabled
      ? `
      cursor: not-allowed;
      opacity: 0.5;
  `
      : ""}
`;
const Footer = styled.span`
  display: block;
  color: #555;
  font-weight: normal;
  font-size: 0.8rem;
  margin-top: 12px;
`;
const PanelContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Profile = styled.div`
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  padding: 2px;

  & canvas {
    width: 25px;
    height: 25px;
    border-radius: 3px;
  }
`;

const CommentWidget = ({ commentURL }) => {
  const [comments, setComments] = useState([]);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    // setError("");
    // if (!value.trim()) return;
    // if (value.length > 2000) {
    //   setError("character limit exceeded (maximum: 2000 characters)");
    //   return;
    // }
    // setIsLoading(true);
    // try {
    //   const commentBoxRef = doc(firestore, "comment-boxes", hashURL(commentURL));
    //   const commentBox = await getDoc(commentBoxRef);
    //   if (!commentBox.exists()) {
    //     await setDoc(commentBoxRef, {
    //       commentURL,
    //       createdAt: new Date(),
    //     });
    //   }
    //   const commentRef = collection(firestore, "comment-boxes", hashURL(commentURL), "comments");
    //   await addDoc(commentRef, {
    //     data: value.trim(),
    //     likes: [],
    //     authorPublicAddress: publicAddress,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   });
    //   setValue("");
    // } catch (e) {
    //   setError(e.message);
    // }
    // setIsLoading(false);
  };

  const profileOptions = (
    <Menu>
      {/* <Menu.Item key="address">
        <DropdownItem disabled>
          <Address address={publicAddress} />
        </DropdownItem>
      </Menu.Item> */}
      <Menu.Divider />
      <Menu.Item
        key="0"
        onClick={() => {
          // copyToClipboard(publicAddress);
        }}
      >
        <DropdownItem>
          <CopyOutlined />
          <div>Copy Address to Clipboard</div>
        </DropdownItem>
      </Menu.Item>
      <Menu.Item key="1">
        <a target="_blank" href={`https://etherscan.io/address/}`}>
          <DropdownItem>
            <LinkOutlined />
            <div>Open in Etherscan</div>
          </DropdownItem>
        </a>
      </Menu.Item>
      <Menu.Item key="2">
        <a target="_blank" href="https://app.ens.domains/">
          <DropdownItem>
            <FileDoneOutlined />
            <div>Register ENS Domain</div>
          </DropdownItem>
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item
        danger
        key="signout"
        onClick={() => {
          signOutOfWeb3Modal();
        }}
      >
        <DropdownItem>
          <Icon component={LogoutOutlined} />
          <div>Sign Out</div>
        </DropdownItem>
      </Menu.Item>
    </Menu>
  );

  const commentEditorFooter = (
    <>
      {true && <Button loading={isLoading}>Sign in with MySky ID</Button>}
      {false && (
        <PanelContainer>
          <Dropdown overlay={profileOptions} trigger={["click"]} placement="topRight">
            <Profile>
              <Blockie address={publicAddress} size={7} />
            </Profile>
          </Dropdown>
          <Button loading={isLoading} onClick={isLoading ? () => {} : handleSubmit}>
            Comment
          </Button>
        </PanelContainer>
      )}
    </>
  );

  return (
    <>
      <h3>10 comments</h3>
      <div style={{ marginTop: 24 }}>
        {comments.map((comment, i) => {
          return <Comment commentURL={commentURL} {...comment} key={`comment_${i}`} />;
        })}
      </div>
      <Divider />

      <CommentEditor
        footer={commentEditorFooter}
        error={error}
        value={value}
        onChange={setValue}
        placeholder="Write a comment..."
        loading={isLoading}
      />

      <Footer>
        Powered by{" "}
        <a href={`${process.env.NODE_ENV === "development" ? "http" : "https"}://${document.domain}`} target="_blank">
          SkyComment
        </a>
      </Footer>
    </>
  );
};

export default CommentWidget;
