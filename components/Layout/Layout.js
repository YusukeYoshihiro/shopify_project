

import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <Container>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <TopNav>
        <Logo>My Next.js</Logo>
        <Menu>
          <MenuItem><Link href="/">Home</Link></MenuItem>
          <MenuItem>Naw Arrival</MenuItem>
          <MenuItem>Sofas</MenuItem>
          <MenuItem>
            <Link href="/aboutus">About Us</Link>
          </MenuItem>
        </Menu>
      </TopNav>
      {children}
    </Container>
  )
}

export default Layout;