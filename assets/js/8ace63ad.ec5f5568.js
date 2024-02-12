"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[8275],{5801:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var a=t(5893),n=t(1151),s=t(4996),o=t(9965);t(7294);function i(e){let{children:r,type:t}=e;return t=t||"primary",t=`badge badge--${t}`,(0,a.jsx)("span",{class:t,children:r})}const c={title:"Architecture"},p=void 0,l={id:"mapper/architecture",title:"Architecture",description:"This chapter describes the architecture of the library.",source:"@site/docs/mapper/10-architecture.md",sourceDirName:"mapper",slug:"/mapper/architecture",permalink:"/mapper/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/mapper/10-architecture.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Architecture"},sidebar:"docs",previous:{title:"Manual Mapping using a Class Factory Method",permalink:"/mapper/class-factory-mapper"},next:{title:"Mapping Table",permalink:"/mapper/mapping-table"}},d={},h=[{value:"Main Components",id:"main-components",level:2},{value:"Mapper Factory",id:"mapper-factory",level:3},{value:"Mapper",id:"mapper",level:3},{value:"Main Transformer",id:"main-transformer",level:3},{value:"Transformer Registry <Badge>Internal</Badge>",id:"transformer-registry-internal",level:3},{value:"Object Cache Factory <Badge>Internal</Badge>",id:"object-cache-factory-internal",level:3},{value:"Mapping Factory <Badge>Internal</Badge>",id:"mapping-factory-internal",level:3},{value:"Transformer",id:"transformer",level:3},{value:"Components Used by Transformers",id:"components-used-by-transformers",level:2},{value:"Object to Object Metadata Factory <Badge>Internal</Badge>",id:"object-to-object-metadata-factory-internal",level:3},{value:"Symfony Property Info <Badge>Third-party</Badge>",id:"symfony-property-info-third-party",level:3},{value:"Property Mapper",id:"property-mapper",level:3},{value:"Property Mapper Resolver <Badge>Internal</Badge>",id:"property-mapper-resolver-internal",level:3},{value:"Eager Properties Resolver",id:"eager-properties-resolver",level:3},{value:"Proxy Registry <Badge>Internal</Badge>",id:"proxy-registry-internal",level:3},{value:"Proxy Generator",id:"proxy-generator",level:3},{value:"Array Like Metadata Factory <Badge>Internal</Badge>",id:"array-like-metadata-factory-internal",level:3},{value:"Object Mapper",id:"object-mapper",level:3},{value:"Object Mapper Resolver <Badge>Internal</Badge>",id:"object-mapper-resolver-internal",level:3},{value:"Object Mapper Table Factory <Badge>Internal</Badge>",id:"object-mapper-table-factory-internal",level:3},{value:"Symfony Serializer <Badge>Third-party</Badge>",id:"symfony-serializer-third-party",level:3},{value:"SubMapper Factory <Badge>Internal</Badge>",id:"submapper-factory-internal",level:3},{value:"Symfony PropertyAccess <Badge>Third-party</Badge>",id:"symfony-propertyaccess-third-party",level:3}];function y(e){const r={code:"code",h2:"h2",h3:"h3",p:"p",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"This chapter describes the architecture of the library."}),"\n",(0,a.jsx)(o.Z,{alt:"File classes",sources:{light:(0,s.Z)("/diagrams/light/mapper.svg"),dark:(0,s.Z)("/diagrams/dark/mapper.svg")},width:"100%"}),"\n",(0,a.jsx)(r.h2,{id:"main-components",children:"Main Components"}),"\n",(0,a.jsx)(r.h3,{id:"mapper-factory",children:"Mapper Factory"}),"\n",(0,a.jsx)(r.p,{children:"Creates the mapper service. Only used in non-framework usage."}),"\n",(0,a.jsx)(r.h3,{id:"mapper",children:"Mapper"}),"\n",(0,a.jsx)(r.p,{children:"A fa\xe7ade for the entire mapping framework. A user-facing interface that is used\ndirectly by the caller. It provides a convenient, typed interface, for the\ncaller, and forwards the call to the main transformer."}),"\n",(0,a.jsx)(r.h3,{id:"main-transformer",children:"Main Transformer"}),"\n",(0,a.jsx)(r.p,{children:"The main transformer is the entry point of the library. It is responsible\nfor finding the transformer that supports the source to target mapping,\nand forwards the task to that transformer."}),"\n",(0,a.jsxs)(r.h3,{id:"transformer-registry-internal",children:["Transformer Registry ",(0,a.jsx)(i,{type:"danger",children:"Internal"})]}),"\n",(0,a.jsx)(r.p,{children:"A registry of the transformers. It is used by the main transformer to find\nthe matching transformer for the specific source and target types."}),"\n",(0,a.jsxs)(r.h3,{id:"object-cache-factory-internal",children:["Object Cache Factory ",(0,a.jsx)(i,{type:"danger",children:"Internal"})]}),"\n",(0,a.jsx)(r.p,{children:"An object cache stores the objects that have been mapped, keyed by the source\nobject and the target type. This is used to handle circular references. The\nobject cache factory creates such object caches."}),"\n",(0,a.jsxs)(r.h3,{id:"mapping-factory-internal",children:["Mapping Factory ",(0,a.jsx)(i,{type:"danger",children:"Internal"})]}),"\n",(0,a.jsx)(r.p,{children:"Creates the mapping table from the list of the transformers."}),"\n",(0,a.jsxs)(r.p,{children:["The mapping table is a list of the supported source to target type, mapped to\nthe transformer suitable for the task. It is used by ",(0,a.jsx)(r.code,{children:"TransformerRegistry"})," to\nfind the correct transformer for transforming the source to the target type."]}),"\n",(0,a.jsx)(r.h3,{id:"transformer",children:"Transformer"}),"\n",(0,a.jsx)(r.p,{children:"Transforms a source variable to the target variable. A transformer class\nprovides the list of the supported source to target mappings, as well as\nthe logic for transforming the source to the target."}),"\n",(0,a.jsx)(r.h2,{id:"components-used-by-transformers",children:"Components Used by Transformers"}),"\n",(0,a.jsxs)(r.h3,{id:"object-to-object-metadata-factory-internal",children:["Object to Object Metadata Factory ",(0,a.jsx)(i,{type:"danger",children:"Internal"})]}),"\n",(0,a.jsxs)(r.p,{children:["Creates the metadata for ",(0,a.jsx)(r.code,{children:"ObjectToObjectTransformer"}),". The metadata provides all\nthe information it needs to do the mapping between two objects."]}),"\n",(0,a.jsxs)(r.h3,{id:"symfony-property-info-third-party",children:["Symfony Property Info ",(0,a.jsx)(i,{type:"info",children:"Third-party"})]}),"\n",(0,a.jsxs)(r.p,{children:["The library uses the Symfony Property Info component to list the properties of\nthe source and target variables, and to query their types. This library uses\nthe ",(0,a.jsx)(r.code,{children:"Type"})," objects returned by the Symfony Property Info component as the\nmeans of describing the types of the source and target variables."]}),"\n",(0,a.jsx)(r.h3,{id:"property-mapper",children:"Property Mapper"}),"\n",(0,a.jsx)(r.p,{children:"A custom, user-provided method that maps a single property from the source to\nthe target."}),"\n",(0,a.jsxs)(r.h3,{id:"property-mapper-resolver-internal",children:["Property Mapper Resolver ",(0,a.jsx)(i,{type:"danger",children:"Internal"})]}),"\n",(0,a.jsx)(r.p,{children:"Used to determine if a property mapper is available for a specific source and\ntarget property pair."}),"\n",(0,a.jsx)(r.h3,{id:"eager-properties-resolver",children:"Eager Properties Resolver"}),"\n",(0,a.jsx)(r.p,{children:"Inspect a class and determine the properties that can be mapped eagerly, without\ntriggering the hydration of the object. As such, this is only applicable to\nsource objects that are proxy, like Doctrine proxies. The user may create a new\nimplementation for determining the eager properties of a specific class."}),"\n",(0,a.jsxs)(r.h3,{id:"proxy-registry-internal",children:["Proxy Registry ",(0,a.jsx)(i,{type:"danger",children:"Internal"})]}),"\n",(0,a.jsx)(r.p,{children:"Register a proxy class, and save it to the filesystem."}),"\n",(0,a.jsx)(r.h3,{id:"proxy-generator",children:"Proxy Generator"}),"\n",(0,a.jsx)(r.p,{children:"Generates the source code of a proxy class."}),"\n",(0,a.jsxs)(r.p,{children:["The user may decorate ",(0,a.jsx)(r.code,{children:"ProxyGeneratorInterface"})," and throw\n",(0,a.jsx)(r.code,{children:"ProxyNotSupportedException"})," to disable proxying for a specific target class."]}),"\n",(0,a.jsxs)(r.h3,{id:"array-like-metadata-factory-internal",children:["Array Like Metadata Factory ",(0,a.jsx)(i,{type:"danger",children:"Internal"})]}),"\n",(0,a.jsxs)(r.p,{children:["Creates the metadata for ",(0,a.jsx)(r.code,{children:"TraversableToArrayAccessTransformer"})," and\n",(0,a.jsx)(r.code,{children:"TraversableToTraversableTransformer"}),". The metadata provides all the information\nit needs to do the mapping between two arrays or array-like objects."]}),"\n",(0,a.jsx)(r.h3,{id:"object-mapper",children:"Object Mapper"}),"\n",(0,a.jsx)(r.p,{children:"A custom, user-provided methods for mapping a specific object pair."}),"\n",(0,a.jsxs)(r.h3,{id:"object-mapper-resolver-internal",children:["Object Mapper Resolver ",(0,a.jsx)(i,{type:"danger",children:"Internal"})]}),"\n",(0,a.jsx)(r.p,{children:"Obtains an object mapper for a specific source and target object pair."}),"\n",(0,a.jsxs)(r.h3,{id:"object-mapper-table-factory-internal",children:["Object Mapper Table Factory ",(0,a.jsx)(i,{type:"danger",children:"Internal"})]}),"\n",(0,a.jsx)(r.p,{children:"Constructs the object mapper table from all the available object mappers in the\nsystem."}),"\n",(0,a.jsxs)(r.h3,{id:"symfony-serializer-third-party",children:["Symfony Serializer ",(0,a.jsx)(i,{type:"info",children:"Third-party"})]}),"\n",(0,a.jsx)(r.p,{children:"Transforms objects to arrays and back."}),"\n",(0,a.jsxs)(r.h3,{id:"submapper-factory-internal",children:["SubMapper Factory ",(0,a.jsx)(i,{type:"danger",children:"Internal"})]}),"\n",(0,a.jsxs)(r.p,{children:["Creates a ",(0,a.jsx)(r.code,{children:"SubMapper"})," instance."]}),"\n",(0,a.jsxs)(r.h3,{id:"symfony-propertyaccess-third-party",children:["Symfony PropertyAccess ",(0,a.jsx)(i,{type:"info",children:"Third-party"})]}),"\n",(0,a.jsx)(r.p,{children:"Reads and writes the properties of an object."})]})}function m(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(y,{...e})}):y(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>o});var a=t(7294);const n={},s=a.createContext(n);function o(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);