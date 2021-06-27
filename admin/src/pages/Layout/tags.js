import React, { useState, useEffect, translate } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Tag } from 'antd';
import { addTag, removeTag } from '@/redux/actions/tags';
import '@/assets/css/components/tags.scss';
const Tags = props => {
    console.log(props,'tag')
    const { location, history, tagList, addTag, removeTag } = props;
    
    // hook 相当于componentDidMount
    useEffect(() => {
        console.log('useEffect', 777)
        addTag({
            title: translate('dashboard'),
            path: '/dashboard',
        });
        history.push('/dashboard');
    },[])

    const onChange = path => {
        return () => {
            history.push(path)
        }
    }

    const onClose = (item) => {
        return () => {
            const { path, title } = item;
            const titleArr = location && location.pathname.split('/');
            if(location.pathname === path){
                removeTag({
                    title: title,
                    path: path,
                });
                if(tagList && tagList.length > 0){
                    history.replace(tagList[tagList.length-2].path);
                }
            }else{
                removeTag({
                    title: title,
                    path: path,
                });
            }
        }
    }
    return(
        <div className="yyn-tags">
            <div className="tags-scroll">
                { tagList.length > 0 && tagList.map(item => (
                    <Tag 
                        key={ item.path }
                        checked={ item.path === location.pathname } 
                        color={ item.path === location.pathname ? props.themeColor : '' }
                        closable={ item.path === '/dashboard' ? false : true }
                        onClick={ onChange(item.path) }
                        onClose={ onClose(item) }
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

