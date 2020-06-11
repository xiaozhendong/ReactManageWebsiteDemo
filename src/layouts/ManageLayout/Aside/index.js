import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import cx from 'classnames';
import FoundationSymbol from '@icedesign/foundation-symbol';
import {Nav} from '@alifd/next';

import {asideMenuConfig} from '@/config/menu';
import styles from './index.module.scss';
import {Auth} from "@/components/Auth";

const Icon = FoundationSymbol;

function getDefaultOpenKeys(location = {}) {
  const {pathname} = location;
  const menus = getNavMenuItems(asideMenuConfig);

  let openKeys = [];
  if (Array.isArray(menus)) {
    asideMenuConfig.forEach((item, index) => {
      if (pathname.startsWith(item.path)) {
        openKeys = [`${index}`];
      }
    });
  }

  return openKeys;
}

/**
 * 获取菜单项数据
 */
function getNavMenuItems(menusData,collapse) {
  if (!menusData) {
    return [];
  }

  return menusData
    .filter(item => item.name && !item.hideInMenu)
    .map((item, index) => {
      return renderAuthItem(getSubMenuOrItem(item, index,collapse),item.authorities,index)
    });
}

function renderAuthItem(item, authorities, key) {

  if (authorities) {
    return (
      <Auth
        authorities={authorities}
        hidden
        key={key}
      >
        {item}
      </Auth>
    );
  } else {
    return item;
  }
}

/**
 * 二级导航
 */
function getSubMenuOrItem(item, index) {
  if (item.children && item.children.some(child => child.name)) {
    const childrenItems = getNavMenuItems(item.children);

    if (childrenItems && childrenItems.length > 0) {
      return (
        <Nav.SubNav
          key={index}
          label={<span style={{color:"#fff",marginLeft:8}}>{item.name}</span>}
          icon={<FoundationSymbol type={item.icon} size="small" />}
        >
          {childrenItems}
        </Nav.SubNav>
      );
    }
    return null;
  }
  return (
    <Nav.Item key={item.index} icon={<FoundationSymbol type={item.icon} size="small" />}>
      <Link to={item.path?item.path:""}  style={{color:"#fff",marginLeft:8}}>
         {item.name}
      </Link>
    </Nav.Item>
  );
}

const Aside = (props) => {
  const collapse=props.collapse
  const width=props.width
  const defaultOpenKeys = getDefaultOpenKeys(props.location);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openKeys, setOpenKeys] = useState(defaultOpenKeys);

  function toggleMenu() {
    setOpenDrawer(!openDrawer);
  }

  function onMenuClick() {
    toggleMenu();
  }

  function onOpenChange(keys) {
    setOpenKeys(keys);
  }

  const {
    location: {pathname},
  } = props;

  return (
    <div style={{width:width}}>
      <div style={{margin:20}}></div>

      <Nav

        mode="inline"
        openKeys={openKeys}
        iconOnly={collapse?true:false}
        hasArrow={false}
        hasTooltip
        onClick={onMenuClick}
        onOpen={onOpenChange}
        type="primary"
      >
        {getNavMenuItems(asideMenuConfig,collapse)}
      </Nav>
    </div>
  );
};

export default withRouter(Aside);
