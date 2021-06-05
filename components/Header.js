import { Row, Col, Typography, Button } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

const HeroSection = styled(Row)`
  margin: 50px 0px;
  background-color: #9dc3f8;
`

const LeftColumn = styled(Col)`
 padding-left: 30px;
 height: 400px;
 display: flex;
 flex-direction: column;
 justify-content: center;
`
const RightColumn = styled(Col)`
display: flex;
justify-content: center;
align-items: center;
height: auto;
img{
  width: 80%;
}
`
const SubTitleWrp = styled(Row)`
  border-left: 3px solid black;
  margin-bottom: 20px;
  padding-left: 15px;
`
const ShopNowBtn = styled(Button)`
  align-self: flex-start;
  color: black !important;
  border-color: black !important;
  margin-bottom: 10px;
`
const PriceText = styled(Title)`
  margin-top: 0 !important ;
`
function Header() {
  return (
    <>
      <HeroSection>
        <LeftColumn sm={{ span: 24 }} md={{ span: 12 }}>
          <SubTitleWrp>
            <Title level={5}>
              Sofas <br />
              2021
       </Title>
          </SubTitleWrp>
          <Title>
            Mod Leather Sofa
       </Title>
          <PriceText level={4}>
            FROM $200
       </PriceText>
          <ShopNowBtn ghost>
            Shop Now
       </ShopNowBtn>
          <Title level={5}>
            Designed By<br />
         Yusuke Yoshihiro
       </Title>
        </LeftColumn>
        <RightColumn sm={{ span: 24 }} md={{ span: 12 }}>
          <img src="/HomeBanner.png" />
        </RightColumn>
      </HeroSection>
    </>
  )
}

export default Header;