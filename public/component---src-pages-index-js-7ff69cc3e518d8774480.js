(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{143:function(e,t,n){"use strict";n.r(t);var a=n(152),r=n.n(a),c=(n(146),n(153)),u=n.n(c),i=(n(73),n(0)),s=n.n(i),o=function(e){var t=e.image,n=e.boxSize,a=e.row,r=e.col,c=Object(i.useRef)();return Object(i.useEffect)(function(){var e=c.current.getContext("2d"),u=new Image;u.src=t,u.onload=function(){e.drawImage(u,0+r*n,0+a*n,n,n,0,0,n,n)}},[]),s.a.createElement(s.a.Fragment,null,s.a.createElement("canvas",{id:""+a+r,ref:c,width:n,height:n}))},m=n(154),f=n.n(m);t.default=function(){var e=Object(i.useState)([]),t=e[0],n=e[1],a=Object(i.useState)([3,3]),c=a[0],m=a[1],p=Object(i.useState)(),l=p[0],d=p[1],b=Object(i.useState)(!1),h=b[0],v=b[1],g=Object(i.useState)(!1),E=g[0],w=g[1],k=Object(i.useState)(),I=k[0],j=k[1],O=function(e){return 3===parseInt(e)?2:0===parseInt(e)?1:2*Math.random()>1?parseInt(e)+1:parseInt(e)-1};return Object(i.useEffect)(function(){u()(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://api.unsplash.com/photos/random",{params:{client_id:"0bda86a0ab72412afc278690e4e71349ce98c99d967379b519408c88934559bf"}});case 2:t=e.sent,j(t.data.urls.regular);case 4:case"end":return e.stop()}},e)}))()},[]),Object(i.useEffect)(function(){if(I){for(var e=[],t=0;t<4;t+=1){for(var a=[],r=0;r<4;r+=1)if(3===t&&3===r)a.push(s.a.createElement("div",{key:""+t+r,id:"empty-box"},s.a.createElement("img",{src:"https://i.imgur.com/CGdch5O.png",alt:"The Farm Project",id:"empty-img"})));else{var u={row:t,col:r,setClickedBox:d,showNums:E,image:I,boxSize:175,key:""+t+r};a.push(s.a.createElement(o,u))}e.push(a)}!function(e){for(var t=0,n=c[0],a=c[1],r=n,u=a;t++<30;){2*Math.random()>1?r=O(n):u=O(a);var i=[e[r][u],e[n][a]];e[n][a]=i[0],e[r][u]=i[1],n=r,a=u}m([r,u])}(e),n(e)}},[I]),Object(i.useEffect)(function(){var e,a,r,u,i,s,o,f,p;l&&(r=c,u=(a=l)[0],i=a[1],s=r[0],o=r[1],f=[],p=[],u-1>-1&&f.push(u-1),u+1<4&&f.push(u+1),i-1>-1&&p.push(i-1),i+1<4&&p.push(i+1),(u===s&&p.includes(o)||i===o&&f.includes(s))&&(function(e,a){var r=[].concat(t),c=[r[a[0]][a[1]],r[e[0]][e[1]]];r[e[0]][e[1]]=c[0],r[a[0]][a[1]]=c[1],n(r),m([e[0],e[1]])}(l,c),e=!0,t.forEach(function(t,n){t.forEach(function(t,a){parseInt(t.key[0])===parseInt(n)&&parseInt(t.key[1])===parseInt(a)||(e=!1)})}),e&&(v(!0),w(!1))))},[l]),s.a.createElement("div",{id:"main"},h?s.a.createElement("h1",{className:"blinking"},"You Won!"):"",h?s.a.createElement("img",{src:I,alt:"Completed Image",id:"complete-image"}):s.a.createElement("div",{id:"board"},t?t.map(function(e,t){return e.map(function(e,n){var a=4*parseInt(e.key[0])+parseInt(e.key[1])+1;return s.a.createElement("div",{key:e.key,id:""+t+n,onClick:function(e){d([parseInt(e.currentTarget.id[0]),parseInt(e.currentTarget.id[1])])}},a<16&&E?s.a.createElement("div",{className:"box-number"},a):"",e)})}):""),h?"":s.a.createElement("div",null,s.a.createElement("button",{id:"show-num-btn",onClick:function(){return w(function(e){return!e})}},E?"No":"Show"," Numbers")))}}}]);
//# sourceMappingURL=component---src-pages-index-js-7ff69cc3e518d8774480.js.map