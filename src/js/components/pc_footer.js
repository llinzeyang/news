import React from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

export default class PCFooter extends React.Component{

	render(){
		return(
      <footer>
        <Row>
          <Col span={2}></Col>
          <Col span={20} class='footer'>
            &copy;&nbsp;2017 News.All Rights Reserved.
          </Col>
          
          <Col span={2}></Col>
        </Row>
      </footer>  
		);
	};
}