import React, { PureComponent, translate } from 'react';
import { connect } from 'react-redux';
import Icon from '@/components/icon';
import { switchThemeColor } from '@/redux/actions/setting';
import { getInfoFromLocalStorage, saveSetting } from '@/utils';
import '@/assets/css/components/themeColor.scss';

class ThemeColor extends PureComponent {
    state = {
        colorList: [
            { title: translate('color_1'), selected: true , color: `rgb(24, 144, 255)` },
            { title: translate('color_2'), selected: false , color: `rgb(245, 34, 45)` },
            { title: translate('color_3'), selected: false , color: `rgb(250, 84, 28)` },
            { title: translate('color_4'), selected: false , color: `rgb(250, 173, 20)` },
            { title: translate('color_5'), selected: false , color: `rgb(19, 194, 194)` },
            { title: translate('color_6'), selected: false , color: `rgb(82, 196, 26)` }, 
            { title: translate('color_7'), selected: false , color: `rgb(47, 84, 235)` },
            { title: translate('color_8'), selected: false , color: `rgb(114, 46, 209)` }
        ]
    }
    componentDidMount(){
        this.getSelectedThemeColor();
    }
    getSelectedThemeColor(){
        const selectedThemeColor = getInfoFromLocalStorage('setting', 'themeColor') || this.props.themeColor;
        const { colorList } = this.state;
        const { getColorTitle, switchThemeColor } = this.props;
        let newColorList = [];
        colorList.forEach(item => {
            item.selected = false;
            if(item.color === selectedThemeColor) { 
                item.selected = true;
                getColorTitle(item.title);
                switchThemeColor(selectedThemeColor);
            };
            newColorList.push(item);
        });
        this.setState({colorList: newColorList});
    }
    onSwitchThemeColor = (e) => {
        const { colorList } = this.state;
        const { getColorTitle, switchThemeColor } = this.props;
        let newColorList = [];
        colorList.forEach(item => {
            item.selected = false;
            if(item.color === e.target.dataset.color) { 
                item.selected = true;
                saveSetting({themeColor: item.color});
                getColorTitle(item.title);
                switchThemeColor(item.color);
            };
            newColorList.push(item);
        });
        this.setState({colorList: newColorList});
    }
    render(){
        const { colorList } = this.state;
        return (
            <div className="yyn-themeColor">
                {
                    colorList && colorList.map(item => (
                        <span 
                            key={ item.color }
                            data-color={ item.color } 
                            title={ item.title } 
                            style={ { background: item.color }}
                            className={ item.selected ? 'color-block' : 'color-block hideIcon'}
                            onClick={ this.onSwitchThemeColor } 
                        >
                            <Icon iconName="#iconcheck" size="1" />
                        </span>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        themeColor: state.themeColor
    }
};

const mapDispatchToProps = dispatch => ({
    switchThemeColor: data => {
        dispatch(switchThemeColor(data));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ThemeColor);
