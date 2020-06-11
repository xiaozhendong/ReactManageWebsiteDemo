import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {  Nav } from '@alifd/next';
import FoundationSymbol from '@icedesign/foundation-symbol';
import { headerMenuConfig } from '@/config/menu';
import Logo from '../Logo';
import styles from './index.module.scss';

const { SubNav, Item } = Nav;

const Header = withRouter((props) => {
  const { location = {} } = props;
  const { pathname } = location;
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Logo />
        <div className={styles.headerNavbar}>
          <Nav
            activeDirection={null}
            direction="hoz"
            type="primary"
          >
            {headerMenuConfig
            && headerMenuConfig.length > 0
            && headerMenuConfig.map((nav, index) => {
              if (nav.children && nav.children.length > 0) {

                return (
                  <SubNav
                    triggerType="click"
                    key={index}
                    title={(
                      <span>
                          {nav.icon ? (
                            <FoundationSymbol size="small" type={nav.icon} />
                          ) : null}
                        <span className={styles.iceMenuItemText}>{nav.name}</span>
                        </span>
                    )}
                  >
                    {nav.children.map((item) => {
                      const linkProps = {};
                      if (item.external) {
                        if (item.newWindow) {
                          linkProps.target = '_blank';
                        }

                        linkProps.href = item.path;
                        return (
                          <Item key={item.path}>
                            <a {...linkProps}>
                              <span>{item.name}</span>
                            </a>
                          </Item>
                        );
                      }
                      linkProps.to = item.path;
                      return (
                        <Item key={item.path}>
                          <Link {...linkProps}>
                            <span>{item.name}</span>
                          </Link>
                        </Item>
                      );
                    })}
                  </SubNav>
                );
              }
              const linkProps = {};
              if (nav.external) {
                if (nav.newWindow) {
                  linkProps.target = '_blank';
                }
                linkProps.href = nav.path;
                return (
                  <Item key={nav.path}>
                    <a {...linkProps}>
                        <span>
                          {nav.icon ? (
                            <FoundationSymbol size="small" type={nav.icon} />
                          ) : null}
                          <span className={styles.iceMenuItemText}>{nav.name}</span>
                        </span>
                    </a>
                  </Item>
                );
              }
              linkProps.to = nav.path;
              return (
                <Item key={nav.path}>
                  <Link {...linkProps}>
                      <span>
                        {nav.icon ? (
                          <FoundationSymbol size="small" type={nav.icon} />
                        ) : null}
                        <span className={styles.iceMenuItemText}>{nav.name}</span>
                      </span>
                  </Link>
                </Item>
              );
            })}
          </Nav>

        </div>
      </div>
    </div>
  );
});

export default Header;
