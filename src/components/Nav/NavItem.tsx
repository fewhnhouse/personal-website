import React from 'react'
import styled from 'styled-components'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'

const Item = styled.span`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-transform: uppercase;
  color: black;
  font-size: 18px;
  text-align: center;
  margin: 0 10px;
  transition: all 0.2s ease-in-out;
  position: relative;

  &:before,
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    width: ${(props: { active: boolean }) => (props.active ? '50%' : '0px')};
    height: 2px;
    margin: 5px 0 0;
    transition: all 0.2s ease-in-out;
    opacity: ${(props: { active: boolean }) => (props.active ? 1 : 0)};
    background-color: black;
  }

  &:before {
    left: 50%;
  }

  &:after {
    right: 50%;
  }

  cursor: pointer;

  &:hover {
    &:before,
    &:after {
      opacity: 1;
      width: 50%;
    }
  }
`

interface INavItem extends RouteComponentProps {
  title: string
  to: string
}

const NavItem = ({ title, to, location }: INavItem) => {
  const { pathname } = location
  console.log(pathname)
  return (
    <Link to={to}>
      <Item active={pathname === to}>{title}</Item>
    </Link>
  )
}

export default withRouter(NavItem)
