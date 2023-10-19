"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3175],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(t),f=o,m=c["".concat(p,".").concat(f)]||c[f]||d[f]||a;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=f;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7075:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={title:"rekalogika/gotenberg-pdf-bundle"},l=void 0,i={unversionedId:"gotenberg-pdf-bundle/index",id:"gotenberg-pdf-bundle/index",title:"rekalogika/gotenberg-pdf-bundle",description:"Symfony Bundle for generating PDF using Gotenberg.",source:"@site/docs/gotenberg-pdf-bundle/index.md",sourceDirName:"gotenberg-pdf-bundle",slug:"/gotenberg-pdf-bundle/",permalink:"/gotenberg-pdf-bundle/",draft:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/gotenberg-pdf-bundle/index.md",tags:[],version:"current",frontMatter:{title:"rekalogika/gotenberg-pdf-bundle"},sidebar:"docs",previous:{title:"Marking Entities using Interface",permalink:"/file-bundle/advanced/file-association-interface"},next:{title:"rekalogika/psr-16-simple-cache-bundle",permalink:"/psr-16-simple-cache-bundle/"}},p={},s=[{value:"Features",id:"features",level:2},{value:"Installation",id:"installation",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"License",id:"license",level:2},{value:"Contributing",id:"contributing",level:2}],u={toc:s},c="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Symfony Bundle for generating PDF using Gotenberg."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Easy provisioning with Symfony Flex, Symfony CLI, and Docker Compose. Just\ninstall the bundle and you're ready to generate your first PDF."),(0,o.kt)("li",{parentName:"ul"},"Separated high-level interfaces in ",(0,o.kt)("inlineCode",{parentName:"li"},"rekalogika/print-contracts"),". If there is a\nbetter practice of generating PDFs in the future, hopefully we only need to\nreplace this package, and we don't need to change our code."),(0,o.kt)("li",{parentName:"ul"},"High-level object-oriented API built on top of the official Gotenberg PHP\nclient."),(0,o.kt)("li",{parentName:"ul"},"With the heavy lifting already done by Gotenborg, there is no need to deal\nwith Chrome instances, CLI tools, Puppeteer, NodeJS, etc."),(0,o.kt)("li",{parentName:"ul"},"Infinitely scalable. Just add more instances of Gotenberg with Docker Compose\nor another container orchestration tool.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Preinstallation checklists:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make sure Composer is installed globally, as explained in the ",(0,o.kt)("a",{parentName:"li",href:"https://getcomposer.org/doc/00-intro.md"},"installation\nchapter")," of the Composer\ndocumentation. Run ",(0,o.kt)("inlineCode",{parentName:"li"},"composer about")," to verify."),(0,o.kt)("li",{parentName:"ul"},"Make sure your project has Symfony Flex installed and enabled (it is enabled\nby default). Run ",(0,o.kt)("inlineCode",{parentName:"li"},"composer why symfony/flex")," to verify."),(0,o.kt)("li",{parentName:"ul"},"Make sure you have Docker Compose installed. Run ",(0,o.kt)("inlineCode",{parentName:"li"},"docker composer version")," to\nverify."),(0,o.kt)("li",{parentName:"ul"},"Make sure you have Symfony CLI installed. Run ",(0,o.kt)("inlineCode",{parentName:"li"},"symfony version")," to verify.")),(0,o.kt)("p",null,"Open a command console, enter your project directory, and execute:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"composer config extra.symfony.allow-contrib true\ncomposer require rekalogika/gotenberg-pdf-bundle\n")),(0,o.kt)("h2",{id:"quick-start"},"Quick Start"),(0,o.kt)("p",null,"To start the Gotenberg server (and other services registered in the Docker\nCompose configuration), run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up -d\n")),(0,o.kt)("p",null,"Then start the web server using Symfony CLI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"symfony serve\n")),(0,o.kt)("p",null,"Create a sample controller for generating a PDF file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="src/Controller/AppController.php"',title:'"src/Controller/AppController.php"'},"namespace App\\Controller;\n\nuse Rekalogika\\Contracts\\Print\\PageOrientation;\nuse Rekalogika\\Contracts\\Print\\PdfGeneratorInterface;\nuse Rekalogika\\Print\\PageLayout;\nuse Rekalogika\\Print\\Paper;\nuse Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;\nuse Symfony\\Component\\HttpFoundation\\Response;\nuse Symfony\\Component\\HttpFoundation\\StreamedResponse;\nuse Symfony\\Component\\Routing\\Annotation\\Route;\n\nclass AppController extends AbstractController\n{\n    #[Route('/app', name: 'app_app')]\n    public function index(PdfGeneratorInterface $pdfGenerator): Response\n    {\n        $pdf = $pdfGenerator->generatePdfFromHtml(\n            htmlContent: '<h1>Hello World</h1>',\n            paper: Paper::A4(),\n            pageLayout: PageLayout::inMm(PageOrientation::Portrait, 30)\n        );\n\n        // $pdf is a StreamedInterface containing the resulting PDF file.\n        // to get a raw stream, call $pdf->detach().\n\n        return new StreamedResponse(\n            fn () => fpassthru($pdf->detach()),\n            200,\n            [\n                'Content-Type' => 'application/pdf',\n                'Content-Disposition' => 'inline; filename=\"file.pdf\"',\n            ]\n        );\n    }\n}\n")),(0,o.kt)("p",null,"Then open your browser and go to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8000/app"},"http://localhost:8000/app"),"."),(0,o.kt)("h2",{id:"license"},"License"),(0,o.kt)("p",null,"MIT"),(0,o.kt)("h2",{id:"contributing"},"Contributing"),(0,o.kt)("p",null,"This framework consists of multiple repositories split from a monorepo. Be\nsure to submit issues and pull requests to the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rekalogika/print-src"},(0,o.kt)("inlineCode",{parentName:"a"},"rekalogika/print-src"))," monorepo."))}d.isMDXComponent=!0}}]);