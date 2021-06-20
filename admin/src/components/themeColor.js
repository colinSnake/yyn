import React, { PureComponent, translate } from 'react';
import { connect } from 'react-redux';
import Icon from '@/components/icon';
import { switchThemeColor } from '@/redux/actions/setting';
import '@/assets/css/components/themeColor.scss';

class ThemeColor extends PureComponent {
    state = {
        colorList: [
            { id: 1, title: translate('color_1'), selected: true , color: `rgb(24, 144, 255)` },
            { id: 2, title: translate('color_2'), selected: false , color: `rgb(245, 34, 45)` },
            { id: 3, title: translate('color_3'), selected: false , color: `rgb(250, 84, 28)` },
            { id: 4, title: translate('color_4'), selected: false , color: `rgb(250, 173, 20)` },
            { id: 5, title: translate('color_5'), selected: false , color: `rgb(19, 194, 194)` },
            { id: 6, title: translate('color_6'), selected: false , color: `rgb(82, 196, 26)` }, 
            { id: 7, title: translate('color_7'), selected: false , color: `rgb(47, 84, 235)` },
            { id: 8, title: translate('color_8'), selected: false , color: `rgb(114, 46, 209)` }
        ]
    }
    componentDidMount(){
        this.getSelectedThemeColor();
    }
    getSelectedThemeColor(){
        const selectedThemeColor = localStorage.getItem('themeColor') ? JSON.parse(localStorage.getItem('themeColor')) : colorList[0];
        const { colorList } = this.state;
        const { getColorTitle, switchThemeColor } = this.props;
        let newColorList = [];
        colorList.forEach(item => {
            item.selected = false;
            if(item.id === selectedThemeColor.id) { 
                item.selected = true;
                getColorTitle(selectedThemeColor.title);
                switchThemeColor(selectedThemeColor.color);
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
            if(item.id === Number(e.target.dataset.id)) { 
                item.selected = true;
                localStorage.setItem('themeColor', JSON.stringify(item));
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
                    colorList && colorList.map(item => (<span data-id={ item.id } onClick={ this.onSwitchThemeColor } title={ item.title } key={ item.id } className={ item.selected ? 'color-block' : 'color-block hideIcon'} style={ { background: item.color }}><Icon iconName="#iconcheck" size="1" /></span>))
                }
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    switchThemeColor: data => {
        dispatch(switchThemeColor(data));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ThemeColor);
