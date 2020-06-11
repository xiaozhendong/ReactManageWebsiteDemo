import React,{Component} from "react";
import {Grid, Tag} from "@alifd/next";

import IceContainer from '@icedesign/container';
import styles from './index.module.scss';
// @ts-ignore
const {Row,Col}=Grid;

class BaseInfo extends Component{
  constructor(...props){
      // @ts-ignore
    super(...props)
  }

  render():any{

    // @ts-ignore
    return (
      <Row gutter={20}>
        <Col>
          <IceContainer className={styles.containerCss}
          >
            <div className={styles.itemBody1}>
              <div>
                <div className={styles.itemTitle}>
                  <p className={styles.titleText}>文章发布数</p>
                  <span className={styles.tag}>非实时</span>
                </div>


              </div>
              <div style={{textAlign:'left',}}>

                 <span style={{fontSize:26,lineHeight:"2"}}> 3104</span>

              </div>
              <p style={{fontSize:12}}>过去30天发布文章总记录数</p>
            </div>

          </IceContainer>
        </Col>
        <Col>

          <IceContainer className={styles.containerCss}
          >
            <div className={styles.itemBody2}>
              <div>
                <div className={styles.itemTitle}>
                  <p className={styles.titleText}>总访问数</p>
                  <span className={styles.tag}>非实时</span>
                </div>


              </div>
              <div style={{textAlign:'left',}}>

                <span style={{fontSize:26,lineHeight:"2"}}> 3104</span>

              </div>
              <p style={{fontSize:12}}>网站被访问总记录数</p>
            </div>

          </IceContainer>
        </Col>
        <Col>
          <IceContainer className={styles.containerCss}
          >
            <div className={styles.itemBody3}>
              <div>
                <div className={styles.itemTitle}>
                  <p className={styles.titleText}>今日问数</p>
                  <span className={styles.tag}>非实时</span>
                </div>


              </div>
              <div style={{textAlign:'left',}}>

                <span style={{fontSize:26,lineHeight:"2"}}> 3104</span>

              </div>
              <p style={{fontSize:12}}>从今日0时至现在访问总记录数</p>
            </div>

          </IceContainer>
        </Col>
        <Col>
          <IceContainer className={styles.containerCss}
          >
            <div className={styles.itemBody4}>
              <div>
                <div className={styles.itemTitle}>
                  <p className={styles.titleText}>当前用户</p>

                </div>


              </div>
              <div style={{textAlign:'left',}}>

                <span style={{fontSize:26,lineHeight:"2"}}> 肖镇东</span>

              </div>
              <p style={{fontSize:12}}>当前网页操作用户</p>
            </div>

          </IceContainer>
        </Col>
      </Row>
    )
  }
}

export default BaseInfo
