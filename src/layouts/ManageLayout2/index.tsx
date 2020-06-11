import React,{Component} from "react";
import Layout from '@icedesign/layout';
import Header from "@/layouts/ManageLayout2/Header";

export default class ManageLayout2 extends Component{
  constructor(...props){
      // @ts-ignore
    super(...props)
  }

  render(): any{
    return (
      <div style={{ backgroundColor: "#f2f3f7"}}>
        <Layout fixable={true}>
          <Layout.Header style={{
            height: 80,}} type="primary">
            <Header/>
          </Layout.Header>
          <Layout.Section >
            <Layout.Main scrollable >
              {this.props.children}
            </Layout.Main>
          </Layout.Section>
        </Layout>
      </div>
    );
  }

}

