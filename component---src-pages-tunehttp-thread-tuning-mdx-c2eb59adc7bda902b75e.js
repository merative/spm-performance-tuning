"use strict";(self.webpackChunkspm_performance_tuning=self.webpackChunkspm_performance_tuning||[]).push([[3830],{3075:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return b}});var n=a(3366),r=(a(7294),a(4983)),l=a(4295),i=["components"],o={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)}},u=s("Tabs"),c=s("Tab"),m=s("Row"),d=s("Column"),p={_frontmatter:o},h=l.Z;function b(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)(h,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If the system throughput is known or a good estimation of the system throughput is available, you can calculate\nthe number of threads that are in the web server. You can do the calculation after the persistent connections are configured."),(0,r.kt)("p",null,"The following formula indicates the total number of threads that are required in the web server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Throughput * KeepAliveTimeOut\n")),(0,r.kt)("p",null,"Alternatively, you can use the following formula to obtain a rough starting value for the number of threads\nthat you can use, where ",(0,r.kt)("inlineCode",{parentName:"p"},"WebContainer_max")," is the number of application server threads that are available to process HTTP requests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"WebContainer_max * KeepAliveTimeOut\n")),(0,r.kt)("p",null,"If the HTTP server load balances against multiple application servers, multiply the number of threads as needed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ratio_of_application_servers_per_HTTP_servers * WebContainer_max * KeepAliveTimeOut\n")),(0,r.kt)("p",null,"The previous thread calculation is likely to be too low a number, but you can use it as a quick start. Then,\nrefine the number of threads during load tests or production monitoring by including the 95th percentile of response time through the following heuristic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"threads = ratio_of_application_servers_per_HTTP_servers * WebContainer_max *\n(KeepAliveTimeOut + user_interaction_95th%ile_response_time)\n")),(0,r.kt)("p",null,"You might need to adjust the number of threads further depending on the following factors:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The average amount of static content that is in your web pages"),(0,r.kt)("li",{parentName:"ul"},"How well the static content is cached by the web browser")),(0,r.kt)("p",null,"The dependency occurs because some web clients can use multiple connections for retrieving the static content on a web page.\nThe behavior is a strong case for monitoring the HTTP server threads utilization."),(0,r.kt)("p",null,"During monitoring, as a general convention, increase the number of threads only if the following statements are true:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All threads are active, and no idle threads exists."),(0,r.kt)("li",{parentName:"ul"},"The response time is not acceptable."),(0,r.kt)("li",{parentName:"ul"},"The CPU is not fully utilized.")),(0,r.kt)("p",null,"The procedure for setting the number of threads differs according to the operating system:"),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(c,{label:"Unix/Linux",mdxType:"Tab"},(0,r.kt)(m,{mdxType:"Row"},(0,r.kt)(d,{mdxType:"Column"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ServerLimit           1\nThreadLimit           300\nStartServers          1\nMaxClients            300\nMinSpareThreads       300\nMaxSpareThreads       300\nThreadsPerChild       300\nMaxRequestsPerChild   0\n"))))),(0,r.kt)(c,{label:"Windows",mdxType:"Tab"},(0,r.kt)(m,{mdxType:"Row"},(0,r.kt)(d,{mdxType:"Column"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ThreadLimit           300\nThreadsPerChild       300\nMaxRequestsPerChild   0\n")))))))}b.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(7294),r=a(8650),l=a.n(r),i=a(5444),o=a(5426),s=a(1551),u=a(5900),c=a.n(u),m=function(e){var t,a=e.title,r=e.theme,l=e.tabs,i=void 0===l?[]:l;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,r=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||r,o=l.baseUrl,s=l.subDirectory,u=o+"/edit/"+l.branch+s+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:u},"Edit this page on GitHub"))):null},p=a(4275),h=a(1721),b=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,o=r.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),s=a===o,u=new RegExp(o+"/?(#.*)?$"),m=r.replace(u,a);return n.createElement("li",{key:e,className:c()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),g=b,f=a(2881),v=a(6958),T=a(36),k=function(e){var t=e.date,a=new Date(t);return t?n.createElement(T.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(T.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},y=function(e){var t=e.pageContext,a=e.children,r=e.location,u=e.Title,c=t.frontmatter,h=void 0===c?{}:c,b=t.relativePagePath,T=t.titleType,y=h.tabs,w=h.title,x=h.theme,E=h.description,N=h.keywords,P=h.date,_=(0,v.Z)().interiorTheme,C=(0,i.useStaticQuery)("2456312558").site.pathPrefix,H=C?r.pathname.replace(C,""):r.pathname,L=y?H.split("/").filter(Boolean).slice(-1)[0]||l()(y[0],{lower:!0}):"",D=x||_;return n.createElement(s.Z,{tabs:y,homepage:!1,theme:D,pageTitle:w,pageDescription:E,pageKeywords:N,titleType:T},n.createElement(m,{title:u?n.createElement(u,null):w,label:"label",tabs:y,theme:D}),y&&n.createElement(g,{title:w,slug:H,tabs:y,currentTab:L}),n.createElement(f.Z,{padded:!0},a,n.createElement(d,{relativePagePath:b}),n.createElement(k,{date:P})),n.createElement(p.Z,{pageContext:t,location:r,slug:H,tabs:y,currentTab:L}),n.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-tunehttp-thread-tuning-mdx-c2eb59adc7bda902b75e.js.map