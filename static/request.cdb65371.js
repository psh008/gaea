import{r as D,aK as C,b4 as O,b3 as w,ab as E,H as $,u as g,b5 as U,aq as B,b6 as F,k as M,h as R,E as k,N as T}from"./entry.81c3309d.js";import{u as z}from"./user.53eb568d.js";const H=()=>null;function A(...r){const u=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(u);let[t,i,s={}]=r;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof i!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");s.server=s.server??!0,s.default=s.default??H,s.lazy=s.lazy??!1,s.immediate=s.immediate??!0;const e=$(),y=()=>e.isHydrating?e.payload.data[t]:e.static.data[t],l=()=>y()!==void 0;e._asyncData[t]||(e._asyncData[t]={data:D(y()??s.default()),pending:D(!l()),error:C(e.payload._errors,t),status:D("idle")});const a={...e._asyncData[t]};a.refresh=a.execute=(o={})=>{if(e._asyncDataPromises[t]){if(o.dedupe===!1)return e._asyncDataPromises[t];e._asyncDataPromises[t].cancelled=!0}if((o._initial||e.isHydrating&&o._initial!==!1)&&l())return y();a.pending.value=!0,a.status.value="pending";const f=new Promise((n,c)=>{try{n(i(e))}catch(_){c(_)}}).then(n=>{if(f.cancelled)return e._asyncDataPromises[t];let c=n;s.transform&&(c=s.transform(n)),s.pick&&(c=q(c,s.pick)),a.data.value=c,a.error.value=null,a.status.value="success"}).catch(n=>{if(f.cancelled)return e._asyncDataPromises[t];a.error.value=n,a.data.value=g(s.default()),a.status.value="error"}).finally(()=>{f.cancelled||(a.pending.value=!1,e.payload.data[t]=a.data.value,a.error.value&&(e.payload._errors[t]=U(a.error.value)),delete e._asyncDataPromises[t])});return e._asyncDataPromises[t]=f,e._asyncDataPromises[t]};const d=()=>a.refresh({_initial:!0}),h=s.server!==!1&&e.payload.serverRendered;{const o=B();if(o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const n=o._nuxtOnBeforeMountCbs;o&&(O(()=>{n.forEach(c=>{c()}),n.splice(0,n.length)}),w(()=>n.splice(0,n.length)))}h&&e.isHydrating&&l()?(a.pending.value=!1,a.status.value=a.error.value?"error":"success"):o&&(e.payload.serverRendered&&e.isHydrating||s.lazy)&&s.immediate?o._nuxtOnBeforeMountCbs.push(d):s.immediate&&d(),s.watch&&E(s.watch,()=>a.refresh());const f=e.hook("app:data:refresh",n=>{if(!n||n.includes(t))return a.refresh()});o&&w(f)}const p=Promise.resolve(e._asyncDataPromises[t]).then(()=>a);return Object.assign(p,a),p}function q(r,u){const t={};for(const i of u)t[i]=r[i];return t}function K(r,u,t){const[i={},s]=typeof u=="string"?[{},u]:[u,t],e=i.key||F([s,g(i.baseURL),typeof r=="string"?r:"",g(i.params||i.query)]);if(!e||typeof e!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+e);if(!r)throw new Error("[nuxt] [useFetch] request is missing.");const y=e===s?"$f"+e:e,l=M(()=>{let v=r;return typeof v=="function"&&(v=v()),g(v)});if(!i.baseURL&&typeof l.value=="string"&&l.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:a,lazy:d,default:h,transform:p,pick:o,watch:f,immediate:n,...c}=i,_=R({...c,cache:typeof i.cache=="boolean"?void 0:i.cache}),x={server:a,lazy:d,default:h,transform:p,pick:o,immediate:n,watch:f===!1?[]:[_,l,...f||[]]};let m;return A(y,()=>{var b;return(b=m==null?void 0:m.abort)==null||b.call(m),m=typeof AbortController<"u"?new AbortController:{},typeof l.value=="string"&&l.value.startsWith("/"),(i.$fetch||globalThis.$fetch)(l.value,{signal:m.signal,..._})},x)}const L="https://api.aigaea.net",P=(r,u,t,i)=>{const s=z(),e={authorization:`Bearer ${s.getToken}`},y=`${L}${r}`;return new Promise((l,a)=>{K(y,{...u,headers:e,responseType:t},"$mr5k66ooDp").then(({data:d,error:h})=>{var p,o,f,n,c;if(d._rawValue)l(d==null?void 0:d._value);else{if(h.value.statusCode===500)k.error("Server error");else if(h.value.statusCode===401){T("/"),s.clearUserInfo();return}else k.error(((o=(p=h._value)==null?void 0:p.data)==null?void 0:o.message)||((n=(f=h._value)==null?void 0:f.data)==null?void 0:n.msg)||((c=h.value.data)==null?void 0:c.detail[0].msg));a(h)}}).catch(d=>{a(d)})})},S=(r,u)=>P(r,{method:"get",params:u}),W=(r,u,t)=>P(r,{method:"post",body:u},t);export{S as G,W as P};
