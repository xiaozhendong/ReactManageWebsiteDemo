import React,{Component} from "react";
import PropTypes from 'prop-types';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';
import {Breadcrumb} from "@alifd/next";



class ManageContainerHeader extends Component{
  constructor(...props){
    // @ts-ignore
    super(...props)
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    // @ts-ignore
    const {dataSource}=this.props
    return (
      <IceContainer className={styles.addUserContainerCssHeader}
      >
        <Breadcrumb style={{ margin: 0 }}>
          {dataSource.map((item, index) => {
            return (
              <Breadcrumb.Item  key={index}>
                {item.text}
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </IceContainer>

    )

  }
}

ManageContainerHeader.propTypes = {
  dataSource: PropTypes.array,
};
ManageContainerHeader.defaultProps = {
  dataSource: [],
};

export default ManageContainerHeader
