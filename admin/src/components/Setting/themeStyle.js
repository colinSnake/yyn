import React, { PureComponent, translate } from 'react';
import { connect } from 'react-redux';
import Icon from '@/components/icon';
import { switchThemeStyle } from '@/redux/actions/setting';
import { getInfoFromLocalStorage, saveSetting } from '@/utils';
import '@/assets/css/components/themeStyle.scss';

class ThemeStyle extends PureComponent {
    state = {
        styleList: [
            {
                title: translate('light_style'),
                svg: require('@/assets/svg/lightTheme.svg').default,
                type: 'light',
                selected: true
            },
            {
                title: translate('dark_style'),
                svg: require('@/assets/svg/darkTheme.svg').default,
                type: 'dark',
                selected: false
            }
        ]
    }
    componentDidMount(){
        this.getSelectedThemeStyle();
    }
    getSelectedThemeStyle(){
        const selectedThemeStyle = getInfoFromLocalStorage('setting', 'themeStyle') || this.props.themeStyle;
        const { styleList } = this.state;
        const { switchThemeStyle } = this.props;
        let newStyleList = [];
        styleList.forEach(item => {
            item.selected = false;
            if(item.type === selectedThemeStyle) { 
                item.selected = true;
                switchThemeStyle(selectedThemeStyle);
            };
            newStyleList.push(item);
        });
        this.setState({styleList: newStyleList});
    }
    onSwitchThemeStyle = (e) => {
        const { styleList } = this.state;
        const { switchThemeStyle } = this.props;
        let newStyleList = [];
        styleList.forEach(item => {
            item.selected = false;
            if(item.type === e.target.dataset.type) { 
                item.selected = true;
                saveSetting({themeStyle: item.type});
                switchThemeStyle(item.type);
            };
            newStyleList.push(item);
        });
        this.setState({styleList: newStyleList});
    }
    render(){
        const { styleList } = this.state;
        return (
            <div className="yyn-themeStyle">
                {
                    styleList && styleList.map(item => (
                        <div 
                            key={ item.type }
                            title={ item.title } 
                            className={ item.selected ? 'style-block' : 'style-block hideIcon'}
                            onClick={ this.onSwitchThemeStyle } 
                        >
                            <img data-type={ item.type } src={ item.svg } alt={ item.title } />
                            <Icon iconName="#iconcheck-blue" size="1" />
                        </div>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        themeStyle: state.themeStyle
    }
};

const mapDispatchToProps = dispatch => ({
    switchThemeStyle: data => {
        dispatch(switchThemeStyle(data));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ThemeStyle);

