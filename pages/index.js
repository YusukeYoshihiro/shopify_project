import styles from '../styles/Home.module.css';
import { Row, Col, Typography, Button } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

const Header = styled(Row)`
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
img{
  width: 80%;
}
`
const SubTitleWrp = styled(Row)`
  border-left: 3px solid black;
  margin-bottom: 20px;
`
const ShopNowBtn= styled(Button)`
  align-self: flex-start;
`
const PriceText = styled(Title)`
  margin-top: 0 !important ;
`

export default function Home() {
  return (
    <Header>
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
    </Header>
  )
}
