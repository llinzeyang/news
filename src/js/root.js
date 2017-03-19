import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import Button from 'antd/lib/button';
import PCIndex from './components/pc_index';
import PCNewsDetails from './components/pc_news_details';
import MobileNewsDetails from'./components/mobile_news_details';
import MobileIndex from './components/mobile_index';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
import PCUserCenter from './components/pc_usercenter';
import MobileUserCenter from './components/mobile_usercenter';
import PCWorld from './components/pc_world';
import PCDomestic from './components/pc_domestic';
import PCSociology from './components/pc_sociology';
import PCEntertainment from './components/pc_entertainment';
import PCScience from './components/pc_science';

export default class Root extends React.Component{
	render(){
		return(
			<div>
			  <MediaQuery query='(min-device-width:1224px)'>
			    <Router history={hashHistory}>
            <Route path="/" component={PCIndex}></Route>
            <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
            <Route path="/usercenter" component={PCUserCenter}></Route>
            <Route path="/world" component={PCWorld}></Route>
            <Route path="/domestic" component={PCDomestic}></Route>
            <Route path="/sociology" component={PCSociology}></Route>
            <Route path="/entertainment" component={PCEntertainment}></Route>
            <Route path="/science" component={PCScience}></Route>
			    </Router>
			  </MediaQuery>
			  <MediaQuery query='(max-device-width:1224px)'>
			    <Router history={hashHistory}>
            <Route path="/" component={MobileIndex}></Route>
            <Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
            <Route path="/usercenter" component={MobileUserCenter}></Route>
            <Route path="/world" component={MobileIndex}></Route>
            <Route path="/domestic" component={MobileIndex}></Route>
            <Route path="/sociology" component={MobileIndex}></Route>
            <Route path="/entertainment" component={MobileIndex}></Route>
            <Route path="/science" component={MobileIndex}></Route>
			    </Router>
			  </MediaQuery>
			</div>

		);
	};
}

ReactDOM.render(<Root/>,document.getElementById('mainContainer'));