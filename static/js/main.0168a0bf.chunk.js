(this.webpackJsonpempdirectory=this.webpackJsonpempdirectory||[]).push([[0],{23:function(e,t,a){},3:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),s=a(13),c=a.n(s),i=(a(23),a(14)),l=a(15),d=a(18),o=a(17),h=(a(3),a(0));var j=function(e){var t=e.users;function a(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}return Object(h.jsx)("tbody",{children:void 0!==t[0]&&void 0!==t[0].name?t.map((function(e){var t=e.login,n=e.name,r=e.picture,s=e.phone,c=e.email,i=e.dob;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(h.jsx)("img",{src:r.medium,alt:"profile image for "+n.first+" "+n.last,className:"img-responsive"})}),Object(h.jsxs)("td",{"data-th":"Name",className:"name-cell align-middle",children:[n.first," ",n.last]}),Object(h.jsx)("td",{"data-th":"Phone",className:"align-middle",children:s}),Object(h.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(h.jsx)("a",{href:"mailto:"+c,target:"__blank",children:c})}),Object(h.jsx)("td",{"data-th":"DOB",className:"align-middle",children:a(i.date)})]},t.uuid)})):Object(h.jsx)(h.Fragment,{})})};var u=function(e){var t=e.headings,a=e.users,n=e.handleSort;return Object(h.jsx)("div",{className:"datatable mt-5",children:Object(h.jsxs)("table",{id:"table",className:"table table-striped table-hover table-condensed",children:[Object(h.jsx)("thead",{children:Object(h.jsx)("tr",{children:t.map((function(e){var t=e.name,a=e.width;return Object(h.jsxs)("th",{className:"col",style:{width:a},onClick:function(){n(t.toLowerCase())},children:[t,Object(h.jsx)("span",{className:"pointer"})]},t)}))})}),Object(h.jsx)(j,{users:a})]})})};var m=function(e){var t=e.handleSearchChange;return Object(h.jsx)("div",{className:"searchbox",children:Object(h.jsx)("form",{className:"form-inline",children:Object(h.jsx)("input",{className:"form-control",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){return t(e)}})})})};var b=function(e){var t=e.handleSearchChange;return Object(h.jsx)("nav",{className:"navbar navbar-expand navbar-light bg-light",children:Object(h.jsx)("div",{className:"navbar-collapse row",id:"navbarNav",children:Object(h.jsx)(m,{handleSearchChange:t})})})},f=a(16),v=a.n(f),O=function(){return v.a.get("https://randomuser.me/api/?results=200&nat=us")},x=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={users:[{}],order:"descend",filteredUsers:[{}]},e.headings=[{name:"Image",width:"10%"},{name:"Name",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"DOB",width:"10%"}],e.handleSort=function(t){"descend"===e.state.order?e.setState({order:"ascend"}):e.setState({order:"descend"});var a=e.state.filteredUsers.sort((function(a,n){return"ascend"===e.state.order?void 0===a[t]?1:void 0===n[t]?-1:"name"===t?a[t].first.localeCompare(n[t].first):a[t]-n[t]:void 0===a[t]?1:void 0===n[t]?-1:"name"===t?n[t].first.localeCompare(a[t].first):n[t]-a[t]}));e.setState({filteredUsers:a})},e.handleSearchChange=function(t){console.log(t.target.value);var a=t.target.value,n=e.state.users.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(a.toLowerCase())}));e.setState({filteredUsers:n})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;O().then((function(t){e.setState({users:t.data.results,filteredUsers:t.data.results})}))}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{handleSearchChange:this.handleSearchChange}),Object(h.jsx)("div",{className:"data-area",children:Object(h.jsx)(u,{headings:this.headings,users:this.state.filteredUsers,handleSort:this.handleSort})})]})}}]),a}(n.Component),g=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(x,{})})};var p=function(e){var t=e.children;return Object(h.jsx)("div",{className:"wrapper",children:t})},N=function(){return Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("h1",{children:"Employee Directory"}),Object(h.jsx)("p",{children:"Click on carrots to filter by heading or use the search box to narrow your results."})]})};a(43);var S=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(p,{children:[Object(h.jsx)(N,{}),Object(h.jsx)(g,{})]})})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root")),C()}},[[44,1,2]]]);
//# sourceMappingURL=main.0168a0bf.chunk.js.map