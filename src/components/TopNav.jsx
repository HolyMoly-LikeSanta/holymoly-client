import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TopNav = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <BackIcon
          src="/image/BackIcon.png"
          alt="ArrowBack"
          onClick={() => {
            navigate(-1);
          }}
        />
      </div>
      <AppTitle
        onClick={() => {
          navigate("/");
        }}
      >
        <img src="/image/TopTitle.png"></img>
      </AppTitle>
      <UserIcon src="/image/UserIcon.png" alt="ArrowBack" />
    </Container>
  );
};

export default TopNav;

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 600px;
  max-height: 70px;
  height: 70px; // 네비게이션 바의 높이를 화면 비율에 맞춰 설정 (전체 화면의 10%)
  bottom: 0;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    height: calc(
      var(--vh, 1vh) * 8
    ); // 작은 화면에서는 화면 비율에 맞게 높이 설정 전체 높이의 &%
  }

  z-index: 100;
`;
const BackIcon = styled.img`
  width: 1rem;
  cursor: pointer;
  margin-left: 30px;
`;

const UserIcon = styled.img`
  width: 1.5rem;
  cursor: pointer;
  margin-right: 30px;
`;

const AppTitle = styled.div`
  text-align: center;
  img {
    width: 50%;
  }
`;