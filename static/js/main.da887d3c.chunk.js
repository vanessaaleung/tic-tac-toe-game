(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(6),l=a(1),o=a(2),s=a(3),c=a(4),i=a(0),u=a.n(i),m=a(7),h=a.n(m);a(15);function f(e){return u.a.createElement("button",{className:"square",onClick:e.onClick,style:{backgroundColor:e.bgColor,color:e.textColor}},e.value)}var d=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).createBoard=function(){for(var e=[],t=0;t<3;t++){for(var a=[],n=3*t;n<3*t+3;n++)a.push(this.renderSquare(n));e.push(u.a.createElement("div",{key:t},a))}return e},e}return Object(o.a)(a,[{key:"renderSquare",value:function(e){var t=this;return u.a.createElement(f,{key:e,value:this.props.squares[e],onClick:function(){return t.props.onClick(e)},bgColor:this.props.bgColor[e],textColor:this.props.textColor[e]})}},{key:"render",value:function(){return u.a.createElement("div",null,this.createBoard())}}]),a}(u.a.Component),b=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleName=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(r.a)({},t,a))},n.state={history:[{squares:Array(9).fill(null),bgColor:Array(9).fill("transparent"),textColor:Array(9).fill("black"),row:0,column:0}],stepNumber:0,xIsNext:!0,descending:!1,nameX:"",nameO:""},n}return Object(o.a)(a,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1],n=a.squares.slice(),r=a.bgColor,l=a.textColor,o=Math.floor(e/3+1),s=Math.floor(e%3+1);v(n,r)||n[e]||(n[e]=this.state.xIsNext?"X":"O",l[e]=this.state.xIsNext?"black":"#ff7272",this.setState({history:t.concat([{squares:n,bgColor:r,textColor:l,row:o,col:s}]),stepNumber:t.length,xIsNext:!this.state.xIsNext,descending:!1,nameX:this.state.nameX,nameO:this.state.nameO}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"handleSort",value:function(){this.setState((function(e){return{descending:!e.descending}}))}},{key:"handleNew",value:function(){this.setState((function(e){return{history:[{squares:Array(9).fill(null),bgColor:Array(9).fill("transparent"),textColor:Array(9).fill("black"),row:0,column:0}],stepNumber:0,xIsNext:!0,descending:!1,nameX:"",nameO:""}}))}},{key:"render",value:function(){var e,t,a=this,n=this.state.history,r=n[this.state.stepNumber],l=this.state.nameX,o=this.state.nameO,s=v(r.squares,r.bgColor);return this.state.nameX&&this.state.nameO?(e=n.map((function(e,t){var r=t?"Go to move #"+t:"Go to game start",l=0!==t?" ("+[n[t].row,n[t].col].toString()+")":null;return u.a.createElement("li",{key:t},t===a.state.stepNumber?u.a.createElement("button",{class:"moveBtn",onClick:function(){s||a.jumpTo(t)}},u.a.createElement("b",null,r,l)):u.a.createElement("button",{class:"moveBtn",onClick:function(){s||a.jumpTo(t)}},r,l))})),t=s&&"Draw"!==s?"Winner: "+("X"===s?l:o):"Draw"===s?"Draw":"Next player: "+(this.state.xIsNext?l:o)):(e="",t=""),u.a.createElement("div",{className:"game"},u.a.createElement("div",{className:"game-name"},u.a.createElement("h1",null,"Tic-Tac-Toe")),u.a.createElement("div",{className:"game-content"},u.a.createElement("div",{className:"game-board"},u.a.createElement(d,{squares:r.squares,onClick:function(e){return a.handleClick(e)},bgColor:r.bgColor,textColor:r.textColor})),u.a.createElement("div",{className:"game-info"},"Player 1 ",u.a.createElement("input",{type:"text",name:"nameX",onChange:this.handleName}),u.a.createElement("br",null),"Player 2 ",u.a.createElement("input",{type:"text",name:"nameO",onChange:this.handleName}),u.a.createElement("div",null,t),u.a.createElement("div",{className:"btn"},u.a.createElement("button",{className:"sortBtn",onClick:function(){return a.handleSort()}},"SORT MOVES"),u.a.createElement("button",{className:"newBtn",onClick:function(){return a.handleNew()}},"NEW GAME")),u.a.createElement("ol",null,this.state.descending?e.reverse():e))))}}]),a}(u.a.Component);function v(e,t){for(var a=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0,l=0;l<a.length;l++){var o=Object(n.a)(a[l],3),s=o[0],c=o[1],i=o[2];if(e[s]&&e[s]===e[c]&&e[s]===e[i])return t[s]=t[c]=t[i]="#ffd31d",e[s];e[s]&&e[c]&&e[i]&&(r+=1)}return 8===r?"Draw":null}h.a.render(u.a.createElement(b,null),document.getElementById("root"))},15:function(e,t,a){},9:function(e,t,a){e.exports=a(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.da887d3c.chunk.js.map