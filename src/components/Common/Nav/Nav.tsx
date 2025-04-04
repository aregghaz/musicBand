import { FC, useState } from 'react';
import { useWindowWidth } from '../../../hooks/useWindowWidth';
import { useVisibility } from '../../../hooks/useVIsibility';

interface Nav {
  navItems: string[];
}

const Nav: FC<Nav> = ({ navItems }) => {
  const [isOpenedMenu, setIsOpenedMenu] = useState<boolean>(false);
  const {isVisible} = useVisibility()

  const { width: windowWith } = useWindowWidth();

  const hamdleOpenMenu = () => {
    setIsOpenedMenu(!isOpenedMenu);
  };

  const isDesktop = Boolean(windowWith) && windowWith > 991;

  const navItemBehavior = isDesktop
    ? 'initial'
    : isOpenedMenu
    ? 'block'
    : 'none';

  //   const menuIconBehavior = isOpenedMenu ? 'absolute' : 'static';

  return (
    <header className={`header ${isVisible ? 'switched-header' : 'default'}`} style={{ display: 'block' }}>
      <div className="left-part">
        <a className="logo scroll" href="#wrapper">
          <h2 className="mb-0 uppercase">Mousiqua.</h2>
        </a>
      </div>
      <div className="right-part">
        <nav className="main-nav">
          <div className={`toggle-mobile-but ${isOpenedMenu ? 'active' : ''}`}>
            <span
              className="mobile-but"
              // le={{ position: menuIconBehavior }}
              onClick={hamdleOpenMenu}
            >
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
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a
                  className="scroll list-inline-item"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="block-helper">
              <a href="#album" className="scroll">
                <span>
                  <i className="icon-cd-2"></i>
                </span>
              </a>
            </li>
            <li className="block-helper">
              <span className="icon search-ico">
                <i className="icon-search"></i>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
