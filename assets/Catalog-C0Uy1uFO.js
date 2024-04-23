import{G,u as o,i as w,p as j,m as K,r as a,n as R,j as t,o as Z,q as N,T as L,s as O,t as z,v as A,w as E,x as q,H as J,l as U,y as Q}from"./index-B6bConxl.js";import{M as X,C as B,v as W}from"./v4-BQMVIErc.js";import{d as Y}from"./emailRegex-qyUw2IiR.js";const _=e=>e.cars.cars.items,ee=e=>e.cars.filter,T=["Chicago, IL","Aurora, IL","Rosemont, IL","Schaumburg, IL","Joliet, IL","Rockford, IL","Oak Park, IL","Bolingbrook, IL","Orland Park, IL","Skokie, IL","Peoria, IL"];function te(e){return G({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,64H147.31l34.35-34.34a8,8,0,1,0-11.32-11.32L128,60.69,85.66,18.34A8,8,0,0,0,74.34,29.66L108.69,64H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64Zm0,136H40V80H216V200Z"},child:[]}]})(e)}const oe=o.form`
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
`,re=o.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`,H=o.div`
  background-color: ${e=>e.theme.colors.filtersLine};
  width: 100%;
  height: 2px;
  margin: 1rem 0 1rem;
`,ne=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;
`,ie=o.button`
  border: none;
  outline: none;
  background: none;
  border-radius: 200px;
  padding: 16px 60px;
  width: 173px;
  height: 56px;

  font-family: ${w};
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
`,se=o.div`
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

  font-family: ${j};
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
`,le=o.div`
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
`,ae=o.span`
  font-family: ${j};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.mainTextColorVeryLowOp};
  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    color: ${e=>e.theme.colors.mainTextColor};
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

  @media (min-width: 768px) {
    width: 362px;
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
`,V=o.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`,M=o.h3`
  font-family: ${w};
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${e=>e.theme.colors.mainTextColor};
`,he=o.span`
  font-family: ${w};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.secondaryTextColor};
`,c=o.span`
  font-family: ${w};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: ${e=>e.theme.colors.mainTextColor};
`,d=o.span`
  font-size: 3.2rem;
  color: ${e=>e.theme.colors.mainTextColor};
  pointer-events: none;
`,h=o.div`
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
  font-family: ${j};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.colors.mainTextColorLowOp};
`;o.p`
  font-size: 1.6rem;
  position: absolute;
  bottom: 0;
  left: 0;
`;const me=o(K)`
  font-size: 1.8rem;
  color: ${e=>e.theme.colors.mainTextColor};

  @media (min-width: 768px) {
    right: 0;
  }

  @media (min-width: 1440px) {
    right: 1.2rem;
  }
`,xe=o.button`
  border: none;
  outline: none;
  background: none;
  border-radius: 200px;
  padding: 16px 60px;
  width: 173px;
  height: 56px;

  font-family: ${w};
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
`,ue=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 354px) {
    flex-direction: row;
  }
`;function fe({handlePage:e,setDisplayedCars:p,setFilteredSearch:m}){const[x,f]=a.useState(""),[l,y]=a.useState(""),[g,b]=a.useState(""),[C,u]=a.useState(!1),s=R(),$=r=>{const i=r.target.innerText;y(i)},F=r=>{const i=r.target.innerText;b(i)},I=r=>{f(r),u(!1)},v=async()=>{f(""),y(""),b("");const r=await s(O());p(r.payload),s(z("")),s(A("")),s(E("")),m(!1)},S=()=>{v(),e()};async function n(r){r.preventDefault();const i={location:x,selectedEquipment:l,selectedType:g},k=await s(O());p(k.payload),m(!0),s(z(i.location)),s(A(i.selectedEquipment)),s(E(i.selectedType)),e()}return t.jsxs(oe,{onSubmit:n,children:[t.jsxs(re,{children:[t.jsxs(ne,{children:[t.jsx(pe,{htmlFor:"location",children:"Location"}),t.jsxs(se,{onClick:()=>u(!C),children:[t.jsx(me,{}),t.jsx("span",{children:x||"Location"})]}),C&&t.jsx(le,{children:T==null?void 0:T.map(r=>t.jsx(ae,{onClick:()=>I(r),children:r},r))})]}),t.jsxs(V,{children:[t.jsx(he,{children:"Filters"}),t.jsx(M,{children:"Vehicle equipment"}),t.jsx(H,{}),t.jsxs(ce,{onClick:$,children:[t.jsxs(h,{$active:l==="AC",children:[t.jsx(d,{children:t.jsx(X,{})}),t.jsx(c,{children:"AC"})]}),t.jsxs(h,{$active:l==="Automatic",children:[t.jsx(d,{children:t.jsx(Z,{})}),t.jsx(c,{children:"Automatic"})]}),t.jsxs(h,{$active:l==="Kitchen",children:[t.jsx(d,{children:t.jsx(N,{})}),t.jsx(c,{children:"Kitchen"})]}),t.jsxs(h,{$active:l==="TV",children:[t.jsx(d,{children:t.jsx(te,{})}),t.jsx(c,{children:"TV"})]}),t.jsxs(h,{$active:l==="Shower/WC",children:[t.jsx(d,{children:t.jsx(Y,{})}),t.jsx(c,{children:"Shower/WC"})]})]})]}),t.jsxs(V,{children:[t.jsx(M,{children:"Vehicle type"}),t.jsx(H,{}),t.jsxs(de,{onClick:F,children:[t.jsxs(h,{$active:g==="Van",children:[t.jsx(d,{children:t.jsx(L,{})}),t.jsx(c,{children:"Van"})]}),t.jsxs(h,{$active:g==="Fully Integrated",children:[t.jsx(d,{children:t.jsx(L,{})}),t.jsx(c,{children:"Fully Integrated"})]}),t.jsxs(h,{$active:g==="Alcove",children:[t.jsx(d,{children:t.jsx(L,{})}),t.jsx(c,{children:"Alcove"})]})]})]})]}),t.jsxs(ue,{children:[t.jsx(xe,{type:"submit",children:"Search"}),t.jsx(ie,{onClick:S,type:"button",children:"Reset"})]})]})}const ge=o.button`
  border: none;
  outline: none;
  background: none;
  border: 1px solid ${e=>e.theme.colors.inputBgColor};
  border-radius: 20rem;
  padding: 1.6rem 3.2rem;
  width: 145px;
  height: 56px;

  font-family: ${j};
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
`;function P({onLoadMoreClick:e}){return t.jsx(ge,{onClick:e,children:"Load More"})}function we(e){return e.split(/(?=[A-Z])/).map(x=>x.charAt(0).toUpperCase()+x.slice(1)).join(" ")}const je=o.div`
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
  font-family: ${j};
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
`;function ke(){const e=R(),p=q(_),[m,x]=a.useState(!1),[f,l]=a.useState(1),[y,g]=a.useState(!0),[b,C]=a.useState([]),u=q(ee);function s(){l(r=>r+1)}function $(){l(1)}const v=Math.ceil(20/4);a.useEffect(()=>{async function r(){try{g(f<v),await e(Q(f)).unwrap()}catch(i){console.log(i.message)}}r()},[e,f,v]);function S(){return b.filter(i=>{const k=!u.location||i.location===u.location,D=!u.type||we(i.form)===u.type;return k&&D})}const n=S();return t.jsxs(t.Fragment,{children:[t.jsx(J,{children:t.jsxs(U,{children:[t.jsx("title",{children:"Camp On Wheels - Explore the Catalog"}),t.jsx("meta",{name:"description",content:"Browse through our diverse catalog of stylish and comfortable camping cars at Camp On Wheels. Find the perfect vehicle for your next adventure and experience the joy of premium camping car rentals."}),t.jsx("meta",{name:"keywords",content:"car catalog, camping car rental, stylish cars, comfortable journeys, Camp On Wheels, premium rental services"})]})}),t.jsxs(je,{children:[t.jsx(fe,{handlePage:$,setDisplayedCars:C,setFilteredSearch:x}),t.jsxs(ye,{children:[t.jsx(be,{children:n&&(n==null?void 0:n.length)===0&&m?t.jsx(Ce,{children:"No camper cars match your search filters. Please try adjusting your filters or exploring other options."}):(n==null?void 0:n.length)>0?n==null?void 0:n.map(r=>t.jsx(B,{items:r},W())):p==null?void 0:p.map(r=>t.jsx(B,{items:r},W()))}),m&&n.length>4&&t.jsx(P,{onLoadMoreClick:s}),!m&&y&&t.jsx(P,{onLoadMoreClick:s})]})]})]})}export{ke as default};
