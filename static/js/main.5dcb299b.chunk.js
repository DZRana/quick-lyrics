(this["webpackJsonpquick-lyrics"]=this["webpackJsonpquick-lyrics"]||[]).push([[0],{165:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c(58),n=c.n(a),s=(c(66),c(4)),i=c.n(s),o=c(27),l=c(7),d=c(59),b=c.n(d),u=c(18),h=c.n(u).a.create({baseURL:"https://api.giphy.com/v1/gifs",params:{api_key:"Ww3O0TkvV9U52Ljt9rh45b7yzagjzGyH"}}),j=c(60),p=c(61),m=c(0),f=function(e){var t=e.currentTrack,c=Object(r.useState)("LOADING"),a=Object(l.a)(c,2),n=a[0],s=a[1],i=t.item,o=i.name,d=i.artists;return Object(r.useEffect)((function(){var e={apiKey:"O8ztO58Z-f9A2FZ1a2g-eTf9UN-Jy50I_yUX49zsm5jsAFe-f4D_PLPVeQQLj8ZQ",title:o,artist:d[0].name,optimizeQuery:!0};Object(p.getLyrics)(e).then((function(e){s(e)}))}),[t]),null===n?Object(m.jsx)("p",{children:"NO LYRICS AVAILABLE"}):Object(m.jsx)("pre",{className:"whitespace-pre-wrap",children:n})},g=function(e){var t=e.spotifyInstance,c=e.currentTrack,r=c.item,a=r.name,n=r.artists,s=c.item.album,i=s.name,o=s.images;return Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{className:"m-auto rounded",alt:i,src:o[0].url}),Object(m.jsxs)("div",{className:"text-center",children:[a,Object(m.jsx)("br",{}),n.map((function(e,t){return t+1!==n.length?"".concat(e.name,", "):"".concat(e.name)})),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"flex justify-center",children:[Object(m.jsx)("button",{className:"bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded",onClick:function(){t.skipToPrevious((function(e,t){e&&console.error(e)}))},children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",className:"bi bi-skip-backward-circle-fill",viewBox:"0 0 16 16",children:Object(m.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.79-2.907L8.5 7.028V5.5a.5.5 0 0 0-.79-.407L5 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407V8.972l2.71 1.935A.5.5 0 0 0 12 10.5v-5a.5.5 0 0 0-.79-.407z"})})}),Object(m.jsx)("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded",onClick:function(){t.pause((function(e,t){e&&console.error(e)}))},children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",className:"bi bi-pause-circle-fill",viewBox:"0 0 16 16",children:Object(m.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"})})}),Object(m.jsx)("button",{className:"bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded",onClick:function(){t.seek(0,(function(e,t){e&&console.error(e)}))},children:Object(m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",className:"bi bi-arrow-repeat",viewBox:"0 0 16 16",children:[Object(m.jsx)("path",{d:"M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"}),Object(m.jsx)("path",{fillRule:"evenodd",d:"M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"})]})}),Object(m.jsx)("button",{className:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded",onClick:function(){t.play((function(e,t){e&&console.error(e)}))},children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",className:"bi bi-play-circle-fill",viewBox:"0 0 16 16",children:Object(m.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"})})}),Object(m.jsx)("button",{className:"bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded",onClick:function(){t.skipToNext((function(e,t){e&&console.error(e)}))},children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",className:"bi bi-skip-forward-circle-fill",viewBox:"0 0 16 16",children:Object(m.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.79 5.093A.5.5 0 0 0 4 5.5v5a.5.5 0 0 0 .79.407L7.5 8.972V10.5a.5.5 0 0 0 .79.407L11 8.972V10.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0v1.528L8.29 5.093a.5.5 0 0 0-.79.407v1.528L4.79 5.093z"})})})]})]}),Object(m.jsxs)("div",{className:"text-xs mb-4 mt-2 md:text-sm",children:[Object(m.jsx)("p",{className:"font-bold",children:"How to Use:"}),Object(m.jsxs)("p",{children:["Use the above controls or select a song directly from the Spotify app to get the corresponding lyrics",Object(m.jsx)("br",{}),"from Genius (lyrics may be inaccurate/missing for more obscure songs).*"]}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:"*Please wait a minimum of 10 seconds for song/lyrics to reflect new song (Polling rate: once per 10s)."})]})]})},x=function(){var e=new b.a,t="c48609e4b0c44cd9b339f8313790dcdc",c="https://dzrana.github.io/quick-lyrics/",a=Math.random().toString(20).substr(2,16),n="https://accounts.spotify.com/authorize?client_id=".concat(t,"&scope=").concat("user-read-playback-state user-modify-playback-state user-read-currently-playing app-remote-control streaming","&redirect_uri=").concat(c,"&state=").concat(a,"&response_type=").concat("code"),s=window.location.search,d=new URLSearchParams(s).get("code"),u=Object(r.useState)(null),p=Object(l.a)(u,2),x=p[0],O=p[1],v=Object(r.useState)(null),w=Object(l.a)(v,2),y=w[0],k=w[1],N=Object(r.useState)(!1),z=Object(l.a)(N,2),A=z[0],L=z[1],C=Object(r.useState)(null),M=Object(l.a)(C,2),S=M[0],T=M[1],_=function(){var r=Object(o.a)(i.a.mark((function r(){var a,n;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,j.a.post("/api/token","grant_type=authorization_code&code=".concat(d,"&redirect_uri=").concat(c,"&client_id=").concat(t,"&client_secret=").concat("68562841c097490aa23eb79873c4d8b5"));case 2:a=r.sent,e.setAccessToken(a.data.access_token),O(e),n=function t(){var c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e.getMyCurrentPlayingTrack((function(e,r){e?console.error(e):r&&null!==r.item.id?(L(!0),""===c?(k(r),t(r.item.id)):setTimeout((function(){c!==r.item.id?(k(r),t(r.item.id)):t(r.item.id)}),1e4)):L(!1)}))},n();case 7:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();Object(r.useEffect)((function(){null!==d&&_()}),[]);var I=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/search",{params:{q:"anime aesthetic"}});case 2:t=e.sent,T(t.data.data[Math.floor(50*Math.random())].images.original.url);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){I()}),[y]),null===d?Object(m.jsx)("div",{className:"flex h-screen",children:Object(m.jsx)("a",{className:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-auto",href:n,children:"Sign In"})}):A?y?Object(m.jsx)("div",{className:"text-white bg-cover bg-center",style:{backgroundImage:"url(".concat(S,")")},children:Object(m.jsxs)("div",{className:"md:flex md:relative bg-gray-800 bg-opacity-60",children:[Object(m.jsx)("aside",{className:"md:h-screen md:sticky md:top-0 md:pl-24 md:pt-8 md:pr-24",children:Object(m.jsx)(g,{spotifyInstance:x,currentTrack:y})}),Object(m.jsx)("main",{className:"m-auto",children:Object(m.jsx)(f,{currentTrack:y})})]})}):Object(m.jsx)("div",{className:"flex h-screen",children:Object(m.jsx)("div",{className:"m-auto",children:"LOADING"})}):Object(m.jsx)("div",{className:"text-white flex h-screen whitespace-nowrap",children:Object(m.jsxs)("div",{className:"m-auto",children:["Open Spotify App, Play a Song, then"," ",Object(m.jsx)("a",{className:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",href:c,children:"Log Back In"})]})})};n.a.render(Object(m.jsx)(x,{}),document.querySelector("#root"))},60:function(e,t,c){"use strict";(function(e){var r=c(18),a=c.n(r);t.a=a.a.create({baseURL:"https://accounts.spotify.com",headers:{Authorization:"Basic "+e.from("c48609e4b0c44cd9b339f8313790dcdc:68562841c097490aa23eb79873c4d8b5").toString("base64"),"Content-Type":"application/x-www-form-urlencoded"}})}).call(this,c(85).Buffer)},66:function(e,t,c){}},[[165,1,2]]]);
//# sourceMappingURL=main.5dcb299b.chunk.js.map