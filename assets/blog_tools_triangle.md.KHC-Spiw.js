import{P as _}from"./chunks/prism-okaidia.xASTSuVT.js";import{_ as V,D as f,o as D,c as v,k as t,n as d,a6 as c,a7 as b,I as n,b as x,w,a as u,e as C,O as S,p as U,q as L}from"./chunks/framework.Tt2DsVC6.js";import"./chunks/commonjsHelpers.5-cIlDoe.js";const R={top:"bottom",right:"left",bottom:"top",left:"right",topRight:"right",bottomRight:"bottom",bottomLeft:"left",topLeft:"top",code:""},k={top:{top:!1,right:"width-right",bottom:"height",left:"width-left"},right:{top:"height-top",right:!1,bottom:"height-bottom",left:"width"},bottom:{top:"height",right:"width-right",bottom:!1,left:"width-left"},left:{top:"height-top",right:"width",bottom:"height-bottom",left:!1},topRight:{top:!1,right:"width",bottom:"height",left:!1},bottomRight:{top:!1,right:!1,bottom:"height",left:"width"},bottomLeft:{top:"height",right:!1,bottom:!1,left:"width"},topLeft:{top:"height",right:"width",bottom:!1,left:!1}},z={name:"createTriangle",data(){return{type:"iso",choosenColor:"#00adb5",direction:"top",width:100,height:100,left:50,right:50,top:50,bottom:50,showEqu:!0,lengths:"",colors:"",widthDisable:!1,heightDisable:!1,leftDisable:!1,rightDisable:!1,topDisable:!1,bottomDisable:!1}},watch:{direction(o){this.changeSetup(),this.changeSize(),this.updateCSS()},type(){this.changeSetup(),this.changeSize(),this.updateCSS()}},methods:{update(){this.changeSize(),this.updateCSS()},setActive(o){return o==this.direction?"active":""},changeSize(){this.direction=="top"||this.direction=="bottom"||this.direction=="left"||this.direction=="right"?(this.widthDisable?this.width=this.left*1+this.right*1:(this.left=this.width*1/2,this.right=this.width*1/2),this.heightDisable?this.height=this.top*1+this.bottom*1:(this.top=this.height*1/2,this.bottom=this.height*1/2)):this.type=="iso"&&(this.left=this.width*1/2,this.right=this.width*1/2,this.top=this.height*1/2,this.bottom=this.height*1/2)},updateCSS(){let o={top:0,right:0,bottom:0,left:0},i={top:"transparent",right:"transparent",bottom:"transparent",left:"transparent"},r=k[this.direction];i[R[this.direction]]=this.choosenColor;for(var l in r)if(r[l]===!1)o[l]="0";else switch(this.type){case"equ":if(this.direction=="top"||this.direction=="bottom"){var e=(Math.sqrt(3)/2*this.width).toFixed(1);switch(r[l]){case"width":o[l]=e+"px";break;case"height":o[l]=e+"px";break;case"width-left":o[l]=this.width/2+"px";break;case"width-right":o[l]=this.width/2+"px";break}}else if(this.direction=="left"||this.direction=="right"){var e=(Math.sqrt(3)/2*this.height).toFixed(1);switch(r[l]){case"width":o[l]=e+"px";break;case"height":o[l]=e+"px";break;case"height-top":o[l]=this.height/2+"px";break;case"height-bottom":o[l]=this.height/2+"px";break}}break;case"iso":switch(r[l]){case"width":o[l]=this.width+"px";break;case"height":o[l]=this.height+"px";break;case"width-left":o[l]=this.width/2+"px";break;case"width-right":o[l]=this.width/2+"px";break;case"height-top":o[l]=this.height/2+"px";break;case"height-bottom":o[l]=this.height/2+"px";break}break;case"sca":switch(r[l]){case"width":o[l]=this.width+"px";break;case"height":o[l]=this.height+"px";break;case"width-left":o[l]=this.left+"px";break;case"width-right":o[l]=this.right+"px";break;case"height-top":o[l]=this.top+"px";break;case"height-bottom":o[l]=this.bottom+"px";break}break}this.lengths=this.toArray(o).join(" "),this.colors=this.toArray(i).join(" ");let h=`.triangle {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: ${this.lengths};
  border-color: ${this.colors};
}`,g=_.highlight(h,_.languages.css);this.$refs["code-container"].innerHTML=g},changeSetup(){switch(this.direction=="topRight"||this.direction=="bottomRight"||this.direction=="bottomLeft"||this.direction=="topLeft"?(this.type=="equ"&&(this.type="iso"),this.showEqu=!1):this.showEqu=!0,this.type){case"equ":this.direction=="top"||this.direction=="bottom"?(this.widthDisable=!1,this.heightDisable=!0,this.leftDisable=!0,this.rightDisable=!0,this.topDisable=!0,this.bottomDisable=!0):this.direction=="left"||this.direction=="right"?(this.widthDisable=!0,this.heightDisable=!1,this.leftDisable=!0,this.rightDisable=!0,this.topDisable=!0,this.bottomDisable=!0):(this.widthDisable=!1,this.heightDisable=!1,this.leftDisable=!0,this.rightDisable=!0,this.topDisable=!0,this.bottomDisable=!0);break;case"iso":this.widthDisable=!1,this.heightDisable=!1,this.leftDisable=!0,this.rightDisable=!0,this.topDisable=!0,this.bottomDisable=!0;break;case"sca":this.direction=="top"||this.direction=="bottom"?(this.widthDisable=!0,this.heightDisable=!1,this.leftDisable=!1,this.rightDisable=!1,this.topDisable=!0,this.bottomDisable=!0):this.direction=="left"||this.direction=="right"?(this.widthDisable=!1,this.heightDisable=!0,this.leftDisable=!0,this.rightDisable=!0,this.topDisable=!1,this.bottomDisable=!1):(this.widthDisable=!1,this.heightDisable=!1,this.leftDisable=!0,this.rightDisable=!0,this.topDisable=!0,this.bottomDisable=!0);break}},toArray(o){var i=[];for(var r in o)i.push(o[r]);return i}},mounted(){this.changeSetup(),this.changeSize(),this.updateCSS()}},a=o=>(U("data-v-cc8001dc"),o=o(),L(),o),q={class:"createTriangle-container"},A={class:"tool-box"},E={class:"tool-flex"},I=a(()=>t("h4",null,"方向",-1)),N={class:"direction-contianer"},P=a(()=>t("div",{class:"placeholder"},null,-1)),T={class:"square rotate"},y={class:"square"},B=a(()=>t("h4",null,"颜色",-1)),M=a(()=>t("h4",null,"类型",-1)),O={class:"size-section"},j=a(()=>t("h4",null,[u("大小 "),t("span",null,"更改值后请敲回车")],-1)),F=a(()=>t("p",null,"宽度",-1)),H={class:"tool-flex"},J=a(()=>t("p",null,"左",-1)),Q=a(()=>t("p",null,"右",-1)),W=a(()=>t("p",null,"高度",-1)),X={class:"tool-flex"},G=a(()=>t("p",null,"上",-1)),K=a(()=>t("p",null,"下",-1)),Y={class:"triangle-container"},Z={style:{width:"100%"}},$=a(()=>t("h3",null,"CSS",-1)),tt={class:"language-css extra-class"},et={class:"language-css"},it={ref:"code-container"};function st(o,i,r,l,e,h){const g=f("el-color-picker"),m=f("el-radio"),p=f("el-input-number");return D(),v("div",null,[t("div",q,[t("div",A,[t("section",E,[t("div",null,[I,t("div",N,[P,t("div",T,[t("label",{for:"top",class:d(["direction-label",h.setActive("top")])},[c(t("input",{type:"radio","onUpdate:modelValue":i[0]||(i[0]=s=>e.direction=s),name:"direction",id:"top",value:"top"},null,512),[[b,e.direction]])],2),t("label",{for:"right",class:d(["direction-label",h.setActive("right")])},[c(t("input",{type:"radio","onUpdate:modelValue":i[1]||(i[1]=s=>e.direction=s),name:"direction",id:"right",value:"right"},null,512),[[b,e.direction]])],2),t("label",{for:"left",class:d(["direction-label",h.setActive("left")])},[c(t("input",{type:"radio","onUpdate:modelValue":i[2]||(i[2]=s=>e.direction=s),name:"direction",id:"left",value:"left"},null,512),[[b,e.direction]])],2),t("label",{for:"bottom",class:d(["direction-label",h.setActive("bottom")])},[c(t("input",{type:"radio","onUpdate:modelValue":i[3]||(i[3]=s=>e.direction=s),name:"direction",id:"bottom",value:"bottom"},null,512),[[b,e.direction]])],2)]),t("div",y,[t("label",{for:"topLeft",class:d(["direction-label",h.setActive("topLeft")])},[c(t("input",{type:"radio","onUpdate:modelValue":i[4]||(i[4]=s=>e.direction=s),name:"direction",id:"topLeft",value:"topLeft"},null,512),[[b,e.direction]])],2),t("label",{for:"topRight",class:d(["direction-label",h.setActive("topRight")])},[c(t("input",{type:"radio","onUpdate:modelValue":i[5]||(i[5]=s=>e.direction=s),name:"direction",id:"topRight",value:"topRight"},null,512),[[b,e.direction]])],2),t("label",{for:"bottomLeft",class:d(["direction-label",h.setActive("bottomLeft")])},[c(t("input",{type:"radio","onUpdate:modelValue":i[6]||(i[6]=s=>e.direction=s),name:"direction",id:"bottomLeft",value:"bottomLeft"},null,512),[[b,e.direction]])],2),t("label",{for:"bottomRight",class:d(["direction-label",h.setActive("bottomRight")])},[c(t("input",{type:"radio","onUpdate:modelValue":i[7]||(i[7]=s=>e.direction=s),name:"direction",id:"bottomRight",value:"bottomRight"},null,512),[[b,e.direction]])],2)])])]),t("div",null,[B,n(g,{onChange:h.update,modelValue:e.choosenColor,"onUpdate:modelValue":i[8]||(i[8]=s=>e.choosenColor=s)},null,8,["onChange","modelValue"])])]),t("section",null,[M,e.showEqu?(D(),x(m,{key:0,modelValue:e.type,"onUpdate:modelValue":i[9]||(i[9]=s=>e.type=s),label:"equ"},{default:w(()=>[u("等边")]),_:1},8,["modelValue"])):C("",!0),n(m,{modelValue:e.type,"onUpdate:modelValue":i[10]||(i[10]=s=>e.type=s),label:"iso"},{default:w(()=>[u("等腰")]),_:1},8,["modelValue"]),n(m,{modelValue:e.type,"onUpdate:modelValue":i[11]||(i[11]=s=>e.type=s),label:"sca"},{default:w(()=>[u("不等边")]),_:1},8,["modelValue"])]),t("section",O,[j,F,n(p,{onChange:h.update,modelValue:e.width,"onUpdate:modelValue":i[12]||(i[12]=s=>e.width=s),disabled:e.widthDisable,min:0,max:300,size:"small"},null,8,["onChange","modelValue","disabled"]),t("div",H,[t("div",null,[J,n(p,{onChange:h.update,modelValue:e.left,"onUpdate:modelValue":i[13]||(i[13]=s=>e.left=s),disabled:e.leftDisable,min:0,max:150,size:"small"},null,8,["onChange","modelValue","disabled"])]),t("div",null,[Q,n(p,{onChange:h.update,modelValue:e.right,"onUpdate:modelValue":i[14]||(i[14]=s=>e.right=s),disabled:e.rightDisable,min:0,max:150,size:"small"},null,8,["onChange","modelValue","disabled"])])]),W,n(p,{onChange:h.update,modelValue:e.height,"onUpdate:modelValue":i[15]||(i[15]=s=>e.height=s),disabled:e.heightDisable,min:0,max:300,size:"small"},null,8,["onChange","modelValue","disabled"]),t("div",X,[t("div",null,[G,n(p,{onChange:h.update,modelValue:e.top,"onUpdate:modelValue":i[16]||(i[16]=s=>e.top=s),disabled:e.topDisable,min:0,max:150,size:"small"},null,8,["onChange","modelValue","disabled"])]),t("div",null,[K,n(p,{onChange:h.update,modelValue:e.bottom,"onUpdate:modelValue":i[17]||(i[17]=s=>e.bottom=s),disabled:e.bottomDisable,min:0,max:150,size:"small"},null,8,["onChange","modelValue","disabled"])])])])]),t("div",Y,[t("div",{class:"triangle-demo",style:S({borderWidth:e.lengths,borderColor:e.colors})},null,4)])]),t("div",Z,[$,t("div",tt,[t("pre",et,[t("code",it,null,512)])])])])}const ot=V(z,[["render",st],["__scopeId","data-v-cc8001dc"]]),lt=t("h1",{id:"三角形生成器",tabindex:"-1"},[u("三角形生成器 "),t("a",{class:"header-anchor",href:"#三角形生成器","aria-label":'Permalink to "三角形生成器"'},"​")],-1),ht=t("div",{class:"info custom-block"},[t("p",{class:"custom-block-title"},"说明"),t("p",null,[u("三角形生成器代码来源于 "),t("a",{href:"https://github.com/QiShaoXuan/css_tricks/tree/master",target:"_blank",rel:"noreferrer"},"css_tricks"),u("，感谢作者。")])],-1),ct=JSON.parse('{"title":"三角形生成器","description":"","frontmatter":{},"headers":[],"relativePath":"blog/tools/triangle.md","filePath":"blog/tools/triangle.md","lastUpdated":1702367258000}'),at={name:"blog/tools/triangle.md"},bt=Object.assign(at,{setup(o){return(i,r)=>(D(),v("div",null,[lt,n(ot),ht]))}});export{ct as __pageData,bt as default};
