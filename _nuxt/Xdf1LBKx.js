const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./W7s-taa4.js","./CDCwti5A.js","./entry.3xr5nnGq.css"])))=>i.map(i=>d[i]);
import{u as K,a as B}from"./DdIQF4Tw.js";import{f as de,c as b,o as q,F as E,r as O,a as e,n as U,t as A,u as h,i as P,j as M,k as V,v as T,l as ke,_ as F,m as I,p as Ue,q as Ee,s as re,x as ae,y as j,z as oe,A as te,d as H,B as ge,C as Oe,D as Me,T as Fe,E as x,G as Ae,H as je,I as we,g as ee,w as Le,J as Ne,K as He,L as Re,b as Be,h as Z}from"./CDCwti5A.js";import _e from"./CXzPC9fz.js";import Je from"./BiEThCkB.js";import{s as We}from"./4EuCTdJQ.js";import Ge from"./D7QJ539M.js";import Qe from"./Dlh41C94.js";import Ke from"./BFygXvEQ.js";import"./era6745a.js";import"./DjjmGKQE.js";import"./CU6ImnWC.js";import"./T8qb5eyM.js";import"./Dwg8l6Uj.js";import"./-lTAg9ef.js";import"./BEyaBrnJ.js";import"./D4pRCk3O.js";import"./CXeCKkwo.js";import"./Btt-PQgJ.js";const Ye={class:"components"},Xe=["onDragstart"],Ze={class:"component_title"},en={__name:"ComponentItems",emits:["dragStart","dragEnd"],setup(t,{emit:s}){const{getMethod:d,getResult:c}=K(),o=s,v=(y,w,r)=>{o("dragStart",{item:y,index:w,event:r})},m=y=>{o("dragEnd",y)};return de(()=>{d("components",null,!1,!1)}),(y,w)=>(q(),b("div",Ye,[(q(!0),b(E,null,O(h(c)?.data??[],r=>(q(),b("div",{key:r.type,class:"component_item",draggable:"true",onDragstart:n=>v(r,y.index,n),onDragend:w[0]||(w[0]=n=>m(n))},[e("i",{class:U(["component_icon pi",r.icon])},null,2),e("span",Ze,A(r.label),1),w[1]||(w[1]=e("i",{class:"pi pi-equals"},null,-1))],40,Xe))),128))]))}},nn={class:"popup"},ln={class:"content"},tn={class:"input"},on={__name:"ControlSectionPopup",props:{modifiedSection:{type:Object,default:null}},emits:["handleSectionPopup","handleShowControlSectionPopup"],setup(t,{emit:s}){const{showErrorToast:d}=K(),c=s,o=t,v=P({name:"",visible:!0,layout_items:1,components:[],isDragOver:!1});M(()=>o.modifiedSection,w=>{w&&(v.value={name:w.name??"",visible:w.visible??!0,layout_items:w.layout_items??1,components:w.components??[],isDragOver:!1})},{immediate:!0});const m=()=>{if(!v.value.name){d("You should add the section name to continue!");return}c("handleSectionPopup",v.value),y()},y=()=>{v.value={name:"",visible:!0,layout_items:1,components:[],isDragOver:!1},c("handleShowControlSectionPopup")};return(w,r)=>(q(),b("div",nn,[e("div",ln,[e("button",{class:"pi pi-times close_btn",onClick:y}),r[1]||(r[1]=e("h4",null,"Section Name",-1)),e("div",tn,[V(e("input",{type:"text",placeholder:"Name","onUpdate:modelValue":r[0]||(r[0]=n=>v.value.name=n),onKeydown:ke(m,["enter"])},null,544),[[T,v.value.name,void 0,{trim:!0}]])]),e("button",{class:"main-btn",onClick:m}," Submit ")])]))}},sn={class:"popup"},rn={class:"content"},an={class:"input"},dn={__name:"ControlPagePopup",props:{modifiedPage:{type:Object,default:null}},emits:["handleControlPage","handleShowControlPagePopup"],setup(t,{emit:s}){const{showErrorToast:d}=K(),c=s,o=t,v=P({name:""});M(()=>o.modifiedPage,w=>{v.value.name=w?.name??""},{immediate:!0});const m=()=>{if(!v.value.name){d("You should add the page name to continue!");return}c("handleControlPage",{...v.value}),y()},y=()=>{v.value.name="",c("handleShowControlPagePopup")};return(w,r)=>(q(),b("div",sn,[e("div",rn,[e("button",{class:"pi pi-times close_btn",onClick:y}),r[1]||(r[1]=e("h4",null,"Page Name",-1)),e("div",an,[V(e("input",{type:"text",placeholder:"Name","onUpdate:modelValue":r[0]||(r[0]=n=>v.value.name=n),onKeydown:ke(m,["enter"])},null,544),[[T,v.value.name,void 0,{trim:!0}]])]),e("button",{class:"main-btn",onClick:m}," Submit ")])]))}},cn={class:"input"},un=["for"],pn=["id","value"],qn={__name:"ClassesInput",props:{label:String,id:String,modelValue:String,placeholder:String,className:String},emits:["update:modelValue"],setup(t,{emit:s}){const d=s;return(c,o)=>(q(),b("div",cn,[t.label?(q(),b("label",{key:0,for:t.id},A(t.label),9,un)):I("",!0),e("input",{id:t.id,value:t.modelValue,onInput:o[0]||(o[0]=v=>d("update:modelValue",v.target.value)),placeholder:"e.g. rounded-lg shadow-md text-center",class:U(["classes-input",t.className])},null,42,pn)]))}},mn=F(qn,[["__scopeId","data-v-f9354fb2"]]),bn={key:0,class:"popup"},fn={class:"content"},vn={class:"icons_grid"},hn=["onClick"],kn={__name:"IconPicker",props:{modelValue:{type:Boolean},modelModifiers:{}},emits:Ue(["select","close"],["update:modelValue"]),setup(t,{emit:s}){const d=s,c=Ee(t,"modelValue"),o=P(""),v=P([]);de(()=>{const r=Array.from(document.styleSheets),n=new Set;r.forEach(i=>{try{const u=i.cssRules||[];Array.from(u).forEach(p=>{if(!p.selectorText)return;const l=p.selectorText.match(/\.pi-([a-z0-9-]+)::?before/i);l&&l[1]&&n.add(`pi pi-${l[1]}`)})}catch{}}),v.value=Array.from(n).sort()});const m=re(()=>o.value?v.value.filter(r=>r.toLowerCase().includes(o.value.toLowerCase())):v.value),y=r=>{d("select",r),o.value="",c.value=!1},w=()=>{c.value=!1,d("close")};return(r,n)=>c.value?(q(),b("div",bn,[e("div",fn,[e("button",{class:"pi pi-times close_btn",onClick:w}),n[1]||(n[1]=e("label",{for:"icon_input"},"Search an Icon",-1)),V(e("input",{id:"icon_input",class:"icon_search",type:"text","onUpdate:modelValue":n[0]||(n[0]=i=>ae(o)?o.value=i:null),placeholder:"Search icon..."},null,512),[[T,h(o)]]),e("div",vn,[(q(!0),b(E,null,O(h(m),i=>(q(),b("button",{key:i,class:"icon_item",onClick:u=>y(i)},[e("i",{class:U(i)},null,2)],8,hn))),128))])])])):I("",!0)}},gn=F(kn,[["__scopeId","data-v-56b38c7a"]]),wn={class:"accordion_fields"},_n={class:"item_index"},yn={class:"input grow_input"},Cn=["onUpdate:modelValue"],$n=["onClick"],xn={class:"input full_input"},Sn=["onUpdate:modelValue"],Pn={__name:"AccordionFields",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup"],setup(t,{emit:s}){const{showErrorToast:d}=B(),c=s,o=P([{title:"",content:""}]),v=t;M(()=>v.values,r=>{r&&(o.value=r?.items?.map(n=>({title:n.title??"",content:n.content??""})))},{immediate:!0});const m=()=>{o.value.push({title:"",content:""})},y=r=>{o.value.length>1?o.value.splice(r,1):d("At least one accordion item is required")},w=()=>{if(o.value.some(n=>!n.title.trim()||!n.content.trim())){d("Please fill all accordion titles and contents");return}c("handleSubmitFields",{items:o.value}),c("handleCloseComponentPopup")};return(r,n)=>(q(),b("div",wn,[n[4]||(n[4]=e("h4",{class:"centered"},"Accordion",-1)),(q(!0),b(E,null,O(h(o),(i,u)=>(q(),b("div",{class:"accordion_item",key:u},[e("h6",_n,[n[0]||(n[0]=oe("Item ",-1)),e("span",null,"#"+A(u+1),1)]),e("div",yn,[n[1]||(n[1]=e("label",null,"Title",-1)),V(e("input",{type:"text","onUpdate:modelValue":p=>i.title=p,placeholder:"Accordion title"},null,8,Cn),[[T,i.title]])]),h(o).length>1?(q(),b("button",{key:0,class:"delete_btn circled",onClick:p=>y(u)},[...n[2]||(n[2]=[e("i",{class:"pi pi-trash"},null,-1)])],8,$n)):I("",!0),e("div",xn,[n[3]||(n[3]=e("label",null,"Content",-1)),V(e("textarea",{rows:"4","onUpdate:modelValue":p=>i.content=p,placeholder:"Accordion content..."},null,8,Sn),[[T,i.content]])])]))),128)),j(r.$slots,"default",{},void 0,!0),e("div",{class:"flex_buttons"},[e("button",{class:"main-btn reversed",onClick:m}," Add Item "),e("button",{class:"main-btn",onClick:w}," Submit ")])]))}},Vn=F(Pn,[["__scopeId","data-v-ec436bc4"]]),Tn={class:"buttons_fields"},In={class:"input icon_input"},zn=["onClick"],Dn={class:"input grow_input"},Un=["onUpdate:modelValue"],En={class:"input"},On=["onUpdate:modelValue"],Mn={class:"input"},Fn=["onUpdate:modelValue"],An={class:"input toggle_input"},jn=["onClick"],Ln={__name:"ButtonsFields",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup","openIconPicker"],setup(t,{emit:s}){const{showErrorToast:d}=B(),c=s,o=P([{icon:"",title:"",link:"",target:"_self",reversed:!1}]),v=()=>{o.value.push({icon:"",title:"",link:"",target:"_self",reversed:!1})},m=r=>{o.value.length>1?o.value.splice(r,1):d("At least one button is required")},y=t;M(()=>y.values,r=>{r&&(o.value=r?.items?.map(n=>({icon:n.icon??"",title:n.title??"",link:n.link??"",target:n.target??"_self",reversed:n.reversed??!1})))},{immediate:!0});const w=()=>{const r=o.value.filter(n=>n.title?.trim()&&n.link?.trim()).map(n=>{const i={title:n.title.trim(),link:n.link.trim(),target:n.target,reversed:n.reversed};return n.icon?.trim()&&(i.icon=n.icon.trim()),i});if(!r.length){d("Please fill title and link for at least one button");return}c("handleSubmitFields",{items:r}),c("handleCloseComponentPopup")};return(r,n)=>{const i=_e;return q(),b("div",Tn,[n[7]||(n[7]=e("h4",{class:"centered"},"Buttons",-1)),(q(!0),b(E,null,O(h(o),(u,p)=>(q(),b("div",{class:"button_item",key:p},[e("div",In,[n[0]||(n[0]=e("label",null,"Icon",-1)),e("button",{class:"icon_select_btn",onClick:l=>c("openIconPicker",u)},[e("i",{class:U(u.icon||"pi pi-stop")},null,2)],8,zn)]),e("div",Dn,[n[1]||(n[1]=e("label",null,"Button Title",-1)),V(e("input",{type:"text","onUpdate:modelValue":l=>u.title=l,placeholder:"Button title"},null,8,Un),[[T,u.title]])]),e("div",En,[n[2]||(n[2]=e("label",null,"Button Link",-1)),V(e("input",{type:"text","onUpdate:modelValue":l=>u.link=l,placeholder:"Button link"},null,8,On),[[T,u.link]])]),e("div",Mn,[n[4]||(n[4]=e("label",null,"Target",-1)),V(e("select",{"onUpdate:modelValue":l=>u.target=l},[...n[3]||(n[3]=[e("option",{value:"_self"},"Same Tab",-1),e("option",{value:"_blank"},"New Tab",-1)])],8,Fn),[[te,u.target]])]),e("div",An,[H(i,{modelValue:u.reversed,"onUpdate:modelValue":l=>u.reversed=l},null,8,["modelValue","onUpdate:modelValue"]),n[5]||(n[5]=e("span",null,"Reversed",-1))]),h(o).length>1?(q(),b("button",{key:0,class:"delete_btn circled",onClick:l=>m(p)},[...n[6]||(n[6]=[e("i",{class:"pi pi-trash"},null,-1)])],8,jn)):I("",!0)]))),128)),j(r.$slots,"default",{},void 0,!0),e("div",{class:"flex_buttons"},[e("button",{class:"main-btn reversed",onClick:v},"Add Button"),e("button",{class:"main-btn",onClick:w},"Submit")])])}}},Nn=F(Ln,[["__scopeId","data-v-a6117e2f"]]),Hn={class:"card_fields"},Rn={class:"input"},Bn={class:"input-wrap"},Jn=["value"],Wn={class:"input"},Gn={class:"items_editor"},Qn=["onClick"],Kn={class:"image_wrapper"},Yn=["id","onChange"],Xn=["for"],Zn=["src"],el=["onUpdate:modelValue"],nl=["onUpdate:modelValue"],ll=["onUpdate:modelValue"],tl={__name:"CardSliderFields",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup"],setup(t,{emit:s}){const{submitMethod:d,submitResult:c,showErrorToast:o}=K(),v=s,m=P({itemsToShow:1,autoplay:!1,items:[{file:null,title:"",text:"",link:""}]}),y=()=>{m.value.items.push({file:null,title:"",text:"",link:""})},w=P(),r=(p,l)=>{const _=p.target.files[0];if(!_)return o("No file found to upload");w.value=m.value.items[l];const g=new FormData;g.append("file",_),d("/uploads/single",!1,g,"POST",null)};ge(()=>{c?.value&&(w.value.file=c?.value?.data?.path)});const n=p=>{m.value.items.splice(p,1)},i=t;M(()=>i.values,p=>{p&&(m.value={itemsToShow:p.itemsToShow??1,autoplay:p.autoplay??!1,items:p.items?.map(l=>({file:l.file,title:l.title??"",text:l.text??"",link:l.link??""}))})},{immediate:!0});const u=()=>{if(!m.value.items.length){o("You should add at least one card.");return}const p=m.value.items.findIndex(_=>!_.file||!_.title?.trim()||!_.text?.trim()||!_.link?.trim());if(p!==-1){o(`Please fill all fields for card #${p+1}`);return}const l={itemsToShow:m.value.itemsToShow,autoplay:m.value.autoplay,items:m.value.items.map(_=>({file:_.file,title:_.title.trim(),text:_.text.trim(),link:_.link.trim()}))};v("handleSubmitFields",l),v("handleCloseComponentPopup")};return(p,l)=>{const _=Je;return q(),b("div",Hn,[l[8]||(l[8]=e("h4",{class:"centered"},"Card Slider",-1)),e("div",Rn,[l[2]||(l[2]=e("label",{for:"cardItems"},"Items To Show",-1)),e("div",Bn,[V(e("select",{name:"card_items","onUpdate:modelValue":l[0]||(l[0]=g=>h(m).itemsToShow=g),id:"card_items"},[(q(),b(E,null,O(5,g=>e("option",{key:g,value:g},A(g),9,Jn)),64))],512),[[te,h(m).itemsToShow]])])]),e("div",Wn,[l[3]||(l[3]=e("label",{for:"autoplay"},"Autoplay",-1)),H(_,{modelValue:h(m).autoplay,"onUpdate:modelValue":l[1]||(l[1]=g=>h(m).autoplay=g),class:"w-24",onLabel:"On",offLabel:"Off"},null,8,["modelValue"])]),e("div",{class:"flex_header"},[l[5]||(l[5]=e("h4",null,"Card Items",-1)),e("button",{class:"main-btn mb-4",onClick:y},[...l[4]||(l[4]=[e("i",{class:"pi pi-plus"},null,-1)])])]),e("div",Gn,[(q(!0),b(E,null,O(h(m).items,(g,z)=>(q(),b("div",{class:"item_card",key:z},[h(m).items.length>1?(q(),b("button",{key:0,class:"pi pi-trash delete_btn",onClick:$=>n(z)},null,8,Qn)):I("",!0),e("div",Kn,[e("input",{type:"file",id:`card_image_${z}`,hidden:"",accept:"image/*",onChange:$=>r($,z)},null,40,Yn),e("label",{for:`card_image_${z}`,class:"upload_placeholder"},[g.file?(q(),b("img",{key:1,src:g.file,alt:"uploaded image",loading:"lazy",preview:""},null,8,Zn)):(q(),b(E,{key:0},[l[6]||(l[6]=e("i",{class:"pi pi-upload"},null,-1)),l[7]||(l[7]=e("span",null,"Upload Image",-1))],64))],8,Xn)]),V(e("input",{type:"text","onUpdate:modelValue":$=>g.title=$,placeholder:"Card Title",class:"card_input"},null,8,el),[[T,g.title]]),V(e("textarea",{"onUpdate:modelValue":$=>g.text=$,placeholder:"Card Text",class:"card_input"},null,8,nl),[[T,g.text]]),V(e("input",{type:"text","onUpdate:modelValue":$=>g.link=$,placeholder:"Route / Link",class:"card_input"},null,8,ll),[[T,g.link]])]))),128))]),j(p.$slots,"default",{},void 0,!0),e("button",{class:"main-btn mt-4",onClick:u}," Submit ")])}}},ol=F(tl,[["__scopeId","data-v-19cb12fe"]]);var il=`
    /*!
* Quill Editor v1.3.3
* https://quilljs.com/
* Copyright (c) 2014, Jason Chen
* Copyright (c) 2013, salesforce.com
*/
    .ql-container {
        box-sizing: border-box;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 13px;
        height: 100%;
        margin: 0;
        position: relative;
    }
    .ql-container.ql-disabled .ql-tooltip {
        visibility: hidden;
    }
    .ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {
        pointer-events: none;
    }
    .ql-clipboard {
        inset-inline-start: -100000px;
        height: 1px;
        overflow-y: hidden;
        position: absolute;
        top: 50%;
    }
    .ql-clipboard p {
        margin: 0;
        padding: 0;
    }
    .ql-editor {
        box-sizing: border-box;
        line-height: 1.42;
        height: 100%;
        outline: none;
        overflow-y: auto;
        padding: 12px 15px;
        tab-size: 4;
        -moz-tab-size: 4;
        text-align: left;
        white-space: pre-wrap;
        word-wrap: break-word;
    }
    .ql-editor > * {
        cursor: text;
    }
    .ql-editor p,
    .ql-editor ol,
    .ql-editor ul,
    .ql-editor pre,
    .ql-editor blockquote,
    .ql-editor h1,
    .ql-editor h2,
    .ql-editor h3,
    .ql-editor h4,
    .ql-editor h5,
    .ql-editor h6 {
        margin: 0;
        padding: 0;
        counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol,
    .ql-editor ul {
        padding-inline-start: 1.5rem;
    }
    .ql-editor ol > li,
    .ql-editor ul > li {
        list-style-type: none;
    }
    .ql-editor ul > li::before {
        content: '\\2022';
    }
    .ql-editor ul[data-checked='true'],
    .ql-editor ul[data-checked='false'] {
        pointer-events: none;
    }
    .ql-editor ul[data-checked='true'] > li *,
    .ql-editor ul[data-checked='false'] > li * {
        pointer-events: all;
    }
    .ql-editor ul[data-checked='true'] > li::before,
    .ql-editor ul[data-checked='false'] > li::before {
        color: #777;
        cursor: pointer;
        pointer-events: all;
    }
    .ql-editor ul[data-checked='true'] > li::before {
        content: '\\2611';
    }
    .ql-editor ul[data-checked='false'] > li::before {
        content: '\\2610';
    }
    .ql-editor li::before {
        display: inline-block;
        white-space: nowrap;
        width: 1.2rem;
    }
    .ql-editor li:not(.ql-direction-rtl)::before {
        margin-inline-start: -1.5rem;
        margin-inline-end: 0.3rem;
        text-align: right;
    }
    .ql-editor li.ql-direction-rtl::before {
        margin-inline-start: 0.3rem;
        margin-inline-end: -1.5rem;
    }
    .ql-editor ol li:not(.ql-direction-rtl),
    .ql-editor ul li:not(.ql-direction-rtl) {
        padding-inline-start: 1.5rem;
    }
    .ql-editor ol li.ql-direction-rtl,
    .ql-editor ul li.ql-direction-rtl {
        padding-inline-end: 1.5rem;
    }
    .ql-editor ol li {
        counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
        counter-increment: list-0;
    }
    .ql-editor ol li:before {
        content: counter(list-0, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-1 {
        counter-increment: list-1;
    }
    .ql-editor ol li.ql-indent-1:before {
        content: counter(list-1, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-1 {
        counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-2 {
        counter-increment: list-2;
    }
    .ql-editor ol li.ql-indent-2:before {
        content: counter(list-2, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-2 {
        counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-3 {
        counter-increment: list-3;
    }
    .ql-editor ol li.ql-indent-3:before {
        content: counter(list-3, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-3 {
        counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-4 {
        counter-increment: list-4;
    }
    .ql-editor ol li.ql-indent-4:before {
        content: counter(list-4, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-4 {
        counter-reset: list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-5 {
        counter-increment: list-5;
    }
    .ql-editor ol li.ql-indent-5:before {
        content: counter(list-5, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-5 {
        counter-reset: list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-6 {
        counter-increment: list-6;
    }
    .ql-editor ol li.ql-indent-6:before {
        content: counter(list-6, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-6 {
        counter-reset: list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-7 {
        counter-increment: list-7;
    }
    .ql-editor ol li.ql-indent-7:before {
        content: counter(list-7, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-7 {
        counter-reset: list-8 list-9;
    }
    .ql-editor ol li.ql-indent-8 {
        counter-increment: list-8;
    }
    .ql-editor ol li.ql-indent-8:before {
        content: counter(list-8, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-8 {
        counter-reset: list-9;
    }
    .ql-editor ol li.ql-indent-9 {
        counter-increment: list-9;
    }
    .ql-editor ol li.ql-indent-9:before {
        content: counter(list-9, decimal) '. ';
    }
    .ql-editor .ql-video {
        display: block;
        max-width: 100%;
    }
    .ql-editor .ql-video.ql-align-center {
        margin: 0 auto;
    }
    .ql-editor .ql-video.ql-align-right {
        margin: 0 0 0 auto;
    }
    .ql-editor .ql-bg-black {
        background: #000;
    }
    .ql-editor .ql-bg-red {
        background: #e60000;
    }
    .ql-editor .ql-bg-orange {
        background: #f90;
    }
    .ql-editor .ql-bg-yellow {
        background: #ff0;
    }
    .ql-editor .ql-bg-green {
        background: #008a00;
    }
    .ql-editor .ql-bg-blue {
        background: #06c;
    }
    .ql-editor .ql-bg-purple {
        background: #93f;
    }
    .ql-editor .ql-color-white {
        color: #fff;
    }
    .ql-editor .ql-color-red {
        color: #e60000;
    }
    .ql-editor .ql-color-orange {
        color: #f90;
    }
    .ql-editor .ql-color-yellow {
        color: #ff0;
    }
    .ql-editor .ql-color-green {
        color: #008a00;
    }
    .ql-editor .ql-color-blue {
        color: #06c;
    }
    .ql-editor .ql-color-purple {
        color: #93f;
    }
    .ql-editor .ql-font-serif {
        font-family:
            Georgia,
            Times New Roman,
            serif;
    }
    .ql-editor .ql-font-monospace {
        font-family:
            Monaco,
            Courier New,
            monospace;
    }
    .ql-editor .ql-size-small {
        font-size: 0.75rem;
    }
    .ql-editor .ql-size-large {
        font-size: 1.5rem;
    }
    .ql-editor .ql-size-huge {
        font-size: 2.5rem;
    }
    .ql-editor .ql-direction-rtl {
        direction: rtl;
        text-align: inherit;
    }
    .ql-editor .ql-align-center {
        text-align: center;
    }
    .ql-editor .ql-align-justify {
        text-align: justify;
    }
    .ql-editor .ql-align-right {
        text-align: right;
    }
    .ql-editor.ql-blank::before {
        color: dt('form.field.placeholder.color');
        content: attr(data-placeholder);
        font-style: italic;
        inset-inline-start: 15px;
        pointer-events: none;
        position: absolute;
        inset-inline-end: 15px;
    }
    .ql-snow.ql-toolbar:after,
    .ql-snow .ql-toolbar:after {
        clear: both;
        content: '';
        display: table;
    }
    .ql-snow.ql-toolbar button,
    .ql-snow .ql-toolbar button {
        background: none;
        border: none;
        cursor: pointer;
        display: inline-block;
        float: left;
        height: 24px;
        padding-block: 3px;
        padding-inline: 5px;
        width: 28px;
    }
    .ql-snow.ql-toolbar button svg,
    .ql-snow .ql-toolbar button svg {
        float: left;
        height: 100%;
    }
    .ql-snow.ql-toolbar button:active:hover,
    .ql-snow .ql-toolbar button:active:hover {
        outline: none;
    }
    .ql-snow.ql-toolbar input.ql-image[type='file'],
    .ql-snow .ql-toolbar input.ql-image[type='file'] {
        display: none;
    }
    .ql-snow.ql-toolbar button:hover,
    .ql-snow .ql-toolbar button:hover,
    .ql-snow.ql-toolbar button:focus,
    .ql-snow .ql-toolbar button:focus,
    .ql-snow.ql-toolbar button.ql-active,
    .ql-snow .ql-toolbar button.ql-active,
    .ql-snow.ql-toolbar .ql-picker-label:hover,
    .ql-snow .ql-toolbar .ql-picker-label:hover,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active,
    .ql-snow.ql-toolbar .ql-picker-item:hover,
    .ql-snow .ql-toolbar .ql-picker-item:hover,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
        color: #06c;
    }
    .ql-snow.ql-toolbar button:hover .ql-fill,
    .ql-snow .ql-toolbar button:hover .ql-fill,
    .ql-snow.ql-toolbar button:focus .ql-fill,
    .ql-snow .ql-toolbar button:focus .ql-fill,
    .ql-snow.ql-toolbar button.ql-active .ql-fill,
    .ql-snow .ql-toolbar button.ql-active .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
    .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
        fill: #06c;
    }
    .ql-snow.ql-toolbar button:hover .ql-stroke,
    .ql-snow .ql-toolbar button:hover .ql-stroke,
    .ql-snow.ql-toolbar button:focus .ql-stroke,
    .ql-snow .ql-toolbar button:focus .ql-stroke,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke,
    .ql-snow .ql-toolbar button.ql-active .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
    .ql-snow.ql-toolbar button:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar button:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar button:focus .ql-stroke-miter,
    .ql-snow .ql-toolbar button:focus .ql-stroke-miter,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
        stroke: #06c;
    }
    @media (pointer: coarse) {
        .ql-snow.ql-toolbar button:hover:not(.ql-active),
        .ql-snow .ql-toolbar button:hover:not(.ql-active) {
            color: #444;
        }
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
            fill: #444;
        }
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
            stroke: #444;
        }
    }
    .ql-snow {
        box-sizing: border-box;
    }
    .ql-snow * {
        box-sizing: border-box;
    }
    .ql-snow .ql-hidden {
        display: none;
    }
    .ql-snow .ql-out-bottom,
    .ql-snow .ql-out-top {
        visibility: hidden;
    }
    .ql-snow .ql-tooltip {
        position: absolute;
        transform: translateY(10px);
    }
    .ql-snow .ql-tooltip a {
        cursor: pointer;
        text-decoration: none;
    }
    .ql-snow .ql-tooltip.ql-flip {
        transform: translateY(-10px);
    }
    .ql-snow .ql-formats {
        display: inline-block;
        vertical-align: middle;
    }
    .ql-snow .ql-formats:after {
        clear: both;
        content: '';
        display: table;
    }
    .ql-snow .ql-stroke {
        fill: none;
        stroke: #444;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
    }
    .ql-snow .ql-stroke-miter {
        fill: none;
        stroke: #444;
        stroke-miterlimit: 10;
        stroke-width: 2;
    }
    .ql-snow .ql-fill,
    .ql-snow .ql-stroke.ql-fill {
        fill: #444;
    }
    .ql-snow .ql-empty {
        fill: none;
    }
    .ql-snow .ql-even {
        fill-rule: evenodd;
    }
    .ql-snow .ql-thin,
    .ql-snow .ql-stroke.ql-thin {
        stroke-width: 1;
    }
    .ql-snow .ql-transparent {
        opacity: 0.4;
    }
    .ql-snow .ql-direction svg:last-child {
        display: none;
    }
    .ql-snow .ql-direction.ql-active svg:last-child {
        display: inline;
    }
    .ql-snow .ql-direction.ql-active svg:first-child {
        display: none;
    }
    .ql-snow .ql-editor h1 {
        font-size: 2rem;
    }
    .ql-snow .ql-editor h2 {
        font-size: 1.5rem;
    }
    .ql-snow .ql-editor h3 {
        font-size: 1.17rem;
    }
    .ql-snow .ql-editor h4 {
        font-size: 1rem;
    }
    .ql-snow .ql-editor h5 {
        font-size: 0.83rem;
    }
    .ql-snow .ql-editor h6 {
        font-size: 0.67rem;
    }
    .ql-snow .ql-editor a {
        text-decoration: underline;
    }
    .ql-snow .ql-editor blockquote {
        border-inline-start: 4px solid #ccc;
        margin-block-end: 5px;
        margin-block-start: 5px;
        padding-inline-start: 16px;
    }
    .ql-snow .ql-editor code,
    .ql-snow .ql-editor pre {
        background: #f0f0f0;
        border-radius: 3px;
    }
    .ql-snow .ql-editor pre {
        white-space: pre-wrap;
        margin-block-end: 5px;
        margin-block-start: 5px;
        padding: 5px 10px;
    }
    .ql-snow .ql-editor code {
        font-size: 85%;
        padding: 2px 4px;
    }
    .ql-snow .ql-editor pre.ql-syntax {
        background: #23241f;
        color: #f8f8f2;
        overflow: visible;
    }
    .ql-snow .ql-editor img {
        max-width: 100%;
    }
    .ql-snow .ql-picker {
        color: #444;
        display: inline-block;
        float: left;
        inset-inline-start: 0;
        font-size: 14px;
        font-weight: 500;
        height: 24px;
        position: relative;
        vertical-align: middle;
    }
    .ql-snow .ql-picker-label {
        cursor: pointer;
        display: inline-block;
        height: 100%;
        padding-inline-start: 8px;
        padding-inline-end: 2px;
        position: relative;
        width: 100%;
    }
    .ql-snow .ql-picker-label::before {
        display: inline-block;
        line-height: 22px;
    }
    .ql-snow .ql-picker-options {
        background: #fff;
        display: none;
        min-width: 100%;
        padding: 4px 8px;
        position: absolute;
        white-space: nowrap;
    }
    .ql-snow .ql-picker-options .ql-picker-item {
        cursor: pointer;
        display: block;
        padding-block-end: 5px;
        padding-block-start: 5px;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label {
        color: #ccc;
        z-index: 2;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
        fill: #ccc;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
        stroke: #ccc;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-options {
        display: block;
        margin-block-start: -1px;
        top: 100%;
        z-index: 1;
    }
    .ql-snow .ql-color-picker,
    .ql-snow .ql-icon-picker {
        width: 28px;
    }
    .ql-snow .ql-color-picker .ql-picker-label,
    .ql-snow .ql-icon-picker .ql-picker-label {
        padding: 2px 4px;
    }
    .ql-snow .ql-color-picker .ql-picker-label svg,
    .ql-snow .ql-icon-picker .ql-picker-label svg {
        inset-inline-end: 4px;
    }
    .ql-snow .ql-icon-picker .ql-picker-options {
        padding: 4px 0;
    }
    .ql-snow .ql-icon-picker .ql-picker-item {
        height: 24px;
        width: 24px;
        padding: 2px 4px;
    }
    .ql-snow .ql-color-picker .ql-picker-options {
        padding: 3px 5px;
        width: 152px;
    }
    .ql-snow .ql-color-picker .ql-picker-item {
        border: 1px solid transparent;
        float: left;
        height: 16px;
        margin: 2px;
        padding: 0;
        width: 16px;
    }
    .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
        position: absolute;
        margin-block-start: -9px;
        inset-inline-end: 0;
        top: 50%;
        width: 18px;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {
        content: attr(data-label);
    }
    .ql-snow .ql-picker.ql-header {
        width: 98px;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item::before {
        content: 'Normal';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
        content: 'Heading 1';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
        content: 'Heading 2';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
        content: 'Heading 3';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
        content: 'Heading 4';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
        content: 'Heading 5';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
        content: 'Heading 6';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
        font-size: 2rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
        font-size: 1.5rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
        font-size: 1.17rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
        font-size: 1rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
        font-size: 0.83rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
        font-size: 0.67rem;
    }
    .ql-snow .ql-picker.ql-font {
        width: 108px;
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item::before {
        content: 'Sans Serif';
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
        content: 'Serif';
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
        content: 'Monospace';
    }
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
        font-family:
            Georgia,
            Times New Roman,
            serif;
    }
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
        font-family:
            Monaco,
            Courier New,
            monospace;
    }
    .ql-snow .ql-picker.ql-size {
        width: 98px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item::before {
        content: 'Normal';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
        content: 'Small';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
        content: 'Large';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
        content: 'Huge';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
        font-size: 10px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
        font-size: 18px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
        font-size: 32px;
    }
    .ql-snow .ql-color-picker.ql-background .ql-picker-item {
        background: #fff;
    }
    .ql-snow .ql-color-picker.ql-color .ql-picker-item {
        background: #000;
    }
    .ql-toolbar.ql-snow {
        border: 1px solid #ccc;
        box-sizing: border-box;
        font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
        padding: 8px;
    }
    .ql-toolbar.ql-snow .ql-formats {
        margin-inline-end: 15px;
    }
    .ql-toolbar.ql-snow .ql-picker-label {
        border: 1px solid transparent;
    }
    .ql-toolbar.ql-snow .ql-picker-options {
        border: 1px solid transparent;
        box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
    }
    .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
        border-color: #ccc;
    }
    .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
        border-color: #ccc;
    }
    .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
    .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
        border-color: #000;
    }
    .ql-toolbar.ql-snow + .ql-container.ql-snow {
        border-block-start: 0;
    }
    .ql-snow .ql-tooltip {
        background: #fff;
        border: 1px solid #ccc;
        box-shadow: 0 0 5px #ddd;
        color: #444;
        padding: 5px 12px;
        white-space: nowrap;
    }
    .ql-snow .ql-tooltip::before {
        content: 'Visit URL:';
        line-height: 26px;
        margin-inline-end: 8px;
    }
    .ql-snow .ql-tooltip input[type='text'] {
        display: none;
        border: 1px solid #ccc;
        font-size: 13px;
        height: 26px;
        margin: 0;
        padding: 3px 5px;
        width: 170px;
    }
    .ql-snow .ql-tooltip a.ql-preview {
        display: inline-block;
        max-width: 200px;
        overflow-x: hidden;
        text-overflow: ellipsis;
        vertical-align: top;
    }
    .ql-snow .ql-tooltip a.ql-action::after {
        border-inline-end: 1px solid #ccc;
        content: 'Edit';
        margin-inline-start: 16px;
        padding-inline-end: 8px;
    }
    .ql-snow .ql-tooltip a.ql-remove::before {
        content: 'Remove';
        margin-inline-start: 8px;
    }
    .ql-snow .ql-tooltip a {
        line-height: 26px;
    }
    .ql-snow .ql-tooltip.ql-editing a.ql-preview,
    .ql-snow .ql-tooltip.ql-editing a.ql-remove {
        display: none;
    }
    .ql-snow .ql-tooltip.ql-editing input[type='text'] {
        display: inline-block;
    }
    .ql-snow .ql-tooltip.ql-editing a.ql-action::after {
        border-inline-end: 0;
        content: 'Save';
        padding-inline-end: 0;
    }
    .ql-snow .ql-tooltip[data-mode='link']::before {
        content: 'Enter link:';
    }
    .ql-snow .ql-tooltip[data-mode='formula']::before {
        content: 'Enter formula:';
    }
    .ql-snow .ql-tooltip[data-mode='video']::before {
        content: 'Enter video:';
    }
    .ql-snow a {
        color: #06c;
    }
    .ql-container.ql-snow {
        border: 1px solid #ccc;
    }

    .p-editor {
        display: block;
    }

    .p-editor .p-editor-toolbar {
        background: dt('editor.toolbar.background');
        border-start-end-radius: dt('editor.toolbar.border.radius');
        border-start-start-radius: dt('editor.toolbar.border.radius');
    }

    .p-editor .p-editor-toolbar.ql-snow {
        border: 1px solid dt('editor.toolbar.border.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-stroke {
        stroke: dt('editor.toolbar.item.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-fill {
        fill: dt('editor.toolbar.item.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label {
        border: 0 none;
        color: dt('editor.toolbar.item.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover {
        color: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-stroke {
        stroke: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-fill {
        fill: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
        color: dt('editor.toolbar.item.active.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
        stroke: dt('editor.toolbar.item.active.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
        fill: dt('editor.toolbar.item.active.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
        background: dt('editor.overlay.background');
        border: 1px solid dt('editor.overlay.border.color');
        box-shadow: dt('editor.overlay.shadow');
        border-radius: dt('editor.overlay.border.radius');
        padding: dt('editor.overlay.padding');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {
        color: dt('editor.overlay.option.color');
        border-radius: dt('editor.overlay.option.border.radius');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover {
        background: dt('editor.overlay.option.focus.background');
        color: dt('editor.overlay.option.focus.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded:not(.ql-color-picker, .ql-icon-picker) .ql-picker-item {
        padding: dt('editor.overlay.option.padding');
    }

    .p-editor .p-editor-content {
        border-end-end-radius: dt('editor.content.border.radius');
        border-end-start-radius: dt('editor.content.border.radius');
    }

    .p-editor .p-editor-content.ql-snow {
        border: 1px solid dt('editor.content.border.color');
    }

    .p-editor .p-editor-content .ql-editor {
        background: dt('editor.content.background');
        color: dt('editor.content.color');
        border-end-end-radius: dt('editor.content.border.radius');
        border-end-start-radius: dt('editor.content.border.radius');
    }

    .p-editor .ql-snow.ql-toolbar button:hover,
    .p-editor .ql-snow.ql-toolbar button:focus {
        color: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .ql-snow.ql-toolbar button:hover .ql-stroke,
    .p-editor .ql-snow.ql-toolbar button:focus .ql-stroke {
        stroke: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .ql-snow.ql-toolbar button:hover .ql-fill,
    .p-editor .ql-snow.ql-toolbar button:focus .ql-fill {
        fill: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected {
        color: dt('editor.toolbar.item.active.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-stroke,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke {
        stroke: dt('editor.toolbar.item.active.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-fill,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill {
        fill: dt('editor.toolbar.item.active.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-picker-label,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-picker-label,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-picker-label {
        color: dt('editor.toolbar.item.active.color');
    }
`,sl={root:function(s){var d=s.instance;return["p-editor",{"p-invalid":d.$invalid}]},toolbar:"p-editor-toolbar",content:"p-editor-content"},rl=Oe.extend({name:"editor",style:il,classes:sl}),al={name:"BaseEditor",extends:We,props:{placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:rl,provide:function(){return{$pcEditor:this,$parentInstance:this}}};function ne(t){"@babel/helpers - typeof";return ne=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},ne(t)}function ve(t,s){var d=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);s&&(c=c.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),d.push.apply(d,c)}return d}function dl(t){for(var s=1;s<arguments.length;s++){var d=arguments[s]!=null?arguments[s]:{};s%2?ve(Object(d),!0).forEach(function(c){cl(t,c,d[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(d)):ve(Object(d)).forEach(function(c){Object.defineProperty(t,c,Object.getOwnPropertyDescriptor(d,c))})}return t}function cl(t,s,d){return(s=ul(s))in t?Object.defineProperty(t,s,{value:d,enumerable:!0,configurable:!0,writable:!0}):t[s]=d,t}function ul(t){var s=pl(t,"string");return ne(s)=="symbol"?s:s+""}function pl(t,s){if(ne(t)!="object"||!t)return t;var d=t[Symbol.toPrimitive];if(d!==void 0){var c=d.call(t,s);if(ne(c)!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(t)}var he=(function(){try{return window.Quill}catch{return null}})(),ye={name:"Editor",extends:al,inheritAttrs:!1,emits:["text-change","selection-change","load"],quill:null,watch:{modelValue:function(s,d){s!==d&&this.quill&&!this.quill.hasFocus()&&this.renderValue(s)},d_value:function(s,d){s!==d&&this.quill&&!this.quill.hasFocus()&&this.renderValue(s)},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var s=this,d={modules:dl({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:"snow",formats:this.formats,placeholder:this.placeholder};he?(this.quill=new he(this.$refs.editorElement,d),this.initQuill(),this.handleLoad()):Me(()=>import("./W7s-taa4.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(function(c){c&&Fe(s.$refs.editorElement)&&(c.default?s.quill=new c.default(s.$refs.editorElement,d):s.quill=new c(s.$refs.editorElement,d),s.initQuill())}).then(function(){s.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(s){if(this.quill)if(s){var d=this.quill.clipboard.convert({html:s});this.quill.setContents(d)}else this.quill.setText("")},initQuill:function(){var s=this;this.renderValue(this.d_value),this.quill.on("text-change",function(d,c,o){if(o==="user"){var v=s.quill.getSemanticHTML(),m=s.quill.getText().trim();v==="<p><br></p>"&&(v=""),s.writeValue(v),s.$emit("text-change",{htmlValue:v,textValue:m,delta:d,source:o,instance:s.quill})}}),this.quill.on("selection-change",function(d,c,o){var v=s.quill.getSemanticHTML(),m=s.quill.getText().trim();s.$emit("selection-change",{htmlValue:v,textValue:m,range:d,oldRange:c,source:o,instance:s.quill})})},handleLoad:function(){this.quill&&this.quill.getModule("toolbar")&&this.$emit("load",{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function ql(t,s,d,c,o,v){return q(),b("div",x({class:t.cx("root")},t.ptmi("root")),[e("div",x({ref:"toolbarElement",class:t.cx("toolbar")},t.ptm("toolbar")),[j(t.$slots,"toolbar",{},function(){return[e("span",x({class:"ql-formats"},t.ptm("formats")),[e("select",x({class:"ql-header",defaultValue:"0"},t.ptm("header")),[e("option",x({value:"1"},t.ptm("option")),"Heading",16),e("option",x({value:"2"},t.ptm("option")),"Subheading",16),e("option",x({value:"0"},t.ptm("option")),"Normal",16)],16),e("select",x({class:"ql-font"},t.ptm("font")),[e("option",Ae(je(t.ptm("option"))),null,16),e("option",x({value:"serif"},t.ptm("option")),null,16),e("option",x({value:"monospace"},t.ptm("option")),null,16)],16)],16),e("span",x({class:"ql-formats"},t.ptm("formats")),[e("button",x({class:"ql-bold",type:"button"},t.ptm("bold")),null,16),e("button",x({class:"ql-italic",type:"button"},t.ptm("italic")),null,16),e("button",x({class:"ql-underline",type:"button"},t.ptm("underline")),null,16)],16),e("span",x({class:"ql-formats"},t.ptm("formats")),[e("select",x({class:"ql-color"},t.ptm("color")),null,16),e("select",x({class:"ql-background"},t.ptm("background")),null,16)],16),e("span",x({class:"ql-formats"},t.ptm("formats")),[e("button",x({class:"ql-list",value:"ordered",type:"button"},t.ptm("list")),null,16),e("button",x({class:"ql-list",value:"bullet",type:"button"},t.ptm("list")),null,16),e("select",x({class:"ql-align"},t.ptm("select")),[e("option",x({defaultValue:""},t.ptm("option")),null,16),e("option",x({value:"center"},t.ptm("option")),null,16),e("option",x({value:"right"},t.ptm("option")),null,16),e("option",x({value:"justify"},t.ptm("option")),null,16)],16)],16),e("span",x({class:"ql-formats"},t.ptm("formats")),[e("button",x({class:"ql-link",type:"button"},t.ptm("link")),null,16),e("button",x({class:"ql-image",type:"button"},t.ptm("image")),null,16),e("button",x({class:"ql-code-block",type:"button"},t.ptm("codeBlock")),null,16)],16),e("span",x({class:"ql-formats"},t.ptm("formats")),[e("button",x({class:"ql-clean",type:"button"},t.ptm("clean")),null,16)],16)]})],16),e("div",x({ref:"editorElement",class:t.cx("content"),style:t.editorStyle},t.ptm("content")),null,16)],16)}ye.render=ql;const ml={class:"custom_html_fields"},bl={__name:"CustomHtml",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup"],setup(t,{emit:s}){const{showErrorToast:d}=B(),c=s,o=P({html:""}),v=t;M(()=>v.values,y=>{y&&(o.value.html=y.html)},{immediate:!0});const m=()=>{if(!o.value.html.trim()){d("Content cannot be empty");return}c("handleSubmitFields",o.value),c("handleCloseComponentPopup")};return(y,w)=>{const r=ye;return q(),b("div",ml,[w[1]||(w[1]=e("h4",{class:"centered"},"Custom HTML Section",-1)),H(r,{modelValue:h(o).html,"onUpdate:modelValue":w[0]||(w[0]=n=>h(o).html=n),placeholder:"Write or paste HTML here..."},null,8,["modelValue"]),j(y.$slots,"default",{},void 0,!0),e("button",{class:"main-btn",onClick:m}," Submit ")])}}},fl=F(bl,[["__scopeId","data-v-734bd723"]]),vl={class:"logo_fields"},hl={class:"input upload_logo"},kl={key:0,class:"preview"},gl=["src"],wl={class:"input"},_l={class:"input"},yl={__name:"LogoField",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup"],setup(t,{emit:s}){const d=s,{submitMethod:c,submitResult:o,showErrorToast:v}=K(),m=P({image:null,width:"",height:""}),y=t;M(()=>y.values,i=>{i&&(m.value={image:i.image??null,width:i.width??"",height:i.height??""})},{immediate:!0});const w=i=>{const u=i.target.files?.[0];if(!u){v("No file selected");return}if(!["image/jpeg","image/png","image/webp","image/gif","image/svg+xml"].includes(u.type)){v("Only JPG, PNG, WEBP, GIF, or SVG images are allowed"),i.target.value="";return}const l=new FormData;l.append("file",u),c("/uploads/single",!1,l,"POST",null)};ge(()=>{o?.value&&(m.value.image=o?.value?.data?.path)});const r=()=>{m.value.image=null},n=()=>{if(!m.value.image){v("Logo image is required");return}d("handleSubmitFields",m.value),d("handleCloseComponentPopup")};return(i,u)=>(q(),b("div",vl,[u[5]||(u[5]=e("h4",{class:"centered"},"Logo Component",-1)),e("div",hl,[e("input",{type:"file",accept:"image/*",id:"logo_input",hidden:"",onChange:w},null,32),u[2]||(u[2]=e("label",{for:"logo_input",class:"upload_logo_btn"},[e("i",{class:"pi pi-upload"}),e("span",null,"Upload Logo")],-1))]),h(m).image?(q(),b("div",kl,[e("img",{src:h(m).image,alt:"logo image",loading:"lazy",preview:""},null,8,gl),e("button",{class:"pi pi-trash delete_btn",onClick:r})])):I("",!0),e("div",wl,[u[3]||(u[3]=e("label",{for:"logo_width"},"Width (px)",-1)),V(e("input",{id:"logo_width",type:"number","onUpdate:modelValue":u[0]||(u[0]=p=>h(m).width=p),class:"input-wrap",placeholder:"Example: 150"},null,512),[[T,h(m).width]])]),e("div",_l,[u[4]||(u[4]=e("label",{for:"logo_height"},"Height (px)",-1)),V(e("input",{id:"logo_height",type:"number","onUpdate:modelValue":u[1]||(u[1]=p=>h(m).height=p),class:"input-wrap",placeholder:"Example: 50"},null,512),[[T,h(m).height]])]),j(i.$slots,"default",{},void 0,!0),e("button",{class:"main-btn",onClick:n},"Submit")]))}},Cl=F(yl,[["__scopeId","data-v-9acf468c"]]),$l={class:"nav_menu_fields"},xl={class:"input icon_input"},Sl=["onClick"],Pl={class:"input"},Vl=["onUpdate:modelValue"],Tl={key:0,class:"input"},Il=["onUpdate:modelValue"],zl={key:1,class:"input"},Dl=["onUpdate:modelValue"],Ul={class:"input toggle_input"},El=["onClick"],Ol={key:0,class:"submenu_block"},Ml={class:"submenu_block_header"},Fl=["onClick"],Al={class:"icon_input input"},jl=["onClick"],Ll={class:"input"},Nl=["onUpdate:modelValue"],Hl={class:"input"},Rl=["onUpdate:modelValue"],Bl={key:0,class:"input"},Jl=["onUpdate:modelValue"],Wl=["onClick"],Gl={__name:"MenuFields",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup","openIconPicker"],setup(t,{emit:s}){const{showErrorToast:d}=B(),c=s,o=P({items:[{icon:"",title:"",link:"",target:"_self",hasChilds:!1,children:[{icon:"",title:"",link:"",target:"_self"}]}]}),v=t;M(()=>v.values,p=>{o.value.items=p.items.map(l=>({icon:l.icon??"",title:l.title??"",link:l.link??"",target:l.target??"_self",hasChilds:l.hasChilds??!1,children:l.hasChilds?(l.children??[]).map(_=>({icon:_.icon??"",title:_.title??"",link:_.link??"",target:_.target??"_self"})):[]}))},{immediate:!0});const m=()=>{o.value.items.push({title:"",link:"",target:"_self",hasChilds:!1,children:[]})},y=p=>{o.value.items.length!==1?o.value.items.splice(p,1):d("Menu should have at least one Route")},w=p=>{const l=o.value.items[p];l.hasChilds?(l.children||(l.children=[]),l.link=""):l.children=[{title:"",link:"",target:"_self"}]},r=p=>{o.value.items[p].children.push({title:"",link:"",target:"_self"})},n=(p,l)=>{o.value.items[p].children.splice(l,1)},i=(p=[])=>p.map(l=>{const _={title:l.title};l.icon&&l.icon.trim()!==""&&(_.icon=l.icon);const g=l.hasChilds==!0&&Array.isArray(l.children)&&l.children.length>0;return l.hasChilds!==void 0&&(_.hasChilds=l.hasChilds),g?(_.children=i(l.children),_):(l.link&&(_.link=l.link,l.target&&(_.target=l.target)),_)}),u=()=>{if(o.value.items.some(l=>{if(!l.title||!l.hasChilds&&!l.link||l.hasChilds&&l.children.some(_=>!_.title||!_.link))return!0})){d("Please fill all titles and links to continue");return}c("handleSubmitFields",i(o.value.items)),c("handleCloseComponentPopup")};return(p,l)=>{const _=_e;return q(),b("div",$l,[l[13]||(l[13]=e("h4",{class:"centered"},"Nav Menu",-1)),(q(!0),b(E,null,O(h(o).items,(g,z)=>(q(),b("div",{class:"menu_group",key:z},[e("div",{class:U(["menu_item ",{has_childs:g?.hasChilds}])},[e("div",xl,[l[0]||(l[0]=e("label",null,"Icon",-1)),e("button",{class:"icon_select_btn",onClick:$=>c("openIconPicker",g)},[e("i",{class:U(g.icon||"pi pi-stop")},null,2)],8,Sl)]),e("div",Pl,[l[1]||(l[1]=e("label",null,"Title",-1)),V(e("input",{type:"text","onUpdate:modelValue":$=>g.title=$,placeholder:"Route title"},null,8,Vl),[[T,g.title]])]),g?.hasChilds?I("",!0):(q(),b("div",Tl,[l[2]||(l[2]=e("label",null,"link",-1)),V(e("input",{type:"text","onUpdate:modelValue":$=>g.link=$,placeholder:"Route link"},null,8,Il),[[T,g.link]])])),g.hasChilds?I("",!0):(q(),b("div",zl,[l[4]||(l[4]=e("label",null,"Target",-1)),V(e("select",{"onUpdate:modelValue":$=>g.target=$},[...l[3]||(l[3]=[e("option",{value:"_self"},"Same Tab",-1),e("option",{value:"_blank"},"New Tab",-1)])],8,Dl),[[te,g.target]])])),e("div",Ul,[H(_,{modelValue:g.hasChilds,"onUpdate:modelValue":$=>g.hasChilds=$,onChange:$=>w(z)},null,8,["modelValue","onUpdate:modelValue","onChange"]),l[5]||(l[5]=e("span",null,"Has Childs",-1))]),h(o).items.length>1?(q(),b("button",{key:2,class:"pi pi-trash delete_btn circled",onClick:$=>y(z)},null,8,El)):I("",!0)],2),g.hasChilds?(q(),b("div",Ol,[e("div",Ml,[e("h5",null,[l[6]||(l[6]=oe(" Sub Menu for: ",-1)),e("span",null,A(g.title),1)]),e("button",{class:"add_sub_menu",onClick:$=>r(z)},[...l[7]||(l[7]=[e("i",{class:"pi pi-plus"},null,-1)])],8,Fl)]),(q(!0),b(E,null,O(g.children,($,le)=>(q(),b("div",{class:"submenu_item",key:`child-${z}-${le}`},[e("div",Al,[l[8]||(l[8]=e("label",{for:"icon"},"icon",-1)),e("button",{class:"icon_select_btn",onClick:L=>c("openIconPicker",$)},[e("i",{class:U($.icon||"pi pi-stop")},null,2)],8,jl)]),e("div",Ll,[l[9]||(l[9]=e("label",null,"Sub Menu Title",-1)),V(e("input",{type:"text","onUpdate:modelValue":L=>$.title=L,placeholder:"Sub Menu title"},null,8,Nl),[[T,$.title]])]),e("div",Hl,[l[10]||(l[10]=e("label",null,"Sub Menu link",-1)),V(e("input",{type:"text","onUpdate:modelValue":L=>$.link=L,placeholder:"Sub Menu link"},null,8,Rl),[[T,$.link]])]),$.hasChilds?I("",!0):(q(),b("div",Bl,[l[12]||(l[12]=e("label",null,"Sub Menu Target",-1)),V(e("select",{"onUpdate:modelValue":L=>$.target=L},[...l[11]||(l[11]=[e("option",{value:"_self"},"Same Tab",-1),e("option",{value:"_blank"},"New Tab",-1)])],8,Jl),[[te,$.target]])])),g.children.length>1?(q(),b("button",{key:1,class:"pi pi-trash delete_btn circled",onClick:L=>n(z,le)},null,8,Wl)):I("",!0)]))),128))])):I("",!0)]))),128)),j(p.$slots,"default",{},void 0,!0),e("div",{class:"flex_buttons"},[e("button",{class:"main-btn reversed",onClick:m}," Add Menu Item "),e("button",{class:"main-btn",onClick:u},"Submit")])])}}},Ql=F(Gl,[["__scopeId","data-v-aa32c572"]]),Kl={class:"social_links_fields"},Yl={class:"input icon_input"},Xl=["onClick"],Zl={class:"input icon_input"},et=["onUpdate:modelValue"],nt={class:"input grow_input"},lt=["onUpdate:modelValue"],tt=["onClick"],ot={__name:"SocialFields",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup","openIconPicker"],setup(t,{emit:s}){const{showErrorToast:d}=B(),c=s,o=P([{icon:"",link:"",color:"#000000"}]),v=t;M(()=>v.values,r=>{r&&(o.value=r?.items?.map(n=>({icon:n.icon??"",link:n.link??"",color:n.color??"#000000"})))},{immediate:!0});const m=()=>{o.value.push({icon:"",link:"",color:"#000000"})},y=r=>{o.value.length>1?o.value.splice(r,1):d("At least one social link is required")},w=()=>{if(o.value.some(i=>!i.link.trim())){d("Please enter a link for each item");return}const n=o.value.map(i=>{const u={link:i.link.trim(),color:i.color??"#000000"};return i.icon?.trim()&&(u.icon=i.icon.trim()),u});c("handleSubmitFields",{items:n}),c("handleCloseComponentPopup")};return(r,n)=>(q(),b("div",Kl,[n[4]||(n[4]=e("h4",{class:"centered"},"Social Links",-1)),(q(!0),b(E,null,O(h(o),(i,u)=>(q(),b("div",{class:"social_item",key:u},[e("div",Yl,[n[0]||(n[0]=e("label",null,"Icon",-1)),e("button",{type:"button",class:"icon_select_btn",onClick:p=>c("openIconPicker",i)},[e("i",{class:U(i.icon||"pi pi-share-alt"),style:we({color:i.color+" !important"})},null,6)],8,Xl)]),e("div",Zl,[n[1]||(n[1]=e("label",{for:"color"},"Color",-1)),V(e("input",{type:"color",name:"color","onUpdate:modelValue":p=>i.color=p,id:"color"},null,8,et),[[T,i.color]])]),e("div",nt,[n[2]||(n[2]=e("label",null,"Link",-1)),V(e("input",{type:"url","onUpdate:modelValue":p=>i.link=p,placeholder:"https://example.com"},null,8,lt),[[T,i.link]])]),h(o).length>1?(q(),b("button",{key:0,class:"delete_btn circled",onClick:p=>y(u)},[...n[3]||(n[3]=[e("i",{class:"pi pi-trash"},null,-1)])],8,tt)):I("",!0)]))),128)),j(r.$slots,"default",{},void 0,!0),e("div",{class:"flex_buttons"},[e("button",{class:"main-btn reversed",onClick:m}," Add Link "),e("button",{class:"main-btn",onClick:w}," Submit ")])]))}},it=F(ot,[["__scopeId","data-v-436727cd"]]),st={class:"tabs_fields"},rt={class:"item_index"},at={class:"tab_header"},dt={class:"input grow_input"},ct=["onUpdate:modelValue"],ut=["onClick"],pt={class:"input full_input"},qt=["onUpdate:modelValue"],mt={__name:"TabsFields",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup"],setup(t,{emit:s}){const{showErrorToast:d}=B(),c=s,o=P([{title:"",description:""}]),v=t;M(()=>v.values,r=>{r&&(o.value=r?.items?.map(n=>({title:n.title??"",description:n.description??""})))},{immediate:!0});const m=()=>{o.value.push({title:"",description:""})},y=r=>{o.value.length>1?o.value.splice(r,1):d("At least one tab is required")},w=()=>{if(o.value.some(n=>!n?.title?.trim()||!n?.description?.trim())){d("Please fill all tab titles and descriptions");return}c("handleSubmitFields",{items:o.value}),c("handleCloseComponentPopup")};return(r,n)=>(q(),b("div",st,[n[4]||(n[4]=e("h4",{class:"centered"},"Tabs Fields",-1)),(q(!0),b(E,null,O(h(o),(i,u)=>(q(),b("div",{class:"tab_item",key:u},[e("div",rt,[n[0]||(n[0]=oe(" Tab ",-1)),e("span",null,"# "+A(u+1),1)]),e("div",at,[e("div",dt,[n[1]||(n[1]=e("label",null,"Tab Title",-1)),V(e("input",{type:"text","onUpdate:modelValue":p=>i.title=p,placeholder:"Tab title"},null,8,ct),[[T,i.title]])]),h(o).length>1?(q(),b("button",{key:0,class:"delete_btn circled",onClick:p=>y(u)},[...n[2]||(n[2]=[e("i",{class:"pi pi-trash"},null,-1)])],8,ut)):I("",!0)]),e("div",pt,[n[3]||(n[3]=e("label",null,"Tab Description",-1)),V(e("textarea",{rows:"4","onUpdate:modelValue":p=>i.description=p,placeholder:"Tab description..."},null,8,qt),[[T,i.description]])])]))),128)),j(r.$slots,"default",{},void 0,!0),e("div",{class:"flex_buttons"},[e("button",{class:"main-btn reversed",onClick:m},"Add Tab"),e("button",{class:"main-btn",onClick:w},"Submit")])]))}},bt=F(mt,[["__scopeId","data-v-1dfa015f"]]),ft={class:"timeline_fields"},vt={class:"item_index"},ht={class:"inputs"},kt={class:"input icon_input"},gt=["onClick"],wt={class:"input"},_t={class:"input grow_input"},yt=["onUpdate:modelValue"],Ct=["onClick"],$t={class:"input full_input"},xt=["onUpdate:modelValue"],St={__name:"TimelineFields",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup","openIconPicker"],setup(t,{emit:s}){const{showErrorToast:d}=B(),c=s,o=P([{date:"",icon:"",title:"",description:"",classes:""}]),v=t;M(()=>v.values,r=>{r&&(o.value=r?.items?.map(n=>({date:n.date?new Date(n.date).toLocaleDateString():"",icon:n.icon??"",title:n.title??"",description:n.description??"",classes:n.classes??""})))},{immediate:!0});const m=()=>{o.value.push({date:"",icon:"",title:"",description:"",classes:""})},y=r=>{o.value.length>1?o.value.splice(r,1):d("At least one timeline item is required")},w=()=>{if(o.value.some(i=>!i.date||!i.title.trim()||!i.description.trim())){d("Please fill all timeline fields");return}const n=o.value.map(i=>{const u={date:i.date,title:i.title.trim(),description:i.description.trim(),classes:i.classes??""};return i.icon?.trim()&&(u.icon=i.icon.trim()),u});c("handleSubmitFields",{items:n}),c("handleCloseComponentPopup")};return(r,n)=>{const i=Ge;return q(),b("div",ft,[n[6]||(n[6]=e("h4",{class:"centered"},"Timeline",-1)),(q(!0),b(E,null,O(h(o),(u,p)=>(q(),b("div",{class:"timeline_item",key:p},[e("h6",vt,[n[0]||(n[0]=oe(" Item ",-1)),e("span",null,"#"+A(p+1),1)]),e("div",ht,[e("div",kt,[n[1]||(n[1]=e("label",null,"Icon",-1)),e("button",{class:"icon_select_btn",onClick:l=>c("openIconPicker",u)},[e("i",{class:U(u.icon||"pi pi-circle")},null,2)],8,gt)]),e("div",wt,[n[2]||(n[2]=e("label",null,"Date",-1)),H(i,{modelValue:u.date,"onUpdate:modelValue":l=>u.date=l},null,8,["modelValue","onUpdate:modelValue"])]),e("div",_t,[n[3]||(n[3]=e("label",null,"Title",-1)),V(e("input",{type:"text","onUpdate:modelValue":l=>u.title=l,placeholder:"Timeline title"},null,8,yt),[[T,u.title]])])]),h(o).length>1?(q(),b("button",{key:0,class:"delete_btn circled",onClick:l=>y(p)},[...n[4]||(n[4]=[e("i",{class:"pi pi-trash"},null,-1)])],8,Ct)):I("",!0),e("div",$t,[n[5]||(n[5]=e("label",null,"Description",-1)),V(e("textarea",{rows:"3","onUpdate:modelValue":l=>u.description=l,placeholder:"Timeline description..."},null,8,xt),[[T,u.description]])])]))),128)),j(r.$slots,"default",{},void 0,!0),e("div",{class:"flex_buttons"},[e("button",{class:"main-btn reversed",onClick:m},"Add Item"),e("button",{class:"main-btn",onClick:w},"Submit")])])}}},Pt=F(St,[["__scopeId","data-v-fecfdfde"]]),Vt={class:"popup"},Tt={__name:"ComponentPopup",props:{componentData:Object},emits:["handleAddComponentContent","handleCloseComponentPopup"],setup(t,{emit:s}){const d=t,c=P(""),o=s,v={"card-slider":ol,"nav-menu":Ql,"custom-html":fl,logo:Cl,buttons:Nn,accordion:Vn,timeline:Pt,"social-media":it,tabs:bt},m=P(!1),y=P(null),w=i=>{y.value=i,m.value=!0},r=i=>{y.value.icon=i};M(()=>d.componentData?.values,i=>{c.value=i?.customClasses??""},{immediate:!0});const n=i=>{o("handleAddComponentContent",{sectionID:d.componentData.sectionID,type:d.componentData.type,content:{...i,customClasses:c.value}})};return(i,u)=>{const p=mn,l=gn;return q(),b("div",Vt,[e("div",{class:U(["content ",{max_width:d.componentData.type.toLowerCase().replace(/\s+/g,"-")==="custom-html"}])},[e("button",{class:"pi pi-times close_btn",onClick:u[0]||(u[0]=_=>i.$emit("handleCloseComponentPopup"))}),(q(),ee(Ne(v[d.componentData.type.toLowerCase().replace(/\s+/g,"-")]),{values:t.componentData?.values,onHandleCloseComponentPopup:u[2]||(u[2]=_=>o("handleCloseComponentPopup")),onOpenIconPicker:w,onHandleSubmitFields:n},{default:Le(()=>[H(p,{modelValue:h(c),"onUpdate:modelValue":u[1]||(u[1]=_=>ae(c)?c.value=_:null),id:"custom_classes",label:"CSS Classes",placeholder:"e.g. rounded-lg shadow-md text-center"},null,8,["modelValue"])]),_:1},40,["values"])),H(l,{modelValue:h(m),"onUpdate:modelValue":u[3]||(u[3]=_=>ae(m)?m.value=_:null),onSelect:r},null,8,["modelValue"])],2)])}}},It={class:"project_page page"},zt={class:"side_bar"},Dt={class:"header_image"},Ut={class:"header_image"},Et={class:"image"},Ot=["src"],Mt={class:"project_content"},Ft={class:"pages"},At=["onClick"],jt={class:"project_sections"},Lt={class:"section_header"},Nt={class:"buttons"},Ht=["onClick"],Rt=["onClick"],Bt=["onClick"],Jt=["onDrop"],Wt=["onDragstart","onDrop"],Gt={class:"component_block"},Qt={class:"component_buttons"},Kt=["onClick"],Yt=["onClick"],Xt=["onMousedown"],Zt=["onDrop"],eo=["disabled"],no={__name:"index",setup(t){const s=He(),{getMethod:d,getResult:c,submitMethod:o,showErrorToast:v}=K(),m=Re({}),y=(f,a)=>{const C=m[f];C&&C.toggle(a)},w=f=>{const a=r.value.find(C=>C._id===f);return a?[{label:a.visible?"Hide":"Show",icon:a.visible?"pi pi-eye-slash":"pi pi-eye",command:()=>le(f)},{label:"Edit",icon:"pi pi-pencil",command:()=>L(f)}]:[]},r=P([]),n=P(),i=re(()=>r.value.find(f=>f._id===n.value)),u=P(null),p=P(!1),l=f=>{if(u.value){const a=i.value.sections.find(C=>C.id===u.value.id);a&&(a.name=f.name,a.visible=f.visible,a.layout_items=f.layout_items,a.components=f.components)}else i.value.sections.push({id:i.value.sections.length+1,...f});p.value=!1,u.value=null},_=f=>{u.value=f,p.value=!0},g=P(),z=P(!1),$=f=>{if(g.value){const a=r.value.find(C=>C._id===g.value._id);a&&(a.name=f.name)}else{const a={name:f.name,visible:!0,sections:[]};r.value.push(a),n.value=a._id}z.value=!1,g.value=null},le=f=>{const a=r?.value?.find(C=>C._id===f);a.visible=!a.visible},L=f=>{z.value=!0;const a=r?.value?.find(C=>C._id==f);g.value=a},R=P(null),Ce=({item:f,index:a,event:C})=>{R.value={component:f,fromSidebar:!0},C.dataTransfer.effectAllowed="copy",C.dataTransfer.setData("text/plain","dragging")},$e=f=>{R.value=null},xe=(f,a,C,D)=>{R.value={component:a,fromSection:f,index:C},D.dataTransfer.effectAllowed="move",D.dataTransfer.setData("text/plain","dragging")},ie=(f,a)=>{if(!R.value)return;const{component:C,fromSidebar:D,fromSection:W}=R.value,se=a.currentTarget.closest(".section_content"),X=Array.from(se.querySelectorAll(".section_component")).filter(k=>!k.classList.contains("empty_placeholder"));let G=X.length;for(let k=0;k<X.length;k++){const S=X[k].getBoundingClientRect();if(a.clientX<S.left+S.width/2){G=k;break}}if(D){const k={...C,id:Date.now(),width:30};f.components.splice(G,0,k)}else{const k=W.components,S=f.components,Q=k.findIndex(De=>De._id===C._id);if(Q===-1)return;const[N]=k.splice(Q,1);let fe=G;W.id===f.id&&G>Q&&(fe-=1),S.splice(fe,0,N)}R.value=null};let Y=null,ce=0,ue=0,pe=0;const Se=(f,a,C)=>{Y=a,ce=C.clientX;const D=C.target.closest(".section_component"),W=D.parentElement;ue=D.offsetWidth,pe=W.offsetWidth,window.addEventListener("mousemove",qe),window.addEventListener("mouseup",me)},qe=f=>{if(!Y)return;const a=f.clientX-ce;let C=(ue+a)/pe*100;C=Math.max(5,Math.min(100,C));let D=Y.content.customClasses||"";D=D.replace(/w-\[.*?\]/,"").trim(),Y.content.customClasses=`${D} w-[${Math.floor(C.toFixed(2))}%]`.trim()},me=()=>{Y=null,window.removeEventListener("mousemove",qe),window.removeEventListener("mouseup",me)},J=P({}),Pe=(f,a)=>{f.components.splice(a,1)},Ve=(f,a,C)=>{J.value.sectionID=f,J.value.type=a,J.value.values=C},Te=f=>{const a=i?.value.sections.find(D=>D.id==f.sectionID);if(!a)return v("Section not found");const C=a.components.find(D=>D.type===f.type);if(!C)return v("Component not found");C.content=f.content},be=P({});M(()=>c?.value,f=>{f&&(r.value=f.data.pages,n.value=f.data.pages[0]?._id,f.data.pages.forEach(a=>{be.value[a._id]=JSON.parse(JSON.stringify(a))}))},{immediate:!0});const Ie=re(()=>{if(!i.value)return!1;const f=i.value._id,a=be.value[f];return a?JSON.stringify(i.value)!==JSON.stringify(a):!1}),ze=()=>{if(!i?.value?.sections?.length)v("You have to add data for the page to be added...");else{const f=c?.value?i.value?._id:"",a=f?`/projects/${s.params.id}/pages/${f}`:`/projects/${s.params.id}/pages`,C=c?.value&&f?"PATCH":"POST";o(a,!1,i?.value,C,""),originalPage.value=JSON.parse(JSON.stringify(i.value))}};return M(()=>c?.value,f=>{f&&(r.value=f?.data?.pages,n.value=f?.data?.pages[0]?._id)}),de(()=>{d(`/projects/${s.params.id}`,null,!1,!1)}),(f,a)=>{const C=en,D=Ke,W=Qe,se=on,X=dn,G=Tt;return q(),b("div",It,[e("div",zt,[e("div",Dt,[e("button",{class:"back_btn",onClick:a[0]||(a[0]=k=>f.$router.back())},[...a[9]||(a[9]=[e("i",{class:"pi pi-angle-left"},null,-1)])]),a[10]||(a[10]=e("div",{class:"image"},[e("img",{src:Be,alt:"logo_image",loading:"lazy"})],-1))]),a[11]||(a[11]=e("hr",null,null,-1)),H(C,{onDragStart:Ce,onDragEnd:$e}),a[12]||(a[12]=e("hr",null,null,-1)),e("div",Ut,[e("div",Et,[e("img",{src:h(i)?.logo,alt:"logo_image",loading:"lazy"},null,8,Ot)])])]),e("div",Mt,[e("div",Ft,[(q(!0),b(E,null,O(h(r),k=>(q(),b("div",{key:k,class:U(["page_item",{active:h(n)===k?._id,hidden_element:!k.visible}]),onClick:S=>n.value=k?._id},[e("span",null,A(k?.name),1),k==h(i)?(q(),ee(D,{key:0,type:"button",icon:"pi pi-ellipsis-v",onClick:Z(S=>y(k._id,S),["stop"]),"aria-haspopup":"true","aria-controls":`menu_${k._id}`},null,8,["onClick","aria-controls"])):I("",!0),H(W,{ref_for:!0,ref:S=>h(m)[k._id]=S,id:`menu_${k._id}`,model:w(k._id),popup:!0},null,8,["id","model"])],10,At))),128)),e("button",{class:"add_page",onClick:a[1]||(a[1]=k=>z.value=!0),title:"Add Page"},[...a[13]||(a[13]=[e("i",{class:"pi pi-plus"},null,-1)])])])]),a[17]||(a[17]=e("hr",null,null,-1)),e("div",jt,[(q(!0),b(E,null,O(h(i)?.sections,k=>(q(),b("div",{key:k.id,class:U(["section ",{hidden_element:!k.visible}])},[e("div",Lt,[e("h3",null,A(k.name),1),e("div",Nt,[e("button",{onClick:S=>_(k),class:"section_control pi pi-pen-to-square"},null,8,Ht),e("button",{onClick:S=>h(i).sections.splice(h(i).sections.indexOf(k),1),class:"section_control pi pi-trash"},null,8,Rt),e("button",{onClick:S=>k.visible=!k.visible,class:U(["section_control pi",`pi-eye${k.visible?"":"-slash"}`])},null,10,Bt)])]),e("div",{class:"section_content flex flex-row w-full",onDragover:a[4]||(a[4]=Z(()=>{},["prevent"])),onDrop:S=>ie(k,S)},[(q(!0),b(E,null,O(k.components,(S,Q)=>(q(),b("div",{key:S.id,class:U(["section_component flex-shrink-0 relative",S.content.customClasses]),style:we({width:S.content.customClasses.match(/w-\[(.*?)\]/)?.[1]}),draggable:"true",onDragstart:N=>xe(k,S,Q,N),onDragover:a[2]||(a[2]=Z(()=>{},["prevent"])),onDrop:N=>ie(k,N)},[e("div",Gt,[e("i",{class:U("pi "+S.icon)},null,2),e("span",null,A(S.label),1)]),e("div",Qt,[e("small",null,A(S.content.customClasses),1),e("button",{class:"edit_component",onClick:N=>Ve(k.id,S.type,S.content),title:"Edit Component"},[...a[14]||(a[14]=[e("i",{class:"pi pi-pen-to-square"},null,-1)])],8,Kt),e("button",{class:"remove_component",onClick:N=>Pe(k,Q),title:"Remove Component"},[...a[15]||(a[15]=[e("i",{class:"pi pi-trash"},null,-1)])],8,Yt)]),e("div",{class:"resize_handle",onMousedown:Z(N=>Se(k,S,N),["prevent"])},null,40,Xt)],46,Wt))),128)),h(R)&&h(R).fromSection!==k?(q(),b("div",{key:0,class:"section_component empty_placeholder",onDragover:a[3]||(a[3]=Z(()=>{},["prevent"])),onDrop:S=>ie(k,S)}," Drop here ",40,Zt)):I("",!0)],40,Jt)],2))),128)),e("div",{class:"section add_section",title:"Add Section",onClick:a[5]||(a[5]=k=>p.value=!0)},[...a[16]||(a[16]=[e("i",{class:"pi pi-plus"},null,-1),e("span",null,"Add Section",-1)])])]),e("button",{class:"main-btn",disabled:!h(Ie),onClick:ze}," Save ",8,eo),h(p)?(q(),ee(se,{key:0,modifiedSection:h(u),onHandleShowControlSectionPopup:a[6]||(a[6]=k=>p.value=!1),onHandleSectionPopup:l},null,8,["modifiedSection"])):I("",!0),h(z)?(q(),ee(X,{key:1,modifiedPage:h(g),onHandleShowControlPagePopup:a[7]||(a[7]=k=>z.value=!1),onHandleControlPage:$},null,8,["modifiedPage"])):I("",!0),h(J).type?(q(),ee(G,{key:2,componentData:h(J),onHandleCloseComponentPopup:a[8]||(a[8]=k=>J.value={}),onHandleAddComponentContent:Te},null,8,["componentData"])):I("",!0)])}}},wo=F(no,[["__scopeId","data-v-b431b766"]]);export{wo as default};
