import{k as i,aq as I,b1 as z,u as v,z as l,r as c,b2 as K,o as h,ab as j,aK as F,b3 as S}from"./entry.81c3309d.js";const b=s=>{const o=I();return i(()=>{var e,n;return(n=(e=o==null?void 0:o.proxy)==null?void 0:e.$props)==null?void 0:n[s]})},p={prefix:Math.floor(Math.random()*1e4),current:0},_=Symbol("elIdInjection"),R=()=>I()?l(_,p):p,$=s=>{const o=R(),e=z();return i(()=>v(s)||`${e.value}-id-${o.prefix}-${o.current++}`)},f=Symbol("formContextKey"),y=Symbol("formItemContextKey"),D=(s,o={})=>{const e=c(void 0),n=o.prop?e:b("size"),u=o.global?e:K(),t=o.form?{size:void 0}:l(f,void 0),r=o.formItem?{size:void 0}:l(y,void 0);return i(()=>n.value||v(s)||(r==null?void 0:r.size)||(t==null?void 0:t.size)||u.value||"")},N=s=>{const o=b("disabled"),e=l(f,void 0);return i(()=>o.value||v(s)||(e==null?void 0:e.disabled)||!1)},E=()=>{const s=l(f,void 0),o=l(y,void 0);return{form:s,formItem:o}},U=(s,{formItemContext:o,disableIdGeneration:e,disableIdManagement:n})=>{e||(e=c(!1)),n||(n=c(!1));const u=c();let t;const r=i(()=>{var a;return!!(!s.label&&o&&o.inputIds&&((a=o.inputIds)==null?void 0:a.length)<=1)});return h(()=>{t=j([F(s,"id"),e],([a,m])=>{const d=a??(m?void 0:$().value);d!==u.value&&(o!=null&&o.removeInputId&&(u.value&&o.removeInputId(u.value),!(n!=null&&n.value)&&!m&&d&&o.addInputId(d)),u.value=d)},{immediate:!0})}),S(()=>{t&&t(),o!=null&&o.removeInputId&&u.value&&o.removeInputId(u.value)}),{isLabeledByFormItem:r,inputId:u}};export{E as a,D as b,N as c,y as d,U as e,f,R as g,$ as u};
