import{G as D,u as o,i as j,p as w,m as G,r as a,n as P,j as t,o as K,q as Z,T as L,s as O,t as z,v as A,w as E,x as q,H as N,l as J,y as U}from"./index-B9ZeogXV.js";import{M as Q,C as B,v as W}from"./v4-xcvLfIh9.js";import{d as X}from"./emailRegex-BafwMLXT.js";const Y=e=>e.cars.cars.items,_=e=>e.cars.filter,T=["Chicago, IL","Aurora, IL","Rosemont, IL","Schaumburg, IL","Joliet, IL","Rockford, IL","Oak Park, IL","Bolingbrook, IL","Orland Park, IL","Skokie, IL","Peoria, IL"];function ee(e){return D({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,64H147.31l34.35-34.34a8,8,0,1,0-11.32-11.32L128,60.69,85.66,18.34A8,8,0,0,0,74.34,29.66L108.69,64H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64Zm0,136H40V80H216V200Z"},child:[]}]})(e)}const te=o.form`
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
`,oe=o.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`,H=o.div`
  background-color: ${e=>e.theme.colors.filtersLine};
  width: 100%;
  height: 2px;
  margin: 1rem 0 1rem;
`,re=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;
`,ne=o.button`
  border: none;
  outline: none;
  background: none;
  border-radius: 200px;
  padding: 16px 60px;
  width: 173px;
  height: 56px;

  font-family: ${j};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: ${e=>e.theme.colors.mainTextColor};
  text-decoration: underline;
  transition: var(--primary-transition);
  border: 0.1px solid transparent;

  &:hover {
    cursor: pointer;
    border: 0.1px solid ${e=>e.theme.colors.accentColorHover};
  }
`,ie=o.div`
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

  display: flex;
  align-items: center;
  gap: 0.8rem;

  font-family: ${w};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.11111;
  color: ${e=>e.theme.colors.mainTextColor};
  transition: all var(--primary-transition);

  &:hover {
    background-color: ${e=>e.theme.colors.inputBgColorHover};
  }
`,se=o.div`
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
`,le=o.span`
  font-family: ${w};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.mainTextColorVeryLowOp};
  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    color: ${e=>e.theme.colors.mainTextColor};
  }
`,ae=o.div`
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
`,ce=o.div`
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
`,V=o.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`,M=o.h3`
  font-family: ${j};
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${e=>e.theme.colors.mainTextColor};
`,de=o.span`
  font-family: ${j};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.secondaryTextColor};
`,c=o.span`
  font-family: ${j};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: ${e=>e.theme.colors.mainTextColor};
`,d=o.span`
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
`,pe=o.label`
  font-family: ${w};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.colors.mainTextColorLowOp};
`;o.p`
  font-size: 1.6rem;
  position: absolute;
  bottom: 0;
  left: 0;
`;const he=o(G)`
  font-size: 1.8rem;
  color: ${e=>e.theme.colors.mainTextColor};

  @media (min-width: 768px) {
    right: 0;
  }

  @media (min-width: 1440px) {
    right: 1.2rem;
  }
`,me=o.button`
  border: none;
  outline: none;
  background: none;
  border-radius: 200px;
  padding: 16px 60px;
  width: 173px;
  height: 56px;

  font-family: ${j};
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
`,xe=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 354px) {
    flex-direction: row;
  }
`;function ue({handlePage:e,setDisplayedCars:h,setFilteredSearch:u}){const[m,f]=a.useState(""),[l,y]=a.useState(""),[g,b]=a.useState(""),[C,x]=a.useState(!1),s=P(),$=r=>{const i=r.target.innerText;y(i)},F=r=>{const i=r.target.innerText;b(i)},I=r=>{f(r),x(!1)},v=async()=>{f(""),y(""),b("");const r=await s(O());h(r.payload),s(z("")),s(A("")),s(E("")),u(!1)},S=()=>{v(),e()};async function n(r){r.preventDefault();const i={location:m,selectedEquipment:l,selectedType:g},k=await s(O());h(k.payload),u(!0),s(z(i.location)),s(A(i.selectedEquipment)),s(E(i.selectedType)),e()}return t.jsxs(te,{onSubmit:n,children:[t.jsxs(oe,{children:[t.jsxs(re,{children:[t.jsx(pe,{htmlFor:"location",children:"Location"}),t.jsxs(ie,{onClick:()=>x(!C),children:[t.jsx(he,{}),t.jsx("span",{children:m||"Location"})]}),C&&t.jsx(se,{children:T==null?void 0:T.map(r=>t.jsx(le,{onClick:()=>I(r),children:r},r))})]}),t.jsxs(V,{children:[t.jsx(de,{children:"Filters"}),t.jsx(M,{children:"Vehicle equipment"}),t.jsx(H,{}),t.jsxs(ae,{onClick:$,children:[t.jsxs(p,{$active:l==="AC",children:[t.jsx(d,{children:t.jsx(Q,{})}),t.jsx(c,{children:"AC"})]}),t.jsxs(p,{$active:l==="Automatic",children:[t.jsx(d,{children:t.jsx(K,{})}),t.jsx(c,{children:"Automatic"})]}),t.jsxs(p,{$active:l==="Kitchen",children:[t.jsx(d,{children:t.jsx(Z,{})}),t.jsx(c,{children:"Kitchen"})]}),t.jsxs(p,{$active:l==="TV",children:[t.jsx(d,{children:t.jsx(ee,{})}),t.jsx(c,{children:"TV"})]}),t.jsxs(p,{$active:l==="Shower/WC",children:[t.jsx(d,{children:t.jsx(X,{})}),t.jsx(c,{children:"Shower/WC"})]})]})]}),t.jsxs(V,{children:[t.jsx(M,{children:"Vehicle type"}),t.jsx(H,{}),t.jsxs(ce,{onClick:F,children:[t.jsxs(p,{$active:g==="Van",children:[t.jsx(d,{children:t.jsx(L,{})}),t.jsx(c,{children:"Van"})]}),t.jsxs(p,{$active:g==="Fully Integrated",children:[t.jsx(d,{children:t.jsx(L,{})}),t.jsx(c,{children:"Fully Integrated"})]}),t.jsxs(p,{$active:g==="Alcove",children:[t.jsx(d,{children:t.jsx(L,{})}),t.jsx(c,{children:"Alcove"})]})]})]})]}),t.jsxs(xe,{children:[t.jsx(me,{type:"submit",children:"Search"}),t.jsx(ne,{onClick:S,type:"button",children:"Reset"})]})]})}const fe=o.button`
  border: none;
  outline: none;
  background: none;
  border: 1px solid ${e=>e.theme.colors.inputBgColor};
  border-radius: 20rem;
  padding: 1.6rem 3.2rem;
  width: 145px;
  height: 56px;

  font-family: ${w};
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
`;function ge({onLoadMoreClick:e}){return t.jsx(fe,{onClick:e,children:"Load More"})}function je(e){return e.split(/(?=[A-Z])/).map(m=>m.charAt(0).toUpperCase()+m.slice(1)).join(" ")}const we=o.div`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;
  align-items: start;
  padding: 6.4rem 2.4rem;

  @media (min-width: 920px) {
    flex-direction: row;
    gap: 3.2rem;
  }
`,ye=o.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  width: 100%;
`,be=o.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  height: 100%;
  width: 100%;

  position: relative;
`,Ce=o.li`
  font-family: ${w};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.mainTextColor};
  text-align: center;

  @media (min-width: 768px) {
    width: 80%;
  }
  @media (min-width: 920px) {
    padding-top: 9.6rem;
    width: 100%;
  }
`;function ke(){const e=P(),h=q(Y),[u,m]=a.useState(!1),[f,l]=a.useState(1),[y,g]=a.useState(!0),[b,C]=a.useState([]),x=q(_);function s(){l(r=>r+1)}function $(){l(1)}const v=Math.ceil(20/4);a.useEffect(()=>{async function r(){try{g(f<v),await e(U(f)).unwrap()}catch(i){console.log(i.message)}}r()},[e,f,v]);function S(){return b.filter(i=>{const k=!x.location||i.location===x.location,R=!x.type||je(i.form)===x.type;return k&&R})}const n=S();return t.jsxs(t.Fragment,{children:[t.jsx(N,{children:t.jsxs(J,{children:[t.jsx("title",{children:"Camp On Wheels - Explore the Catalog"}),t.jsx("meta",{name:"description",content:"Browse through our diverse catalog of stylish and comfortable camping cars at Camp On Wheels. Find the perfect vehicle for your next adventure and experience the joy of premium camping car rentals."}),t.jsx("meta",{name:"keywords",content:"car catalog, camping car rental, stylish cars, comfortable journeys, Camp On Wheels, premium rental services"})]})}),t.jsxs(we,{children:[t.jsx(ue,{handlePage:$,setDisplayedCars:C,setFilteredSearch:m}),t.jsxs(ye,{children:[t.jsx(be,{children:n&&(n==null?void 0:n.length)===0&&u?t.jsx(Ce,{children:"No camper cars match your search filters. Please try adjusting your filters or exploring other options."}):(n==null?void 0:n.length)>0?n==null?void 0:n.map(r=>t.jsx(B,{items:r},W())):h==null?void 0:h.map(r=>t.jsx(B,{items:r},W()))}),!u&&y&&t.jsx(ge,{onLoadMoreClick:s})]})]})]})}export{ke as default};
