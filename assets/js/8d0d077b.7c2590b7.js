"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[5363],{518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var a=n(5893),r=n(1151);const s={title:"Debugging the Mapper"},i=void 0,p={id:"mapper/debugging",title:"Debugging the Mapper",description:"Get the List of Transformers",source:"@site/docs/mapper/05-debugging.md",sourceDirName:"mapper",slug:"/mapper/debugging",permalink:"/mapper/debugging",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/mapper/05-debugging.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Debugging the Mapper"},sidebar:"docs",previous:{title:"Manual Mapping using a Class Method",permalink:"/mapper/method-mapper"},next:{title:"rekalogika/psr-16-simple-cache-bundle",permalink:"/psr-16-simple-cache-bundle/"}},o={},l=[{value:"Get the List of Transformers",id:"get-the-list-of-transformers",level:2},{value:"Dump the Mapping Table",id:"dump-the-mapping-table",level:2},{value:"Get the Mapping Result Between a Source and Target Type",id:"get-the-mapping-result-between-a-source-and-target-type",level:2}];function c(e){const t={code:"code",h2:"h2",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"get-the-list-of-transformers",children:"Get the List of Transformers"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"php bin/console debug:container --tag=rekalogika.mapper.transformer\n"})}),"\n",(0,a.jsx)(t.h2,{id:"dump-the-mapping-table",children:"Dump the Mapping Table"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"php bin/console rekalogika:mapper:mapping\n"})}),"\n",(0,a.jsx)(t.h2,{id:"get-the-mapping-result-between-a-source-and-target-type",children:"Get the Mapping Result Between a Source and Target Type"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"php bin/console rekalogika:mapper:try 'App\\Entity\\Book' 'App\\Entity\\BookDto'\n"})})]})}function g(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>p,a:()=>i});var a=n(7294);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);