// 顶层组件，拥有对board组件数据的完全控制权，实现时间旅行功能
import React, {Component} from 'react'
import reactDom from 'react-dom';

import Board from './Board'


class Game extends React.Component {
    // 初始化state
    constructor(props){
        super(props);
        this.state={
            history:[ { squares:Array(9).fill(null) } ] ,
            stepNumber: 0,
            xFlag: true
          };
    }

    handleClick(i){
        var btns=document.querySelectorAll('button');
        // const history = this.state.history;
        //如果回到过去再重新走一步，那么之前的历史记录需要重新修改
        const history =this.state.history.slice(0,this.state.stepNumber+1);
        const current= history[history.length - 1];
        const squares=current.squares.slice();//干嘛的:调用.slice()方法创建了一个squares数组的副本，，，用于时间旅行
        // 当有玩家获胜或某个square已被填充时，函数不做任何处理
        if(calculateWinner(squares) || squares[i]){
            return ;
        }
        squares[i] = this.state.xFlag ? 'X' : 'O' ;

        // document.body.style = 'background: red;';
        // btns.style='color:blue';
        // console.log(btns);

        document.body.style= this.state.xFlag ? 'background:yellow':'background:green';
        btns[i].style= this.state.xFlag ?'background: red;':'background:blue';


        this.setState({ history:history.concat([{squares:squares}]) ,//concat方法不会改变原数组
            stepNumber:history.length,    //更新stepNumber
            xFlag: !this.state.xFlag});        
    }

    jumpTo(step){
        this.setState(
            { stepNumber: step,
            xFlag:(step % 2) === 0 }//当stepNumber为偶数时，xflag为true
            )
    }

    render() {
        //使用最新一次历史记录来确定并展示游戏状态
        const history = this.state.history;
        // const current= history[history.length-1];
        const current = history[this.state.stepNumber];//修改使代码根据当前stepNumber渲染
        const winner= calculateWinner(current.squares);

        const moves = history.map((steparr,step)=>{
            const backSteps = step?'回到第'+step+'步':'重新开始';
                return (
                    // key作为时间旅行的关键字使用，因为不涉及删除、新增、排序等操作，所以使用步骤索引作为key是安全的
                    <li key={step}> 
                     <button onClick={()=>{this.jumpTo(step)}}> {backSteps} </button>
                    </li> 
                );  
            });

        let tips;

        if(winner){
            tips='获胜者是：'+winner;
        }else{
            tips= '下一步： '+(this.state.xFlag ? 'X' : 'O' );
        }

      return (
        <div className="game">
          <div className="game-board">
            <div>{tips}</div>
              {/* 啥意思？ */}
            <Board squares={current.squares} onClick={(i)=>this.handleClick(i)} />
          </div>
          <div className="game-info">   
            
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }

  

  export default Game;


//   判断胜负
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }