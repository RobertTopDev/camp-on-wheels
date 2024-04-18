import{u as r,p as l,r as s,n as h,v as g,j as e,H as f,l as v,w as u}from"./index-BZdGoVwy.js";import{C as x,v as y}from"./v4-hcxqlNUd.js";import{h as j}from"./heroBg-BCOlliND.js";import"./StarRating-CUKZ8xji.js";const b=r.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;

  padding: 2.4rem;

  @media (min-width: 1440px) {
    padding: 9.6rem 12.8rem;
  }
`,w=r.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  height: 100%;
  width: 100%;

  position: relative;
`,C=r.div`
  min-height: calc(100vh - 6rem);
  height: 100%;
  margin: 0 auto;
`,F=r.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 6rem);
  background: url(${j});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  z-index: 1;
  padding: 1.2rem 0 1.2rem 1.2rem;
  overflow: hidden;

  display: flex;
  justify-content: center;

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

  @media (min-width: 768px) {
    padding: 3.2rem;
    overflow: visible;
  }
`,k=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  padding: 2.4rem;
  width: 60rem;
  background-color: ${t=>t.theme.colors.heroBgLowOp};
  border-radius: 1.2rem;
  backdrop-filter: blur(5px);

  height: 100%;

  margin-top: 4.8rem;
`,E=r.h2`
  color: ${t=>t.theme.colors.lightWhiteColor};
  font-family: ${l};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
`,W=r.p`
  color: ${t=>t.theme.colors.lightWhiteColor};
  font-family: ${l};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
`;function S(){const[t,c]=s.useState([]),a=h(),m=g();return s.useEffect(()=>{async function i(){try{const o=await a(u()),d=JSON.parse(localStorage.getItem("favorites"))||[],n=o.payload.filter(p=>d.includes(p._id));n.length===0&&localStorage.removeItem("favorites"),c(n)}catch(o){console.log(o.message)}}i()},[a,m]),e.jsxs(e.Fragment,{children:[e.jsx(f,{children:e.jsxs(v,{children:[e.jsx("title",{children:"Camp On Wheels - Your Favorite Cars"}),e.jsx("meta",{name:"description",content:"Discover and explore your favorite camping cars with Camp On Wheels. View and rent stylish and comfortable vehicles that make every journey unforgettable."}),e.jsx("meta",{name:"keywords",content:"favorite carpers, camping car rental, stylish cars, comfortable journeys, Camp On Wheels, premium rental services"})]})}),t.length===0?e.jsx(C,{children:e.jsx(F,{children:e.jsxs(k,{children:[e.jsx(E,{children:"No Favorite Cars Found!"}),e.jsx(W,{children:"It looks like you haven't added any cars to your favorites yet. Explore Camp On Wheels' main page to find stylish and comfy rides for your next journey!"})]})})}):e.jsx(b,{children:e.jsx(w,{children:t==null?void 0:t.map(i=>e.jsx(x,{items:i},y()))})})]})}export{S as default};
