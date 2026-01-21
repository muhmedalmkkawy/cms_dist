const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DZsU26mn.js","./DUA4fd_v.js","./entry.BJHZFLtp.css"])))=>i.map(i=>d[i]);
import{u as le,a as X}from"./CiH0w8Zs.js";import{o as qe,c as h,e as u,j,r as O,a as e,n as D,t as d,u as b,f as A,l as V,m as F,p as E,v as T,q as $e,_ as H,s as M,x as De,y as je,z as ce,A as pe,B as R,C as ie,D as ae,b as N,E as ye,G as Oe,H as Fe,T as Le,I as P,J as Ae,K as He,L as ue,i as ee,w as Ne,M as Re,N as Be,O as Je,P as Qe,Q as Ke,k as re}from"./DUA4fd_v.js";import{_ as We}from"./DMvjq_JB.js";import{_ as Xe}from"./CpNf1E1v.js";import Ce from"./DjWuC5Gg.js";import Ge from"./B-0SHw1T.js";import{s as Ye}from"./3u_XGlI_.js";import Ze from"./CbeMCO24.js";import el from"./D3c7ulbp.js";import ll from"./mlzX1rjq.js";import"./KejDBttx.js";import"./Cx17yVyS.js";import"./UJDE9rUk.js";import"./R53hfToe.js";import"./B4XWnnbu.js";import"./Oc0va4Xv.js";import"./BZ_5-KKR.js";import"./DGAKVnbY.js";import"./CkoauwKz.js";import"./_r4WdPbT.js";import"./BVenB4xT.js";const nl={class:"components"},tl=["onDragstart"],ol={class:"component_title"},il={__name:"ComponentItems",emits:["dragStart","dragEnd"],setup(n,{emit:t}){const{getMethod:c,getResult:q}=le(),m=t,a=(v,$,g)=>{m("dragStart",{item:v,index:$,event:g})},_=v=>{m("dragEnd",v)};return qe(()=>{c("components",null,!0,!1)}),(v,$)=>(u(),h("div",nl,[(u(!0),h(j,null,O(b(q)?.data??[],g=>(u(),h("div",{key:g.type,class:"component_item",draggable:"true",onDragstart:l=>a(g,v.index,l),onDragend:$[0]||($[0]=l=>_(l))},[e("i",{class:D(["component_icon pi",g.icon])},null,2),e("span",ol,d(g.label),1),$[1]||($[1]=e("i",{class:"pi pi-equals"},null,-1))],40,tl))),128))]))}},sl={class:"popup"},rl={class:"content"},al={class:"input"},dl=["placeholder"],cl={__name:"ControlSectionPopup",props:{modifiedSection:{type:Object,default:null}},emits:["handleSectionPopup","handleShowControlSectionPopup"],setup(n,{emit:t}){const{t:c}=A(),{showErrorToast:q}=le(),m=t,a=n,_=V({name:"",visible:!0,layout_items:1,components:[],isDragOver:!1});F(()=>a.modifiedSection,g=>{g&&(_.value={name:g.name??"",visible:g.visible??!0,layout_items:g.layout_items??1,components:g.components??[],isDragOver:!1})},{immediate:!0});const v=()=>{if(!_.value.name.trim()){q(c("sectionPopup.emptyError"));return}m("handleSectionPopup",_.value),$()},$=()=>{_.value={name:"",visible:!0,layout_items:1,components:[],isDragOver:!1},m("handleShowControlSectionPopup")};return(g,l)=>(u(),h("div",sl,[e("div",rl,[e("button",{class:"pi pi-times close_btn",onClick:$}),e("h4",null,d(g.$t("sectionPopup.title")),1),e("div",al,[E(e("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=i=>b(_).name=i),placeholder:g.$t("sectionPopup.placeholder"),onKeydown:$e(v,["enter"])},null,40,dl),[[T,b(_).name,void 0,{trim:!0}]])]),e("button",{class:"main-btn",onClick:v},d(g.$t("sectionPopup.submit")),1)])]))}},pl={class:"popup"},ul={class:"content"},ql={class:"input"},ml=["placeholder"],bl={__name:"ControlPagePopup",props:{modifiedPage:{type:Object,default:null}},emits:["handleControlPage","handleShowControlPagePopup"],setup(n,{emit:t}){const{t:c}=A(),{showErrorToast:q}=le(),m=t,a=n,_=V({name:""});F(()=>a.modifiedPage,g=>{_.value.name=g?.name??""},{immediate:!0});const v=()=>{if(!_.value.name.trim()){q(c("pagePopup.emptyError"));return}m("handleControlPage",{..._.value}),$()},$=()=>{_.value.name="",m("handleShowControlPagePopup")};return(g,l)=>(u(),h("div",pl,[e("div",ul,[e("button",{class:"pi pi-times close_btn",onClick:$}),e("h4",null,d(g.$t("pagePopup.title")),1),e("div",ql,[E(e("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=i=>b(_).name=i),placeholder:g.$t("pagePopup.placeholder"),onKeydown:$e(v,["enter"])},null,40,ml),[[T,b(_).name,void 0,{trim:!0}]])]),e("button",{class:"main-btn",onClick:v},d(g.$t("pagePopup.submit")),1)])]))}},hl={class:"input"},fl=["for"],vl=["id","value"],kl={__name:"ClassesInput",props:{label:String,id:String,modelValue:String,placeholder:String,className:String},emits:["update:modelValue"],setup(n,{emit:t}){const c=t;return(q,m)=>(u(),h("div",hl,[n.label?(u(),h("label",{key:0,for:n.id},d(n.label),9,fl)):M("",!0),e("input",{id:n.id,value:n.modelValue,onInput:m[0]||(m[0]=a=>c("update:modelValue",a.target.value)),placeholder:"e.g. rounded-lg shadow-md text-center",class:D(["classes-input",n.className])},null,42,vl)]))}},gl=H(kl,[["__scopeId","data-v-f9354fb2"]]),_l={key:0,class:"popup"},wl={class:"content"},$l={for:"icon_input"},yl=["placeholder"],Cl={class:"icons_grid"},Sl=["onClick"],Pl={__name:"IconPicker",props:{modelValue:{type:Boolean},modelModifiers:{}},emits:De(["select","close"],["update:modelValue"]),setup(n,{emit:t}){const c=t,q=je(n,"modelValue"),m=V(""),a=V([]);qe(()=>{const g=Array.from(document.styleSheets),l=new Set;g.forEach(i=>{try{const s=i.cssRules||[];Array.from(s).forEach(f=>{if(!f.selectorText)return;const o=f.selectorText.match(/\.pi-([a-z0-9-]+)::?before/i);o&&o[1]&&l.add(`pi pi-${o[1]}`)})}catch{}}),a.value=Array.from(l).sort()});const _=ce(()=>m.value?a.value.filter(g=>g.toLowerCase().includes(m.value.toLowerCase())):a.value),v=g=>{c("select",g),m.value="",q.value=!1},$=()=>{q.value=!1,c("close")};return(g,l)=>q.value?(u(),h("div",_l,[e("div",wl,[e("button",{class:"pi pi-times close_btn",onClick:$}),e("label",$l,d(g.$t("iconPicker.label")),1),E(e("input",{id:"icon_input",class:"icon_search",type:"text","onUpdate:modelValue":l[0]||(l[0]=i=>pe(m)?m.value=i:null),placeholder:g.$t("iconPicker.placeholder")},null,8,yl),[[T,b(m)]]),e("div",Cl,[(u(!0),h(j,null,O(b(_),i=>(u(),h("button",{key:i,class:"icon_item",onClick:s=>v(i)},[e("i",{class:D(i)},null,2)],8,Sl))),128))])])])):M("",!0)}},Vl=H(Pl,[["__scopeId","data-v-d4b8ddcd"]]),El={class:"accordion_fields"},xl={class:"centered"},Tl={class:"item_index"},zl={class:"input grow_input"},Ml=["onUpdate:modelValue","placeholder"],Il=["onClick"],Ul={class:"input full_input"},Dl=["onUpdate:modelValue","placeholder"],jl={class:"flex_buttons"},Ol={__name:"AccordionFields",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup"],setup(n,{emit:t}){const{t:c}=A(),{showErrorToast:q}=X(),m=t,a=V([{title:"",content:""}]),_=n;F(()=>_.values,l=>{l&&(a.value=l?.items?.map(i=>({title:i.title??"",content:i.content??""})))},{immediate:!0});const v=()=>{a.value.push({title:"",content:""})},$=l=>{a.value.length>1?a.value.splice(l,1):q(c("accordion.errors.atLeastOne"))},g=()=>{if(a.value.some(i=>!i.title.trim()||!i.content.trim())){q(c("accordion.errors.fillAll"));return}m("handleSubmitFields",{items:a.value}),m("handleCloseComponentPopup")};return(l,i)=>(u(),h("div",El,[e("h4",xl,d(l.$t("accordion.title")),1),(u(!0),h(j,null,O(b(a),(s,f)=>(u(),h("div",{class:"accordion_item",key:f},[e("h6",Tl,[ie(d(l.$t("accordion.item"))+" ",1),e("span",null,"#"+d(f+1),1)]),e("div",zl,[e("label",null,d(l.$t("accordion.fields.titleLabel")),1),E(e("input",{type:"text","onUpdate:modelValue":o=>s.title=o,placeholder:l.$t("accordion.fields.titlePlaceholder")},null,8,Ml),[[T,s.title]])]),b(a).length>1?(u(),h("button",{key:0,class:"delete_btn circled",onClick:o=>$(f)},[...i[0]||(i[0]=[e("i",{class:"pi pi-trash"},null,-1)])],8,Il)):M("",!0),e("div",Ul,[e("label",null,d(l.$t("accordion.fields.contentLabel")),1),E(e("textarea",{rows:"4","onUpdate:modelValue":o=>s.content=o,placeholder:l.$t("accordion.fields.contentPlaceholder")},null,8,Dl),[[T,s.content]])])]))),128)),R(l.$slots,"default",{},void 0,!0),e("div",jl,[e("button",{class:"main-btn reversed",onClick:v},d(l.$t("accordion.actions.addItem")),1),e("button",{class:"main-btn",onClick:g},d(l.$t("accordion.actions.submit")),1)])]))}},Fl=H(Ol,[["__scopeId","data-v-fb5a0c72"]]),Ll={class:"buttons_fields"},Al={class:"centered"},Hl={class:"input icon_input"},Nl=["onClick"],Rl={class:"input grow_input"},Bl=["onUpdate:modelValue","placeholder"],Jl={class:"input"},Ql=["onUpdate:modelValue","placeholder"],Kl={class:"input"},Wl=["onUpdate:modelValue"],Xl={value:"_self"},Gl={value:"_blank"},Yl={class:"input toggle_input"},Zl=["onClick"],en={class:"flex_buttons"},ln={__name:"ButtonsFields",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup","openIconPicker"],setup(n,{emit:t}){const{t:c}=A(),{showErrorToast:q}=X(),m=t,a=V([{icon:"",title:"",link:"",target:"_self",reversed:!1}]),_=()=>{a.value.push({icon:"",title:"",link:"",target:"_self",reversed:!1})},v=l=>{a.value.length>1?a.value.splice(l,1):q(c("buttons.errors.minButton"))},$=n;F(()=>$.values,l=>{l&&(a.value=l?.items?.map(i=>({icon:i.icon??"",title:i.title??"",link:i.link??"",target:i.target??"_self",reversed:i.reversed??!1})))},{immediate:!0});const g=()=>{const l=a.value.filter(i=>i.title?.trim()&&i.link?.trim()).map(i=>{const s={title:i.title.trim(),link:i.link.trim(),target:i.target,reversed:i.reversed};return i.icon?.trim()&&(s.icon=i.icon.trim()),s});if(!l.length){q(c("buttons.errors.fillButton"));return}m("handleSubmitFields",{items:l}),m("handleCloseComponentPopup")};return(l,i)=>{const s=Ce;return u(),h("div",Ll,[e("h4",Al,d(l.$t("buttons.title")),1),(u(!0),h(j,null,O(b(a),(f,o)=>(u(),h("div",{class:"button_item",key:o},[e("div",Hl,[e("label",null,d(l.$t("buttons.fields.icon")),1),e("button",{class:"icon_select_btn",onClick:r=>m("openIconPicker",f)},[e("i",{class:D(f.icon||"pi pi-stop")},null,2)],8,Nl)]),e("div",Rl,[e("label",null,d(l.$t("buttons.fields.title")),1),E(e("input",{type:"text","onUpdate:modelValue":r=>f.title=r,placeholder:l.$t("buttons.placeholders.title")},null,8,Bl),[[T,f.title]])]),e("div",Jl,[e("label",null,d(l.$t("buttons.fields.link")),1),E(e("input",{type:"text","onUpdate:modelValue":r=>f.link=r,placeholder:l.$t("buttons.placeholders.link")},null,8,Ql),[[T,f.link]])]),e("div",Kl,[e("label",null,d(l.$t("buttons.fields.target")),1),E(e("select",{"onUpdate:modelValue":r=>f.target=r},[e("option",Xl,d(l.$t("buttons.targets.self")),1),e("option",Gl,d(l.$t("buttons.targets.blank")),1)],8,Wl),[[ae,f.target]])]),e("div",Yl,[N(s,{modelValue:f.reversed,"onUpdate:modelValue":r=>f.reversed=r},null,8,["modelValue","onUpdate:modelValue"]),e("span",null,d(l.$t("buttons.fields.reversed")),1)]),b(a).length>1?(u(),h("button",{key:0,class:"delete_btn circled",onClick:r=>v(o)},[...i[0]||(i[0]=[e("i",{class:"pi pi-trash"},null,-1)])],8,Zl)):M("",!0)]))),128)),R(l.$slots,"default",{},void 0,!0),e("div",en,[e("button",{class:"main-btn reversed",onClick:_},d(l.$t("buttons.actions.addButton")),1),e("button",{class:"main-btn",onClick:g},d(l.$t("buttons.actions.submit")),1)])])}}},nn=H(ln,[["__scopeId","data-v-4072c5bd"]]),tn={class:"card_fields"},on={class:"centered"},sn={class:"input"},rn={for:"cardItems"},an={class:"input-wrap"},dn=["value"],cn={class:"input"},pn={class:"flex_header"},un={class:"items_editor"},qn=["onClick"],mn={class:"image_wrapper"},bn=["id","onChange"],hn=["for"],fn=["src"],vn=["onUpdate:modelValue","placeholder"],kn=["onUpdate:modelValue","placeholder"],gn=["onUpdate:modelValue","placeholder"],_n={__name:"CardSliderFields",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup"],setup(n,{emit:t}){const{t:c}=A(),{submitMethod:q,submitResult:m,showErrorToast:a}=le(),_=t,v=V({itemsToShow:1,autoplay:!1,items:[{file:null,title:"",text:"",link:""}]}),$=()=>v.value.items.push({file:null,title:"",text:"",link:""}),g=o=>v.value.items.splice(o,1),l=V(),i=(o,r)=>{const x=o.target.files[0];if(!x)return a(c("cardSlider.errors.noFile"));l.value=v.value.items[r];const w=new FormData;w.append("file",x),q("/uploads/single",!1,w,"POST",null)};ye(()=>{m?.value&&(l.value.file=m.value.data.path)});const s=n;F(()=>s.values,o=>{o&&(v.value={itemsToShow:o.itemsToShow??1,autoplay:o.autoplay??!1,items:o.items?.map(r=>({file:r.file,title:r.title??"",text:r.text??"",link:r.link??""}))})},{immediate:!0});const f=()=>{if(!v.value.items.length)return a(c("cardSlider.errors.minCard"));const o=v.value.items.findIndex(r=>!r.file||!r.title?.trim()||!r.text?.trim()||!r.link?.trim());if(o!==-1)return a(c("cardSlider.errors.fillCard",{index:o+1}));_("handleSubmitFields",{itemsToShow:v.value.itemsToShow,autoplay:v.value.autoplay,items:v.value.items.map(r=>({file:r.file,title:r.title.trim(),text:r.text.trim(),link:r.link.trim()}))}),_("handleCloseComponentPopup")};return(o,r)=>{const x=Ge;return u(),h("div",tn,[e("h4",on,d(o.$t("cardSlider.title")),1),e("div",sn,[e("label",rn,d(o.$t("cardSlider.itemsToShow")),1),e("div",an,[E(e("select",{"onUpdate:modelValue":r[0]||(r[0]=w=>b(v).itemsToShow=w)},[(u(),h(j,null,O(5,w=>e("option",{key:w,value:w},d(w),9,dn)),64))],512),[[ae,b(v).itemsToShow]])])]),e("div",cn,[e("label",null,d(o.$t("cardSlider.autoplay")),1),N(x,{modelValue:b(v).autoplay,"onUpdate:modelValue":r[1]||(r[1]=w=>b(v).autoplay=w),class:"w-24",onLabel:o.$t("common.on"),offLabel:o.$t("common.off")},null,8,["modelValue","onLabel","offLabel"])]),e("div",pn,[e("h4",null,d(o.$t("cardSlider.cardItems")),1),e("button",{class:"main-btn mb-4",onClick:$},[...r[2]||(r[2]=[e("i",{class:"pi pi-plus"},null,-1)])])]),e("div",un,[(u(!0),h(j,null,O(b(v).items,(w,I)=>(u(),h("div",{class:"item_card",key:I},[b(v).items.length>1?(u(),h("button",{key:0,class:"pi pi-trash delete_btn",onClick:S=>g(I)},null,8,qn)):M("",!0),e("div",mn,[e("input",{type:"file",id:`card_image_${I}`,hidden:"",accept:"image/*",onChange:S=>i(S,I)},null,40,bn),e("label",{for:`card_image_${I}`,class:"upload_placeholder"},[w.file?(u(),h("img",{key:1,src:w.file,loading:"lazy"},null,8,fn)):(u(),h(j,{key:0},[r[3]||(r[3]=e("i",{class:"pi pi-upload"},null,-1)),e("span",null,d(o.$t("cardSlider.uploadImage")),1)],64))],8,hn)]),E(e("input",{type:"text","onUpdate:modelValue":S=>w.title=S,placeholder:o.$t("cardSlider.placeholders.title"),class:"card_input"},null,8,vn),[[T,w.title]]),E(e("textarea",{"onUpdate:modelValue":S=>w.text=S,placeholder:o.$t("cardSlider.placeholders.text"),class:"card_input"},null,8,kn),[[T,w.text]]),E(e("input",{type:"text","onUpdate:modelValue":S=>w.link=S,placeholder:o.$t("cardSlider.placeholders.link"),class:"card_input"},null,8,gn),[[T,w.link]])]))),128))]),R(o.$slots,"default",{},void 0,!0),e("button",{class:"main-btn mt-4",onClick:f},d(o.$t("cardSlider.actions.submit")),1)])}}},wn=H(_n,[["__scopeId","data-v-f5f099bf"]]);var $n=`
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
`,yn={root:function(t){var c=t.instance;return["p-editor",{"p-invalid":c.$invalid}]},toolbar:"p-editor-toolbar",content:"p-editor-content"},Cn=Oe.extend({name:"editor",style:$n,classes:yn}),Sn={name:"BaseEditor",extends:Ye,props:{placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:Cn,provide:function(){return{$pcEditor:this,$parentInstance:this}}};function oe(n){"@babel/helpers - typeof";return oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},oe(n)}function _e(n,t){var c=Object.keys(n);if(Object.getOwnPropertySymbols){var q=Object.getOwnPropertySymbols(n);t&&(q=q.filter(function(m){return Object.getOwnPropertyDescriptor(n,m).enumerable})),c.push.apply(c,q)}return c}function Pn(n){for(var t=1;t<arguments.length;t++){var c=arguments[t]!=null?arguments[t]:{};t%2?_e(Object(c),!0).forEach(function(q){Vn(n,q,c[q])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(c)):_e(Object(c)).forEach(function(q){Object.defineProperty(n,q,Object.getOwnPropertyDescriptor(c,q))})}return n}function Vn(n,t,c){return(t=En(t))in n?Object.defineProperty(n,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):n[t]=c,n}function En(n){var t=xn(n,"string");return oe(t)=="symbol"?t:t+""}function xn(n,t){if(oe(n)!="object"||!n)return n;var c=n[Symbol.toPrimitive];if(c!==void 0){var q=c.call(n,t);if(oe(q)!="object")return q;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}var we=(function(){try{return window.Quill}catch{return null}})(),Se={name:"Editor",extends:Sn,inheritAttrs:!1,emits:["text-change","selection-change","load"],quill:null,watch:{modelValue:function(t,c){t!==c&&this.quill&&!this.quill.hasFocus()&&this.renderValue(t)},d_value:function(t,c){t!==c&&this.quill&&!this.quill.hasFocus()&&this.renderValue(t)},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var t=this,c={modules:Pn({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:"snow",formats:this.formats,placeholder:this.placeholder};we?(this.quill=new we(this.$refs.editorElement,c),this.initQuill(),this.handleLoad()):Fe(()=>import("./DZsU26mn.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(function(q){q&&Le(t.$refs.editorElement)&&(q.default?t.quill=new q.default(t.$refs.editorElement,c):t.quill=new q(t.$refs.editorElement,c),t.initQuill())}).then(function(){t.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(t){if(this.quill)if(t){var c=this.quill.clipboard.convert({html:t});this.quill.setContents(c)}else this.quill.setText("")},initQuill:function(){var t=this;this.renderValue(this.d_value),this.quill.on("text-change",function(c,q,m){if(m==="user"){var a=t.quill.getSemanticHTML(),_=t.quill.getText().trim();a==="<p><br></p>"&&(a=""),t.writeValue(a),t.$emit("text-change",{htmlValue:a,textValue:_,delta:c,source:m,instance:t.quill})}}),this.quill.on("selection-change",function(c,q,m){var a=t.quill.getSemanticHTML(),_=t.quill.getText().trim();t.$emit("selection-change",{htmlValue:a,textValue:_,range:c,oldRange:q,source:m,instance:t.quill})})},handleLoad:function(){this.quill&&this.quill.getModule("toolbar")&&this.$emit("load",{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function Tn(n,t,c,q,m,a){return u(),h("div",P({class:n.cx("root")},n.ptmi("root")),[e("div",P({ref:"toolbarElement",class:n.cx("toolbar")},n.ptm("toolbar")),[R(n.$slots,"toolbar",{},function(){return[e("span",P({class:"ql-formats"},n.ptm("formats")),[e("select",P({class:"ql-header",defaultValue:"0"},n.ptm("header")),[e("option",P({value:"1"},n.ptm("option")),"Heading",16),e("option",P({value:"2"},n.ptm("option")),"Subheading",16),e("option",P({value:"0"},n.ptm("option")),"Normal",16)],16),e("select",P({class:"ql-font"},n.ptm("font")),[e("option",Ae(He(n.ptm("option"))),null,16),e("option",P({value:"serif"},n.ptm("option")),null,16),e("option",P({value:"monospace"},n.ptm("option")),null,16)],16)],16),e("span",P({class:"ql-formats"},n.ptm("formats")),[e("button",P({class:"ql-bold",type:"button"},n.ptm("bold")),null,16),e("button",P({class:"ql-italic",type:"button"},n.ptm("italic")),null,16),e("button",P({class:"ql-underline",type:"button"},n.ptm("underline")),null,16)],16),e("span",P({class:"ql-formats"},n.ptm("formats")),[e("select",P({class:"ql-color"},n.ptm("color")),null,16),e("select",P({class:"ql-background"},n.ptm("background")),null,16)],16),e("span",P({class:"ql-formats"},n.ptm("formats")),[e("button",P({class:"ql-list",value:"ordered",type:"button"},n.ptm("list")),null,16),e("button",P({class:"ql-list",value:"bullet",type:"button"},n.ptm("list")),null,16),e("select",P({class:"ql-align"},n.ptm("select")),[e("option",P({defaultValue:""},n.ptm("option")),null,16),e("option",P({value:"center"},n.ptm("option")),null,16),e("option",P({value:"right"},n.ptm("option")),null,16),e("option",P({value:"justify"},n.ptm("option")),null,16)],16)],16),e("span",P({class:"ql-formats"},n.ptm("formats")),[e("button",P({class:"ql-link",type:"button"},n.ptm("link")),null,16),e("button",P({class:"ql-image",type:"button"},n.ptm("image")),null,16),e("button",P({class:"ql-code-block",type:"button"},n.ptm("codeBlock")),null,16)],16),e("span",P({class:"ql-formats"},n.ptm("formats")),[e("button",P({class:"ql-clean",type:"button"},n.ptm("clean")),null,16)],16)]})],16),e("div",P({ref:"editorElement",class:n.cx("content"),style:n.editorStyle},n.ptm("content")),null,16)],16)}Se.render=Tn;const zn={class:"custom_html_fields"},Mn={class:"centered"},In={__name:"CustomHtml",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup"],setup(n,{emit:t}){const{t:c}=A(),{showErrorToast:q}=X(),m=t,a=V({html:""}),_=n;F(()=>_.values,$=>{$&&(a.value.html=$.html)},{immediate:!0});const v=()=>{if(!a.value.html.trim()){q(c("customHtml.emptyError"));return}m("handleSubmitFields",a.value),m("handleCloseComponentPopup")};return($,g)=>{const l=Se;return u(),h("div",zn,[e("h4",Mn,d($.$t("customHtml.title")),1),N(l,{modelValue:b(a).html,"onUpdate:modelValue":g[0]||(g[0]=i=>b(a).html=i),placeholder:$.$t("customHtml.placeholder")},null,8,["modelValue","placeholder"]),R($.$slots,"default",{},void 0,!0),e("button",{class:"main-btn",onClick:v},d($.$t("customHtml.submit")),1)])}}},Un=H(In,[["__scopeId","data-v-02892d3b"]]),Dn={class:"logo_fields"},jn={class:"centered"},On={class:"input upload_logo"},Fn={for:"logo_input",class:"upload_logo_btn"},Ln={key:0,class:"preview"},An=["src","alt"],Hn={class:"input"},Nn={for:"logo_width"},Rn=["placeholder"],Bn={class:"input"},Jn={for:"logo_height"},Qn=["placeholder"],Kn={__name:"LogoField",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup"],setup(n,{emit:t}){const{t:c}=A(),q=t,{submitMethod:m,submitResult:a,showErrorToast:_}=le(),v=V({image:null,width:"",height:""}),$=n;F(()=>$.values,s=>{s&&(v.value={image:s.image??null,width:s.width??"",height:s.height??""})},{immediate:!0});const g=s=>{const f=s.target.files?.[0];if(!f){_(c("logo.noFile"));return}if(!["image/jpeg","image/png","image/webp","image/gif","image/svg+xml"].includes(f.type)){_(c("logo.invalidFile")),s.target.value="";return}const r=new FormData;r.append("file",f),m("/uploads/single",!1,r,"POST",null)};ye(()=>{a?.value&&(v.value.image=a?.value?.data?.path)});const l=()=>{v.value.image=null},i=()=>{if(!v.value.image){_(c("logo.imageRequired"));return}q("handleSubmitFields",v.value),q("handleCloseComponentPopup")};return(s,f)=>(u(),h("div",Dn,[e("h4",jn,d(s.$t("logo.title")),1),e("div",On,[e("input",{type:"file",accept:"image/*",id:"logo_input",hidden:"",onChange:g},null,32),e("label",Fn,[f[2]||(f[2]=e("i",{class:"pi pi-upload"},null,-1)),e("span",null,d(s.$t("logo.upload")),1)])]),b(v).image?(u(),h("div",Ln,[e("img",{src:b(v).image,alt:s.$t("logo.previewAlt"),loading:"lazy",preview:""},null,8,An),e("button",{class:"pi pi-trash delete_btn",onClick:l})])):M("",!0),e("div",Hn,[e("label",Nn,d(s.$t("logo.widthLabel")),1),E(e("input",{id:"logo_width",type:"number","onUpdate:modelValue":f[0]||(f[0]=o=>b(v).width=o),class:"input-wrap",placeholder:s.$t("logo.widthPlaceholder")},null,8,Rn),[[T,b(v).width]])]),e("div",Bn,[e("label",Jn,d(s.$t("logo.heightLabel")),1),E(e("input",{id:"logo_height",type:"number","onUpdate:modelValue":f[1]||(f[1]=o=>b(v).height=o),class:"input-wrap",placeholder:s.$t("logo.heightPlaceholder")},null,8,Qn),[[T,b(v).height]])]),R(s.$slots,"default",{},void 0,!0),e("button",{class:"main-btn",onClick:i},d(s.$t("logo.submit")),1)]))}},Wn=H(Kn,[["__scopeId","data-v-5ac9ce0e"]]),Xn={class:"nav_menu_fields"},Gn={class:"centered"},Yn={class:"input icon_input"},Zn=["onClick"],et={class:"input"},lt=["onUpdate:modelValue","placeholder"],nt={key:0,class:"input"},tt=["onUpdate:modelValue","placeholder"],ot={key:1,class:"input"},it=["onUpdate:modelValue"],st={value:"_self"},rt={value:"_blank"},at={class:"input toggle_input"},dt=["onClick"],ct={key:0,class:"submenu_block"},pt={class:"submenu_block_header"},ut=["onClick"],qt={class:"icon_input input"},mt=["onClick"],bt={class:"input"},ht=["onUpdate:modelValue","placeholder"],ft={class:"input"},vt=["onUpdate:modelValue","placeholder"],kt={key:0,class:"input"},gt=["onUpdate:modelValue"],_t={value:"_self"},wt={value:"_blank"},$t=["onClick"],yt={class:"flex_buttons"},Ct={__name:"MenuFields",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup","openIconPicker"],setup(n,{emit:t}){const{t:c}=A(),{showErrorToast:q}=X(),m=t,a=V({items:[{icon:"",title:"",link:"",target:"_self",hasChilds:!1,children:[{icon:"",title:"",link:"",target:"_self"}]}]}),_=n;F(()=>_.values,o=>{a.value.items=o.items.map(r=>({icon:r.icon??"",title:r.title??"",link:r.link??"",target:r.target??"_self",hasChilds:r.hasChilds??!1,children:r.hasChilds?(r.children??[]).map(x=>({icon:x.icon??"",title:x.title??"",link:x.link??"",target:x.target??"_self"})):[]}))},{immediate:!0});const v=()=>{a.value.items.push({title:"",link:"",target:"_self",hasChilds:!1,children:[]})},$=o=>{a.value.items.length!==1?a.value.items.splice(o,1):q(c("navMenu.menuMinError"))},g=o=>{const r=a.value.items[o];r.hasChilds?(r.children||(r.children=[]),r.link=""):r.children=[{title:"",link:"",target:"_self"}]},l=o=>{a.value.items[o].children.push({title:"",link:"",target:"_self"})},i=(o,r)=>{a.value.items[o].children.splice(r,1)},s=(o=[])=>o.map(r=>{const x={title:r.title};r.icon?.trim()&&(x.icon=r.icon);const w=r.hasChilds&&Array.isArray(r.children)&&r.children.length>0;return r.hasChilds!==void 0&&(x.hasChilds=r.hasChilds),w?(x.children=s(r.children),x):(r.link&&(x.link=r.link,r.target&&(x.target=r.target)),x)}),f=()=>{if(a.value.items.some(r=>{if(!r.title||!r.hasChilds&&!r.link||r.hasChilds&&r.children.some(x=>!x.title||!x.link))return!0})){q(c("navMenu.fillAllError"));return}m("handleSubmitFields",s(a.value.items)),m("handleCloseComponentPopup")};return(o,r)=>{const x=Ce;return u(),h("div",Xn,[e("h4",Gn,d(o.$t("navMenu.title")),1),(u(!0),h(j,null,O(b(a).items,(w,I)=>(u(),h("div",{class:"menu_group",key:I},[e("div",{class:D(["menu_item ",{has_childs:w?.hasChilds}])},[e("div",Yn,[e("label",null,d(o.$t("navMenu.icon")),1),e("button",{class:"icon_select_btn",onClick:S=>m("openIconPicker",w)},[e("i",{class:D(w.icon||"pi pi-stop")},null,2)],8,Zn)]),e("div",et,[e("label",null,d(o.$t("navMenu.titleLabel")),1),E(e("input",{type:"text","onUpdate:modelValue":S=>w.title=S,placeholder:o.$t("navMenu.titlePlaceholder")},null,8,lt),[[T,w.title]])]),w?.hasChilds?M("",!0):(u(),h("div",nt,[e("label",null,d(o.$t("navMenu.linkLabel")),1),E(e("input",{type:"text","onUpdate:modelValue":S=>w.link=S,placeholder:o.$t("navMenu.linkPlaceholder")},null,8,tt),[[T,w.link]])])),w.hasChilds?M("",!0):(u(),h("div",ot,[e("label",null,d(o.$t("navMenu.targetLabel")),1),E(e("select",{"onUpdate:modelValue":S=>w.target=S},[e("option",st,d(o.$t("navMenu.sameTab")),1),e("option",rt,d(o.$t("navMenu.newTab")),1)],8,it),[[ae,w.target]])])),e("div",at,[N(x,{modelValue:w.hasChilds,"onUpdate:modelValue":S=>w.hasChilds=S,onChange:S=>g(I)},null,8,["modelValue","onUpdate:modelValue","onChange"]),e("span",null,d(o.$t("navMenu.hasChilds")),1)]),b(a).items.length>1?(u(),h("button",{key:2,class:"pi pi-trash delete_btn circled",onClick:S=>$(I)},null,8,dt)):M("",!0)],2),w.hasChilds?(u(),h("div",ct,[e("div",pt,[e("h5",null,[ie(d(o.$t("navMenu.subMenuFor"))+" ",1),e("span",null,d(w.title),1)]),e("button",{class:"add_sub_menu",onClick:S=>l(I)},[...r[0]||(r[0]=[e("i",{class:"pi pi-plus"},null,-1)])],8,ut)]),(u(!0),h(j,null,O(w.children,(S,se)=>(u(),h("div",{class:"submenu_item",key:`child-${I}-${se}`},[e("div",qt,[e("label",null,d(o.$t("navMenu.icon")),1),e("button",{class:"icon_select_btn",onClick:B=>m("openIconPicker",S)},[e("i",{class:D(S.icon||"pi pi-stop")},null,2)],8,mt)]),e("div",bt,[e("label",null,d(o.$t("navMenu.subTitleLabel")),1),E(e("input",{type:"text","onUpdate:modelValue":B=>S.title=B,placeholder:o.$t("navMenu.subTitlePlaceholder")},null,8,ht),[[T,S.title]])]),e("div",ft,[e("label",null,d(o.$t("navMenu.subLinkLabel")),1),E(e("input",{type:"text","onUpdate:modelValue":B=>S.link=B,placeholder:o.$t("navMenu.subLinkPlaceholder")},null,8,vt),[[T,S.link]])]),S.hasChilds?M("",!0):(u(),h("div",kt,[e("label",null,d(o.$t("navMenu.subTargetLabel")),1),E(e("select",{"onUpdate:modelValue":B=>S.target=B},[e("option",_t,d(o.$t("navMenu.sameTab")),1),e("option",wt,d(o.$t("navMenu.newTab")),1)],8,gt),[[ae,S.target]])])),w.children.length>1?(u(),h("button",{key:1,class:"pi pi-trash delete_btn circled",onClick:B=>i(I,se)},null,8,$t)):M("",!0)]))),128))])):M("",!0)]))),128)),R(o.$slots,"default",{},void 0,!0),e("div",yt,[e("button",{class:"main-btn reversed",onClick:v},d(o.$t("navMenu.addMenuItem")),1),e("button",{class:"main-btn",onClick:f},d(o.$t("navMenu.submit")),1)])])}}},St=H(Ct,[["__scopeId","data-v-f6d9bc74"]]),Pt={class:"social_links_fields"},Vt={class:"centered"},Et={class:"input icon_input"},xt=["onClick"],Tt={class:"input icon_input"},zt=["onUpdate:modelValue"],Mt={class:"input grow_input"},It=["onUpdate:modelValue","placeholder"],Ut=["onClick"],Dt={class:"flex_buttons"},jt={__name:"SocialFields",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup","openIconPicker"],setup(n,{emit:t}){const{t:c}=A(),{showErrorToast:q}=X(),m=t,a=V([{icon:"",link:"",color:"#000000"}]),_=n;F(()=>_.values,l=>{l&&(a.value=l?.items?.map(i=>({icon:i.icon??"",link:i.link??"",color:i.color??"#000000"}))||[{icon:"",link:"",color:"#000000"}])},{immediate:!0});const v=()=>{a.value.push({icon:"",link:"",color:"#000000"})},$=l=>{a.value.length>1?a.value.splice(l,1):q(c("social.minError"))},g=()=>{if(a.value.some(s=>!s.link.trim())){q(c("social.fillAllError"));return}const i=a.value.map(s=>{const f={link:s.link.trim(),color:s.color??"#000000"};return s.icon?.trim()&&(f.icon=s.icon.trim()),f});m("handleSubmitFields",{items:i}),m("handleCloseComponentPopup")};return(l,i)=>(u(),h("div",Pt,[e("h4",Vt,d(l.$t("social.title")),1),(u(!0),h(j,null,O(b(a),(s,f)=>(u(),h("div",{class:"social_item",key:f},[e("div",Et,[e("label",null,d(l.$t("social.icon")),1),e("button",{type:"button",class:"icon_select_btn",onClick:o=>m("openIconPicker",s)},[e("i",{class:D(s.icon||"pi pi-share-alt"),style:ue({color:s.color+" !important"})},null,6)],8,xt)]),e("div",Tt,[e("label",null,d(l.$t("social.color")),1),E(e("input",{type:"color",name:"color","onUpdate:modelValue":o=>s.color=o},null,8,zt),[[T,s.color]])]),e("div",Mt,[e("label",null,d(l.$t("social.link")),1),E(e("input",{type:"url","onUpdate:modelValue":o=>s.link=o,placeholder:l.$t("social.linkPlaceholder")},null,8,It),[[T,s.link]])]),b(a).length>1?(u(),h("button",{key:0,class:"delete_btn circled",onClick:o=>$(f)},[...i[0]||(i[0]=[e("i",{class:"pi pi-trash"},null,-1)])],8,Ut)):M("",!0)]))),128)),R(l.$slots,"default",{},void 0,!0),e("div",Dt,[e("button",{class:"main-btn reversed",onClick:v},d(l.$t("social.addLink")),1),e("button",{class:"main-btn",onClick:g},d(l.$t("social.submit")),1)])]))}},Ot=H(jt,[["__scopeId","data-v-16f99a21"]]),Ft={class:"tabs_fields"},Lt={class:"centered"},At={class:"item_index"},Ht={class:"tab_header"},Nt={class:"input grow_input"},Rt=["onUpdate:modelValue","placeholder"],Bt=["onClick"],Jt={class:"input full_input"},Qt=["onUpdate:modelValue","placeholder"],Kt={class:"flex_buttons"},Wt={__name:"TabsFields",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup"],setup(n,{emit:t}){const{t:c}=A(),{showErrorToast:q}=X(),m=t,a=V([{title:"",description:""}]),_=n;F(()=>_.values,l=>{l&&(a.value=l?.items?.map(i=>({title:i.title??"",description:i.description??""}))||[{title:"",description:""}])},{immediate:!0});const v=()=>{a.value.push({title:"",description:""})},$=l=>{a.value.length>1?a.value.splice(l,1):q(c("tabs.minError"))},g=()=>{if(a.value.some(i=>!i?.title?.trim()||!i?.description?.trim())){q(c("tabs.fillAllError"));return}m("handleSubmitFields",{items:a.value}),m("handleCloseComponentPopup")};return(l,i)=>(u(),h("div",Ft,[e("h4",Lt,d(l.$t("tabs.title")),1),(u(!0),h(j,null,O(b(a),(s,f)=>(u(),h("div",{class:"tab_item",key:f},[e("div",At,[ie(d(l.$t("tabs.tab"))+" ",1),e("span",null,"# "+d(f+1),1)]),e("div",Ht,[e("div",Nt,[e("label",null,d(l.$t("tabs.tabTitle")),1),E(e("input",{type:"text","onUpdate:modelValue":o=>s.title=o,placeholder:l.$t("tabs.tabTitlePlaceholder")},null,8,Rt),[[T,s.title]])]),b(a).length>1?(u(),h("button",{key:0,class:"delete_btn circled",onClick:o=>$(f)},[...i[0]||(i[0]=[e("i",{class:"pi pi-trash"},null,-1)])],8,Bt)):M("",!0)]),e("div",Jt,[e("label",null,d(l.$t("tabs.tabDescription")),1),E(e("textarea",{rows:"4","onUpdate:modelValue":o=>s.description=o,placeholder:l.$t("tabs.tabDescriptionPlaceholder")},null,8,Qt),[[T,s.description]])])]))),128)),R(l.$slots,"default",{},void 0,!0),e("div",Kt,[e("button",{class:"main-btn reversed",onClick:v},d(l.$t("tabs.addTab")),1),e("button",{class:"main-btn",onClick:g},d(l.$t("tabs.submit")),1)])]))}},Xt=H(Wt,[["__scopeId","data-v-506fc86a"]]),Gt={class:"timeline_fields"},Yt={class:"centered"},Zt={class:"item_index"},eo={class:"inputs"},lo={class:"input icon_input"},no=["onClick"],to={class:"input"},oo={class:"input grow_input"},io=["onUpdate:modelValue","placeholder"],so=["onClick"],ro={class:"input full_input"},ao=["onUpdate:modelValue","placeholder"],co={class:"flex_buttons"},po={__name:"TimelineFields",props:{values:Object},emits:["handleSubmitFields","handleCloseComponentPopup","openIconPicker"],setup(n,{emit:t}){const{t:c}=A(),{showErrorToast:q}=X(),m=t,a=V([{date:"",icon:"",title:"",description:"",classes:""}]),_=n;F(()=>_.values,l=>{l&&(a.value=l?.items?.map(i=>({date:i.date?new Date(i.date).toLocaleDateString():"",icon:i.icon??"",title:i.title??"",description:i.description??"",classes:i.classes??""}))||[{date:"",icon:"",title:"",description:"",classes:""}])},{immediate:!0});const v=()=>{a.value.push({date:"",icon:"",title:"",description:"",classes:""})},$=l=>{a.value.length>1?a.value.splice(l,1):q(c("timeline.minError"))},g=()=>{if(a.value.some(s=>!s.date||!s.title.trim()||!s.description.trim())){q(c("timeline.fillAllError"));return}const i=a.value.map(s=>{const f={date:s.date,title:s.title.trim(),description:s.description.trim(),classes:s.classes??""};return s.icon?.trim()&&(f.icon=s.icon.trim()),f});m("handleSubmitFields",{items:i}),m("handleCloseComponentPopup")};return(l,i)=>{const s=Ze;return u(),h("div",Gt,[e("h4",Yt,d(l.$t("timeline.title")),1),(u(!0),h(j,null,O(b(a),(f,o)=>(u(),h("div",{class:"timeline_item",key:o},[e("h6",Zt,[ie(d(l.$t("timeline.item"))+" ",1),e("span",null,"#"+d(o+1),1)]),e("div",eo,[e("div",lo,[e("label",null,d(l.$t("timeline.icon")),1),e("button",{class:"icon_select_btn",onClick:r=>m("openIconPicker",f)},[e("i",{class:D(f.icon||"pi pi-circle")},null,2)],8,no)]),e("div",to,[e("label",null,d(l.$t("timeline.date")),1),N(s,{modelValue:f.date,"onUpdate:modelValue":r=>f.date=r},null,8,["modelValue","onUpdate:modelValue"])]),e("div",oo,[e("label",null,d(l.$t("timeline.titleField")),1),E(e("input",{type:"text","onUpdate:modelValue":r=>f.title=r,placeholder:l.$t("timeline.titlePlaceholder")},null,8,io),[[T,f.title]])])]),b(a).length>1?(u(),h("button",{key:0,class:"delete_btn circled",onClick:r=>$(o)},[...i[0]||(i[0]=[e("i",{class:"pi pi-trash"},null,-1)])],8,so)):M("",!0),e("div",ro,[e("label",null,d(l.$t("timeline.description")),1),E(e("textarea",{rows:"3","onUpdate:modelValue":r=>f.description=r,placeholder:l.$t("timeline.descriptionPlaceholder")},null,8,ao),[[T,f.description]])])]))),128)),R(l.$slots,"default",{},void 0,!0),e("div",co,[e("button",{class:"main-btn reversed",onClick:v},d(l.$t("timeline.addItem")),1),e("button",{class:"main-btn",onClick:g},d(l.$t("timeline.submit")),1)])])}}},uo=H(po,[["__scopeId","data-v-670f25f1"]]),qo={class:"popup"},mo={__name:"ComponentPopup",props:{componentData:Object},emits:["handleAddComponentContent","handleCloseComponentPopup"],setup(n,{emit:t}){const c=n,q=V(""),m=t,a={"card-slider":wn,"nav-menu":St,"custom-html":Un,logo:Wn,buttons:nn,accordion:Fl,timeline:uo,"social-media":Ot,tabs:Xt},_=V(!1),v=V(null),$=i=>{v.value=i,_.value=!0},g=i=>{v.value.icon=i};F(()=>c.componentData?.values,i=>{q.value=i?.customClasses??""},{immediate:!0});const l=i=>{m("handleAddComponentContent",{sectionID:c.componentData.sectionID,type:c.componentData.type,content:{...i,customClasses:q.value}})};return(i,s)=>{const f=gl,o=Vl;return u(),h("div",qo,[e("div",{class:D(["content ",{max_width:c.componentData.type.toLowerCase().replace(/\s+/g,"-")==="custom-html"}])},[e("button",{class:"pi pi-times close_btn",onClick:s[0]||(s[0]=r=>i.$emit("handleCloseComponentPopup"))}),(u(),ee(Re(a[c.componentData.type.toLowerCase().replace(/\s+/g,"-")]),{values:n.componentData?.values,onHandleCloseComponentPopup:s[2]||(s[2]=r=>m("handleCloseComponentPopup")),onOpenIconPicker:$,onHandleSubmitFields:l},{default:Ne(()=>[N(f,{modelValue:b(q),"onUpdate:modelValue":s[1]||(s[1]=r=>pe(q)?q.value=r:null),id:"custom_classes",label:"CSS Classes",placeholder:"e.g. rounded-lg shadow-md text-center"},null,8,["modelValue"])]),_:1},40,["values"])),N(o,{modelValue:b(_),"onUpdate:modelValue":s[3]||(s[3]=r=>pe(_)?_.value=r:null),onSelect:g},null,8,["modelValue"])],2)])}}},bo={key:0,class:"side_bar"},ho={class:"header_image"},fo={class:"image"},vo=["alt"],ko={class:"project_content"},go={class:"pages flex_content"},_o={class:"image"},wo=["src"],$o=["title"],yo={class:"pages flex_content"},Co=["onClick"],So={class:"section_header"},Po={class:"buttons"},Vo=["onClick"],Eo=["onClick"],xo=["onClick"],To=["onDrop"],zo=["onDragstart","onDrop"],Mo={class:"component_block"},Io={class:"component_buttons"},Uo=["title","onClick"],Do=["title","onClick"],jo=["onMousedown"],Oo={key:0,class:"section_component empty_placeholder"},Fo=["title"],Lo=["disabled"],Ao={__name:"index",setup(n){const{t}=A();Be();const c=Je(),{getMethod:q,getResult:m,submitMethod:a,showErrorToast:_}=le(),v=Qe({}),$=(k,p)=>{const y=v[k];y&&y.toggle(p)},g=k=>{const p=l.value.find(y=>y._id===k);return p?[{label:p.visible?t("projectEditor.menu.hide"):t("projectEditor.menu.show"),icon:p.visible?"pi pi-eye-slash":"pi pi-eye",command:()=>se(k)},{label:t("projectEditor.menu.edit"),icon:"pi pi-pencil",command:()=>B(k)}]:[]},l=V([]),i=V(),s=ce(()=>l.value.find(k=>k._id===i.value)),f=V(null),o=V(!1),r=k=>{if(f.value){const p=s.value.sections.find(y=>y.id===f.value.id);p&&(p.name=k.name,p.visible=k.visible,p.layout_items=k.layout_items,p.components=k.components)}else s.value.sections.push({id:s.value.sections.length+1,...k});o.value=!1,f.value=null},x=k=>{f.value=k,o.value=!0},w=V(),I=V(!1),S=k=>{if(w.value){const p=l.value.find(y=>y._id===w.value._id);p&&(p.name=k.name)}else{const p={_id:(l.value.length+1).toString(),name:k.name,visible:!0,sections:[]};l.value.push(p),i.value=p._id}I.value=!1,w.value=null},se=k=>{const p=l?.value?.find(y=>y._id===k);p.visible=!p.visible},B=k=>{I.value=!0;const p=l?.value?.find(y=>y._id==k);w.value=p},Q=V(null),Pe=({item:k,index:p,event:y})=>{Q.value={component:k,fromSidebar:!0},y.dataTransfer.effectAllowed="copy",y.dataTransfer.setData("text/plain","dragging")},Ve=k=>{Q.value=null},Ee=(k,p,y,U)=>{Q.value={component:p,fromSection:k,index:y},U.dataTransfer.effectAllowed="move",U.dataTransfer.setData("text/plain","dragging")},me=(k,p)=>{if(!Q.value)return;const{component:y,fromSidebar:U,fromSection:W}=Q.value,de=p.currentTarget.closest(".section_content"),ne=Array.from(de.querySelectorAll(".section_component")).filter(L=>!L.classList.contains("empty_placeholder"));let Y=ne.length;for(let L=0;L<ne.length;L++){const Z=ne[L].getBoundingClientRect();if(p.clientX<Z.left+Z.width/2){Y=L;break}}if(U){const L={...y,id:Date.now(),width:30};k.components.splice(Y,0,L)}else{const L=W.components,Z=k.components,C=L.findIndex(J=>J._id===y._id);if(C===-1)return;const[z]=L.splice(C,1);let te=Y;W.id===k.id&&Y>C&&(te-=1),Z.splice(te,0,z)}Q.value=null};let K=null,be=0,he=0,fe=0;const xe=(k,p,y)=>{K=p,be=y.clientX;const U=y.target.closest(".section_component");if(!U)return;const W=U.parentElement;W&&(he=U.offsetWidth,fe=W.offsetWidth,window.addEventListener("mousemove",ve),window.addEventListener("mouseup",ke),y.preventDefault())},ve=k=>{if(!K)return;const p=k.clientX-be;let y=(he+p)/fe*100;y=Math.max(5,Math.min(100,y)),K.content||(K.content={});let U=K.content.customClasses||"";U=U.replace(/w-\[\d+%?\]/g,"").trim(),K.content.customClasses=`${U} w-[${Math.floor(y)}%]`.trim()},ke=()=>{K=null,window.removeEventListener("mousemove",ve),window.removeEventListener("mouseup",ke)},G=V({}),Te=(k,p)=>{k.components.splice(p,1)},ze=(k,p,y)=>{G.value.sectionID=k,G.value.type=p,G.value.values=y},Me=k=>{const p=s?.value.sections.find(U=>U.id==k.sectionID);if(!p)return _(t("projectEditor.errors.sectionNotFound"));const y=p.components.find(U=>U.type===k.type);if(!y)return _(t("projectEditor.errors.componentNotFound"));y.content=k.content},ge=V({});F(()=>m?.value,k=>{k&&(l.value=k.data.pages,i.value=k.data.pages[0]?._id,k.data.pages.forEach(p=>{ge.value[p._id]=JSON.parse(JSON.stringify(p))}))},{immediate:!0});const Ie=ce(()=>{if(!s.value)return!1;const k=s.value._id,p=ge.value[k];return p?JSON.stringify(s.value)!=JSON.stringify(p):!1}),Ue=()=>{if(!s?.value?.sections?.length){_(t("projectEditor.errors.pageContentRequired"));return}const k=m?.value?s.value?._id:"",p=k?`/projects/${c.params.id}/pages/${k}`:`/projects/${c.params.id}/pages`,y=m?.value&&k?"PATCH":"POST";a(p,!1,s?.value,y,""),originalPage.value=JSON.parse(JSON.stringify(s.value))};return F(()=>m?.value,k=>{k&&(l.value=k?.data?.pages,i.value=k?.data?.pages[0]?._id)}),qe(()=>{q(`/projects/${c.params.id}`,null,!0,!1)}),(k,p)=>{const y=il,U=We,W=ll,de=el,ne=Xe,Y=cl,L=bl,Z=mo;return u(),h("div",{class:"project_page page",style:ue(b(l).length===0?"margin: 0":"")},[b(l).length?(u(),h("div",bo,[e("div",ho,[e("div",fo,[e("img",{src:Ke,alt:b(t)("projectEditor.alts.logo"),loading:"lazy"},null,8,vo)])]),p[7]||(p[7]=e("hr",null,null,-1)),N(y,{onDragStart:Pe,onDragEnd:Ve})])):M("",!0),e("div",ko,[e("div",go,[e("div",_o,[e("img",{src:b(s)?.logo,alt:"logo_image",loading:"lazy"},null,8,wo)]),e("button",{class:"add_page gradient_background",onClick:p[0]||(p[0]=C=>I.value=!0),title:b(t)("projectEditor.addPage")},[p[8]||(p[8]=e("i",{class:"pi pi-plus"},null,-1)),ie(" "+d(b(t)("projectEditor.addNewPage")),1)],8,$o),N(U)]),e("div",yo,[(u(!0),h(j,null,O(b(l),C=>(u(),h("div",{key:C,class:D(["page_item",{active:b(i)===C?._id,hidden_element:!C.visible}]),onClick:z=>i.value=C?._id},[e("span",null,d(C?.name),1),C==b(s)?(u(),ee(W,{key:0,type:"button",icon:"pi pi-ellipsis-v",onClick:re(z=>$(C._id,z),["stop"]),"aria-haspopup":"true","aria-controls":`menu_${C._id}`},null,8,["onClick","aria-controls"])):M("",!0),N(de,{ref_for:!0,ref:z=>b(v)[C._id]=z,id:`menu_${C._id}`,model:g(C._id),popup:!0},null,8,["id","model"])],10,Co))),128))])]),p[12]||(p[12]=e("hr",null,null,-1)),e("div",{class:D(["project_sections ",{"justify-center":!b(l).length}])},[(u(!0),h(j,null,O(b(s)?.sections,C=>(u(),h("div",{key:C.id,class:D(["section ",{hidden_element:!C.visible}])},[e("div",So,[e("h3",null,d(C.name),1),e("div",Po,[e("button",{onClick:z=>x(C),class:"section_control pi pi-pen-to-square"},null,8,Vo),e("button",{onClick:z=>b(s).sections.splice(b(s).sections.indexOf(C),1),class:"section_control pi pi-trash"},null,8,Eo),e("button",{onClick:z=>C.visible=!C.visible,class:D(["section_control pi",`pi-eye${C.visible?"":"-slash"}`])},null,10,xo)])]),e("div",{class:"section_content flex flex-row w-full",onDragover:p[2]||(p[2]=re(()=>{},["prevent"])),onDrop:z=>me(C,z)},[(u(!0),h(j,null,O(C.components,(z,te)=>(u(),h("div",{key:z.id,class:D(["section_component flex-shrink-0 relative",z?.content?.customClasses]),style:ue({width:z?.content?.customClasses.match(/w-\[(.*?)\]/)?.[1]}),draggable:"true",onDragstart:J=>Ee(C,z,te,J),onDragover:p[1]||(p[1]=re(()=>{},["prevent"])),onDrop:J=>me(C,J)},[e("div",Mo,[e("span",null,d(z.type),1)]),e("div",Io,[e("small",null,d(z?.content?.customClasses),1),e("button",{class:"edit_component",title:b(t)("projectEditor.buttons.editComponent"),onClick:J=>ze(C.id,z.type,z.content)},[...p[9]||(p[9]=[e("i",{class:"pi pi-pen-to-square"},null,-1)])],8,Uo),e("button",{class:"remove_component",title:b(t)("projectEditor.buttons.removeComponent"),onClick:J=>Te(C,te)},[...p[10]||(p[10]=[e("i",{class:"pi pi-trash"},null,-1)])],8,Do)]),e("div",{class:"resize_handle",onMousedown:re(J=>xe(C,z,J),["prevent"])},null,40,jo)],46,zo))),128)),b(Q)&&b(Q).fromSection!==C?(u(),h("div",Oo,d(b(t)("projectEditor.placeholders.dropHere")),1)):M("",!0)],40,To)],2))),128)),b(l).length?(u(),h("div",{key:0,class:"section add_section",title:b(t)("projectEditor.addSection"),onClick:p[3]||(p[3]=C=>o.value=!0)},[p[11]||(p[11]=e("i",{class:"pi pi-plus"},null,-1)),e("span",null,d(b(t)("projectEditor.addSection")),1)],8,Fo)):(u(),ee(ne,{key:1}))],2),e("button",{class:"main-btn",disabled:!b(Ie),onClick:Ue},d(b(t)("projectEditor.save")),9,Lo),b(o)?(u(),ee(Y,{key:1,modifiedSection:b(f),onHandleShowControlSectionPopup:p[4]||(p[4]=C=>o.value=!1),onHandleSectionPopup:r},null,8,["modifiedSection"])):M("",!0),b(I)?(u(),ee(L,{key:2,modifiedPage:b(w),onHandleShowControlPagePopup:p[5]||(p[5]=C=>I.value=!1),onHandleControlPage:S},null,8,["modifiedPage"])):M("",!0),b(G).type?(u(),ee(Z,{key:3,componentData:b(G),onHandleCloseComponentPopup:p[6]||(p[6]=C=>G.value={}),onHandleAddComponentContent:Me},null,8,["componentData"])):M("",!0)],4)}}},di=H(Ao,[["__scopeId","data-v-e6fdfbb9"]]);export{di as default};
