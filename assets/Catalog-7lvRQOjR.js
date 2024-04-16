import{u as r,p as m,G as W,i as j,m as A,r as i,n as P,j as o,o as R,q as M,T as S,s as z,H as D,l as G,t as K}from"./index-DgjTIQP1.js";import{M as N,C as O,v as B}from"./v4-ol-9h5Y3.js";import{b as Z}from"./StarRating-8Hql_Yt6.js";const J=e=>e.cars.cars.items,Q=e=>e.cars.filter,U=r.div`
  display: flex;
  gap: 6.4rem;
  align-items: start;

  padding: 10rem 6.4rem;

  /* @media (min-width: 1440px) {
    padding: 9.6rem 12.8rem;
  } */
`,X=r.ul`
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
`,Y=r.li`
  font-family: ${m};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.mainTextColor};
`,T=["Chicago, IL","Aurora, IL","Rosemont, IL","Schaumburg, IL","Joliet, IL","Rockford, IL","Oak Park, IL","Bolingbrook, IL","Orland Park, IL","Skokie, IL","Peoria, IL"];function _(e){return W({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,64H147.31l34.35-34.34a8,8,0,1,0-11.32-11.32L128,60.69,85.66,18.34A8,8,0,0,0,74.34,29.66L108.69,64H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64Zm0,136H40V80H216V200Z"},child:[]}]})(e)}const ee=r.form`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  width: 362px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
    gap: 6.4rem;
  }
`,oe=r.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`,E=r.div`
  background-color: ${e=>e.theme.colors.filtersLine};
  width: 100%;
  height: 2px;
  margin: 1rem 0 1rem;
`,re=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;
`;r.button`
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
`;r.button`
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
`;const te=r.div`
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

  font-family: ${m};
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
`,ne=r.div`
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
`,ie=r.span`
  font-family: ${m};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.mainTextColorVeryLowOp};
  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    color: ${e=>e.theme.colors.mainTextColor};
  }
`,le=r.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 0.8rem;
  width: 362px;
`,ae=r.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 0.8rem;
  width: 362px;
`,H=r.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`,q=r.h3`
  font-family: ${j};
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${e=>e.theme.colors.mainTextColor};
`,se=r.span`
  font-family: ${j};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.secondaryTextColor};
`,s=r.span`
  font-family: ${j};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: ${e=>e.theme.colors.mainTextColor};
`,c=r.span`
  font-size: 3.2rem;
  color: ${e=>e.theme.colors.mainTextColor};
  pointer-events: none;
`,d=r.div`
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
`,ce=r.label`
  font-family: ${m};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.colors.mainTextColorLowOp};
`;r.div`
  display: flex;
  max-width: 32rem;
`;r.input`
  border: none;
  outline: none;
  background: none;
  width: 100%;
  height: 4.8rem;
  border-radius: 0 14px 14px 0;
  background-color: ${e=>e.theme.colors.inputBgColor};
  padding: 1.4rem 2.4rem;

  font-family: ${m};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.11111;
  color: ${e=>e.theme.colors.black};

  transition: all var(--primary-transition);

  &:hover {
    background-color: ${e=>e.theme.colors.inputBgColorHover};
  }

  &::placeholder {
    font-family: ${m};
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
`;r.input`
  border: none;
  outline: none;
  background: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  border-radius: 14px 0 0 14px;
  width: 100%;
  height: 4.8rem;
  background-color: ${e=>e.theme.colors.inputBgColor};
  padding: 1.4rem 2.4rem;

  font-family: ${m};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.11111;
  color: ${e=>e.theme.colors.black};

  transition: all var(--primary-transition);

  &:hover {
    background-color: ${e=>e.theme.colors.inputBgColorHover};
  }

  &::placeholder {
    font-family: ${m};
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
`;r.p`
  font-size: 1.6rem;
  position: absolute;
  bottom: 0;
  left: 0;
`;const de=r(A)`
  font-size: 1.8rem;
  color: ${e=>e.theme.colors.mainTextColor};

  @media (min-width: 768px) {
    right: 0;
  }

  @media (min-width: 1440px) {
    right: 1.2rem;
  }
`,me=r.button`
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
`;function he({handlePage:e,setDisplayedCars:x,setFilteredSearch:F}){const[y,p]=i.useState(""),u=i.useRef(null),[C,g]=i.useState(!1),[$,f]=i.useState(""),[l,b]=i.useState("");P();const L=t=>{const h=t.target.innerText;f(h)},I=t=>{const h=t.target.innerText;b(h)},w=t=>{p(t),g(!1)},v=async()=>{f(""),b(""),p("")},n=()=>{v(),e()};async function a(t){t.preventDefault();const h=u.current.innerText,k={selectedEquipment:$,selectedType:l};console.log(h),console.log(k),n()}return o.jsxs(ee,{onSubmit:a,children:[o.jsxs(oe,{children:[o.jsxs(re,{children:[o.jsx(ce,{htmlFor:"location",children:"Location"}),o.jsxs(te,{ref:u,onClick:()=>g(!C),children:[o.jsx(de,{}),o.jsx("span",{children:y||"Location"})]}),C&&o.jsx(ne,{children:T==null?void 0:T.map(t=>o.jsx(ie,{onClick:()=>w(t),children:t},t))})]}),o.jsxs(H,{children:[o.jsx(se,{children:"Filters"}),o.jsx(q,{children:"Vehicle equipment"}),o.jsx(E,{}),o.jsxs(le,{onClick:L,children:[o.jsxs(d,{children:[o.jsx(c,{children:o.jsx(N,{})}),o.jsx(s,{children:"AC"})]}),o.jsxs(d,{children:[o.jsx(c,{children:o.jsx(R,{})}),o.jsx(s,{children:"Automatic"})]}),o.jsxs(d,{children:[o.jsx(c,{children:o.jsx(M,{})}),o.jsx(s,{children:"Kitchen"})]}),o.jsxs(d,{children:[o.jsx(c,{children:o.jsx(_,{})}),o.jsx(s,{children:"TV"})]}),o.jsxs(d,{children:[o.jsx(c,{children:o.jsx(Z,{})}),o.jsx(s,{children:"Shower/WC"})]})]})]}),o.jsxs(H,{children:[o.jsx(q,{children:"Vehicle type"}),o.jsx(E,{}),o.jsxs(ae,{onClick:I,children:[o.jsxs(d,{children:[o.jsx(c,{children:o.jsx(S,{})}),o.jsx(s,{children:"Van"})]}),o.jsxs(d,{children:[o.jsx(c,{children:o.jsx(S,{})}),o.jsx(s,{children:"Fully Integrated"})]}),o.jsxs(d,{children:[o.jsx(c,{children:o.jsx(S,{})}),o.jsx(s,{children:"Alcove"})]})]})]})]}),o.jsx(me,{children:"Search"})]})}function ge(){const e=P(),x=z(J),[F,y]=i.useState(!1),[p,u]=i.useState(1),[C,g]=i.useState(!0),[$,f]=i.useState([]),l=z(Q);function b(){u(1)}const w=Math.ceil(52/12);i.useEffect(()=>{async function a(){try{g(p<w),await e(K(p)).unwrap()}catch(t){console.log(t.message)}}a()},[e,p,w]);function v(){return $.filter(t=>{const h=!l.brand||t.make===l.brand,k=parseInt(t.rentalPrice.replace("$",""))<=l.price,V=!l.mileageRange||t.mileage>=l.mileageRange.min&&t.mileage<=l.mileageRange.max;return h&&k&&V})}const n=v();return o.jsxs(o.Fragment,{children:[o.jsx(D,{children:o.jsxs(G,{children:[o.jsx("title",{children:"Cruise Wheels - Explore the Catalog"}),o.jsx("meta",{name:"description",content:"Browse through our diverse catalog of stylish and comfortable cars at Cruise Wheels. Find the perfect vehicle for your next adventure and experience the joy of premium car rentals."}),o.jsx("meta",{name:"keywords",content:"car catalog, car rental, stylish cars, comfortable journeys, Cruise Wheels, premium rental services"})]})}),o.jsxs(U,{children:[o.jsx(he,{handlePage:b,setDisplayedCars:f,setFilteredSearch:y}),o.jsx(X,{children:n&&(n==null?void 0:n.length)===0&&F?o.jsx(Y,{children:"No matching cars found"}):(n==null?void 0:n.length)>0?n==null?void 0:n.map(a=>o.jsx(O,{items:a},B())):x==null?void 0:x.map(a=>o.jsx(O,{items:a},B()))})]})]})}export{ge as default};
