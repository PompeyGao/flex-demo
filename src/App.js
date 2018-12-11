import React, { Component } from 'react';
// import logo from './logo.svg';
import AttrData from './AttrData';
import ControlStyle from './ControlStyle';
import InputList from './InputList';
import './App.css';

const attrData = AttrData.getAttrData();
const getAttrLooped = AttrData.getAttrLooped;
const getAttr = AttrData.getAttr;
let justifyContent = attrData.justifyContent;
let flexDirection = attrData.flexDirection;
let flexWrap = attrData.flexWrap;
let alignItems = attrData.alignItems;
let alignContent = attrData.alignContent;

class App extends Component {
    state = {
        flexObj: '',
        ctrl: [
            {
                data: 5,
                info: '条目数量',
                fun: input => {
                    this.notifyInputChanged(0, input);
                }
            },
            {
                data: 1000,
                info: '容器宽度',
                fun: input => {
                    this.notifyInputChanged(1, input);
                }
            },
            {
                data: 300,
                info: '容器高度',
                fun: input => {
                    this.notifyInputChanged(2, input);
                }
            },
            {
                data: 'auto',
                info: '条目宽度',
                fun: input => {
                    this.notifyInputChanged(3, input);
                }
            },
            {
                data: 'auto',
                info: '条目高度',
                fun: input => {
                    this.notifyInputChanged(4, input);
                }
            }
        ]
    };
    componentDidMount() {
        this.notifyAttrChanged();
    }

    /**
     * 底部监听--属性变化
     */
    notifyAttrChanged() {
        this.setState({
            flexObj: {
                'flex-direction': getAttr(flexDirection), //元素排列方向
                'flex-wrap': getAttr(flexWrap), //换行
                'justify-content': getAttr(justifyContent), //水平对齐方式
                'align-items': getAttr(alignItems), //垂直对齐方式
                'align-content': getAttr(alignContent) //多行垂直对齐方式,
            }
        });
    }
    formItem() {
        let color = [];
        for (let index = 0; index < this.state.ctrl[0].data; index++) {
            color.push(App.randomRGB(0.8));
        }
        return color.map((i, index) => {
            return (
                <div
                    className="title"
                    style={{ backgroundColor: i }}
                    key={index}
                >
                    Flex {index}
                </div>
            );
        });
    }

    /**
     * 点击下方条目
     * @param index
     */
    onItemClick(index) {
        switch (index) {
            case 0:
                flexDirection.index++;
                break;
            case 1:
                flexWrap.index++;
                break;
            case 2:
                justifyContent.index++;
                break;
            case 3:
                alignItems.index++;
                break;
            case 4:
                alignContent.index++;
                break;
            default:
                break;
        }
        this.notifyAttrChanged();
    }

    /**
     * 输入监听--数据变化
     * @param index
     * @param input
     */
    notifyInputChanged(index, input) {
        let ctrl = this.state.ctrl;
        ctrl[index].data = input;
        this.setState({
            ctrl
        });
    }

    render() {
        return (
            <div>
                <InputList
                    ctrl={this.state.ctrl}
                    onCountChanged={this.state.ctrl[0].fun}
                    onBoxWidthChanged={this.state.ctrl[1].fun}
                    onBoxHeightChanged={this.state.ctrl[2].fun}
                    onItemWidthChanged={this.state.ctrl[3].fun}
                    onItemHeightChanged={this.state.ctrl[4].fun}
                />
                <div
                    className="flex"
                    style={{
                        width: this.state.ctrl[1].data + 'px',
                        height: this.state.ctrl[2].data + 'px',
                        flexDirection: getAttrLooped(flexDirection),
                        flexWrap: getAttrLooped(flexWrap),
                        justifyContent: getAttrLooped(justifyContent),
                        alignItems: getAttrLooped(alignItems),
                        alignContent: getAttrLooped(alignContent)
                    }}
                >
                    {this.formItem()}
                </div>
                <ControlStyle
                    data={this.state.flexObj}
                    onItemClick={this.onItemClick.bind(this)}
                />
            </div>
        );
    }

    /**
     * 随机颜色
     * @param a 透明度--默认为1
     * @returns {string}
     */
    static randomRGB(a = 1) {
        return `rgba(${App.rangeInt(0, 255)},${App.rangeInt(
            0,
            255
        )},${App.rangeInt(0, 255)},${a})`;
    }
    static rangeInt(s, e) {
        let max = Math.max(s, e);
        let min = Math.min(s, e) - 1;
        return min + Math.ceil(Math.random() * (max - min));
    }
}

export default App;
