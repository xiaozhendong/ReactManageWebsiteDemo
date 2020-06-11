import React from 'react';
import cookie from 'cookie';
import RefusedAccess from '@/components/RefusedAccess';
// Exception 组件需要业务自己实现


/**
 * Auth Component
 *
 * <Auth authorities={['admin']} hidden={true}>
 *  <Button />
 * </Auth>
 *
 * @params {array} authorities 允许哪些角色使用
 * @params {boolean} hidden 无权限时是否直接隐藏
 */
export function Auth({children, authorities = [], hidden}) {
  // 服务端将当前用户角色 authority 保存在 cookie 中，前端负责读取 cookie
  const {authority} = cookie.parse(document.cookie);
  const hasAuth = authorities.indexOf(authority) !== -1;

  if (hasAuth) {
    // 有权限直接渲染内容
    return children;
  } else {
    // 无权限
    if (hidden) {
      // 无权限则不显示内容
      return null
    } else {
      // 无权限则显示指定 UI，也可以跳转到统一的无权限页面
      return (
        <RefusedAccess/>
      );
    }
  }
};

/**
 * HOC 方式使用
 *
 * withAuth({
 *  authorities: ['admin'],
 * })(ListPage);
 */
export const withAuth=(params)=>{
  return (WrapperedComponent) => {
    return (props) => {
      return (
        <Auth {...params}>
          <WrapperedComponent {...props} />
        </Auth>
      );
    };
  }
}
;

