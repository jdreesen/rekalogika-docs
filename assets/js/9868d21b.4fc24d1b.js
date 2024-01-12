"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[4691],{9794:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(5893),a=t(1151);const o={title:"Architecture"},s=void 0,i={id:"mapper/architecture",title:"Architecture",description:"This chapter describes the architecture of the library.",source:"@site/docs/mapper/02-architecture.md",sourceDirName:"mapper",slug:"/mapper/architecture",permalink:"/mapper/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/mapper/02-architecture.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Architecture"},sidebar:"docs",previous:{title:"Basic Usage",permalink:"/mapper/usage"},next:{title:"Creating a Custom Transformer",permalink:"/mapper/creating-transformer"}},c={},p=[{value:"Components",id:"components",level:2},{value:"Transformers",id:"transformers",level:3},{value:"Main Transformer",id:"main-transformer",level:3},{value:"Mapping Table Factory",id:"mapping-table-factory",level:3},{value:"Mapper",id:"mapper",level:3},{value:"Symfony Property Info",id:"symfony-property-info",level:3},{value:"Symfony Property Access",id:"symfony-property-access",level:3}];function h(e){const r={code:"code",h2:"h2",h3:"h3",p:"p",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"This chapter describes the architecture of the library."}),"\n",(0,n.jsx)(r.h2,{id:"components",children:"Components"}),"\n",(0,n.jsx)(r.h3,{id:"transformers",children:"Transformers"}),"\n",(0,n.jsx)(r.p,{children:"Transforms a source variable to the target variable. A transformer class\nprovides the list of the supported source to target mappings, as well as\nthe logic for transforming the source to the target."}),"\n",(0,n.jsx)(r.h3,{id:"main-transformer",children:"Main Transformer"}),"\n",(0,n.jsx)(r.p,{children:"The main transformer is the entry point of the library. It is responsible\nfor finding the transformer that supports the source to target mapping,\nand transforming the source to the target using that transformer."}),"\n",(0,n.jsx)(r.h3,{id:"mapping-table-factory",children:"Mapping Table Factory"}),"\n",(0,n.jsx)(r.p,{children:"Creates the mapping table from the list of the transformers."}),"\n",(0,n.jsx)(r.p,{children:"The mapping table is a list of the supported source to target type, mapped to\nthe transformer suitable for the task. It is used by the main transformer to\nfind the correct transformer for transforming the source to the target type."}),"\n",(0,n.jsx)(r.h3,{id:"mapper",children:"Mapper"}),"\n",(0,n.jsx)(r.p,{children:"A fa\xe7ade for the main transformer. A user-facing interface that is used directly\nby the caller."}),"\n",(0,n.jsx)(r.h3,{id:"symfony-property-info",children:"Symfony Property Info"}),"\n",(0,n.jsxs)(r.p,{children:["The library uses the Symfony Property Info component to list the properties of\nthe source and target variables, and to query their types. This library uses\nthe ",(0,n.jsx)(r.code,{children:"Type"})," objects returned by the Symfony Property Info component as the\nmeans of describing the types of the source and target variables."]}),"\n",(0,n.jsx)(r.h3,{id:"symfony-property-access",children:"Symfony Property Access"}),"\n",(0,n.jsx)(r.p,{children:"The library uses the Symfony Property Access component to read from and write to\nthe source and target variables. It is used by the main transformer and the"})]})}function l(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>s});var n=t(7294);const a={},o=n.createContext(a);function s(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);