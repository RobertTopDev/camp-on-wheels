import{G as P,u as t,i as C,p as d,m as D,r as s,n as M,j as o,o as G,q as K,T as F,s as z,t as N,v as Z,w as J,x as H,H as U,l as Q,y as X}from"./index-Bd7lNlqc.js";import{M as Y,C as E,v as q}from"./v4-BDDteeN-.js";import{d as _}from"./emailRegex-C-lkDcqn.js";const ee=e=>e.cars.cars.items,oe=e=>e.cars.filter,I=["Chicago, IL","Aurora, IL","Rosemont, IL","Schaumburg, IL","Joliet, IL","Rockford, IL","Oak Park, IL","Bolingbrook, IL","Orland Park, IL","Skokie, IL","Peoria, IL"];function te(e){return P({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,64H147.31l34.35-34.34a8,8,0,1,0-11.32-11.32L128,60.69,85.66,18.34A8,8,0,0,0,74.34,29.66L108.69,64H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64Zm0,136H40V80H216V200Z"},child:[]}]})(e)}const re=t.form`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  width: 362px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
    gap: 6.4rem;
  }
`,ne=t.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`,O=t.div`
  background-color: ${e=>e.theme.colors.filtersLine};
  width: 100%;
  height: 2px;
  margin: 1rem 0 1rem;
`,ie=t.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;
`;t.button`
  background: none;
  border: none;
  outline: none;
  border-radius: 1.4rem;
  padding: 1.4rem 4.4rem;
  background-color: ${e=>e.theme.colors.accentColor};
  color: ${e=>e.theme.colors.white};
  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    background-color: ${e=>e.theme.colors.accentColorHover};
  }

  @media (min-width: 768px) {
    padding: 1.4rem 3.2rem;
  }

  @media (min-width: 840px) {
    padding: 1.4rem 4.4rem;
  }
`;const le=t.button`
  border: none;
  outline: none;
  background: none;
  border-radius: 200px;
  padding: 16px 60px;
  width: 173px;
  height: 56px;

  font-family: ${C};
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
`,ae=t.div`
  position: relative;
  border: none;
  outline: none;
  background: none;
  border-radius: 14px;
  background-color: ${e=>e.theme.colors.inputBgColor};
  padding: 1.4rem 1.8rem;
  height: 4.8rem;
  width: 100%;
  width: 360px;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  font-family: ${d};
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
`,se=t.div`
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
`,ce=t.span`
  font-family: ${d};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.mainTextColorVeryLowOp};
  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    color: ${e=>e.theme.colors.mainTextColor};
  }
`,de=t.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 0.8rem;
  width: 362px;
`,he=t.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 0.8rem;
  width: 362px;
`,A=t.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`,V=t.h3`
  font-family: ${C};
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${e=>e.theme.colors.mainTextColor};
`,me=t.span`
  font-family: ${C};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.secondaryTextColor};
`,h=t.span`
  font-family: ${C};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: ${e=>e.theme.colors.mainTextColor};
`,m=t.span`
  font-size: 3.2rem;
  color: ${e=>e.theme.colors.mainTextColor};
  pointer-events: none;
`,p=t.div`
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
`,pe=t.label`
  font-family: ${d};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.colors.mainTextColorLowOp};
`;t.div`
  display: flex;
  max-width: 32rem;
`;t.input`
  border: none;
  outline: none;
  background: none;
  width: 100%;
  height: 4.8rem;
  border-radius: 0 14px 14px 0;
  background-color: ${e=>e.theme.colors.inputBgColor};
  padding: 1.4rem 2.4rem;

  font-family: ${d};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.11111;
  color: ${e=>e.theme.colors.black};

  transition: all var(--primary-transition);

  &:hover {
    background-color: ${e=>e.theme.colors.inputBgColorHover};
  }

  &::placeholder {
    font-family: ${d};
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.11111;
    color: ${e=>e.theme.colors.black};
  }

  &:focus {
    outline: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  @media (min-width: 1440px) {
    width: 16rem;
  }
`;t.input`
  border: none;
  outline: none;
  background: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  border-radius: 14px 0 0 14px;
  width: 100%;
  height: 4.8rem;
  background-color: ${e=>e.theme.colors.inputBgColor};
  padding: 1.4rem 2.4rem;

  font-family: ${d};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.11111;
  color: ${e=>e.theme.colors.black};

  transition: all var(--primary-transition);

  &:hover {
    background-color: ${e=>e.theme.colors.inputBgColorHover};
  }

  &::placeholder {
    font-family: ${d};
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.11111;
    color: ${e=>e.theme.colors.black};
  }

  &:focus {
    outline: none;
    box-shadow: ${e=>e.theme.colors.boxFocus} 0px 7px 29px 0px;
  }

  @media (min-width: 1440px) {
    width: 16rem;
  }
`;t.p`
  font-size: 1.6rem;
  position: absolute;
  bottom: 0;
  left: 0;
`;const xe=t(D)`
  font-size: 1.8rem;
  color: ${e=>e.theme.colors.mainTextColor};

  @media (min-width: 768px) {
    right: 0;
  }

  @media (min-width: 1440px) {
    right: 1.2rem;
  }
`,ue=t.button`
  border: none;
  outline: none;
  background: none;
  border-radius: 200px;
  padding: 16px 60px;
  width: 173px;
  height: 56px;

  font-family: ${C};
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
`,ge=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;function fe({handlePage:e,setDisplayedCars:i,setFilteredSearch:g}){const[L,x]=s.useState(""),[c,w]=s.useState(""),[f,y]=s.useState(""),v=s.useRef(null),[u,$]=s.useState(!1),l=M(),k=r=>{const b=r.target.innerText;w(b)},B=r=>{const b=r.target.innerText;y(b)},S=r=>{x(r),$(!1)},T=async()=>{x(""),w(""),y("");const r=await l(z());i(r.payload),l(x("")),l(w("")),l(y("")),g(!1)},n=()=>{T(),e()};async function a(r){r.preventDefault();const j={location:v.current.innerText,selectedEquipment:c,selectedType:f},R=await l(z());i(R.payload),g(!0),l(N(j.location)),l(Z(j.selectedEquipment)),l(J(j.selectedType)),e(),n()}return o.jsxs(re,{onSubmit:a,children:[o.jsxs(ne,{children:[o.jsxs(ie,{children:[o.jsx(pe,{htmlFor:"location",children:"Location"}),o.jsxs(ae,{ref:v,onClick:()=>$(!u),children:[o.jsx(xe,{}),o.jsx("span",{children:L||"Location"})]}),u&&o.jsx(se,{children:I==null?void 0:I.map(r=>o.jsx(ce,{onClick:()=>S(r),children:r},r))})]}),o.jsxs(A,{children:[o.jsx(me,{children:"Filters"}),o.jsx(V,{children:"Vehicle equipment"}),o.jsx(O,{}),o.jsxs(de,{onClick:k,children:[o.jsxs(p,{$active:c==="AC",children:[o.jsx(m,{children:o.jsx(Y,{})}),o.jsx(h,{children:"AC"})]}),o.jsxs(p,{$active:c==="Automatic",children:[o.jsx(m,{children:o.jsx(G,{})}),o.jsx(h,{children:"Automatic"})]}),o.jsxs(p,{$active:c==="Kitchen",children:[o.jsx(m,{children:o.jsx(K,{})}),o.jsx(h,{children:"Kitchen"})]}),o.jsxs(p,{$active:c==="TV",children:[o.jsx(m,{children:o.jsx(te,{})}),o.jsx(h,{children:"TV"})]}),o.jsxs(p,{$active:c==="Shower/WC",children:[o.jsx(m,{children:o.jsx(_,{})}),o.jsx(h,{children:"Shower/WC"})]})]})]}),o.jsxs(A,{children:[o.jsx(V,{children:"Vehicle type"}),o.jsx(O,{}),o.jsxs(he,{onClick:B,children:[o.jsxs(p,{$active:f==="Van",children:[o.jsx(m,{children:o.jsx(F,{})}),o.jsx(h,{children:"Van"})]}),o.jsxs(p,{$active:f==="Fully Integrated",children:[o.jsx(m,{children:o.jsx(F,{})}),o.jsx(h,{children:"Fully Integrated"})]}),o.jsxs(p,{$active:f==="Alcove",children:[o.jsx(m,{children:o.jsx(F,{})}),o.jsx(h,{children:"Alcove"})]})]})]})]}),o.jsxs(ge,{children:[o.jsx(ue,{type:"submit",children:"Search"}),o.jsx(le,{onClick:n,type:"button",children:"Reset"})]})]})}const be=t.button`
  border: none;
  outline: none;
  background: none;
  border: 1px solid ${e=>e.theme.colors.inputBgColor};
  border-radius: 20rem;
  padding: 1.6rem 3.2rem;
  width: 145px;
  height: 56px;

  font-family: ${d};
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
`;function we({onLoadMoreClick:e}){return o.jsx(be,{onClick:e,children:"Load More"})}const ye=t.div`
  display: flex;
  gap: 6.4rem;
  align-items: start;
  padding: 10rem 6.4rem;

  /* @media (min-width: 1440px) {
    padding: 9.6rem 12.8rem;
  } */
`,je=t.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
`,Ce=t.ul`
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
`,ve=t.li`
  font-family: ${d};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.mainTextColor};
`;function W(e){return e.toLowerCase().split(" ").map((i,g)=>g===0?i:i.charAt(0).toUpperCase()+i.slice(1)).join("")}function Le(){const e=M(),i=H(ee),[g,L]=s.useState(!1),[x,c]=s.useState(1),[w,f]=s.useState(!0),[y,v]=s.useState([]),u=H(oe);function $(){c(a=>a+1)}function l(){c(1)}const k=4,S=Math.ceil(20/k);s.useEffect(()=>{async function a(){try{f(x<S),await e(X(x)).unwrap()}catch(r){console.log(r.message)}}a()},[e,x,S]);function T(){return y.filter(r=>{const b=!u.location||r.location===u.location,j=!W(u.type)||r.form===W(u.type);return b&&j})}const n=T();return console.log(n),o.jsxs(o.Fragment,{children:[o.jsx(U,{children:o.jsxs(Q,{children:[o.jsx("title",{children:"Cruise Wheels - Explore the Catalog"}),o.jsx("meta",{name:"description",content:"Browse through our diverse catalog of stylish and comfortable cars at Cruise Wheels. Find the perfect vehicle for your next adventure and experience the joy of premium car rentals."}),o.jsx("meta",{name:"keywords",content:"car catalog, car rental, stylish cars, comfortable journeys, Cruise Wheels, premium rental services"})]})}),o.jsxs(ye,{children:[o.jsx(fe,{handlePage:l,setDisplayedCars:v,setFilteredSearch:L}),o.jsxs(je,{children:[o.jsx(Ce,{children:n&&(n==null?void 0:n.length)===0&&g?o.jsx(ve,{children:"No matching cars found"}):(n==null?void 0:n.length)>0?n==null?void 0:n.map(a=>o.jsx(E,{items:a},q())):i==null?void 0:i.map(a=>o.jsx(E,{items:a},q()))}),i.length>=k&&w&&o.jsx(we,{onLoadMoreClick:$})]})]})]})}export{Le as default};
