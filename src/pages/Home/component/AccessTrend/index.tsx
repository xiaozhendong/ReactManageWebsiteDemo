import React,{Component} from "react";
import {Grid} from "@alifd/next";
import IceContainer from '@icedesign/container';

import style from './index.module.scss';
import ArticleChart from "@/pages/Home/component/AccessTrend/ArticleChart";
import ArticleTable from "@/pages/Home/component/AccessTrend/ArticleTable";
// @ts-ignore
const {Row,Col}=Grid;

class AccessTrend extends Component{
  constructor(...props){
      // @ts-ignore
    super(...props)
  }

  render():any{

    return (
      <Row gutter={20}>
        <Col span={16}>
          <IceContainer className={style.containerCss}
          >
            <div >
              <h3>一个月内发布文章</h3>
              <ArticleChart/>
            </div>
          </IceContainer>
        </Col>
        <Col>
          <IceContainer  className={style.containerCss}  >

              <div >
                <h3>热点文章</h3>
                <ArticleTable/>
              </div>

          </IceContainer>
        </Col>
      </Row>
    )
  }
}

export default AccessTrend
