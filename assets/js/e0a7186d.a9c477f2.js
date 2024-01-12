"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[8432],{8391:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(5893),o=t(1151);const a={title:"Basic Usage"},s=void 0,i={id:"mapper/usage",title:"Basic Usage",description:"This chapter describes how to use the mapper.",source:"@site/docs/mapper/01-usage.md",sourceDirName:"mapper",slug:"/mapper/usage",permalink:"/mapper/usage",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/mapper/01-usage.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Basic Usage"},sidebar:"docs",previous:{title:"Introduction & Installation",permalink:"/mapper/intro"},next:{title:"Architecture",permalink:"/mapper/architecture"}},p={},c=[{value:"Getting the Mapper Service",id:"getting-the-mapper-service",level:2},{value:"Usage",id:"usage",level:2}];function l(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This chapter describes how to use the mapper."}),"\n",(0,r.jsx)(n.h2,{id:"getting-the-mapper-service",children:"Getting the Mapper Service"}),"\n",(0,r.jsxs)(n.p,{children:["In Symfony projects, you can simply autowire ",(0,r.jsx)(n.code,{children:"MapperInterface"})," to your services\nand controllers just as you would do with any other service."]}),"\n",(0,r.jsxs)(n.p,{children:["In non-Symfony projects, you can use the ",(0,r.jsx)(n.code,{children:"MapperFactory"})," to get the mapper\nservice:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"use Rekalogika\\Mapper\\MapperFactory;\n\n$mapperFactory = new MapperFactory();\n$mapper = $mapperFactory->getMapper();\n"})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["Suppose you have a ",(0,r.jsx)(n.code,{children:"Book"})," entity:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",metastring:'title="src/Entity/Book.php"',children:"namespace App\\Entity;\n\nclass Book\n{\n    public function __construct(\n        private int $id,\n        private string $title,\n        private string $author,\n    ) {\n    }\n\n    public function getId(): ?int\n    {\n        return $this->id;\n    }\n\n    public function getTitle(): ?string\n    {\n        return $this->title;\n    }\n\n    public function getAuthor(): ?string\n    {\n        return $this->author;\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["And need to map it to the ",(0,r.jsx)(n.code,{children:"BookDto"})," data transfer object:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",metastring:'title="src/Dto/BookDto.php"',children:"namespace App\\Dto;\n\nclass BookDto\n{\n    public string $id;\n    public string $title;\n    public string $author;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can simply do:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"use App\\Entity\\Book;\nuse Rekalogika\\Mapper\\MapperInterface;\n\n/** @var MapperInterface $mapper */\n/** @var Book $book */\n\n$result = $mapper->map($book, BookDto::class);\n\n// or map to an existing object\n\n$bookDto = new BookDto();\n$mapper->map($book, $bookDto);\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var r=t(7294);const o={},a=r.createContext(o);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);