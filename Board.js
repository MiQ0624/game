// square的父组件，拥有对square组件数据的控制权
import React from 'react'

import Square from './Square'

class Board extends React.Component {
    renderSquare(i) {
        // return中的内容是传递的props参数，包括了value和onClick
      return (<Square value={this.props.squares[i]}//将square数组中的元素传递给Square
      onClick={()=>{this.props.onClick(i)}} />);//构造handleClick函数，每当square被点击时调用这个函数
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

  export default Board;
