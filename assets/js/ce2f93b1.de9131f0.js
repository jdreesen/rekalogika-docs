"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const o={title:"Replicating Metadata in Entities"},r=void 0,l={unversionedId:"file-bundle/replicating-metadata-in-entities",id:"file-bundle/replicating-metadata-in-entities",title:"Replicating Metadata in Entities",description:"This chapter describes how to replicate file metadata in your entities.",source:"@site/docs/file-bundle/12-replicating-metadata-in-entities.md",sourceDirName:"file-bundle",slug:"/file-bundle/replicating-metadata-in-entities",permalink:"/file-bundle/replicating-metadata-in-entities",draft:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/file-bundle/12-replicating-metadata-in-entities.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Replicating Metadata in Entities"},sidebar:"docs",previous:{title:"Translation",permalink:"/file-bundle/translation"},next:{title:"Implementing Collection of Files",permalink:"/file-bundle/collection"}},s={},c=[{value:"Objective",id:"objective",level:2},{value:"Execution",id:"execution",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This chapter describes how to replicate file metadata in your entities."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This feature is only nominally tested.")),(0,a.kt)("h2",{id:"objective"},"Objective"),(0,a.kt)("p",null,"This framework gives you the convenience of requiring only a single property to\nassociate a file with an entity. However, there are cases where it can be useful\nto have the file's metadata stored in the entity. For example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To optimize performance together with our lazy-loading feature, especially\nwhen you are dealing with a lot of entities and/or files."),(0,a.kt)("li",{parentName:"ul"},"You need to use the database to index, search, or sort the files based on\ntheir metadata.")),(0,a.kt)("p",null,"Using the method described in this chapter, you will be able to accomplish that\nby replicating the files' metadata in your entities and does not require you\nto change the way you work with files."),(0,a.kt)("h2",{id:"execution"},"Execution"),(0,a.kt)("admonition",{title:"Preparation",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You need to install the package ",(0,a.kt)("inlineCode",{parentName:"p"},"rekalogika/file-association-entity")," to use this\nfeature:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"composer require rekalogika/file-association-entity\n"))),(0,a.kt)("p",null,"In short, you need to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add a property with ",(0,a.kt)("inlineCode",{parentName:"li"},"EmbeddedMetadata")," type. This is a Doctrine embeddable\nthat implements ",(0,a.kt)("inlineCode",{parentName:"li"},"RawMetadataInterface")," we will be using to store the file's\nmetadata."),(0,a.kt)("li",{parentName:"ol"},"Modify the getter of the file property so that it returns a decorated\nversion of the ",(0,a.kt)("inlineCode",{parentName:"li"},"FileInterface")," that will use our ",(0,a.kt)("inlineCode",{parentName:"li"},"EmbeddedMetadata")," in #1."),(0,a.kt)("li",{parentName:"ol"},"Modify the setter of the file property so it will copy the metadata of a new\nfile to our ",(0,a.kt)("inlineCode",{parentName:"li"},"EmbeddedMetadata")," in #1.")),(0,a.kt)("p",null,"If your original entity looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use Doctrine\\ORM\\Mapping\\Entity;\nuse Rekalogika\\Contracts\\File\\FileInterface;\nuse Rekalogika\\File\\Association\\Attribute\\WithFileAssociation;\nuse Rekalogika\\File\\Association\\Attribute\\AsFileAssociation;\n\n#[Entity]\n#[WithFileAssociation]\nclass Product\n{\n    #[AsFileAssociation]\n    private ?FileInterface $image = null;\n\n    public function getImage(): ?FileInterface\n    {\n        return $this->image;\n    }\n\n    public function setImage(?FileInterface $image): self\n    {\n        $this->image = $image;\n\n        return $this;\n    }\n}\n")),(0,a.kt)("p",null,"You need to modify it to look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// highlight-next-line\nuse Doctrine\\ORM\\Mapping\\Embedded;\nuse Doctrine\\ORM\\Mapping\\Entity;\nuse Rekalogika\\Contracts\\File\\FileInterface;\n// highlight-start\nuse Rekalogika\\Domain\\File\\Association\\Entity\\EmbeddedMetadata;\nuse Rekalogika\\Domain\\File\\Association\\Entity\\FileDecorator;\n// highlight-end\nuse Rekalogika\\File\\Association\\Attribute\\WithFileAssociation;\nuse Rekalogika\\File\\Association\\Attribute\\AsFileAssociation;\n\n#[Entity]\n#[WithFileAssociation]\nclass Product\n{\n    #[AsFileAssociation]\n    private ?FileInterface $image = null;\n\n    // highlight-start\n    #[Embedded]\n    private EmbeddedMetadata $imageMetadata;\n    // highlight-end\n\n    public function __construct()\n    {\n        // highlight-next-line\n        $this->imageMetadata = new EmbeddedMetadata();  \n    }\n\n    public function getImage(): ?FileInterface\n    {\n        // highlight-next-line\n        return FileDecorator::getFile($this->image, $this->imageMetadata);\n    }\n\n    public function setImage(?FileInterface $image): self\n    {\n        // highlight-next-line\n        FileDecorator::setFile($file, $this->file, $this->fileMetadata);\n\n        return $this;\n    }\n}\n")),(0,a.kt)("p",null,"After the change, calling the setter will still give you a ",(0,a.kt)("inlineCode",{parentName:"p"},"FileInterface")," that\nyou can use like before. But behind the scenes, any reads to the metadata will\nbe done from the data stored in the entity. On the other hand, writes to\nmetadata are saved to both the file and the entity."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Because the metadata is now saved in the entity, after any changes to the\nmetadata, you need to call ",(0,a.kt)("inlineCode",{parentName:"p"},"flush()")," on the entity manager to save the metadata\nto the database.")))}p.isMDXComponent=!0}}]);