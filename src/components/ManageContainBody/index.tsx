import React,{Component} from "react";
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';



class ManageContainerBody extends Component{
  constructor(...props){
    // @ts-ignore
    super(...props)
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    // @ts-ignore
    return (
      <IceContainer className={styles.addUserContainerCssBody}
      >
        {this.props.children}
      </IceContainer>

    )

  }
}

export default ManageContainerBody
