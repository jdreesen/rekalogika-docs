"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[706],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=d(i),h=a,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||l;return i?n.createElement(m,o(o({ref:t},c),{},{components:i})):n.createElement(m,o({ref:t},c))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=i.length,o=new Array(l);o[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:a,o[1]=r;for(var d=2;d<l;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},1530:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var n=i(7462),a=(i(7294),i(3905));const l={title:"Replicating Metadata in Entities"},o=void 0,r={unversionedId:"file-bundle/replicating-metadata-in-entities",id:"file-bundle/replicating-metadata-in-entities",title:"Replicating Metadata in Entities",description:"This chapter describes how to replicate file metadata in your entities.",source:"@site/docs/file-bundle/12-replicating-metadata-in-entities.md",sourceDirName:"file-bundle",slug:"/file-bundle/replicating-metadata-in-entities",permalink:"/file-bundle/replicating-metadata-in-entities",draft:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/file-bundle/12-replicating-metadata-in-entities.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Replicating Metadata in Entities"},sidebar:"docs",previous:{title:"Lazy-Loading Files",permalink:"/file-bundle/lazy-loading"},next:{title:"Implementing a Collection of Files",permalink:"/file-bundle/collection"}},s={},d=[{value:"Objective",id:"objective",level:2},{value:"Execution",id:"execution",level:2},{value:"Using The Metadata Fields for Querying and Indexing",id:"using-the-metadata-fields-for-querying-and-indexing",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This chapter describes how to replicate file metadata in your entities."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This feature is only nominally tested.")),(0,a.kt)("h2",{id:"objective"},"Objective"),(0,a.kt)("p",null,"This framework gives you the convenience of requiring only a single property to\nassociate a file with an entity. However, there are cases where it can be useful\nto have the file's metadata stored in the entity. For example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To optimize performance together with our ",(0,a.kt)("a",{parentName:"li",href:"lazy-loading"},"lazy-loading\nfeature"),", especially when you are dealing with a lot of entities\nand/or files."),(0,a.kt)("li",{parentName:"ul"},"You need to use the database to index, search, or sort the files based on\ntheir metadata.")),(0,a.kt)("p",null,"Using the method described in this chapter, you will be able to accomplish that\nby replicating the files' metadata in your entities and does not require you\nto change the way you work with files."),(0,a.kt)("h2",{id:"execution"},"Execution"),(0,a.kt)("admonition",{title:"Preparation",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You need to install the package ",(0,a.kt)("inlineCode",{parentName:"p"},"rekalogika/file-association-entity")," to use this\nfeature:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"composer require rekalogika/file-association-entity\n"))),(0,a.kt)("p",null,"In short, you need to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add a property with ",(0,a.kt)("inlineCode",{parentName:"li"},"EmbeddedMetadata")," type. This is a Doctrine embeddable\nthat implements ",(0,a.kt)("inlineCode",{parentName:"li"},"RawMetadataInterface")," we will be using to store the file's\nmetadata."),(0,a.kt)("li",{parentName:"ol"},"Modify the getter of the file property so that it returns a decorated\nversion of the ",(0,a.kt)("inlineCode",{parentName:"li"},"FileInterface")," that will use our ",(0,a.kt)("inlineCode",{parentName:"li"},"EmbeddedMetadata")," in #1."),(0,a.kt)("li",{parentName:"ol"},"Modify the setter of the file property so it will copy the metadata of a new\nfile to our ",(0,a.kt)("inlineCode",{parentName:"li"},"EmbeddedMetadata")," in #1.")),(0,a.kt)("p",null,"If your original entity looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use Doctrine\\ORM\\Mapping\\Entity;\nuse Rekalogika\\Contracts\\File\\FileInterface;\nuse Rekalogika\\File\\Association\\Attribute\\WithFileAssociation;\nuse Rekalogika\\File\\Association\\Attribute\\AsFileAssociation;\n\n#[Entity]\n#[WithFileAssociation]\nclass Product\n{\n    #[AsFileAssociation]\n    private ?FileInterface $image = null;\n\n    public function getImage(): ?FileInterface\n    {\n        return $this->image;\n    }\n\n    public function setImage(?FileInterface $image): self\n    {\n        $this->image = $image;\n\n        return $this;\n    }\n}\n")),(0,a.kt)("p",null,"You need to modify it to look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// highlight-next-line\nuse Doctrine\\ORM\\Mapping\\Embedded;\nuse Doctrine\\ORM\\Mapping\\Entity;\nuse Rekalogika\\Contracts\\File\\FileInterface;\n// highlight-start\nuse Rekalogika\\Domain\\File\\Association\\Entity\\EmbeddedMetadata;\nuse Rekalogika\\Domain\\File\\Association\\Entity\\FileDecorator;\n// highlight-end\nuse Rekalogika\\File\\Association\\Attribute\\WithFileAssociation;\nuse Rekalogika\\File\\Association\\Attribute\\AsFileAssociation;\n\n#[Entity]\n#[WithFileAssociation]\nclass Product\n{\n    #[AsFileAssociation]\n    private ?FileInterface $image = null;\n\n    // highlight-start\n    #[Embedded]\n    private EmbeddedMetadata $imageMetadata;\n    // highlight-end\n\n    public function __construct()\n    {\n        // highlight-next-line\n        $this->imageMetadata = new EmbeddedMetadata();  \n    }\n\n    public function getImage(): ?FileInterface\n    {\n        // highlight-next-line\n        return FileDecorator::getFile($this->image, $this->imageMetadata);\n    }\n\n    public function setImage(?FileInterface $image): self\n    {\n        // highlight-next-line\n        FileDecorator::setFile($file, $this->file, $this->fileMetadata);\n\n        return $this;\n    }\n}\n")),(0,a.kt)("p",null,"After the change, calling the setter will still give you a ",(0,a.kt)("inlineCode",{parentName:"p"},"FileInterface")," that\nyou can use like before. But behind the scenes, any reads to the metadata will\nbe done from the data stored in the entity. On the other hand, writes to\nmetadata are saved to both the file and the entity."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Because the metadata is now saved in the entity, after any changes to the\nmetadata, you need to call ",(0,a.kt)("inlineCode",{parentName:"p"},"flush()")," on the entity manager to save the metadata\nto the database.")),(0,a.kt)("h2",{id:"using-the-metadata-fields-for-querying-and-indexing"},"Using The Metadata Fields for Querying and Indexing"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"EmbeddedMetadata")," is a ",(0,a.kt)("a",{parentName:"p",href:"https://www.doctrine-project.org/projects/doctrine-orm/en/latest/tutorials/embeddables.html"},"Doctrine embeddable")," that contains the following fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name"),": The file name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"size"),": The file size in bytes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type"),": The file MIME type."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"modificationTime"),": The file modification time."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"width"),": The width if the file is an image."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"height"),": The height if the file is an image."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"other"),": Other metadata that is not covered by the above fields.")),(0,a.kt)("p",null,"You can use these fields (other than the ",(0,a.kt)("inlineCode",{parentName:"p"},"other"),") to query and index the files\nin your database."))}u.isMDXComponent=!0}}]);