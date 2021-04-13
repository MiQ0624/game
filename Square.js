// 受控组件，board的子组件
import React, {Component} from 'react'

// 在react中通常会把代表事件的监听props命名为on[event]，把处理事件的监听方法命名为handle[event]

// class Square extends React.Component {
//     // 构造函数初始化state，通过state实现记忆点击位置并实现落子
//     constructor(props){
//         super(props);//在js class中，定义子类的构造函数时必须调用super方法
//         this.state={value:null,};
//     }
//     render() {
//       return (
//         //   button被点击时调用board中定义的onclick方法
//         <button className="square" onClick={()=>this.props.onClick()}>
//             {/* {this.props.value} */}{/* 接收Board传递过来的value */}
//           {this.props.value}{/* 每次点击，将棋盘中的内容渲染为X */}          
//         </button>
//       );
//     }
//   }

//   将Square组件重写为一个函数组件，因为当一个组件中只包含了一个render方法，并且不包含state时，使用函数组件会更简单
function Square(props){
    return (
        <button  onClick={props.onClick}>
            {props.value}
        </button>
    )
}




  export default Square;