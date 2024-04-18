import{G as M,u as r,p as s,i as C,m as P,r as a,n as q,j as o,o as R,q as D,T as S,s as I,H as G,l as K,t as N}from"./index-Dc-XQGO0.js";import{M as Z,C as z,v as B}from"./v4-ccosaRkl.js";import{b as J}from"./StarRating-C4D-G9sI.js";const Q=e=>e.cars.cars.items,U=e=>e.cars.filter,L=["Chicago, IL","Aurora, IL","Rosemont, IL","Schaumburg, IL","Joliet, IL","Rockford, IL","Oak Park, IL","Bolingbrook, IL","Orland Park, IL","Skokie, IL","Peoria, IL"];function X(e){return M({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,64H147.31l34.35-34.34a8,8,0,1,0-11.32-11.32L128,60.69,85.66,18.34A8,8,0,0,0,74.34,29.66L108.69,64H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64Zm0,136H40V80H216V200Z"},child:[]}]})(e)}const Y=r.form`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  width: 362px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
    gap: 6.4rem;
  }
`,_=r.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`,H=r.div`
  background-color: ${e=>e.theme.colors.filtersLine};
  width: 100%;
  height: 2px;
  margin: 1rem 0 1rem;
`,ee=r.div`
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
`;const oe=r.div`
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

  font-family: ${s};
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
`,re=r.div`
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
`,te=r.span`
  font-family: ${s};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.mainTextColorVeryLowOp};
  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    color: ${e=>e.theme.colors.mainTextColor};
  }
`,ne=r.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 0.8rem;
  width: 362px;
`,ie=r.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 0.8rem;
  width: 362px;
`,O=r.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`,E=r.h3`
  font-family: ${C};
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${e=>e.theme.colors.mainTextColor};
`,le=r.span`
  font-family: ${C};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.secondaryTextColor};
`,c=r.span`
  font-family: ${C};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: ${e=>e.theme.colors.mainTextColor};
`,d=r.span`
  font-size: 3.2rem;
  color: ${e=>e.theme.colors.mainTextColor};
  pointer-events: none;
`,m=r.div`
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
`,ae=r.label`
  font-family: ${s};
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

  font-family: ${s};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.11111;
  color: ${e=>e.theme.colors.black};

  transition: all var(--primary-transition);

  &:hover {
    background-color: ${e=>e.theme.colors.inputBgColorHover};
  }

  &::placeholder {
    font-family: ${s};
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

  font-family: ${s};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.11111;
  color: ${e=>e.theme.colors.black};

  transition: all var(--primary-transition);

  &:hover {
    background-color: ${e=>e.theme.colors.inputBgColorHover};
  }

  &::placeholder {
    font-family: ${s};
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
`;const se=r(P)`
  font-size: 1.8rem;
  color: ${e=>e.theme.colors.mainTextColor};

  @media (min-width: 768px) {
    right: 0;
  }

  @media (min-width: 1440px) {
    right: 1.2rem;
  }
`,ce=r.button`
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
`;function de({handlePage:e,setDisplayedCars:x,setFilteredSearch:T}){const[$,p]=a.useState(""),u=a.useRef(null),[g,f]=a.useState(!1),[h,b]=a.useState(""),[i,w]=a.useState("");q();const v=t=>{const l=t.target.innerText;b(l)},j=t=>{const l=t.target.innerText;w(l)},F=t=>{p(t),f(!1)},y=async()=>{b(""),w(""),p("")},k=()=>{y(),e()};async function n(t){t.preventDefault(),u.current.innerText,k()}return o.jsxs(Y,{onSubmit:n,children:[o.jsxs(_,{children:[o.jsxs(ee,{children:[o.jsx(ae,{htmlFor:"location",children:"Location"}),o.jsxs(oe,{ref:u,onClick:()=>f(!g),children:[o.jsx(se,{}),o.jsx("span",{children:$||"Location"})]}),g&&o.jsx(re,{children:L==null?void 0:L.map(t=>o.jsx(te,{onClick:()=>F(t),children:t},t))})]}),o.jsxs(O,{children:[o.jsx(le,{children:"Filters"}),o.jsx(E,{children:"Vehicle equipment"}),o.jsx(H,{}),o.jsxs(ne,{onClick:v,children:[o.jsxs(m,{$active:h==="AC",children:[o.jsx(d,{children:o.jsx(Z,{})}),o.jsx(c,{children:"AC"})]}),o.jsxs(m,{$active:h==="Automatic",children:[o.jsx(d,{children:o.jsx(R,{})}),o.jsx(c,{children:"Automatic"})]}),o.jsxs(m,{$active:h==="Kitchen",children:[o.jsx(d,{children:o.jsx(D,{})}),o.jsx(c,{children:"Kitchen"})]}),o.jsxs(m,{$active:h==="TV",children:[o.jsx(d,{children:o.jsx(X,{})}),o.jsx(c,{children:"TV"})]}),o.jsxs(m,{$active:h==="Shower/WC",children:[o.jsx(d,{children:o.jsx(J,{})}),o.jsx(c,{children:"Shower/WC"})]})]})]}),o.jsxs(O,{children:[o.jsx(E,{children:"Vehicle type"}),o.jsx(H,{}),o.jsxs(ie,{onClick:j,children:[o.jsxs(m,{$active:i==="Van",children:[o.jsx(d,{children:o.jsx(S,{})}),o.jsx(c,{children:"Van"})]}),o.jsxs(m,{$active:i==="Fully Integrated",children:[o.jsx(d,{children:o.jsx(S,{})}),o.jsx(c,{children:"Fully Integrated"})]}),o.jsxs(m,{$active:i==="Alcove",children:[o.jsx(d,{children:o.jsx(S,{})}),o.jsx(c,{children:"Alcove"})]})]})]})]}),o.jsx(ce,{children:"Search"})]})}const me=r.button`
  border: none;
  outline: none;
  background: none;
  border: 1px solid ${e=>e.theme.colors.inputBgColor};
  border-radius: 20rem;
  padding: 1.6rem 3.2rem;
  width: 145px;
  height: 56px;

  font-family: ${s};
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
`;function he({onLoadMoreClick:e}){return o.jsx(me,{onClick:e,children:"Load More"})}const pe=r.div`
  display: flex;
  gap: 6.4rem;
  align-items: start;
  padding: 10rem 6.4rem;

  /* @media (min-width: 1440px) {
    padding: 9.6rem 12.8rem;
  } */
`,xe=r.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
`,ue=r.ul`
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
`,ge=r.li`
  font-family: ${s};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.mainTextColor};
`;function je(){const e=q(),x=I(Q),[T,$]=a.useState(!1),[p,u]=a.useState(1),[g,f]=a.useState(!0),[h,b]=a.useState([]),i=I(U);function w(){u(t=>t+1)}function v(){u(1)}const j=4,y=Math.ceil(20/j);a.useEffect(()=>{async function t(){try{f(p<y),await e(N(p)).unwrap()}catch(l){console.log(l.message)}}t()},[e,p,y]);function k(){return h.filter(l=>{const A=!i.brand||l.make===i.brand,V=parseInt(l.rentalPrice.replace("$",""))<=i.price,W=!i.mileageRange||l.mileage>=i.mileageRange.min&&l.mileage<=i.mileageRange.max;return A&&V&&W})}const n=k();return o.jsxs(o.Fragment,{children:[o.jsx(G,{children:o.jsxs(K,{children:[o.jsx("title",{children:"Cruise Wheels - Explore the Catalog"}),o.jsx("meta",{name:"description",content:"Browse through our diverse catalog of stylish and comfortable cars at Cruise Wheels. Find the perfect vehicle for your next adventure and experience the joy of premium car rentals."}),o.jsx("meta",{name:"keywords",content:"car catalog, car rental, stylish cars, comfortable journeys, Cruise Wheels, premium rental services"})]})}),o.jsxs(pe,{children:[o.jsx(de,{handlePage:v,setDisplayedCars:b,setFilteredSearch:$}),o.jsxs(xe,{children:[o.jsx(ue,{children:n&&(n==null?void 0:n.length)===0&&T?o.jsx(ge,{children:"No matching cars found"}):(n==null?void 0:n.length)>0?n==null?void 0:n.map(t=>o.jsx(z,{items:t},B())):x==null?void 0:x.map(t=>o.jsx(z,{items:t},B()))}),x.length>=j&&g&&o.jsx(he,{onLoadMoreClick:w})]})]})]})}export{je as default};
