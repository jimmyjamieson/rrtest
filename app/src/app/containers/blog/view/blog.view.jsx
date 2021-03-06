import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'jumpstate';
import Loader from "../../../components/loader/loader";

// UI IMPORTS


class blogView extends Component {

    componentWillMount() {
        const slug = this.props.match.params.slug;
        return Actions.loadArticle(slug);
    }

    render () {

        const { blogView } = this.props;

        return (
            <div>
                { blogView.loading ? <Loader/> : (
                    <div>
                        <h1>{ blogView.data.title || [] }</h1>
                        <p>{ blogView.data.text || [] }</p>
                    </div>
                ) }
            </div>
        )
    }
}

export default connect(state => {
    return {
        blogView: state.blogView
    }
})(blogView)