"use strict";exports.id=850,exports.ids=[850],exports.modules={499:(r,e,s)=>{s.r(e),s.d(e,{default:()=>h});var n=s(689),u=s.n(n),t=s(661),i=s(22),c=s(997);const d=function(r){var e=r.user,s=e.email,n=e.name,u=e.username;return(0,c.jsxs)("div",{children:[(0,c.jsxs)("h1",{children:[u," (",n,")"]}),(0,c.jsxs)("p",{children:[(0,c.jsx)("b",{children:"e-mail:"})," ",s]})]})};var o=s(701),a=s(312);const l=function(r){var e=r.id,s=(0,i.useSelector)((function(r){return r.users.user})),u=(0,i.useDispatch)();return(0,o.lm)((function(){return u((0,a.PR)(e))})),(0,n.useEffect)((function(){s&&s.id===parseInt(e,10)||u((0,a.PR)(e))}),[u,e,s]),s?(0,c.jsx)(d,{user:s}):null},x=function(r){var e=r.users;return e?(0,c.jsx)("div",{children:(0,c.jsx)("ul",{children:e.map((function(r){return(0,c.jsx)("li",{children:(0,c.jsx)(t.Link,{to:"/users/".concat(r.id),children:r.username})},r.id)}))})}):null};var f=u().useEffect;const j=(0,i.connect)((function(r){return{users:r.users.users}}),{getUsers:a.Rf})((function(r){var e=r.users,s=r.getUsers;return f((function(){e||s()}),[s,e]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(x,{users:e}),(0,c.jsx)(o.p9,{resolve:s})]})})),h=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(j,{}),(0,c.jsx)(t.Route,{path:"/users/:id",render:function(r){var e=r.match;return(0,c.jsx)(l,{id:e.params.id})}})]})}}};