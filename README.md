# xiaozhendong后台管理程序前端模板
##初始化
- 项目基于React、ice框架开发
- 建议使用iceworks来开发、调试、打包项目。如何安装请查看：[iceworks安装]
- 建议使用`yarn install`将项目依赖装好（yarn具体使用方方法请查看yarn官网）完整安装完需要时间比较长

## 项目完成了哪些配置
- 对项目源文件目录做了别名为`@`,在引用某个文件时可直接使用`@/xxxx`来代替
- 可解析css，sass样式文件，具体插件在项目根目录里的`ice.config.js`里，支持ts
- 配置的react版本为16，默认支持lazy懒加载，只需要在config里的routes.ts文件中使用`lazy(() => import('@/pages/xxx'));`,在项目进行打包时会自动进行代码分割
- 框架使用的图标等文件已经做了本地化配置
## 如何在调试、构建

- 启动调试服务: `npm start`
- 构建 dist: `npm run build`

## 目录结构

- 入口文件: `src/Index.tsx`
  - 
- 导航配置: `src/config/menu.js`
- 路由配置: `src/config/routes.js`
- 路由入口: `src/router.jsx`
- 布局文件: `src/layouts`
- 通用组件: `src/components`
- 页面文件: `src/pages`

## 效果图




[iceworks安装]: https://ice.work/docs/materials/get_start
