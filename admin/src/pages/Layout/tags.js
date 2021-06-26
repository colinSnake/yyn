import React, { useState, useEffect, translate } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Tag } from 'antd';
import { addTag, removeTag } from '@/redux/actions/tags';
import '@/assets/css/components/tags.scss';
const Tags = props => {
    console.log(props,'tag')
    const { location, tagList, addTag } = props;
    
    // hook 相当于componentDidMount
    useEffect(() => {
        const titleArr = location && location.pathname.split('/');
        addTag({
            title: translate(titleArr[titleArr.length-1]),
            path: location.pathname,
        })
    },[])

    const onChange = () => {
        
    }

    const onClose = () => {

    }
    return(
        <div className="yyn-tags">
            <div className="tags-scroll">
                { tagList.length > 0 && tagList.map(item => (
                    <Tag 
                        key={ item.path }
                        checked={ item.selected } 
                        color={ item.path === location.pathname ? props.themeColor : '' }
                        closable={ true }
                        onChange={ onChange }
                        onClose={ onClose }
                    >
                        { item.title }
                    </Tag>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    addTag: data => {
        dispatch(addTag(data));
    },
    removeTag: data => {
        dispatch(removeTag(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Tags));

