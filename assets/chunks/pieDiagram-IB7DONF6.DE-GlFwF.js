import{p as _}from"./chunk-4BMEZGHF.Bdwe6MxT.js";import{a7 as w,a2 as O,aE as j,_ as c,g as G,s as I,a as J,b as K,q as Q,p as U,l as R,c as X,D as Y,H as Z,N as tt,e as et,y as at,F as rt}from"../app.DGmP0RVq.js";import{p as nt}from"./radar-MK3ICKWK.CjyrmquA.js";import{d as E}from"./arc.DfBAXYOz.js";import{o as it}from"./ordinal.BYWQX77i.js";import"./framework.BTHFNYH-.js";import"./isIterateeCall.DmV5WHBc.js";import"./theme.DuevW86s.js";import"./baseUniq.BsZUbj7j.js";import"./isSymbol.DYPLY1nq.js";import"./basePickBy.P7d1wIXA.js";import"./toFinite.CaWsV0a4.js";import"./clone.s24FkDWD.js";import"./init.Gi6I4Gst.js";function ot(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function lt(t){return t}function st(){var t=lt,a=ot,l=null,f=w(0),g=w(O),S=w(0);function i(e){var r,s=(e=j(e)).length,u,$,h=0,p=new Array(s),n=new Array(s),x=+f.apply(this,arguments),A=Math.min(O,Math.max(-O,g.apply(this,arguments)-x)),m,v=Math.min(Math.abs(A)/s,S.apply(this,arguments)),C=v*(A<0?-1:1),d;for(r=0;r<s;++r)(d=n[p[r]=r]=+t(e[r],r,e))>0&&(h+=d);for(a!=null?p.sort(function(y,D){return a(n[y],n[D])}):l!=null&&p.sort(function(y,D){return l(e[y],e[D])}),r=0,$=h?(A-s*C)/h:0;r<s;++r,x=m)u=p[r],d=n[u],m=x+(d>0?d*$:0)+C,n[u]={data:e[u],index:r,value:d,startAngle:x,endAngle:m,padAngle:v};return n}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:w(+e),i):t},i.sortValues=function(e){return arguments.length?(a=e,l=null,i):a},i.sort=function(e){return arguments.length?(l=e,a=null,i):l},i.startAngle=function(e){return arguments.length?(f=typeof e=="function"?e:w(+e),i):f},i.endAngle=function(e){return arguments.length?(g=typeof e=="function"?e:w(+e),i):g},i.padAngle=function(e){return arguments.length?(S=typeof e=="function"?e:w(+e),i):S},i}var pt=rt.pie,F={sections:new Map,showData:!1},M=F.sections,W=F.showData,ct=structuredClone(pt),ut=c(()=>structuredClone(ct),"getConfig"),dt=c(()=>{M=new Map,W=F.showData,at()},"clear"),gt=c(({label:t,value:a})=>{M.has(t)||(M.set(t,a),R.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),mt=c(()=>M,"getSections"),ft=c(t=>{W=t},"setShowData"),ht=c(()=>W,"getShowData"),L={getConfig:ut,clear:dt,setDiagramTitle:U,getDiagramTitle:Q,setAccTitle:K,getAccTitle:J,setAccDescription:I,getAccDescription:G,addSection:gt,getSections:mt,setShowData:ft,getShowData:ht},xt=c((t,a)=>{_(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),yt={parse:c(async t=>{const a=await nt("pie",t);R.debug(a),xt(a,L)},"parse")},wt=c(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),St=wt,$t=c(t=>{const a=[...t.entries()].map(l=>({label:l[0],value:l[1]})).sort((l,f)=>f.value-l.value);return st().value(l=>l.value)(a)},"createPieArcs"),At=c((t,a,l,f)=>{R.debug(`rendering pie chart
`+t);const g=f.db,S=X(),i=Y(g.getConfig(),S.pie),e=40,r=18,s=4,u=450,$=u,h=Z(a),p=h.append("g");p.attr("transform","translate("+$/2+","+u/2+")");const{themeVariables:n}=S;let[x]=tt(n.pieOuterStrokeWidth);x??(x=2);const A=i.textPosition,m=Math.min($,u)/2-e,v=E().innerRadius(0).outerRadius(m),C=E().innerRadius(m*A).outerRadius(m*A);p.append("circle").attr("cx",0).attr("cy",0).attr("r",m+x/2).attr("class","pieOuterCircle");const d=g.getSections(),y=$t(d),D=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12],T=it(D);p.selectAll("mySlices").data(y).enter().append("path").attr("d",v).attr("fill",o=>T(o.data.label)).attr("class","pieCircle");let N=0;d.forEach(o=>{N+=o}),p.selectAll("mySlices").data(y).enter().append("text").text(o=>(o.data.value/N*100).toFixed(0)+"%").attr("transform",o=>"translate("+C.centroid(o)+")").style("text-anchor","middle").attr("class","slice"),p.append("text").text(g.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const z=p.selectAll(".legend").data(T.domain()).enter().append("g").attr("class","legend").attr("transform",(o,b)=>{const k=r+s,V=k*T.domain().length/2,q=12*r,H=b*k-V;return"translate("+q+","+H+")"});z.append("rect").attr("width",r).attr("height",r).style("fill",T).style("stroke",T),z.data(y).append("text").attr("x",r+s).attr("y",r-s).text(o=>{const{label:b,value:k}=o.data;return g.getShowData()?`${b} [${k}]`:b});const P=Math.max(...z.selectAll("text").nodes().map(o=>(o==null?void 0:o.getBoundingClientRect().width)??0)),B=$+e+r+s+P;h.attr("viewBox",`0 0 ${B} ${u}`),et(h,u,B,i.useMaxWidth)},"draw"),Dt={draw:At},Tt={parser:yt,db:L,renderer:Dt,styles:St};export{Tt as diagram};
