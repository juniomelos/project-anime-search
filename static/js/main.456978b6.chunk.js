(this["webpackJsonpproject-anime-search"]=this["webpackJsonpproject-anime-search"]||[]).push([[0],{35:function(e,t,a){e.exports=a.p+"static/media/not-found.43731682.png"},36:function(e,t,a){e.exports=a.p+"static/media/search.d5b17b6c.svg"},38:function(e,t,a){e.exports=a(72)},72:function(e,t,a){"use strict";a.r(t);a(39);var n=a(0),c=a.n(n),r=a(31),l=a.n(r),s=a(10),i=a(1),m=a(12),o=a.n(m),u=a(13),d=a(32),E=a.n(d).a.create({baseURL:"https://api.jikan.moe/v3"});a(9);var p=function(e){var t=e.id,a=e.title,n=e.image_url,r=Object(i.f)();return c.a.createElement("div",{className:"card2"},c.a.createElement("article",{className:"card"},c.a.createElement("figure",null,c.a.createElement("img",{className:"card-img-top",style:{cursor:"pointer"},src:n,alt:a,onClick:function(){r.push("/project-anime-search/details/".concat(t))}})),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-title"},a))))};var h=function(e){var t=e.list;return c.a.createElement("ul",{className:"card-list"},t.map((function(e){return c.a.createElement("li",{key:e.mal_id},c.a.createElement(p,{id:e.mal_id,title:e.title,image_url:e.image_url}))})))},v=a(8),f=Object(n.createContext)(),g=function(e){var t=e.children,a=Object(n.useState)(""),r=Object(v.a)(a,2),l=r[0],s=r[1],i=Object(n.useState)(!1),m=Object(v.a)(i,2),o=m[0],u=m[1],d=Object(n.useState)([]),E=Object(v.a)(d,2),p=E[0],h=E[1],g=Object(n.useState)(""),b=Object(v.a)(g,2),N=b[0],j=b[1],x=Object(n.useState)([]),O=Object(v.a)(x,2),y=O[0],L=O[1],S=Object(n.useState)([]),k=Object(v.a)(S,2),w={searched:l,setSearched:s,isLoading:o,setIsLoading:u,loadedList:p,setLoadedList:h,error:N,setError:j,recommendations:y,setRecommendations:L,anime:k[0],setAnime:k[1]};return c.a.createElement(f.Provider,{value:w},t)};var b=function(){var e=Object(n.useContext)(f),t=e.isLoading,a=e.setIsLoading,r=e.searched,l=e.setSearched,s=e.loadedList,i=e.setLoadedList;function m(){return(m=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a(!0),e.next=4,E.get("/search/anime?q=".concat(r,"&limit=16"));case 4:n=e.sent,i(n.data.results),a(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return c.a.createElement("section",{className:""},c.a.createElement("form",{onSubmit:function(e){return m.apply(this,arguments)}},c.a.createElement("div",{className:""},c.a.createElement("div",{className:"form-inline my-2 my-lg-0"},c.a.createElement("input",{className:"form-control mr-sm-2",name:"search",type:"search",placeholder:"Type anime name...",minLength:3,value:r,onChange:function(e){var t=e.target.value;l(t.trimStart())}}),t?c.a.createElement("div",{className:"spinner-border text-warning"}):c.a.createElement("button",{type:"submit",className:"btn btn-outline-warning my-2 my-sm-0",disabled:r.length<3},"Search")),c.a.createElement("p",{className:"form-text text-muted"},"Minimum 3 characters"))),c.a.createElement("section",{className:"section"},c.a.createElement(h,{list:s})))},N=a(34),j=a.n(N),x=function(){var e=Object(n.useContext)(f),t=e.setError,a=e.setRecommendations,c=e.setAnime,r=e.setIsLoading,l=Object(i.g)().id,s=Object(i.f)();Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){var n,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.get("/anime/".concat(l));case 3:return n=e.sent,c(n.data),e.next=7,E.get("/anime/".concat(l,"/recommendations"));case 7:i=e.sent,a(i.data.recommendations),r(!0),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),t(e.t0.message),s.push("/");case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){return r(!1)}}),[l,r])};var O=function(){var e=Object(n.useContext)(f),t=e.recommendations,a=e.anime,r=e.isLoading;return x(),c.a.createElement("section",null,r?c.a.createElement("article",null,c.a.createElement("header",{className:"list"},c.a.createElement("img",{src:a.image_url,alt:a.title}),c.a.createElement("div",{className:"textWhite loadingDetails"},c.a.createElement("hgroup",null,c.a.createElement("h1",null,a.title),c.a.createElement("h2",null,"".concat(a.title_english))),c.a.createElement("div",null,c.a.createElement("p",null,"Status: \xa0 ",c.a.createElement("span",null,a.status)),c.a.createElement("p",null,"Total episodes: ",a.episodes),c.a.createElement("div",{className:"list"},c.a.createElement("p",null,"Genres:"),c.a.createElement("ul",{className:"list-genre "},a.genres.map((function(e){return c.a.createElement("div",{className:"list-genre-li"},c.a.createElement("li",{key:e.mal_id},e.name))}))))))),c.a.createElement("section",{className:"textWhite"},c.a.createElement("h3",null,"Synopsis"),c.a.createElement("p",null,a.synopsis)),c.a.createElement("section",null,c.a.createElement(j.a,{url:a.trailer_url,controls:!0})),c.a.createElement("section",null,c.a.createElement("h3",{className:"textWhite"},"Recommendations"),c.a.createElement(h,{list:t}))):c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("div",{className:"spinner-grow text-info"}),c.a.createElement("div",{className:"spinner-grow text-danger loadingDetails"}),c.a.createElement("div",{className:"spinner-grow text-success"})))},y=a(35),L=a.n(y);var S=function(){return c.a.createElement("section",{className:"img-notFound"},c.a.createElement("div",null,c.a.createElement("img",{src:L.a,alt:"Page not found"})))};var k=function(){return c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/project-anime-search/",exact:!0,component:b}),c.a.createElement(i.a,{path:"/project-anime-search/details/:id",component:O}),c.a.createElement(i.a,{component:S}))},w=a(36),_=a.n(w);var C=function(){var e=Object(i.f)();return c.a.createElement("nav",{className:"corpo-pesquisa"},c.a.createElement("div",{className:"navbar navbar bg"},c.a.createElement("div",null,c.a.createElement("h1",{className:"abc"},c.a.createElement("i",null,"Anime Search")," ",c.a.createElement("img",{src:_.a,className:"img-search",alt:"search"}))),c.a.createElement("button",{onClick:function(){e.goBack("/")},className:"btn btn-warning"},"Back")))};var I=function(){return c.a.createElement(s.a,null,c.a.createElement(g,null,c.a.createElement(C,null),c.a.createElement(k,null)))};l.a.render(c.a.createElement(I,null),document.getElementById("root"))},9:function(e,t,a){}},[[38,13,14]]]);
//# sourceMappingURL=main.456978b6.chunk.js.map