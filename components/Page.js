import React from 'react'
import Head from 'next/head'
import { Navbar, Nav, Dropdown } from 'rsuite'
import { LinkNav, LinkDrop, NavLink } from 'components/link'
import 'rsuite/styles/index.less'

const NavHeader = () => {
  return (
    <Navbar>
      <Navbar.Brand href='/' as={NavLink}>
        Antares
      </Navbar.Brand>
      <Nav>
      </Nav>
      <Nav pullRight>
        <LinkNav href='/github'>GitHub</LinkNav>
      </Nav>
    </Navbar>
  )
}

const Page = ({ title = 'Antares', children }) => (

  <>
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <NavHeader />
      <main className='main'>
        {children}
      </main>
    </div>

    <style jsx>{`
                  .main {
                    margin: 2rem 0rem 2rem 0rem;
                    height: 100%;
                    display: grid;
                    gap: 20px;
                    place-content: center;
                  }
                `}
    </style>
  </>

)

export default Page
