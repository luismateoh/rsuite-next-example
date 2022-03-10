// This is a few next-link compoents, wrapped in rsuite

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button, Nav, Dropdown, Breadcrumb } from 'rsuite'
import 'rsuite/styles/index.less'

// eslint-disable-next-line react/display-name
export const NavLink = React.forwardRef((props, ref) => {
  const { as, href, ...rest } = props
  return (
    <Link href={href} as={as}>
      <a ref={ref} {...rest} />
    </Link>
  )
})

// track active
export function wrap (Component) {
  // eslint-disable-next-line react/display-name
  return props => {
    const router = useRouter()
    return <Component active={props.href === router.pathname} as={NavLink} {...props} />
  }
}

export const LinkNav = wrap(Nav.Item)
export const LinkDrop = wrap(Dropdown.Item)
export const LinkButton = wrap(Button)
export const LinkBread = wrap(Breadcrumb.Item)

