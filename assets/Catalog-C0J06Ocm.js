import{u as o,p as d,G as M,i as y,m as W,r as i,n as H,j as r,o as R,q as D,T as k,B as G,s as K,t as N,v as Z,w as J,x as L,H as Q,l as U,y as X}from"./index-RDXfeCX3.js";import{M as Y,c as _,C as T,v as I}from"./v4-DHKta-H2.js";import{b as ee}from"./StarRating-BFY3bUP5.js";const re=e=>e.cars.cars.items,oe=e=>e.cars.filter,te=o.div`
  display: flex;
  gap: 6.4rem;
  align-items: start;

  padding: 10rem 6.4rem;

  /* @media (min-width: 1440px) {
    padding: 9.6rem 12.8rem;
  } */
`,ne=o.ul`
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
`,ie=o.li`
  font-family: ${d};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.mainTextColor};
`,S=["Chicago, IL","Aurora, IL","Rosemont, IL","Schaumburg, IL","Joliet, IL","Rockford, IL","Oak Park, IL","Bolingbrook, IL","Orland Park, IL","Skokie, IL","Peoria, IL"];function ae(e){return M({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,64H147.31l34.35-34.34a8,8,0,1,0-11.32-11.32L128,60.69,85.66,18.34A8,8,0,0,0,74.34,29.66L108.69,64H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64Zm0,136H40V80H216V200Z"},child:[]}]})(e)}const le=o.form`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  width: 362px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
    gap: 6.4rem;
  }
`,se=o.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`,B=o.div`
  background-color: ${e=>e.theme.colors.filtersLine};
  width: 100%;
  height: 2px;
  margin: 1rem 0 1rem;
`,ce=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;
`;o.button`
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
`;o.button`
  background: none;
  border: none;
  outline: none;
  border-radius: 1.4rem;
  padding: 1.4rem 4.4rem;
  background-color: transparent;
  color: ${e=>e.theme.colors.mainTextColor};
  transition: all var(--primary-transition);
  border-bottom: 1px solid transparent;
  border-top: 1px solid transparent;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
    color: ${e=>e.theme.colors.accentColor};
    border-bottom: 1px solid ${e=>e.theme.colors.accentColor};
    border-top: 1px solid ${e=>e.theme.colors.accentColor};
    text-decoration: none;
  }

  @media (min-width: 768px) {
    padding: 1.4rem 3.2rem;
  }

  @media (min-width: 860px) {
    padding: 1.4rem 4.4rem;
  }
`;const de=o.div`
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
`,me=o.div`
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
`,he=o.span`
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
`,z=o.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 0.8rem;
  width: 362px;
`,O=o.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`,P=o.h3`
  font-family: ${y};
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${e=>e.theme.colors.mainTextColor};
`,pe=o.span`
  font-family: ${y};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.secondaryTextColor};
`,l=o.span`
  font-family: ${y};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: ${e=>e.theme.colors.mainTextColor};
`,s=o.span`
  font-size: 3.2rem;
  color: ${e=>e.theme.colors.mainTextColor};
`,c=o.div`
  border: 1px solid ${e=>e.theme.colors.borderFilterItem};
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
`,xe=o.label`
  font-family: ${d};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.colors.mainTextColorLowOp};
`;o.div`
  display: flex;
  max-width: 32rem;
`;o.input`
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
`;o.input`
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
`;o.p`
  font-size: 1.6rem;
  position: absolute;
  bottom: 0;
  left: 0;
`;const ge=o(W)`
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

  font-family: ${y};
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
`;function fe({handlePage:e,setDisplayedCars:h,setFilteredSearch:C}){const[p,x]=i.useState(""),[u,E]=i.useState(""),[f,F]=i.useState(""),[b,m]=i.useState(""),[w,$]=i.useState(!1);i.useState(!1);const g=H(),j=t=>{x(t),$(!1)};async function v(t){if(t.preventDefault(),console.log(t),p.length===0&&!u&&f.length===0&&b.length===0){G.warning("Please choose a brand, price, or mileage range to refine your search.",_);return}const n={brand:p,price:u||"250",mileage:{from:f||"0",to:b||"15000"}},a=await g(K());h(a.payload),C(!0),g(N(n.brand)),g(Z(n.price)),g(J({min:n.mileage.from,max:n.mileage.to})),e()}return r.jsxs(le,{onSubmit:v,children:[r.jsxs(se,{children:[r.jsxs(ce,{children:[r.jsx(xe,{htmlFor:"carBrand",children:"Location"}),r.jsxs(de,{onClick:()=>$(!w),children:[r.jsx(ge,{}),r.jsx("span",{children:p||"Location"})]}),w&&r.jsx(me,{children:S==null?void 0:S.map(t=>r.jsx(he,{onClick:()=>j(t),children:t},t))})]}),r.jsxs(O,{children:[r.jsx(pe,{children:"Filters"}),r.jsx(P,{children:"Vehicle equipment"}),r.jsx(B,{}),r.jsxs(z,{children:[r.jsxs(c,{children:[r.jsx(s,{children:r.jsx(Y,{})}),r.jsx(l,{children:"AC"})]}),r.jsxs(c,{children:[r.jsx(s,{children:r.jsx(R,{})}),r.jsx(l,{children:"Automatic"})]}),r.jsxs(c,{children:[r.jsx(s,{children:r.jsx(D,{})}),r.jsx(l,{children:"Kitchen"})]}),r.jsxs(c,{children:[r.jsx(s,{children:r.jsx(ae,{})}),r.jsx(l,{children:"TV"})]}),r.jsxs(c,{children:[r.jsx(s,{children:r.jsx(ee,{})}),r.jsx(l,{children:"Shower/WC"})]})]})]}),r.jsxs(O,{children:[r.jsx(P,{children:"Vehicle type"}),r.jsx(B,{}),r.jsxs(z,{children:[r.jsxs(c,{children:[r.jsx(s,{children:r.jsx(k,{})}),r.jsx(l,{children:"Van"})]}),r.jsxs(c,{children:[r.jsx(s,{children:r.jsx(k,{})}),r.jsx(l,{children:"Fully Integrated"})]}),r.jsxs(c,{children:[r.jsx(s,{children:r.jsx(k,{})}),r.jsx(l,{children:"Alcove"})]})]})]})]}),r.jsx(ue,{children:"Search"})]})}function ye(){const e=H(),h=L(re),[C,p]=i.useState(!1),[x,u]=i.useState(1),[E,f]=i.useState(!0),[F,b]=i.useState([]),m=L(oe);function w(){u(1)}const j=Math.ceil(52/12);i.useEffect(()=>{async function n(){try{f(x<j),await e(X(x)).unwrap()}catch(a){console.log(a.message)}}n()},[e,x,j]);function v(){return F.filter(a=>{const A=!m.brand||a.make===m.brand,V=parseInt(a.rentalPrice.replace("$",""))<=m.price,q=!m.mileageRange||a.mileage>=m.mileageRange.min&&a.mileage<=m.mileageRange.max;return A&&V&&q})}const t=v();return r.jsxs(r.Fragment,{children:[r.jsx(Q,{children:r.jsxs(U,{children:[r.jsx("title",{children:"Cruise Wheels - Explore the Catalog"}),r.jsx("meta",{name:"description",content:"Browse through our diverse catalog of stylish and comfortable cars at Cruise Wheels. Find the perfect vehicle for your next adventure and experience the joy of premium car rentals."}),r.jsx("meta",{name:"keywords",content:"car catalog, car rental, stylish cars, comfortable journeys, Cruise Wheels, premium rental services"})]})}),r.jsxs(te,{children:[r.jsx(fe,{handlePage:w,setDisplayedCars:b,setFilteredSearch:p}),r.jsx(ne,{children:t&&(t==null?void 0:t.length)===0&&C?r.jsx(ie,{children:"No matching cars found"}):(t==null?void 0:t.length)>0?t==null?void 0:t.map(n=>r.jsx(T,{items:n},I())):h==null?void 0:h.map(n=>r.jsx(T,{items:n},I()))})]})]})}export{ye as default};
