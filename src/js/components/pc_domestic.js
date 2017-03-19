import React from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Tabs from 'antd/lib/tabs';
import {Carousel} from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';

const TabPane=Tabs.TabPane;


export default class PCWorld extends React.Component{
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
        <PCHeader current="guonei"></PCHeader>
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              <div class='leftContainer'>
                <div class='carousel'>
                  <Carousel {...settings}>
                    <div><img src="./src/images/carousel_1.jpg"/></div>
                    <div><img src="./src/images/carousel_2.jpg"/></div>
                    <div><img src="./src/images/carousel_3.jpg"/></div>
                    <div><img src="./src/images/carousel_4.jpg"/></div>
                  </Carousel>
                </div>
              </div>
              <div id="pc_world">
                <Tabs>
                  <TabPane tab="国内新闻" key='1'>
                    <div class='pc_world_left'>
                      <PCNewsBlock count={10} type="guonei" width="100%" bordered="false" />
                    </div>
                  </TabPane>
                </Tabs>
              </div>
            <div>
              <PCNewsImageBlock count={16} type="guonei" width="100%" cartTitle="国内头条" imageWidth="112px"/>
            </div>
            </Col>
            <Col span={2}></Col>
          </Row>
        <PCFooter/>
			</div>
		);
	}
}