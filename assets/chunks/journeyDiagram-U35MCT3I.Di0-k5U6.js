import{a as dt,g as K,f as ft,d as gt}from"./chunk-D6G4REZN.CdZ2r5OO.js";import{_ as s,g as mt,s as xt,a as kt,b as _t,q as bt,p as wt,c as A,d as W,e as vt,y as $t}from"../app.CVzzZfDj.js";import{d as tt}from"./arc.Clt709Ex.js";import"./framework.BTHFNYH-.js";import"./isIterateeCall.DmV5WHBc.js";import"./theme.GtFjoDy6.js";var X=function(){var t=s(function(g,i,r,u){for(r=r||{},u=g.length;u--;r[g[u]]=i);return r},"o"),e=[6,8,10,11,12,14,16,17,18],a=[1,9],l=[1,10],n=[1,11],h=[1,12],c=[1,13],y=[1,14],d={trace:s(function(){},"trace"),yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,taskName:18,taskData:19,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",18:"taskName",19:"taskData"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,2]],performAction:s(function(g,i,r,u,p,o,m){var k=o.length-1;switch(p){case 1:return o[k-1];case 2:this.$=[];break;case 3:o[k-1].push(o[k]),this.$=o[k-1];break;case 4:case 5:this.$=o[k];break;case 6:case 7:this.$=[];break;case 8:u.setDiagramTitle(o[k].substr(6)),this.$=o[k].substr(6);break;case 9:this.$=o[k].trim(),u.setAccTitle(this.$);break;case 10:case 11:this.$=o[k].trim(),u.setAccDescription(this.$);break;case 12:u.addSection(o[k].substr(8)),this.$=o[k].substr(8);break;case 13:u.addTask(o[k-1],o[k]),this.$="task";break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:a,12:l,14:n,16:h,17:c,18:y},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:15,11:a,12:l,14:n,16:h,17:c,18:y},t(e,[2,5]),t(e,[2,6]),t(e,[2,8]),{13:[1,16]},{15:[1,17]},t(e,[2,11]),t(e,[2,12]),{19:[1,18]},t(e,[2,4]),t(e,[2,9]),t(e,[2,10]),t(e,[2,13])],defaultActions:{},parseError:s(function(g,i){if(i.recoverable)this.trace(g);else{var r=new Error(g);throw r.hash=i,r}},"parseError"),parse:s(function(g){var i=this,r=[0],u=[],p=[null],o=[],m=this.table,k="",L=0,H=0,ht=2,Q=1,ut=o.slice.call(arguments,1),_=Object.create(this.lexer),S={yy:{}};for(var D in this.yy)Object.prototype.hasOwnProperty.call(this.yy,D)&&(S.yy[D]=this.yy[D]);_.setInput(g,S.yy),S.yy.lexer=_,S.yy.parser=this,typeof _.yylloc>"u"&&(_.yylloc={});var N=_.yylloc;o.push(N);var pt=_.options&&_.options.ranges;typeof S.yy.parseError=="function"?this.parseError=S.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function yt(w){r.length=r.length-2*w,p.length=p.length-w,o.length=o.length-w}s(yt,"popStack");function Z(){var w;return w=u.pop()||_.lex()||Q,typeof w!="number"&&(w instanceof Array&&(u=w,w=u.pop()),w=i.symbols_[w]||w),w}s(Z,"lex");for(var b,E,v,z,P={},B,T,J,O;;){if(E=r[r.length-1],this.defaultActions[E]?v=this.defaultActions[E]:((b===null||typeof b>"u")&&(b=Z()),v=m[E]&&m[E][b]),typeof v>"u"||!v.length||!v[0]){var Y="";O=[];for(B in m[E])this.terminals_[B]&&B>ht&&O.push("'"+this.terminals_[B]+"'");_.showPosition?Y="Parse error on line "+(L+1)+`:
`+_.showPosition()+`
Expecting `+O.join(", ")+", got '"+(this.terminals_[b]||b)+"'":Y="Parse error on line "+(L+1)+": Unexpected "+(b==Q?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(Y,{text:_.match,token:this.terminals_[b]||b,line:_.yylineno,loc:N,expected:O})}if(v[0]instanceof Array&&v.length>1)throw new Error("Parse Error: multiple actions possible at state: "+E+", token: "+b);switch(v[0]){case 1:r.push(b),p.push(_.yytext),o.push(_.yylloc),r.push(v[1]),b=null,H=_.yyleng,k=_.yytext,L=_.yylineno,N=_.yylloc;break;case 2:if(T=this.productions_[v[1]][1],P.$=p[p.length-T],P._$={first_line:o[o.length-(T||1)].first_line,last_line:o[o.length-1].last_line,first_column:o[o.length-(T||1)].first_column,last_column:o[o.length-1].last_column},pt&&(P._$.range=[o[o.length-(T||1)].range[0],o[o.length-1].range[1]]),z=this.performAction.apply(P,[k,H,L,S.yy,v[1],p,o].concat(ut)),typeof z<"u")return z;T&&(r=r.slice(0,-1*T*2),p=p.slice(0,-1*T),o=o.slice(0,-1*T)),r.push(this.productions_[v[1]][0]),p.push(P.$),o.push(P._$),J=m[r[r.length-2]][r[r.length-1]],r.push(J);break;case 3:return!0}}return!0},"parse")},x=function(){var g={EOF:1,parseError:s(function(i,r){if(this.yy.parser)this.yy.parser.parseError(i,r);else throw new Error(i)},"parseError"),setInput:s(function(i,r){return this.yy=r||this.yy||{},this._input=i,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:s(function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var r=i.match(/(?:\r\n?|\n).*/g);return r?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},"input"),unput:s(function(i){var r=i.length,u=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r),this.offset-=r;var p=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),u.length-1&&(this.yylineno-=u.length-1);var o=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:u?(u.length===p.length?this.yylloc.first_column:0)+p[p.length-u.length].length-u[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[o[0],o[0]+this.yyleng-r]),this.yyleng=this.yytext.length,this},"unput"),more:s(function(){return this._more=!0,this},"more"),reject:s(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:s(function(i){this.unput(this.match.slice(i))},"less"),pastInput:s(function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:s(function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:s(function(){var i=this.pastInput(),r=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+r+"^"},"showPosition"),test_match:s(function(i,r){var u,p,o;if(this.options.backtrack_lexer&&(o={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(o.yylloc.range=this.yylloc.range.slice(0))),p=i[0].match(/(?:\r\n?|\n).*/g),p&&(this.yylineno+=p.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:p?p[p.length-1].length-p[p.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],u=this.performAction.call(this,this.yy,this,r,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),u)return u;if(this._backtrack){for(var m in o)this[m]=o[m];return!1}return!1},"test_match"),next:s(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,r,u,p;this._more||(this.yytext="",this.match="");for(var o=this._currentRules(),m=0;m<o.length;m++)if(u=this._input.match(this.rules[o[m]]),u&&(!r||u[0].length>r[0].length)){if(r=u,p=m,this.options.backtrack_lexer){if(i=this.test_match(u,o[m]),i!==!1)return i;if(this._backtrack){r=!1;continue}else return!1}else if(!this.options.flex)break}return r?(i=this.test_match(r,o[p]),i!==!1?i:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:s(function(){var i=this.next();return i||this.lex()},"lex"),begin:s(function(i){this.conditionStack.push(i)},"begin"),popState:s(function(){var i=this.conditionStack.length-1;return i>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:s(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:s(function(i){return i=this.conditionStack.length-1-Math.abs(i||0),i>=0?this.conditionStack[i]:"INITIAL"},"topState"),pushState:s(function(i){this.begin(i)},"pushState"),stateStackSize:s(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:s(function(i,r,u,p){switch(u){case 0:break;case 1:break;case 2:return 10;case 3:break;case 4:break;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),14;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 18;case 16:return 19;case 17:return":";case 18:return 6;case 19:return"INVALID"}},"anonymous"),rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18,19],inclusive:!0}}};return g}();d.lexer=x;function f(){this.yy={}}return s(f,"Parser"),f.prototype=d,d.Parser=f,new f}();X.parser=X;var Tt=X,C="",q=[],j=[],V=[],Mt=s(function(){q.length=0,j.length=0,C="",V.length=0,$t()},"clear"),St=s(function(t){C=t,q.push(t)},"addSection"),Et=s(function(){return q},"getSections"),At=s(function(){let t=et();const e=100;let a=0;for(;!t&&a<e;)t=et(),a++;return j.push(...V),j},"getTasks"),It=s(function(){const t=[];return j.forEach(e=>{e.people&&t.push(...e.people)}),[...new Set(t)].sort()},"updateActors"),Pt=s(function(t,e){const a=e.substr(1).split(":");let l=0,n=[];a.length===1?(l=Number(a[0]),n=[]):(l=Number(a[0]),n=a[1].split(","));const h=n.map(y=>y.trim()),c={section:C,type:C,people:h,task:t,score:l};V.push(c)},"addTask"),Ct=s(function(t){const e={section:C,type:C,description:t,task:t,classes:[]};j.push(e)},"addTaskOrg"),et=s(function(){const t=s(function(a){return V[a].processed},"compileTask");let e=!0;for(const[a,l]of V.entries())t(a),e=e&&l.processed;return e},"compileTasks"),jt=s(function(){return It()},"getActors"),it={getConfig:s(()=>A().journey,"getConfig"),clear:Mt,setDiagramTitle:wt,getDiagramTitle:bt,setAccTitle:_t,getAccTitle:kt,setAccDescription:xt,getAccDescription:mt,addSection:St,getSections:Et,getTasks:At,addTask:Pt,addTaskOrg:Ct,getActors:jt},Vt=s(t=>`.label {
    font-family: ${t.fontFamily};
    color: ${t.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${t.textColor}
  }

  .legend {
    fill: ${t.textColor};
    font-family: ${t.fontFamily};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${t.textColor}
  }

  .face {
    ${t.faceColor?`fill: ${t.faceColor}`:"fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${t.fontFamily};
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${t.fillType0?`fill: ${t.fillType0}`:""};
  }
  .task-type-1, .section-type-1  {
    ${t.fillType0?`fill: ${t.fillType1}`:""};
  }
  .task-type-2, .section-type-2  {
    ${t.fillType0?`fill: ${t.fillType2}`:""};
  }
  .task-type-3, .section-type-3  {
    ${t.fillType0?`fill: ${t.fillType3}`:""};
  }
  .task-type-4, .section-type-4  {
    ${t.fillType0?`fill: ${t.fillType4}`:""};
  }
  .task-type-5, .section-type-5  {
    ${t.fillType0?`fill: ${t.fillType5}`:""};
  }
  .task-type-6, .section-type-6  {
    ${t.fillType0?`fill: ${t.fillType6}`:""};
  }
  .task-type-7, .section-type-7  {
    ${t.fillType0?`fill: ${t.fillType7}`:""};
  }

  .actor-0 {
    ${t.actor0?`fill: ${t.actor0}`:""};
  }
  .actor-1 {
    ${t.actor1?`fill: ${t.actor1}`:""};
  }
  .actor-2 {
    ${t.actor2?`fill: ${t.actor2}`:""};
  }
  .actor-3 {
    ${t.actor3?`fill: ${t.actor3}`:""};
  }
  .actor-4 {
    ${t.actor4?`fill: ${t.actor4}`:""};
  }
  .actor-5 {
    ${t.actor5?`fill: ${t.actor5}`:""};
  }
`,"getStyles"),Ft=Vt,U=s(function(t,e){return gt(t,e)},"drawRect"),Lt=s(function(t,e){const a=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),l=t.append("g");l.append("circle").attr("cx",e.cx-15/3).attr("cy",e.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),l.append("circle").attr("cx",e.cx+15/3).attr("cy",e.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666");function n(y){const d=tt().startAngle(Math.PI/2).endAngle(3*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);y.append("path").attr("class","mouth").attr("d",d).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}s(n,"smile");function h(y){const d=tt().startAngle(3*Math.PI/2).endAngle(5*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);y.append("path").attr("class","mouth").attr("d",d).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}s(h,"sad");function c(y){y.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return s(c,"ambivalent"),e.score>3?n(l):e.score<3?h(l):c(l),a},"drawFace"),nt=s(function(t,e){const a=t.append("circle");return a.attr("cx",e.cx),a.attr("cy",e.cy),a.attr("class","actor-"+e.pos),a.attr("fill",e.fill),a.attr("stroke",e.stroke),a.attr("r",e.r),a.class!==void 0&&a.attr("class",a.class),e.title!==void 0&&a.append("title").text(e.title),a},"drawCircle"),st=s(function(t,e){return ft(t,e)},"drawText"),Bt=s(function(t,e){function a(n,h,c,y,d){return n+","+h+" "+(n+c)+","+h+" "+(n+c)+","+(h+y-d)+" "+(n+c-d*1.2)+","+(h+y)+" "+n+","+(h+y)}s(a,"genPoints");const l=t.append("polygon");l.attr("points",a(e.x,e.y,50,20,7)),l.attr("class","labelBox"),e.y=e.y+e.labelMargin,e.x=e.x+.5*e.labelMargin,st(t,e)},"drawLabel"),Ot=s(function(t,e,a){const l=t.append("g"),n=K();n.x=e.x,n.y=e.y,n.fill=e.fill,n.width=a.width*e.taskCount+a.diagramMarginX*(e.taskCount-1),n.height=a.height,n.class="journey-section section-type-"+e.num,n.rx=3,n.ry=3,U(l,n),rt(a)(e.text,l,n.x,n.y,n.width,n.height,{class:"journey-section section-type-"+e.num},a,e.colour)},"drawSection"),at=-1,Rt=s(function(t,e,a){const l=e.x+a.width/2,n=t.append("g");at++;const h=300+5*30;n.append("line").attr("id","task"+at).attr("x1",l).attr("y1",e.y).attr("x2",l).attr("y2",h).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),Lt(n,{cx:l,cy:300+(5-e.score)*30,score:e.score});const c=K();c.x=e.x,c.y=e.y,c.fill=e.fill,c.width=a.width,c.height=a.height,c.class="task task-type-"+e.num,c.rx=3,c.ry=3,U(n,c);let y=e.x+14;e.people.forEach(d=>{const x=e.actors[d].color,f={cx:y,cy:e.y,r:7,fill:x,stroke:"#000",title:d,pos:e.actors[d].position};nt(n,f),y+=10}),rt(a)(e.task,n,c.x,c.y,c.width,c.height,{class:"task"},a,e.colour)},"drawTask"),Dt=s(function(t,e){dt(t,e)},"drawBackgroundRect"),rt=function(){function t(n,h,c,y,d,x,f,g){const i=h.append("text").attr("x",c+d/2).attr("y",y+x/2+5).style("font-color",g).style("text-anchor","middle").text(n);l(i,f)}s(t,"byText");function e(n,h,c,y,d,x,f,g,i){const{taskFontSize:r,taskFontFamily:u}=g,p=n.split(/<br\s*\/?>/gi);for(let o=0;o<p.length;o++){const m=o*r-r*(p.length-1)/2,k=h.append("text").attr("x",c+d/2).attr("y",y).attr("fill",i).style("text-anchor","middle").style("font-size",r).style("font-family",u);k.append("tspan").attr("x",c+d/2).attr("dy",m).text(p[o]),k.attr("y",y+x/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),l(k,f)}}s(e,"byTspan");function a(n,h,c,y,d,x,f,g){const i=h.append("switch"),r=i.append("foreignObject").attr("x",c).attr("y",y).attr("width",d).attr("height",x).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");r.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(n),e(n,i,c,y,d,x,f,g),l(r,f)}s(a,"byFo");function l(n,h){for(const c in h)c in h&&n.attr(c,h[c])}return s(l,"_setTextAttrs"),function(n){return n.textPlacement==="fo"?a:n.textPlacement==="old"?t:e}}(),Nt=s(function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},"initGraphics"),F={drawRect:U,drawCircle:nt,drawSection:Ot,drawText:st,drawLabel:Bt,drawTask:Rt,drawBackgroundRect:Dt,initGraphics:Nt},zt=s(function(t){Object.keys(t).forEach(function(e){R[e]=t[e]})},"setConf"),M={};function ot(t){const e=A().journey;let a=60;Object.keys(M).forEach(l=>{const n=M[l].color,h={cx:20,cy:a,r:7,fill:n,stroke:"#000",pos:M[l].position};F.drawCircle(t,h);const c={x:40,y:a+7,fill:"#666",text:l,textMargin:e.boxTextMargin|5};F.drawText(t,c),a+=20})}s(ot,"drawActorLegend");var R=A().journey,I=R.leftMargin,Yt=s(function(t,e,a,l){const n=A().journey,h=A().securityLevel;let c;h==="sandbox"&&(c=W("#i"+e));const y=h==="sandbox"?W(c.nodes()[0].contentDocument.body):W("body");$.init();const d=y.select("#"+e);F.initGraphics(d);const x=l.db.getTasks(),f=l.db.getDiagramTitle(),g=l.db.getActors();for(const m in M)delete M[m];let i=0;g.forEach(m=>{M[m]={color:n.actorColours[i%n.actorColours.length],position:i},i++}),ot(d),$.insert(0,0,I,Object.keys(M).length*50),Wt(d,x,0);const r=$.getBounds();f&&d.append("text").text(f).attr("x",I).attr("font-size","4ex").attr("font-weight","bold").attr("y",25);const u=r.stopy-r.starty+2*n.diagramMarginY,p=I+r.stopx+2*n.diagramMarginX;vt(d,u,p,n.useMaxWidth),d.append("line").attr("x1",I).attr("y1",n.height*4).attr("x2",p-I-4).attr("y2",n.height*4).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)");const o=f?70:0;d.attr("viewBox",`${r.startx} -25 ${p} ${u+o}`),d.attr("preserveAspectRatio","xMinYMin meet"),d.attr("height",u+o+25)},"draw"),$={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:s(function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},"init"),updateVal:s(function(t,e,a,l){t[e]===void 0?t[e]=a:t[e]=l(a,t[e])},"updateVal"),updateBounds:s(function(t,e,a,l){const n=A().journey,h=this;let c=0;function y(d){return s(function(x){c++;const f=h.sequenceItems.length-c+1;h.updateVal(x,"starty",e-f*n.boxMargin,Math.min),h.updateVal(x,"stopy",l+f*n.boxMargin,Math.max),h.updateVal($.data,"startx",t-f*n.boxMargin,Math.min),h.updateVal($.data,"stopx",a+f*n.boxMargin,Math.max),d!=="activation"&&(h.updateVal(x,"startx",t-f*n.boxMargin,Math.min),h.updateVal(x,"stopx",a+f*n.boxMargin,Math.max),h.updateVal($.data,"starty",e-f*n.boxMargin,Math.min),h.updateVal($.data,"stopy",l+f*n.boxMargin,Math.max))},"updateItemBounds")}s(y,"updateFn"),this.sequenceItems.forEach(y())},"updateBounds"),insert:s(function(t,e,a,l){const n=Math.min(t,a),h=Math.max(t,a),c=Math.min(e,l),y=Math.max(e,l);this.updateVal($.data,"startx",n,Math.min),this.updateVal($.data,"starty",c,Math.min),this.updateVal($.data,"stopx",h,Math.max),this.updateVal($.data,"stopy",y,Math.max),this.updateBounds(n,c,h,y)},"insert"),bumpVerticalPos:s(function(t){this.verticalPos=this.verticalPos+t,this.data.stopy=this.verticalPos},"bumpVerticalPos"),getVerticalPos:s(function(){return this.verticalPos},"getVerticalPos"),getBounds:s(function(){return this.data},"getBounds")},G=R.sectionFills,lt=R.sectionColours,Wt=s(function(t,e,a){const l=A().journey;let n="";const h=l.height*2+l.diagramMarginY,c=a+h;let y=0,d="#CCC",x="black",f=0;for(const[g,i]of e.entries()){if(n!==i.section){d=G[y%G.length],f=y%G.length,x=lt[y%lt.length];let u=0;const p=i.section;for(let m=g;m<e.length&&e[m].section==p;m++)u=u+1;const o={x:g*l.taskMargin+g*l.width+I,y:50,text:i.section,fill:d,num:f,colour:x,taskCount:u};F.drawSection(t,o,l),n=i.section,y++}const r=i.people.reduce((u,p)=>(M[p]&&(u[p]=M[p]),u),{});i.x=g*l.taskMargin+g*l.width+I,i.y=c,i.width=l.diagramMarginX,i.height=l.diagramMarginY,i.colour=x,i.fill=d,i.num=f,i.actors=r,F.drawTask(t,i,l),$.insert(i.x,i.y,i.x+i.width+l.taskMargin,300+5*30)}},"drawTasks"),ct={setConf:zt,draw:Yt},Xt={parser:Tt,db:it,renderer:ct,styles:Ft,init:s(t=>{ct.setConf(t.journey),it.clear()},"init")};export{Xt as diagram};
