const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DF_-T3jk.js","./3DmAq_DZ.js","./entry.BI7sNX3Z.css"])))=>i.map(i=>d[i]);
import{u as ne,a as X}from"./CwifVGYB.js";import{o as qe,c as h,e as u,j,r as F,a as e,n as D,t as d,u as q,f as A,l as V,m as O,p as E,v as z,q as $e,_ as H,s as M,x as je,y as Fe,z as ce,A as pe,B as N,C as ie,D as ae,b as R,E as ye,G as Ce,H as Oe,I as Le,T as Ae,J as P,K as He,L as Re,M as ue,i as ee,w as Ne,N as Be,O as Qe,P as Je,Q as Ke,R as We,k as re}from"./3DmAq_DZ.js";import{_ as Xe}from"./Dnch-hNn.js";import{_ as Ge}from"./C76BsLQu.js";import Se from"./CCqynZKQ.js";import Ye from"./BqMwnkkP.js";import{s as Ze}from"./BRkiUcBo.js";import en from"./BN5b0KEu.js";import nn from"./DHWwiXkh.js";import ln from"./CuKmkn9e.js";import"./CA57SYYn.js";import"./DMVw03Oy.js";import"./B9_BukZu.js";import"./BKLTczKr.js";import"./B51V5sov.js";import"./Bg3ttmZC.js";import"./ClNQ6WMp.js";import"./BRmeq9BP.js";import"./DMjD34hM.js";import"./Cqc-oosu.js";import"./BnhLqjt5.js";const tn={class:"components"},on=["onDragstart"],sn={class:"component_title"},rn={__name:"ComponentItems",emits:["dragStart","dragEnd"],setup(l,{emit:t}){const{getMethod:c,getResult:m}=ne(),b=t,a=(v,$,g)=>{b("dragStart",{item:v,index:$,event:g})},_=v=>{b("dragEnd",v)};return qe(()=>{c("components",null,!0,!1)}),(v,$)=>(u(),h("div",tn,[(u(!0),h(j,null,F(q(m)?.data??[],g=>(u(),h("div",{key:g.type,class:"component_item",draggable:"true",onDragstart:n=>a(g,v.index,n),onDragend:$[0]||($[0]=n=>_(n))},[e("i",{class:D(["component_icon pi",g.icon])},null,2),e("span",sn,d(g.label),1),$[1]||($[1]=e("i",{class:"pi pi-equals"},null,-1))],40,on))),128))]))}},an={class:"popup"},dn={class:"content"},cn={class:"input"},pn=["placeholder"],un={__name:"ControlSectionPopup",props:{modifiedSection:{type:Object,default:null}},emits:["handleSectionPopup","handleShowControlSectionPopup"],setup(l,{emit:t}){const{t:c}=A(),{showErrorToast:m}=ne(),b=t,a=l,_=V({name:"",visible:!0,layout_items:1,components:[],isDragOver:!1});O(()=>a.modifiedSection,g=>{g&&(_.value={name:g.name??"",visible:g.visible??!0,layout_items:g.layout_items??1,components:g.components??[],isDragOver:!1})},{immediate:!0});const v=()=>{if(!_.value.name.trim()){m(c("sectionPopup.emptyError"));return}b("handleSectionPopup",_.value),$()},$=()=>{_.value={name:"",visible:!0,layout_items:1,components:[],isDragOver:!1},b("handleShowControlSectionPopup")};return(g,n)=>(u(),h("div",an,[e("div",dn,[e("button",{class:"pi pi-times close_btn",onClick:$}),e("h4",null,d(g.$t("sectionPopup.title")),1),e("div",cn,[E(e("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=i=>q(_).name=i),placeholder:g.$t("sectionPopup.placeholder"),onKeydown:$e(v,["enter"])},null,40,pn),[[z,q(_).name,void 0,{trim:!0}]])]),e("button",{class:"main-btn",onClick:v},d(g.$t("sectionPopup.submit")),1)])]))}},qn={class:"popup"},mn={class:"content"},bn={class:"input"},hn=["placeholder"],fn={__name:"ControlPagePopup",props:{modifiedPage:{type:Object,default:null}},emits:["handleControlPage","handleShowControlPagePopup"],setup(l,{emit:t}){const{t:c}=A(),{showErrorToast:m}=ne(),b=t,a=l,_=V({name:""});O(()=>a.modifiedPage,g=>{_.value.name=g?.name??""},{immediate:!0});const v=()=>{if(!_.value.name.trim()){m(c("pagePopup.emptyError"));return}b("handleControlPage",{..._.value}),$()},$=()=>{_.value.name="",b("handleShowControlPagePopup")};return(g,n)=>(u(),h("div",qn,[e("div",mn,[e("button",{class:"pi pi-times close_btn",onClick:$}),e("h4",null,d(g.$t("pagePopup.title")),1),e("div",bn,[E(e("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=i=>q(_).name=i),placeholder:g.$t("pagePopup.placeholder"),onKeydown:$e(v,["enter"])},null,40,hn),[[z,q(_).name,void 0,{trim:!0}]])]),e("button",{class:"main-btn",onClick:v},d(g.$t("pagePopup.submit")),1)])]))}},vn={class:"input"},kn=["for"],gn=["id","value"],_n={__name:"ClassesInput",props:{label:String,id:String,modelValue:String,placeholder:String,className:String},emits:["update:modelValue"],setup(l,{emit:t}){const c=t;return(m,b)=>(u(),h("div",vn,[l.label?(u(),h("label",{key:0,for:l.id},d(l.label),9,kn)):M("",!0),e("input",{id:l.id,value:l.modelValue,onInput:b[0]||(b[0]=a=>c("update:modelValue",a.target.value)),placeholder:"e.g. rounded-lg shadow-md text-center",class:D(["classes-input",l.className])},null,42,gn)]))}},wn=H(_n,[["__scopeId","data-v-f9354fb2"]]),$n={key:0,class:"popup"},yn={class:"content"},Cn={for:"icon_input"},Sn=["placeholder"],Pn={class:"icons_grid"},Vn=["onClick"],En={__name:"IconPicker",props:{modelValue:{type:Boolean},modelModifiers:{}},emits:je(["select","close"],["update:modelValue"]),setup(l,{emit:t}){const c=t,m=Fe(l,"modelValue"),b=V(""),a=V([]);qe(()=>{const g=Array.from(document.styleSheets),n=new Set;g.forEach(i=>{try{const s=i.cssRules||[];Array.from(s).forEach(f=>{if(!f.selectorText)return;const o=f.selectorText.match(/\.pi-([a-z0-9-]+)::?before/i);o&&o[1]&&n.add(`pi pi-${o[1]}`)})}catch{}}),a.value=Array.from(n).sort()});const _=ce(()=>b.value?a.value.filter(g=>g.toLowerCase().includes(b.value.toLowerCase())):a.value),v=g=>{c("select",g),b.value="",m.value=!1},$=()=>{m.value=!1,c("close")};return(g,n)=>m.value?(u(),h("div",$n,[e("div",yn,[e("button",{class:"pi pi-times close_btn",onClick:$}),e("label",Cn,d(g.$t("iconPicker.label")),1),E(e("input",{id:"icon_input",class:"icon_search",type:"text","onUpdate:modelValue":n[0]||(n[0]=i=>pe(b)?b.value=i:null),placeholder:g.$t("iconPicker.placeholder")},null,8,Sn),[[z,q(b)]]),e("div",Pn,[(u(!0),h(j,null,F(q(_),i=>(u(),h("button",{key:i,class:"icon_item",onClick:s=>v(i)},[e("i",{class:D(i)},null,2)],8,Vn))),128))])])])):M("",!0)}},xn=H(En,[["__scopeId","data-v-d4b8ddcd"]]),Tn={class:"accordion_fields"},zn={class:"centered"},Mn={class:"item_index"},In={class:"input grow_input"},Un=["onUpdate:modelValue","placeholder"],Dn=["onClick"],jn={class:"input full_input"},Fn=["onUpdate:modelValue","placeholder"],On={class:"flex_buttons"},Ln={__name:"AccordionFields",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup"],setup(l,{emit:t}){const{t:c}=A(),{showErrorToast:m}=X(),b=t,a=V([{title:"",content:""}]),_=l;O(()=>_.values,n=>{n&&(a.value=n?.items?.map(i=>({title:i.title??"",content:i.content??""})))},{immediate:!0});const v=()=>{a.value.push({title:"",content:""})},$=n=>{a.value.length>1?a.value.splice(n,1):m(c("accordion.errors.atLeastOne"))},g=()=>{if(a.value.some(i=>!i.title.trim()||!i.content.trim())){m(c("accordion.errors.fillAll"));return}b("handleSubmitFields",{items:a.value}),b("handleCloseComponentPopup")};return(n,i)=>(u(),h("div",Tn,[e("h4",zn,d(n.$t("accordion.title")),1),(u(!0),h(j,null,F(q(a),(s,f)=>(u(),h("div",{class:"accordion_item",key:f},[e("h6",Mn,[ie(d(n.$t("accordion.item"))+" ",1),e("span",null,"#"+d(f+1),1)]),e("div",In,[e("label",null,d(n.$t("accordion.fields.titleLabel")),1),E(e("input",{type:"text","onUpdate:modelValue":o=>s.title=o,placeholder:n.$t("accordion.fields.titlePlaceholder")},null,8,Un),[[z,s.title]])]),q(a).length>1?(u(),h("button",{key:0,class:"delete_btn circled",onClick:o=>$(f)},[...i[0]||(i[0]=[e("i",{class:"pi pi-trash"},null,-1)])],8,Dn)):M("",!0),e("div",jn,[e("label",null,d(n.$t("accordion.fields.contentLabel")),1),E(e("textarea",{rows:"4","onUpdate:modelValue":o=>s.content=o,placeholder:n.$t("accordion.fields.contentPlaceholder")},null,8,Fn),[[z,s.content]])])]))),128)),N(n.$slots,"default",{},void 0,!0),e("div",On,[e("button",{class:"main-btn reversed",onClick:v},d(n.$t("accordion.actions.addItem")),1),e("button",{class:"main-btn",onClick:g},d(n.$t("accordion.actions.submit")),1)])]))}},An=H(Ln,[["__scopeId","data-v-fb5a0c72"]]),Hn={class:"buttons_fields"},Rn={class:"centered"},Nn={class:"input icon_input"},Bn=["onClick"],Qn={class:"input grow_input"},Jn=["onUpdate:modelValue","placeholder"],Kn={class:"input"},Wn=["onUpdate:modelValue","placeholder"],Xn={class:"input"},Gn=["onUpdate:modelValue"],Yn={value:"_self"},Zn={value:"_blank"},el={class:"input toggle_input"},nl=["onClick"],ll={class:"flex_buttons"},tl={__name:"ButtonsFields",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup","openIconPicker"],setup(l,{emit:t}){const{t:c}=A(),{showErrorToast:m}=X(),b=t,a=V([{icon:"",title:"",link:"",target:"_self",reversed:!1}]),_=()=>{a.value.push({icon:"",title:"",link:"",target:"_self",reversed:!1})},v=n=>{a.value.length>1?a.value.splice(n,1):m(c("buttons.errors.minButton"))},$=l;O(()=>$.values,n=>{n&&(a.value=n?.items?.map(i=>({icon:i.icon??"",title:i.title??"",link:i.link??"",target:i.target??"_self",reversed:i.reversed??!1})))},{immediate:!0});const g=()=>{const n=a.value.filter(i=>i.title?.trim()&&i.link?.trim()).map(i=>{const s={title:i.title.trim(),link:i.link.trim(),target:i.target,reversed:i.reversed};return i.icon?.trim()&&(s.icon=i.icon.trim()),s});if(!n.length){m(c("buttons.errors.fillButton"));return}b("handleSubmitFields",{items:n}),b("handleCloseComponentPopup")};return(n,i)=>{const s=Se;return u(),h("div",Hn,[e("h4",Rn,d(n.$t("buttons.title")),1),(u(!0),h(j,null,F(q(a),(f,o)=>(u(),h("div",{class:"button_item",key:o},[e("div",Nn,[e("label",null,d(n.$t("buttons.fields.icon")),1),e("button",{class:"icon_select_btn",onClick:r=>b("openIconPicker",f)},[e("i",{class:D(f.icon||"pi pi-stop")},null,2)],8,Bn)]),e("div",Qn,[e("label",null,d(n.$t("buttons.fields.title")),1),E(e("input",{type:"text","onUpdate:modelValue":r=>f.title=r,placeholder:n.$t("buttons.placeholders.title")},null,8,Jn),[[z,f.title]])]),e("div",Kn,[e("label",null,d(n.$t("buttons.fields.link")),1),E(e("input",{type:"text","onUpdate:modelValue":r=>f.link=r,placeholder:n.$t("buttons.placeholders.link")},null,8,Wn),[[z,f.link]])]),e("div",Xn,[e("label",null,d(n.$t("buttons.fields.target")),1),E(e("select",{"onUpdate:modelValue":r=>f.target=r},[e("option",Yn,d(n.$t("buttons.targets.self")),1),e("option",Zn,d(n.$t("buttons.targets.blank")),1)],8,Gn),[[ae,f.target]])]),e("div",el,[R(s,{modelValue:f.reversed,"onUpdate:modelValue":r=>f.reversed=r},null,8,["modelValue","onUpdate:modelValue"]),e("span",null,d(n.$t("buttons.fields.reversed")),1)]),q(a).length>1?(u(),h("button",{key:0,class:"delete_btn circled",onClick:r=>v(o)},[...i[0]||(i[0]=[e("i",{class:"pi pi-trash"},null,-1)])],8,nl)):M("",!0)]))),128)),N(n.$slots,"default",{},void 0,!0),e("div",ll,[e("button",{class:"main-btn reversed",onClick:_},d(n.$t("buttons.actions.addButton")),1),e("button",{class:"main-btn",onClick:g},d(n.$t("buttons.actions.submit")),1)])])}}},ol=H(tl,[["__scopeId","data-v-4072c5bd"]]),il={class:"card_fields"},sl={class:"centered"},rl={class:"input"},al={for:"cardItems"},dl={class:"input-wrap"},cl=["value"],pl={class:"input"},ul={class:"flex_header"},ql={class:"items_editor"},ml=["onClick"],bl={class:"image_wrapper"},hl=["id","onChange"],fl=["for"],vl=["src"],kl=["onUpdate:modelValue","placeholder"],gl=["onUpdate:modelValue","placeholder"],_l=["onUpdate:modelValue","placeholder"],wl={__name:"CardSliderFields",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup"],setup(l,{emit:t}){const{t:c}=A(),{submitMethod:m,submitResult:b,showErrorToast:a}=ne(),_=t,v=V({itemsToShow:1,autoplay:!1,items:[{file:null,title:"",text:"",link:""}]}),$=()=>v.value.items.push({file:null,title:"",text:"",link:""}),g=o=>v.value.items.splice(o,1),n=V(),i=(o,r)=>{const x=o.target.files[0];if(!x)return a(c("cardSlider.errors.noFile"));n.value=v.value.items[r];const w=new FormData;w.append("file",x),m("/uploads/single",!0,w,"POST",null)};ye(()=>{b?.value&&(n.value.file=b.value.data.path)});const s=l;O(()=>s.values,o=>{o&&(v.value={itemsToShow:o.itemsToShow??1,autoplay:o.autoplay??!1,items:o.items?.map(r=>({file:r.file,title:r.title??"",text:r.text??"",link:r.link??""}))})},{immediate:!0});const f=()=>{if(!v.value.items.length)return a(c("cardSlider.errors.minCard"));const o=v.value.items.findIndex(r=>!r.file||!r.title?.trim()||!r.text?.trim()||!r.link?.trim());if(o!==-1)return a(c("cardSlider.errors.fillCard",{index:o+1}));_("handleSubmitFields",{itemsToShow:v.value.itemsToShow,autoplay:v.value.autoplay,items:v.value.items.map(r=>({file:r.file,title:r.title.trim(),text:r.text.trim(),link:r.link.trim()}))}),_("handleCloseComponentPopup")};return(o,r)=>{const x=Ye;return u(),h("div",il,[e("h4",sl,d(o.$t("cardSlider.title")),1),e("div",rl,[e("label",al,d(o.$t("cardSlider.itemsToShow")),1),e("div",dl,[E(e("select",{"onUpdate:modelValue":r[0]||(r[0]=w=>q(v).itemsToShow=w)},[(u(),h(j,null,F(5,w=>e("option",{key:w,value:w},d(w),9,cl)),64))],512),[[ae,q(v).itemsToShow]])])]),e("div",pl,[e("label",null,d(o.$t("cardSlider.autoplay")),1),R(x,{modelValue:q(v).autoplay,"onUpdate:modelValue":r[1]||(r[1]=w=>q(v).autoplay=w),class:"w-24",onLabel:o.$t("common.on"),offLabel:o.$t("common.off")},null,8,["modelValue","onLabel","offLabel"])]),e("div",ul,[e("h4",null,d(o.$t("cardSlider.cardItems")),1),e("button",{class:"main-btn mb-4",onClick:$},[...r[2]||(r[2]=[e("i",{class:"pi pi-plus"},null,-1)])])]),e("div",ql,[(u(!0),h(j,null,F(q(v).items,(w,U)=>(u(),h("div",{class:"item_card",key:U},[q(v).items.length>1?(u(),h("button",{key:0,class:"pi pi-trash delete_btn",onClick:S=>g(U)},null,8,ml)):M("",!0),e("div",bl,[e("input",{type:"file",id:`card_image_${U}`,hidden:"",accept:"image/*",onChange:S=>i(S,U)},null,40,hl),e("label",{for:`card_image_${U}`,class:"upload_placeholder"},[w.file?(u(),h("img",{key:1,src:("useRuntimeConfig"in o?o.useRuntimeConfig:q(Ce))().public.apiBase+w.file,loading:"lazy"},null,8,vl)):(u(),h(j,{key:0},[r[3]||(r[3]=e("i",{class:"pi pi-upload"},null,-1)),e("span",null,d(o.$t("cardSlider.uploadImage")),1)],64))],8,fl)]),E(e("input",{type:"text","onUpdate:modelValue":S=>w.title=S,placeholder:o.$t("cardSlider.placeholders.title"),class:"card_input"},null,8,kl),[[z,w.title]]),E(e("textarea",{"onUpdate:modelValue":S=>w.text=S,placeholder:o.$t("cardSlider.placeholders.text"),class:"card_input"},null,8,gl),[[z,w.text]]),E(e("input",{type:"text","onUpdate:modelValue":S=>w.link=S,placeholder:o.$t("cardSlider.placeholders.link"),class:"card_input"},null,8,_l),[[z,w.link]])]))),128))]),N(o.$slots,"default",{},void 0,!0),e("button",{class:"main-btn mt-4",onClick:f},d(o.$t("cardSlider.actions.submit")),1)])}}},$l=H(wl,[["__scopeId","data-v-2cb99524"]]);var yl=`
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
`,Cl={root:function(t){var c=t.instance;return["p-editor",{"p-invalid":c.$invalid}]},toolbar:"p-editor-toolbar",content:"p-editor-content"},Sl=Oe.extend({name:"editor",style:yl,classes:Cl}),Pl={name:"BaseEditor",extends:Ze,props:{placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:Sl,provide:function(){return{$pcEditor:this,$parentInstance:this}}};function oe(l){"@babel/helpers - typeof";return oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},oe(l)}function _e(l,t){var c=Object.keys(l);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(l);t&&(m=m.filter(function(b){return Object.getOwnPropertyDescriptor(l,b).enumerable})),c.push.apply(c,m)}return c}function Vl(l){for(var t=1;t<arguments.length;t++){var c=arguments[t]!=null?arguments[t]:{};t%2?_e(Object(c),!0).forEach(function(m){El(l,m,c[m])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(c)):_e(Object(c)).forEach(function(m){Object.defineProperty(l,m,Object.getOwnPropertyDescriptor(c,m))})}return l}function El(l,t,c){return(t=xl(t))in l?Object.defineProperty(l,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):l[t]=c,l}function xl(l){var t=Tl(l,"string");return oe(t)=="symbol"?t:t+""}function Tl(l,t){if(oe(l)!="object"||!l)return l;var c=l[Symbol.toPrimitive];if(c!==void 0){var m=c.call(l,t);if(oe(m)!="object")return m;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(l)}var we=(function(){try{return window.Quill}catch{return null}})(),Pe={name:"Editor",extends:Pl,inheritAttrs:!1,emits:["text-change","selection-change","load"],quill:null,watch:{modelValue:function(t,c){t!==c&&this.quill&&!this.quill.hasFocus()&&this.renderValue(t)},d_value:function(t,c){t!==c&&this.quill&&!this.quill.hasFocus()&&this.renderValue(t)},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var t=this,c={modules:Vl({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:"snow",formats:this.formats,placeholder:this.placeholder};we?(this.quill=new we(this.$refs.editorElement,c),this.initQuill(),this.handleLoad()):Le(()=>import("./DF_-T3jk.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(function(m){m&&Ae(t.$refs.editorElement)&&(m.default?t.quill=new m.default(t.$refs.editorElement,c):t.quill=new m(t.$refs.editorElement,c),t.initQuill())}).then(function(){t.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(t){if(this.quill)if(t){var c=this.quill.clipboard.convert({html:t});this.quill.setContents(c)}else this.quill.setText("")},initQuill:function(){var t=this;this.renderValue(this.d_value),this.quill.on("text-change",function(c,m,b){if(b==="user"){var a=t.quill.getSemanticHTML(),_=t.quill.getText().trim();a==="<p><br></p>"&&(a=""),t.writeValue(a),t.$emit("text-change",{htmlValue:a,textValue:_,delta:c,source:b,instance:t.quill})}}),this.quill.on("selection-change",function(c,m,b){var a=t.quill.getSemanticHTML(),_=t.quill.getText().trim();t.$emit("selection-change",{htmlValue:a,textValue:_,range:c,oldRange:m,source:b,instance:t.quill})})},handleLoad:function(){this.quill&&this.quill.getModule("toolbar")&&this.$emit("load",{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function zl(l,t,c,m,b,a){return u(),h("div",P({class:l.cx("root")},l.ptmi("root")),[e("div",P({ref:"toolbarElement",class:l.cx("toolbar")},l.ptm("toolbar")),[N(l.$slots,"toolbar",{},function(){return[e("span",P({class:"ql-formats"},l.ptm("formats")),[e("select",P({class:"ql-header",defaultValue:"0"},l.ptm("header")),[e("option",P({value:"1"},l.ptm("option")),"Heading",16),e("option",P({value:"2"},l.ptm("option")),"Subheading",16),e("option",P({value:"0"},l.ptm("option")),"Normal",16)],16),e("select",P({class:"ql-font"},l.ptm("font")),[e("option",He(Re(l.ptm("option"))),null,16),e("option",P({value:"serif"},l.ptm("option")),null,16),e("option",P({value:"monospace"},l.ptm("option")),null,16)],16)],16),e("span",P({class:"ql-formats"},l.ptm("formats")),[e("button",P({class:"ql-bold",type:"button"},l.ptm("bold")),null,16),e("button",P({class:"ql-italic",type:"button"},l.ptm("italic")),null,16),e("button",P({class:"ql-underline",type:"button"},l.ptm("underline")),null,16)],16),e("span",P({class:"ql-formats"},l.ptm("formats")),[e("select",P({class:"ql-color"},l.ptm("color")),null,16),e("select",P({class:"ql-background"},l.ptm("background")),null,16)],16),e("span",P({class:"ql-formats"},l.ptm("formats")),[e("button",P({class:"ql-list",value:"ordered",type:"button"},l.ptm("list")),null,16),e("button",P({class:"ql-list",value:"bullet",type:"button"},l.ptm("list")),null,16),e("select",P({class:"ql-align"},l.ptm("select")),[e("option",P({defaultValue:""},l.ptm("option")),null,16),e("option",P({value:"center"},l.ptm("option")),null,16),e("option",P({value:"right"},l.ptm("option")),null,16),e("option",P({value:"justify"},l.ptm("option")),null,16)],16)],16),e("span",P({class:"ql-formats"},l.ptm("formats")),[e("button",P({class:"ql-link",type:"button"},l.ptm("link")),null,16),e("button",P({class:"ql-image",type:"button"},l.ptm("image")),null,16),e("button",P({class:"ql-code-block",type:"button"},l.ptm("codeBlock")),null,16)],16),e("span",P({class:"ql-formats"},l.ptm("formats")),[e("button",P({class:"ql-clean",type:"button"},l.ptm("clean")),null,16)],16)]})],16),e("div",P({ref:"editorElement",class:l.cx("content"),style:l.editorStyle},l.ptm("content")),null,16)],16)}Pe.render=zl;const Ml={class:"custom_html_fields"},Il={class:"centered"},Ul={__name:"CustomHtml",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup"],setup(l,{emit:t}){const{t:c}=A(),{showErrorToast:m}=X(),b=t,a=V({html:""}),_=l;O(()=>_.values,$=>{$&&(a.value.html=$.html)},{immediate:!0});const v=()=>{if(!a.value.html.trim()){m(c("customHtml.emptyError"));return}b("handleSubmitFields",a.value),b("handleCloseComponentPopup")};return($,g)=>{const n=Pe;return u(),h("div",Ml,[e("h4",Il,d($.$t("customHtml.title")),1),R(n,{modelValue:q(a).html,"onUpdate:modelValue":g[0]||(g[0]=i=>q(a).html=i),placeholder:$.$t("customHtml.placeholder")},null,8,["modelValue","placeholder"]),N($.$slots,"default",{},void 0,!0),e("button",{class:"main-btn",onClick:v},d($.$t("customHtml.submit")),1)])}}},Dl=H(Ul,[["__scopeId","data-v-02892d3b"]]),jl={class:"logo_fields"},Fl={class:"centered"},Ol={class:"input upload_logo"},Ll={for:"logo_input",class:"upload_logo_btn"},Al={key:0,class:"preview"},Hl=["src","alt"],Rl={class:"input"},Nl={for:"logo_width"},Bl=["placeholder"],Ql={class:"input"},Jl={for:"logo_height"},Kl=["placeholder"],Wl={__name:"LogoField",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup"],setup(l,{emit:t}){const{t:c}=A(),m=t,{submitMethod:b,submitResult:a,showErrorToast:_}=ne(),v=V({image:null,width:"",height:""}),$=l;O(()=>$.values,s=>{s&&(v.value={image:s.image??null,width:s.width??"",height:s.height??""})},{immediate:!0});const g=s=>{const f=s.target.files?.[0];if(!f){_(c("logo.noFile"));return}if(!["image/jpeg","image/png","image/webp","image/gif","image/svg+xml"].includes(f.type)){_(c("logo.invalidFile")),s.target.value="";return}const r=new FormData;r.append("file",f),b("/uploads/single",!0,r,"POST",null)};ye(()=>{a?.value&&(v.value.image=a?.value?.data?.path)});const n=()=>{v.value.image=null},i=()=>{if(!v.value.image){_(c("logo.imageRequired"));return}m("handleSubmitFields",v.value),m("handleCloseComponentPopup")};return(s,f)=>(u(),h("div",jl,[e("h4",Fl,d(s.$t("logo.title")),1),e("div",Ol,[e("input",{type:"file",accept:"image/*",id:"logo_input",hidden:"",onChange:g},null,32),e("label",Ll,[f[2]||(f[2]=e("i",{class:"pi pi-upload"},null,-1)),e("span",null,d(s.$t("logo.upload")),1)])]),q(v).image?(u(),h("div",Al,[e("img",{src:("useRuntimeConfig"in s?s.useRuntimeConfig:q(Ce))().public.apiBase+q(v).image,alt:s.$t("logo.previewAlt"),loading:"lazy",preview:""},null,8,Hl),e("button",{class:"pi pi-trash delete_btn",onClick:n})])):M("",!0),e("div",Rl,[e("label",Nl,d(s.$t("logo.widthLabel")),1),E(e("input",{id:"logo_width",type:"number","onUpdate:modelValue":f[0]||(f[0]=o=>q(v).width=o),class:"input-wrap",placeholder:s.$t("logo.widthPlaceholder")},null,8,Bl),[[z,q(v).width]])]),e("div",Ql,[e("label",Jl,d(s.$t("logo.heightLabel")),1),E(e("input",{id:"logo_height",type:"number","onUpdate:modelValue":f[1]||(f[1]=o=>q(v).height=o),class:"input-wrap",placeholder:s.$t("logo.heightPlaceholder")},null,8,Kl),[[z,q(v).height]])]),N(s.$slots,"default",{},void 0,!0),e("button",{class:"main-btn",onClick:i},d(s.$t("logo.submit")),1)]))}},Xl=H(Wl,[["__scopeId","data-v-660899d6"]]),Gl={class:"nav_menu_fields"},Yl={class:"centered"},Zl={class:"input icon_input"},et=["onClick"],nt={class:"input"},lt=["onUpdate:modelValue","placeholder"],tt={key:0,class:"input"},ot=["onUpdate:modelValue","placeholder"],it={key:1,class:"input"},st=["onUpdate:modelValue"],rt={value:"_self"},at={value:"_blank"},dt={class:"input toggle_input"},ct=["onClick"],pt={key:0,class:"submenu_block"},ut={class:"submenu_block_header"},qt=["onClick"],mt={class:"icon_input input"},bt=["onClick"],ht={class:"input"},ft=["onUpdate:modelValue","placeholder"],vt={class:"input"},kt=["onUpdate:modelValue","placeholder"],gt={key:0,class:"input"},_t=["onUpdate:modelValue"],wt={value:"_self"},$t={value:"_blank"},yt=["onClick"],Ct={class:"flex_buttons"},St={__name:"MenuFields",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup","openIconPicker"],setup(l,{emit:t}){const{t:c}=A(),{showErrorToast:m}=X(),b=t,a=V({items:[{icon:"",title:"",link:"",target:"_self",hasChilds:!1,children:[{icon:"",title:"",link:"",target:"_self"}]}]}),_=l;O(()=>_.values,o=>{a.value.items=o.items.map(r=>({icon:r.icon??"",title:r.title??"",link:r.link??"",target:r.target??"_self",hasChilds:r.hasChilds??!1,children:r.hasChilds?(r.children??[]).map(x=>({icon:x.icon??"",title:x.title??"",link:x.link??"",target:x.target??"_self"})):[]}))},{immediate:!0});const v=()=>{a.value.items.push({title:"",link:"",target:"_self",hasChilds:!1,children:[]})},$=o=>{a.value.items.length!==1?a.value.items.splice(o,1):m(c("navMenu.menuMinError"))},g=o=>{const r=a.value.items[o];r.hasChilds?(r.children||(r.children=[]),r.link=""):r.children=[{title:"",link:"",target:"_self"}]},n=o=>{a.value.items[o].children.push({title:"",link:"",target:"_self"})},i=(o,r)=>{a.value.items[o].children.splice(r,1)},s=(o=[])=>o.map(r=>{const x={title:r.title};r.icon?.trim()&&(x.icon=r.icon);const w=r.hasChilds&&Array.isArray(r.children)&&r.children.length>0;return r.hasChilds!==void 0&&(x.hasChilds=r.hasChilds),w?(x.children=s(r.children),x):(r.link&&(x.link=r.link,r.target&&(x.target=r.target)),x)}),f=()=>{if(a.value.items.some(r=>{if(!r.title||!r.hasChilds&&!r.link||r.hasChilds&&r.children.some(x=>!x.title||!x.link))return!0})){m(c("navMenu.fillAllError"));return}b("handleSubmitFields",s(a.value.items)),b("handleCloseComponentPopup")};return(o,r)=>{const x=Se;return u(),h("div",Gl,[e("h4",Yl,d(o.$t("navMenu.title")),1),(u(!0),h(j,null,F(q(a).items,(w,U)=>(u(),h("div",{class:"menu_group",key:U},[e("div",{class:D(["menu_item ",{has_childs:w?.hasChilds}])},[e("div",Zl,[e("label",null,d(o.$t("navMenu.icon")),1),e("button",{class:"icon_select_btn",onClick:S=>b("openIconPicker",w)},[e("i",{class:D(w.icon||"pi pi-stop")},null,2)],8,et)]),e("div",nt,[e("label",null,d(o.$t("navMenu.titleLabel")),1),E(e("input",{type:"text","onUpdate:modelValue":S=>w.title=S,placeholder:o.$t("navMenu.titlePlaceholder")},null,8,lt),[[z,w.title]])]),w?.hasChilds?M("",!0):(u(),h("div",tt,[e("label",null,d(o.$t("navMenu.linkLabel")),1),E(e("input",{type:"text","onUpdate:modelValue":S=>w.link=S,placeholder:o.$t("navMenu.linkPlaceholder")},null,8,ot),[[z,w.link]])])),w.hasChilds?M("",!0):(u(),h("div",it,[e("label",null,d(o.$t("navMenu.targetLabel")),1),E(e("select",{"onUpdate:modelValue":S=>w.target=S},[e("option",rt,d(o.$t("navMenu.sameTab")),1),e("option",at,d(o.$t("navMenu.newTab")),1)],8,st),[[ae,w.target]])])),e("div",dt,[R(x,{modelValue:w.hasChilds,"onUpdate:modelValue":S=>w.hasChilds=S,onChange:S=>g(U)},null,8,["modelValue","onUpdate:modelValue","onChange"]),e("span",null,d(o.$t("navMenu.hasChilds")),1)]),q(a).items.length>1?(u(),h("button",{key:2,class:"pi pi-trash delete_btn circled",onClick:S=>$(U)},null,8,ct)):M("",!0)],2),w.hasChilds?(u(),h("div",pt,[e("div",ut,[e("h5",null,[ie(d(o.$t("navMenu.subMenuFor"))+" ",1),e("span",null,d(w.title),1)]),e("button",{class:"add_sub_menu",onClick:S=>n(U)},[...r[0]||(r[0]=[e("i",{class:"pi pi-plus"},null,-1)])],8,qt)]),(u(!0),h(j,null,F(w.children,(S,se)=>(u(),h("div",{class:"submenu_item",key:`child-${U}-${se}`},[e("div",mt,[e("label",null,d(o.$t("navMenu.icon")),1),e("button",{class:"icon_select_btn",onClick:B=>b("openIconPicker",S)},[e("i",{class:D(S.icon||"pi pi-stop")},null,2)],8,bt)]),e("div",ht,[e("label",null,d(o.$t("navMenu.subTitleLabel")),1),E(e("input",{type:"text","onUpdate:modelValue":B=>S.title=B,placeholder:o.$t("navMenu.subTitlePlaceholder")},null,8,ft),[[z,S.title]])]),e("div",vt,[e("label",null,d(o.$t("navMenu.subLinkLabel")),1),E(e("input",{type:"text","onUpdate:modelValue":B=>S.link=B,placeholder:o.$t("navMenu.subLinkPlaceholder")},null,8,kt),[[z,S.link]])]),S.hasChilds?M("",!0):(u(),h("div",gt,[e("label",null,d(o.$t("navMenu.subTargetLabel")),1),E(e("select",{"onUpdate:modelValue":B=>S.target=B},[e("option",wt,d(o.$t("navMenu.sameTab")),1),e("option",$t,d(o.$t("navMenu.newTab")),1)],8,_t),[[ae,S.target]])])),w.children.length>1?(u(),h("button",{key:1,class:"pi pi-trash delete_btn circled",onClick:B=>i(U,se)},null,8,yt)):M("",!0)]))),128))])):M("",!0)]))),128)),N(o.$slots,"default",{},void 0,!0),e("div",Ct,[e("button",{class:"main-btn reversed",onClick:v},d(o.$t("navMenu.addMenuItem")),1),e("button",{class:"main-btn",onClick:f},d(o.$t("navMenu.submit")),1)])])}}},Pt=H(St,[["__scopeId","data-v-f6d9bc74"]]),Vt={class:"social_links_fields"},Et={class:"centered"},xt={class:"input icon_input"},Tt=["onClick"],zt={class:"input icon_input"},Mt=["onUpdate:modelValue"],It={class:"input grow_input"},Ut=["onUpdate:modelValue","placeholder"],Dt=["onClick"],jt={class:"flex_buttons"},Ft={__name:"SocialFields",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup","openIconPicker"],setup(l,{emit:t}){const{t:c}=A(),{showErrorToast:m}=X(),b=t,a=V([{icon:"",link:"",color:"#000000"}]),_=l;O(()=>_.values,n=>{n&&(a.value=n?.items?.map(i=>({icon:i.icon??"",link:i.link??"",color:i.color??"#000000"}))||[{icon:"",link:"",color:"#000000"}])},{immediate:!0});const v=()=>{a.value.push({icon:"",link:"",color:"#000000"})},$=n=>{a.value.length>1?a.value.splice(n,1):m(c("social.minError"))},g=()=>{if(a.value.some(s=>!s.link.trim())){m(c("social.fillAllError"));return}const i=a.value.map(s=>{const f={link:s.link.trim(),color:s.color??"#000000"};return s.icon?.trim()&&(f.icon=s.icon.trim()),f});b("handleSubmitFields",{items:i}),b("handleCloseComponentPopup")};return(n,i)=>(u(),h("div",Vt,[e("h4",Et,d(n.$t("social.title")),1),(u(!0),h(j,null,F(q(a),(s,f)=>(u(),h("div",{class:"social_item",key:f},[e("div",xt,[e("label",null,d(n.$t("social.icon")),1),e("button",{type:"button",class:"icon_select_btn",onClick:o=>b("openIconPicker",s)},[e("i",{class:D(s.icon||"pi pi-share-alt"),style:ue({color:s.color+" !important"})},null,6)],8,Tt)]),e("div",zt,[e("label",null,d(n.$t("social.color")),1),E(e("input",{type:"color",name:"color","onUpdate:modelValue":o=>s.color=o},null,8,Mt),[[z,s.color]])]),e("div",It,[e("label",null,d(n.$t("social.link")),1),E(e("input",{type:"url","onUpdate:modelValue":o=>s.link=o,placeholder:n.$t("social.linkPlaceholder")},null,8,Ut),[[z,s.link]])]),q(a).length>1?(u(),h("button",{key:0,class:"delete_btn circled",onClick:o=>$(f)},[...i[0]||(i[0]=[e("i",{class:"pi pi-trash"},null,-1)])],8,Dt)):M("",!0)]))),128)),N(n.$slots,"default",{},void 0,!0),e("div",jt,[e("button",{class:"main-btn reversed",onClick:v},d(n.$t("social.addLink")),1),e("button",{class:"main-btn",onClick:g},d(n.$t("social.submit")),1)])]))}},Ot=H(Ft,[["__scopeId","data-v-16f99a21"]]),Lt={class:"tabs_fields"},At={class:"centered"},Ht={class:"item_index"},Rt={class:"tab_header"},Nt={class:"input grow_input"},Bt=["onUpdate:modelValue","placeholder"],Qt=["onClick"],Jt={class:"input full_input"},Kt=["onUpdate:modelValue","placeholder"],Wt={class:"flex_buttons"},Xt={__name:"TabsFields",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup"],setup(l,{emit:t}){const{t:c}=A(),{showErrorToast:m}=X(),b=t,a=V([{title:"",description:""}]),_=l;O(()=>_.values,n=>{n&&(a.value=n?.items?.map(i=>({title:i.title??"",description:i.description??""}))||[{title:"",description:""}])},{immediate:!0});const v=()=>{a.value.push({title:"",description:""})},$=n=>{a.value.length>1?a.value.splice(n,1):m(c("tabs.minError"))},g=()=>{if(a.value.some(i=>!i?.title?.trim()||!i?.description?.trim())){m(c("tabs.fillAllError"));return}b("handleSubmitFields",{items:a.value}),b("handleCloseComponentPopup")};return(n,i)=>(u(),h("div",Lt,[e("h4",At,d(n.$t("tabs.title")),1),(u(!0),h(j,null,F(q(a),(s,f)=>(u(),h("div",{class:"tab_item",key:f},[e("div",Ht,[ie(d(n.$t("tabs.tab"))+" ",1),e("span",null,"# "+d(f+1),1)]),e("div",Rt,[e("div",Nt,[e("label",null,d(n.$t("tabs.tabTitle")),1),E(e("input",{type:"text","onUpdate:modelValue":o=>s.title=o,placeholder:n.$t("tabs.tabTitlePlaceholder")},null,8,Bt),[[z,s.title]])]),q(a).length>1?(u(),h("button",{key:0,class:"delete_btn circled",onClick:o=>$(f)},[...i[0]||(i[0]=[e("i",{class:"pi pi-trash"},null,-1)])],8,Qt)):M("",!0)]),e("div",Jt,[e("label",null,d(n.$t("tabs.tabDescription")),1),E(e("textarea",{rows:"4","onUpdate:modelValue":o=>s.description=o,placeholder:n.$t("tabs.tabDescriptionPlaceholder")},null,8,Kt),[[z,s.description]])])]))),128)),N(n.$slots,"default",{},void 0,!0),e("div",Wt,[e("button",{class:"main-btn reversed",onClick:v},d(n.$t("tabs.addTab")),1),e("button",{class:"main-btn",onClick:g},d(n.$t("tabs.submit")),1)])]))}},Gt=H(Xt,[["__scopeId","data-v-506fc86a"]]),Yt={class:"timeline_fields"},Zt={class:"centered"},eo={class:"item_index"},no={class:"inputs"},lo={class:"input icon_input"},to=["onClick"],oo={class:"input"},io={class:"input grow_input"},so=["onUpdate:modelValue","placeholder"],ro=["onClick"],ao={class:"input full_input"},co=["onUpdate:modelValue","placeholder"],po={class:"flex_buttons"},uo={__name:"TimelineFields",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup","openIconPicker"],setup(l,{emit:t}){const{t:c}=A(),{showErrorToast:m}=X(),b=t,a=V([{date:"",icon:"",title:"",description:"",classes:""}]),_=l;O(()=>_.values,n=>{n&&(a.value=n?.items?.map(i=>({date:i.date?new Date(i.date).toLocaleDateString():"",icon:i.icon??"",title:i.title??"",description:i.description??"",classes:i.classes??""}))||[{date:"",icon:"",title:"",description:"",classes:""}])},{immediate:!0});const v=()=>{a.value.push({date:"",icon:"",title:"",description:"",classes:""})},$=n=>{a.value.length>1?a.value.splice(n,1):m(c("timeline.minError"))},g=()=>{if(a.value.some(s=>!s.date||!s.title.trim()||!s.description.trim())){m(c("timeline.fillAllError"));return}const i=a.value.map(s=>{const f={date:s.date,title:s.title.trim(),description:s.description.trim(),classes:s.classes??""};return s.icon?.trim()&&(f.icon=s.icon.trim()),f});b("handleSubmitFields",{items:i}),b("handleCloseComponentPopup")};return(n,i)=>{const s=en;return u(),h("div",Yt,[e("h4",Zt,d(n.$t("timeline.title")),1),(u(!0),h(j,null,F(q(a),(f,o)=>(u(),h("div",{class:"timeline_item",key:o},[e("h6",eo,[ie(d(n.$t("timeline.item"))+" ",1),e("span",null,"#"+d(o+1),1)]),e("div",no,[e("div",lo,[e("label",null,d(n.$t("timeline.icon")),1),e("button",{class:"icon_select_btn",onClick:r=>b("openIconPicker",f)},[e("i",{class:D(f.icon||"pi pi-circle")},null,2)],8,to)]),e("div",oo,[e("label",null,d(n.$t("timeline.date")),1),R(s,{modelValue:f.date,"onUpdate:modelValue":r=>f.date=r},null,8,["modelValue","onUpdate:modelValue"])]),e("div",io,[e("label",null,d(n.$t("timeline.titleField")),1),E(e("input",{type:"text","onUpdate:modelValue":r=>f.title=r,placeholder:n.$t("timeline.titlePlaceholder")},null,8,so),[[z,f.title]])])]),q(a).length>1?(u(),h("button",{key:0,class:"delete_btn circled",onClick:r=>$(o)},[...i[0]||(i[0]=[e("i",{class:"pi pi-trash"},null,-1)])],8,ro)):M("",!0),e("div",ao,[e("label",null,d(n.$t("timeline.description")),1),E(e("textarea",{rows:"3","onUpdate:modelValue":r=>f.description=r,placeholder:n.$t("timeline.descriptionPlaceholder")},null,8,co),[[z,f.description]])])]))),128)),N(n.$slots,"default",{},void 0,!0),e("div",po,[e("button",{class:"main-btn reversed",onClick:v},d(n.$t("timeline.addItem")),1),e("button",{class:"main-btn",onClick:g},d(n.$t("timeline.submit")),1)])])}}},qo=H(uo,[["__scopeId","data-v-670f25f1"]]),mo={class:"popup"},bo={__name:"ComponentPopup",props:{componentData:Object},emits:["handleAddComponentContent","handleCloseComponentPopup"],setup(l,{emit:t}){const c=l,m=V(""),b=t,a={"card-slider":$l,"nav-menu":Pt,"custom-html":Dl,logo:Xl,buttons:ol,accordion:An,timeline:qo,"social-media":Ot,tabs:Gt},_=V(!1),v=V(null),$=i=>{v.value=i,_.value=!0},g=i=>{v.value.icon=i};O(()=>c.componentData?.values,i=>{m.value=i?.customClasses??""},{immediate:!0});const n=i=>{b("handleAddComponentContent",{sectionID:c.componentData.sectionID,type:c.componentData.type,content:{...i,customClasses:m.value}})};return(i,s)=>{const f=wn,o=xn;return u(),h("div",mo,[e("div",{class:D(["content ",{max_width:c.componentData.type.toLowerCase().replace(/\s+/g,"-")==="custom-html"}])},[e("button",{class:"pi pi-times close_btn",onClick:s[0]||(s[0]=r=>i.$emit("handleCloseComponentPopup"))}),(u(),ee(Be(a[c.componentData.type.toLowerCase().replace(/\s+/g,"-")]),{values:l.componentData?.values,onHandleCloseComponentPopup:s[2]||(s[2]=r=>b("handleCloseComponentPopup")),onOpenIconPicker:$,onHandleSubmitFields:n},{default:Ne(()=>[R(f,{modelValue:q(m),"onUpdate:modelValue":s[1]||(s[1]=r=>pe(m)?m.value=r:null),id:"custom_classes",label:"CSS Classes",placeholder:"e.g. rounded-lg shadow-md text-center"},null,8,["modelValue"])]),_:1},40,["values"])),R(o,{modelValue:q(_),"onUpdate:modelValue":s[3]||(s[3]=r=>pe(_)?_.value=r:null),onSelect:g},null,8,["modelValue"])],2)])}}},ho={key:0,class:"side_bar"},fo={class:"header_image"},vo={class:"image"},ko=["alt"],go={class:"project_content"},_o={class:"pages flex_content"},wo={class:"image"},$o=["src"],yo=["title"],Co={class:"pages flex_content"},So=["onClick"],Po={class:"section_header"},Vo={class:"buttons"},Eo=["onClick"],xo=["onClick"],To=["onClick"],zo=["onDrop"],Mo=["onDragstart","onDrop"],Io={class:"component_block"},Uo={class:"component_buttons"},Do=["title","onClick"],jo=["title","onClick"],Fo=["onMousedown"],Oo={key:0,class:"section_component empty_placeholder"},Lo=["title"],Ao=["disabled"],Ho={__name:"index",setup(l){const{t}=A();Qe();const c=Je(),{getMethod:m,getResult:b,submitMethod:a,showErrorToast:_}=ne(),v=Ke({}),$=(k,p)=>{const y=v[k];y&&y.toggle(p)},g=k=>{const p=n.value.find(y=>y._id===k);return p?[{label:p.visible?t("projectEditor.menu.hide"):t("projectEditor.menu.show"),icon:p.visible?"pi pi-eye-slash":"pi pi-eye",command:()=>se(k)},{label:t("projectEditor.menu.edit"),icon:"pi pi-pencil",command:()=>B(k)}]:[]},n=V([]),i=V(),s=ce(()=>n.value.find(k=>k._id===i.value)),f=V(null),o=V(!1),r=k=>{if(f.value){const p=s.value.sections.find(y=>y.id===f.value.id);p&&(p.name=k.name,p.visible=k.visible,p.layout_items=k.layout_items,p.components=k.components)}else s.value.sections.push({id:s.value.sections.length+1,...k});o.value=!1,f.value=null},x=k=>{f.value=k,o.value=!0},w=V(),U=V(!1),S=k=>{if(w.value){const p=n.value.find(y=>y._id===w.value._id);p&&(p.name=k.name)}else{const p={_id:(n.value.length+1).toString(),name:k.name,visible:!0,sections:[]};n.value.push(p),i.value=p._id}U.value=!1,w.value=null},se=k=>{const p=n?.value?.find(y=>y._id===k);p.visible=!p.visible},B=k=>{U.value=!0;const p=n?.value?.find(y=>y._id==k);w.value=p},J=V(null),Ve=({item:k,index:p,event:y})=>{J.value={component:k,fromSidebar:!0},y.dataTransfer.effectAllowed="copy",y.dataTransfer.setData("text/plain","dragging")},Ee=k=>{J.value=null},xe=(k,p,y,I)=>{J.value={component:p,fromSection:k,index:y},I.dataTransfer.effectAllowed="move",I.dataTransfer.setData("text/plain","dragging")},me=(k,p)=>{if(!J.value)return;const{component:y,fromSidebar:I,fromSection:W}=J.value,de=p.currentTarget.closest(".section_content"),le=Array.from(de.querySelectorAll(".section_component")).filter(L=>!L.classList.contains("empty_placeholder"));let Y=le.length;for(let L=0;L<le.length;L++){const Z=le[L].getBoundingClientRect();if(p.clientX<Z.left+Z.width/2){Y=L;break}}if(I){const L={...y,id:Date.now(),width:30};k.components.splice(Y,0,L)}else{const L=W.components,Z=k.components,C=L.findIndex(Q=>Q._id===y._id);if(C===-1)return;const[T]=L.splice(C,1);let te=Y;W.id===k.id&&Y>C&&(te-=1),Z.splice(te,0,T)}J.value=null};let K=null,be=0,he=0,fe=0;const Te=(k,p,y)=>{K=p,be=y.clientX;const I=y.target.closest(".section_component");if(!I)return;const W=I.parentElement;W&&(he=I.offsetWidth,fe=W.offsetWidth,window.addEventListener("mousemove",ve),window.addEventListener("mouseup",ke),y.preventDefault())},ve=k=>{if(!K)return;const p=k.clientX-be;let y=(he+p)/fe*100;y=Math.max(5,Math.min(100,y)),K.content||(K.content={});let I=K.content.customClasses||"";I=I.replace(/w-\[\d+%?\]/g,"").trim(),K.content.customClasses=`${I} w-[${Math.floor(y)}%]`.trim()},ke=()=>{K=null,window.removeEventListener("mousemove",ve),window.removeEventListener("mouseup",ke)},G=V({}),ze=(k,p)=>{k.components.splice(p,1)},Me=(k,p,y)=>{G.value.sectionID=k,G.value.type=p,G.value.values=y},Ie=k=>{const p=s?.value.sections.find(I=>I.id==k.sectionID);if(!p)return _(t("projectEditor.errors.sectionNotFound"));const y=p.components.find(I=>I.type===k.type);if(!y)return _(t("projectEditor.errors.componentNotFound"));y.content=k.content},ge=V({});O(()=>b?.value,k=>{k&&(n.value=k.data.pages,i.value=k.data.pages[0]?._id,k.data.pages.forEach(p=>{ge.value[p._id]=JSON.parse(JSON.stringify(p))}))},{immediate:!0});const Ue=ce(()=>{if(!s.value)return!1;const k=s.value._id,p=ge.value[k];return p?JSON.stringify(s.value)!=JSON.stringify(p):!1}),De=()=>{if(!s?.value?.sections?.length){_(t("projectEditor.errors.pageContentRequired"));return}const k=s?.value?._id;if(!k){_(t("projectEditor.errors.invalidPageId"));return}const p=/^\d+$/.test(k),y=p?`/projects/${c.params.id}/pages`:`/projects/${c.params.id}/pages/${k}`,I=p?"POST":"PATCH";a(y,!0,s.value,I,"")};return O(()=>b?.value?.data,k=>{k&&(n.value=k?.pages,i.value=k?.pages[0]?._id)}),qe(()=>{m(`/projects/${c.params.id}`,null,!0,!1)}),(k,p)=>{const y=rn,I=Xe,W=ln,de=nn,le=Ge,Y=un,L=fn,Z=bo;return u(),h("div",{class:"project_page page",style:ue(q(n).length===0?"margin: 0":"")},[q(n).length?(u(),h("div",ho,[e("div",fo,[e("div",vo,[e("img",{src:We,alt:q(t)("projectEditor.alts.logo"),loading:"lazy"},null,8,ko)])]),p[7]||(p[7]=e("hr",null,null,-1)),R(y,{onDragStart:Ve,onDragEnd:Ee})])):M("",!0),e("div",go,[e("div",_o,[e("div",wo,[e("img",{src:q(b)?.data?.logo,alt:"logo_image",loading:"lazy"},null,8,$o)]),e("button",{class:"add_page gradient_background",onClick:p[0]||(p[0]=C=>U.value=!0),title:q(t)("projectEditor.addPage")},[p[8]||(p[8]=e("i",{class:"pi pi-plus"},null,-1)),ie(" "+d(q(t)("projectEditor.addNewPage")),1)],8,yo),R(I)]),e("div",Co,[(u(!0),h(j,null,F(q(n),C=>(u(),h("div",{key:C,class:D(["page_item",{active:q(i)===C?._id,hidden_element:!C.visible}]),onClick:T=>i.value=C?._id},[e("span",null,d(C?.name),1),C==q(s)?(u(),ee(W,{key:0,type:"button",icon:"pi pi-ellipsis-v",onClick:re(T=>$(C._id,T),["stop"]),"aria-haspopup":"true","aria-controls":`menu_${C._id}`},null,8,["onClick","aria-controls"])):M("",!0),R(de,{ref_for:!0,ref:T=>q(v)[C._id]=T,id:`menu_${C._id}`,model:g(C._id),popup:!0},null,8,["id","model"])],10,So))),128))])]),p[12]||(p[12]=e("hr",null,null,-1)),e("div",{class:D(["project_sections ",{"justify-center":!q(n).length}])},[(u(!0),h(j,null,F(q(s)?.sections,C=>(u(),h("div",{key:C.id,class:D(["section ",{hidden_element:!C.visible}])},[e("div",Po,[e("h3",null,d(C.name),1),e("div",Vo,[e("button",{onClick:T=>x(C),class:"section_control pi pi-pen-to-square"},null,8,Eo),e("button",{onClick:T=>q(s).sections.splice(q(s).sections.indexOf(C),1),class:"section_control pi pi-trash"},null,8,xo),e("button",{onClick:T=>C.visible=!C.visible,class:D(["section_control pi",`pi-eye${C.visible?"":"-slash"}`])},null,10,To)])]),e("div",{class:"section_content flex flex-row w-full",onDragover:p[2]||(p[2]=re(()=>{},["prevent"])),onDrop:T=>me(C,T)},[(u(!0),h(j,null,F(C?.components,(T,te)=>(u(),h("div",{key:T?.id,class:D(["section_component flex-shrink-0 relative",T?.content?.customClasses]),style:ue({width:T&&T?.content?.customClasses?.match(/w-\[(.*?)\]/)?.[1]}),draggable:"true",onDragstart:Q=>xe(C,T,te,Q),onDragover:p[1]||(p[1]=re(()=>{},["prevent"])),onDrop:Q=>me(C,Q)},[e("div",Io,[e("span",null,d(T.type),1)]),e("div",Uo,[e("small",null,d(T?.content?.customClasses),1),e("button",{class:"edit_component",title:q(t)("projectEditor.buttons.editComponent"),onClick:Q=>Me(C.id,T.type,T.content)},[...p[9]||(p[9]=[e("i",{class:"pi pi-pen-to-square"},null,-1)])],8,Do),e("button",{class:"remove_component",title:q(t)("projectEditor.buttons.removeComponent"),onClick:Q=>ze(C,te)},[...p[10]||(p[10]=[e("i",{class:"pi pi-trash"},null,-1)])],8,jo)]),e("div",{class:"resize_handle",onMousedown:re(Q=>Te(C,T,Q),["prevent"])},null,40,Fo)],46,Mo))),128)),q(J)&&q(J).fromSection!==C?(u(),h("div",Oo,d(q(t)("projectEditor.placeholders.dropHere")),1)):M("",!0)],40,zo)],2))),128)),q(n).length?(u(),h("div",{key:0,class:"section add_section",title:q(t)("projectEditor.addSection"),onClick:p[3]||(p[3]=C=>o.value=!0)},[p[11]||(p[11]=e("i",{class:"pi pi-plus"},null,-1)),e("span",null,d(q(t)("projectEditor.addSection")),1)],8,Lo)):(u(),ee(le,{key:1}))],2),e("button",{class:"main-btn",disabled:!q(Ue),onClick:De},d(q(t)("projectEditor.save")),9,Ao),q(o)?(u(),ee(Y,{key:1,modifiedSection:q(f),onHandleShowControlSectionPopup:p[4]||(p[4]=C=>o.value=!1),onHandleSectionPopup:r},null,8,["modifiedSection"])):M("",!0),q(U)?(u(),ee(L,{key:2,modifiedPage:q(w),onHandleShowControlPagePopup:p[5]||(p[5]=C=>U.value=!1),onHandleControlPage:S},null,8,["modifiedPage"])):M("",!0),q(G).type?(u(),ee(Z,{key:3,componentData:q(G),onHandleCloseComponentPopup:p[6]||(p[6]=C=>G.value={}),onHandleAddComponentContent:Ie},null,8,["componentData"])):M("",!0)],4)}}},ci=H(Ho,[["__scopeId","data-v-0b3fc66e"]]);export{ci as default};
