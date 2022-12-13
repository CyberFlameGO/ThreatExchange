"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[135],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={id:"cognito",title:"Cognito User Pools for Authentication"},i=void 0,l={unversionedId:"installation/cognito",id:"installation/cognito",title:"Cognito User Pools for Authentication",description:"Terraforming a User Pool",source:"@site/docs/installation/cognito.md",sourceDirName:"installation",slug:"/installation/cognito",permalink:"/ThreatExchange/docs/installation/cognito",draft:!1,editUrl:"https://github.com/facebook/ThreatExchange/tree/main/hasher-matcher-actioner/docs/docs/installation/cognito.md",tags:[],version:"current",frontMatter:{id:"cognito",title:"Cognito User Pools for Authentication"},sidebar:"guidesSidebar",previous:{title:"Quick install guide",permalink:"/ThreatExchange/docs/installation/"},next:{title:"FOO",permalink:"/ThreatExchange/docs/concepts/"}},s={},c=[{value:"Terraforming a User Pool",id:"terraforming-a-user-pool",level:2},{value:"Create a shared pool",id:"create-a-shared-pool",level:3},{value:"Get the values of the outputs",id:"get-the-values-of-the-outputs",level:3},{value:"Adding and editing users",id:"adding-and-editing-users",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"terraforming-a-user-pool"},"Terraforming a User Pool"),(0,o.kt)("p",null,"This starts after you have checked out a release of HMA and unzipped it. Check out this ",(0,o.kt)("a",{parentName:"p",href:"/docs/installation/#checking-out-a-release"},"section in the installation")," page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ cd ThreatExchange-HMA-v0.1.1/hasher-matcher-actioner/\n$ cd terraform/authentication-shared/\n$ cp terraform.tfvars.example terraform.tfvars\n")),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform.tfvars")," in an editor and set the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"organization")," to a short string that denotes your organization. It may use the name of the organization, or it may not. It is used as a part of the name for s3 buckets which are expected to be globally unique. Use a short, all-smallcase string without any hyphens or underscores."),(0,o.kt)("h3",{id:"create-a-shared-pool"},"Create a shared pool"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ terraform init\n$ terraform apply\n")),(0,o.kt)("h3",{id:"get-the-values-of-the-outputs"},"Get the values of the outputs"),(0,o.kt)("p",null,"Run the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ terraform output\n")),(0,o.kt)("p",null,"Copy the outputs of these and replace the values of ",(0,o.kt)("inlineCode",{parentName:"p"},"webapp_and_api_shared_user_pool_client_id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"webapp_and_api_shared_user_pool_id")," with the output of the command above."),(0,o.kt)("p",null,"If you do so, you must also set the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"use_shared_user_pool")," as true."),(0,o.kt)("h2",{id:"adding-and-editing-users"},"Adding and editing users"),(0,o.kt)("p",null,"Go to the AWS Console, to the ",(0,o.kt)("a",{parentName:"p",href:"https://us-east-1.console.aws.amazon.com/cognito/home?region=us-east-1#"},"Cognito page")," and click on the name of the user pool you created. Typically, this will be something like: ",(0,o.kt)("inlineCode",{parentName:"p"},"shared-hma-user-pool"),". There will be a link on the left called 'Users & Groups'. You can use that to give more users access to HMA."))}p.isMDXComponent=!0}}]);