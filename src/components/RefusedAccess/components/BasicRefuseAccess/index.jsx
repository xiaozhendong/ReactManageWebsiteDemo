import React from 'react';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';
import {Link} from "react-router-dom";

export default function BasicRefuseAccess() {
  return (
    <div className="basic-not-found">
      <IceContainer>
        <div className={styles.exceptionContent}>
          <img
            src={require('./images/TB1txw7bNrI8KJjy0FpXXb5hVXa-260-260.png')}
            style={styles.image}
            className={styles.imgException}
            alt="页面不存在"
          />
          <div className="prompt">
            <h3 className={styles.title}>
              抱歉，你无权访问该页面
            </h3>
            <p className={styles.description}>
              您的权限不够，请返回<Link to={"/index"}>首页</Link>继续浏览
            </p>
          </div>
        </div>
      </IceContainer>
    </div>
  );
}
