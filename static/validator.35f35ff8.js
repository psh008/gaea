import{X as i,Z as a,aW as p}from"./entry.81c3309d.js";const h=(e,o)=>{if(!i)return!1;const t={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(o)],l=a(e,t);return["scroll","auto","overlay"].some(s=>l.includes(s))},m=(e,o)=>{if(!i)return;let t=e;for(;t;){if([window,document,document.documentElement].includes(t))return window;if(h(t,o))return t;t=t.parentNode}return t};let n;const v=e=>{var o;if(!i)return 0;if(n!==void 0)return n;const t=document.createElement("div");t.className=`${e}-scrollbar__wrap`,t.style.visibility="hidden",t.style.width="100px",t.style.position="absolute",t.style.top="-9999px",document.body.appendChild(t);const l=t.offsetWidth;t.style.overflow="scroll";const s=document.createElement("div");s.style.width="100%",t.appendChild(s);const r=s.offsetWidth;return(o=t.parentNode)==null||o.removeChild(t),n=l-r,n};function y(e,o){if(!i)return;if(!o){e.scrollTop=0;return}const t=[];let l=o.offsetParent;for(;l!==null&&e!==l&&e.contains(l);)t.push(l),l=l.offsetParent;const s=o.offsetTop+t.reduce((d,u)=>d+u.offsetTop,0),r=s+o.offsetHeight,c=e.scrollTop,f=c+e.clientHeight;s<c?e.scrollTop=s:r>f&&(e.scrollTop=r-e.clientHeight)}const S=e=>["",...p].includes(e);export{m as a,v as g,S as i,y as s};
