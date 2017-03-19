import React from 'react';
import ReactDOM from 'react-dom';
import {Row,Col,Modal} from 'antd';
import {Menu,Icon} from 'antd';
import {Tabs,message,Form,Input,Button,Checkbox,Card,notification,Upload} from 'antd';
import{Router,Route,Link,browserHistory} from 'react-router';

const SuMenu=Menu.SubMenu;
const MenuItemGroup=Menu.ItemGroup;
const FormItem=Form.Item;
const TabPane=Tabs.TabPane;

import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';

export default class MobileUserCenter extends React.Component{
  constructor(){
    super();
    this.state={
      usercollection:''
    };
  };

  componentDidMount(){
    var myFetchOptions={
      method:'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid="+localStorage.userid,myFetchOptions)
    .then(response=>response.json())
    .then(json=>{
      this.setState({usercollection:json});
    });
  };
	render(){
    const {usercollection}=this.state;
    const usercollectionList=usercollection.length?
    usercollection.map((uc,index)=>(
      <Card key={index} title={uc.uniquekey} extra={<a href={`/news/#/details/${uc.uniquekey}`}>查看</a>}>
        <p>{uc.Title}</p>
      </Card>
    ))
    :
    '你还没有收藏任何新闻，快去收藏一些新闻吧！';

		return(
			<div id="mobile_userc">
			  <MobileHeader/>
          <Row>
            <Col span={24}>
              <Tabs>
                <TabPane tab="我的收藏列表" key="1">
                    <Row>
                      <Col span={24}>{usercollectionList}</Col>
                    </Row>
                </TabPane>
                <TabPane tab="我的评论列表" key="2">
  
                </TabPane>
                <TabPane tab="头像设置" key="3">

                </TabPane>
              </Tabs>
            </Col>
          </Row>
        <MobileFooter/>
      </div>
		);
	}
}