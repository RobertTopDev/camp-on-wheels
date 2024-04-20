import{G as P,u as o,i as b,p as C,m as D,r as a,n as M,j as t,o as G,q as K,T as F,s as q,t as N,v as Z,w as J,x as B,H as U,l as Q,y as X}from"./index-D1LLFa6S.js";import{M as Y,C as O,v as z}from"./v4-BcKsgxrL.js";import{d as _}from"./emailRegex-CUeL72y3.js";const ee=e=>e.cars.cars.items,te=e=>e.cars.filter,I=["Chicago, IL","Aurora, IL","Rosemont, IL","Schaumburg, IL","Joliet, IL","Rockford, IL","Oak Park, IL","Bolingbrook, IL","Orland Park, IL","Skokie, IL","Peoria, IL"];function oe(e){return P({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,64H147.31l34.35-34.34a8,8,0,1,0-11.32-11.32L128,60.69,85.66,18.34A8,8,0,0,0,74.34,29.66L108.69,64H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64Zm0,136H40V80H216V200Z"},child:[]}]})(e)}const re=o.form`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  margin: 0 auto;
  max-width: 362px;
  width: 100%;

  @media (min-width: 448px) {
    width: 362px;
  }

  @media (min-width: 1440px) {
    gap: 6.4rem;
  }
`,ne=o.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`,A=o.div`
  background-color: ${e=>e.theme.colors.filtersLine};
  width: 100%;
  height: 2px;
  margin: 1rem 0 1rem;
`,ie=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;
`,se=o.button`
  border: none;
  outline: none;
  background: none;
  border-radius: 200px;
  padding: 16px 60px;
  width: 173px;
  height: 56px;

  font-family: ${b};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: ${e=>e.theme.colors.mainTextColor};
  text-decoration: underline;
  transition: var(--primary-transition);
  border: 0.1px solid transparent;

  /* background-color: ${e=>e.theme.colors.accentColor}; */

  &:hover {
    /* background-color: ${e=>e.theme.colors.accentColorHover}; */
    cursor: pointer;
    border: 0.1px solid ${e=>e.theme.colors.accentColorHover};
  }
`,le=o.div`
  position: relative;
  border: none;
  outline: none;
  background: none;
  border-radius: 14px;
  background-color: ${e=>e.theme.colors.inputBgColor};
  padding: 1.4rem 1.8rem;
  height: 4.8rem;
  width: 100%;
  max-width: 360px;
  /* width: 360px; */

  display: flex;
  align-items: center;
  gap: 0.8rem;

  font-family: ${C};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.11111;
  color: ${e=>e.theme.colors.mainTextColor};
  transition: all var(--primary-transition);

  &:hover {
    background-color: ${e=>e.theme.colors.inputBgColorHover};
  }

  /* &:focus {
    outline: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  } */

  /* @media (min-width: 768px) {
    width: 14rem;
  }

  @media (min-width: 840px) {
    width: 16rem;
  }

  @media (min-width: 1000px) {
    width: 22.4rem;
  } */
`,ae=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 27.2rem;
  position: absolute;
  top: 100%;
  left: 0;
  box-shadow: 0 4px 36px 0 rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: 1.4rem;
  overflow-y: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar-thumb {
    background-color: ${e=>e.theme.colors.mainTextColorVeryLowOp};
    border-radius: 8px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: transparent;
  }

  padding: 1.4rem 1.8rem;
  background-color: ${e=>e.theme.colors.headerBgColor};

  z-index: 5;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,ce=o.span`
  font-family: ${C};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.mainTextColorVeryLowOp};
  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    color: ${e=>e.theme.colors.mainTextColor};
  }
`,de=o.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 0.8rem;
  max-width: 362px;
  width: 100%;
  justify-content: center;

  @media (min-width: 410px) {
    justify-content: start;
  }

  @media (min-width: 768px) {
    width: 362px;
  }
`,me=o.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 0.8rem;
  max-width: 362px;
  width: 100%;
  justify-content: center;

  @media (min-width: 410px) {
    justify-content: start;
  }
`,H=o.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`,V=o.h3`
  font-family: ${b};
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${e=>e.theme.colors.mainTextColor};
`,pe=o.span`
  font-family: ${b};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.secondaryTextColor};
`,d=o.span`
  font-family: ${b};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: ${e=>e.theme.colors.mainTextColor};
`,m=o.span`
  font-size: 3.2rem;
  color: ${e=>e.theme.colors.mainTextColor};
  pointer-events: none;
`,p=o.div`
  border: 1px solid
    ${e=>e!=null&&e.$active?e.theme.colors.accentColor:e.theme.colors.borderFilterItem};
  border-radius: 10px;
  padding: 17px 18px;
  width: 114px;
  height: 95px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  transition: all var(--primary-transition);

  &:hover {
    border: 1px solid ${e=>e.theme.colors.accentColor};
    cursor: pointer;
  }
`,he=o.label`
  font-family: ${C};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.colors.mainTextColorLowOp};
`;o.p`
  font-size: 1.6rem;
  position: absolute;
  bottom: 0;
  left: 0;
`;const xe=o(D)`
  font-size: 1.8rem;
  color: ${e=>e.theme.colors.mainTextColor};

  @media (min-width: 768px) {
    right: 0;
  }

  @media (min-width: 1440px) {
    right: 1.2rem;
  }
`,ue=o.button`
  border: none;
  outline: none;
  background: none;
  border-radius: 200px;
  padding: 16px 60px;
  width: 173px;
  height: 56px;

  font-family: ${b};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: ${e=>e.theme.colors.white};
  transition: var(--primary-transition);

  background-color: ${e=>e.theme.colors.accentColor};

  &:hover {
    background-color: ${e=>e.theme.colors.accentColorHover};
    cursor: pointer;
  }
`,fe=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 354px) {
    flex-direction: row;
  }
`;function ge({handlePage:e,setDisplayedCars:i,setFilteredSearch:u}){const[L,h]=a.useState(""),[c,j]=a.useState(""),[f,w]=a.useState(""),v=a.useRef(null),[x,$]=a.useState(!1),s=M(),S=r=>{const g=r.target.innerText;j(g)},E=r=>{const g=r.target.innerText;w(g)},k=r=>{h(r),$(!1)},T=async()=>{h(""),j(""),w("");const r=await s(q());i(r.payload),s(h("")),s(j("")),s(w("")),u(!1)},n=()=>{T(),e()};async function l(r){r.preventDefault();const y={location:v.current.innerText,selectedEquipment:c,selectedType:f},R=await s(q());i(R.payload),u(!0),s(N(y.location)),s(Z(y.selectedEquipment)),s(J(y.selectedType)),e(),n()}return t.jsxs(re,{onSubmit:l,children:[t.jsxs(ne,{children:[t.jsxs(ie,{children:[t.jsx(he,{htmlFor:"location",children:"Location"}),t.jsxs(le,{ref:v,onClick:()=>$(!x),children:[t.jsx(xe,{}),t.jsx("span",{children:L||"Location"})]}),x&&t.jsx(ae,{children:I==null?void 0:I.map(r=>t.jsx(ce,{onClick:()=>k(r),children:r},r))})]}),t.jsxs(H,{children:[t.jsx(pe,{children:"Filters"}),t.jsx(V,{children:"Vehicle equipment"}),t.jsx(A,{}),t.jsxs(de,{onClick:S,children:[t.jsxs(p,{$active:c==="AC",children:[t.jsx(m,{children:t.jsx(Y,{})}),t.jsx(d,{children:"AC"})]}),t.jsxs(p,{$active:c==="Automatic",children:[t.jsx(m,{children:t.jsx(G,{})}),t.jsx(d,{children:"Automatic"})]}),t.jsxs(p,{$active:c==="Kitchen",children:[t.jsx(m,{children:t.jsx(K,{})}),t.jsx(d,{children:"Kitchen"})]}),t.jsxs(p,{$active:c==="TV",children:[t.jsx(m,{children:t.jsx(oe,{})}),t.jsx(d,{children:"TV"})]}),t.jsxs(p,{$active:c==="Shower/WC",children:[t.jsx(m,{children:t.jsx(_,{})}),t.jsx(d,{children:"Shower/WC"})]})]})]}),t.jsxs(H,{children:[t.jsx(V,{children:"Vehicle type"}),t.jsx(A,{}),t.jsxs(me,{onClick:E,children:[t.jsxs(p,{$active:f==="Van",children:[t.jsx(m,{children:t.jsx(F,{})}),t.jsx(d,{children:"Van"})]}),t.jsxs(p,{$active:f==="Fully Integrated",children:[t.jsx(m,{children:t.jsx(F,{})}),t.jsx(d,{children:"Fully Integrated"})]}),t.jsxs(p,{$active:f==="Alcove",children:[t.jsx(m,{children:t.jsx(F,{})}),t.jsx(d,{children:"Alcove"})]})]})]})]}),t.jsxs(fe,{children:[t.jsx(ue,{type:"submit",children:"Search"}),t.jsx(se,{onClick:n,type:"button",children:"Reset"})]})]})}const je=o.button`
  border: none;
  outline: none;
  background: none;
  border: 1px solid ${e=>e.theme.colors.inputBgColor};
  border-radius: 20rem;
  padding: 1.6rem 3.2rem;
  width: 145px;
  height: 56px;

  font-family: ${C};
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: ${e=>e.theme.colors.mainTextColor};
  background-color: ${e=>e.theme.colors.headerBgColor};

  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    border: 1px solid ${e=>e.theme.colors.accentColorHover};
  }
`;function we({onLoadMoreClick:e}){return t.jsx(je,{onClick:e,children:"Load More"})}const ye=o.div`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;
  align-items: start;
  padding: 6.4rem 2.4rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 3.2rem;
    /* padding: 10rem 6.4rem; */
  }
`,be=o.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
`,Ce=o.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  height: 100%;
  width: 100%;

  position: relative;

  /* @media (min-width: 520px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    justify-items: center;
    gap: 2.4rem;
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 5rem;
    column-gap: 2.4rem;
  } */
`,ve=o.li`
  font-family: ${C};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.mainTextColor};
`;function W(e){return e.toLowerCase().split(" ").map((i,u)=>u===0?i:i.charAt(0).toUpperCase()+i.slice(1)).join("")}function Le(){const e=M(),i=B(ee),[u,L]=a.useState(!1),[h,c]=a.useState(1),[j,f]=a.useState(!0),[w,v]=a.useState([]),x=B(te);function $(){c(l=>l+1)}function s(){c(1)}const S=4,k=Math.ceil(20/S);a.useEffect(()=>{async function l(){try{f(h<k),await e(X(h)).unwrap()}catch(r){console.log(r.message)}}l()},[e,h,k]);function T(){return w.filter(r=>{const g=!x.location||r.location===x.location,y=!W(x.type)||r.form===W(x.type);return g&&y})}const n=T();return t.jsxs(t.Fragment,{children:[t.jsx(U,{children:t.jsxs(Q,{children:[t.jsx("title",{children:"Cruise Wheels - Explore the Catalog"}),t.jsx("meta",{name:"description",content:"Browse through our diverse catalog of stylish and comfortable cars at Cruise Wheels. Find the perfect vehicle for your next adventure and experience the joy of premium car rentals."}),t.jsx("meta",{name:"keywords",content:"car catalog, car rental, stylish cars, comfortable journeys, Cruise Wheels, premium rental services"})]})}),t.jsxs(ye,{children:[t.jsx(ge,{handlePage:s,setDisplayedCars:v,setFilteredSearch:L}),t.jsxs(be,{children:[t.jsx(Ce,{children:n&&(n==null?void 0:n.length)===0&&u?t.jsx(ve,{children:"No matching cars found"}):(n==null?void 0:n.length)>0?n==null?void 0:n.map(l=>t.jsx(O,{items:l},z())):i==null?void 0:i.map(l=>t.jsx(O,{items:l},z()))}),i.length>=S&&j&&t.jsx(we,{onLoadMoreClick:$})]})]})]})}export{Le as default};
