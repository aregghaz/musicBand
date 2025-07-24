'use client';

import { FC, useCallback, useMemo, useState } from 'react';
import { useWindowWidth } from '../../../hooks/useWindowWidth';
import { useVisibility } from '../../../hooks/useVIsibility';
import Link from 'next/link';

import './Nav.scss';
import CustomImage from '@uikit/Image/Image';
import logoLight from '@assets/img/logoLight.png';

import logoDark from '@assets/img/logoDark.png';
import Image from 'next/image';

interface INav {
  navItems: { [name: string]: string }[];
  permissions: any;
}

const Nav: FC<INav> = ({ navItems, permissions }) => {
  const [isOpenedMenu, setIsOpenedMenu] = useState<boolean>(false);
  const { isVisible } = useVisibility();

  const { width: windowWith } = useWindowWidth();

  const hamdleToggleMenu = () => {
    setIsOpenedMenu(!isOpenedMenu);
  };

  const isDesktop = Boolean(windowWith) && windowWith > 1120;

  const navItemBehavior = isDesktop
    ? 'initial'
    : isOpenedMenu
      ? 'block'
      : 'none';

  const finallyItems = useMemo(() => {
    const labelToPermissionMap: { [key: string]: keyof typeof permissions } = {
      About: 'aboutSection',
      Discography: 'albumSection',
      Concerts: 'concertsSection',
      Gallery: 'gallerySection',
      Blog: 'blogsSection',
      'News About Us': 'aboutUsNewsSection',
      'Our Team': 'bandMembersSection',
      Contact: 'contactsSection',
    };

    return navItems.filter((item) => {
      const permissionKey = labelToPermissionMap[item.label];

      return permissionKey ? permissions?.[permissionKey] === true : true;
    });
  }, [navItems, permissions]);

  const logo = isDesktop ? (isVisible ? logoDark : logoLight) : logoDark;
  return (
    <header
      className={`header ${isVisible ? 'switched-header' : 'default'}`}
      style={{ display: 'block' }}
    >
      <div className="left-part">
        <Link className="logo scroll" href={'/'}>
          <Image src={logo} alt="Music Lab" />
        </Link>
      </div>
      <div className="right-part">
        <nav className="main-nav">
          <div className={`toggle-mobile-but ${isOpenedMenu ? 'active' : ''}`}>
            <span className="mobile-but" onClick={hamdleToggleMenu}>
              <div className="lines"></div>
            </span>
          </div>
          <ul
            className={`main-menu list-inline`}
            style={{
              display: navItemBehavior,
              transition: 'all 0.3s ease-in-out',
            }}
          >
            {finallyItems.map((item, idx) => (
              <li key={idx} onClick={hamdleToggleMenu}>
                <Link className="scroll list-inline-item" href={`${item.link}`}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li onClick={hamdleToggleMenu}>
              <Link
                className="scroll list-inline-item"
                href="/performance-services"
              >
                performance-services
              </Link>
            </li>
            <li className="block-helper">
              <a href="#album" className="scroll">
                <span>
                  <i className="icon-cd-2"></i>
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
