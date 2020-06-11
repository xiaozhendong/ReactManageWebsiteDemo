import React,{Component} from 'react';
import Layout from '@icedesign/layout';
import Aside from './Aside/index'
import { Icon} from "@alifd/next";


export default class ManageLayout extends Component{
  constructor(...props){
    // @ts-ignore
    super(...props)
    this.state={
      collapse:false
    }
  }
  render():any {
    // @ts-ignore
    let width=this.state.collapse ? 60 : 200
    return (
      <div style={{ backgroundColor: "#f2f3f7"}}>
      <Layout fixable={true}>

        <Layout.Aside type="primary" >
          <Aside collapse={this.state.collapse} width={width}/>
          <div  onClick={() => {

            this.setState({
              collapse: !this.state.collapse
            })
          }}  style={{position:'fixed', width:width,bottom:12, textAlign:'center'}}>
          <Icon
            type={this.state.collapse ? 'arrow-right' : 'arrow-left'}

          />
          </div>
        </Layout.Aside>

        <Layout.Section>
        <Layout.Main scrollable >
          {this.props.children }
        </Layout.Main>
        </Layout.Section>
      </Layout>
      </div>
    );
  }
}
