import React from 'react';
import {
  NavLink as ReactRouterNavLink,
} from 'react-router-dom';

type Props = {
  to: string
  children?: React.ReactNode
  className?: string
  end?: boolean | undefined
}

const NavLink: React.FC<Props> = ({ to, children, className, end }) => {
  return (
    <ReactRouterNavLink
      to={ to }
      className={ ({ isActive }) => 
        isActive 
          ? 'text-accent-orange font-family-montserrat font-semibold text-sm py-1.5 px-3' 
          : 'text-white hover:text-accent-orange font-family-montserrat font-semibold text-sm py-1.5 px-3' }
      end={ end }
    >
      <span >
        { children }
      </span>
    </ReactRouterNavLink>
  );
};

export default NavLink;