import { useEffect, translate } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Tag } from 'antd';
import { addTag, removeTag } from '@/redux/actions/tags';
import '@/assets/css/components/tags.scss';
const Tags = props => {
    const { location, history, tagList, onAddTag, onRemoveTag } = props;
    
    // hook 相当于componentDidMount
    useEffect(() => {
        initDefaultTag();
    },[]);

    const initDefaultTag = () => {
        onAddTag({
            title: translate('dashboard'),
            path: '/dashboard',
        });
        history.push('/dashboard');
    }

    const onChange = path => {
        return () => {
            history.push(path)
        }
    }

    const onClose = (item) => {
        return () => {
            const { path, title } = item;
            if(location.pathname === path){
                onRemoveTag({
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
    onAddTag: data => {
        dispatch(addTag(data));
    },
    onRemoveTag: data => {
        dispatch(removeTag(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Tags));

