import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Actions } from 'jumpstate';

// UI IMPORTS
import Button from '../../components/button/button';
import AppBar from '../../components/app-bar/app-bar';
import Title from '../../components/title/title';
import { Layout, Content } from '../../components/layout';
import Icon from '../../components/icon/icon';

// COMPONENT IMPORTS
import blogList from './list/blog.list';
import blogView from './view/blog.view';
import DropDownMenu from "../../components/dropdown-menu/dropdown-menu";

class BlogContainer extends Component {

    render() {
        return (
            <Layout>
                <AppBar color="white" textColor="darkGrey">
                    <Title>Blog</Title>
                   <div>
                       <DropDownMenu content={<div>blah</div>}>
                           <Button>Dropdown</Button>
                       </DropDownMenu>
                       <DropDownMenu content={<div>blah</div>}>
                           <Button color="red" onClick={ () => Actions.loadArticles() }><Icon name="refresh" /></Button>
                       </DropDownMenu>
                       <Button color="primary" onClick={() => Actions.decrement()}>Decrement on Blog</Button>
                       <Button color="warning" onClick={() => Actions.increment()}>Increment on Blog</Button>
                       <Button color="secondary" onClick={() => Actions.toggleLeftNav()}>Nav on Blog</Button>
                   </div>
                </AppBar>
                <Content>
                    <Switch>
                        <Route exact path={`/blog`} component={blogList}/>
                        <Route path={`/blog/:slug`} component={blogView}/>
                    </Switch>
                </Content>
            </Layout>
        );
    }
}
export default connect(state => {
    return {
        blog: state.blog
    }
})(BlogContainer)