import React, { Component } from 'react';
import ColorContext from '../contexts/color';

// 색깔 배열
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// static contextType을 사용하기 위해 클래형 컴포넌트로 변환
class SelectColors extends Component {
    // static contextType 값을 지정
    // this.context를 조회했을 때 현재 Context의 vlaue를 가리키게 된다.
    static contextType = ColorContext;

    // 좌클릭 색 변환 함수
    handleSetColor = (color) => {
        this.context.actions.setColor(color);
    };

    // 우클릭 색 변환 함수
    handleSetSubColor = (subcolor) => {
        this.context.actions.setSubColor(subcolor);
    };
    render() {
        return (
            <div>
                <h2>색상을 선택하세요.</h2>
                <div style={{ display: 'flex' }}>
                    {colors.map((color) => (
                        <div
                            key={color}
                            style={{
                                background: color,
                                width: '24px',
                                height: '24px',
                                cursor: 'pointer',
                            }}
                            // 마우스 좌클릭 이벤트(onClick)
                            onClick={() => this.handleSetColor(color)}
                            // 마우스 우클릭 이벤트(onContextMenu)
                            onContextMenu={(e) => {
                                // 우클릭 시 브라우저 메뉴를 호출하지 않게 하는 코드
                                e.preventDefault();
                                this.handleSetSubColor(color);
                            }}
                        />
                    ))}
                </div>
                <hr />
            </div>
        );
    }
}

export default SelectColors;
