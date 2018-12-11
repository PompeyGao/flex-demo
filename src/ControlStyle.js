import React, { Component } from 'react';
import './ControlStyle.css';

export default class ControlStyle extends Component {
    render() {
        return <div>{this.clickList(this.props.data)}</div>;
    }

    clickList(data) {
        let dataList = [];
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                dataList.push({
                    name: key,
                    data: data[key]
                });
            }
        }

        return (
            <div id="btn-container">
                {dataList.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="btn"
                            onClick={() =>
                                this.props.onItemClick &&
                                this.props.onItemClick(index)
                            }
                        >
                            {item.name}: <br />
                            {item.data}
                            <br />
                        </div>
                    );
                })}
            </div>
        );
    }
}
