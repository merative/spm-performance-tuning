"use strict";(self.webpackChunkspm_performance_tuning=self.webpackChunkspm_performance_tuning||[]).push([[5951],{6439:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return g}});var n=a(3366),i=(a(7294),a(4983)),r=a(4295),l=["components"],o={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},p=s("AnchorLinks"),c=s("AnchorLink"),m=s("InlineNotification"),d={_frontmatter:o},u=r.Z;function g(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)(u,Object.assign({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(p,{small:!0,mdxType:"AnchorLinks"},(0,i.kt)(c,{mdxType:"AnchorLink"},"Physical database design"),(0,i.kt)(c,{mdxType:"AnchorLink"},"Maintenance"),(0,i.kt)(c,{mdxType:"AnchorLink"},"Registry variables")),(0,i.kt)("p",null,"The following maintenance and database design guidelines apply to tuning Db2® databases."),(0,i.kt)(m,{kind:"warning",mdxType:"InlineNotification"},(0,i.kt)("p",null,"Database tuning provided in this guidance is not comprehensive."),(0,i.kt)("p",null,"However, the following values are a starting point for how to configure a performant database for IBM® Cúram Social Program Management.\nIt is our recommendation that project teams verify their own tuning, and where necessary adapt and expand the configuration based on their own requirements prior to going in to production.")),(0,i.kt)("h2",null,"Physical database design"),(0,i.kt)("p",null,"In addition to physical database design done as part of the project, the following tips apply specifically to performance and scalability:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create two 4 K page buffer pools, one for data and one for indexes, and a 4 K page temporary table space.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a 4 K page large table space for data, with no file system caching.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a 4 K page large table space for indexes, with no file system caching.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a 4 K page large table space for LOBs, with file system caching (to enable buffering of Large Object types (LOBs).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Move all indexes to the 4 K page indexes table space. A common page size makes database administration easier and improves performance. For example, indexes of tables in the 32 K page table space that use 4 K pages require less I/O.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Move all LOBs to the 4 K page LOBs table space.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Move all tables that do not need 32 K page to the 4 K page data table space. It can improve buffer pool utilization and decrease database I/O.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Enable compression on tables if it is wanted. Compression was tested by IBM with no issues.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Review the use of dedicated table spaces. Consider moving the largest tables (for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"DYNAMICEVIDENCEDATAATTRIBUTE")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"DEPENDENCY"),") to dedicated table spaces. However, from experience, with good I/O layouts, the only reason for dedicated table spaces is maintenance.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Review the use of partitioning. From experience, with good I/O layouts, the only reason for partitioning is maintenance (similar to dedicated table spaces).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After creating the database, see ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/spm/8.0.0?topic=configuration-configuring-db2-database"},"Configuring the IBM Db2 database"),", consider setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"highmem")," buffer pool size to ",(0,i.kt)("inlineCode",{parentName:"p"},"AUTOMATIC")," e.g.,"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"}," db2 alter bufferpool HIGHMEM size AUTOMATIC\n")),(0,i.kt)("p",{parentName:"li"}," see ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/support/producthub/db2/docs/content/SSEPGG_11.5.0/com.ibm.db2.luw.sql.ref.doc/doc/r0000885.html"},"ALTER BUFFERPOOL")),(0,i.kt)(m,{kind:"warning",mdxType:"InlineNotification"},(0,i.kt)("p",{parentName:"li"}," ",(0,i.kt)("strong",{parentName:"p"},"Note:")," The above will cause the Ant ",(0,i.kt)("inlineCode",{parentName:"p"},"configtest")," target to fail, see ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/spm/8.0.0?topic=configuration-testing"},"Testing the configuration"),". Therefore, run the ",(0,i.kt)("inlineCode",{parentName:"p"},"build cofigtest")," procedure prior to altering the bufferpool.")))),(0,i.kt)("h2",null,"Maintenance"),(0,i.kt)("p",null,"Regular database maintenance is essential to ensure optimal performance and reliability of your databases.\nRunning the ",(0,i.kt)("inlineCode",{parentName:"p"},"REORG")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"RUNSTATS")," utilities is critically important for optimal performance with Db2 databases.\nAfter the database is populated, do the maintenance on a regularly scheduled basis, such as weekly.\nA regularly scheduled maintenance plan is essential to maintain peak performance of your system."),(0,i.kt)("h2",null,"Registry variables"),(0,i.kt)("p",null,"To improve the buffer pool management and increase performance in Db2, you can set the following Db2 registry variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DB2_USE_ALTERNATE_PAGE_CLEANING=ON\n")),(0,i.kt)("p",null,"To enable Db2 to parallelize IO to that logical volume, you can set the following setting:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DB2_PARALLEL_IO=*:n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"where the number of disks in the RAID array that backs a logical volume is represented by ",(0,i.kt)("inlineCode",{parentName:"li"},"n"),".")))}g.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(7294),i=a(8650),r=a.n(i),l=a(5444),o=a(5426),s=a(1551),p=a(5900),c=a.n(p),m=function(e){var t,a=e.title,i=e.theme,r=e.tabs,l=void 0===r?[]:r;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=l.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===i,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,i=(0,l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||i,o=r.baseUrl,s=r.subDirectory,p=o+"/edit/"+r.branch+s+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},u=a(4275),g=a(1721),b=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,o=i.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),s=a===o,p=new RegExp(o+"/?(#.*)?$"),m=i.replace(p,a);return n.createElement("li",{key:e,className:c()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),h=b,f=a(2881),k=a(6958),N=a(36),y=function(e){var t=e.date,a=new Date(t);return t?n.createElement(N.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(N.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},w=function(e){var t=e.pageContext,a=e.children,i=e.location,p=e.Title,c=t.frontmatter,g=void 0===c?{}:c,b=t.relativePagePath,N=t.titleType,w=g.tabs,E=g.title,v=g.theme,T=g.description,x=g.keywords,C=g.date,A=(0,k.Z)().interiorTheme,P=(0,l.useStaticQuery)("2456312558").site.pathPrefix,I=P?i.pathname.replace(P,""):i.pathname,L=w?I.split("/").filter(Boolean).slice(-1)[0]||r()(w[0],{lower:!0}):"",D=v||A;return n.createElement(s.Z,{tabs:w,homepage:!1,theme:D,pageTitle:E,pageDescription:T,pageKeywords:x,titleType:N},n.createElement(m,{title:p?n.createElement(p,null):E,label:"label",tabs:w,theme:D}),w&&n.createElement(h,{title:E,slug:I,tabs:w,currentTab:L}),n.createElement(f.Z,{padded:!0},a,n.createElement(d,{relativePagePath:b}),n.createElement(y,{date:C})),n.createElement(u.Z,{pageContext:t,location:i,slug:I,tabs:w,currentTab:L}),n.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-common-task-dbconfig-db-2-mdx-455fae50e7c443867987.js.map