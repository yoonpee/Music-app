(this["webpackJsonpreact-player"]=this["webpackJsonpreact-player"]||[]).push([[0],{15:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var a=c(2),o=c.n(a),i=c(10),r=c.n(i),s=c(3),n=(c(15),c(9)),p=c(5),l=c(6),h=c(1);var d=function(e){var t=e.currentSong,c=e.isPlaying,o=e.setIsPlaying,i=Object(a.useRef)(null),r=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},d=Object(a.useState)({currentTime:null,duration:null}),j=Object(s.a)(d,2),b=j[0],u=j[1],m=function(e){var t=e.target.currentTime,c=e.target.duration;u(Object(n.a)(Object(n.a)({},b),{},{currentTime:t,duration:c}))};return Object(h.jsxs)("div",{className:"player",children:[Object(h.jsxs)("div",{className:"time-control",children:[Object(h.jsx)("p",{children:r(b.currentTime)}),Object(h.jsx)("input",{type:"range"}),Object(h.jsx)("p",{children:r(b.duration)})]}),Object(h.jsxs)("div",{className:"play-control",children:[Object(h.jsx)(p.a,{className:"skip-back",size:"2x",icon:l.a}),Object(h.jsx)(p.a,{onClick:function(){c?(i.current.pause(),o(!c)):(i.current.play(),o(!c))},className:"play",size:"2x",icon:l.c}),Object(h.jsx)(p.a,{className:"skip-forward",size:"2x",icon:l.b})]}),Object(h.jsx)("audio",{onLoadedMetadata:m,onTimeUpdate:m,ref:i,src:t.audio})]})};var j=function(e){var t=e.currentSong;return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"song-container",children:[Object(h.jsx)("img",{src:t.cover}),Object(h.jsx)("h1",{children:t.name}),Object(h.jsx)("h2",{children:t.artist})]})})},b=c(24);var u=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(b.a)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(b.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(b.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(b.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(b.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(b.a)(),active:!1},{name:"By Chance",cover:"https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",artist:"swuM",audio:"https://mp3.chillhop.com/serve.php/?mp3=15224",color:["#263334","#4A3A2F"],id:Object(b.a)(),active:!1},{name:"Skates",cover:"https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",artist:"swuM",audio:"https://mp3.chillhop.com/serve.php/?mp3=15226",color:["#263334","#4A3A2F"],id:Object(b.a)(),active:!1}]};var m=function(){var e=Object(a.useState)(u()),t=Object(s.a)(e,2),c=t[0],o=(t[1],Object(a.useState)(c[0])),i=Object(s.a)(o,2),r=i[0],n=(i[1],Object(a.useState)(!1)),p=Object(s.a)(n,2),l=p[0],b=p[1];return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(j,{currentSong:r}),Object(h.jsx)(d,{currentSong:r,isPlaying:l,setIsPlaying:b})]})};r.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.7d76cb36.chunk.js.map