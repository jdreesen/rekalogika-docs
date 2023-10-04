"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8677],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),h=r,b=p["".concat(i,".").concat(h)]||p[h]||d[h]||a;return n?o.createElement(b,l(l({ref:t},u),{},{components:n})):o.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={title:"Selectable Abstraction"},l=void 0,c={unversionedId:"doctrine-collections-decorator/use-cases/selectable-abstraction",id:"doctrine-collections-decorator/use-cases/selectable-abstraction",title:"Selectable Abstraction",description:"Doctrine ORM uses collection objects that also implement the Selectable",source:"@site/docs/doctrine-collections-decorator/use-cases/13-selectable-abstraction.md",sourceDirName:"doctrine-collections-decorator/use-cases",slug:"/doctrine-collections-decorator/use-cases/selectable-abstraction",permalink:"/doctrine-collections-decorator/use-cases/selectable-abstraction",draft:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/doctrine-collections-decorator/use-cases/13-selectable-abstraction.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Selectable Abstraction"},sidebar:"docs",previous:{title:"Record Precounting",permalink:"/doctrine-collections-decorator/use-cases/record-precounting"},next:{title:"Decorating Member Objects",permalink:"/doctrine-collections-decorator/use-cases/decorating-members"}},i={},s=[{value:"The Decorator Class",id:"the-decorator-class",level:2},{value:"Usage in the <code>one-to-many</code> Side",id:"usage-in-the-one-to-many-side",level:2},{value:"The Caller Side",id:"the-caller-side",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Doctrine ORM uses collection objects that also implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"Selectable"),"\ninterface. It gives us the ",(0,r.kt)("inlineCode",{parentName:"p"},"matching()")," method that allows us to filter the\ncollection using a criteria object. It is very powerful and convenient, but also\nan abstraction leak. To use it, the caller needs to know the internal structure\nof the member entity class. Without restraint, the knowledge about the internal\ndetails of a popular class will be spread all over your codebase, and updating\nthe class can potentially become a nightmare."),(0,r.kt)("p",null,"To solve the problem, we can decorate the collection object to keep the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Selectable")," interface private and expose more concise, higher-level methods\nthat the caller can use."),(0,r.kt)("h2",{id:"the-decorator-class"},"The Decorator Class"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Doctrine\\Common\\Collections\\Collection;\nuse Doctrine\\Common\\Collections\\Criteria;\nuse Doctrine\\Common\\Collections\\Selectable;\nuse Rekalogika\\Collections\\Decorator\\AbstractCollectionDecorator;\n\n/**\n * @extends AbstractCollectionDecorator<array-key,Book>\n */\nclass BookCollection extends AbstractCollectionDecorator\n{\n    /**\n     * @param Collection<array-key,Book> $collection\n     */\n    public function __construct(private Collection $collection)\n    {\n    }\n\n    #[\\Override]\n    protected function getWrapped(): Collection&Selectable\n    {\n        return $this->collection;\n    }\n\n    // highlight-start\n    public function findByAuthor(string $author): self\n    {\n        $criteria = Criteria::create()\n            ->where(Criteria::expr()->eq('author', $author));\n\n        $result = $this->getWrapped()->matching($criteria);\n\n        return new self($result);\n    }\n    // highlight-end\n}\n")),(0,r.kt)("h2",{id:"usage-in-the-one-to-many-side"},"Usage in the ",(0,r.kt)("inlineCode",{parentName:"h2"},"one-to-many")," Side"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Doctrine\\Common\\Collections\\ArrayCollection;\nuse Doctrine\\Common\\Collections\\Collection;\nuse Doctrine\\ORM\\Mapping as ORM;\n\n#[ORM\\Entity()]\nclass BookShelf\n{\n    /**\n     * @var Collection<array-key,Book>\n     */\n    #[ORM\\OneToMany(targetEntity: Book::class)]\n    private Collection $books;\n\n    public function __construct()\n    {\n        $this->books = new ArrayCollection();\n    }\n\n    public function getBooks(): BookCollection\n    {\n        // highlight-next-line\n        return new BookCollection($this->books);\n    }\n}\n")),(0,r.kt)("h2",{id:"the-caller-side"},"The Caller Side"),(0,r.kt)("p",null,"Then the caller will be able to do something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"/** @var BookShelf $bookShelf */\n\n$booksByJohnDoe = $bookShelf->getBooks()->findByAuthor('John Doe');\n")))}d.isMDXComponent=!0}}]);