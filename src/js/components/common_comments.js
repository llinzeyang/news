import React from 'react';

import {Router, Route, Link, browserHistory} from 'react-router';

import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import Tabs from 'antd/lib/tabs';
import message from 'antd/lib/message';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import CheckBox from 'antd/lib/checkbox';
import Modal from 'antd/lib/modal';
import Card from 'antd/lib/card';
import {notification} from 'antd';	

const FormItem=Form.Item;
const SubMenu=Menu.SubMenu;
const TabPane=Tabs.TabPane;
const MenuItemGroup=Menu.ItemGroup;
class CommonComments extends React.Component{
  constructor(){
  	super();
  	this.state={
  		comments:''
  	};
  };
  componentDidMount(){
  	var myFetchOptions={
  		method:'GET'
  	};
  	fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey="+this.props.uniquekey,myFetchOptions)
  	.then(response=>response.json())
  	.then(json=>{
  		this.setState({comments:json});
  	})
  };

  handleSubmit(e){
  	e.preventDefault();
  	var myFetchOptions={
      method:'GET'
  	};
  	var formdata=this.props.form.getFieldsValue();
  	fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid="+localStorage.userid+"&uniquekey="+this.props.uniquekey+"&commnet="+formdata.remark,myFetchOptions)
  	.then(response=>response.json())
  	.then(json=>{
  		this.componentDidMount();
  	})
  };

  addUserCollection(){
    var myFetchOptions={
    	method:'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid="+localStorage.userid+"&uniquekey="+this.props.uniquekey,myFetchOptions)
    .then(response=>response.json())
    .then(json=>{
      notification['success']({message:'News提醒',description:'收藏文章成功'});
    });
  };

  render(){
  	let {getFieldProps}=this.props.form;
    const {comments}=this.state;
    const commentList=comments.length?
    comments.map((comment,index)=>(
      <Card key={index} title={comment.UserName} extra={<a href="#">发布于 {comment.datetime}</a>}>
      <p>{comment.Comments}</p>
      </Card>
    ))
    :
    '还没有人评论过';
		return(
      <div class="comment">
        <Row>
          <Col span={24}>
            {commentList}
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormItem label="发表评论">
                <Input type="textarea" placeholder="输入你的评论" {...getFieldProps('remark',{initialValue:''})} />
              </FormItem>
              <Button type="primary" htmlType="submit">提交评论</Button>
              &nbsp;&nbsp;
              <Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>搜藏该文章</Button>
            </Form>
          </Col>
        </Row>
      </div>
  	);
  }
}


export default CommonComments=Form.create({})(CommonComments);