(this["webpackJsonptmdb-app"]=this["webpackJsonptmdb-app"]||[]).push([[0],{13:function(e,t,a){e.exports={moviePage:"MoviePage_moviePage__26sas",wrapper:"MoviePage_wrapper__3-iT1",background:"MoviePage_background__1dLwe",movie:"MoviePage_movie__2faz0",poster:"MoviePage_poster__2sMk9",info:"MoviePage_info__gcSKj",genres:"MoviePage_genres__DdQ66",votes:"MoviePage_votes__KnvZz",tagline:"MoviePage_tagline__18Hvk",review:"MoviePage_review__1vbIW"}},14:function(e,t,a){e.exports={search:"SearchPage_search__2wrUc",input:"SearchPage_input__cs5aj",searchMode:"SearchPage_searchMode__2FRAt",mode:"SearchPage_mode__2OUAn",active:"SearchPage_active__fArti",adult:"SearchPage_adult___OSF0",results:"SearchPage_results__HJyL2"}},21:function(e,t,a){e.exports={header:"Header_header__2s5SP",wrapper:"Header_wrapper__3LEv3",search:"Header_search__1kl5y",navBar:"Header_navBar__3w5aW"}},31:function(e,t,a){e.exports={wrapper:"MoviesList_wrapper__dbooU",movies:"MoviesList_movies__t_7pg"}},42:function(e,t,a){e.exports={card:"MovieCard_card__3Dao5",emergence:"MovieCard_emergence__3mXEo"}},44:function(e,t,a){e.exports={app:"App_app__HOOsG"}},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(22),r=a.n(n),o=a.p+"static/media/logo.bf7f470b.svg",s=a(21),i=a.n(s),u=a(11),A=a(1),j=function(e){e.setViewSearch,e.viewSearch;return Object(A.jsx)("header",{className:i.a.header,children:Object(A.jsxs)("div",{className:i.a.wrapper,children:[Object(A.jsx)("nav",{className:i.a.navBar,children:Object(A.jsx)(u.b,{to:"/",children:Object(A.jsx)("img",{src:o,alt:""})})}),Object(A.jsx)(u.b,{to:"/search",children:Object(A.jsx)("span",{className:"material-icons ".concat(i.a.search),children:"search"})})]})})},p=a(4),v=function(e){return e.popularMovies},l=function(e){return e.popularTv},d=function(e){return e.topRatedMovies},h=function(e){return e.moviePage},O=function(e){return e.tvPage},b=function(e){return e.searchedMovies},g=function(e){return e.searchedTv},m=function(e){return e.searchValue},x=function(e){return e.pageCounter},f=function(e){return e.isFound},E=function(e){return e.isFetching},S=function(e){return e.config},C=function(e){return e.viewBtn},y=a(31),k=a.n(y),T=a(42),N=a.n(T),w=a(6),F=a.n(w),R=a(16),P="GET_POPULAR_MOVIES",M="GET_POPULAR_TV",U="GET_MOVIE",Y="GET_TV",B="CLEAR_MOVIE_PAGE",I="GET_TOP_RATED_MOVIES",Q="SEARCH_MOVIES",G="SEARCH_TV",L="CLEAR_SEARCHED_MOVIES",V="CLEAR_SEARCHED_TV",D="UPDATE_SEARCH_VALUE",z="UPDATE_PAGE_COUNTER",K="CLEAR_PAGE_COUNTER",J="SET_NOT_FOUND",H="TOGGLE_IS_FETCHING",q="TOGGLE_VIEW_BUTTON",_="SET_CONFIG",X=a(43),W="api_key=aee2215c6411642a540bd3f9007fa7fd",Z="language=ru-RU",$=a.n(X).a.create({baseURL:"https://api.themoviedb.org/3"}),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return $.get("/movie/popular?".concat(W,"&").concat(Z,"&page=").concat(e)).then((function(e){return e.data}))},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return $.get("/tv/popular?".concat(W,"&").concat(Z,"&page=").concat(e)).then((function(e){return e.data}))},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return $.get("/movie/top_rated?".concat(W,"&").concat(Z,"&page=").concat(e)).then((function(e){return e.data}))},ce=function(e){return $.get("/movie/".concat(e,"?").concat(W,"&").concat(Z)).then((function(e){return e.data}))},ne=function(e){return $.get("/tv/".concat(e,"?").concat(W,"&").concat(Z)).then((function(e){return e.data}))},re=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return $.get("/search/movie?".concat(W,"&").concat(Z,"&include_adult=").concat(e,"&query=").concat(t,"&page=").concat(a)).then((function(e){return e.data}))},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return $.get("/search/tv?".concat(W,"&").concat(Z,"&include_adult=").concat(e,"&query=").concat(t,"&page=").concat(a)).then((function(e){return e.data}))},se=function(){return $.get("/configuration?".concat(W)).then((function(e){return e.data}))},ie=function(e){return{type:D,payload:e}},ue=function(){return{type:z}},Ae=function(){return{type:L}},je=function(){return{type:V}},pe=function(e){return{type:J,payload:e}},ve=function(e){return{type:H,payload:e}},le=function(e){return{type:q,payload:e}},de=function(e,t,a){return function(){var c=Object(R.a)(F.a.mark((function c(n){var r;return F.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n(ve(!0)),c.next=3,oe(e,t,a);case 3:(r=c.sent).results.length?(n((o=r.results,{type:G,payload:o})),n(pe(!0))):n(pe(!1)),n(ve(!1));case 6:case"end":return c.stop()}var o}),c)})));return function(e){return c.apply(this,arguments)}}()},he=function(e,t,a){return function(){var c=Object(R.a)(F.a.mark((function c(n){var r;return F.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n(ve(!0)),c.next=3,re(e,t,a);case 3:(r=c.sent).results.length?(n((o=r.results,{type:Q,payload:o})),n(pe(!0))):n(pe(!1)),n(ve(!1));case 6:case"end":return c.stop()}var o}),c)})));return function(e){return c.apply(this,arguments)}}()},Oe=function(e){var t=e.item,a=e.type,c=Object(p.c)(S),n=Object(p.b)();return Object(A.jsxs)("div",{className:N.a.card,onClick:function(){n({type:B})},children:[Object(A.jsx)("img",{src:t.poster_path?"".concat(c.images.secure_base_url).concat(c.images.poster_sizes[4]).concat(t.poster_path):"data:image/jpeg;base64,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",alt:"movie"}),Object(A.jsx)("h3",{children:"movie"===a?t.title:t.name}),Object(A.jsx)("span",{children:"movie"===a?new Date(t.release_date).toLocaleDateString():new Date(t.first_air_date).toLocaleDateString()})]})},be=function(e){var t=e.movies,a=e.title,c=e.type;return Object(A.jsxs)("div",{className:k.a.wrapper,children:[Object(A.jsx)("h2",{children:a}),Object(A.jsx)("div",{className:k.a.movies,children:t.map((function(e){return Object(A.jsx)(u.b,{to:"movie"===c?"movie/".concat(e.id):"tv/".concat(e.id),children:Object(A.jsx)(Oe,{item:e,type:c},e.id)},e.id)}))})]})},ge=function(){var e=Object(p.c)(v),t=Object(p.c)(l),a=Object(p.c)(d);return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(be,{movies:e,title:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b",type:"movie"}),Object(A.jsx)(be,{movies:t,title:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0441\u0435\u0440\u0438\u0430\u043b\u044b",type:"tv"}),Object(A.jsx)(be,{movies:a,title:"\u0412 \u0442\u0440\u0435\u043d\u0434\u0435",type:"movie"})]})},me=a(44),xe=a.n(me),fe=(a(76),function(){return Object(A.jsxs)("div",{className:"lds-ripple",children:[Object(A.jsx)("div",{}),Object(A.jsx)("div",{})]})}),Ee=a(5),Se=a(46),Ce=a(13),ye=a.n(Ce),ke=Object(Ee.f)((function(e){var t=e.config,a=e.type,n=Object(Se.a)(e,["config","type"]),r=Object(p.b)(),o=Object(p.c)(h),s=Object(p.c)(O);return Object(c.useEffect)((function(){var e=n.match.params.id;r("movie"===a?function(e){return function(){var t=Object(R.a)(F.a.mark((function t(a){var c;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ce(e);case 2:c=t.sent,a({type:U,payload:c});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e):function(e){return function(){var t=Object(R.a)(F.a.mark((function t(a){var c;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ne(e);case 2:c=t.sent,a({type:Y,payload:c});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}),[r,n.match.params.id,a]),"movie"===a&&!o||"tv"===a&&!s?Object(A.jsx)(fe,{}):Object(A.jsx)("div",{className:ye.a.moviePage,children:Object(A.jsxs)("div",{className:ye.a.wrapper,children:[Object(A.jsx)("img",{className:ye.a.background,src:"".concat(t.images.secure_base_url).concat(t.images.profile_sizes[2]).concat("movie"===a?o.backdrop_path:s.backdrop_path),alt:"movie"}),Object(A.jsxs)("div",{className:ye.a.movie,children:[Object(A.jsx)("img",{src:"".concat(t.images.secure_base_url).concat(t.images.profile_sizes[3]).concat("movie"===a?o.poster_path:s.poster_path),alt:""}),Object(A.jsxs)("div",{className:ye.a.info,children:["movie"===a?Object(A.jsxs)("h1",{children:[o.title," (",new Date(o.release_date).getFullYear(),")"]}):Object(A.jsxs)("h1",{children:[s.name," (",new Date(s.first_air_date).getFullYear(),")"]}),Object(A.jsxs)("div",{className:ye.a.genres,children:["\u0416\u0430\u043d\u0440\u044b:","movie"===a?o.genres.map((function(e){return Object(A.jsxs)("span",{children:[e.name,";"]},e.id)})):s.genres.map((function(e){return Object(A.jsxs)("span",{children:[e.name,";"]},e.id)}))]}),Object(A.jsxs)("div",{className:ye.a.votes,children:[Object(A.jsxs)("span",{children:["\u041e\u0446\u0435\u043d\u043a\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439: ","movie"===a?o.vote_average.toFixed(1):s.vote_average.toFixed(1),"."]}),Object(A.jsxs)("span",{children:["\u0412\u0441\u0435\u0433\u043e \u0433\u043e\u043b\u043e\u0441\u043e\u0432: ","movie"===a?o.vote_count:s.vote_count]})]}),"movie"===a&&o.tagline&&Object(A.jsxs)("p",{className:ye.a.tagline,children:["\xab",o.tagline,"\xbb"]}),"tv"===a&&s.tagline&&Object(A.jsxs)("p",{className:ye.a.tagline,children:["\xab",s.tagline,"\xbb"]}),Object(A.jsx)("h3",{children:"\u041e\u0431\u0437\u043e\u0440"}),Object(A.jsx)("p",{className:ye.a.review,children:"movie"===a?o.overview:s.overview})]})]})]})})})),Te=a(25),Ne=a(14),we=a.n(Ne),Fe=function(){var e=Object(p.b)(),t=Object(c.useState)(!1),a=Object(Te.a)(t,2),n=a[0],r=a[1],o=Object(p.c)(C),s=Object(c.useState)("movie"),i=Object(Te.a)(s,2),j=i[0],v=i[1],l=Object(c.useState)(""),d=Object(Te.a)(l,2),h=d[0],O=d[1],S=Object(p.c)(m),y=Object(p.c)(x),k=Object(p.c)(f),T=Object(p.c)(E),N=Object(p.c)(b),w=Object(p.c)(g),F=function(t){""!==S.trim()&&(O(S),e({type:K}),"movie"===j?(e(Ae()),e(he(n,S,t))):(e(je()),e(de(n,S,t))),e(le(!0)),e(ue()))};return Object(c.useEffect)((function(){e(pe(!0))}),[e]),Object(A.jsxs)("div",{className:we.a.search,children:[Object(A.jsxs)("div",{className:we.a.input,children:[Object(A.jsxs)("div",{className:we.a.searchMode,children:[Object(A.jsx)("h1",{children:"\u041f\u043e\u0438\u0441\u043a"}),Object(A.jsx)("span",{className:"".concat(we.a.mode," ").concat("movie"===j&&we.a.active),onClick:function(){e(je()),v("movie"),e(le(!1)),e(pe(!0)),e(ie("")),r(!1)},children:"\u0444\u0438\u043b\u044c\u043c\u043e\u0432"}),Object(A.jsx)("span",{className:"".concat(we.a.mode," ").concat("tv"===j&&we.a.active),onClick:function(){e(Ae()),v("tv"),e(le(!1)),e(pe(!0)),e(ie("")),r(!1)},children:"\u0441\u0435\u0440\u0438\u0430\u043b\u043e\u0432"})]}),Object(A.jsx)("span",{onClick:function(){return F(y)},className:"material-icons",children:"search"}),Object(A.jsx)("input",{onKeyUp:function(e){"Enter"===e.key&&F(y)},value:S,onChange:function(t){return a=t.target.value,void e(ie(a));var a},type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441"}),Object(A.jsxs)("div",{className:we.a.adult,children:[Object(A.jsx)("label",{htmlFor:"adult",children:"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0444\u0438\u043b\u044c\u043c\u044b 18+"}),Object(A.jsx)("input",{checked:n,onChange:function(){return r(!n)},type:"checkbox",id:"adult"})]})]}),"movie"===j?Object(A.jsx)("div",{className:we.a.results,children:N.map((function(e){return Object(A.jsx)(u.b,{to:"movie/".concat(e.id),children:Object(A.jsx)(Oe,{item:e,type:j},e.id)},e.id)}))}):Object(A.jsx)("div",{className:we.a.results,children:w.map((function(e){return Object(A.jsx)(u.b,{to:"tv/".concat(e.id),children:Object(A.jsx)(Oe,{item:e,type:j},e.id)},e.id)}))}),!k&&!T&&Object(A.jsx)("p",{children:"\u041f\u043e \u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e!"}),o&&k&&Object(A.jsx)("button",{disabled:T,onClick:function(){return t=y,e(ue()),void e("movie"===j?he(n,h,t):de(n,h,t));var t},children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0449\u0435"})]})},Re=function(){var e=Object(p.b)(),t=Object(p.c)(S);return Object(c.useEffect)((function(){var t;e(function(){var e=Object(R.a)(F.a.mark((function e(t){var a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se();case 2:a=e.sent,t({type:_,payload:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(R.a)(F.a.mark((function e(a){var c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee(t);case 2:c=e.sent,a((n=c.results,{type:P,payload:n}));case 4:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}()),e(function(e){return function(){var t=Object(R.a)(F.a.mark((function t(a){var c;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ae(e);case 2:c=t.sent,a((n=c.results,{type:I,payload:n}));case 4:case"end":return t.stop()}var n}),t)})));return function(e){return t.apply(this,arguments)}}()}()),e(function(e){return function(){var t=Object(R.a)(F.a.mark((function t(a){var c;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,te(e);case 2:c=t.sent,a((n=c.results,{type:M,payload:n}));case 4:case"end":return t.stop()}var n}),t)})));return function(e){return t.apply(this,arguments)}}()}())}),[e]),t?Object(A.jsxs)("div",{className:xe.a.app,children:[Object(A.jsx)(j,{}),Object(A.jsxs)(Ee.c,{children:[Object(A.jsx)(Ee.a,{exact:!0,path:"/",render:function(){return Object(A.jsx)(ge,{})}}),Object(A.jsx)(Ee.a,{path:"/search",render:function(){return Object(A.jsx)(Fe,{})}}),Object(A.jsx)(Ee.a,{path:"/movie/:id",render:function(){return Object(A.jsx)(ke,{config:t,type:"movie"})}}),Object(A.jsx)(Ee.a,{path:"/tv/:id",render:function(){return Object(A.jsx)(ke,{config:t,type:"tv"})}})]})]}):Object(A.jsx)(fe,{})},Pe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,78)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),c(e),n(e),r(e),o(e)}))},Me=a(18),Ue=a(45),Ye=a(15),Be=a(2),Ie={popularMovies:[],topRatedMovies:[],popularTv:[],moviePage:null,tvPage:null,config:null,searchedMovies:[],searchedTv:[],searchValue:"",pageCounter:1,isFound:!1,isFetching:!1,viewBtn:!1},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(Be.a)(Object(Be.a)({},e),{},{popularMovies:[].concat(Object(Ye.a)(e.popularMovies),Object(Ye.a)(t.payload))});case _:return Object(Be.a)(Object(Be.a)({},e),{},{config:t.payload});case I:return Object(Be.a)(Object(Be.a)({},e),{},{topRatedMovies:[].concat(Object(Ye.a)(e.topRatedMovies),Object(Ye.a)(t.payload))});case M:return Object(Be.a)(Object(Be.a)({},e),{},{popularTv:[].concat(Object(Ye.a)(e.popularTv),Object(Ye.a)(t.payload))});case U:return Object(Be.a)(Object(Be.a)({},e),{},{moviePage:t.payload});case Y:return Object(Be.a)(Object(Be.a)({},e),{},{tvPage:t.payload});case B:return Object(Be.a)(Object(Be.a)({},e),{},{moviePage:null,tvPage:null});case Q:return Object(Be.a)(Object(Be.a)({},e),{},{searchedMovies:[].concat(Object(Ye.a)(e.searchedMovies),Object(Ye.a)(t.payload))});case L:return Object(Be.a)(Object(Be.a)({},e),{},{searchedMovies:[]});case V:return Object(Be.a)(Object(Be.a)({},e),{},{searchedTv:[]});case D:return Object(Be.a)(Object(Be.a)({},e),{},{searchValue:t.payload});case z:return Object(Be.a)(Object(Be.a)({},e),{},{pageCounter:e.pageCounter+1});case K:return Object(Be.a)(Object(Be.a)({},e),{},{pageCounter:1});case J:return Object(Be.a)(Object(Be.a)({},e),{},{isFound:t.payload});case H:return Object(Be.a)(Object(Be.a)({},e),{},{isFetching:t.payload});case G:return Object(Be.a)(Object(Be.a)({},e),{},{searchedTv:[].concat(Object(Ye.a)(e.searchedTv),Object(Ye.a)(t.payload))});case q:return Object(Be.a)(Object(Be.a)({},e),{},{viewBtn:t.payload});default:return e}},Ge=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Me.c,Le=Object(Me.d)(Qe,Ge(Object(Me.a)(Ue.a)));r.a.render(Object(A.jsx)(u.a,{basename:"/tmdb-app",children:Object(A.jsx)(p.a,{store:Le,children:Object(A.jsx)(Re,{})})}),document.getElementById("root")),Pe()}},[[77,1,2]]]);
//# sourceMappingURL=main.3eb35908.chunk.js.map