import React, {Component} from 'react'
import reactDom from 'react-dom';


class AllGame extends React.Component {
    // 初始化state
    constructor(props){
        super(props);
        this.state={
            flag:true,
            value:'N',
            chess:['N','N','N','N','N','N','N','N','N']


          };
        //   this.handleClick=this.handleClick.bind(this);
    }


    handleClick=(i)=>{
        console.log(i);
        let ches=this.state.chess;
        let xflag=this.state.flag;
        ches[i]=this.state.flag?'X':'O';
        this.setState({
            chess:ches,
            flag:!xflag            
        })

    }
    renderSquare=(i)=> {
      return (
    //   <Square value={this.props.squares[i]} onClick={()=>{this.props.onClick(i)}} />
      <button  onClick={this.handleClick.bind(this,i)}>     {this.state.chess[i]} </button>
      );
    }

    

    render(){
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

export default AllGame;