"use strict";(self.webpackChunkspm_performance_tuning=self.webpackChunkspm_performance_tuning||[]).push([[9457],{9227:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return d}});var n,r=a(3366),o=(a(7294),a(4983)),s=a(4295),i=["components"],l={},m=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),c={_frontmatter:l},u=s.Z;function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)(u,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For online HTTP requests and asynchronous JMS processing, IBM® Cúram Social Program Management (SPM)\nis configured to use two distinct thread pools. Tune both pools as explained in the following sections."),(0,o.kt)("p",null,"To enable the system to be driven at optimum throughput, it is generally recommended that the total number\nof application threads are about twice the number of CPUs. This general convention assumes that the environment has fast I/O subsystems."),(0,o.kt)(m,{mdxType:"InlineNotification"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Threads that are used by SPM carry caches and therefore impact memory requirements. In addition,\nthe higher the number of threads, the more likely that contention occurs on Java™ locks. Therefore,\nit is recommended to limit the number of threads to a low multiplier of the number of cores.")),(0,o.kt)("h2",null,"WebSphere: WebContainer and SIBJMSRAThreadPool"),(0,o.kt)("p",null,"In WebSphere® Application Server (WAS), the ",(0,o.kt)("inlineCode",{parentName:"p"},"WebContainer")," thread pool is set up to process HTTP requests and the ",(0,o.kt)("inlineCode",{parentName:"p"},"SIBJMSRAThreadPool")," is set up to process JMS messages."),(0,o.kt)("p",null,"Use the following specification as a starting point: the total number of threads that SPM uses in the application\nserver can be set to twice the number of available cores. This starting point assumes that only one application server\nis running on the operating system or logical partition. Setting the number of threads to twice the number of cores is\nbased on experience that processing in SPM is usually split relatively equally between I/O and CPU."),(0,o.kt)("p",null,"The way processing is then broken down between online and asynchronous processing depends on the characteristics of your\nsystem: how much asynchronous processing does it do? As a quick-start, a simple, equal split is suggested:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WebContainer_max_threads = number of cores\nSIBJMSRAThreadPool_max_threads = number of cores\n")),(0,o.kt)("p",null,"It is suggested that you set the minimum number of threads equal to the maximum number of threads. Setting the minimum\nthreads equal to the maximum threads avoids the processing cost of pool growth and shrinkage. Use the following settings to configure the pools:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WebContainer_min_threads=WebContainer_max_threads\nSIBJMSRAThreadPool_min_threads=SIBJMSRAThreadPool_max_threads\n")),(0,o.kt)("p",null,"Then, monitor the thread pool usage and the number of threads that are adjusted according to CPU utilization.\nFor example, if a thread pool is fully used and spare CPU capacity exists, you can add a thread. Spare CPU capacity,\ndepending on the platform, might be CPU use below 80%. You need to define your CPU plateau threshold based on your\nenvironment configuration and the results of load testing."),(0,o.kt)("h2",null,"WebLogic: Maximum thread constraints"),(0,o.kt)("p",null,"In WebLogic Server (WLS) configure the two work managers that SPM uses, which are the default work manager for HTTP\nrequests and the MDBWorkManager for JMS. Specify a maximum thread constraint. As a starting point, set the maximum thread constraints to the following values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"default_max_thread_constraint = number of cores\nMDBWorkManager_max_thread_constraint = number of cores\n")),(0,o.kt)("p",null,"Then, tune the work managers by monitoring thread usage. Monitoring indicates thread usage for a work manager.\nIf all threads are used and CPU capacity exists, you can increase the maximum thread constraint."))}d.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return P}});var n=a(7294),r=a(8650),o=a.n(r),s=a(5444),i=a(5426),l=a(1551),m=a(5900),c=a.n(m),u=function(e){var t,a=e.title,r=e.theme,o=e.tabs,s=void 0===o?[]:o;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=s.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,r=(0,s.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||r,i=o.baseUrl,l=o.subDirectory,m=i+"/edit/"+o.branch+l+"/src/pages"+t;return i?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},h=a(4275),p=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,p.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,i=r.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),l=a===i,m=new RegExp(i+"/?(#.*)?$"),u=r.replace(m,a);return n.createElement("li",{key:e,className:c()((t={},t["PageTabs-module--selected-item--aBB0K"]=l,t),"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:""+u},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(n.Component),b=g,f=a(2881),k=a(6958),y=a(36),v=function(e){var t=e.date,a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},P=function(e){var t=e.pageContext,a=e.children,r=e.location,m=e.Title,c=t.frontmatter,p=void 0===c?{}:c,g=t.relativePagePath,y=t.titleType,P=p.tabs,w=p.title,x=p.theme,E=p.description,T=p.keywords,S=p.date,N=(0,k.Z)().interiorTheme,C=(0,s.useStaticQuery)("2456312558").site.pathPrefix,M=C?r.pathname.replace(C,""):r.pathname,_=P?M.split("/").filter(Boolean).slice(-1)[0]||o()(P[0],{lower:!0}):"",I=x||N;return n.createElement(l.Z,{tabs:P,homepage:!1,theme:I,pageTitle:w,pageDescription:E,pageKeywords:T,titleType:y},n.createElement(u,{title:m?n.createElement(m,null):w,label:"label",tabs:P,theme:I}),P&&n.createElement(b,{title:w,slug:M,tabs:P,currentTab:_}),n.createElement(f.Z,{padded:!0},a,n.createElement(d,{relativePagePath:g}),n.createElement(v,{date:S})),n.createElement(h.Z,{pageContext:t,location:r,slug:M,tabs:P,currentTab:_}),n.createElement(i.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-tuneappserver-thread-pools-mdx-a22023c1200e31ace415.js.map