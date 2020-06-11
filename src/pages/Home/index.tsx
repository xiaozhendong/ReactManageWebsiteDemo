import React,{Component} from "react";

import BaseInfo from "@/pages/Home/component/BaseInfo";
import AccessTrend from "@/pages/Home/component/AccessTrend";
import ArticleAndUserLog from "@/pages/Home/component/ArticleAndUserLog";

class Home extends Component{
  constructor(...props){
    // @ts-ignore
    super(...props)
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return(
    <div>

      <div style={{padding:"20px 20px"}}>
      <BaseInfo/>
      <AccessTrend/>
      <ArticleAndUserLog/>
      </div>
    </div>
    );
  }
}

export default Home
