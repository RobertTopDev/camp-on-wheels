import{h as Da,j as S,E as Va,c as Ia,r as k,k as x,C as mn,a as za,G as Fa,u as V,i as zt,p as xt,T as Ba,b as fe,g as $a,d as Na,I as Wa,e as Ha,f as Ua,B as de,L as Ka,H as qa,l as Ga}from"./index-w-57UBoE.js";import{L as Ya,a as Xa,B as Qa,S as Za,c as he,f as Ja,e as tl,b as el}from"./emailRegex-D1MvEPmf.js";import{h as nl}from"./heroBg-BCOlliND.js";var rl=S.Fragment;function q(e,t,n){return Da.call(t,"css")?S.jsx(Va,Ia(e,t),n):S.jsx(e,t,n)}var il=Object.defineProperty,ol=(e,t,n)=>t in e?il(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pe=(e,t,n)=>(ol(e,typeof t!="symbol"?t+"":t,n),n),Fn=new Map,me=new WeakMap,Kr=0,sl=void 0;function al(e){return e?(me.has(e)||(Kr+=1,me.set(e,Kr.toString())),me.get(e)):"0"}function ll(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?al(e.root):e[t]}`).toString()}function cl(e){const t=ll(e);let n=Fn.get(t);if(!n){const i=new Map;let r;const s=new IntersectionObserver(o=>{o.forEach(a=>{var l;const c=a.isIntersecting&&r.some(u=>a.intersectionRatio>=u);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(l=i.get(a.target))==null||l.forEach(u=>{u(c,a)})})},e);r=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:s,elements:i},Fn.set(t,n)}return n}function Oo(e,t,n={},i=sl){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const l=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:r,observer:s,elements:o}=cl(n),a=o.get(e)||[];return o.has(e)||o.set(e,a),a.push(t),s.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(o.delete(e),s.unobserve(e)),o.size===0&&(s.disconnect(),Fn.delete(r))}}function ul(e){return typeof e.children!="function"}var qr=class extends k.Component{constructor(e){super(e),pe(this,"node",null),pe(this,"_unobserveCb",null),pe(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),pe(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),ul(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:i,delay:r,fallbackInView:s}=this.props;this._unobserveCb=Oo(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:i,delay:r},s)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:p,entry:m}=this.state;return e({inView:p,entry:m,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:i,root:r,rootMargin:s,onChange:o,skip:a,trackVisibility:l,delay:c,initialInView:u,fallbackInView:f,...d}=this.props;return k.createElement(t||"div",{ref:this.handleNode,...d},e)}};function Co({threshold:e,delay:t,trackVisibility:n,rootMargin:i,root:r,triggerOnce:s,skip:o,initialInView:a,fallbackInView:l,onChange:c}={}){var u;const[f,d]=k.useState(null),p=k.useRef(),[m,h]=k.useState({inView:!!a,entry:void 0});p.current=c,k.useEffect(()=>{if(o||!f)return;let y;return y=Oo(f,(w,C)=>{h({inView:w,entry:C}),p.current&&p.current(w,C),C.isIntersecting&&s&&y&&(y(),y=void 0)},{root:r,rootMargin:i,threshold:e,trackVisibility:n,delay:t},l),()=>{y&&y()}},[Array.isArray(e)?e.toString():e,f,r,i,s,o,n,l,t]);const v=(u=m.entry)==null?void 0:u.target,b=k.useRef();!f&&v&&!s&&!o&&b.current!==v&&(b.current=v,h({inView:!!a,entry:void 0}));const g=[d,m.inView,m.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}var ko={exports:{}},B={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fr=Symbol.for("react.element"),dr=Symbol.for("react.portal"),Ke=Symbol.for("react.fragment"),qe=Symbol.for("react.strict_mode"),Ge=Symbol.for("react.profiler"),Ye=Symbol.for("react.provider"),Xe=Symbol.for("react.context"),fl=Symbol.for("react.server_context"),Qe=Symbol.for("react.forward_ref"),Ze=Symbol.for("react.suspense"),Je=Symbol.for("react.suspense_list"),tn=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),dl=Symbol.for("react.offscreen"),Eo;Eo=Symbol.for("react.module.reference");function ot(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case fr:switch(e=e.type,e){case Ke:case Ge:case qe:case Ze:case Je:return e;default:switch(e=e&&e.$$typeof,e){case fl:case Xe:case Qe:case en:case tn:case Ye:return e;default:return t}}case dr:return t}}}B.ContextConsumer=Xe;B.ContextProvider=Ye;B.Element=fr;B.ForwardRef=Qe;B.Fragment=Ke;B.Lazy=en;B.Memo=tn;B.Portal=dr;B.Profiler=Ge;B.StrictMode=qe;B.Suspense=Ze;B.SuspenseList=Je;B.isAsyncMode=function(){return!1};B.isConcurrentMode=function(){return!1};B.isContextConsumer=function(e){return ot(e)===Xe};B.isContextProvider=function(e){return ot(e)===Ye};B.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===fr};B.isForwardRef=function(e){return ot(e)===Qe};B.isFragment=function(e){return ot(e)===Ke};B.isLazy=function(e){return ot(e)===en};B.isMemo=function(e){return ot(e)===tn};B.isPortal=function(e){return ot(e)===dr};B.isProfiler=function(e){return ot(e)===Ge};B.isStrictMode=function(e){return ot(e)===qe};B.isSuspense=function(e){return ot(e)===Ze};B.isSuspenseList=function(e){return ot(e)===Je};B.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ke||e===Ge||e===qe||e===Ze||e===Je||e===dl||typeof e=="object"&&e!==null&&(e.$$typeof===en||e.$$typeof===tn||e.$$typeof===Ye||e.$$typeof===Xe||e.$$typeof===Qe||e.$$typeof===Eo||e.getModuleId!==void 0)};B.typeOf=ot;ko.exports=B;var hl=ko.exports;x`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;x`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;x`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;x`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;x`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;x`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;x`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;x`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;x`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;x`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;x`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;x`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;x`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const pl=x`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,ml=x`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,gl=x`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,yl=x`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,vl=x`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,hr=x`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,bl=x`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Sl=x`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,xl=x`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,wl=x`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Tl=x`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Pl=x`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ol=x`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Cl({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:i=hr,iterationCount:r=1}){return za`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${i};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${r};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function kl(e){return e==null}function El(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Mo(e,t){return n=>n?e():t()}function te(e){return Mo(e,()=>null)}function Bn(e){return te(()=>({opacity:0}))(e)}const pr=e=>{const{cascade:t=!1,damping:n=.5,delay:i=0,duration:r=1e3,fraction:s=0,keyframes:o=hr,triggerOnce:a=!1,className:l,style:c,childClassName:u,childStyle:f,children:d,onVisibilityChange:p}=e,m=k.useMemo(()=>Cl({keyframes:o,duration:r}),[r,o]);return kl(d)?null:El(d)?q(jl,{...e,animationStyles:m,children:String(d)}):hl.isFragment(d)?q(jo,{...e,animationStyles:m}):q(rl,{children:k.Children.map(d,(h,v)=>{if(!k.isValidElement(h))return null;const b=i+(t?v*r*n:0);switch(h.type){case"ol":case"ul":return q(mn,{children:({cx:g})=>q(h.type,{...h.props,className:g(l,h.props.className),style:Object.assign({},c,h.props.style),children:q(pr,{...e,children:h.props.children})})});case"li":return q(qr,{threshold:s,triggerOnce:a,onChange:p,children:({inView:g,ref:y})=>q(mn,{children:({cx:w})=>q(h.type,{...h.props,ref:y,className:w(u,h.props.className),css:te(()=>m)(g),style:Object.assign({},f,h.props.style,Bn(!g),{animationDelay:b+"ms"})})})});default:return q(qr,{threshold:s,triggerOnce:a,onChange:p,children:({inView:g,ref:y})=>q("div",{ref:y,className:l,css:te(()=>m)(g),style:Object.assign({},c,Bn(!g),{animationDelay:b+"ms"}),children:q(mn,{children:({cx:w})=>q(h.type,{...h.props,className:w(u,h.props.className),style:Object.assign({},f,h.props.style)})})})})}})})},Ml={display:"inline-block",whiteSpace:"pre"},jl=e=>{const{animationStyles:t,cascade:n=!1,damping:i=.5,delay:r=0,duration:s=1e3,fraction:o=0,triggerOnce:a=!1,className:l,style:c,children:u,onVisibilityChange:f}=e,{ref:d,inView:p}=Co({triggerOnce:a,threshold:o,onChange:f});return Mo(()=>q("div",{ref:d,className:l,style:Object.assign({},c,Ml),children:u.split("").map((m,h)=>q("span",{css:te(()=>t)(p),style:{animationDelay:r+h*s*i+"ms"},children:m},h))}),()=>q(jo,{...e,children:u}))(n)},jo=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:i=!1,className:r,style:s,children:o,onVisibilityChange:a}=e,{ref:l,inView:c}=Co({triggerOnce:i,threshold:n,onChange:a});return q("div",{ref:l,className:r,css:te(()=>t)(c),style:Object.assign({},s,Bn(!c)),children:o})};x`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;x`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;x`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;x`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;x`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;x`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;x`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;x`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;x`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;x`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const Al=x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Rl=x`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Ll=x`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,_l=x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Dl=x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Vl=x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Il=x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,zl=x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Fl=x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Bl=x`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,$l=x`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Nl=x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Wl=x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function Hl(e,t,n){switch(n){case"bottom-left":return t?Rl:ml;case"bottom-right":return t?Ll:gl;case"down":return e?t?Dl:vl:t?_l:yl;case"left":return e?t?Il:bl:t?Vl:hr;case"right":return e?t?Fl:xl:t?zl:Sl;case"top-left":return t?Bl:wl;case"top-right":return t?$l:Tl;case"up":return e?t?Wl:Ol:t?Nl:Pl;default:return t?Al:pl}}const Ul=e=>{const{big:t=!1,direction:n,reverse:i=!1,...r}=e,s=k.useMemo(()=>Hl(t,i,n),[t,n,i]);return q(pr,{keyframes:s,...r})};x`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;x`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;x`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;x`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;x`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;x`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;x`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;x`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;x`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;x`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;x`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;x`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;x`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;x`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;x`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;x`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;x`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;x`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;const Kl=x`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ql=x`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Gl=x`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Yl=x`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Xl=x`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,Ql=x`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,Zl=x`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,Jl=x`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function tc(e,t){switch(t){case"down":return e?Xl:Kl;case"right":return e?Zl:Gl;case"up":return e?Jl:Yl;case"left":default:return e?Ql:ql}}const ec=e=>{const{direction:t,reverse:n=!1,...i}=e,r=k.useMemo(()=>tc(n,t),[t,n]);return q(pr,{keyframes:r,...i})};x`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;x`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;x`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;x`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;x`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;x`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;x`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;x`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;x`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;x`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const Ao=k.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),nn=k.createContext({}),mr=k.createContext(null),gr=typeof document<"u",nc=gr?k.useLayoutEffect:k.useEffect,Ro=k.createContext({strict:!1}),yr=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),rc="framerAppearId",Lo="data-"+yr(rc),ic={skipAnimations:!1,useManualTiming:!1};class Gr{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function oc(e){let t=new Gr,n=new Gr,i=0,r=!1,s=!1;const o=new WeakSet,a={schedule:(l,c=!1,u=!1)=>{const f=u&&r,d=f?t:n;return c&&o.add(l),d.add(l)&&f&&r&&(i=t.order.length),l},cancel:l=>{n.remove(l),o.delete(l)},process:l=>{if(r){s=!0;return}if(r=!0,[t,n]=[n,t],n.clear(),i=t.order.length,i)for(let c=0;c<i;c++){const u=t.order[c];o.has(u)&&(a.schedule(u),e()),u(l)}r=!1,s&&(s=!1,a.process(l))}};return a}const ge=["read","resolveKeyframes","update","preRender","render","postRender"],sc=40;function _o(e,t){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=ge.reduce((f,d)=>(f[d]=oc(()=>n=!0),f),{}),o=f=>{s[f].process(r)},a=()=>{const f=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(f-r.timestamp,sc),1),r.timestamp=f,r.isProcessing=!0,ge.forEach(o),r.isProcessing=!1,n&&t&&(i=!1,e(a))},l=()=>{n=!0,i=!0,r.isProcessing||e(a)};return{schedule:ge.reduce((f,d)=>{const p=s[d];return f[d]=(m,h=!1,v=!1)=>(n||l(),p.schedule(m,h,v)),f},{}),cancel:f=>ge.forEach(d=>s[d].cancel(f)),state:r,steps:s}}const{schedule:vr,cancel:a0}=_o(queueMicrotask,!1);function ac(e,t,n,i){const{visualElement:r}=k.useContext(nn),s=k.useContext(Ro),o=k.useContext(mr),a=k.useContext(Ao).reducedMotion,l=k.useRef();i=i||s.renderer,!l.current&&i&&(l.current=i(e,{visualState:t,parent:r,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const c=l.current;k.useInsertionEffect(()=>{c&&c.update(n,o)});const u=k.useRef(!!(n[Lo]&&!window.HandoffComplete));return nc(()=>{c&&(vr.postRender(c.render),u.current&&c.animationState&&c.animationState.animateChanges())}),k.useEffect(()=>{c&&(c.updateFeatures(),!u.current&&c.animationState&&c.animationState.animateChanges(),u.current&&(u.current=!1,window.HandoffComplete=!0))}),c}function Rt(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function lc(e,t,n){return k.useCallback(i=>{i&&e.mount&&e.mount(i),t&&(i?t.mount(i):t.unmount()),n&&(typeof n=="function"?n(i):Rt(n)&&(n.current=i))},[t])}function ee(e){return typeof e=="string"||Array.isArray(e)}function rn(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const br=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Sr=["initial",...br];function on(e){return rn(e.animate)||Sr.some(t=>ee(e[t]))}function Do(e){return!!(on(e)||e.variants)}function cc(e,t){if(on(e)){const{initial:n,animate:i}=e;return{initial:n===!1||ee(n)?n:void 0,animate:ee(i)?i:void 0}}return e.inherit!==!1?t:{}}function uc(e){const{initial:t,animate:n}=cc(e,k.useContext(nn));return k.useMemo(()=>({initial:t,animate:n}),[Yr(t),Yr(n)])}function Yr(e){return Array.isArray(e)?e.join(" "):e}const Xr={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ne={};for(const e in Xr)ne[e]={isEnabled:t=>Xr[e].some(n=>!!t[n])};function fc(e){for(const t in e)ne[t]={...ne[t],...e[t]}}const Vo=k.createContext({}),Io=k.createContext({}),dc=Symbol.for("motionComponentSymbol");function hc({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:i,Component:r}){e&&fc(e);function s(a,l){let c;const u={...k.useContext(Ao),...a,layoutId:pc(a)},{isStatic:f}=u,d=uc(a),p=i(a,f);if(!f&&gr){d.visualElement=ac(r,p,u,t);const m=k.useContext(Io),h=k.useContext(Ro).strict;d.visualElement&&(c=d.visualElement.loadFeatures(u,h,e,m))}return S.jsxs(nn.Provider,{value:d,children:[c&&d.visualElement?S.jsx(c,{visualElement:d.visualElement,...u}):null,n(r,a,lc(p,d.visualElement,l),p,f,d.visualElement)]})}const o=k.forwardRef(s);return o[dc]=r,o}function pc({layoutId:e}){const t=k.useContext(Vo).id;return t&&e!==void 0?t+"-"+e:e}function mc(e){function t(i,r={}){return hc(e(i,r))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(i,r)=>(n.has(r)||n.set(r,t(r)),n.get(r))})}const gc=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function xr(e){return typeof e!="string"||e.includes("-")?!1:!!(gc.indexOf(e)>-1||/[A-Z]/u.test(e))}const Ee={};function yc(e){Object.assign(Ee,e)}const se=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],jt=new Set(se);function zo(e,{layout:t,layoutId:n}){return jt.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Ee[e]||e==="opacity")}const Q=e=>!!(e&&e.getVelocity),vc={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},bc=se.length;function Sc(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},i,r){let s="";for(let o=0;o<bc;o++){const a=se[o];if(e[a]!==void 0){const l=vc[a]||a;s+=`${l}(${e[a]}) `}}return t&&!e.z&&(s+="translateZ(0)"),s=s.trim(),r?s=r(e,i?"":s):n&&i&&(s="none"),s}const Fo=e=>t=>typeof t=="string"&&t.startsWith(e),Bo=Fo("--"),xc=Fo("var(--"),wr=e=>xc(e)?wc.test(e.split("/*")[0].trim()):!1,wc=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Tc=(e,t)=>t&&typeof e=="number"?t.transform(e):e,vt=(e,t,n)=>n>t?t:n<e?e:n,Ut={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Xt={...Ut,transform:e=>vt(0,1,e)},ye={...Ut,default:1},Qt=e=>Math.round(e*1e5)/1e5,Tr=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,Pc=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,Oc=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;function ae(e){return typeof e=="string"}const le=e=>({test:t=>ae(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),ht=le("deg"),at=le("%"),j=le("px"),Cc=le("vh"),kc=le("vw"),Qr={...at,parse:e=>at.parse(e)/100,transform:e=>at.transform(e*100)},Zr={...Ut,transform:Math.round},$o={borderWidth:j,borderTopWidth:j,borderRightWidth:j,borderBottomWidth:j,borderLeftWidth:j,borderRadius:j,radius:j,borderTopLeftRadius:j,borderTopRightRadius:j,borderBottomRightRadius:j,borderBottomLeftRadius:j,width:j,maxWidth:j,height:j,maxHeight:j,size:j,top:j,right:j,bottom:j,left:j,padding:j,paddingTop:j,paddingRight:j,paddingBottom:j,paddingLeft:j,margin:j,marginTop:j,marginRight:j,marginBottom:j,marginLeft:j,rotate:ht,rotateX:ht,rotateY:ht,rotateZ:ht,scale:ye,scaleX:ye,scaleY:ye,scaleZ:ye,skew:ht,skewX:ht,skewY:ht,distance:j,translateX:j,translateY:j,translateZ:j,x:j,y:j,z:j,perspective:j,transformPerspective:j,opacity:Xt,originX:Qr,originY:Qr,originZ:j,zIndex:Zr,backgroundPositionX:j,backgroundPositionY:j,fillOpacity:Xt,strokeOpacity:Xt,numOctaves:Zr};function Pr(e,t,n,i){const{style:r,vars:s,transform:o,transformOrigin:a}=e;let l=!1,c=!1,u=!0;for(const f in t){const d=t[f];if(Bo(f)){s[f]=d;continue}const p=$o[f],m=Tc(d,p);if(jt.has(f)){if(l=!0,o[f]=m,!u)continue;d!==(p.default||0)&&(u=!1)}else f.startsWith("origin")?(c=!0,a[f]=m):r[f]=m}if(t.transform||(l||i?r.transform=Sc(e.transform,n,u,i):r.transform&&(r.transform="none")),c){const{originX:f="50%",originY:d="50%",originZ:p=0}=a;r.transformOrigin=`${f} ${d} ${p}`}}const Or=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function No(e,t,n){for(const i in t)!Q(t[i])&&!zo(i,n)&&(e[i]=t[i])}function Ec({transformTemplate:e},t,n){return k.useMemo(()=>{const i=Or();return Pr(i,t,{enableHardwareAcceleration:!n},e),Object.assign({},i.vars,i.style)},[t])}function Mc(e,t,n){const i=e.style||{},r={};return No(r,i,e),Object.assign(r,Ec(e,t,n)),r}function jc(e,t,n){const i={},r=Mc(e,t,n);return e.drag&&e.dragListener!==!1&&(i.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(i.tabIndex=0),i.style=r,i}const Ac=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Me(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Ac.has(e)}let Wo=e=>!Me(e);function Rc(e){e&&(Wo=t=>t.startsWith("on")?!Me(t):e(t))}try{Rc(require("@emotion/is-prop-valid").default)}catch{}function Lc(e,t,n){const i={};for(const r in e)r==="values"&&typeof e.values=="object"||(Wo(r)||n===!0&&Me(r)||!t&&!Me(r)||e.draggable&&r.startsWith("onDrag"))&&(i[r]=e[r]);return i}function Jr(e,t,n){return typeof e=="string"?e:j.transform(t+n*e)}function _c(e,t,n){const i=Jr(t,e.x,e.width),r=Jr(n,e.y,e.height);return`${i} ${r}`}const Dc={offset:"stroke-dashoffset",array:"stroke-dasharray"},Vc={offset:"strokeDashoffset",array:"strokeDasharray"};function Ic(e,t,n=1,i=0,r=!0){e.pathLength=1;const s=r?Dc:Vc;e[s.offset]=j.transform(-i);const o=j.transform(t),a=j.transform(n);e[s.array]=`${o} ${a}`}function Cr(e,{attrX:t,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,f,d){if(Pr(e,c,u,d),f){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:m,dimensions:h}=e;p.transform&&(h&&(m.transform=p.transform),delete p.transform),h&&(r!==void 0||s!==void 0||m.transform)&&(m.transformOrigin=_c(h,r!==void 0?r:.5,s!==void 0?s:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),i!==void 0&&(p.scale=i),o!==void 0&&Ic(p,o,a,l,!1)}const Ho=()=>({...Or(),attrs:{}}),kr=e=>typeof e=="string"&&e.toLowerCase()==="svg";function zc(e,t,n,i){const r=k.useMemo(()=>{const s=Ho();return Cr(s,t,{enableHardwareAcceleration:!1},kr(i),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};No(s,e.style,e),r.style={...s,...r.style}}return r}function Fc(e=!1){return(n,i,r,{latestValues:s},o)=>{const l=(xr(n)?zc:jc)(i,s,o,n),c=Lc(i,typeof n=="string",e),u=n!==k.Fragment?{...c,...l,ref:r}:{},{children:f}=i,d=k.useMemo(()=>Q(f)?f.get():f,[f]);return k.createElement(n,{...u,children:d})}}function Uo(e,{style:t,vars:n},i,r){Object.assign(e.style,t,r&&r.getProjectionStyles(i));for(const s in n)e.style.setProperty(s,n[s])}const Ko=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function qo(e,t,n,i){Uo(e,t,void 0,i);for(const r in t.attrs)e.setAttribute(Ko.has(r)?r:yr(r),t.attrs[r])}function Er(e,t,n){var i;const{style:r}=e,s={};for(const o in r)(Q(r[o])||t.style&&Q(t.style[o])||zo(o,e)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function Go(e,t,n){const i=Er(e,t,n);for(const r in e)if(Q(e[r])||Q(t[r])){const s=se.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=e[r]}return i}function Mr(e,t,n,i={},r={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,i,r)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,i,r)),t}function Bc(e){const t=k.useRef(null);return t.current===null&&(t.current=e()),t.current}const $n=e=>Array.isArray(e),$c=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),Nc=e=>$n(e)?e[e.length-1]||0:e;function Pe(e){const t=Q(e)?e.get():e;return $c(t)?t.toValue():t}function Wc({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},i,r,s){const o={latestValues:Hc(i,r,s,e),renderState:t()};return n&&(o.mount=a=>n(i,a,o)),o}const Yo=e=>(t,n)=>{const i=k.useContext(nn),r=k.useContext(mr),s=()=>Wc(e,t,i,r);return n?s():Bc(s)};function Hc(e,t,n,i){const r={},s=i(e,{});for(const d in s)r[d]=Pe(s[d]);let{initial:o,animate:a}=e;const l=on(e),c=Do(e);t&&c&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const f=u?a:o;return f&&typeof f!="boolean"&&!rn(f)&&(Array.isArray(f)?f:[f]).forEach(p=>{const m=Mr(e,p);if(!m)return;const{transitionEnd:h,transition:v,...b}=m;for(const g in b){let y=b[g];if(Array.isArray(y)){const w=u?y.length-1:0;y=y[w]}y!==null&&(r[g]=y)}for(const g in h)r[g]=h[g]}),r}const Z=e=>e,{schedule:Y,cancel:bt,state:G,steps:gn}=_o(typeof requestAnimationFrame<"u"?requestAnimationFrame:Z,!0),Uc={useVisualState:Yo({scrapeMotionValuesFromProps:Go,createRenderState:Ho,onMount:(e,t,{renderState:n,latestValues:i})=>{Y.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),Y.render(()=>{Cr(n,i,{enableHardwareAcceleration:!1},kr(t.tagName),e.transformTemplate),qo(t,n)})}})},Kc={useVisualState:Yo({scrapeMotionValuesFromProps:Er,createRenderState:Or})};function qc(e,{forwardMotionProps:t=!1},n,i){return{...xr(e)?Uc:Kc,preloadedFeatures:n,useRender:Fc(t),createVisualElement:i,Component:e}}function lt(e,t,n,i={passive:!0}){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n)}const Xo=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function sn(e,t="page"){return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}const Gc=e=>t=>Xo(t)&&e(t,sn(t));function ct(e,t,n,i){return lt(e,t,Gc(n),i)}const Yc=(e,t)=>n=>t(e(n)),ut=(...e)=>e.reduce(Yc);function Qo(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const ti=Qo("dragHorizontal"),ei=Qo("dragVertical");function Zo(e){let t=!1;if(e==="y")t=ei();else if(e==="x")t=ti();else{const n=ti(),i=ei();n&&i?t=()=>{n(),i()}:(n&&n(),i&&i())}return t}function Jo(){const e=Zo(!0);return e?(e(),!1):!0}class wt{constructor(t){this.isMounted=!1,this.node=t}update(){}}function ni(e,t){const n=t?"pointerenter":"pointerleave",i=t?"onHoverStart":"onHoverEnd",r=(s,o)=>{if(s.pointerType==="touch"||Jo())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t);const l=a[i];l&&l(s,o)};return ct(e.current,n,r,{passive:!e.getProps()[i]})}class Xc extends wt{mount(){this.unmount=ut(ni(this.node,!0),ni(this.node,!1))}unmount(){}}class Qc extends wt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ut(lt(this.node.current,"focus",()=>this.onFocus()),lt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const ts=(e,t)=>t?e===t?!0:ts(e,t.parentElement):!1;function yn(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,sn(n))}class Zc extends wt{constructor(){super(...arguments),this.removeStartListeners=Z,this.removeEndListeners=Z,this.removeAccessibleListeners=Z,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),s=ct(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:u,globalTapTarget:f}=this.node.getProps();!f&&!ts(this.node.current,a.target)?u&&u(a,l):c&&c(a,l)},{passive:!(i.onTap||i.onPointerUp)}),o=ct(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=ut(s,o),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||yn("up",(l,c)=>{const{onTap:u}=this.node.getProps();u&&u(l,c)})};this.removeEndListeners(),this.removeEndListeners=lt(this.node.current,"keyup",o),yn("down",(a,l)=>{this.startPress(a,l)})},n=lt(this.node.current,"keydown",t),i=()=>{this.isPressing&&yn("cancel",(s,o)=>this.cancelPress(s,o))},r=lt(this.node.current,"blur",i);this.removeAccessibleListeners=ut(n,r)}}startPress(t,n){this.isPressing=!0;const{onTapStart:i,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&i(t,n)}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Jo()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&i(t,n)}mount(){const t=this.node.getProps(),n=ct(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),i=lt(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=ut(n,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Nn=new WeakMap,vn=new WeakMap,Jc=e=>{const t=Nn.get(e.target);t&&t(e)},tu=e=>{e.forEach(Jc)};function eu({root:e,...t}){const n=e||document;vn.has(n)||vn.set(n,{});const i=vn.get(n),r=JSON.stringify(t);return i[r]||(i[r]=new IntersectionObserver(tu,{root:e,...t})),i[r]}function nu(e,t,n){const i=eu(t);return Nn.set(e,n),i.observe(e),()=>{Nn.delete(e),i.unobserve(e)}}const ru={some:0,all:1};class iu extends wt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=t,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:ru[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:f}=this.node.getProps(),d=c?u:f;d&&d(l)};return nu(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(ou(t,n))&&this.startObserver()}unmount(){}}function ou({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const su={inView:{Feature:iu},tap:{Feature:Zc},focus:{Feature:Qc},hover:{Feature:Xc}};function es(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let i=0;i<n;i++)if(t[i]!==e[i])return!1;return!0}function au(e){const t={};return e.values.forEach((n,i)=>t[i]=n.get()),t}function lu(e){const t={};return e.values.forEach((n,i)=>t[i]=n.getVelocity()),t}function an(e,t,n){const i=e.getProps();return Mr(i,t,n!==void 0?n:i.custom,au(e),lu(e))}const gt=e=>e*1e3,ft=e=>e/1e3,cu={type:"spring",stiffness:500,damping:25,restSpeed:10},uu=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),fu={type:"keyframes",duration:.8},du={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},hu=(e,{keyframes:t})=>t.length>2?fu:jt.has(e)?e.startsWith("scale")?uu(t[1]):cu:du;function pu({when:e,delay:t,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}function jr(e,t){return e[t]||e.default||e}const mu=e=>e!==null;function ln(e,{repeat:t,repeatType:n="loop"},i){const r=e.filter(mu),s=t&&n!=="loop"&&t%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}let Oe;function gu(){Oe=void 0}const yt={now:()=>(Oe===void 0&&yt.set(G.isProcessing||ic.useManualTiming?G.timestamp:performance.now()),Oe),set:e=>{Oe=e,queueMicrotask(gu)}},ns=e=>/^0[^.\s]+$/u.test(e);function yu(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||ns(e):!0}let rs=Z;const is=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),vu=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function bu(e){const t=vu.exec(e);if(!t)return[,];const[,n,i,r]=t;return[`--${n??i}`,r]}function os(e,t,n=1){const[i,r]=bu(e);if(!i)return;const s=window.getComputedStyle(t).getPropertyValue(i);if(s){const o=s.trim();return is(o)?parseFloat(o):o}return wr(r)?os(r,t,n+1):r}const Su=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),ri=e=>e===Ut||e===j,ii=(e,t)=>parseFloat(e.split(", ")[t]),oi=(e,t)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return ii(r[1],t);{const s=i.match(/^matrix\((.+)\)$/u);return s?ii(s[1],e):0}},xu=new Set(["x","y","z"]),wu=se.filter(e=>!xu.has(e));function si(e){const t=[];return wu.forEach(n=>{const i=e.getValue(n);i!==void 0&&(t.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),t}const Ft={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:oi(4,13),y:oi(5,14)};Ft.translateX=Ft.x;Ft.translateY=Ft.y;const ss=e=>t=>t.test(e),Tu={test:e=>e==="auto",parse:e=>e},as=[Ut,j,at,ht,kc,Cc,Tu],ai=e=>as.find(ss(e)),Et=new Set;let Wn=!1,Hn=!1;function ls(){if(Hn){const e=Array.from(Et).filter(i=>i.needsMeasurement),t=new Set(e.map(i=>i.element)),n=new Map;t.forEach(i=>{si(i).length&&(n.set(i,si(i)),i.render())}),e.forEach(i=>i.measureInitialState()),t.forEach(i=>{i.render()}),e.forEach(i=>i.measureEndState()),e.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Hn=!1,Wn=!1,Et.forEach(e=>e.complete()),Et.clear()}function cs(){Et.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Hn=!0)})}function Pu(){cs(),ls()}class Ar{constructor(t,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Et.add(this),Wn||(Wn=!0,Y.read(cs),Y.resolveKeyframes(ls))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:i,motionValue:r}=this;for(let s=0;s<t.length;s++)if(t[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=t[t.length-1];if(o!==void 0)t[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),r&&o===void 0&&r.set(t[0])}else t[s]=t[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Et.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Et.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Rr=(e,t)=>n=>!!(ae(n)&&Oc.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),us=(e,t,n)=>i=>{if(!ae(i))return i;const[r,s,o,a]=i.match(Tr);return{[e]:parseFloat(r),[t]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Ou=e=>vt(0,255,e),bn={...Ut,transform:e=>Math.round(Ou(e))},kt={test:Rr("rgb","red"),parse:us("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:i=1})=>"rgba("+bn.transform(e)+", "+bn.transform(t)+", "+bn.transform(n)+", "+Qt(Xt.transform(i))+")"};function Cu(e){let t="",n="",i="",r="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),i=e.substring(5,7),r=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),i=e.substring(3,4),r=e.substring(4,5),t+=t,n+=n,i+=i,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Un={test:Rr("#"),parse:Cu,transform:kt.transform},Lt={test:Rr("hsl","hue"),parse:us("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:i=1})=>"hsla("+Math.round(e)+", "+at.transform(Qt(t))+", "+at.transform(Qt(n))+", "+Qt(Xt.transform(i))+")"},X={test:e=>kt.test(e)||Un.test(e)||Lt.test(e),parse:e=>kt.test(e)?kt.parse(e):Lt.test(e)?Lt.parse(e):Un.parse(e),transform:e=>ae(e)?e:e.hasOwnProperty("red")?kt.transform(e):Lt.transform(e)};function ku(e){var t,n;return isNaN(e)&&ae(e)&&(((t=e.match(Tr))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Pc))===null||n===void 0?void 0:n.length)||0)>0}const fs="number",ds="color",Eu="var",Mu="var(",li="${}",ju=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function je(e){const t=e.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=t.replace(ju,l=>(X.test(l)?(i.color.push(s),r.push(ds),n.push(X.parse(l))):l.startsWith(Mu)?(i.var.push(s),r.push(Eu),n.push(l)):(i.number.push(s),r.push(fs),n.push(parseFloat(l))),++s,li)).split(li);return{values:n,split:a,indexes:i,types:r}}function hs(e){return je(e).values}function ps(e){const{split:t,types:n}=je(e),i=t.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=t[o],r[o]!==void 0){const a=n[o];a===fs?s+=Qt(r[o]):a===ds?s+=X.transform(r[o]):s+=r[o]}return s}}const Au=e=>typeof e=="number"?0:e;function Ru(e){const t=hs(e);return ps(e)(t.map(Au))}const St={test:ku,parse:hs,createTransformer:ps,getAnimatableNone:Ru},Lu=new Set(["brightness","contrast","saturate","opacity"]);function _u(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[i]=n.match(Tr)||[];if(!i)return e;const r=n.replace(i,"");let s=Lu.has(t)?1:0;return i!==n&&(s*=100),t+"("+s+r+")"}const Du=/\b([a-z-]*)\(.*?\)/gu,Kn={...St,getAnimatableNone:e=>{const t=e.match(Du);return t?t.map(_u).join(" "):e}},Vu={...$o,color:X,backgroundColor:X,outlineColor:X,fill:X,stroke:X,borderColor:X,borderTopColor:X,borderRightColor:X,borderBottomColor:X,borderLeftColor:X,filter:Kn,WebkitFilter:Kn},Lr=e=>Vu[e];function ms(e,t){let n=Lr(e);return n!==Kn&&(n=St),n.getAnimatableNone?n.getAnimatableNone(t):void 0}function Iu(e,t,n){let i=0,r;for(;i<e.length&&!r;)typeof e[i]=="string"&&e[i]!=="none"&&e[i]!=="0"&&(r=e[i]),i++;if(r&&n)for(const s of t)e[s]=ms(n,r)}class gs extends Ar{constructor(t,n,i,r){super(t,n,i,r,r==null?void 0:r.owner,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:i}=this;if(!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){const c=t[l];if(typeof c=="string"&&wr(c)){const u=os(c,n.current);u!==void 0&&(t[l]=u),l===t.length-1&&(this.finalKeyframe=c)}}if(!Su.has(i)||t.length!==2)return this.resolveNoneKeyframes();const[r,s]=t,o=ai(r),a=ai(s);if(o!==a)if(ri(o)&&ri(a))for(let l=0;l<t.length;l++){const c=t[l];typeof c=="string"&&(t[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,i=[];for(let r=0;r<t.length;r++)yu(t[r])&&i.push(r);i.length&&Iu(t,i,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:i}=this;if(!t.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ft[i](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&t.getValue(i,r).jump(r,!1)}measureEndState(){var t;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=Ft[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function zu(e){let t;return()=>(t===void 0&&(t=e()),t)}const ci=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(St.test(e)||e==="0")&&!e.startsWith("url("));function Fu(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Bu(e,t,n,i){const r=e[0];if(r===null)return!1;const s=e[e.length-1],o=ci(r,t),a=ci(s,t);return!o||!a?!1:Fu(e)||n==="spring"&&i}class ys{constructor({autoplay:t=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.options={autoplay:t,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&Pu(),this._resolved}onKeyframesResolved(t,n){this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!Bu(t,i,r,s))if(o)this.options.duration=0;else{l==null||l(ln(t,this.options,n)),a==null||a(),this.resolveFinishedPromise();return}const u=this.initPlayback(t,n);u!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}function vs(e,t){return t?e*(1e3/t):0}const $u=5;function bs(e,t,n){const i=Math.max(t-$u,0);return vs(n-e(i),t-i)}const Sn=.001,Nu=.01,Wu=10,Hu=.05,Uu=1;function Ku({duration:e=800,bounce:t=.25,velocity:n=0,mass:i=1}){let r,s,o=1-t;o=vt(Hu,Uu,o),e=vt(Nu,Wu,ft(e)),o<1?(r=c=>{const u=c*o,f=u*e,d=u-n,p=qn(c,o),m=Math.exp(-f);return Sn-d/p*m},s=c=>{const f=c*o*e,d=f*n+n,p=Math.pow(o,2)*Math.pow(c,2)*e,m=Math.exp(-f),h=qn(Math.pow(c,2),o);return(-r(c)+Sn>0?-1:1)*((d-p)*m)/h}):(r=c=>{const u=Math.exp(-c*e),f=(c-n)*e+1;return-Sn+u*f},s=c=>{const u=Math.exp(-c*e),f=(n-c)*(e*e);return u*f});const a=5/e,l=Gu(r,s,a);if(e=gt(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:e}}}const qu=12;function Gu(e,t,n){let i=n;for(let r=1;r<qu;r++)i=i-e(i)/t(i);return i}function qn(e,t){return e*Math.sqrt(1-t*t)}const Yu=["duration","bounce"],Xu=["stiffness","damping","mass"];function ui(e,t){return t.some(n=>e[n]!==void 0)}function Qu(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!ui(e,Xu)&&ui(e,Yu)){const n=Ku(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function Ss({keyframes:e,restDelta:t,restSpeed:n,...i}){const r=e[0],s=e[e.length-1],o={done:!1,value:r},{stiffness:a,damping:l,mass:c,duration:u,velocity:f,isResolvedFromDuration:d}=Qu({...i,velocity:-ft(i.velocity||0)}),p=f||0,m=l/(2*Math.sqrt(a*c)),h=s-r,v=ft(Math.sqrt(a/c)),b=Math.abs(h)<5;n||(n=b?.01:2),t||(t=b?.005:.5);let g;if(m<1){const y=qn(v,m);g=w=>{const C=Math.exp(-m*v*w);return s-C*((p+m*v*h)/y*Math.sin(y*w)+h*Math.cos(y*w))}}else if(m===1)g=y=>s-Math.exp(-v*y)*(h+(p+v*h)*y);else{const y=v*Math.sqrt(m*m-1);g=w=>{const C=Math.exp(-m*v*w),E=Math.min(y*w,300);return s-C*((p+m*v*h)*Math.sinh(E)+y*h*Math.cosh(E))/y}}return{calculatedDuration:d&&u||null,next:y=>{const w=g(y);if(d)o.done=y>=u;else{let C=p;y!==0&&(m<1?C=bs(g,y,w):C=0);const E=Math.abs(C)<=n,F=Math.abs(s-w)<=t;o.done=E&&F}return o.value=o.done?s:w,o}}}function fi({keyframes:e,velocity:t=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const f=e[0],d={done:!1,value:f},p=R=>a!==void 0&&R<a||l!==void 0&&R>l,m=R=>a===void 0?l:l===void 0||Math.abs(a-R)<Math.abs(l-R)?a:l;let h=n*t;const v=f+h,b=o===void 0?v:o(v);b!==v&&(h=b-f);const g=R=>-h*Math.exp(-R/i),y=R=>b+g(R),w=R=>{const T=g(R),P=y(R);d.done=Math.abs(T)<=c,d.value=d.done?b:P};let C,E;const F=R=>{p(d.value)&&(C=R,E=Ss({keyframes:[d.value,m(d.value)],velocity:bs(y,R,d.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return F(0),{calculatedDuration:null,next:R=>{let T=!1;return!E&&C===void 0&&(T=!0,w(R),F(R)),C!==void 0&&R>=C?E.next(R-C):(!T&&w(R),d)}}}const xs=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Zu=1e-7,Ju=12;function tf(e,t,n,i,r){let s,o,a=0;do o=t+(n-t)/2,s=xs(o,i,r)-e,s>0?n=o:t=o;while(Math.abs(s)>Zu&&++a<Ju);return o}function ce(e,t,n,i){if(e===t&&n===i)return Z;const r=s=>tf(s,0,1,e,n);return s=>s===0||s===1?s:xs(r(s),t,i)}const ef=ce(.42,0,1,1),nf=ce(0,0,.58,1),ws=ce(.42,0,.58,1),rf=e=>Array.isArray(e)&&typeof e[0]!="number",Ts=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Ps=e=>t=>1-e(1-t),_r=e=>1-Math.sin(Math.acos(e)),Os=Ps(_r),of=Ts(_r),Cs=ce(.33,1.53,.69,.99),Dr=Ps(Cs),sf=Ts(Dr),af=e=>(e*=2)<1?.5*Dr(e):.5*(2-Math.pow(2,-10*(e-1))),lf={linear:Z,easeIn:ef,easeInOut:ws,easeOut:nf,circIn:_r,circInOut:of,circOut:Os,backIn:Dr,backInOut:sf,backOut:Cs,anticipate:af},di=e=>{if(Array.isArray(e)){rs(e.length===4);const[t,n,i,r]=e;return ce(t,n,i,r)}else if(typeof e=="string")return lf[e];return e},re=(e,t,n)=>{const i=t-e;return i===0?1:(n-e)/i},U=(e,t,n)=>e+(t-e)*n;function xn(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function cf({hue:e,saturation:t,lightness:n,alpha:i}){e/=360,t/=100,n/=100;let r=0,s=0,o=0;if(!t)r=s=o=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;r=xn(l,a,e+1/3),s=xn(l,a,e),o=xn(l,a,e-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}const wn=(e,t,n)=>{const i=e*e,r=n*(t*t-i)+i;return r<0?0:Math.sqrt(r)},uf=[Un,kt,Lt],ff=e=>uf.find(t=>t.test(e));function hi(e){const t=ff(e);let n=t.parse(e);return t===Lt&&(n=cf(n)),n}const pi=(e,t)=>{const n=hi(e),i=hi(t),r={...n};return s=>(r.red=wn(n.red,i.red,s),r.green=wn(n.green,i.green,s),r.blue=wn(n.blue,i.blue,s),r.alpha=U(n.alpha,i.alpha,s),kt.transform(r))};function Gn(e,t){return n=>n>0?t:e}function df(e,t){return n=>U(e,t,n)}function Vr(e){return typeof e=="number"?df:typeof e=="string"?wr(e)?Gn:X.test(e)?pi:mf:Array.isArray(e)?ks:typeof e=="object"?X.test(e)?pi:hf:Gn}function ks(e,t){const n=[...e],i=n.length,r=e.map((s,o)=>Vr(s)(s,t[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function hf(e,t){const n={...e,...t},i={};for(const r in n)e[r]!==void 0&&t[r]!==void 0&&(i[r]=Vr(e[r])(e[r],t[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function pf(e,t){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const o=t.types[s],a=e.indexes[o][r[o]],l=(n=e.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const mf=(e,t)=>{const n=St.createTransformer(t),i=je(e),r=je(t);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?ut(ks(pf(i,r),r.values),n):Gn(e,t)};function Es(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?U(e,t,n):Vr(e)(e,t)}function gf(e,t,n){const i=[],r=n||Es,s=e.length-1;for(let o=0;o<s;o++){let a=r(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||Z:t;a=ut(l,a)}i.push(a)}return i}function yf(e,t,{clamp:n=!0,ease:i,mixer:r}={}){const s=e.length;if(rs(s===t.length),s===1)return()=>t[0];if(s===2&&e[0]===e[1])return()=>t[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=gf(t,i,r),a=o.length,l=c=>{let u=0;if(a>1)for(;u<e.length-2&&!(c<e[u+1]);u++);const f=re(e[u],e[u+1],c);return o[u](f)};return n?c=>l(vt(e[0],e[s-1],c)):l}function vf(e,t){const n=e[e.length-1];for(let i=1;i<=t;i++){const r=re(0,t,i);e.push(U(n,1,r))}}function bf(e){const t=[0];return vf(t,e.length-1),t}function Sf(e,t){return e.map(n=>n*t)}function xf(e,t){return e.map(()=>t||ws).splice(0,e.length-1)}function Ae({duration:e=300,keyframes:t,times:n,ease:i="easeInOut"}){const r=rf(i)?i.map(di):di(i),s={done:!1,value:t[0]},o=Sf(n&&n.length===t.length?n:bf(t),e),a=yf(o,t,{ease:Array.isArray(r)?r:xf(t,r)});return{calculatedDuration:e,next:l=>(s.value=a(l),s.done=l>=e,s)}}const mi=2e4;function wf(e){let t=0;const n=50;let i=e.next(t);for(;!i.done&&t<mi;)t+=n,i=e.next(t);return t>=mi?1/0:t}const Tf=e=>{const t=({timestamp:n})=>e(n);return{start:()=>Y.update(t,!0),stop:()=>bt(t),now:()=>G.isProcessing?G.timestamp:yt.now()}},Pf={decay:fi,inertia:fi,tween:Ae,keyframes:Ae,spring:Ss},Of=e=>e/100;class Ir extends ys{constructor({KeyframeResolver:t=Ar,...n}){super(n),this.holdTime=null,this.startTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.state="idle";const{name:i,motionValue:r,keyframes:s}=this.options,o=(a,l)=>this.onKeyframesResolved(a,l);i&&r&&r.owner?this.resolver=r.owner.resolveKeyframes(s,o,i,r):this.resolver=new t(s,o,i,r),this.resolver.scheduleResolve()}initPlayback(t){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=Pf[n]||Ae;let l,c;a!==Ae&&typeof t[0]!="number"&&(l=ut(Of,Es(t[0],t[1])),t=[0,100]);const u=a({...this.options,keyframes:t});s==="mirror"&&(c=a({...this.options,keyframes:[...t].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=wf(u));const{calculatedDuration:f}=u,d=f+r,p=d*(i+1)-r;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:d,totalDuration:p}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:i}=this;if(!i){const{keyframes:R}=this.options;return{done:!0,value:R[R.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:f}=i;if(this.startTime===null)return s.next(0);const{delay:d,repeat:p,repeatType:m,repeatDelay:h,onUpdate:v}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-u/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const b=this.currentTime-d*(this.speed>=0?1:-1),g=this.speed>=0?b<0:b>u;this.currentTime=Math.max(b,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let y=this.currentTime,w=s;if(p){const R=Math.min(this.currentTime,u)/f;let T=Math.floor(R),P=R%1;!P&&R>=1&&(P=1),P===1&&T--,T=Math.min(T,p+1),!!(T%2)&&(m==="reverse"?(P=1-P,h&&(P-=h/f)):m==="mirror"&&(w=o)),y=vt(0,1,P)*f}const C=g?{done:!1,value:l[0]}:w.next(y);a&&(C.value=a(C.value));let{done:E}=C;!g&&c!==null&&(E=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&E);return F&&r!==void 0&&(C.value=ln(l,this.options,r)),v&&v(C.value),F&&this.finish(),C}get duration(){const{resolved:t}=this;return t?ft(t.calculatedDuration):0}get time(){return ft(this.currentTime)}set time(t){t=gt(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=ft(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=Tf,onPlay:n}=this.options;this.driver||(this.driver=t(r=>this.tick(r))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:(!this.startTime||this.state==="finished")&&(this.startTime=i),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:t}=this.options;t&&t()}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const Ms=e=>Array.isArray(e)&&typeof e[0]=="number";function js(e){return!!(!e||typeof e=="string"&&e in zr||Ms(e)||Array.isArray(e)&&e.every(js))}const Yt=([e,t,n,i])=>`cubic-bezier(${e}, ${t}, ${n}, ${i})`,zr={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Yt([0,.65,.55,1]),circOut:Yt([.55,0,1,.45]),backIn:Yt([.31,.01,.66,-.59]),backOut:Yt([.33,1.53,.69,.99])};function Cf(e){return As(e)||zr.easeOut}function As(e){if(e)return Ms(e)?Yt(e):Array.isArray(e)?e.map(Cf):zr[e]}function kf(e,t,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a,times:l}={}){const c={[t]:n};l&&(c.offset=l);const u=As(a);return Array.isArray(u)&&(c.easing=u),e.animate(c,{delay:i,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const Ef=zu(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Mf=new Set(["opacity","clipPath","filter","transform"]),Re=10,jf=2e4;function Af(e){return e.type==="spring"||e.name==="backgroundColor"||!js(e.ease)}function Rf(e,t){const n=new Ir({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:e[0]};const r=[];let s=0;for(;!i.done&&s<jf;)i=n.sample(s),r.push(i.value),s+=Re;return{times:void 0,keyframes:r,duration:s-Re,ease:"linear"}}class gi extends ys{constructor(t){super(t);const{name:n,motionValue:i,keyframes:r}=this.options;this.resolver=new gs(r,(s,o)=>this.onKeyframesResolved(s,o),n,i),this.resolver.scheduleResolve()}initPlayback(t,n){var i;let{duration:r=300,times:s,ease:o,type:a,motionValue:l,name:c}=this.options;if(!(!((i=l.owner)===null||i===void 0)&&i.current))return!1;if(Af(this.options)){const{onComplete:f,onUpdate:d,motionValue:p,...m}=this.options,h=Rf(t,m);t=h.keyframes,t.length===1&&(t[1]=t[0]),r=h.duration,s=h.times,o=h.ease,a="keyframes"}const u=kf(l.owner.current,c,t,{...this.options,duration:r,times:s,ease:o});return u.startTime=yt.now(),this.pendingTimeline?(u.timeline=this.pendingTimeline,this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:f}=this.options;l.set(ln(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:r,times:s,type:a,ease:o,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return ft(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return ft(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=gt(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Z;const{animation:i}=n;i.timeline=t,i.onfinish=null}return Z}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=t;if(!(n.playState==="idle"||n.playState==="finished")){if(this.time){const{motionValue:l,onUpdate:c,onComplete:u,...f}=this.options,d=new Ir({...f,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),p=gt(this.time);l.setWithVelocity(d.sample(p-Re).value,d.sample(p).value,Re)}this.cancel()}}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=t;return Ef()&&i&&Mf.has(i)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const Fr=(e,t,n,i={},r,s)=>o=>{const a=jr(i,e)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-gt(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-c,onUpdate:d=>{t.set(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:s?void 0:r};pu(a)||(u={...u,...hu(e,u)}),u.duration&&(u.duration=gt(u.duration)),u.repeatDelay&&(u.repeatDelay=gt(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let f=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(f=!0)),f&&!s&&t.get()!==void 0){const d=ln(u.keyframes,a);if(d!==void 0){Y.update(()=>{u.onUpdate(d),u.onComplete()});return}}return!s&&gi.supports(u)?new gi(u):new Ir(u)};function Le(e){return!!(Q(e)&&e.add)}function Br(e,t){e.indexOf(t)===-1&&e.push(t)}function $r(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Nr{constructor(){this.subscriptions=[]}add(t){return Br(this.subscriptions,t),()=>$r(this.subscriptions,t)}notify(t,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](t,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(t,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const yi=30,Lf=e=>!isNaN(parseFloat(e));class _f{constructor(t,n={}){this.version="11.1.1",this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=yt.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.canTrackVelocity=Lf(this.current),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=yt.now()}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Nr);const i=this.events[t].add(n);return t==="change"?()=>{i(),Y.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-i}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=yt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>yi)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,yi);return vs(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ie(e,t){return new _f(e,t)}function Df(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ie(n))}function Vf(e,t){const n=an(e,t);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=Nc(s[o]);Df(e,o,a)}}function If({protectedKeys:e,needsAnimating:t},n){const i=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,i}function Rs(e,t,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=e.getDefaultTransition(),transitionEnd:a,...l}=t;const c=e.getValue("willChange");i&&(o=i);const u=[],f=r&&e.animationState&&e.animationState.getState()[r];for(const d in l){const p=e.getValue(d,(s=e.latestValues[d])!==null&&s!==void 0?s:null),m=l[d];if(m===void 0||f&&If(f,d))continue;const h={delay:n,elapsed:0,...jr(o||{},d)};let v=!1;if(window.HandoffAppearAnimations){const y=e.getProps()[Lo];if(y){const w=window.HandoffAppearAnimations(y,d);w!==null&&(h.elapsed=w,v=!0)}}p.start(Fr(d,p,m,e.shouldReduceMotion&&jt.has(d)?{type:!1}:h,e,v));const b=p.animation;b&&(Le(c)&&(c.add(d),b.then(()=>c.remove(d))),u.push(b))}return a&&Promise.all(u).then(()=>{Y.update(()=>{a&&Vf(e,a)})}),u}function Yn(e,t,n={}){var i;const r=an(e,t,n.type==="exit"?(i=e.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all(Rs(e,r,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:d}=s;return zf(e,t,u+c,f,d,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(n.delay)])}function zf(e,t,n=0,i=0,r=1,s){const o=[],a=(e.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(e.variantChildren).sort(Ff).forEach((c,u)=>{c.notify("AnimationStart",t),o.push(Yn(c,t,{...s,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(o)}function Ff(e,t){return e.sortNodePosition(t)}function Bf(e,t,n={}){e.notify("AnimationStart",t);let i;if(Array.isArray(t)){const r=t.map(s=>Yn(e,s,n));i=Promise.all(r)}else if(typeof t=="string")i=Yn(e,t,n);else{const r=typeof t=="function"?an(e,t,n.custom):t;i=Promise.all(Rs(e,r,n))}return i.then(()=>{Y.postRender(()=>{e.notify("AnimationComplete",t)})})}const $f=[...br].reverse(),Nf=br.length;function Wf(e){return t=>Promise.all(t.map(({animation:n,options:i})=>Bf(e,n,i)))}function Hf(e){let t=Wf(e);const n=Kf();let i=!0;const r=l=>(c,u)=>{var f;const d=an(e,u,l==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(d){const{transition:p,transitionEnd:m,...h}=d;c={...c,...h,...m}}return c};function s(l){t=l(e)}function o(l){const c=e.getProps(),u=e.getVariantContext(!0)||{},f=[],d=new Set;let p={},m=1/0;for(let v=0;v<Nf;v++){const b=$f[v],g=n[b],y=c[b]!==void 0?c[b]:u[b],w=ee(y),C=b===l?g.isActive:null;C===!1&&(m=v);let E=y===u[b]&&y!==c[b]&&w;if(E&&i&&e.manuallyAnimateOnMount&&(E=!1),g.protectedKeys={...p},!g.isActive&&C===null||!y&&!g.prevProp||rn(y)||typeof y=="boolean")continue;let R=Uf(g.prevProp,y)||b===l&&g.isActive&&!E&&w||v>m&&w,T=!1;const P=Array.isArray(y)?y:[y];let L=P.reduce(r(b),{});C===!1&&(L={});const{prevResolvedValues:A={}}=g,D={...A,...L},_=W=>{R=!0,d.has(W)&&(T=!0,d.delete(W)),g.needsAnimating[W]=!0;const $=e.getValue(W);$&&($.liveStyle=!1)};for(const W in D){const $=L[W],et=A[W];if(p.hasOwnProperty(W))continue;let st=!1;$n($)&&$n(et)?st=!es($,et):st=$!==et,st?$!=null?_(W):d.add(W):$!==void 0&&d.has(W)?_(W):g.protectedKeys[W]=!0}g.prevProp=y,g.prevResolvedValues=L,g.isActive&&(p={...p,...L}),i&&e.blockInitialAnimation&&(R=!1),R&&(!E||T)&&f.push(...P.map(W=>({animation:W,options:{type:b}})))}if(d.size){const v={};d.forEach(b=>{const g=e.getBaseTarget(b),y=e.getValue(b);y&&(y.liveStyle=!0),v[b]=g??null}),f.push({animation:v})}let h=!!f.length;return i&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(h=!1),i=!1,h?t(f):Promise.resolve()}function a(l,c){var u;if(n[l].isActive===c)return Promise.resolve();(u=e.variantChildren)===null||u===void 0||u.forEach(d=>{var p;return(p=d.animationState)===null||p===void 0?void 0:p.setActive(l,c)}),n[l].isActive=c;const f=o(l);for(const d in n)n[d].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n}}function Uf(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!es(t,e):!1}function Pt(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Kf(){return{animate:Pt(!0),whileInView:Pt(),whileHover:Pt(),whileTap:Pt(),whileDrag:Pt(),whileFocus:Pt(),exit:Pt()}}class qf extends wt{constructor(t){super(t),t.animationState||(t.animationState=Hf(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),rn(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let Gf=0;class Yf extends wt{constructor(){super(...arguments),this.id=Gf++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const r=this.node.animationState.setActive("exit",!t);n&&!t&&r.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const Xf={animation:{Feature:qf},exit:{Feature:Yf}},vi=(e,t)=>Math.abs(e-t);function Qf(e,t){const n=vi(e.x,t.x),i=vi(e.y,t.y);return Math.sqrt(n**2+i**2)}class Ls{constructor(t,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Pn(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,p=Qf(f.offset,{x:0,y:0})>=3;if(!d&&!p)return;const{point:m}=f,{timestamp:h}=G;this.history.push({...m,timestamp:h});const{onStart:v,onMove:b}=this.handlers;d||(v&&v(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),b&&b(this.lastMoveEvent,f)},this.handlePointerMove=(f,d)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Tn(d,this.transformPagePoint),Y.update(this.updatePoint,!0)},this.handlePointerUp=(f,d)=>{this.end();const{onEnd:p,onSessionEnd:m,resumeAnimation:h}=this.handlers;if(this.dragSnapToOrigin&&h&&h(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Pn(f.type==="pointercancel"?this.lastMoveEventInfo:Tn(d,this.transformPagePoint),this.history);this.startEvent&&p&&p(f,v),m&&m(f,v)},!Xo(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=sn(t),a=Tn(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=G;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(t,Pn(a,this.history)),this.removeListeners=ut(ct(this.contextWindow,"pointermove",this.handlePointerMove),ct(this.contextWindow,"pointerup",this.handlePointerUp),ct(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),bt(this.updatePoint)}}function Tn(e,t){return t?{point:t(e.point)}:e}function bi(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Pn({point:e},t){return{point:e,delta:bi(e,_s(t)),offset:bi(e,Zf(t)),velocity:Jf(t,.1)}}function Zf(e){return e[0]}function _s(e){return e[e.length-1]}function Jf(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,i=null;const r=_s(e);for(;n>=0&&(i=e[n],!(r.timestamp-i.timestamp>gt(t)));)n--;if(!i)return{x:0,y:0};const s=ft(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function nt(e){return e.max-e.min}function Xn(e,t=0,n=.01){return Math.abs(e-t)<=n}function Si(e,t,n,i=.5){e.origin=i,e.originPoint=U(t.min,t.max,e.origin),e.scale=nt(n)/nt(t),(Xn(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=U(n.min,n.max,e.origin)-e.originPoint,(Xn(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Zt(e,t,n,i){Si(e.x,t.x,n.x,i?i.originX:void 0),Si(e.y,t.y,n.y,i?i.originY:void 0)}function xi(e,t,n){e.min=n.min+t.min,e.max=e.min+nt(t)}function td(e,t,n){xi(e.x,t.x,n.x),xi(e.y,t.y,n.y)}function wi(e,t,n){e.min=t.min-n.min,e.max=e.min+nt(t)}function Jt(e,t,n){wi(e.x,t.x,n.x),wi(e.y,t.y,n.y)}function ed(e,{min:t,max:n},i){return t!==void 0&&e<t?e=i?U(t,e,i.min):Math.max(e,t):n!==void 0&&e>n&&(e=i?U(n,e,i.max):Math.min(e,n)),e}function Ti(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function nd(e,{top:t,left:n,bottom:i,right:r}){return{x:Ti(e.x,n,r),y:Ti(e.y,t,i)}}function Pi(e,t){let n=t.min-e.min,i=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,i]=[i,n]),{min:n,max:i}}function rd(e,t){return{x:Pi(e.x,t.x),y:Pi(e.y,t.y)}}function id(e,t){let n=.5;const i=nt(e),r=nt(t);return r>i?n=re(t.min,t.max-i,e.min):i>r&&(n=re(e.min,e.max-r,t.min)),vt(0,1,n)}function od(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Qn=.35;function sd(e=Qn){return e===!1?e=0:e===!0&&(e=Qn),{x:Oi(e,"left","right"),y:Oi(e,"top","bottom")}}function Oi(e,t,n){return{min:Ci(e,t),max:Ci(e,n)}}function Ci(e,t){return typeof e=="number"?e:e[t]||0}const ki=()=>({translate:0,scale:1,origin:0,originPoint:0}),_t=()=>({x:ki(),y:ki()}),Ei=()=>({min:0,max:0}),K=()=>({x:Ei(),y:Ei()});function it(e){return[e("x"),e("y")]}function Ds({top:e,left:t,right:n,bottom:i}){return{x:{min:t,max:n},y:{min:e,max:i}}}function ad({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function ld(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),i=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function On(e){return e===void 0||e===1}function Zn({scale:e,scaleX:t,scaleY:n}){return!On(e)||!On(t)||!On(n)}function Ot(e){return Zn(e)||Vs(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Vs(e){return Mi(e.x)||Mi(e.y)}function Mi(e){return e&&e!=="0%"}function _e(e,t,n){const i=e-n,r=t*i;return n+r}function ji(e,t,n,i,r){return r!==void 0&&(e=_e(e,r,i)),_e(e,n,i)+t}function Jn(e,t=0,n=1,i,r){e.min=ji(e.min,t,n,i,r),e.max=ji(e.max,t,n,i,r)}function Is(e,{x:t,y:n}){Jn(e.x,t.translate,t.scale,t.originPoint),Jn(e.y,n.translate,n.scale,n.originPoint)}function cd(e,t,n,i=!1){const r=n.length;if(!r)return;t.x=t.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const l=s.instance;l&&l.style&&l.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Dt(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Is(e,o)),i&&Ot(s.latestValues)&&Dt(e,s.latestValues))}t.x=Ai(t.x),t.y=Ai(t.y)}function Ai(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function pt(e,t){e.min=e.min+t,e.max=e.max+t}function Ri(e,t,[n,i,r]){const s=t[r]!==void 0?t[r]:.5,o=U(e.min,e.max,s);Jn(e,t[n],t[i],o,t.scale)}const ud=["x","scaleX","originX"],fd=["y","scaleY","originY"];function Dt(e,t){Ri(e.x,t,ud),Ri(e.y,t,fd)}function zs(e,t){return Ds(ld(e.getBoundingClientRect(),t))}function dd(e,t,n){const i=zs(e,n),{scroll:r}=t;return r&&(pt(i.x,r.offset.x),pt(i.y,r.offset.y)),i}const Fs=({current:e})=>e?e.ownerDocument.defaultView:null,hd=new WeakMap;class pd{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=K(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(sn(u,"page").point)},s=(u,f)=>{const{drag:d,dragPropagation:p,onDragStart:m}=this.getProps();if(d&&!p&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Zo(d),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),it(v=>{let b=this.getAxisMotionValue(v).get()||0;if(at.test(b)){const{projection:g}=this.visualElement;if(g&&g.layout){const y=g.layout.layoutBox[v];y&&(b=nt(y)*(parseFloat(b)/100))}}this.originPoint[v]=b}),m&&m(u,f);const{animationState:h}=this.visualElement;h&&h.setActive("whileDrag",!0)},o=(u,f)=>{const{dragPropagation:d,dragDirectionLock:p,onDirectionLock:m,onDrag:h}=this.getProps();if(!d&&!this.openGlobalLock)return;const{offset:v}=f;if(p&&this.currentDirection===null){this.currentDirection=md(v),this.currentDirection!==null&&m&&m(this.currentDirection);return}this.updateAxis("x",f.point,v),this.updateAxis("y",f.point,v),this.visualElement.render(),h&&h(u,f)},a=(u,f)=>this.stop(u,f),l=()=>it(u=>{var f;return this.getAnimationState(u)==="paused"&&((f=this.getAxisMotionValue(u).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new Ls(t,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:Fs(this.visualElement)})}stop(t,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&s(t,n)}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,i){const{drag:r}=this.getProps();if(!i||!ve(t,r,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+i[t];this.constraints&&this.constraints[t]&&(o=ed(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;n&&Rt(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=nd(r.layoutBox,n):this.constraints=!1,this.elastic=sd(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&it(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=od(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Rt(t))return!1;const i=t.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=dd(i,r.root,this.visualElement.getTransformPagePoint());let o=rd(r.layout.layoutBox,s);if(n){const a=n(ad(o));this.hasMutatedConstraints=!!a,a&&(o=Ds(a))}return o}startAnimation(t){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=it(u=>{if(!ve(u,n,this.currentDirection))return;let f=l&&l[u]||{};o&&(f={min:0,max:0});const d=r?200:1e6,p=r?40:1e7,m={type:"inertia",velocity:i?t[u]:0,bounceStiffness:d,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(u,m)});return Promise.all(c).then(a)}startAxisValueAnimation(t,n){const i=this.getAxisMotionValue(t);return i.start(Fr(t,i,0,n,this.visualElement))}stopAnimation(){it(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){it(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(t,(i.initial?i.initial[t]:void 0)||0)}snapToCursor(t){it(n=>{const{drag:i}=this.getProps();if(!ve(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(t[n]-U(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Rt(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};it(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=id({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),it(o=>{if(!ve(o,t,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(U(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;hd.set(this.visualElement,this);const t=this.visualElement.current,n=ct(t,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Rt(l)&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),i();const o=lt(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(it(u=>{const f=this.getAxisMotionValue(u);f&&(this.originPoint[u]+=l[u].translate,f.set(f.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Qn,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function ve(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function md(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class gd extends wt{constructor(t){super(t),this.removeGroupControls=Z,this.removeListeners=Z,this.controls=new pd(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Z}unmount(){this.removeGroupControls(),this.removeListeners()}}const Li=e=>(t,n)=>{e&&e(t,n)};class yd extends wt{constructor(){super(...arguments),this.removePointerDownListener=Z}onPointerDown(t){this.session=new Ls(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Fs(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Li(t),onStart:Li(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&r(s,o)}}}mount(){this.removePointerDownListener=ct(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function vd(){const e=k.useContext(mr);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:i}=e,r=k.useId();return k.useEffect(()=>i(r),[]),!t&&n?[!1,()=>n&&n(r)]:[!0]}const Ce={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function _i(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const qt={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(j.test(e))e=parseFloat(e);else return e;const n=_i(e,t.target.x),i=_i(e,t.target.y);return`${n}% ${i}%`}},bd={correct:(e,{treeScale:t,projectionDelta:n})=>{const i=e,r=St.parse(e);if(r.length>5)return i;const s=St.createTransformer(e),o=typeof r[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;r[0+o]/=a,r[1+o]/=l;const c=U(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};class Sd extends k.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=t;yc(xd),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Ce.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||Y.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),vr.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=t;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Bs(e){const[t,n]=vd(),i=k.useContext(Vo);return S.jsx(Sd,{...e,layoutGroup:i,switchLayoutGroup:k.useContext(Io),isPresent:t,safeToRemove:n})}const xd={borderRadius:{...qt,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:qt,borderTopRightRadius:qt,borderBottomLeftRadius:qt,borderBottomRightRadius:qt,boxShadow:bd},$s=["TopLeft","TopRight","BottomLeft","BottomRight"],wd=$s.length,Di=e=>typeof e=="string"?parseFloat(e):e,Vi=e=>typeof e=="number"||j.test(e);function Td(e,t,n,i,r,s){r?(e.opacity=U(0,n.opacity!==void 0?n.opacity:1,Pd(i)),e.opacityExit=U(t.opacity!==void 0?t.opacity:1,0,Od(i))):s&&(e.opacity=U(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<wd;o++){const a=`border${$s[o]}Radius`;let l=Ii(t,a),c=Ii(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Vi(l)===Vi(c)?(e[a]=Math.max(U(Di(l),Di(c),i),0),(at.test(c)||at.test(l))&&(e[a]+="%")):e[a]=c}(t.rotate||n.rotate)&&(e.rotate=U(t.rotate||0,n.rotate||0,i))}function Ii(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Pd=Ns(0,.5,Os),Od=Ns(.5,.95,Z);function Ns(e,t,n){return i=>i<e?0:i>t?1:n(re(e,t,i))}function zi(e,t){e.min=t.min,e.max=t.max}function rt(e,t){zi(e.x,t.x),zi(e.y,t.y)}function Fi(e,t,n,i,r){return e-=t,e=_e(e,1/n,i),r!==void 0&&(e=_e(e,1/r,i)),e}function Cd(e,t=0,n=1,i=.5,r,s=e,o=e){if(at.test(t)&&(t=parseFloat(t),t=U(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=U(s.min,s.max,i);e===s&&(a-=t),e.min=Fi(e.min,t,n,a,r),e.max=Fi(e.max,t,n,a,r)}function Bi(e,t,[n,i,r],s,o){Cd(e,t[n],t[i],t[r],t.scale,s,o)}const kd=["x","scaleX","originX"],Ed=["y","scaleY","originY"];function $i(e,t,n,i){Bi(e.x,t,kd,n?n.x:void 0,i?i.x:void 0),Bi(e.y,t,Ed,n?n.y:void 0,i?i.y:void 0)}function Ni(e){return e.translate===0&&e.scale===1}function Ws(e){return Ni(e.x)&&Ni(e.y)}function Md(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function Hs(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Wi(e){return nt(e.x)/nt(e.y)}class jd{constructor(){this.members=[]}add(t){Br(this.members,t),t.scheduleRender()}remove(t){if($r(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(r=>t===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(t,n){const i=this.lead;if(t!==i&&(this.prevLead=i,this.lead=t,t.show(),i)){i.instance&&i.scheduleRender(),t.scheduleRender(),t.resumeFrom=i,n&&(t.resumeFrom.preserveOpacity=!0),i.snapshot&&(t.snapshot=i.snapshot,t.snapshot.latestValues=i.animationValues||i.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:r}=t.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:i}=t;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Hi(e,t,n){let i="";const r=e.x.translate/t.x,s=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(t.x!==1||t.y!==1)&&(i+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:f,rotateY:d,skewX:p,skewY:m}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),f&&(i+=`rotateX(${f}deg) `),d&&(i+=`rotateY(${d}deg) `),p&&(i+=`skewX(${p}deg) `),m&&(i+=`skewY(${m}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const Ad=(e,t)=>e.depth-t.depth;class Rd{constructor(){this.children=[],this.isDirty=!1}add(t){Br(this.children,t),this.isDirty=!0}remove(t){$r(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Ad),this.isDirty=!1,this.children.forEach(t)}}function Ld(e,t){const n=yt.now(),i=({timestamp:r})=>{const s=r-n;s>=t&&(bt(i),e(s-t))};return Y.read(i,!0),()=>bt(i)}function _d(e){window.MotionDebug&&window.MotionDebug.record(e)}function Dd(e){return e instanceof SVGElement&&e.tagName!=="svg"}function Vd(e,t,n){const i=Q(e)?e:ie(e);return i.start(Fr("",i,t,n)),i.animation}const Cn=["","X","Y","Z"],Id={visibility:"hidden"},Ui=1e3;let zd=0;const Ct={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function kn(e,t,n,i){const{latestValues:r}=t;r[e]&&(n[e]=r[e],t.setStaticValue(e,0),i&&(i[e]=0))}function Us({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=t==null?void 0:t()){this.id=zd++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ct.totalNodes=Ct.resolvedTargetDeltas=Ct.recalculatedProjection=0,this.nodes.forEach($d),this.nodes.forEach(Kd),this.nodes.forEach(qd),this.nodes.forEach(Nd),_d(Ct)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Rd)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Nr),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Dd(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),e){let f;const d=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=Ld(d,250),Ce.hasAnimatedSinceResize&&(Ce.hasAnimatedSinceResize=!1,this.nodes.forEach(qi))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:d,hasRelativeTargetChanged:p,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const h=this.options.transition||u.getDefaultTransition()||Zd,{onLayoutAnimationStart:v,onLayoutAnimationComplete:b}=u.getProps(),g=!this.targetLayout||!Hs(this.targetLayout,m)||p,y=!d&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||d&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,y);const w={...jr(h,"layout"),onPlay:v,onComplete:b};(u.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else d||qi(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,bt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Gd),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const f=this.path[u];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Ki);return}this.isUpdating||this.nodes.forEach(Hd),this.isUpdating=!1,window.HandoffCancelAllAnimations&&window.HandoffCancelAllAnimations(),this.nodes.forEach(Ud),this.nodes.forEach(Fd),this.nodes.forEach(Bd),this.clearAllSnapshots();const a=yt.now();G.delta=vt(0,1e3/60,a-G.timestamp),G.timestamp=a,G.isProcessing=!0,gn.update.process(G),gn.preRender.process(G),gn.render.process(G),G.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,vr.read(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(Wd),this.sharedNodes.forEach(Yd)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Y.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Y.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=K(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:i(this.instance),offset:n(this.instance)})}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!Ws(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||Ot(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),Jd(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return K();const a=o.measureViewportBox(),{scroll:l}=this.root;return l&&(pt(a.x,l.offset.x),pt(a.y,l.offset.y)),a}removeElementScroll(o){const a=K();rt(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:u,options:f}=c;if(c!==this.root&&u&&f.layoutScroll){if(u.isRoot){rt(a,o);const{scroll:d}=this.root;d&&(pt(a.x,-d.offset.x),pt(a.y,-d.offset.y))}pt(a.x,u.offset.x),pt(a.y,u.offset.y)}}return a}applyTransform(o,a=!1){const l=K();rt(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Dt(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Ot(u.latestValues)&&Dt(l,u.latestValues)}return Ot(this.latestValues)&&Dt(l,this.latestValues),l}removeTransform(o){const a=K();rt(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Ot(c.latestValues))continue;Zn(c.latestValues)&&c.updateSnapshot();const u=K(),f=c.measurePageBox();rt(u,f),$i(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Ot(this.latestValues)&&$i(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==G.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:d}=this.options;if(!(!this.layout||!(f||d))){if(this.resolvedRelativeTargetAt=G.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=K(),this.relativeTargetOrigin=K(),Jt(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),rt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=K(),this.targetWithTransforms=K()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),td(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):rt(this.target,this.layout.layoutBox),Is(this.target,this.targetDelta)):rt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=K(),this.relativeTargetOrigin=K(),Jt(this.relativeTargetOrigin,this.target,p.target),rt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ct.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Zn(this.parent.latestValues)||Vs(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===G.timestamp&&(c=!1),c)return;const{layout:u,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||f))return;rt(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,p=this.treeScale.y;cd(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=K());const{target:m}=a;if(!m){this.projectionTransform&&(this.projectionDelta=_t(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=_t(),this.projectionDeltaWithTransform=_t());const h=this.projectionTransform;Zt(this.projectionDelta,this.layoutCorrected,m,this.latestValues),this.projectionTransform=Hi(this.projectionDelta,this.treeScale),(this.projectionTransform!==h||this.treeScale.x!==d||this.treeScale.y!==p)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m)),Ct.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},f=_t();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=K(),p=l?l.source:void 0,m=this.layout?this.layout.source:void 0,h=p!==m,v=this.getStack(),b=!v||v.members.length<=1,g=!!(h&&!b&&this.options.crossfade===!0&&!this.path.some(Qd));this.animationProgress=0;let y;this.mixTargetDelta=w=>{const C=w/1e3;Gi(f.x,o.x,C),Gi(f.y,o.y,C),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Jt(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Xd(this.relativeTarget,this.relativeTargetOrigin,d,C),y&&Md(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=K()),rt(y,this.relativeTarget)),h&&(this.animationValues=u,Td(u,c,this.latestValues,C,g,b)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(bt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Y.update(()=>{Ce.hasAnimatedSinceResize=!0,this.currentAnimation=Vd(0,Ui,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Ui),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&Ks(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||K();const f=nt(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const d=nt(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}rt(a,l),Dt(a,u),Zt(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new jd),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&kn("z",o,c,this.animationValues);for(let u=0;u<Cn.length;u++)kn(`rotate${Cn[u]}`,o,c,this.animationValues),kn(`skew${Cn[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Id;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Pe(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const h={};return this.options.layoutId&&(h.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,h.pointerEvents=Pe(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Ot(this.latestValues)&&(h.transform=u?u({},""):"none",this.hasProjected=!1),h}const d=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=Hi(this.projectionDeltaWithTransform,this.treeScale,d),u&&(c.transform=u(d,c.transform));const{x:p,y:m}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${m.origin*100}% 0`,f.animationValues?c.opacity=f===this?(l=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:c.opacity=f===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const h in Ee){if(d[h]===void 0)continue;const{correct:v,applyTo:b}=Ee[h],g=c.transform==="none"?d[h]:v(d[h],f);if(b){const y=b.length;for(let w=0;w<y;w++)c[b[w]]=g}else c[h]=g}return this.options.layoutId&&(c.pointerEvents=f===this?Pe(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Ki),this.root.sharedNodes.clear()}}}function Fd(e){e.updateLayout()}function Bd(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=e.layout,{animationType:s}=e.options,o=n.source!==e.layout.source;s==="size"?it(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],p=nt(d);d.min=i[f].min,d.max=d.min+p}):Ks(s,n.layoutBox,i)&&it(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],p=nt(i[f]);d.max=d.min+p,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+p)});const a=_t();Zt(a,i,n.layoutBox);const l=_t();o?Zt(l,e.applyTransform(r,!0),n.measuredBox):Zt(l,i,n.layoutBox);const c=!Ws(a);let u=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:d,layout:p}=f;if(d&&p){const m=K();Jt(m,n.layoutBox,d.layoutBox);const h=K();Jt(h,i,p.layoutBox),Hs(m,h)||(u=!0),f.options.layoutRoot&&(e.relativeTarget=h,e.relativeTargetOrigin=m,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(e.isLead()){const{onExitComplete:i}=e.options;i&&i()}e.options.transition=void 0}function $d(e){Ct.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Nd(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Wd(e){e.clearSnapshot()}function Ki(e){e.clearMeasurements()}function Hd(e){e.isLayoutDirty=!1}function Ud(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function qi(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Kd(e){e.resolveTargetDelta()}function qd(e){e.calcProjection()}function Gd(e){e.resetSkewAndRotation()}function Yd(e){e.removeLeadSnapshot()}function Gi(e,t,n){e.translate=U(t.translate,0,n),e.scale=U(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Yi(e,t,n,i){e.min=U(t.min,n.min,i),e.max=U(t.max,n.max,i)}function Xd(e,t,n,i){Yi(e.x,t.x,n.x,i),Yi(e.y,t.y,n.y,i)}function Qd(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Zd={duration:.45,ease:[.4,0,.1,1]},Xi=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Qi=Xi("applewebkit/")&&!Xi("chrome/")?Math.round:Z;function Zi(e){e.min=Qi(e.min),e.max=Qi(e.max)}function Jd(e){Zi(e.x),Zi(e.y)}function Ks(e,t,n){return e==="position"||e==="preserve-aspect"&&!Xn(Wi(t),Wi(n),.2)}const th=Us({attachResizeListener:(e,t)=>lt(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),En={current:void 0},qs=Us({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!En.current){const e=new th({});e.mount(window),e.setOptions({layoutScroll:!0}),En.current=e}return En.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),eh={pan:{Feature:yd},drag:{Feature:gd,ProjectionNode:qs,MeasureLayout:Bs}},tr={current:null},Gs={current:!1};function nh(){if(Gs.current=!0,!!gr)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>tr.current=e.matches;e.addListener(t),t()}else tr.current=!1}function rh(e,t,n){const{willChange:i}=t;for(const r in t){const s=t[r],o=n[r];if(Q(s))e.addValue(r,s),Le(i)&&i.add(r);else if(Q(o))e.addValue(r,ie(s,{owner:e})),Le(i)&&i.remove(r);else if(o!==s)if(e.hasValue(r)){const a=e.getValue(r);a.liveStyle===!0?a.jump(s):a.hasAnimated||a.set(s)}else{const a=e.getStaticValue(r);e.addValue(r,ie(a!==void 0?a:s,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Ji=new WeakMap,ih=[...as,X,St],oh=e=>ih.find(ss(e)),Ys=Object.keys(ne),sh=Ys.length,to=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],ah=Sr.length;function Xs(e){if(e)return e.options.allowProjection!==!1?e.projection:Xs(e.parent)}class lh{scrapeMotionValuesFromProps(t,n,i){return{}}constructor({parent:t,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.resolveKeyframes=(d,p,m,h)=>new this.KeyframeResolver(d,p,m,h,this),this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Ar,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>Y.render(this.render,!1,!0);const{latestValues:l,renderState:c}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=i,this.depth=t?t.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=on(n),this.isVariantNode=Do(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const d in f){const p=f[d];l[d]!==void 0&&Q(p)&&(p.set(l[d],!1),Le(u)&&u.add(d))}}mount(t){this.current=t,Ji.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),Gs.current||nh(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:tr.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){var t;Ji.delete(this.current),this.projection&&this.projection.unmount(),bt(this.notifyUpdate),bt(this.render),this.valueSubscriptions.forEach(n=>n()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const n in this.events)this.events[n].clear();for(const n in this.features)(t=this.features[n])===null||t===void 0||t.unmount();this.current=null}bindToMotionValue(t,n){const i=jt.has(t),r=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&Y.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{r(),s(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},i,r,s){let o,a;for(let l=0;l<sh;l++){const c=Ys[l],{isEnabled:u,Feature:f,ProjectionNode:d,MeasureLayout:p}=ne[c];d&&(o=d),u(n)&&(!this.features[c]&&f&&(this.features[c]=new f(this)),p&&(a=p))}if((this.type==="html"||this.type==="svg")&&!this.projection&&o){this.projection=new o(this.latestValues,Xs(this.parent));const{layoutId:l,layout:c,drag:u,dragConstraints:f,layoutScroll:d,layoutRoot:p}=n;this.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!u||f&&Rt(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:s,layoutScroll:d,layoutRoot:p})}return a}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):K()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<to.length;i++){const r=to[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=t[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=rh(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const i=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(i.initial=this.props.initial),i}const n={};for(let i=0;i<ah;i++){const r=Sr[i],s=this.props[r];(ee(s)||s===!1)&&(n[r]=s)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let i=this.values.get(t);return i===void 0&&n!==void 0&&(i=ie(n===null?void 0:n,{owner:this}),this.addValue(t,i)),i}readValue(t,n){var i;let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(i=this.getBaseTargetFromProps(this.props,t))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(is(r)||ns(r))?r=parseFloat(r):!oh(r)&&St.test(n)&&(r=ms(t,n)),this.setBaseTarget(t,Q(r)?r.get():r)),Q(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=Mr(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[t])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!Q(s)?s:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Nr),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Qs extends lh{constructor(){super(...arguments),this.KeyframeResolver=gs}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:i}){delete n[t],delete i[t]}}function ch(e){return window.getComputedStyle(e)}class uh extends Qs{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(jt.has(n)){const i=Lr(n);return i&&i.default||0}else{const i=ch(t),r=(Bo(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(t,{transformPagePoint:n}){return zs(t,n)}build(t,n,i,r){Pr(t,n,i,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,i){return Er(t,n,i)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Q(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,i,r){Uo(t,n,i,r)}}class fh extends Qs{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(jt.has(n)){const i=Lr(n);return i&&i.default||0}return n=Ko.has(n)?n:yr(n),t.getAttribute(n)}measureInstanceViewportBox(){return K()}scrapeMotionValuesFromProps(t,n,i){return Go(t,n,i)}build(t,n,i,r){Cr(t,n,i,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,i,r){qo(t,n,i,r)}mount(t){this.isSVGTag=kr(t.tagName),super.mount(t)}}const dh=(e,t)=>xr(e)?new fh(t,{enableHardwareAcceleration:!1}):new uh(t,{allowProjection:e!==k.Fragment,enableHardwareAcceleration:!0}),hh={layout:{ProjectionNode:qs,MeasureLayout:Bs}},ph={...Xf,...su,...eh,...hh},Zs=mc((e,t)=>qc(e,t,ph,dh));function mh(e){return Fa({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M144.938 18.063l8.437 19.187c17.36 39.43 27.86 79.965 32.563 120.313-50.01 4.028-99.724 4.15-144.688 1.656l-21.188-1.19L33.5 174.438c42.232 51.6 93.612 82.498 148.438 110.907-12.137 69.664-39.726 134.1-77.282 185.312L92 487.906l21.25-2.437c99.754-11.457 177.9-51.146 236.688-106.064 33.06 23.513 65.993 52.01 98.093 88.97l15.095 17.374 1.28-22.97c3.558-63.803-8.63-128.11-33.655-187.53 37.76-67.647 57.985-143.224 63.563-214.656l2-25.532-17.97 18.22c-35.647 36.18-86.34 61.284-143.468 78.124-46.935-47.74-104.638-85.32-170.03-106.812l-19.907-6.532zm82.75 65.312c10.37.018 23.587 4.884 39.312 14.47 16.552 11.965 32.193 25.124 46.813 39.31-35.065 8.896-72.027 14.882-109.188 18.626-1.033-8.865-2.353-17.75-3.938-26.624-.003-.02.004-.042 0-.062-.856-30.68 8.666-45.75 27-45.72zm183.062 46.688c30.66-.583 46.988 17.807 38.875 56.343-7.78 22.997-17.28 45.628-28.594 67.47-18.614-38.538-42.71-74.62-71.436-106.75 12.818-4.06 25.32-8.585 37.437-13.564 8.605-2.196 16.553-3.363 23.72-3.5zm-81.313 22.968c33.327 35.83 60.508 77.187 80.282 121.47-9.032 15.405-19.007 30.317-30 44.563-7.257 9.4-15.006 18.48-23.158 27.25-21.106-6.102-43.19-14.988-60.812-23-.074-.034-.144-.06-.22-.094-19.852-11.155-39.46-21.245-58.624-30.908-11.675-5.886-22.84-11.594-34.125-17.343 4.355-30.108 5.87-61.04 4.126-92.283 25.76-7.15 54.416-13.28 78.313-19.25 14.972-2.99 29.75-6.43 44.217-10.406zm-39.843 32.657c-.847-.002-1.68.018-2.5.063-6.556.363-12.224 2.22-16.813 5.125-9.177 5.81-15.155 16.127-15.155 32.063 0 31.87 28.156 70.8 61 82.812 16.422 6.007 29.822 4.435 39-1.375s15.156-16.127 15.156-32.063c0-31.87-28.124-70.767-60.967-82.78-7.185-2.63-13.79-3.828-19.72-3.845zm-101.22 2.532c1.17 26.25-.064 52.25-3.374 77.686-8.285-4.346-16.454-8.732-24.47-13.25-45.842-30.138-18.07-49.58 27.845-64.437zm11.095 106.03c9.662 4.89 19.185 9.8 29 14.75 34.664 17.48 70.195 36.024 105.686 59.625-6.714 6.15-13.702 12.07-20.937 17.78-66.568 32.47-115.528 2.77-118.25-70.78 1.656-7.067 3.155-14.187 4.5-21.375zm219.124 1.53c3.838 9.98 7.273 20.084 10.344 30.283 3.064 27.392-20.972 31.225-51.75 25.312 6.026-6.788 11.806-13.74 17.312-20.875 8.65-11.207 16.628-22.84 24.094-34.72z"},child:[]}]})(e)}const gh=V.section`
  margin: 4.8rem auto;
  padding: 2.4rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6.4rem;

  @media (min-width: 840px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    width: 100%;
  }
`,yh=V.span`
  position: absolute;
  top: 0;
  right: -4.4rem;
  font-size: 3.2rem;
  color: ${e=>e.theme.colors.mainTextColor};
`,vh=V.h2`
  position: relative;
  text-align: center;
  font-family: ${zt};
  font-weight: 500;
  font-size: 3.2rem;
  line-height: 1.33333;
  color: ${e=>e.theme.colors.mainTextColor};
`,bh=V.strong`
  color: ${e=>e.theme.colors.accentColor};
`,Sh=V.ul`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    gap: 2.4rem;
    grid-template-columns: repeat(4, 1fr);
  }
`,be=V.li`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  padding: 4.8rem 2.4rem;
  border-radius: 1.4rem;
  position: relative;
  background-color: ${e=>e.theme.colors.headerBgColor};
  max-width: 36.5rem;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  border-bottom: 1px solid ${e=>e.theme.colors.mainBgColorReverse};

  @media (min-width: 1440px) {
    padding: 4.8rem 2.4rem 2.4rem;
  }
`,Se=V.h3`
  font-family: ${xt};
  font-weight: 500;
  font-size: 22px;
  line-height: 1.33333;
  color: ${e=>e.theme.colors.mainTextColor};
`,xe=V.p`
  font-family: ${xt};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.33333;
  color: ${e=>e.theme.colors.mainTextColor};
`,we=V.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  border-radius: 20rem;
  background-color: ${e=>e.theme.colors.mainBgColor};

  position: absolute;
  top: -3.2rem;
  left: 50%;

  border-bottom: 1px solid ${e=>e.theme.colors.mainBgColorReverse};

  transform: translateX(-50%);
`,xh=V(Ya)`
  font-size: 3.2rem;
  color: ${e=>e.theme.colors.accentColor};
`,wh=V(Xa)`
  font-size: 3.2rem;
  color: ${e=>e.theme.colors.accentColor};
`,Th=V(mh)`
  font-size: 3.2rem;
  color: ${e=>e.theme.colors.accentColor};
`,Ph=V(Qa)`
  font-size: 3.2rem;
  color: ${e=>e.theme.colors.accentColor};
`;function Oh(){return S.jsx(Zs.div,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:1},children:S.jsxs(gh,{children:[S.jsxs(vh,{children:[S.jsx(Ul,{direction:"left",duration:"2000",children:S.jsx(yh,{children:S.jsx(Ba,{})})}),"Why Rent with"," ",S.jsx(bh,{children:"Camp On Wheels?"})]}),S.jsxs(Sh,{children:[S.jsxs(be,{children:[S.jsx(we,{children:S.jsx(xh,{})}),S.jsx(Se,{children:"Explore Nature"}),S.jsx(xe,{children:"Discover the great outdoors with our wide range of campers. Perfect for adventurous souls seeking a unique getaway."})]}),S.jsxs(be,{children:[S.jsx(we,{children:S.jsx(wh,{})}),S.jsx(Se,{children:"Comfort on Wheels"}),S.jsx(xe,{children:"Experience the convenience of a home away from home. Our campers are equipped with all the amenities you need for a comfortable trip."})]}),S.jsxs(be,{children:[S.jsx(we,{children:S.jsx(Th,{})}),S.jsx(Se,{children:"Flexible Rentals"}),S.jsx(xe,{children:"Whether you're planning a weekend escape or a month-long adventure, we offer flexible rental options to suit your needs."})]}),S.jsxs(be,{children:[S.jsx(we,{children:S.jsx(Ph,{})}),S.jsx(Se,{children:"Expert Support"}),S.jsx(xe,{children:"Our team is dedicated to ensuring you have a seamless and enjoyable camping experience. From booking to drop-off, we're here to assist you every step of the way."})]})]})]})})}var Js={},ta={},cn={},ea={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};e.default=t})(ea);var Ch="Expected a function",eo=NaN,kh="[object Symbol]",Eh=/^\s+|\s+$/g,Mh=/^[-+]0x[0-9a-f]+$/i,jh=/^0b[01]+$/i,Ah=/^0o[0-7]+$/i,Rh=parseInt,Lh=typeof fe=="object"&&fe&&fe.Object===Object&&fe,_h=typeof self=="object"&&self&&self.Object===Object&&self,Dh=Lh||_h||Function("return this")(),Vh=Object.prototype,Ih=Vh.toString,zh=Math.max,Fh=Math.min,Mn=function(){return Dh.Date.now()};function Bh(e,t,n){var i,r,s,o,a,l,c=0,u=!1,f=!1,d=!0;if(typeof e!="function")throw new TypeError(Ch);t=no(t)||0,er(n)&&(u=!!n.leading,f="maxWait"in n,s=f?zh(no(n.maxWait)||0,t):s,d="trailing"in n?!!n.trailing:d);function p(E){var F=i,R=r;return i=r=void 0,c=E,o=e.apply(R,F),o}function m(E){return c=E,a=setTimeout(b,t),u?p(E):o}function h(E){var F=E-l,R=E-c,T=t-F;return f?Fh(T,s-R):T}function v(E){var F=E-l,R=E-c;return l===void 0||F>=t||F<0||f&&R>=s}function b(){var E=Mn();if(v(E))return g(E);a=setTimeout(b,h(E))}function g(E){return a=void 0,d&&i?p(E):(i=r=void 0,o)}function y(){a!==void 0&&clearTimeout(a),c=0,i=l=r=a=void 0}function w(){return a===void 0?o:g(Mn())}function C(){var E=Mn(),F=v(E);if(i=arguments,r=this,l=E,F){if(a===void 0)return m(l);if(f)return a=setTimeout(b,t),p(l)}return a===void 0&&(a=setTimeout(b,t)),o}return C.cancel=y,C.flush=w,C}function er(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function $h(e){return!!e&&typeof e=="object"}function Nh(e){return typeof e=="symbol"||$h(e)&&Ih.call(e)==kh}function no(e){if(typeof e=="number")return e;if(Nh(e))return eo;if(er(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=er(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Eh,"");var n=jh.test(e);return n||Ah.test(e)?Rh(e.slice(2),n?2:8):Mh.test(e)?eo:+e}var Wh=Bh,na={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=r(s,i(a)))}return s}function i(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)t.call(s,a)&&s[a]&&(o=r(o,a));return o}function r(s,o){return o?s?s+" "+o:s+o:s}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(na);var un=na.exports,O={},Wr={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(k);function n(r){return r&&r.__esModule?r:{default:r}}var i={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(s){return t.default.createElement("ul",{style:{display:"block"}},s)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(s){return t.default.createElement("button",null,s+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null};e.default=i})(Wr);Object.defineProperty(O,"__esModule",{value:!0});O.checkSpecKeys=O.checkNavigable=O.changeSlide=O.canUseDOM=O.canGoNext=void 0;O.clamp=ia;O.extractObject=void 0;O.filterSettings=ip;O.validSettings=O.swipeStart=O.swipeMove=O.swipeEnd=O.slidesOnRight=O.slidesOnLeft=O.slideHandler=O.siblingDirection=O.safePreventDefault=O.lazyStartIndex=O.lazySlidesOnRight=O.lazySlidesOnLeft=O.lazyEndIndex=O.keyHandler=O.initializedState=O.getWidth=O.getTrackLeft=O.getTrackCSS=O.getTrackAnimateCSS=O.getTotalSlides=O.getSwipeDirection=O.getSlideCount=O.getRequiredLazySlides=O.getPreClones=O.getPostClones=O.getOnDemandLazySlides=O.getNavigableIndexes=O.getHeight=void 0;var Hh=ra(k),Uh=ra(Wr);function ra(e){return e&&e.__esModule?e:{default:e}}function oe(e){"@babel/helpers - typeof";return oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},oe(e)}function ro(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ro(Object(n),!0).forEach(function(i){Kh(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ro(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function Kh(e,t,n){return t=qh(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qh(e){var t=Gh(e,"string");return oe(t)=="symbol"?t:String(t)}function Gh(e,t){if(oe(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if(oe(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ia(e,t,n){return Math.max(t,Math.min(e,n))}var Vt=O.safePreventDefault=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()},oa=O.getOnDemandLazySlides=function(t){for(var n=[],i=sa(t),r=aa(t),s=i;s<r;s++)t.lazyLoadedList.indexOf(s)<0&&n.push(s);return n};O.getRequiredLazySlides=function(t){for(var n=[],i=sa(t),r=aa(t),s=i;s<r;s++)n.push(s);return n};var sa=O.lazyStartIndex=function(t){return t.currentSlide-Yh(t)},aa=O.lazyEndIndex=function(t){return t.currentSlide+Xh(t)},Yh=O.lazySlidesOnLeft=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0},Xh=O.lazySlidesOnRight=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow},nr=O.getWidth=function(t){return t&&t.offsetWidth||0},la=O.getHeight=function(t){return t&&t.offsetHeight||0},ca=O.getSwipeDirection=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i,r,s,o;return i=t.startX-t.curX,r=t.startY-t.curY,s=Math.atan2(r,i),o=Math.round(s*180/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0||o<=360&&o>=315?"left":o>=135&&o<=225?"right":n===!0?o>=35&&o<=135?"up":"down":"vertical"},ua=O.canGoNext=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};O.extractObject=function(t,n){var i={};return n.forEach(function(r){return i[r]=t[r]}),i};O.initializedState=function(t){var n=Hh.default.Children.count(t.children),i=t.listRef,r=Math.ceil(nr(i)),s=t.trackRef&&t.trackRef.node,o=Math.ceil(nr(s)),a;if(t.vertical)a=r;else{var l=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(l*=r/100),a=Math.ceil((r-l)/t.slidesToShow)}var c=i&&la(i.querySelector('[data-index="0"]')),u=c*t.slidesToShow,f=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(f=n-1-t.initialSlide);var d=t.lazyLoadedList||[],p=oa(N(N({},t),{},{currentSlide:f,lazyLoadedList:d}));d=d.concat(p);var m={slideCount:n,slideWidth:a,listWidth:r,trackWidth:o,currentSlide:f,slideHeight:c,listHeight:u,lazyLoadedList:d};return t.autoplaying===null&&t.autoplay&&(m.autoplaying="playing"),m};O.slideHandler=function(t){var n=t.waitForAnimate,i=t.animating,r=t.fade,s=t.infinite,o=t.index,a=t.slideCount,l=t.lazyLoad,c=t.currentSlide,u=t.centerMode,f=t.slidesToScroll,d=t.slidesToShow,p=t.useCSS,m=t.lazyLoadedList;if(n&&i)return{};var h=o,v,b,g,y={},w={},C=s?o:ia(o,0,a-1);if(r){if(!s&&(o<0||o>=a))return{};o<0?h=o+a:o>=a&&(h=o-a),l&&m.indexOf(h)<0&&(m=m.concat(h)),y={animating:!0,currentSlide:h,lazyLoadedList:m,targetSlide:h},w={animating:!1,targetSlide:h}}else v=h,h<0?(v=h+a,s?a%f!==0&&(v=a-a%f):v=0):!ua(t)&&h>c?h=v=c:u&&h>=a?(h=s?a:a-1,v=s?0:a-1):h>=a&&(v=h-a,s?a%f!==0&&(v=0):v=a-d),!s&&h+d>=a&&(v=a-d),b=Ve(N(N({},t),{},{slideIndex:h})),g=Ve(N(N({},t),{},{slideIndex:v})),s||(b===g&&(h=v),b=g),l&&(m=m.concat(oa(N(N({},t),{},{currentSlide:h})))),p?(y={animating:!0,currentSlide:v,trackStyle:fa(N(N({},t),{},{left:b})),lazyLoadedList:m,targetSlide:C},w={animating:!1,currentSlide:v,trackStyle:De(N(N({},t),{},{left:g})),swipeLeft:null,targetSlide:C}):y={currentSlide:v,trackStyle:De(N(N({},t),{},{left:g})),lazyLoadedList:m,targetSlide:C};return{state:y,nextState:w}};O.changeSlide=function(t,n){var i,r,s,o,a,l=t.slidesToScroll,c=t.slidesToShow,u=t.slideCount,f=t.currentSlide,d=t.targetSlide,p=t.lazyLoad,m=t.infinite;if(o=u%l!==0,i=o?0:(u-f)%l,n.message==="previous")s=i===0?l:c-i,a=f-s,p&&!m&&(r=f-s,a=r===-1?u-1:r),m||(a=d-l);else if(n.message==="next")s=i===0?l:i,a=f+s,p&&!m&&(a=(f+l)%u+i),m||(a=d+l);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,m){var h=tp(N(N({},t),{},{targetSlide:a}));a>n.currentSlide&&h==="left"?a=a-u:a<n.currentSlide&&h==="right"&&(a=a+u)}}else n.message==="index"&&(a=Number(n.index));return a};O.keyHandler=function(t,n,i){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?i?"next":"previous":t.keyCode===39?i?"previous":"next":""};O.swipeStart=function(t,n,i){return t.target.tagName==="IMG"&&Vt(t),!n||!i&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};O.swipeMove=function(t,n){var i=n.scrolling,r=n.animating,s=n.vertical,o=n.swipeToSlide,a=n.verticalSwiping,l=n.rtl,c=n.currentSlide,u=n.edgeFriction,f=n.edgeDragged,d=n.onEdge,p=n.swiped,m=n.swiping,h=n.slideCount,v=n.slidesToScroll,b=n.infinite,g=n.touchObject,y=n.swipeEvent,w=n.listHeight,C=n.listWidth;if(!i){if(r)return Vt(t);s&&o&&a&&Vt(t);var E,F={},R=Ve(n);g.curX=t.touches?t.touches[0].pageX:t.clientX,g.curY=t.touches?t.touches[0].pageY:t.clientY,g.swipeLength=Math.round(Math.sqrt(Math.pow(g.curX-g.startX,2)));var T=Math.round(Math.sqrt(Math.pow(g.curY-g.startY,2)));if(!a&&!m&&T>10)return{scrolling:!0};a&&(g.swipeLength=T);var P=(l?-1:1)*(g.curX>g.startX?1:-1);a&&(P=g.curY>g.startY?1:-1);var L=Math.ceil(h/v),A=ca(n.touchObject,a),D=g.swipeLength;return b||(c===0&&(A==="right"||A==="down")||c+1>=L&&(A==="left"||A==="up")||!ua(n)&&(A==="left"||A==="up"))&&(D=g.swipeLength*u,f===!1&&d&&(d(A),F.edgeDragged=!0)),!p&&y&&(y(A),F.swiped=!0),s?E=R+D*(w/C)*P:l?E=R-D*P:E=R+D*P,a&&(E=R+D*P),F=N(N({},F),{},{touchObject:g,swipeLeft:E,trackStyle:De(N(N({},n),{},{left:E}))}),Math.abs(g.curX-g.startX)<Math.abs(g.curY-g.startY)*.8||g.swipeLength>10&&(F.swiping=!0,Vt(t)),F}};O.swipeEnd=function(t,n){var i=n.dragging,r=n.swipe,s=n.touchObject,o=n.listWidth,a=n.touchThreshold,l=n.verticalSwiping,c=n.listHeight,u=n.swipeToSlide,f=n.scrolling,d=n.onSwipe,p=n.targetSlide,m=n.currentSlide,h=n.infinite;if(!i)return r&&Vt(t),{};var v=l?c/a:o/a,b=ca(s,l),g={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(f||!s.swipeLength)return g;if(s.swipeLength>v){Vt(t),d&&d(b);var y,w,C=h?m:p;switch(b){case"left":case"up":w=C+oo(n),y=u?io(n,w):w,g.currentDirection=0;break;case"right":case"down":w=C-oo(n),y=u?io(n,w):w,g.currentDirection=1;break;default:y=C}g.triggerSlideHandler=y}else{var E=Ve(n);g.trackStyle=fa(N(N({},n),{},{left:E}))}return g};var Qh=O.getNavigableIndexes=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,i=t.infinite?t.slidesToShow*-1:0,r=t.infinite?t.slidesToShow*-1:0,s=[];i<n;)s.push(i),i=r+t.slidesToScroll,r+=Math.min(t.slidesToScroll,t.slidesToShow);return s},io=O.checkNavigable=function(t,n){var i=Qh(t),r=0;if(n>i[i.length-1])n=i[i.length-1];else for(var s in i){if(n<i[s]){n=r;break}r=i[s]}return n},oo=O.getSlideCount=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var i,r=t.listRef,s=r.querySelectorAll&&r.querySelectorAll(".slick-slide")||[];if(Array.from(s).every(function(l){if(t.vertical){if(l.offsetTop+la(l)/2>t.swipeLeft*-1)return i=l,!1}else if(l.offsetLeft-n+nr(l)/2>t.swipeLeft*-1)return i=l,!1;return!0}),!i)return 0;var o=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,a=Math.abs(i.dataset.index-o)||1;return a}else return t.slidesToScroll},Hr=O.checkSpecKeys=function(t,n){return n.reduce(function(i,r){return i&&t.hasOwnProperty(r)},!0)?null:console.error("Keys Missing:",t)},De=O.getTrackCSS=function(t){Hr(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,i,r=t.slideCount+2*t.slidesToShow;t.vertical?i=r*t.slideHeight:n=Jh(t)*t.slideWidth;var s={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var o=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",l=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";s=N(N({},s),{},{WebkitTransform:o,transform:a,msTransform:l})}else t.vertical?s.top=t.left:s.left=t.left;return t.fade&&(s={opacity:1}),n&&(s.width=n),i&&(s.height=i),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?s.marginTop=t.left+"px":s.marginLeft=t.left+"px"),s},fa=O.getTrackAnimateCSS=function(t){Hr(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=De(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n},Ve=O.getTrackLeft=function(t){if(t.unslick)return 0;Hr(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,i=t.trackRef,r=t.infinite,s=t.centerMode,o=t.slideCount,a=t.slidesToShow,l=t.slidesToScroll,c=t.slideWidth,u=t.listWidth,f=t.variableWidth,d=t.slideHeight,p=t.fade,m=t.vertical,h=0,v,b,g=0;if(p||t.slideCount===1)return 0;var y=0;if(r?(y=-ke(t),o%l!==0&&n+l>o&&(y=-(n>o?a-(n-o):o%l)),s&&(y+=parseInt(a/2))):(o%l!==0&&n+l>o&&(y=a-o%l),s&&(y=parseInt(a/2))),h=y*c,g=y*d,m?v=n*d*-1+g:v=n*c*-1+h,f===!0){var w,C=i&&i.node;if(w=n+ke(t),b=C&&C.childNodes[w],v=b?b.offsetLeft*-1:0,s===!0){w=r?n+ke(t):n,b=C&&C.children[w],v=0;for(var E=0;E<w;E++)v-=C&&C.children[E]&&C.children[E].offsetWidth;v-=parseInt(t.centerPadding),v+=b&&(u-b.offsetWidth)/2}}return v},ke=O.getPreClones=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)},Zh=O.getPostClones=function(t){return t.unslick||!t.infinite?0:t.slideCount},Jh=O.getTotalSlides=function(t){return t.slideCount===1?1:ke(t)+t.slideCount+Zh(t)},tp=O.siblingDirection=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+ep(t)?"left":"right":t.targetSlide<t.currentSlide-np(t)?"right":"left"},ep=O.slidesOnRight=function(t){var n=t.slidesToShow,i=t.centerMode,r=t.rtl,s=t.centerPadding;if(i){var o=(n-1)/2+1;return parseInt(s)>0&&(o+=1),r&&n%2===0&&(o+=1),o}return r?0:n-1},np=O.slidesOnLeft=function(t){var n=t.slidesToShow,i=t.centerMode,r=t.rtl,s=t.centerPadding;if(i){var o=(n-1)/2+1;return parseInt(s)>0&&(o+=1),!r&&n%2===0&&(o+=1),o}return r?n-1:0};O.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var rp=O.validSettings=Object.keys(Uh.default);function ip(e){return rp.reduce(function(t,n){return e.hasOwnProperty(n)&&(t[n]=e[n]),t},{})}var fn={};Object.defineProperty(fn,"__esModule",{value:!0});fn.Track=void 0;var mt=da(k),jn=da(un),An=O;function da(e){return e&&e.__esModule?e:{default:e}}function Bt(e){"@babel/helpers - typeof";return Bt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bt(e)}function rr(){return rr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},rr.apply(this,arguments)}function op(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function so(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,pa(i.key),i)}}function sp(e,t,n){return t&&so(e.prototype,t),n&&so(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ap(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ir(e,t)}function ir(e,t){return ir=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},ir(e,t)}function lp(e){var t=ha();return function(){var i=Ie(e),r;if(t){var s=Ie(this).constructor;r=Reflect.construct(i,arguments,s)}else r=i.apply(this,arguments);return cp(this,r)}}function cp(e,t){if(t&&(Bt(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return or(e)}function or(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ha(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ha=function(){return!!e})()}function Ie(e){return Ie=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ie(e)}function ao(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function tt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ao(Object(n),!0).forEach(function(i){sr(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ao(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function sr(e,t,n){return t=pa(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pa(e){var t=up(e,"string");return Bt(t)=="symbol"?t:String(t)}function up(e,t){if(Bt(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if(Bt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Rn=function(t){var n,i,r,s,o;t.rtl?o=t.slideCount-1-t.index:o=t.index,r=o<0||o>=t.slideCount,t.centerMode?(s=Math.floor(t.slidesToShow/2),i=(o-t.currentSlide)%t.slideCount===0,o>t.currentSlide-s-1&&o<=t.currentSlide+s&&(n=!0)):n=t.currentSlide<=o&&o<t.currentSlide+t.slidesToShow;var a;t.targetSlide<0?a=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?a=t.targetSlide-t.slideCount:a=t.targetSlide;var l=o===a;return{"slick-slide":!0,"slick-active":n,"slick-center":i,"slick-cloned":r,"slick-current":l}},fp=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,n.zIndex=t.currentSlide===t.index?999:998,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},Ln=function(t,n){return t.key||n},dp=function(t){var n,i=[],r=[],s=[],o=mt.default.Children.count(t.children),a=(0,An.lazyStartIndex)(t),l=(0,An.lazyEndIndex)(t);return mt.default.Children.forEach(t.children,function(c,u){var f,d={message:"children",index:u,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(u)>=0?f=c:f=mt.default.createElement("div",null);var p=fp(tt(tt({},t),{},{index:u})),m=f.props.className||"",h=Rn(tt(tt({},t),{},{index:u}));if(i.push(mt.default.cloneElement(f,{key:"original"+Ln(f,u),"data-index":u,className:(0,jn.default)(h,m),tabIndex:"-1","aria-hidden":!h["slick-active"],style:tt(tt({outline:"none"},f.props.style||{}),p),onClick:function(g){f.props&&f.props.onClick&&f.props.onClick(g),t.focusOnSelect&&t.focusOnSelect(d)}})),t.infinite&&t.fade===!1){var v=o-u;v<=(0,An.getPreClones)(t)&&(n=-v,n>=a&&(f=c),h=Rn(tt(tt({},t),{},{index:n})),r.push(mt.default.cloneElement(f,{key:"precloned"+Ln(f,n),"data-index":n,tabIndex:"-1",className:(0,jn.default)(h,m),"aria-hidden":!h["slick-active"],style:tt(tt({},f.props.style||{}),p),onClick:function(g){f.props&&f.props.onClick&&f.props.onClick(g),t.focusOnSelect&&t.focusOnSelect(d)}}))),n=o+u,n<l&&(f=c),h=Rn(tt(tt({},t),{},{index:n})),s.push(mt.default.cloneElement(f,{key:"postcloned"+Ln(f,n),"data-index":n,tabIndex:"-1",className:(0,jn.default)(h,m),"aria-hidden":!h["slick-active"],style:tt(tt({},f.props.style||{}),p),onClick:function(g){f.props&&f.props.onClick&&f.props.onClick(g),t.focusOnSelect&&t.focusOnSelect(d)}}))}}),t.rtl?r.concat(i,s).reverse():r.concat(i,s)};fn.Track=function(e){ap(n,e);var t=lp(n);function n(){var i;op(this,n);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return i=t.call.apply(t,[this].concat(s)),sr(or(i),"node",null),sr(or(i),"handleRef",function(a){i.node=a}),i}return sp(n,[{key:"render",value:function(){var r=dp(this.props),s=this.props,o=s.onMouseEnter,a=s.onMouseOver,l=s.onMouseLeave,c={onMouseEnter:o,onMouseOver:a,onMouseLeave:l};return mt.default.createElement("div",rr({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},c),r)}}]),n}(mt.default.PureComponent);var dn={};function $t(e){"@babel/helpers - typeof";return $t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$t(e)}Object.defineProperty(dn,"__esModule",{value:!0});dn.Dots=void 0;var Te=ma(k),hp=ma(un),lo=O;function ma(e){return e&&e.__esModule?e:{default:e}}function co(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function pp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?co(Object(n),!0).forEach(function(i){mp(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):co(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function mp(e,t,n){return t=ga(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gp(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function uo(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,ga(i.key),i)}}function yp(e,t,n){return t&&uo(e.prototype,t),n&&uo(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ga(e){var t=vp(e,"string");return $t(t)=="symbol"?t:String(t)}function vp(e,t){if($t(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if($t(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function bp(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ar(e,t)}function ar(e,t){return ar=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},ar(e,t)}function Sp(e){var t=ya();return function(){var i=ze(e),r;if(t){var s=ze(this).constructor;r=Reflect.construct(i,arguments,s)}else r=i.apply(this,arguments);return xp(this,r)}}function xp(e,t){if(t&&($t(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return wp(e)}function wp(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ya(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ya=function(){return!!e})()}function ze(e){return ze=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},ze(e)}var Tp=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n};dn.Dots=function(e){bp(n,e);var t=Sp(n);function n(){return gp(this,n),t.apply(this,arguments)}return yp(n,[{key:"clickHandler",value:function(r,s){s.preventDefault(),this.props.clickHandler(r)}},{key:"render",value:function(){for(var r=this.props,s=r.onMouseEnter,o=r.onMouseOver,a=r.onMouseLeave,l=r.infinite,c=r.slidesToScroll,u=r.slidesToShow,f=r.slideCount,d=r.currentSlide,p=Tp({slideCount:f,slidesToScroll:c,slidesToShow:u,infinite:l}),m={onMouseEnter:s,onMouseOver:o,onMouseLeave:a},h=[],v=0;v<p;v++){var b=(v+1)*c-1,g=l?b:(0,lo.clamp)(b,0,f-1),y=g-(c-1),w=l?y:(0,lo.clamp)(y,0,f-1),C=(0,hp.default)({"slick-active":l?d>=w&&d<=g:d===w}),E={message:"dots",index:v,slidesToScroll:c,currentSlide:d},F=this.clickHandler.bind(this,E);h=h.concat(Te.default.createElement("li",{key:v,className:C},Te.default.cloneElement(this.props.customPaging(v),{onClick:F})))}return Te.default.cloneElement(this.props.appendDots(h),pp({className:this.props.dotsClass},m))}}]),n}(Te.default.PureComponent);var Nt={};function Wt(e){"@babel/helpers - typeof";return Wt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wt(e)}Object.defineProperty(Nt,"__esModule",{value:!0});Nt.PrevArrow=Nt.NextArrow=void 0;var It=ba(k),va=ba(un),Pp=O;function ba(e){return e&&e.__esModule?e:{default:e}}function Fe(){return Fe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Fe.apply(this,arguments)}function fo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function Be(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fo(Object(n),!0).forEach(function(i){Op(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fo(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function Op(e,t,n){return t=wa(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Sa(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ho(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,wa(i.key),i)}}function xa(e,t,n){return t&&ho(e.prototype,t),n&&ho(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function wa(e){var t=Cp(e,"string");return Wt(t)=="symbol"?t:String(t)}function Cp(e,t){if(Wt(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if(Wt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ta(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&lr(e,t)}function lr(e,t){return lr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},lr(e,t)}function Pa(e){var t=Oa();return function(){var i=$e(e),r;if(t){var s=$e(this).constructor;r=Reflect.construct(i,arguments,s)}else r=i.apply(this,arguments);return kp(this,r)}}function kp(e,t){if(t&&(Wt(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ep(e)}function Ep(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Oa(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Oa=function(){return!!e})()}function $e(e){return $e=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},$e(e)}Nt.PrevArrow=function(e){Ta(n,e);var t=Pa(n);function n(){return Sa(this,n),t.apply(this,arguments)}return xa(n,[{key:"clickHandler",value:function(r,s){s&&s.preventDefault(),this.props.clickHandler(r,s)}},{key:"render",value:function(){var r={"slick-arrow":!0,"slick-prev":!0},s=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(r["slick-disabled"]=!0,s=null);var o={key:"0","data-role":"none",className:(0,va.default)(r),style:{display:"block"},onClick:s},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.prevArrow?l=It.default.cloneElement(this.props.prevArrow,Be(Be({},o),a)):l=It.default.createElement("button",Fe({key:"0",type:"button"},o)," ","Previous"),l}}]),n}(It.default.PureComponent);Nt.NextArrow=function(e){Ta(n,e);var t=Pa(n);function n(){return Sa(this,n),t.apply(this,arguments)}return xa(n,[{key:"clickHandler",value:function(r,s){s&&s.preventDefault(),this.props.clickHandler(r,s)}},{key:"render",value:function(){var r={"slick-arrow":!0,"slick-next":!0},s=this.clickHandler.bind(this,{message:"next"});(0,Pp.canGoNext)(this.props)||(r["slick-disabled"]=!0,s=null);var o={key:"1","data-role":"none",className:(0,va.default)(r),style:{display:"block"},onClick:s},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.nextArrow?l=It.default.cloneElement(this.props.nextArrow,Be(Be({},o),a)):l=It.default.createElement("button",Fe({key:"1",type:"button"},o)," ","Next"),l}}]),n}(It.default.PureComponent);var Ca=function(){if(typeof Map<"u")return Map;function e(t,n){var i=-1;return t.some(function(r,s){return r[0]===n?(i=s,!0):!1}),i}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var i=e(this.__entries__,n),r=this.__entries__[i];return r&&r[1]},t.prototype.set=function(n,i){var r=e(this.__entries__,n);~r?this.__entries__[r][1]=i:this.__entries__.push([n,i])},t.prototype.delete=function(n){var i=this.__entries__,r=e(i,n);~r&&i.splice(r,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,i){i===void 0&&(i=null);for(var r=0,s=this.__entries__;r<s.length;r++){var o=s[r];n.call(i,o[1],o[0])}},t}()}(),cr=typeof window<"u"&&typeof document<"u"&&window.document===document,Ne=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),Mp=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Ne):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),jp=2;function Ap(e,t){var n=!1,i=!1,r=0;function s(){n&&(n=!1,e()),i&&a()}function o(){Mp(s)}function a(){var l=Date.now();if(n){if(l-r<jp)return;i=!0}else n=!0,i=!1,setTimeout(o,t);r=l}return a}var Rp=20,Lp=["top","right","bottom","left","width","height","size","weight"],_p=typeof MutationObserver<"u",Dp=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Ap(this.refresh.bind(this),Rp)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,i=n.indexOf(t);~i&&n.splice(i,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!cr||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),_p?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!cr||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,i=n===void 0?"":n,r=Lp.some(function(s){return!!~i.indexOf(s)});r&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),ka=function(e,t){for(var n=0,i=Object.keys(t);n<i.length;n++){var r=i[n];Object.defineProperty(e,r,{value:t[r],enumerable:!1,writable:!1,configurable:!0})}return e},Ht=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||Ne},Ea=hn(0,0,0,0);function We(e){return parseFloat(e)||0}function po(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(i,r){var s=e["border-"+r+"-width"];return i+We(s)},0)}function Vp(e){for(var t=["top","right","bottom","left"],n={},i=0,r=t;i<r.length;i++){var s=r[i],o=e["padding-"+s];n[s]=We(o)}return n}function Ip(e){var t=e.getBBox();return hn(0,0,t.width,t.height)}function zp(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return Ea;var i=Ht(e).getComputedStyle(e),r=Vp(i),s=r.left+r.right,o=r.top+r.bottom,a=We(i.width),l=We(i.height);if(i.boxSizing==="border-box"&&(Math.round(a+s)!==t&&(a-=po(i,"left","right")+s),Math.round(l+o)!==n&&(l-=po(i,"top","bottom")+o)),!Bp(e)){var c=Math.round(a+s)-t,u=Math.round(l+o)-n;Math.abs(c)!==1&&(a-=c),Math.abs(u)!==1&&(l-=u)}return hn(r.left,r.top,a,l)}var Fp=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof Ht(e).SVGGraphicsElement}:function(e){return e instanceof Ht(e).SVGElement&&typeof e.getBBox=="function"}}();function Bp(e){return e===Ht(e).document.documentElement}function $p(e){return cr?Fp(e)?Ip(e):zp(e):Ea}function Np(e){var t=e.x,n=e.y,i=e.width,r=e.height,s=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,o=Object.create(s.prototype);return ka(o,{x:t,y:n,width:i,height:r,top:n,right:t+i,bottom:r+n,left:t}),o}function hn(e,t,n,i){return{x:e,y:t,width:n,height:i}}var Wp=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=hn(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=$p(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),Hp=function(){function e(t,n){var i=Np(n);ka(this,{target:t,contentRect:i})}return e}(),Up=function(){function e(t,n,i){if(this.activeObservations_=[],this.observations_=new Ca,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=i}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Ht(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new Wp(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Ht(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(i){return new Hp(i.target,i.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Ma=typeof WeakMap<"u"?new WeakMap:new Ca,ja=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=Dp.getInstance(),i=new Up(t,n,this);Ma.set(this,i)}return e}();["observe","unobserve","disconnect"].forEach(function(e){ja.prototype[e]=function(){var t;return(t=Ma.get(this))[e].apply(t,arguments)}});var Kp=function(){return typeof Ne.ResizeObserver<"u"?Ne.ResizeObserver:ja}();const qp=Object.freeze(Object.defineProperty({__proto__:null,default:Kp},Symbol.toStringTag,{value:"Module"})),Gp=$a(qp);Object.defineProperty(cn,"__esModule",{value:!0});cn.InnerSlider=void 0;var J=ue(k),Yp=ue(ea),Xp=ue(Wh),Qp=ue(un),H=O,Zp=fn,Jp=dn,mo=Nt,tm=ue(Gp);function ue(e){return e&&e.__esModule?e:{default:e}}function Mt(e){"@babel/helpers - typeof";return Mt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mt(e)}function He(){return He=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},He.apply(this,arguments)}function em(e,t){if(e==null)return{};var n=nm(e,t),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)i=s[r],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}function nm(e,t){if(e==null)return{};var n={},i=Object.keys(e),r,s;for(s=0;s<i.length;s++)r=i[s],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function go(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?go(Object(n),!0).forEach(function(i){z(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):go(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function rm(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function yo(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,Ra(i.key),i)}}function im(e,t,n){return t&&yo(e.prototype,t),n&&yo(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function om(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ur(e,t)}function ur(e,t){return ur=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},ur(e,t)}function sm(e){var t=Aa();return function(){var i=Ue(e),r;if(t){var s=Ue(this).constructor;r=Reflect.construct(i,arguments,s)}else r=i.apply(this,arguments);return am(this,r)}}function am(e,t){if(t&&(Mt(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return I(e)}function I(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Aa(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Aa=function(){return!!e})()}function Ue(e){return Ue=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ue(e)}function z(e,t,n){return t=Ra(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ra(e){var t=lm(e,"string");return Mt(t)=="symbol"?t:String(t)}function lm(e,t){if(Mt(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if(Mt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}cn.InnerSlider=function(e){om(n,e);var t=sm(n);function n(i){var r;rm(this,n),r=t.call(this,i),z(I(r),"listRefHandler",function(o){return r.list=o}),z(I(r),"trackRefHandler",function(o){return r.track=o}),z(I(r),"adaptHeight",function(){if(r.props.adaptiveHeight&&r.list){var o=r.list.querySelector('[data-index="'.concat(r.state.currentSlide,'"]'));r.list.style.height=(0,H.getHeight)(o)+"px"}}),z(I(r),"componentDidMount",function(){if(r.props.onInit&&r.props.onInit(),r.props.lazyLoad){var o=(0,H.getOnDemandLazySlides)(M(M({},r.props),r.state));o.length>0&&(r.setState(function(l){return{lazyLoadedList:l.lazyLoadedList.concat(o)}}),r.props.onLazyLoad&&r.props.onLazyLoad(o))}var a=M({listRef:r.list,trackRef:r.track},r.props);r.updateState(a,!0,function(){r.adaptHeight(),r.props.autoplay&&r.autoPlay("update")}),r.props.lazyLoad==="progressive"&&(r.lazyLoadTimer=setInterval(r.progressiveLazyLoad,1e3)),r.ro=new tm.default(function(){r.state.animating?(r.onWindowResized(!1),r.callbackTimers.push(setTimeout(function(){return r.onWindowResized()},r.props.speed))):r.onWindowResized()}),r.ro.observe(r.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(l){l.onfocus=r.props.pauseOnFocus?r.onSlideFocus:null,l.onblur=r.props.pauseOnFocus?r.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",r.onWindowResized):window.attachEvent("onresize",r.onWindowResized)}),z(I(r),"componentWillUnmount",function(){r.animationEndCallback&&clearTimeout(r.animationEndCallback),r.lazyLoadTimer&&clearInterval(r.lazyLoadTimer),r.callbackTimers.length&&(r.callbackTimers.forEach(function(o){return clearTimeout(o)}),r.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",r.onWindowResized):window.detachEvent("onresize",r.onWindowResized),r.autoplayTimer&&clearInterval(r.autoplayTimer),r.ro.disconnect()}),z(I(r),"componentDidUpdate",function(o){if(r.checkImagesLoad(),r.props.onReInit&&r.props.onReInit(),r.props.lazyLoad){var a=(0,H.getOnDemandLazySlides)(M(M({},r.props),r.state));a.length>0&&(r.setState(function(u){return{lazyLoadedList:u.lazyLoadedList.concat(a)}}),r.props.onLazyLoad&&r.props.onLazyLoad(a))}r.adaptHeight();var l=M(M({listRef:r.list,trackRef:r.track},r.props),r.state),c=r.didPropsChange(o);c&&r.updateState(l,c,function(){r.state.currentSlide>=J.default.Children.count(r.props.children)&&r.changeSlide({message:"index",index:J.default.Children.count(r.props.children)-r.props.slidesToShow,currentSlide:r.state.currentSlide}),r.props.autoplay?r.autoPlay("update"):r.pause("paused")})}),z(I(r),"onWindowResized",function(o){r.debouncedResize&&r.debouncedResize.cancel(),r.debouncedResize=(0,Xp.default)(function(){return r.resizeWindow(o)},50),r.debouncedResize()}),z(I(r),"resizeWindow",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=!!(r.track&&r.track.node);if(a){var l=M(M({listRef:r.list,trackRef:r.track},r.props),r.state);r.updateState(l,o,function(){r.props.autoplay?r.autoPlay("update"):r.pause("paused")}),r.setState({animating:!1}),clearTimeout(r.animationEndCallback),delete r.animationEndCallback}}),z(I(r),"updateState",function(o,a,l){var c=(0,H.initializedState)(o);o=M(M(M({},o),c),{},{slideIndex:c.currentSlide});var u=(0,H.getTrackLeft)(o);o=M(M({},o),{},{left:u});var f=(0,H.getTrackCSS)(o);(a||J.default.Children.count(r.props.children)!==J.default.Children.count(o.children))&&(c.trackStyle=f),r.setState(c,l)}),z(I(r),"ssrInit",function(){if(r.props.variableWidth){var o=0,a=0,l=[],c=(0,H.getPreClones)(M(M(M({},r.props),r.state),{},{slideCount:r.props.children.length})),u=(0,H.getPostClones)(M(M(M({},r.props),r.state),{},{slideCount:r.props.children.length}));r.props.children.forEach(function(F){l.push(F.props.style.width),o+=F.props.style.width});for(var f=0;f<c;f++)a+=l[l.length-1-f],o+=l[l.length-1-f];for(var d=0;d<u;d++)o+=l[d];for(var p=0;p<r.state.currentSlide;p++)a+=l[p];var m={width:o+"px",left:-a+"px"};if(r.props.centerMode){var h="".concat(l[r.state.currentSlide],"px");m.left="calc(".concat(m.left," + (100% - ").concat(h,") / 2 ) ")}return{trackStyle:m}}var v=J.default.Children.count(r.props.children),b=M(M(M({},r.props),r.state),{},{slideCount:v}),g=(0,H.getPreClones)(b)+(0,H.getPostClones)(b)+v,y=100/r.props.slidesToShow*g,w=100/g,C=-w*((0,H.getPreClones)(b)+r.state.currentSlide)*y/100;r.props.centerMode&&(C+=(100-w*y/100)/2);var E={width:y+"%",left:C+"%"};return{slideWidth:w+"%",trackStyle:E}}),z(I(r),"checkImagesLoad",function(){var o=r.list&&r.list.querySelectorAll&&r.list.querySelectorAll(".slick-slide img")||[],a=o.length,l=0;Array.prototype.forEach.call(o,function(c){var u=function(){return++l&&l>=a&&r.onWindowResized()};if(!c.onclick)c.onclick=function(){return c.parentNode.focus()};else{var f=c.onclick;c.onclick=function(d){f(d),c.parentNode.focus()}}c.onload||(r.props.lazyLoad?c.onload=function(){r.adaptHeight(),r.callbackTimers.push(setTimeout(r.onWindowResized,r.props.speed))}:(c.onload=u,c.onerror=function(){u(),r.props.onLazyLoadError&&r.props.onLazyLoadError()}))})}),z(I(r),"progressiveLazyLoad",function(){for(var o=[],a=M(M({},r.props),r.state),l=r.state.currentSlide;l<r.state.slideCount+(0,H.getPostClones)(a);l++)if(r.state.lazyLoadedList.indexOf(l)<0){o.push(l);break}for(var c=r.state.currentSlide-1;c>=-(0,H.getPreClones)(a);c--)if(r.state.lazyLoadedList.indexOf(c)<0){o.push(c);break}o.length>0?(r.setState(function(u){return{lazyLoadedList:u.lazyLoadedList.concat(o)}}),r.props.onLazyLoad&&r.props.onLazyLoad(o)):r.lazyLoadTimer&&(clearInterval(r.lazyLoadTimer),delete r.lazyLoadTimer)}),z(I(r),"slideHandler",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=r.props,c=l.asNavFor,u=l.beforeChange,f=l.onLazyLoad,d=l.speed,p=l.afterChange,m=r.state.currentSlide,h=(0,H.slideHandler)(M(M(M({index:o},r.props),r.state),{},{trackRef:r.track,useCSS:r.props.useCSS&&!a})),v=h.state,b=h.nextState;if(v){u&&u(m,v.currentSlide);var g=v.lazyLoadedList.filter(function(y){return r.state.lazyLoadedList.indexOf(y)<0});f&&g.length>0&&f(g),!r.props.waitForAnimate&&r.animationEndCallback&&(clearTimeout(r.animationEndCallback),p&&p(m),delete r.animationEndCallback),r.setState(v,function(){c&&r.asNavForIndex!==o&&(r.asNavForIndex=o,c.innerSlider.slideHandler(o)),b&&(r.animationEndCallback=setTimeout(function(){var y=b.animating,w=em(b,["animating"]);r.setState(w,function(){r.callbackTimers.push(setTimeout(function(){return r.setState({animating:y})},10)),p&&p(v.currentSlide),delete r.animationEndCallback})},d))})}}),z(I(r),"changeSlide",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=M(M({},r.props),r.state),c=(0,H.changeSlide)(l,o);if(!(c!==0&&!c)&&(a===!0?r.slideHandler(c,a):r.slideHandler(c),r.props.autoplay&&r.autoPlay("update"),r.props.focusOnSelect)){var u=r.list.querySelectorAll(".slick-current");u[0]&&u[0].focus()}}),z(I(r),"clickHandler",function(o){r.clickable===!1&&(o.stopPropagation(),o.preventDefault()),r.clickable=!0}),z(I(r),"keyHandler",function(o){var a=(0,H.keyHandler)(o,r.props.accessibility,r.props.rtl);a!==""&&r.changeSlide({message:a})}),z(I(r),"selectHandler",function(o){r.changeSlide(o)}),z(I(r),"disableBodyScroll",function(){var o=function(l){l=l||window.event,l.preventDefault&&l.preventDefault(),l.returnValue=!1};window.ontouchmove=o}),z(I(r),"enableBodyScroll",function(){window.ontouchmove=null}),z(I(r),"swipeStart",function(o){r.props.verticalSwiping&&r.disableBodyScroll();var a=(0,H.swipeStart)(o,r.props.swipe,r.props.draggable);a!==""&&r.setState(a)}),z(I(r),"swipeMove",function(o){var a=(0,H.swipeMove)(o,M(M(M({},r.props),r.state),{},{trackRef:r.track,listRef:r.list,slideIndex:r.state.currentSlide}));a&&(a.swiping&&(r.clickable=!1),r.setState(a))}),z(I(r),"swipeEnd",function(o){var a=(0,H.swipeEnd)(o,M(M(M({},r.props),r.state),{},{trackRef:r.track,listRef:r.list,slideIndex:r.state.currentSlide}));if(a){var l=a.triggerSlideHandler;delete a.triggerSlideHandler,r.setState(a),l!==void 0&&(r.slideHandler(l),r.props.verticalSwiping&&r.enableBodyScroll())}}),z(I(r),"touchEnd",function(o){r.swipeEnd(o),r.clickable=!0}),z(I(r),"slickPrev",function(){r.callbackTimers.push(setTimeout(function(){return r.changeSlide({message:"previous"})},0))}),z(I(r),"slickNext",function(){r.callbackTimers.push(setTimeout(function(){return r.changeSlide({message:"next"})},0))}),z(I(r),"slickGoTo",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(o=Number(o),isNaN(o))return"";r.callbackTimers.push(setTimeout(function(){return r.changeSlide({message:"index",index:o,currentSlide:r.state.currentSlide},a)},0))}),z(I(r),"play",function(){var o;if(r.props.rtl)o=r.state.currentSlide-r.props.slidesToScroll;else if((0,H.canGoNext)(M(M({},r.props),r.state)))o=r.state.currentSlide+r.props.slidesToScroll;else return!1;r.slideHandler(o)}),z(I(r),"autoPlay",function(o){r.autoplayTimer&&clearInterval(r.autoplayTimer);var a=r.state.autoplaying;if(o==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(o==="leave"){if(a==="paused"||a==="focused")return}else if(o==="blur"&&(a==="paused"||a==="hovered"))return;r.autoplayTimer=setInterval(r.play,r.props.autoplaySpeed+50),r.setState({autoplaying:"playing"})}),z(I(r),"pause",function(o){r.autoplayTimer&&(clearInterval(r.autoplayTimer),r.autoplayTimer=null);var a=r.state.autoplaying;o==="paused"?r.setState({autoplaying:"paused"}):o==="focused"?(a==="hovered"||a==="playing")&&r.setState({autoplaying:"focused"}):a==="playing"&&r.setState({autoplaying:"hovered"})}),z(I(r),"onDotsOver",function(){return r.props.autoplay&&r.pause("hovered")}),z(I(r),"onDotsLeave",function(){return r.props.autoplay&&r.state.autoplaying==="hovered"&&r.autoPlay("leave")}),z(I(r),"onTrackOver",function(){return r.props.autoplay&&r.pause("hovered")}),z(I(r),"onTrackLeave",function(){return r.props.autoplay&&r.state.autoplaying==="hovered"&&r.autoPlay("leave")}),z(I(r),"onSlideFocus",function(){return r.props.autoplay&&r.pause("focused")}),z(I(r),"onSlideBlur",function(){return r.props.autoplay&&r.state.autoplaying==="focused"&&r.autoPlay("blur")}),z(I(r),"render",function(){var o=(0,Qp.default)("slick-slider",r.props.className,{"slick-vertical":r.props.vertical,"slick-initialized":!0}),a=M(M({},r.props),r.state),l=(0,H.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),c=r.props.pauseOnHover;l=M(M({},l),{},{onMouseEnter:c?r.onTrackOver:null,onMouseLeave:c?r.onTrackLeave:null,onMouseOver:c?r.onTrackOver:null,focusOnSelect:r.props.focusOnSelect&&r.clickable?r.selectHandler:null});var u;if(r.props.dots===!0&&r.state.slideCount>=r.props.slidesToShow){var f=(0,H.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),d=r.props.pauseOnDotsHover;f=M(M({},f),{},{clickHandler:r.changeSlide,onMouseEnter:d?r.onDotsLeave:null,onMouseOver:d?r.onDotsOver:null,onMouseLeave:d?r.onDotsLeave:null}),u=J.default.createElement(Jp.Dots,f)}var p,m,h=(0,H.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);h.clickHandler=r.changeSlide,r.props.arrows&&(p=J.default.createElement(mo.PrevArrow,h),m=J.default.createElement(mo.NextArrow,h));var v=null;r.props.vertical&&(v={height:r.state.listHeight});var b=null;r.props.vertical===!1?r.props.centerMode===!0&&(b={padding:"0px "+r.props.centerPadding}):r.props.centerMode===!0&&(b={padding:r.props.centerPadding+" 0px"});var g=M(M({},v),b),y=r.props.touchMove,w={className:"slick-list",style:g,onClick:r.clickHandler,onMouseDown:y?r.swipeStart:null,onMouseMove:r.state.dragging&&y?r.swipeMove:null,onMouseUp:y?r.swipeEnd:null,onMouseLeave:r.state.dragging&&y?r.swipeEnd:null,onTouchStart:y?r.swipeStart:null,onTouchMove:r.state.dragging&&y?r.swipeMove:null,onTouchEnd:y?r.touchEnd:null,onTouchCancel:r.state.dragging&&y?r.swipeEnd:null,onKeyDown:r.props.accessibility?r.keyHandler:null},C={className:o,dir:"ltr",style:r.props.style};return r.props.unslick&&(w={className:"slick-list"},C={className:o}),J.default.createElement("div",C,r.props.unslick?"":p,J.default.createElement("div",He({ref:r.listRefHandler},w),J.default.createElement(Zp.Track,He({ref:r.trackRefHandler},l),r.props.children)),r.props.unslick?"":m,r.props.unslick?"":u)}),r.list=null,r.track=null,r.state=M(M({},Yp.default),{},{currentSlide:r.props.initialSlide,targetSlide:r.props.initialSlide?r.props.initialSlide:0,slideCount:J.default.Children.count(r.props.children)}),r.callbackTimers=[],r.clickable=!0,r.debouncedResize=null;var s=r.ssrInit();return r.state=M(M({},r.state),s),r}return im(n,[{key:"didPropsChange",value:function(r){for(var s=!1,o=0,a=Object.keys(this.props);o<a.length;o++){var l=a[o];if(!r.hasOwnProperty(l)){s=!0;break}if(!(Mt(r[l])==="object"||typeof r[l]=="function"||isNaN(r[l]))&&r[l]!==this.props[l]){s=!0;break}}return s||J.default.Children.count(this.props.children)!==J.default.Children.count(r.children)}}]),n}(J.default.Component);var cm=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},um=cm,fm=um,dm=function(e){var t=/[height|width]$/;return t.test(e)},vo=function(e){var t="",n=Object.keys(e);return n.forEach(function(i,r){var s=e[i];i=fm(i),dm(i)&&typeof s=="number"&&(s=s+"px"),s===!0?t+=i:s===!1?t+="not "+i:t+="("+i+": "+s+")",r<n.length-1&&(t+=" and ")}),t},hm=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,i){t+=vo(n),i<e.length-1&&(t+=", ")}),t):vo(e)},pm=hm,_n,bo;function mm(){if(bo)return _n;bo=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},_n=e,_n}var Dn,So;function La(){if(So)return Dn;So=1;function e(i,r){var s=0,o=i.length,a;for(s;s<o&&(a=r(i[s],s),a!==!1);s++);}function t(i){return Object.prototype.toString.apply(i)==="[object Array]"}function n(i){return typeof i=="function"}return Dn={isFunction:n,isArray:t,each:e},Dn}var Vn,xo;function gm(){if(xo)return Vn;xo=1;var e=mm(),t=La().each;function n(i,r){this.query=i,this.isUnconditional=r,this.handlers=[],this.mql=window.matchMedia(i);var s=this;this.listener=function(o){s.mql=o.currentTarget||o,s.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(i){var r=new e(i);this.handlers.push(r),this.matches()&&r.on()},removeHandler:function(i){var r=this.handlers;t(r,function(s,o){if(s.equals(i))return s.destroy(),!r.splice(o,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(i){i.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var i=this.matches()?"on":"off";t(this.handlers,function(r){r[i]()})}},Vn=n,Vn}var In,wo;function ym(){if(wo)return In;wo=1;var e=gm(),t=La(),n=t.each,i=t.isFunction,r=t.isArray;function s(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return s.prototype={constructor:s,register:function(o,a,l){var c=this.queries,u=l&&this.browserIsIncapable;return c[o]||(c[o]=new e(o,u)),i(a)&&(a={match:a}),r(a)||(a=[a]),n(a,function(f){i(f)&&(f={match:f}),c[o].addHandler(f)}),this},unregister:function(o,a){var l=this.queries[o];return l&&(a?l.removeHandler(a):(l.clear(),delete this.queries[o])),this}},In=s,In}var zn,To;function vm(){if(To)return zn;To=1;var e=ym();return zn=new e,zn}(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=o(k),n=cn,i=o(pm),r=o(Wr),s=O;function o(T){return T&&T.__esModule?T:{default:T}}function a(T){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},a(T)}function l(){return l=Object.assign?Object.assign.bind():function(T){for(var P=1;P<arguments.length;P++){var L=arguments[P];for(var A in L)Object.prototype.hasOwnProperty.call(L,A)&&(T[A]=L[A])}return T},l.apply(this,arguments)}function c(T,P){var L=Object.keys(T);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(T);P&&(A=A.filter(function(D){return Object.getOwnPropertyDescriptor(T,D).enumerable})),L.push.apply(L,A)}return L}function u(T){for(var P=1;P<arguments.length;P++){var L=arguments[P]!=null?arguments[P]:{};P%2?c(Object(L),!0).forEach(function(A){C(T,A,L[A])}):Object.getOwnPropertyDescriptors?Object.defineProperties(T,Object.getOwnPropertyDescriptors(L)):c(Object(L)).forEach(function(A){Object.defineProperty(T,A,Object.getOwnPropertyDescriptor(L,A))})}return T}function f(T,P){if(!(T instanceof P))throw new TypeError("Cannot call a class as a function")}function d(T,P){for(var L=0;L<P.length;L++){var A=P[L];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(T,E(A.key),A)}}function p(T,P,L){return P&&d(T.prototype,P),L&&d(T,L),Object.defineProperty(T,"prototype",{writable:!1}),T}function m(T,P){if(typeof P!="function"&&P!==null)throw new TypeError("Super expression must either be null or a function");T.prototype=Object.create(P&&P.prototype,{constructor:{value:T,writable:!0,configurable:!0}}),Object.defineProperty(T,"prototype",{writable:!1}),P&&h(T,P)}function h(T,P){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(A,D){return A.__proto__=D,A},h(T,P)}function v(T){var P=y();return function(){var A=w(T),D;if(P){var _=w(this).constructor;D=Reflect.construct(A,arguments,_)}else D=A.apply(this,arguments);return b(this,D)}}function b(T,P){if(P&&(a(P)==="object"||typeof P=="function"))return P;if(P!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return g(T)}function g(T){if(T===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return T}function y(){try{var T=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(y=function(){return!!T})()}function w(T){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(L){return L.__proto__||Object.getPrototypeOf(L)},w(T)}function C(T,P,L){return P=E(P),P in T?Object.defineProperty(T,P,{value:L,enumerable:!0,configurable:!0,writable:!0}):T[P]=L,T}function E(T){var P=F(T,"string");return a(P)=="symbol"?P:String(P)}function F(T,P){if(a(T)!="object"||!T)return T;var L=T[Symbol.toPrimitive];if(L!==void 0){var A=L.call(T,P||"default");if(a(A)!="object")return A;throw new TypeError("@@toPrimitive must return a primitive value.")}return(P==="string"?String:Number)(T)}var R=(0,s.canUseDOM)()&&vm();e.default=function(T){m(L,T);var P=v(L);function L(A){var D;return f(this,L),D=P.call(this,A),C(g(D),"innerSliderRefHandler",function(_){return D.innerSlider=_}),C(g(D),"slickPrev",function(){return D.innerSlider.slickPrev()}),C(g(D),"slickNext",function(){return D.innerSlider.slickNext()}),C(g(D),"slickGoTo",function(_){var W=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return D.innerSlider.slickGoTo(_,W)}),C(g(D),"slickPause",function(){return D.innerSlider.pause("paused")}),C(g(D),"slickPlay",function(){return D.innerSlider.autoPlay("play")}),D.state={breakpoint:null},D._responsiveMediaHandlers=[],D}return p(L,[{key:"media",value:function(D,_){R.register(D,_),this._responsiveMediaHandlers.push({query:D,handler:_})}},{key:"componentDidMount",value:function(){var D=this;if(this.props.responsive){var _=this.props.responsive.map(function($){return $.breakpoint});_.sort(function($,et){return $-et}),_.forEach(function($,et){var st;et===0?st=(0,i.default)({minWidth:0,maxWidth:$}):st=(0,i.default)({minWidth:_[et-1]+1,maxWidth:$}),(0,s.canUseDOM)()&&D.media(st,function(){D.setState({breakpoint:$})})});var W=(0,i.default)({minWidth:_.slice(-1)[0]});(0,s.canUseDOM)()&&this.media(W,function(){D.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(D){R.unregister(D.query,D.handler)})}},{key:"render",value:function(){var D=this,_,W;this.state.breakpoint?(W=this.props.responsive.filter(function(Kt){return Kt.breakpoint===D.state.breakpoint}),_=W[0].settings==="unslick"?"unslick":u(u(u({},r.default),this.props),W[0].settings)):_=u(u({},r.default),this.props),_.centerMode&&(_.slidesToScroll>1,_.slidesToScroll=1),_.fade&&(_.slidesToShow>1,_.slidesToScroll>1,_.slidesToShow=1,_.slidesToScroll=1);var $=t.default.Children.toArray(this.props.children);$=$.filter(function(Kt){return typeof Kt=="string"?!!Kt.trim():!!Kt}),_.variableWidth&&(_.rows>1||_.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),_.variableWidth=!1);for(var et=[],st=null,dt=0;dt<$.length;dt+=_.rows*_.slidesPerRow){for(var pn=[],At=dt;At<dt+_.rows*_.slidesPerRow;At+=_.slidesPerRow){for(var Ur=[],Tt=At;Tt<At+_.slidesPerRow&&(_.variableWidth&&$[Tt].props.style&&(st=$[Tt].props.style.width),!(Tt>=$.length));Tt+=1)Ur.push(t.default.cloneElement($[Tt],{key:100*dt+10*At+Tt,tabIndex:-1,style:{width:"".concat(100/_.slidesPerRow,"%"),display:"inline-block"}}));pn.push(t.default.createElement("div",{key:10*dt+At},Ur))}_.variableWidth?et.push(t.default.createElement("div",{key:dt,style:{width:st}},pn)):et.push(t.default.createElement("div",{key:dt},pn))}if(_==="unslick"){var _a="regular slider "+(this.props.className||"");return t.default.createElement("div",{className:_a},$)}else et.length<=_.slidesToShow&&!_.infinite&&(_.unslick=!0);return t.default.createElement(n.InnerSlider,l({style:this.props.style,ref:this.innerSliderRefHandler},(0,s.filterSettings)(_)),et)}}]),L}(t.default.Component)})(ta);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(ta);function n(i){return i&&i.__esModule?i:{default:i}}e.default=t.default})(Js);const bm=Na(Js),Sm=V.div`
  background-color: ${e=>e.theme.colors.headerBgColor};
  padding: 2.4rem;
  border-radius: 1.4rem;
  margin: 0 1rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`,xm=V.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 1.2rem;
`,wm=V.span`
  font-size: 3rem;
  color: #01be96;
  opacity: 0.7;
`,Po=V.p`
  font-family: ${xt};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.colors.mainTextColorLowOp};
`,Tm=V.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50px;
    object-fit: cover;
  }
`,Pm=V.h3`
  font-family: ${xt};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.mainTextColor};
`,Om=e=>{const{name:t,position:n,img_url:i,stars:r,rentalExperience:s}=e.item;return S.jsxs(Sm,{children:[S.jsxs(xm,{children:[S.jsx(Po,{children:s}),S.jsx(wm,{children:S.jsx(Wa,{})})]}),S.jsx(Za,{stars:r}),S.jsxs(Tm,{children:[S.jsx("img",{src:i,alt:t}),S.jsxs("div",{children:[S.jsx(Pm,{children:t}),S.jsx(Po,{children:n})]})]})]})},Cm=[{name:"Samantha Williams",position:"outdoor enthusiast",img_url:"https://randomuser.me/api/portraits/women/1.jpg",stars:5,rentalExperience:"Had a fantastic time renting a camper from Camp On Wheels for a weekend getaway. The camper was well-equipped and comfortable. Will definitely rent again!"},{name:"Brian Clark",position:"nature photographer",img_url:"https://randomuser.me/api/portraits/men/52.jpg",stars:4,rentalExperience:"The camping car I rented was perfect for my photography trip. It had ample storage for my equipment and was easy to drive. Great service!"},{name:"Jessica Miller",position:"travel blogger",img_url:"https://randomuser.me/api/portraits/women/37.jpg",stars:5,rentalExperience:"Absolutely loved the camper I rented from Camp On Wheels. It was clean, spacious, and had all the amenities I needed for my road trip. Highly recommend!"},{name:"Lucas Brown",position:"adventure seeker",img_url:"https://randomuser.me/api/portraits/men/34.jpg",stars:5,rentalExperience:"Renting a camping car from Camp On Wheels was a breeze. The staff was friendly, and the camper was in excellent condition. Can't wait for my next adventure!"},{name:"Megan Smith",position:"travel agent",img_url:"https://randomuser.me/api/portraits/women/34.jpg",stars:5,rentalExperience:"Impressed with the quality of service and the variety of camping cars available at Camp On Wheels. Made planning my clients' trips much easier. Highly recommended!"}],km=V.div`
  max-width: 128rem;
  margin: 4.8rem auto;
  padding: 2.4rem;
  width: 100%;

  @media (min-width: 840px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    width: 100%;
  }

  h1 {
    padding-top: 1rem;
    text-transform: capitalize;
  }

  .slick-list,
  .slick-slider,
  .slick-track {
    padding: 0;
  }

  .slick-dots {
    text-align: left;
    margin-left: 1rem;
  }

  .slick-dots li button:before {
    content: "";
  }

  .slick-dots li button {
    width: 9px;
    height: 4px;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 0.1rem;
    margin-top: 1rem;
    transition: all 400ms ease-in-out;
    border-radius: 50px;
  }

  .slick-dots li.slick-active button {
    background: ${e=>e.theme.colors.accentColor};
    width: 15px;
  }

  .slick-dots li {
    margin: 0;
  }
`,Em=V.span`
  font-family: ${xt};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.28571;
  color: ${e=>e.theme.colors.mainTextColor};
`,Mm=V.h2`
  font-family: ${xt};
  font-weight: 500;
  font-size: 4.4rem;
  line-height: 1.09091;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainTextColor};
`,jm=V.div`
  margin-top: 2rem;
  position: relative;
`,Am=V.div`
  position: absolute;
  right: 0.7rem;
  bottom: -2.4rem;

  button {
    background-color: transparent;
    margin-left: 0.5rem;
    border: none;
    color: ${e=>e.theme.colors.accentColor};
    cursor: pointer;
    font-size: 1.4rem;
  }

  /* @media (max-width: 530px) {
    display: none;
  } */
`;var Rm={dots:!0,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,initialSlide:0,arrows:!1,responsive:[{breakpoint:990,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1,initialSlide:2}},{breakpoint:530,settings:{slidesToShow:1,slidesToScroll:1}}]};const Lm=()=>{const e=k.useRef(null);return S.jsxs(km,{children:[S.jsxs(ec,{direction:"left",children:[S.jsx(Em,{children:"TESTIMONIALS"}),S.jsx(Mm,{children:"WHAT CLIENTS SAY"})]}),S.jsxs(jm,{children:[S.jsx(bm,{ref:e,...Rm,children:Cm.map((t,n)=>S.jsx(Om,{item:t},n))}),S.jsxs(Am,{children:[S.jsx("button",{onClick:()=>e.current.slickPrev(),children:S.jsx(Ha,{})}),S.jsx("button",{onClick:()=>e.current.slickNext(),children:S.jsx(Ua,{})})]})]})]})},_m="/camp-on-wheels/assets/road-DW9O-MhS.jpg",Dm=V.section`
  margin: 4.8rem auto;
  padding: 2.4rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6.4rem;
`,Vm=V.div`
  max-width: 94rem;
  width: 100%;
  height: 100%;
  background-color: ${e=>e.theme.colors.headerBgColor};
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 4.8rem;
  padding: 2.4rem;
  border-radius: 1.6rem;
  position: relative;
  overflow: hidden;

  @media (min-width: 720px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
  }
`,Im=V.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  z-index: 5;

  @media (min-width: 720px) {
    gap: 4.2rem;
  }
`,zm=V.h3`
  font-family: ${zt};
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.mainTextColor};
`,Fm=V.p`
  width: 100%;
  font-family: ${zt};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.secondaryTextColor};

  @media (min-width: 600px) {
    width: 75%;
    color: ${e=>e.theme.colors.mainTextColor};
  }
  @media (min-width: 720px) {
    width: 100%;
    color: ${e=>e.theme.colors.secondaryTextColor};
  }
`,Bm=V.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 20;

  gap: 1.2rem;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 0;
  }
`,$m=V.input`
  width: 100%;
  background: none;
  outline: none;
  border: none;
  background-color: ${e=>e.theme.colors.mainBgColor};
  border-radius: 1rem;
  padding: 18px;
  height: 56px;
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: ${zt};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;

  @media (min-width: 480px) {
    width: 100%;
    border-radius: 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &::placeholder {
    font-family: ${zt};
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${e=>e.theme.colors.inputTextColor};
  }
`,Nm=V.button`
  align-self: flex-end;
  background: none;
  outline: none;
  border: none;
  background-color: ${e=>e.theme.colors.accentColor};
  border-radius: 1rem;
  width: 100%;
  height: 56px;
  font-family: ${zt};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: ${e=>e.theme.colors.white};
  transition: var(--primary-transition);

  @media (min-width: 326px) {
    width: 160px;
  }

  @media (min-width: 480px) {
    border-radius: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &:hover {
    background-color: ${e=>e.theme.colors.accentColorHover};
    cursor: pointer;
  }
`,Wm=V.div`
  position: absolute;
  /* top: 55%; */
  bottom: -55%;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: url(${_m});
  background-size: cover;
  background-position: bottom 15rem center;
  background-repeat: no-repeat;

  @media (min-width: 480px) {
    bottom: -60%;
    background-position: bottom 12rem center;
  }

  @media (min-width: 600px) {
    top: 0;
    left: 33%;
    background-position: bottom 20% center;
    background-size: cover;
  }
`;var Hm={VITE_EMAIL_ID:"service_9sd1qyt",VITE_EMAIL_TEMPLATE_ID:"template_gbgmy3a",VITE_EMAIL_API_KEY:"W3hCufqEP-eqyffFb",BASE_URL:"/camp-on-wheels/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_EMAIL_ID:Um,VITE_EMAIL_TEMPLATE_ID:Km,VITE_EMAIL_API_KEY:qm}=Hm;function Gm(){const e=k.useRef(),t=async n=>{n.preventDefault();const i=n.target.email.value.trim(),r=el.test(i);if(i.length===0){de.warning("Email field cannot be empty. Please enter your email address.",he);return}if(!r){de.warning("The email address you entered is not valid. Please check and try again.",he);return}try{await Ja(i),await tl.sendForm(Um,Km,e.current,{publicKey:qm}),de.success("Successfully subscribed! We'll keep you updated with regular deals and fresh trip ideas. Thank you!",he),n.target.email.value=""}catch{de.error("Error subscribing. Please try again later.",he)}};return S.jsx(Dm,{children:S.jsxs(Vm,{children:[S.jsxs(Im,{children:[S.jsxs(zm,{children:["MORE TRIPS.",S.jsx("br",{})," EXCLUSIVE DEALS."]}),S.jsx(Fm,{children:"Receive fresh trip ideas, curated itineraries, and exclusive deals delivered to your inbox every month."})]}),S.jsxs(Bm,{ref:e,onSubmit:t,children:[S.jsx($m,{type:"text",name:"email",placeholder:"Enter your Email"}),S.jsx(Nm,{type:"submit",children:"Subscribe"})]}),S.jsx(Wm,{})]})})}const Ym=V.section`
  margin: 4.8rem auto;
  padding: 2.4rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4.8rem;

  @media (min-width: 385px) {
    flex-direction: row;
    gap: 1.2rem;
    flex-wrap: wrap;
  }

  @media (min-width: 802px) {
    flex-direction: row;
    gap: 4.8rem;
    flex-wrap: wrap;
  }

  @media (min-width: 910px) {
    flex-direction: row;
    gap: 0;
    flex-wrap: nowrap;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 4.8rem;
  }
`,Gt=V.img`
  width: 18rem;
  height: auto;
  object-fit: cover;

  @media (min-width: 1440px) {
    width: 22rem;
  }
`;function Xm(){return S.jsxs(Ym,{children:[S.jsx(Gt,{src:"images/sponsor2.png",alt:"sponsor1",width:"20rem",height:"20rem"}),S.jsx(Gt,{src:"images/sponsor.png",alt:"sponsor1",width:"20rem",height:"20rem"}),S.jsx(Gt,{src:"images/sponsor1.png",alt:"sponsor1",width:"20rem",height:"20rem"}),S.jsx(Gt,{src:"images/sponsor3.png",alt:"sponsor1",width:"20rem",height:"20rem"}),S.jsx(Gt,{src:"images/sponsor4.png",alt:"sponsor1",width:"20rem",height:"20rem"})]})}const Qm=V.div`
  min-height: calc(100vh - 6rem);
  height: 100%;
  margin: 0 auto;
`,Zm=V.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 6rem);
  background: url(${nl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  z-index: 1;
  padding: 1.2rem 0 1.2rem 1.2rem;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: end;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5) 0);
    opacity: 0.7;
    z-index: -5;
  }

  @media (min-width: 375px) {
    padding: 1.2rem;
  }

  @media (min-width: 620px) {
    align-items: end;
  }

  @media (min-width: 768px) {
    padding: 3.2rem;
    overflow: visible;
    justify-content: end;
  }

  @media (min-width: 1440px) {
    padding: 3.2rem;

    align-items: start;
    justify-content: center;
  }
`,Jm=V.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 2.4rem;
  margin-bottom: 4.8rem;
  width: 60rem;
  height: 100%;

  background-color: ${e=>e.theme.colors.heroBgLowOp};
  border-radius: 1.2rem;
  backdrop-filter: blur(5px);

  @media (min-width: 768px) {
    margin-bottom: 0;
    /* width: 82.6rem; */
  }

  @media (min-width: 1440px) {
    width: 82.6rem;
  }
`,t0=V.h1`
  font-family: ${xt};
  font-weight: 400;
  font-size: 18px;
  line-height: 1;
  color: ${e=>e.theme.colors.lightWhiteColor};

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 1440px) {
    font-size: 48px;
  }
`,e0=V.span`
  font-size: 24px;
  font-weight: 500;
  color: ${e=>e.theme.colors.accentColor};

  position: relative;
  z-index: 200;

  @media (min-width: 768px) {
    font-size: 36px;
  }

  @media (min-width: 1440px) {
    font-size: 54px;
  }
`,n0=V.p`
  color: ${e=>e.theme.colors.lightWhiteColor};
  font-family: ${xt};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.33333;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`,r0=V(Ka)`
  background: none;
  outline: none;
  border: none;
  padding: 1.2rem 3.2rem;
  border-radius: 1.2rem;
  color: ${e=>e.theme.colors.white};
  background-color: ${e=>e.theme.colors.accentColor};
  transition: all var(--primary-transition);

  &:hover {
    background-color: ${e=>e.theme.colors.accentColorHover};
  }
`;function c0(){return S.jsxs(S.Fragment,{children:[S.jsx(qa,{children:S.jsxs(Ga,{children:[S.jsx("title",{children:"Camp On Wheels - Home Page"}),S.jsx("meta",{name:"description",content:"Unlock boundless journeys with Camp On Wheels. Rent a camping car in style, comfort, and confidence. Explore extraordinary adventures with our premium car rental services."}),S.jsx("meta",{name:"keywords",content:"camping car rental, adventure travel, stylish cars, comfortable journeys, Camp On Wheels, premium rental services"})]})}),S.jsxs(Qm,{children:[S.jsx(Zm,{children:S.jsx(Zs.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:3},children:S.jsxs(Jm,{children:[S.jsxs(t0,{children:["Discover the Freedom of Mobile Exploration with"," ",S.jsx(e0,{children:"Camp On Wheels"})]}),S.jsx(n0,{children:"Embark on unforgettable journeys with CampOnWheels, where every road leads to new adventures. With our fleet of comfortable and fully-equipped camping cars, you can roam wherever your wanderlust takes you, and unwind amidst nature's embrace. Start your journey today and experience the thrill of the open road, without sacrificing the comforts of home."}),S.jsx("div",{style:{textAlign:"end"},children:S.jsx(r0,{to:"catalog",children:"View our Catalog"})})]})})}),S.jsx(Oh,{}),S.jsx(Gm,{}),S.jsx(Lm,{}),S.jsx(Xm,{})]})]})}export{c0 as default};
