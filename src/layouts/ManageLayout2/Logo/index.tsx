import React,{Component} from "react";
import { Link } from 'react-router-dom';
import {logoConfig} from '@/config/menu';
import styles from './index.module.scss';
export default class Logo extends Component{
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (

      <Link to={logoConfig.path} className={styles.logoStyle}>
        {logoConfig.name}
      </Link>
    )
  }
}
