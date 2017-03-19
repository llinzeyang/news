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

import PCHeader from './pc_header';
import PCFooter from './pc_footer';

export default class PCUserCenter extends React.Component{

  constructor(){
  	super();
  	this.state={
  		usercollection:'',
      usercomments:'',
  		previewImage:'',
  		previewVisible:false
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

    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomment&userid="+localStorage.userid,myFetchOptions)
    .then(response=>response.json())
    .then(json=>{
      this.setState({usercomments:json});
    });

  };

  handleCancel (){
    this.setState({previewVisible: false});
  };

	render(){

    const props={
    	action:'http://jsonplaceholder.typicode.com/posts/',
    	listType:'picture-card',
    	defaultFileList:[{
    		uid:-1,
    		name:'xxx.png',
    		state:'done',
    		url:'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
    		thumbUrl:'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
    	}],
    	onPreview:(file)=>{
    		this.setState({previewImage:file.url,previewVisible:true});
    	},
    	onChange:({defaultFileList})=>{this.setState({defaultFileList})}
    };

    const {usercollection,usercomments}=this.state;
    const usercollectionList=usercollection.length?
    usercollection.map((uc,index)=>(
      <Card key={index} title={uc.uniquekey} extra={<a target="_blank" href={`/news/#/details/${uc.uniquekey}`}>查看</a>}>
        <p>{uc.Title}</p>
      </Card>
    ))
    :
    '你还没有收藏任何新闻，快去收藏一些新闻吧！';

    const usercommentsList=usercomments.length?
    usercomments.map((comment,index)=>(
      <Card key={index} title={`你于 ${comment.datetime} 评论了文章 ${comment.uniquekey}`} extra={<a target="_blank" href={`/news/#/details/${comment.uniquekey}`}>查看</a>}>
        <p>{comment.Comments}</p>
      </Card>
    ))
    :
    '你还没有发表过任何评论。';


		return(
			<div id="pc_userc">
			  <PCHeader/>
			    <Row>
			      <Col span={2}></Col>
			      <Col span={20}>
              <Tabs>
                <TabPane tab="我的收藏列表" key="1">
                  <div class="comment">
                    <Row>
                      <Col span={24}>{usercollectionList}</Col>
                    </Row>
                  </div>
                </TabPane>
                <TabPane tab="我的评论列表" key="2">
                  <div class="">
                    <Row>
                      <Col span={24}>{usercommentsList}</Col>
                    </Row>
                  </div>
                </TabPane>
                <TabPane tab="头像设置" key="3">
                  <div class="clearfix">
                    <Upload {...props}>
                      <div>
                        <Icon type="plus"/>
                        <div className="ant-upload-text">上传照片</div>
                      </div>
                    </Upload>
                    <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel.bind(this)}>
                      <img alt="预览" style={{width:'90%'}} src={this.state.previewImage} />
                    </Modal>
                  </div>
                </TabPane>
              </Tabs>
            </Col>
            <Col span={2}></Col>
          </Row>
        <PCFooter/>
      </div>
		);
	}
}