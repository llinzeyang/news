import React from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Tabs from 'antd/lib/tabs';
import {Carousel} from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';

const TabPane=Tabs.TabPane;

export default class PCNewsContainer extends React.Component{
	render(){

		const settings={
			dots:true,
			infinite:true,
			speed:500,
			slidesToShow:1,
			autoplay:true,
			effect:"fade"
		};

		return(
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} class='container'>
            <div class='leftContainer'>
              <div class='carousel'>
                <Carousel {...settings}>
                  <div><img src="./src/images/carousel_1.jpg"/></div>
                  <div><img src="./src/images/carousel_2.jpg"/></div>
                  <div><img src="./src/images/carousel_3.jpg"/></div>
                  <div><img src="./src/images/carousel_4.jpg"/></div>
                </Carousel>
              </div>
              <PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px"/>
            </div>
            <div class='tabs_news'>
                <PCNewsBlock count={22} type="top" width="100%" bordered="false" />
            </div>

            <div>
              <PCNewsImageBlock count={8} type="guonei" width="100%" cartTitle="国内头条" imageWidth="122px"/>
              <PCNewsImageBlock count={16} type="yule" width="100%" cartTitle="娱乐头条" imageWidth="122px"/>
            </div>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
		);
	}
}