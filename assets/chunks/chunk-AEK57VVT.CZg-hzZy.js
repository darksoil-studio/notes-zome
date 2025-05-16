var ie=Object.defineProperty;var re=(e,t,s)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var T=(e,t,s)=>re(e,typeof t!="symbol"?t+"":t,s);var U;import{g as ne,s as ae}from"./chunk-RZ5BOZE2.CxjXAsKB.js";import{_ as d,l as k,c as $,r as oe,u as ce,S as le,k as H,y as he,a as de,b as ue,g as pe,s as ye,p as ge,q as me}from"../app.DGmP0RVq.js";var _t=function(){var e=d(function(I,n,a,g){for(a=a||{},g=I.length;g--;a[I[g]]=n);return a},"o"),t=[1,2],s=[1,3],o=[1,4],c=[2,4],r=[1,9],p=[1,11],u=[1,16],h=[1,17],S=[1,18],b=[1,19],v=[1,32],P=[1,20],Y=[1,21],A=[1,22],y=[1,23],L=[1,24],O=[1,26],F=[1,27],G=[1,28],N=[1,29],R=[1,30],tt=[1,31],et=[1,34],st=[1,35],it=[1,36],rt=[1,37],W=[1,33],m=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],nt=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],$t=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],yt={trace:d(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,SD:6,document:7,line:8,statement:9,classDefStatement:10,styleStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"-->":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,classDef:38,CLASSDEF_ID:39,CLASSDEF_STYLEOPTS:40,DEFAULT:41,style:42,STYLE_IDS:43,STYLEDEF_STYLEOPTS:44,class:45,CLASSENTITY_IDS:46,STYLECLASS:47,direction_tb:48,direction_bt:49,direction_rl:50,direction_lr:51,eol:52,";":53,EDGE_STATE:54,STYLE_SEPARATOR:55,left_of:56,right_of:57,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",6:"SD",14:"DESCR",15:"-->",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"classDef",39:"CLASSDEF_ID",40:"CLASSDEF_STYLEOPTS",41:"DEFAULT",42:"style",43:"STYLE_IDS",44:"STYLEDEF_STYLEOPTS",45:"class",46:"CLASSENTITY_IDS",47:"STYLECLASS",48:"direction_tb",49:"direction_bt",50:"direction_rl",51:"direction_lr",53:";",54:"EDGE_STATE",55:"STYLE_SEPARATOR",56:"left_of",57:"right_of"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,3],[9,4],[9,1],[9,2],[9,1],[9,4],[9,3],[9,6],[9,1],[9,1],[9,1],[9,1],[9,4],[9,4],[9,1],[9,2],[9,2],[9,1],[10,3],[10,3],[11,3],[12,3],[32,1],[32,1],[32,1],[32,1],[52,1],[52,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1]],performAction:d(function(I,n,a,g,f,i,E){var l=i.length-1;switch(f){case 3:return g.setRootDoc(i[l]),i[l];case 4:this.$=[];break;case 5:i[l]!="nl"&&(i[l-1].push(i[l]),this.$=i[l-1]);break;case 6:case 7:this.$=i[l];break;case 8:this.$="nl";break;case 12:this.$=i[l];break;case 13:const J=i[l-1];J.description=g.trimColon(i[l]),this.$=J;break;case 14:this.$={stmt:"relation",state1:i[l-2],state2:i[l]};break;case 15:const gt=g.trimColon(i[l]);this.$={stmt:"relation",state1:i[l-3],state2:i[l-1],description:gt};break;case 19:this.$={stmt:"state",id:i[l-3],type:"default",description:"",doc:i[l-1]};break;case 20:var j=i[l],X=i[l-2].trim();if(i[l].match(":")){var ot=i[l].split(":");j=ot[0],X=[X,ot[1]]}this.$={stmt:"state",id:j,type:"default",description:X};break;case 21:this.$={stmt:"state",id:i[l-3],type:"default",description:i[l-5],doc:i[l-1]};break;case 22:this.$={stmt:"state",id:i[l],type:"fork"};break;case 23:this.$={stmt:"state",id:i[l],type:"join"};break;case 24:this.$={stmt:"state",id:i[l],type:"choice"};break;case 25:this.$={stmt:"state",id:g.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:i[l-1].trim(),note:{position:i[l-2].trim(),text:i[l].trim()}};break;case 29:this.$=i[l].trim(),g.setAccTitle(this.$);break;case 30:case 31:this.$=i[l].trim(),g.setAccDescription(this.$);break;case 32:case 33:this.$={stmt:"classDef",id:i[l-1].trim(),classes:i[l].trim()};break;case 34:this.$={stmt:"style",id:i[l-1].trim(),styleClass:i[l].trim()};break;case 35:this.$={stmt:"applyClass",id:i[l-1].trim(),styleClass:i[l].trim()};break;case 36:g.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 37:g.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 38:g.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 39:g.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 42:case 43:this.$={stmt:"state",id:i[l].trim(),type:"default",description:""};break;case 44:this.$={stmt:"state",id:i[l-2].trim(),classes:[i[l].trim()],type:"default",description:""};break;case 45:this.$={stmt:"state",id:i[l-2].trim(),classes:[i[l].trim()],type:"default",description:""};break}},"anonymous"),table:[{3:1,4:t,5:s,6:o},{1:[3]},{3:5,4:t,5:s,6:o},{3:6,4:t,5:s,6:o},e([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],c,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:r,5:p,8:8,9:10,10:12,11:13,12:14,13:15,16:u,17:h,19:S,22:b,24:v,25:P,26:Y,27:A,28:y,29:L,32:25,33:O,35:F,37:G,38:N,42:R,45:tt,48:et,49:st,50:it,51:rt,54:W},e(m,[2,5]),{9:38,10:12,11:13,12:14,13:15,16:u,17:h,19:S,22:b,24:v,25:P,26:Y,27:A,28:y,29:L,32:25,33:O,35:F,37:G,38:N,42:R,45:tt,48:et,49:st,50:it,51:rt,54:W},e(m,[2,7]),e(m,[2,8]),e(m,[2,9]),e(m,[2,10]),e(m,[2,11]),e(m,[2,12],{14:[1,39],15:[1,40]}),e(m,[2,16]),{18:[1,41]},e(m,[2,18],{20:[1,42]}),{23:[1,43]},e(m,[2,22]),e(m,[2,23]),e(m,[2,24]),e(m,[2,25]),{30:44,31:[1,45],56:[1,46],57:[1,47]},e(m,[2,28]),{34:[1,48]},{36:[1,49]},e(m,[2,31]),{39:[1,50],41:[1,51]},{43:[1,52]},{46:[1,53]},e(nt,[2,42],{55:[1,54]}),e(nt,[2,43],{55:[1,55]}),e(m,[2,36]),e(m,[2,37]),e(m,[2,38]),e(m,[2,39]),e(m,[2,6]),e(m,[2,13]),{13:56,24:v,54:W},e(m,[2,17]),e($t,c,{7:57}),{24:[1,58]},{24:[1,59]},{23:[1,60]},{24:[2,46]},{24:[2,47]},e(m,[2,29]),e(m,[2,30]),{40:[1,61]},{40:[1,62]},{44:[1,63]},{47:[1,64]},{24:[1,65]},{24:[1,66]},e(m,[2,14],{14:[1,67]}),{4:r,5:p,8:8,9:10,10:12,11:13,12:14,13:15,16:u,17:h,19:S,21:[1,68],22:b,24:v,25:P,26:Y,27:A,28:y,29:L,32:25,33:O,35:F,37:G,38:N,42:R,45:tt,48:et,49:st,50:it,51:rt,54:W},e(m,[2,20],{20:[1,69]}),{31:[1,70]},{24:[1,71]},e(m,[2,32]),e(m,[2,33]),e(m,[2,34]),e(m,[2,35]),e(nt,[2,44]),e(nt,[2,45]),e(m,[2,15]),e(m,[2,19]),e($t,c,{7:72}),e(m,[2,26]),e(m,[2,27]),{4:r,5:p,8:8,9:10,10:12,11:13,12:14,13:15,16:u,17:h,19:S,21:[1,73],22:b,24:v,25:P,26:Y,27:A,28:y,29:L,32:25,33:O,35:F,37:G,38:N,42:R,45:tt,48:et,49:st,50:it,51:rt,54:W},e(m,[2,21])],defaultActions:{5:[2,1],6:[2,2],46:[2,46],47:[2,47]},parseError:d(function(I,n){if(n.recoverable)this.trace(I);else{var a=new Error(I);throw a.hash=n,a}},"parseError"),parse:d(function(I){var n=this,a=[0],g=[],f=[null],i=[],E=this.table,l="",j=0,X=0,ot=2,J=1,gt=i.slice.call(arguments,1),_=Object.create(this.lexer),z={yy:{}};for(var mt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,mt)&&(z.yy[mt]=this.yy[mt]);_.setInput(I,z.yy),z.yy.lexer=_,z.yy.parser=this,typeof _.yylloc>"u"&&(_.yylloc={});var St=_.yylloc;i.push(St);var ee=_.options&&_.options.ranges;typeof z.yy.parseError=="function"?this.parseError=z.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function se(C){a.length=a.length-2*C,f.length=f.length-C,i.length=i.length-C}d(se,"popStack");function vt(){var C;return C=g.pop()||_.lex()||J,typeof C!="number"&&(C instanceof Array&&(g=C,C=g.pop()),C=n.symbols_[C]||C),C}d(vt,"lex");for(var x,M,D,ft,V={},ct,w,Lt,lt;;){if(M=a[a.length-1],this.defaultActions[M]?D=this.defaultActions[M]:((x===null||typeof x>"u")&&(x=vt()),D=E[M]&&E[M][x]),typeof D>"u"||!D.length||!D[0]){var bt="";lt=[];for(ct in E[M])this.terminals_[ct]&&ct>ot&&lt.push("'"+this.terminals_[ct]+"'");_.showPosition?bt="Parse error on line "+(j+1)+`:
`+_.showPosition()+`
Expecting `+lt.join(", ")+", got '"+(this.terminals_[x]||x)+"'":bt="Parse error on line "+(j+1)+": Unexpected "+(x==J?"end of input":"'"+(this.terminals_[x]||x)+"'"),this.parseError(bt,{text:_.match,token:this.terminals_[x]||x,line:_.yylineno,loc:St,expected:lt})}if(D[0]instanceof Array&&D.length>1)throw new Error("Parse Error: multiple actions possible at state: "+M+", token: "+x);switch(D[0]){case 1:a.push(x),f.push(_.yytext),i.push(_.yylloc),a.push(D[1]),x=null,X=_.yyleng,l=_.yytext,j=_.yylineno,St=_.yylloc;break;case 2:if(w=this.productions_[D[1]][1],V.$=f[f.length-w],V._$={first_line:i[i.length-(w||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(w||1)].first_column,last_column:i[i.length-1].last_column},ee&&(V._$.range=[i[i.length-(w||1)].range[0],i[i.length-1].range[1]]),ft=this.performAction.apply(V,[l,X,j,z.yy,D[1],f,i].concat(gt)),typeof ft<"u")return ft;w&&(a=a.slice(0,-1*w*2),f=f.slice(0,-1*w),i=i.slice(0,-1*w)),a.push(this.productions_[D[1]][0]),f.push(V.$),i.push(V._$),Lt=E[a[a.length-2]][a[a.length-1]],a.push(Lt);break;case 3:return!0}}return!0},"parse")},te=function(){var I={EOF:1,parseError:d(function(n,a){if(this.yy.parser)this.yy.parser.parseError(n,a);else throw new Error(n)},"parseError"),setInput:d(function(n,a){return this.yy=a||this.yy||{},this._input=n,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:d(function(){var n=this._input[0];this.yytext+=n,this.yyleng++,this.offset++,this.match+=n,this.matched+=n;var a=n.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),n},"input"),unput:d(function(n){var a=n.length,g=n.split(/(?:\r\n?|\n)/g);this._input=n+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a),this.offset-=a;var f=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),g.length-1&&(this.yylineno-=g.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:g?(g.length===f.length?this.yylloc.first_column:0)+f[f.length-g.length].length-g[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-a]),this.yyleng=this.yytext.length,this},"unput"),more:d(function(){return this._more=!0,this},"more"),reject:d(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:d(function(n){this.unput(this.match.slice(n))},"less"),pastInput:d(function(){var n=this.matched.substr(0,this.matched.length-this.match.length);return(n.length>20?"...":"")+n.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:d(function(){var n=this.match;return n.length<20&&(n+=this._input.substr(0,20-n.length)),(n.substr(0,20)+(n.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:d(function(){var n=this.pastInput(),a=new Array(n.length+1).join("-");return n+this.upcomingInput()+`
`+a+"^"},"showPosition"),test_match:d(function(n,a){var g,f,i;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),f=n[0].match(/(?:\r\n?|\n).*/g),f&&(this.yylineno+=f.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:f?f[f.length-1].length-f[f.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+n[0].length},this.yytext+=n[0],this.match+=n[0],this.matches=n,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(n[0].length),this.matched+=n[0],g=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),g)return g;if(this._backtrack){for(var E in i)this[E]=i[E];return!1}return!1},"test_match"),next:d(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var n,a,g,f;this._more||(this.yytext="",this.match="");for(var i=this._currentRules(),E=0;E<i.length;E++)if(g=this._input.match(this.rules[i[E]]),g&&(!a||g[0].length>a[0].length)){if(a=g,f=E,this.options.backtrack_lexer){if(n=this.test_match(g,i[E]),n!==!1)return n;if(this._backtrack){a=!1;continue}else return!1}else if(!this.options.flex)break}return a?(n=this.test_match(a,i[f]),n!==!1?n:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:d(function(){var n=this.next();return n||this.lex()},"lex"),begin:d(function(n){this.conditionStack.push(n)},"begin"),popState:d(function(){var n=this.conditionStack.length-1;return n>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:d(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:d(function(n){return n=this.conditionStack.length-1-Math.abs(n||0),n>=0?this.conditionStack[n]:"INITIAL"},"topState"),pushState:d(function(n){this.begin(n)},"pushState"),stateStackSize:d(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:d(function(n,a,g,f){switch(g){case 0:return 41;case 1:return 48;case 2:return 49;case 3:return 50;case 4:return 51;case 5:break;case 6:break;case 7:return 5;case 8:break;case 9:break;case 10:break;case 11:break;case 12:return this.pushState("SCALE"),17;case 13:return 18;case 14:this.popState();break;case 15:return this.begin("acc_title"),33;case 16:return this.popState(),"acc_title_value";case 17:return this.begin("acc_descr"),35;case 18:return this.popState(),"acc_descr_value";case 19:this.begin("acc_descr_multiline");break;case 20:this.popState();break;case 21:return"acc_descr_multiline_value";case 22:return this.pushState("CLASSDEF"),38;case 23:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 24:return this.popState(),this.pushState("CLASSDEFID"),39;case 25:return this.popState(),40;case 26:return this.pushState("CLASS"),45;case 27:return this.popState(),this.pushState("CLASS_STYLE"),46;case 28:return this.popState(),47;case 29:return this.pushState("STYLE"),42;case 30:return this.popState(),this.pushState("STYLEDEF_STYLES"),43;case 31:return this.popState(),44;case 32:return this.pushState("SCALE"),17;case 33:return 18;case 34:this.popState();break;case 35:this.pushState("STATE");break;case 36:return this.popState(),a.yytext=a.yytext.slice(0,-8).trim(),25;case 37:return this.popState(),a.yytext=a.yytext.slice(0,-8).trim(),26;case 38:return this.popState(),a.yytext=a.yytext.slice(0,-10).trim(),27;case 39:return this.popState(),a.yytext=a.yytext.slice(0,-8).trim(),25;case 40:return this.popState(),a.yytext=a.yytext.slice(0,-8).trim(),26;case 41:return this.popState(),a.yytext=a.yytext.slice(0,-10).trim(),27;case 42:return 48;case 43:return 49;case 44:return 50;case 45:return 51;case 46:this.pushState("STATE_STRING");break;case 47:return this.pushState("STATE_ID"),"AS";case 48:return this.popState(),"ID";case 49:this.popState();break;case 50:return"STATE_DESCR";case 51:return 19;case 52:this.popState();break;case 53:return this.popState(),this.pushState("struct"),20;case 54:break;case 55:return this.popState(),21;case 56:break;case 57:return this.begin("NOTE"),29;case 58:return this.popState(),this.pushState("NOTE_ID"),56;case 59:return this.popState(),this.pushState("NOTE_ID"),57;case 60:this.popState(),this.pushState("FLOATING_NOTE");break;case 61:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";case 62:break;case 63:return"NOTE_TEXT";case 64:return this.popState(),"ID";case 65:return this.popState(),this.pushState("NOTE_TEXT"),24;case 66:return this.popState(),a.yytext=a.yytext.substr(2).trim(),31;case 67:return this.popState(),a.yytext=a.yytext.slice(0,-8).trim(),31;case 68:return 6;case 69:return 6;case 70:return 16;case 71:return 54;case 72:return 24;case 73:return a.yytext=a.yytext.trim(),14;case 74:return 15;case 75:return 28;case 76:return 55;case 77:return 5;case 78:return"INVALID"}},"anonymous"),rules:[/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:style\s+)/i,/^(?:[\w,]+\s+)/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[9,10],inclusive:!1},struct:{rules:[9,10,22,26,29,35,42,43,44,45,54,55,56,57,71,72,73,74,75],inclusive:!1},FLOATING_NOTE_ID:{rules:[64],inclusive:!1},FLOATING_NOTE:{rules:[61,62,63],inclusive:!1},NOTE_TEXT:{rules:[66,67],inclusive:!1},NOTE_ID:{rules:[65],inclusive:!1},NOTE:{rules:[58,59,60],inclusive:!1},STYLEDEF_STYLEOPTS:{rules:[],inclusive:!1},STYLEDEF_STYLES:{rules:[31],inclusive:!1},STYLE_IDS:{rules:[],inclusive:!1},STYLE:{rules:[30],inclusive:!1},CLASS_STYLE:{rules:[28],inclusive:!1},CLASS:{rules:[27],inclusive:!1},CLASSDEFID:{rules:[25],inclusive:!1},CLASSDEF:{rules:[23,24],inclusive:!1},acc_descr_multiline:{rules:[20,21],inclusive:!1},acc_descr:{rules:[18],inclusive:!1},acc_title:{rules:[16],inclusive:!1},SCALE:{rules:[13,14,33,34],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[48],inclusive:!1},STATE_STRING:{rules:[49,50],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[9,10,36,37,38,39,40,41,46,47,51,52,53],inclusive:!1},ID:{rules:[9,10],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,10,11,12,15,17,19,22,26,29,32,35,53,57,68,69,70,71,72,73,74,76,77,78],inclusive:!0}}};return I}();yt.lexer=te;function at(){this.yy={}}return d(at,"Parser"),at.prototype=yt,yt.Parser=at,new at}();_t.parser=_t;var Se=_t,fe="TB",It="TB",At="dir",ht="state",Tt="relation",be="classDef",_e="style",Te="applyClass",K="default",Ot="divider",wt="fill:none",Nt="fill: #333",Rt="c",Bt="text",Pt="normal",kt="rect",Et="rectWithTitle",ke="stateStart",Ee="stateEnd",Yt="divider",Ft="roundedWithTitle",xe="note",Ce="noteGroup",q="statediagram",De="state",$e=`${q}-${De}`,Gt="transition",ve="note",Le="note-edge",Ie=`${Gt} ${Le}`,Ae=`${q}-${ve}`,Oe="cluster",we=`${q}-${Oe}`,Ne="cluster-alt",Re=`${q}-${Ne}`,jt="parent",zt="note",Be="state",xt="----",Pe=`${xt}${zt}`,Mt=`${xt}${jt}`,Ht=d((e,t=It)=>{if(!e.doc)return t;let s=t;for(const o of e.doc)o.stmt==="dir"&&(s=o.value);return s},"getDir"),Ye=d(function(e,t){return t.db.getClasses()},"getClasses"),Fe=d(async function(e,t,s,o){k.info("REF0:"),k.info("Drawing state diagram (v2)",t);const{securityLevel:c,state:r,layout:p}=$();o.db.extract(o.db.getRootDocV2());const u=o.db.getData(),h=ne(t,c);u.type=o.type,u.layoutAlgorithm=p,u.nodeSpacing=(r==null?void 0:r.nodeSpacing)||50,u.rankSpacing=(r==null?void 0:r.rankSpacing)||50,u.markers=["barb"],u.diagramId=t,await oe(u,h),ce.insertTitle(h,"statediagramTitleText",(r==null?void 0:r.titleTopMargin)??25,o.db.getDiagramTitle()),ae(h,8,q,(r==null?void 0:r.useMaxWidth)??!0)},"draw"),Ge={getClasses:Ye,draw:Fe,getDir:Ht},dt=new Map,B=0;function ut(e="",t=0,s="",o=xt){const c=s!==null&&s.length>0?`${o}${s}`:"";return`${Be}-${e}${c}-${t}`}d(ut,"stateDomId");var je=d((e,t,s,o,c,r,p,u)=>{k.trace("items",t),t.forEach(h=>{switch(h.stmt){case ht:Z(e,h,s,o,c,r,p,u);break;case K:Z(e,h,s,o,c,r,p,u);break;case Tt:{Z(e,h.state1,s,o,c,r,p,u),Z(e,h.state2,s,o,c,r,p,u);const S={id:"edge"+B,start:h.state1.id,end:h.state2.id,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:wt,labelStyle:"",label:H.sanitizeText(h.description,$()),arrowheadStyle:Nt,labelpos:Rt,labelType:Bt,thickness:Pt,classes:Gt,look:p};c.push(S),B++}break}})},"setupDoc"),Ut=d((e,t=It)=>{let s=t;if(e.doc)for(const o of e.doc)o.stmt==="dir"&&(s=o.value);return s},"getDir");function Q(e,t,s){if(!t.id||t.id==="</join></fork>"||t.id==="</choice>")return;t.cssClasses&&(Array.isArray(t.cssCompiledStyles)||(t.cssCompiledStyles=[]),t.cssClasses.split(" ").forEach(c=>{if(s.get(c)){const r=s.get(c);t.cssCompiledStyles=[...t.cssCompiledStyles,...r.styles]}}));const o=e.find(c=>c.id===t.id);o?Object.assign(o,t):e.push(t)}d(Q,"insertOrUpdateNode");function Xt(e){var t;return((t=e==null?void 0:e.classes)==null?void 0:t.join(" "))??""}d(Xt,"getClassesFromDbInfo");function Vt(e){return(e==null?void 0:e.styles)??[]}d(Vt,"getStylesFromDbInfo");var Z=d((e,t,s,o,c,r,p,u)=>{var P,Y;const h=t.id,S=s.get(h),b=Xt(S),v=Vt(S);if(k.info("dataFetcher parsedItem",t,S,v),h!=="root"){let A=kt;t.start===!0?A=ke:t.start===!1&&(A=Ee),t.type!==K&&(A=t.type),dt.get(h)||dt.set(h,{id:h,shape:A,description:H.sanitizeText(h,$()),cssClasses:`${b} ${$e}`,cssStyles:v});const y=dt.get(h);t.description&&(Array.isArray(y.description)?(y.shape=Et,y.description.push(t.description)):((P=y.description)==null?void 0:P.length)>0?(y.shape=Et,y.description===h?y.description=[t.description]:y.description=[y.description,t.description]):(y.shape=kt,y.description=t.description),y.description=H.sanitizeTextOrArray(y.description,$())),((Y=y.description)==null?void 0:Y.length)===1&&y.shape===Et&&(y.type==="group"?y.shape=Ft:y.shape=kt),!y.type&&t.doc&&(k.info("Setting cluster for XCX",h,Ut(t)),y.type="group",y.isGroup=!0,y.dir=Ut(t),y.shape=t.type===Ot?Yt:Ft,y.cssClasses=`${y.cssClasses} ${we} ${r?Re:""}`);const L={labelStyle:"",shape:y.shape,label:y.description,cssClasses:y.cssClasses,cssCompiledStyles:[],cssStyles:y.cssStyles,id:h,dir:y.dir,domId:ut(h,B),type:y.type,isGroup:y.type==="group",padding:8,rx:10,ry:10,look:p};if(L.shape===Yt&&(L.label=""),e&&e.id!=="root"&&(k.trace("Setting node ",h," to be child of its parent ",e.id),L.parentId=e.id),L.centerLabel=!0,t.note){const O={labelStyle:"",shape:xe,label:t.note.text,cssClasses:Ae,cssStyles:[],cssCompilesStyles:[],id:h+Pe+"-"+B,domId:ut(h,B,zt),type:y.type,isGroup:y.type==="group",padding:$().flowchart.padding,look:p,position:t.note.position},F=h+Mt,G={labelStyle:"",shape:Ce,label:t.note.text,cssClasses:y.cssClasses,cssStyles:[],id:h+Mt,domId:ut(h,B,jt),type:"group",isGroup:!0,padding:16,look:p,position:t.note.position};B++,G.id=F,O.parentId=F,Q(o,G,u),Q(o,O,u),Q(o,L,u);let N=h,R=O.id;t.note.position==="left of"&&(N=O.id,R=h),c.push({id:N+"-"+R,start:N,end:R,arrowhead:"none",arrowTypeEnd:"",style:wt,labelStyle:"",classes:Ie,arrowheadStyle:Nt,labelpos:Rt,labelType:Bt,thickness:Pt,look:p})}else Q(o,L,u)}t.doc&&(k.trace("Adding nodes children "),je(t,t.doc,s,o,c,!r,p,u))},"dataFetcher"),ze=d(()=>{dt.clear(),B=0},"reset"),Ct="[*]",Wt="start",Jt=Ct,Kt="end",qt="color",Qt="fill",Me="bgFill",He=",";function Dt(){return new Map}d(Dt,"newClassesList");var Zt=d(()=>({relations:[],states:new Map,documents:{}}),"newDoc"),pt=d(e=>JSON.parse(JSON.stringify(e)),"clone"),Ue=(U=class{constructor(t){T(this,"version");T(this,"nodes",[]);T(this,"edges",[]);T(this,"rootDoc",[]);T(this,"classes",Dt());T(this,"documents",{root:Zt()});T(this,"currentDocument",this.documents.root);T(this,"startEndCount",0);T(this,"dividerCnt",0);T(this,"getAccTitle",de);T(this,"setAccTitle",ue);T(this,"getAccDescription",pe);T(this,"setAccDescription",ye);T(this,"setDiagramTitle",ge);T(this,"getDiagramTitle",me);this.clear(),this.version=t,this.setRootDoc=this.setRootDoc.bind(this),this.getDividerId=this.getDividerId.bind(this),this.setDirection=this.setDirection.bind(this),this.trimColon=this.trimColon.bind(this)}setRootDoc(t){k.info("Setting root doc",t),this.rootDoc=t,this.version===1?this.extract(t):this.extract(this.getRootDocV2())}getRootDoc(){return this.rootDoc}docTranslator(t,s,o){if(s.stmt===Tt)this.docTranslator(t,s.state1,!0),this.docTranslator(t,s.state2,!1);else if(s.stmt===ht&&(s.id==="[*]"?(s.id=o?t.id+"_start":t.id+"_end",s.start=o):s.id=s.id.trim()),s.doc){const c=[];let r=[],p;for(p=0;p<s.doc.length;p++)if(s.doc[p].type===Ot){const u=pt(s.doc[p]);u.doc=pt(r),c.push(u),r=[]}else r.push(s.doc[p]);if(c.length>0&&r.length>0){const u={stmt:ht,id:le(),type:"divider",doc:pt(r)};c.push(pt(u)),s.doc=c}s.doc.forEach(u=>this.docTranslator(s,u,!0))}}getRootDocV2(){return this.docTranslator({id:"root"},{id:"root",doc:this.rootDoc},!0),{id:"root",doc:this.rootDoc}}extract(t){let s;t.doc?s=t.doc:s=t,k.info(s),this.clear(!0),k.info("Extract initial document:",s),s.forEach(r=>{switch(k.warn("Statement",r.stmt),r.stmt){case ht:this.addState(r.id.trim(),r.type,r.doc,r.description,r.note,r.classes,r.styles,r.textStyles);break;case Tt:this.addRelation(r.state1,r.state2,r.description);break;case be:this.addStyleClass(r.id.trim(),r.classes);break;case _e:{const p=r.id.trim().split(","),u=r.styleClass.split(",");p.forEach(h=>{let S=this.getState(h);if(S===void 0){const b=h.trim();this.addState(b),S=this.getState(b)}S.styles=u.map(b=>{var v;return(v=b.replace(/;/g,""))==null?void 0:v.trim()})})}break;case Te:this.setCssClass(r.id.trim(),r.styleClass);break}});const o=this.getStates(),c=$().look;ze(),Z(void 0,this.getRootDocV2(),o,this.nodes,this.edges,!0,c,this.classes),this.nodes.forEach(r=>{if(Array.isArray(r.label)){if(r.description=r.label.slice(1),r.isGroup&&r.description.length>0)throw new Error("Group nodes can only have label. Remove the additional description for node ["+r.id+"]");r.label=r.label[0]}})}addState(t,s=K,o=null,c=null,r=null,p=null,u=null,h=null){const S=t==null?void 0:t.trim();if(this.currentDocument.states.has(S)?(this.currentDocument.states.get(S).doc||(this.currentDocument.states.get(S).doc=o),this.currentDocument.states.get(S).type||(this.currentDocument.states.get(S).type=s)):(k.info("Adding state ",S,c),this.currentDocument.states.set(S,{id:S,descriptions:[],type:s,doc:o,note:r,classes:[],styles:[],textStyles:[]})),c&&(k.info("Setting state description",S,c),typeof c=="string"&&this.addDescription(S,c.trim()),typeof c=="object"&&c.forEach(b=>this.addDescription(S,b.trim()))),r){const b=this.currentDocument.states.get(S);b.note=r,b.note.text=H.sanitizeText(b.note.text,$())}p&&(k.info("Setting state classes",S,p),(typeof p=="string"?[p]:p).forEach(b=>this.setCssClass(S,b.trim()))),u&&(k.info("Setting state styles",S,u),(typeof u=="string"?[u]:u).forEach(b=>this.setStyle(S,b.trim()))),h&&(k.info("Setting state styles",S,u),(typeof h=="string"?[h]:h).forEach(b=>this.setTextStyle(S,b.trim())))}clear(t){this.nodes=[],this.edges=[],this.documents={root:Zt()},this.currentDocument=this.documents.root,this.startEndCount=0,this.classes=Dt(),t||he()}getState(t){return this.currentDocument.states.get(t)}getStates(){return this.currentDocument.states}logDocuments(){k.info("Documents = ",this.documents)}getRelations(){return this.currentDocument.relations}startIdIfNeeded(t=""){let s=t;return t===Ct&&(this.startEndCount++,s=`${Wt}${this.startEndCount}`),s}startTypeIfNeeded(t="",s=K){return t===Ct?Wt:s}endIdIfNeeded(t=""){let s=t;return t===Jt&&(this.startEndCount++,s=`${Kt}${this.startEndCount}`),s}endTypeIfNeeded(t="",s=K){return t===Jt?Kt:s}addRelationObjs(t,s,o){let c=this.startIdIfNeeded(t.id.trim()),r=this.startTypeIfNeeded(t.id.trim(),t.type),p=this.startIdIfNeeded(s.id.trim()),u=this.startTypeIfNeeded(s.id.trim(),s.type);this.addState(c,r,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles),this.addState(p,u,s.doc,s.description,s.note,s.classes,s.styles,s.textStyles),this.currentDocument.relations.push({id1:c,id2:p,relationTitle:H.sanitizeText(o,$())})}addRelation(t,s,o){if(typeof t=="object")this.addRelationObjs(t,s,o);else{const c=this.startIdIfNeeded(t.trim()),r=this.startTypeIfNeeded(t),p=this.endIdIfNeeded(s.trim()),u=this.endTypeIfNeeded(s);this.addState(c,r),this.addState(p,u),this.currentDocument.relations.push({id1:c,id2:p,title:H.sanitizeText(o,$())})}}addDescription(t,s){const o=this.currentDocument.states.get(t),c=s.startsWith(":")?s.replace(":","").trim():s;o.descriptions.push(H.sanitizeText(c,$()))}cleanupLabel(t){return t.substring(0,1)===":"?t.substr(2).trim():t.trim()}getDividerId(){return this.dividerCnt++,"divider-id-"+this.dividerCnt}addStyleClass(t,s=""){this.classes.has(t)||this.classes.set(t,{id:t,styles:[],textStyles:[]});const o=this.classes.get(t);s==null||s.split(He).forEach(c=>{const r=c.replace(/([^;]*);/,"$1").trim();if(RegExp(qt).exec(c)){const p=r.replace(Qt,Me).replace(qt,Qt);o.textStyles.push(p)}o.styles.push(r)})}getClasses(){return this.classes}setCssClass(t,s){t.split(",").forEach(o=>{let c=this.getState(o);if(c===void 0){const r=o.trim();this.addState(r),c=this.getState(r)}c.classes.push(s)})}setStyle(t,s){const o=this.getState(t);o!==void 0&&o.styles.push(s)}setTextStyle(t,s){const o=this.getState(t);o!==void 0&&o.textStyles.push(s)}getDirectionStatement(){return this.rootDoc.find(t=>t.stmt===At)}getDirection(){var t;return((t=this.getDirectionStatement())==null?void 0:t.value)??fe}setDirection(t){const s=this.getDirectionStatement();s?s.value=t:this.rootDoc.unshift({stmt:At,value:t})}trimColon(t){return t&&t[0]===":"?t.substr(1).trim():t.trim()}getData(){const t=$();return{nodes:this.nodes,edges:this.edges,other:{},config:t,direction:Ht(this.getRootDocV2())}}getConfig(){return $().state}},d(U,"StateDB"),T(U,"relationType",{AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3}),U),Xe=d(e=>`
defs #statediagram-barbEnd {
    fill: ${e.transitionColor};
    stroke: ${e.transitionColor};
  }
g.stateGroup text {
  fill: ${e.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${e.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${e.stateLabelColor};
}

g.stateGroup rect {
  fill: ${e.mainBkg};
  stroke: ${e.nodeBorder};
}

g.stateGroup line {
  stroke: ${e.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${e.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${e.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${e.noteBorderColor};
  fill: ${e.noteBkgColor};

  text {
    fill: ${e.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${e.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${e.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${e.edgeLabelBackground};
  p {
    background-color: ${e.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${e.edgeLabelBackground};
    fill: ${e.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${e.transitionLabelColor||e.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${e.transitionLabelColor||e.tertiaryTextColor};
}

.stateLabel text {
  fill: ${e.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${e.specialStateColor};
  stroke: ${e.specialStateColor};
}

.node .fork-join {
  fill: ${e.specialStateColor};
  stroke: ${e.specialStateColor};
}

.node circle.state-end {
  fill: ${e.innerEndBackground};
  stroke: ${e.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${e.compositeBackground||e.background};
  // stroke: ${e.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${e.stateBkg||e.mainBkg};
  stroke: ${e.stateBorder||e.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${e.mainBkg};
  stroke: ${e.stateBorder||e.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${e.lineColor};
}

.statediagram-cluster rect {
  fill: ${e.compositeTitleBackground};
  stroke: ${e.stateBorder||e.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${e.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${e.stateBorder||e.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${e.compositeBackground||e.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${e.altBackground?e.altBackground:"#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${e.altBackground?e.altBackground:"#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${e.noteBkgColor};
  stroke: ${e.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${e.noteBkgColor};
  stroke: ${e.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${e.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${e.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${e.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${e.lineColor};
  stroke: ${e.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${e.textColor};
}
`,"getStyles"),Ve=Xe;export{Ue as S,Se as a,Ge as b,Ve as s};
