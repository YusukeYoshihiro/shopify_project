import styled from 'styled-components';

export const Container = styled.div`
  max-width:${(props) => props.theme.maxWidth}px;
  width:100%;
  padding: 0 20px;
  margin: auto;
`
export const TopNav = styled.div`
   margin-top: 20px;
   display: flex;
   justify-content: space-between;
 `
export const Logo = styled.span`
   font-size: 22px;
`

export const Menu = styled.ul`
  margin-bottom: 0;
  display: flex;
  flex-direction: row;
`

export const MenuItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  margin: 0 10px;
`
