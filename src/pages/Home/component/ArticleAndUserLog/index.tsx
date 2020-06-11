import React,{Component} from "react";
import {Grid} from "@alifd/next";
import IceContainer from '@icedesign/container';


import style from './index.module.scss';
import UserLog from "@/pages/Home/component/ArticleAndUserLog/component/UserLog";
import ArticleLog from "@/pages/Home/component/ArticleAndUserLog/component/ArticleLog";

// @ts-ignore
const {Row,Col}=Grid;

class ArticleAndUserLog extends Component{
  constructor(...props){
      // @ts-ignore
    super(...props)
  }

  render():any{

    return (
      <Row gutter={20}>
        <Col span={12}>
          <IceContainer className={style.containerCss}
          >
            <div >
              <h3>最近修改的文章</h3>
              <ArticleLog/>
            </div>
          </IceContainer>
        </Col>
        <Col >
          <IceContainer  className={style.containerCss}  >

              <div >
                <h3>用户登录情况</h3>
                <UserLog/>
              </div>

          </IceContainer>
        </Col>
      </Row>
    )
  }
}

export default ArticleAndUserLog
