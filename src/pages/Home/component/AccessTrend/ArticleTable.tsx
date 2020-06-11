import React,{Component} from "react";
import { Table } from '@alifd/next';


class ArticleTable extends Component{
  constructor(...props){
    // @ts-ignore
    super(...props)
  }

  dataSource = () => {
    const result = [];
    for (let i = 0; i < 7; i++) {
      // @ts-ignore
      result.push({
        title: {name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`},
        id: 100306660940 + i,
        time: 2000 + i
      });
    }
    return result;
  }
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <div>
      <Table dataSource={this.dataSource()}
             hasBorder={false}
             fixedHeader
             maxBodyHeight={300}
            >
        <Table.Column title="Id" dataIndex="id"/>
        <Table.Column title="Title" dataIndex="title.name" />
        <Table.Column title="Time" dataIndex="time"/>

      </Table>
      </div>
    );
  }
}

export default ArticleTable
