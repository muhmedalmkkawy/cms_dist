const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./D77Y1TZG.js","./i2SF7SlC.js","./entry.DCe-V6kj.css"])))=>i.map(i=>d[i]);
import{u as le,a as Y}from"./DIHMp0d5.js";import{o as he,c as v,e as q,j as O,r as H,a as e,n as F,t as d,u as c,f as R,l as V,m as L,p as E,v as I,q as Se,_ as N,s as M,x as Re,y as Ae,z as qe,A as me,B as J,C as ie,D as ce,b as B,E as Pe,G as Ne,H as Be,I as Je,T as Qe,J as P,K as Ke,L as We,M as xe,N as be,i as te,w as Ge,O as Xe,P as Ye,Q as Ze,R as et,k as de}from"./i2SF7SlC.js";import{_ as tt}from"./BPgIaHLX.js";import{_ as lt}from"./KxZ-GjK7.js";import Ve from"./CAmZEXOA.js";import nt from"./CtZtx_A1.js";import{s as ot}from"./D_hDAg7Z.js";import it from"./CE0r2HB3.js";import st from"./CO1qG-4f.js";import rt from"./DXHDt5fT.js";import"./Cio8qqKk.js";import"./ClPPFT_O.js";import"./DbrcHgYQ.js";import"./BVvfNLwa.js";import"./CQFlVg91.js";import"./DyC-qNuG.js";import"./D3MnLe8m.js";import"./B101y6ij.js";import"./uOESDSmE.js";import"./DfvP7kLg.js";import"./C90YhD0F.js";const at={class:"components"},dt=["onDragstart"],ct={class:"component_title"},pt={__name:"ComponentItems",emits:["dragStart","dragEnd"],setup(l,{emit:n}){const{getMethod:s,getResult:f}=le(),b=n,r=(k,w,g)=>{b("dragStart",{item:k,index:w,event:g})},_=k=>{b("dragEnd",k)};return he(()=>{s("components",null,!0,!1)}),(k,w)=>(q(),v("div",at,[(q(!0),v(O,null,H(c(f)?.data??[],g=>(q(),v("div",{key:g.type,class:"component_item",draggable:"true",onDragstart:o=>r(g,k.index,o),onDragend:w[0]||(w[0]=o=>_(o))},[e("i",{class:F(["component_icon pi",g.icon])},null,2),e("span",ct,d(g.label),1),w[1]||(w[1]=e("i",{class:"pi pi-equals"},null,-1))],40,dt))),128))]))}},ut={class:"popup"},qt={class:"content"},mt={class:"input"},bt=["placeholder"],ht={__name:"ControlSectionPopup",props:{modifiedSection:{type:Object,default:null}},emits:["handleSectionPopup","handleShowControlSectionPopup"],setup(l,{emit:n}){const{t:s}=R(),{showErrorToast:f}=le(),b=n,r=l,_=V({name:"",visible:!0,layout_items:1,components:[],isDragOver:!1});L(()=>r.modifiedSection,g=>{g&&(_.value={name:g.name??"",visible:g.visible??!0,layout_items:g.layout_items??1,components:g.components??[],isDragOver:!1})},{immediate:!0});const k=()=>{if(!_.value.name.trim()){f(s("sectionPopup.emptyError"));return}b("handleSectionPopup",_.value),w()},w=()=>{_.value={name:"",visible:!0,layout_items:1,components:[],isDragOver:!1},b("handleShowControlSectionPopup")};return(g,o)=>(q(),v("div",ut,[e("div",qt,[e("button",{class:"pi pi-times close_btn",onClick:w}),e("h4",null,d(g.$t("sectionPopup.title")),1),e("div",mt,[E(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=t=>c(_).name=t),placeholder:g.$t("sectionPopup.placeholder"),onKeydown:Se(k,["enter"])},null,40,bt),[[I,c(_).name,void 0,{trim:!0}]])]),e("button",{class:"main-btn",onClick:k},d(g.$t("sectionPopup.submit")),1)])]))}},ft={class:"popup"},vt={class:"content"},kt={class:"input"},gt=["placeholder"],_t={__name:"ControlPagePopup",props:{modifiedPage:{type:Object,default:null}},emits:["handleControlPage","handleShowControlPagePopup"],setup(l,{emit:n}){const{t:s}=R(),{showErrorToast:f}=le(),b=n,r=l,_=V({name:""});L(()=>r.modifiedPage,g=>{_.value.name=g?.name??""},{immediate:!0});const k=()=>{if(!_.value.name.trim()){f(s("pagePopup.emptyError"));return}b("handleControlPage",{..._.value}),w()},w=()=>{_.value.name="",b("handleShowControlPagePopup")};return(g,o)=>(q(),v("div",ft,[e("div",vt,[e("button",{class:"pi pi-times close_btn",onClick:w}),e("h4",null,d(g.$t("pagePopup.title")),1),e("div",kt,[E(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=t=>c(_).name=t),placeholder:g.$t("pagePopup.placeholder"),onKeydown:Se(k,["enter"])},null,40,gt),[[I,c(_).name,void 0,{trim:!0}]])]),e("button",{class:"main-btn",onClick:k},d(g.$t("pagePopup.submit")),1)])]))}},wt={class:"input"},$t=["for"],yt=["id","value"],Ct={__name:"ClassesInput",props:{label:String,id:String,modelValue:String,placeholder:String,className:String},emits:["update:modelValue"],setup(l,{emit:n}){const s=n;return(f,b)=>(q(),v("div",wt,[l.label?(q(),v("label",{key:0,for:l.id},d(l.label),9,$t)):M("",!0),e("input",{id:l.id,value:l.modelValue,onInput:b[0]||(b[0]=r=>s("update:modelValue",r.target.value)),placeholder:"e.g. rounded-lg shadow-md text-center",class:F(["classes-input",l.className])},null,42,yt)]))}},St=N(Ct,[["__scopeId","data-v-f9354fb2"]]),Pt={key:0,class:"popup"},xt={class:"content"},Vt={for:"icon_input"},Et=["placeholder"],Tt={class:"icons_grid"},zt=["onClick"],Mt={__name:"IconPicker",props:{modelValue:{type:Boolean},modelModifiers:{}},emits:Re(["select","close"],["update:modelValue"]),setup(l,{emit:n}){const s=n,f=Ae(l,"modelValue"),b=V(""),r=V([]);he(()=>{const g=Array.from(document.styleSheets),o=new Set;g.forEach(t=>{try{const u=t.cssRules||[];Array.from(u).forEach(m=>{if(!m.selectorText)return;const i=m.selectorText.match(/\.pi-([a-z0-9-]+)::?before/i);i&&i[1]&&o.add(`pi pi-${i[1]}`)})}catch{}}),r.value=Array.from(o).sort()});const _=qe(()=>b.value?r.value.filter(g=>g.toLowerCase().includes(b.value.toLowerCase())):r.value),k=g=>{s("select",g),b.value="",f.value=!1},w=()=>{f.value=!1,s("close")};return(g,o)=>f.value?(q(),v("div",Pt,[e("div",xt,[e("button",{class:"pi pi-times close_btn",onClick:w}),e("label",Vt,d(g.$t("iconPicker.label")),1),E(e("input",{id:"icon_input",class:"icon_search",type:"text","onUpdate:modelValue":o[0]||(o[0]=t=>me(b)?b.value=t:null),placeholder:g.$t("iconPicker.placeholder")},null,8,Et),[[I,c(b)]]),e("div",Tt,[(q(!0),v(O,null,H(c(_),t=>(q(),v("button",{key:t,class:"icon_item",onClick:u=>k(t)},[e("i",{class:F(t)},null,2)],8,zt))),128))])])])):M("",!0)}},It=N(Mt,[["__scopeId","data-v-d4b8ddcd"]]),Dt={class:"accordion_fields"},Ut={class:"centered"},jt={class:"item_index"},Ot={class:"input grow_input"},Ft=["onUpdate:modelValue","placeholder"],Lt=["onClick"],Ht={class:"input full_input"},Rt=["onUpdate:modelValue","placeholder"],At={class:"flex_buttons"},Nt={__name:"AccordionFields",props:{values:{type:Object,default:()=>({items:[]})}},emits:["handleSubmitFields","handleCloseComponentPopup"],setup(l,{emit:n}){const{t:s}=R(),{showErrorToast:f}=Y(),b=n,r=V([{title:"",content:""}]),_=l;L(()=>_.values,o=>{r.value=o?.items?.length>0?o.items.map(t=>({title:t.title??"",content:t.content??""})):[{title:"",content:""}]},{immediate:!0});const k=()=>{r.value.push({title:"",content:""})},w=o=>{r.value.length>1?r.value.splice(o,1):f(s("accordion.errors.atLeastOne"))},g=()=>{if(r.value.some(t=>!t.title.trim()||!t.content.trim())){f(s("accordion.errors.fillAll"));return}b("handleSubmitFields",{items:r.value}),b("handleCloseComponentPopup")};return(o,t)=>(q(),v("div",Dt,[e("h4",Ut,d(o.$t("accordion.title")),1),(q(!0),v(O,null,H(c(r),(u,m)=>(q(),v("div",{class:"accordion_item",key:m},[e("h6",jt,[ie(d(o.$t("accordion.item"))+" ",1),e("span",null,"#"+d(m+1),1)]),e("div",Ot,[e("label",null,d(o.$t("accordion.fields.titleLabel")),1),E(e("input",{type:"text","onUpdate:modelValue":i=>u.title=i,placeholder:o.$t("accordion.fields.titlePlaceholder")},null,8,Ft),[[I,u.title]])]),c(r).length>1?(q(),v("button",{key:0,class:"delete_btn circled",onClick:i=>w(m)},[...t[0]||(t[0]=[e("i",{class:"pi pi-trash"},null,-1)])],8,Lt)):M("",!0),e("div",Ht,[e("label",null,d(o.$t("accordion.fields.contentLabel")),1),E(e("textarea",{rows:"4","onUpdate:modelValue":i=>u.content=i,placeholder:o.$t("accordion.fields.contentPlaceholder")},null,8,Rt),[[I,u.content]])])]))),128)),J(o.$slots,"default",{},void 0,!0),e("div",At,[e("button",{class:"main-btn reversed",onClick:k},d(o.$t("accordion.actions.addItem")),1),e("button",{class:"main-btn",onClick:g},d(o.$t("accordion.actions.submit")),1)])]))}},Bt=N(Nt,[["__scopeId","data-v-a60b9269"]]),Jt={class:"buttons_fields"},Qt={class:"centered"},Kt={class:"input icon_input"},Wt=["onClick"],Gt={class:"input grow_input"},Xt=["onUpdate:modelValue","placeholder"],Yt={class:"input"},Zt=["onUpdate:modelValue","placeholder"],el={class:"input"},tl=["onUpdate:modelValue"],ll={value:"_self"},nl={value:"_blank"},ol={class:"input toggle_input"},il=["onClick"],sl={class:"flex_buttons"},rl={__name:"ButtonsFields",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup","openIconPicker"],setup(l,{emit:n}){const{t:s}=R(),{showErrorToast:f}=Y(),b=n,r=V([{icon:"",title:"",link:"",target:"_self",reversed:!1}]),_=()=>{r?.value?.push({icon:"",title:"",link:"",target:"_self",reversed:!1})},k=o=>{r.value.length>1?r.value.splice(o,1):f(s("buttons.errors.minButton"))},w=l;L(()=>w.values,o=>{r.value=o?.items?.length>0?o.items.map(t=>({icon:t.icon??"",title:t.title??"",link:t.link??"",target:t.target??"_self",reversed:t.reversed??!1})):[{icon:"",title:"",link:"",target:"_self",reversed:!1}]},{immediate:!0});const g=()=>{const o=r.value.filter(t=>t.title?.trim()&&t.link?.trim()).map(t=>{const u={title:t.title.trim(),link:t.link.trim(),target:t.target,reversed:t.reversed};return t.icon?.trim()&&(u.icon=t.icon.trim()),u});if(!o.length){f(s("buttons.errors.fillButton"));return}b("handleSubmitFields",{items:o}),b("handleCloseComponentPopup")};return(o,t)=>{const u=Ve;return q(),v("div",Jt,[e("h4",Qt,d(c(s)("buttons.title")),1),(q(!0),v(O,null,H(c(r),(m,i)=>(q(),v("div",{class:"button_item",key:i},[e("div",Kt,[e("label",null,d(c(s)("buttons.fields.icon")),1),e("button",{class:"icon_select_btn",onClick:a=>b("openIconPicker",m)},[e("i",{class:F(m.icon||"pi pi-stop")},null,2)],8,Wt)]),e("div",Gt,[e("label",null,d(c(s)("buttons.fields.title")),1),E(e("input",{type:"text","onUpdate:modelValue":a=>m.title=a,placeholder:c(s)("buttons.placeholders.title")},null,8,Xt),[[I,m.title]])]),e("div",Yt,[e("label",null,d(c(s)("buttons.fields.link")),1),E(e("input",{type:"text","onUpdate:modelValue":a=>m.link=a,placeholder:c(s)("buttons.placeholders.link")},null,8,Zt),[[I,m.link]])]),e("div",el,[e("label",null,d(c(s)("buttons.fields.target")),1),E(e("select",{"onUpdate:modelValue":a=>m.target=a},[e("option",ll,d(c(s)("buttons.targets.self")),1),e("option",nl,d(c(s)("buttons.targets.blank")),1)],8,tl),[[ce,m.target]])]),e("div",ol,[B(u,{modelValue:m.reversed,"onUpdate:modelValue":a=>m.reversed=a},null,8,["modelValue","onUpdate:modelValue"]),e("span",null,d(c(s)("buttons.fields.reversed")),1)]),c(r).length>1?(q(),v("button",{key:0,class:"delete_btn circled",onClick:a=>k(i)},[...t[0]||(t[0]=[e("i",{class:"pi pi-trash"},null,-1)])],8,il)):M("",!0)]))),128)),J(o.$slots,"default",{},void 0,!0),e("div",sl,[e("button",{class:"main-btn reversed",onClick:_},d(c(s)("buttons.actions.addButton")),1),e("button",{class:"main-btn",onClick:g},d(c(s)("buttons.actions.submit")),1)])])}}},al=N(rl,[["__scopeId","data-v-dfbba5d3"]]),dl={class:"card_fields"},cl={class:"centered"},pl={class:"input"},ul={for:"cardItems"},ql={class:"input-wrap"},ml=["value"],bl={class:"input"},hl={class:"flex_header"},fl={class:"items_editor"},vl=["onClick"],kl={class:"image_wrapper"},gl=["id","onChange"],_l=["for"],wl=["src"],$l=["onUpdate:modelValue","placeholder"],yl=["onUpdate:modelValue","placeholder"],Cl=["onUpdate:modelValue","placeholder"],Sl={__name:"CardSliderFields",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup"],setup(l,{emit:n}){const{t:s}=R(),{submitMethod:f,submitResult:b,showErrorToast:r}=le(),_=n,k=V({itemsToShow:1,autoplay:!1,items:[{file:null,title:"",text:"",link:""}]}),w=()=>k.value.items.push({file:null,title:"",text:"",link:""}),g=i=>k.value.items.splice(i,1),o=V(),t=(i,a)=>{const z=i.target.files[0];if(!z)return r(s("cardSlider.errors.noFile"));o.value=k.value.items[a];const y=new FormData;y.append("file",z),f("/uploads/single",!0,y,"POST",null)};Pe(()=>{b?.value&&(o.value.file=b.value.data.path)});const u=l;L(()=>u.values,i=>{k.value={itemsToShow:i?.itemsToShow??1,autoplay:i?.autoplay??!1,items:i?.items?.length>0?i.items.map(a=>({file:a.file??null,title:a.title??"",text:a.text??"",link:a.link??""})):[{file:null,title:"",text:"",link:""}]}},{immediate:!0});const m=()=>{if(!k.value.items.length)return r(s("cardSlider.errors.minCard"));const i=k.value.items.findIndex(a=>!a.file||!a.title?.trim()||!a.text?.trim()||!a.link?.trim());if(i!==-1)return r(s("cardSlider.errors.fillCard",{index:i+1}));_("handleSubmitFields",{itemsToShow:k.value.itemsToShow,autoplay:k.value.autoplay,items:k.value.items.map(a=>({file:a.file,title:a.title.trim(),text:a.text.trim(),link:a.link.trim()}))}),_("handleCloseComponentPopup")};return(i,a)=>{const z=nt;return q(),v("div",dl,[e("h4",cl,d(i.$t("cardSlider.title")),1),e("div",pl,[e("label",ul,d(i.$t("cardSlider.itemsToShow")),1),e("div",ql,[E(e("select",{"onUpdate:modelValue":a[0]||(a[0]=y=>c(k).itemsToShow=y)},[(q(),v(O,null,H(5,y=>e("option",{key:y,value:y},d(y),9,ml)),64))],512),[[ce,c(k).itemsToShow]])])]),e("div",bl,[e("label",null,d(i.$t("cardSlider.autoplay")),1),B(z,{modelValue:c(k).autoplay,"onUpdate:modelValue":a[1]||(a[1]=y=>c(k).autoplay=y),class:"w-24",onLabel:"true",offLabel:"false"},null,8,["modelValue"])]),e("div",hl,[e("h4",null,d(i.$t("cardSlider.cardItems")),1),e("button",{class:"main-btn mb-4",onClick:w},[...a[2]||(a[2]=[e("i",{class:"pi pi-plus"},null,-1)])])]),e("div",fl,[(q(!0),v(O,null,H(c(k).items,(y,U)=>(q(),v("div",{class:"item_card",key:U},[c(k).items.length>1?(q(),v("button",{key:0,class:"pi pi-trash delete_btn",onClick:S=>g(U)},null,8,vl)):M("",!0),e("div",kl,[e("input",{type:"file",id:`card_image_${U}`,hidden:"",accept:"image/*",onChange:S=>t(S,U)},null,40,gl),e("label",{for:`card_image_${U}`,class:"upload_placeholder"},[y.file?(q(),v("img",{key:1,src:("useRuntimeConfig"in i?i.useRuntimeConfig:c(Ne))().public.apiBase+y.file,loading:"lazy"},null,8,wl)):(q(),v(O,{key:0},[a[3]||(a[3]=e("i",{class:"pi pi-upload"},null,-1)),e("span",null,d(i.$t("cardSlider.uploadImage")),1)],64))],8,_l)]),E(e("input",{type:"text","onUpdate:modelValue":S=>y.title=S,placeholder:i.$t("cardSlider.placeholders.title"),class:"card_input"},null,8,$l),[[I,y.title]]),E(e("textarea",{"onUpdate:modelValue":S=>y.text=S,placeholder:i.$t("cardSlider.placeholders.text"),class:"card_input"},null,8,yl),[[I,y.text]]),E(e("input",{type:"text","onUpdate:modelValue":S=>y.link=S,placeholder:i.$t("cardSlider.placeholders.link"),class:"card_input"},null,8,Cl),[[I,y.link]])]))),128))]),J(i.$slots,"default",{},void 0,!0),e("button",{class:"main-btn mt-4",onClick:m},d(i.$t("cardSlider.submit")),1)])}}},Pl=N(Sl,[["__scopeId","data-v-3e2eda30"]]);var xl=`
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
`,Vl={root:function(n){var s=n.instance;return["p-editor",{"p-invalid":s.$invalid}]},toolbar:"p-editor-toolbar",content:"p-editor-content"},El=Be.extend({name:"editor",style:xl,classes:Vl}),Tl={name:"BaseEditor",extends:ot,props:{placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:El,provide:function(){return{$pcEditor:this,$parentInstance:this}}};function oe(l){"@babel/helpers - typeof";return oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},oe(l)}function ye(l,n){var s=Object.keys(l);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(l);n&&(f=f.filter(function(b){return Object.getOwnPropertyDescriptor(l,b).enumerable})),s.push.apply(s,f)}return s}function zl(l){for(var n=1;n<arguments.length;n++){var s=arguments[n]!=null?arguments[n]:{};n%2?ye(Object(s),!0).forEach(function(f){Ml(l,f,s[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(s)):ye(Object(s)).forEach(function(f){Object.defineProperty(l,f,Object.getOwnPropertyDescriptor(s,f))})}return l}function Ml(l,n,s){return(n=Il(n))in l?Object.defineProperty(l,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):l[n]=s,l}function Il(l){var n=Dl(l,"string");return oe(n)=="symbol"?n:n+""}function Dl(l,n){if(oe(l)!="object"||!l)return l;var s=l[Symbol.toPrimitive];if(s!==void 0){var f=s.call(l,n);if(oe(f)!="object")return f;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(l)}var Ce=(function(){try{return window.Quill}catch{return null}})(),Ee={name:"Editor",extends:Tl,inheritAttrs:!1,emits:["text-change","selection-change","load"],quill:null,watch:{modelValue:function(n,s){n!==s&&this.quill&&!this.quill.hasFocus()&&this.renderValue(n)},d_value:function(n,s){n!==s&&this.quill&&!this.quill.hasFocus()&&this.renderValue(n)},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var n=this,s={modules:zl({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:"snow",formats:this.formats,placeholder:this.placeholder};Ce?(this.quill=new Ce(this.$refs.editorElement,s),this.initQuill(),this.handleLoad()):Je(()=>import("./D77Y1TZG.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(function(f){f&&Qe(n.$refs.editorElement)&&(f.default?n.quill=new f.default(n.$refs.editorElement,s):n.quill=new f(n.$refs.editorElement,s),n.initQuill())}).then(function(){n.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(n){if(this.quill)if(n){var s=this.quill.clipboard.convert({html:n});this.quill.setContents(s)}else this.quill.setText("")},initQuill:function(){var n=this;this.renderValue(this.d_value),this.quill.on("text-change",function(s,f,b){if(b==="user"){var r=n.quill.getSemanticHTML(),_=n.quill.getText().trim();r==="<p><br></p>"&&(r=""),n.writeValue(r),n.$emit("text-change",{htmlValue:r,textValue:_,delta:s,source:b,instance:n.quill})}}),this.quill.on("selection-change",function(s,f,b){var r=n.quill.getSemanticHTML(),_=n.quill.getText().trim();n.$emit("selection-change",{htmlValue:r,textValue:_,range:s,oldRange:f,source:b,instance:n.quill})})},handleLoad:function(){this.quill&&this.quill.getModule("toolbar")&&this.$emit("load",{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function Ul(l,n,s,f,b,r){return q(),v("div",P({class:l.cx("root")},l.ptmi("root")),[e("div",P({ref:"toolbarElement",class:l.cx("toolbar")},l.ptm("toolbar")),[J(l.$slots,"toolbar",{},function(){return[e("span",P({class:"ql-formats"},l.ptm("formats")),[e("select",P({class:"ql-header",defaultValue:"0"},l.ptm("header")),[e("option",P({value:"1"},l.ptm("option")),"Heading",16),e("option",P({value:"2"},l.ptm("option")),"Subheading",16),e("option",P({value:"0"},l.ptm("option")),"Normal",16)],16),e("select",P({class:"ql-font"},l.ptm("font")),[e("option",Ke(We(l.ptm("option"))),null,16),e("option",P({value:"serif"},l.ptm("option")),null,16),e("option",P({value:"monospace"},l.ptm("option")),null,16)],16)],16),e("span",P({class:"ql-formats"},l.ptm("formats")),[e("button",P({class:"ql-bold",type:"button"},l.ptm("bold")),null,16),e("button",P({class:"ql-italic",type:"button"},l.ptm("italic")),null,16),e("button",P({class:"ql-underline",type:"button"},l.ptm("underline")),null,16)],16),e("span",P({class:"ql-formats"},l.ptm("formats")),[e("select",P({class:"ql-color"},l.ptm("color")),null,16),e("select",P({class:"ql-background"},l.ptm("background")),null,16)],16),e("span",P({class:"ql-formats"},l.ptm("formats")),[e("button",P({class:"ql-list",value:"ordered",type:"button"},l.ptm("list")),null,16),e("button",P({class:"ql-list",value:"bullet",type:"button"},l.ptm("list")),null,16),e("select",P({class:"ql-align"},l.ptm("select")),[e("option",P({defaultValue:""},l.ptm("option")),null,16),e("option",P({value:"center"},l.ptm("option")),null,16),e("option",P({value:"right"},l.ptm("option")),null,16),e("option",P({value:"justify"},l.ptm("option")),null,16)],16)],16),e("span",P({class:"ql-formats"},l.ptm("formats")),[e("button",P({class:"ql-link",type:"button"},l.ptm("link")),null,16),e("button",P({class:"ql-image",type:"button"},l.ptm("image")),null,16),e("button",P({class:"ql-code-block",type:"button"},l.ptm("codeBlock")),null,16)],16),e("span",P({class:"ql-formats"},l.ptm("formats")),[e("button",P({class:"ql-clean",type:"button"},l.ptm("clean")),null,16)],16)]})],16),e("div",P({ref:"editorElement",class:l.cx("content"),style:l.editorStyle},l.ptm("content")),null,16)],16)}Ee.render=Ul;const jl={class:"custom_html_fields"},Ol={class:"centered"},Fl={__name:"CustomHtml",props:{values:{type:Object,default:()=>({html:""})}},emits:["handleSubmitFields","handleCloseComponentPopup"],setup(l,{emit:n}){const{t:s}=R(),{showErrorToast:f}=Y(),b=n,r=V({html:""}),_=l;L(()=>_.values,w=>{r.value.html=w?.html??""},{immediate:!0});const k=()=>{if(!r.value.html?.trim()){f(s("customHtml.emptyError"));return}b("handleSubmitFields",{html:r.value.html}),b("handleCloseComponentPopup")};return(w,g)=>{const o=Ee;return q(),v("div",jl,[e("h4",Ol,d(w.$t("customHtml.title")),1),B(o,{modelValue:c(r).html,"onUpdate:modelValue":g[0]||(g[0]=t=>c(r).html=t),placeholder:w.$t("customHtml.placeholder")},null,8,["modelValue","placeholder"]),J(w.$slots,"default",{},void 0,!0),e("button",{class:"main-btn",onClick:k},d(w.$t("customHtml.submit")),1)])}}},Ll=N(Fl,[["__scopeId","data-v-46ee23f4"]]),Hl={class:"logo_fields"},Rl={class:"centered"},Al={class:"input upload_logo"},Nl={for:"logo_input",class:"upload_logo_btn"},Bl={key:0,for:"logo_input",class:"preview"},Jl=["src","alt"],Ql={class:"input"},Kl={for:"logo_width"},Wl=["placeholder"],Gl={class:"input"},Xl={for:"logo_height"},Yl=["placeholder"],Zl={__name:"LogoField",props:{values:{type:Object,default:()=>({})}},emits:["handleSubmitFields","handleCloseComponentPopup"],setup(l,{emit:n}){const{t:s}=R(),{submitMethod:f,submitResult:b,showErrorToast:r}=le(),_=n,k=V({image:null,width:"",height:""}),w=l;L(()=>w.values,t=>{k.value={image:t?.image??null,width:t?.width??"",height:t?.height??""}},{immediate:!0});const g=t=>{const u=t.target.files?.[0];if(!u)return;if(!["image/jpeg","image/png","image/webp","image/gif","image/svg+xml"].includes(u.type)){r(s("logo.invalidFile")),t.target.value="";return}const i=new FormData;i.append("file",u),f("/uploads/single",!0,i,"POST")};Pe(()=>{b?.value&&(k.value.image=b.value.data?.path)});const o=()=>{if(!k.value.image){r(s("logo.imageRequired"));return}_("handleSubmitFields",{...k.value}),_("handleCloseComponentPopup")};return(t,u)=>(q(),v("div",Hl,[e("h4",Rl,d(t.$t("logo.title")),1),e("div",Al,[e("input",{type:"file",accept:"image/*",id:"logo_input",hidden:"",onChange:g},null,32),e("label",Nl,[u[2]||(u[2]=e("i",{class:"pi pi-upload"},null,-1)),e("span",null,d(t.$t("logo.upload")),1)])]),c(k).image?(q(),v("label",Bl,[e("img",{src:c(k).image,alt:t.$t("logo.previewAlt"),loading:"lazy"},null,8,Jl)])):M("",!0),e("div",Ql,[e("label",Kl,d(t.$t("logo.widthLabel")),1),E(e("input",{id:"logo_width",type:"number","onUpdate:modelValue":u[0]||(u[0]=m=>c(k).width=m),class:"input-wrap",placeholder:t.$t("logo.widthPlaceholder")},null,8,Wl),[[I,c(k).width]])]),e("div",Gl,[e("label",Xl,d(t.$t("logo.heightLabel")),1),E(e("input",{id:"logo_height",type:"number","onUpdate:modelValue":u[1]||(u[1]=m=>c(k).height=m),class:"input-wrap",placeholder:t.$t("logo.heightPlaceholder")},null,8,Yl),[[I,c(k).height]])]),J(t.$slots,"default",{},void 0,!0),e("button",{class:"main-btn",onClick:o},d(t.$t("logo.submit")),1)]))}},en=N(Zl,[["__scopeId","data-v-d88aae1d"]]),tn={class:"nav_menu_fields"},ln={class:"centered"},nn={class:"input icon_input"},on=["onClick"],sn={class:"input"},rn=["onUpdate:modelValue","placeholder"],an={key:0,class:"input"},dn=["onUpdate:modelValue","placeholder"],cn={key:1,class:"input"},pn=["onUpdate:modelValue"],un={value:"_self"},qn={value:"_blank"},mn={class:"input toggle_input"},bn=["onClick"],hn={key:0,class:"submenu_block"},fn={class:"submenu_block_header"},vn=["onClick"],kn={class:"icon_input input"},gn=["onClick"],_n={class:"input"},wn=["onUpdate:modelValue","placeholder"],$n={class:"input"},yn=["onUpdate:modelValue","placeholder"],Cn={key:0,class:"input"},Sn=["onUpdate:modelValue"],Pn={value:"_self"},xn={value:"_blank"},Vn=["onClick"],En={class:"flex_buttons"},Tn={__name:"MenuFields",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup","openIconPicker"],setup(l,{emit:n}){const{t:s}=R(),{showErrorToast:f}=Y(),b=n,r=xe({items:[{icon:"",title:"",link:"",target:"_self",hasChilds:!1,children:[{icon:"",title:"",link:"",target:"_self"}]}]}),_=l;L(()=>_.values,i=>{i&&(r.items=i.items.map(a=>({icon:a.icon??"",title:a.title??"",link:a.link??"",target:a.target??"_self",hasChilds:a.hasChilds??!1,children:a.hasChilds?(a.children??[]).map(z=>({icon:z.icon??"",title:z.title??"",link:z.link??"",target:z.target??"_self"})):[]})))},{immediate:!0});const k=()=>{r.items.push({icon:"",title:"",link:"",target:"_self",hasChilds:!1,children:[]})},w=i=>{r.items.length>1?r.items.splice(i,1):f(s("navMenu.menuMinError"))},g=i=>{const a=r.items[i];a.hasChilds?(a.children||(a.children=[]),a.link=""):a.children=[{title:"",link:"",target:"_self"}]},o=i=>{r.items[i].children.push({title:"",link:"",target:"_self"})},t=(i,a)=>{r.items[i].children.splice(a,1)},u=i=>i.map(a=>{const z={title:a.title};return a.icon?.trim()&&(z.icon=a.icon),a.hasChilds?(z.hasChilds=a.hasChilds,a.children?.length&&(z.children=u(a.children))):a.link&&(z.link=a.link,a.target&&(z.target=a.target)),z}),m=()=>{if(r.items.some(a=>{if(!a.title||!a.hasChilds&&!a.link||a.hasChilds&&a.children.some(z=>!z.title||!z.link))return!0})){f(s("navMenu.fillAllError"));return}b("handleSubmitFields",u(r.items)),b("handleCloseComponentPopup")};return(i,a)=>{const z=Ve;return q(),v("div",tn,[e("h4",ln,d(i.$t("navMenu.title")),1),(q(!0),v(O,null,H(c(r).items,(y,U)=>(q(),v("div",{class:"menu_group",key:U},[e("div",{class:F(["menu_item ",{has_childs:y?.hasChilds}])},[e("div",nn,[e("label",null,d(i.$t("navMenu.icon")),1),e("button",{class:"icon_select_btn",onClick:S=>b("openIconPicker",y)},[e("i",{class:F(y.icon||"pi pi-stop")},null,2)],8,on)]),e("div",sn,[e("label",null,d(i.$t("navMenu.titleLabel")),1),E(e("input",{type:"text","onUpdate:modelValue":S=>y.title=S,placeholder:i.$t("navMenu.titlePlaceholder")},null,8,rn),[[I,y.title]])]),y?.hasChilds?M("",!0):(q(),v("div",an,[e("label",null,d(i.$t("navMenu.linkLabel")),1),E(e("input",{type:"text","onUpdate:modelValue":S=>y.link=S,placeholder:i.$t("navMenu.linkPlaceholder")},null,8,dn),[[I,y.link]])])),y.hasChilds?M("",!0):(q(),v("div",cn,[e("label",null,d(i.$t("navMenu.targetLabel")),1),E(e("select",{"onUpdate:modelValue":S=>y.target=S},[e("option",un,d(i.$t("navMenu.sameTab")),1),e("option",qn,d(i.$t("navMenu.newTab")),1)],8,pn),[[ce,y.target]])])),e("div",mn,[B(z,{modelValue:y.hasChilds,"onUpdate:modelValue":S=>y.hasChilds=S,onChange:S=>g(U)},null,8,["modelValue","onUpdate:modelValue","onChange"]),e("span",null,d(i.$t("navMenu.hasChilds")),1)]),c(r).items.length>1?(q(),v("button",{key:2,class:"pi pi-trash delete_btn circled",onClick:S=>w(U)},null,8,bn)):M("",!0)],2),y.hasChilds?(q(),v("div",hn,[e("div",fn,[e("h5",null,[ie(d(i.$t("navMenu.subMenuFor"))+" ",1),e("span",null,d(y.title),1)]),e("button",{class:"add_sub_menu",onClick:S=>o(U)},[...a[0]||(a[0]=[e("i",{class:"pi pi-plus"},null,-1)])],8,vn)]),(q(!0),v(O,null,H(y.children,(S,se)=>(q(),v("div",{class:"submenu_item",key:`child-${U}-${se}`},[e("div",kn,[e("label",null,d(i.$t("navMenu.icon")),1),e("button",{class:"icon_select_btn",onClick:Q=>b("openIconPicker",S)},[e("i",{class:F(S.icon||"pi pi-stop")},null,2)],8,gn)]),e("div",_n,[e("label",null,d(i.$t("navMenu.subTitleLabel")),1),E(e("input",{type:"text","onUpdate:modelValue":Q=>S.title=Q,placeholder:i.$t("navMenu.subTitlePlaceholder")},null,8,wn),[[I,S.title]])]),e("div",$n,[e("label",null,d(i.$t("navMenu.subLinkLabel")),1),E(e("input",{type:"text","onUpdate:modelValue":Q=>S.link=Q,placeholder:i.$t("navMenu.subLinkPlaceholder")},null,8,yn),[[I,S.link]])]),S.hasChilds?M("",!0):(q(),v("div",Cn,[e("label",null,d(i.$t("navMenu.subTargetLabel")),1),E(e("select",{"onUpdate:modelValue":Q=>S.target=Q},[e("option",Pn,d(i.$t("navMenu.sameTab")),1),e("option",xn,d(i.$t("navMenu.newTab")),1)],8,Sn),[[ce,S.target]])])),y.children.length>1?(q(),v("button",{key:1,class:"pi pi-trash delete_btn circled",onClick:Q=>t(U,se)},null,8,Vn)):M("",!0)]))),128))])):M("",!0)]))),128)),J(i.$slots,"default"),e("div",En,[e("button",{class:"main-btn reversed",onClick:k},d(i.$t("navMenu.addMenuItem")),1),e("button",{class:"main-btn",onClick:m},d(i.$t("navMenu.submit")),1)])])}}},zn={class:"social_links_fields"},Mn={class:"centered"},In={class:"input icon_input"},Dn=["onClick"],Un={class:"input icon_input"},jn=["onUpdate:modelValue"],On={class:"input grow_input"},Fn=["onUpdate:modelValue","placeholder"],Ln=["onClick"],Hn={class:"flex_buttons"},Rn={__name:"SocialFields",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup","openIconPicker"],setup(l,{emit:n}){const{t:s}=R(),{showErrorToast:f}=Y(),b=n,r=V([{icon:"",link:"",color:"#000000"}]),_=l;L(()=>_.values,o=>{o&&(r.value=o?.items?.map(t=>({icon:t.icon??"",link:t.link??"",color:t.color??"#000000"}))||[{icon:"",link:"",color:"#000000"}])},{immediate:!0});const k=()=>{r.value.push({icon:"",link:"",color:"#000000"})},w=o=>{r.value.length>1?r.value.splice(o,1):f(s("social.minError"))},g=()=>{if(r.value.some(u=>!u.link.trim())){f(s("social.fillAllError"));return}const t=r.value.map(u=>{const m={link:u.link.trim(),color:u.color??"#000000"};return u.icon?.trim()&&(m.icon=u.icon.trim()),m});b("handleSubmitFields",{items:t}),b("handleCloseComponentPopup")};return(o,t)=>(q(),v("div",zn,[e("h4",Mn,d(o.$t("social.title")),1),(q(!0),v(O,null,H(c(r),(u,m)=>(q(),v("div",{class:"social_item",key:m},[e("div",In,[e("label",null,d(o.$t("social.icon")),1),e("button",{type:"button",class:"icon_select_btn",onClick:i=>b("openIconPicker",u)},[e("i",{class:F(u.icon||"pi pi-share-alt"),style:be({color:u.color+" !important"})},null,6)],8,Dn)]),e("div",Un,[e("label",null,d(o.$t("social.color")),1),E(e("input",{type:"color",name:"color","onUpdate:modelValue":i=>u.color=i},null,8,jn),[[I,u.color]])]),e("div",On,[e("label",null,d(o.$t("social.link")),1),E(e("input",{type:"url","onUpdate:modelValue":i=>u.link=i,placeholder:o.$t("social.linkPlaceholder")},null,8,Fn),[[I,u.link]])]),c(r).length>1?(q(),v("button",{key:0,class:"delete_btn circled",onClick:i=>w(m)},[...t[0]||(t[0]=[e("i",{class:"pi pi-trash"},null,-1)])],8,Ln)):M("",!0)]))),128)),J(o.$slots,"default",{},void 0,!0),e("div",Hn,[e("button",{class:"main-btn reversed",onClick:k},d(o.$t("social.addLink")),1),e("button",{class:"main-btn",onClick:g},d(o.$t("social.submit")),1)])]))}},An=N(Rn,[["__scopeId","data-v-16f99a21"]]),Nn={class:"tabs_fields"},Bn={class:"centered"},Jn={class:"item_index"},Qn={class:"tab_header"},Kn={class:"input grow_input"},Wn=["onUpdate:modelValue","placeholder"],Gn=["onClick"],Xn={class:"input full_input"},Yn=["onUpdate:modelValue","placeholder"],Zn={class:"flex_buttons"},eo={__name:"TabsFields",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup"],setup(l,{emit:n}){const{t:s}=R(),{showErrorToast:f}=Y(),b=n,r=V([{title:"",description:""}]),_=l;L(()=>_.values,o=>{o&&(r.value=o?.items?.map(t=>({title:t.title??"",description:t.description??""}))||[{title:"",description:""}])},{immediate:!0});const k=()=>{r.value.push({title:"",description:""})},w=o=>{r.value.length>1?r.value.splice(o,1):f(s("tabs.minError"))},g=()=>{if(r.value.some(t=>!t?.title?.trim()||!t?.description?.trim())){f(s("tabs.fillAllError"));return}b("handleSubmitFields",{items:r.value}),b("handleCloseComponentPopup")};return(o,t)=>(q(),v("div",Nn,[e("h4",Bn,d(o.$t("tabs.title")),1),(q(!0),v(O,null,H(c(r),(u,m)=>(q(),v("div",{class:"tab_item",key:m},[e("div",Jn,[ie(d(o.$t("tabs.tab"))+" ",1),e("span",null,"# "+d(m+1),1)]),e("div",Qn,[e("div",Kn,[e("label",null,d(o.$t("tabs.tabTitle")),1),E(e("input",{type:"text","onUpdate:modelValue":i=>u.title=i,placeholder:o.$t("tabs.tabTitlePlaceholder")},null,8,Wn),[[I,u.title]])]),c(r).length>1?(q(),v("button",{key:0,class:"delete_btn circled",onClick:i=>w(m)},[...t[0]||(t[0]=[e("i",{class:"pi pi-trash"},null,-1)])],8,Gn)):M("",!0)]),e("div",Xn,[e("label",null,d(o.$t("tabs.tabDescription")),1),E(e("textarea",{rows:"4","onUpdate:modelValue":i=>u.description=i,placeholder:o.$t("tabs.tabDescriptionPlaceholder")},null,8,Yn),[[I,u.description]])])]))),128)),J(o.$slots,"default",{},void 0,!0),e("div",Zn,[e("button",{class:"main-btn reversed",onClick:k},d(o.$t("tabs.addTab")),1),e("button",{class:"main-btn",onClick:g},d(o.$t("tabs.submit")),1)])]))}},to=N(eo,[["__scopeId","data-v-506fc86a"]]),lo={class:"timeline_fields"},no={class:"centered"},oo={class:"item_index"},io={class:"inputs"},so={class:"input icon_input"},ro=["onClick"],ao={class:"input"},co={class:"input grow_input"},po=["onUpdate:modelValue","placeholder"],uo=["onClick"],qo={class:"input full_input"},mo=["onUpdate:modelValue","placeholder"],bo={class:"flex_buttons"},ho={__name:"TimelineFields",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup","openIconPicker"],setup(l,{emit:n}){const{t:s}=R(),{showErrorToast:f}=Y(),b=n,r=V([{date:"",icon:"",title:"",description:"",classes:""}]),_=l;L(()=>_.values,o=>{o&&(r.value=o?.items?.map(t=>({date:t.date?new Date(t.date).toLocaleDateString():"",icon:t.icon??"",title:t.title??"",description:t.description??"",classes:t.classes??""}))||[{date:"",icon:"",title:"",description:"",classes:""}])},{immediate:!0});const k=()=>{r.value.push({date:"",icon:"",title:"",description:"",classes:""})},w=o=>{r.value.length>1?r.value.splice(o,1):f(s("timeline.minError"))},g=()=>{if(r.value.some(u=>!u.date||!u.title.trim()||!u.description.trim())){f(s("timeline.fillAllError"));return}const t=r.value.map(u=>{const m={date:u.date,title:u.title.trim(),description:u.description.trim(),classes:u.classes??""};return u.icon?.trim()&&(m.icon=u.icon.trim()),m});b("handleSubmitFields",{items:t}),b("handleCloseComponentPopup")};return(o,t)=>{const u=it;return q(),v("div",lo,[e("h4",no,d(o.$t("timeline.title")),1),(q(!0),v(O,null,H(c(r),(m,i)=>(q(),v("div",{class:"timeline_item",key:i},[e("h6",oo,[ie(d(o.$t("timeline.item"))+" ",1),e("span",null,"#"+d(i+1),1)]),e("div",io,[e("div",so,[e("label",null,d(o.$t("timeline.icon")),1),e("button",{class:"icon_select_btn",onClick:a=>b("openIconPicker",m)},[e("i",{class:F(m.icon||"pi pi-circle")},null,2)],8,ro)]),e("div",ao,[e("label",null,d(o.$t("timeline.date")),1),B(u,{modelValue:m.date,"onUpdate:modelValue":a=>m.date=a},null,8,["modelValue","onUpdate:modelValue"])]),e("div",co,[e("label",null,d(o.$t("timeline.titleField")),1),E(e("input",{type:"text","onUpdate:modelValue":a=>m.title=a,placeholder:o.$t("timeline.titlePlaceholder")},null,8,po),[[I,m.title]])])]),c(r).length>1?(q(),v("button",{key:0,class:"delete_btn circled",onClick:a=>w(i)},[...t[0]||(t[0]=[e("i",{class:"pi pi-trash"},null,-1)])],8,uo)):M("",!0),e("div",qo,[e("label",null,d(o.$t("timeline.description")),1),E(e("textarea",{rows:"3","onUpdate:modelValue":a=>m.description=a,placeholder:o.$t("timeline.descriptionPlaceholder")},null,8,mo),[[I,m.description]])])]))),128)),J(o.$slots,"default",{},void 0,!0),e("div",bo,[e("button",{class:"main-btn reversed",onClick:k},d(o.$t("timeline.addItem")),1),e("button",{class:"main-btn",onClick:g},d(o.$t("timeline.submit")),1)])])}}},fo=N(ho,[["__scopeId","data-v-670f25f1"]]),vo={class:"popup"},ko={__name:"ComponentPopup",props:{componentData:Object},emits:["handleAddComponentContent","handleCloseComponentPopup"],setup(l,{emit:n}){const s=l,f=V("w-[100%]"),b=n,r={"card-slider":Pl,"nav-menu":Tn,"custom-html":Ll,logo:en,buttons:al,accordion:Bt,timeline:fo,"social-media":An,tabs:to},_=V(!1),k=V(null),w=t=>{k.value=t,_.value=!0},g=t=>{k.value.icon=t};L(()=>s.componentData?.values,t=>{f.value=t?.customClasses??""},{immediate:!0});const o=t=>{b("handleAddComponentContent",{sectionID:s.componentData.sectionID,type:s.componentData.type,content:{...t,customClasses:f.value}})};return(t,u)=>{const m=St,i=It;return q(),v("div",vo,[e("div",{class:F(["content ",{max_width:s.componentData.type.toLowerCase().replace(/\s+/g,"-")==="custom-html"}])},[e("button",{class:"pi pi-times close_btn",onClick:u[0]||(u[0]=a=>t.$emit("handleCloseComponentPopup"))}),(q(),te(Xe(r[s.componentData.type.toLowerCase().replace(/\s+/g,"-")]),{values:l.componentData?.values,onHandleCloseComponentPopup:u[2]||(u[2]=a=>b("handleCloseComponentPopup")),onOpenIconPicker:w,onHandleSubmitFields:o},{default:Ge(()=>[B(m,{modelValue:c(f),"onUpdate:modelValue":u[1]||(u[1]=a=>me(f)?f.value=a:null),id:"custom_classes",label:"CSS Classes",placeholder:"e.g. rounded-lg shadow-md text-center"},null,8,["modelValue"])]),_:1},40,["values"])),B(i,{modelValue:c(_),"onUpdate:modelValue":u[3]||(u[3]=a=>me(_)?_.value=a:null),onSelect:g},null,8,["modelValue"])],2)])}}},go={key:0,class:"side_bar"},_o={class:"header_image"},wo={class:"image"},$o=["alt"],yo={class:"project_content"},Co={class:"pages flex_content"},So={class:"image"},Po=["src"],xo=["title"],Vo={class:"pages flex_content"},Eo=["onClick"],To={class:"section_header"},zo={class:"buttons"},Mo=["onClick"],Io=["onClick"],Do=["onClick"],Uo=["onDragover","onDrop"],jo={key:0,class:"section_component empty_placeholder"},Oo=["onDragstart","onDragover"],Fo={class:"component_block"},Lo={class:"component_buttons"},Ho=["title","onClick"],Ro=["title","onClick"],Ao=["onMousedown"],No={key:0,class:"section_component empty_placeholder"},Bo=["title"],Jo=["disabled"],Qo={__name:"index",setup(l){const{t:n}=R();Ye();const s=Ze(),{getMethod:f,getResult:b,submitMethod:r,submitResult:_,showErrorToast:k}=le(),w=xe({}),g=(h,p)=>{const $=w[h];$&&$.toggle(p)},o=h=>{const p=t.value.find($=>$._id===h);return p?[{label:p.visible?n("projectEditor.menu.hide"):n("projectEditor.menu.show"),icon:p.visible?"pi pi-eye-slash":"pi pi-eye",command:()=>Q(h)},{label:n("projectEditor.menu.edit"),icon:"pi pi-pencil",command:()=>Te(h)}]:[]},t=V([]),u=V(),m=qe(()=>t.value.find(h=>h._id===u.value)),i=V(null),a=V(!1),z=h=>{if(i.value){const p=m.value.sections.find($=>$.id===i.value.id);p&&(p.name=h.name,p.visible=h.visible,p.layout_items=h.layout_items,p.components=h.components)}else m.value.sections.push({id:m.value.sections.length+1,...h});a.value=!1,i.value=null},y=h=>{i.value=h,a.value=!0},U=V(),S=V(!1),se=h=>{if(U.value){const p=t.value.find($=>$._id===U.value._id);p&&(p.name=h.name)}else{const p={_id:(t.value.length+1).toString(),name:h.name,visible:!0,sections:[]};t.value.push(p),u.value=p._id}S.value=!1,U.value=null},Q=h=>{const p=t?.value?.find($=>$._id===h);p.visible=!p.visible},Te=h=>{S.value=!0;const p=t?.value?.find($=>$._id==h);U.value=p},K=V(null),re=V(null),ne=V(null),fe=(h,p)=>{if(!K.value)return!1;const{fromSection:$,index:x}=K.value;if($!==h)return!1;let j=p;return p>x&&j--,j===x},ve=(h,p)=>{if(!K.value)return;re.value=h;const $=p.currentTarget.closest(".section_content");if(!$)return;const x=Array.from($.querySelectorAll(".section_component:not(.empty_placeholder)"));let j=x.length;for(let A=0;A<x.length;A++){const T=x[A].getBoundingClientRect();if(p.clientY<T.top+T.height/2){j=A;break}}ne.value=j},ze=({item:h,index:p,event:$})=>{K.value={component:h,fromSidebar:!0},$.dataTransfer.effectAllowed="move",$.dataTransfer.setData("text/plain","dragging")},Me=h=>{K.value=null},Ie=(h,p,$,x)=>{K.value={component:p,fromSidebar:!1,fromSection:h,index:$},x.dataTransfer.effectAllowed="move",x.dataTransfer.setData("text/plain","dragging");const j=x.currentTarget,A=j.getBoundingClientRect(),T=j.cloneNode(!0);T.classList.forEach(ee=>{/^w-\[.*\]$/.test(ee)&&T.classList.remove(ee)}),T.style.width="300px",T.style.height=`${A.height}px`,T.style.background="#fff",T.style.opacity="0.8",T.style.position="fixed",T.style.top="-9999px",T.style.left="-9999px",document.body.appendChild(T);const W=T.getBoundingClientRect();x.dataTransfer.setDragImage(T,W.width/2,W.height/2),setTimeout(()=>{T.parentNode&&T.parentNode.removeChild(T)},0)},De=(h,p)=>{if(!K.value)return;const{component:$,fromSidebar:x,fromSection:j,index:A}=K.value;let T=ne.value??h.components.length;if(x){const W={...$,_id:Date.now(),content:{customClasses:"w-[100%]"}};h.components.splice(T,0,W)}else{const W=j.components,ee=h.components,[ue]=W.splice(A,1);j===h&&T>A&&T--,ee.splice(T,0,ue)}p.currentTarget.classList.remove("dragging"),K.value=null,re.value=null,ne.value=null};let G=null,ke=0,ge=0,_e=0;const Ue=(h,p,$)=>{G=p,ke=$.clientX;const x=$.target.closest(".section_component");if(!x)return;const j=x.parentElement;j&&(ge=x.offsetWidth,_e=j.offsetWidth,window.addEventListener("mousemove",we),window.addEventListener("mouseup",$e),$.preventDefault())},we=h=>{if(!G)return;const p=h.clientX-ke;let $=(ge+p)/_e*100;$=Math.max(5,Math.min(100,$)),G.content||(G.content={});let x=G.content.customClasses||"";x=x.replace(/w-\[\d+%?\]/g,"").trim(),G.content.customClasses=`${x} w-[${Math.floor($)}%]`.trim()},$e=()=>{G=null,window.removeEventListener("mousemove",we),window.removeEventListener("mouseup",$e)},Z=V({}),je=(h,p)=>{h.components.splice(p,1)},Oe=(h,p,$)=>{Z.value.sectionID=h,Z.value.type=p,Z.value.values=$},Fe=h=>{const p=m?.value.sections.find(x=>x.id==h.sectionID);if(!p)return k(n("projectEditor.errors.sectionNotFound"));const $=p.components.find(x=>x.type===h.type);if(!$)return k(n("projectEditor.errors.componentNotFound"));$.content=h.content},pe=V({});L(()=>b?.value,h=>{h&&(t.value=h.data.pages,u.value=h.data.pages[0]?._id,h.data.pages.forEach(p=>{pe.value[p._id]=JSON.parse(JSON.stringify(p))}))},{immediate:!0});const Le=qe(()=>{if(!m.value)return!1;const h=m.value._id,p=pe.value[h];return p?JSON.stringify(m.value)!=JSON.stringify(p):!0});L(()=>_?.value?.data,h=>{if(!h||!m.value)return;const p=m.value._id;pe.value[p]=JSON.parse(JSON.stringify(m.value))});const He=()=>{if(!m?.value?.sections?.length){k(n("projectEditor.errors.pageContentRequired"));return}const h=m?.value?._id;if(!h){k(n("projectEditor.errors.invalidPageId"));return}const p=/^\d+$/.test(h),$=p?`/projects/${s.params.id}/pages`:`/projects/${s.params.id}/pages/${h}`,x=p?"POST":"PATCH";r($,!0,m.value,x,"")};return L(()=>b?.value?.data,h=>{h&&(t.value=h?.pages,u.value=h?.pages[0]?._id)}),he(()=>{f(`/projects/${s.params.id}`,null,!0,!1)}),(h,p)=>{const $=pt,x=tt,j=rt,A=st,T=lt,W=ht,ee=_t,ue=ko;return q(),v("div",{class:"project_page page",style:be(c(t).length===0?"margin: 0":"")},[c(t).length?(q(),v("div",go,[e("div",_o,[e("div",wo,[e("img",{src:et,alt:c(n)("projectEditor.alts.logo"),loading:"lazy"},null,8,$o)])]),p[5]||(p[5]=e("hr",null,null,-1)),B($,{onDragStart:ze,onDragEnd:Me})])):M("",!0),e("div",yo,[e("div",Co,[e("div",So,[e("img",{src:c(b)?.data?.logo,alt:"logo_image",loading:"lazy"},null,8,Po)]),e("button",{class:"add_page gradient_background",onClick:p[0]||(p[0]=C=>S.value=!0),title:c(n)("projectEditor.addPage")},[p[6]||(p[6]=e("i",{class:"pi pi-plus"},null,-1)),ie(" "+d(c(n)("projectEditor.addNewPage")),1)],8,xo),B(x)]),e("div",Vo,[(q(!0),v(O,null,H(c(t),C=>(q(),v("div",{key:C,class:F(["page_item",{active:c(u)===C?._id,hidden_element:!C.visible}]),onClick:D=>u.value=C?._id},[e("span",null,d(C?.name),1),C==c(m)?(q(),te(j,{key:0,type:"button",icon:"pi pi-ellipsis-v",onClick:de(D=>g(C._id,D),["stop"]),"aria-haspopup":"true","aria-controls":`menu_${C._id}`},null,8,["onClick","aria-controls"])):M("",!0),B(A,{ref_for:!0,ref:D=>c(w)[C._id]=D,id:`menu_${C._id}`,model:o(C._id),popup:!0},null,8,["id","model"])],10,Eo))),128))])]),p[10]||(p[10]=e("hr",null,null,-1)),e("div",{class:F(["project_sections ",{"justify-center":!c(t).length}])},[(q(!0),v(O,null,H(c(m)?.sections,C=>(q(),v("div",{key:C.id,class:F(["section ",{hidden_element:!C.visible}])},[e("div",To,[e("h3",null,d(C.name),1),e("div",zo,[e("button",{onClick:D=>y(C),class:"section_control pi pi-pen-to-square"},null,8,Mo),e("button",{onClick:D=>c(m).sections.splice(c(m).sections.indexOf(C),1),class:"section_control pi pi-trash"},null,8,Io),e("button",{onClick:D=>C.visible=!C.visible,class:F(["section_control pi",`pi-eye${C.visible?"":"-slash"}`])},null,10,Do)])]),e("div",{class:"section_content flex flex-row w-full",onDragover:de(D=>ve(C,D),["prevent"]),onDrop:D=>De(C,D)},[(q(!0),v(O,null,H(C.components,(D,ae)=>(q(),v(O,{key:D._id},[c(re)===C&&c(ne)===ae&&!fe(C,ae)?(q(),v("div",jo,d(c(n)("projectEditor.placeholders.dropHere")),1)):M("",!0),e("div",{class:F(["section_component relative",[D?.content?.customClasses]]),style:be({width:D?.content?.customClasses?.match(/w-\[(.*?)\]/)?.[1]||"100%"}),draggable:"true",onDragstart:X=>Ie(C,D,ae,X),onDragover:de(X=>ve(C,X),["prevent"])},[e("div",Fo,[e("span",null,d(D.type),1)]),e("div",Lo,[e("small",null,d(D?.content?.customClasses),1),e("button",{class:"edit_component",title:c(n)("projectEditor.buttons.editComponent"),onClick:X=>Oe(C.id,D.type,D.content)},[...p[7]||(p[7]=[e("i",{class:"pi pi-pen-to-square"},null,-1)])],8,Ho),e("button",{class:"remove_component",title:c(n)("projectEditor.buttons.removeComponent"),onClick:X=>je(C,ae)},[...p[8]||(p[8]=[e("i",{class:"pi pi-trash"},null,-1)])],8,Ro)]),e("div",{class:"resize_handle",onMousedown:de(X=>Ue(C,D,X),["prevent"])},null,40,Ao)],46,Oo)],64))),128)),c(re)===C&&c(ne)===C.components.length&&!fe(C,C.components.length)?(q(),v("div",No,d(c(n)("projectEditor.placeholders.dropHere")),1)):M("",!0)],40,Uo)],2))),128)),c(t).length?(q(),v("div",{key:0,class:"section add_section",title:c(n)("projectEditor.addSection"),onClick:p[1]||(p[1]=C=>a.value=!0)},[p[9]||(p[9]=e("i",{class:"pi pi-plus"},null,-1)),e("span",null,d(c(n)("projectEditor.addSection")),1)],8,Bo)):(q(),te(T,{key:1}))],2),e("button",{class:"main-btn",disabled:!c(Le),onClick:He},d(c(n)("projectEditor.save")),9,Jo),c(a)?(q(),te(W,{key:1,modifiedSection:c(i),onHandleShowControlSectionPopup:p[2]||(p[2]=C=>a.value=!1),onHandleSectionPopup:z},null,8,["modifiedSection"])):M("",!0),c(S)?(q(),te(ee,{key:2,modifiedPage:c(U),onHandleShowControlPagePopup:p[3]||(p[3]=C=>S.value=!1),onHandleControlPage:se},null,8,["modifiedPage"])):M("",!0),c(Z).type?(q(),te(ue,{key:3,componentData:c(Z),onHandleCloseComponentPopup:p[4]||(p[4]=C=>Z.value={}),onHandleAddComponentContent:Fe},null,8,["componentData"])):M("",!0)],4)}}},bi=N(Qo,[["__scopeId","data-v-c1ac94eb"]]);export{bi as default};
