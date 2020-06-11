import React,{Component} from "react";
import styles from "./index.module.scss";

class Formheader extends Component{
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return <div>
      <h2 className={styles.formTitle}>{this.props.text}</h2>
    </div>;
  }
}

export default Formheader
