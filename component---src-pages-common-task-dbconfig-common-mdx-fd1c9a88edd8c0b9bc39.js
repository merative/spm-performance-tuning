"use strict";(self.webpackChunkspm_performance_tuning=self.webpackChunkspm_performance_tuning||[]).push([[1379],{1874:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return g}});var n=a(3366),r=(a(7294),a(4983)),i=a(4295),o=["components"],l={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)}},c=s("AnchorLinks"),m=s("AnchorLink"),d=s("InlineNotification"),u={_frontmatter:l},p=i.Z;function g(e){var t=e.components,a=(0,n.Z)(e,o);return(0,r.kt)(p,Object.assign({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(c,{small:!0,mdxType:"AnchorLinks"},(0,r.kt)(m,{mdxType:"AnchorLink"},"Foreign key constraints")),(0,r.kt)("p",null,"The following maintenance and database design guidelines apply to tuning across all supported databases."),(0,r.kt)(d,{kind:"warning",mdxType:"InlineNotification"},(0,r.kt)("p",null,"Database tuning provided in this guidance is not comprehensive."),(0,r.kt)("p",null,"However, the following values are a starting point for how to configure a performant database for IBM® Cúram Social Program Management.\nIt is our recommendation that project teams verify their own tuning, and where necessary adapt and expand the configuration based on their own requirements prior to going in to production.")),(0,r.kt)("h2",null,"Foreign key constraints"),(0,r.kt)("p",null,"As outlined in the IBM Cúram Social Program Management documentation ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/spm/8.0.0?topic=setup-creating-production-database-in-application"},"Creating the Production Database in the Application"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Omit foreign key constraints as they are not supported in a production environment"),(0,r.kt)(d,{mdxType:"InlineNotification"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Note:")," The Cúram Reference Application enforces referential integrity (RI) in the application and as such using database-enforced RI will degrade performance. It is strongly recommended that in a production environment you do not create foreign key constraints on your database.")))))}g.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(7294),r=a(8650),i=a.n(r),o=a(5444),l=a(5426),s=a(1551),c=a(5900),m=a.n(c),d=function(e){var t,a=e.title,r=e.theme,i=e.tabs,o=void 0===i?[]:i;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=o.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},u=function(e){var t=e.relativePagePath,a=e.repository,r=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||r,l=i.baseUrl,s=i.subDirectory,c=l+"/edit/"+i.branch+s+"/src/pages"+t;return l?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=a(4275),g=a(1721),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,l=r.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),s=a===l,c=new RegExp(l+"/?(#.*)?$"),d=r.replace(c,a);return n.createElement("li",{key:e,className:m()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+d},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),f=h,b=a(2881),k=a(6958),v=a(36),E=function(e){var t=e.date,a=new Date(t);return t?n.createElement(v.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(v.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},y=function(e){var t=e.pageContext,a=e.children,r=e.location,c=e.Title,m=t.frontmatter,g=void 0===m?{}:m,h=t.relativePagePath,v=t.titleType,y=g.tabs,w=g.title,N=g.theme,x=g.description,P=g.keywords,T=g.date,C=(0,k.Z)().interiorTheme,D=(0,o.useStaticQuery)("2456312558").site.pathPrefix,I=D?r.pathname.replace(D,""):r.pathname,L=y?I.split("/").filter(Boolean).slice(-1)[0]||i()(y[0],{lower:!0}):"",Z=N||C;return n.createElement(s.Z,{tabs:y,homepage:!1,theme:Z,pageTitle:w,pageDescription:x,pageKeywords:P,titleType:v},n.createElement(d,{title:c?n.createElement(c,null):w,label:"label",tabs:y,theme:Z}),y&&n.createElement(f,{title:w,slug:I,tabs:y,currentTab:L}),n.createElement(b.Z,{padded:!0},a,n.createElement(u,{relativePagePath:h}),n.createElement(E,{date:T})),n.createElement(p.Z,{pageContext:t,location:r,slug:I,tabs:y,currentTab:L}),n.createElement(l.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-common-task-dbconfig-common-mdx-fd1c9a88edd8c0b9bc39.js.map