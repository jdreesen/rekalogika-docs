"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[9031],{9231:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(5893),a=n(1151);const r={title:"SubMapper"},p=void 0,s={id:"mapper/submapper",title:"SubMapper",description:"SubMapper is a highly simplified mapper used in places where you might need to",source:"@site/docs/mapper/15-submapper.md",sourceDirName:"mapper",slug:"/mapper/submapper",permalink:"/mapper/submapper",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/mapper/15-submapper.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"SubMapper"},sidebar:"docs",previous:{title:"Overriding a Mapping Table Entry",permalink:"/mapper/overriding-transformer"},next:{title:"Debugging the Mapper",permalink:"/mapper/debugging"}},i={},c=[{value:"<code>map()</code> Method",id:"map-method",level:2},{value:"<code>mapForProperty()</code> Method",id:"mapforproperty-method",level:2},{value:"<code>cache()</code> Method",id:"cache-method",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"SubMapper is a highly simplified mapper used in places where you might need to\ndelegate the mapping of another object to the main mapper. It is designed so\nthat you don't have to deal with the complexity of managing types."}),"\n",(0,o.jsxs)(t.p,{children:["In SubMapper, passing the ",(0,o.jsx)(t.code,{children:"Context"})," is optional. SubMapper automatically passes\nthe ",(0,o.jsx)(t.code,{children:"Context"})," from the caller if you don't specifically do it."]}),"\n",(0,o.jsxs)(t.h2,{id:"map-method",children:[(0,o.jsx)(t.code,{children:"map()"})," Method"]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"map()"})," method maps an object to the class or object you specified."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-php",children:"use Rekalogika\\Mapper\\SubMapper\\SubMapperInterface;\n\n/** @var SubMapperInterface $mapper */\n\n// using class-string as the target type\n$postDto = $mapper->map($source, PostDto::class);\n\n// the target can also be an existing object\n$postDto = new PostDto();\n$mapper->map($source, $postDto);\n"})}),"\n",(0,o.jsxs)(t.h2,{id:"mapforproperty-method",children:[(0,o.jsx)(t.code,{children:"mapForProperty()"})," Method"]}),"\n",(0,o.jsxs)(t.p,{children:["With the ",(0,o.jsx)(t.code,{children:"mapForProperty()"}),", you specify the property name of the variable that\nwill contain the result of the mapping. SubMapper will detect the type of the\nproperty in ",(0,o.jsx)(t.code,{children:"$containing::$propertyName"})," and use it as the target type for the\nmapping."]}),"\n",(0,o.jsx)(t.p,{children:"This is useful if the property is an array or an array-like object, as PHP\ndoesn't have generics and it is not simple to specify the type of the array\nelements."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-php",children:"use Rekalogika\\Mapper\\SubMapper\\SubMapperInterface;\n\nclass Post {\n    /** @var list<Comment> */\n    public array $comments;\n}\n\nclass Comment {}\n\nclass PostDto {\n    /** @var list<CommentDto> */\n    public array $comments;\n}\n\nclass CommentDto {}\n\n/** @var Post $post */\n/** @var SubMapperInterface $mapper */\n\n$postDto = new PostDto();\n$mapper->cache($postDto);\n\n// highlight-next-line\n$commentsDto = $mapper->mapForProperty($post->comments, PostDto::class, 'comments');\n$postDto->comments = $commentsDto;\n"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"$containing"})," can be a class string or an existing object. If it is an\nexisting object, SubMapper will attempt to retrieve the current object from the\nproperty and map the source to it."]}),"\n",(0,o.jsxs)(t.h2,{id:"cache-method",children:[(0,o.jsx)(t.code,{children:"cache()"})," Method"]}),"\n",(0,o.jsxs)(t.p,{children:["To reduce the possibility of infinite recursion due to circular references, you\ncan use the ",(0,o.jsx)(t.code,{children:"cache()"})," method to store the object that is being mapped. You\nshould call ",(0,o.jsx)(t.code,{children:"cache()"})," after you instantiate the object and before you delegate\nthe mapping of its properties by calling ",(0,o.jsx)(t.code,{children:"map()"})," or ",(0,o.jsx)(t.code,{children:"mapForProperty()"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-php",children:"use Rekalogika\\Mapper\\SubMapper\\SubMapperInterface;\n\n/** @var SubMapperInterface $mapper */\n\n$postDto = new PostDto();\n$mapper->cache($postDto);\n$postDto->author = $mapper->map($source->author, AuthorDto::class);\n\nreturn $postDto;\n"})})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>p});var o=n(7294);const a={},r=o.createContext(a);function p(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:p(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);