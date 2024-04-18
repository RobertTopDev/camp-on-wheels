import{u as o,p as r,r as n,j as e,H as i,l as a}from"./index-Dq_t1I8A.js";import{h as s}from"./heroBg-BCOlliND.js";const d=o.div`
  min-height: 100vh;
  height: 100vh;
  margin: 0 auto;
`,l=o.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  background: url(${s});
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
`,h=o.div`
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
`,c=o.h2`
  color: ${t=>t.theme.colors.lightWhiteColor};
  font-family: ${r};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
`,u=o.p`
  color: ${t=>t.theme.colors.lightWhiteColor};
  font-family: ${r};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
`;function g({scrollToTop:t}){return n.useEffect(()=>{t()},[]),e.jsxs(e.Fragment,{children:[e.jsx(i,{children:e.jsxs(a,{children:[e.jsx("title",{children:"Camp On Wheels - 404 Not Found"}),e.jsx("meta",{name:"description",content:"Oops! It looks like you've taken a wrong turn. Explore Camp On Wheels' official site and discover stylish and comfortable camping car rentals for your next adventure."}),e.jsx("meta",{name:"keywords",content:"404 not found, wrong turn, Camp On Wheels, car rentals, adventure"})]})}),e.jsx(d,{children:e.jsx(l,{children:e.jsxs(h,{children:[e.jsx(c,{children:"404 Oops! Page Not Found!"}),e.jsx(u,{children:"Uh-oh! It seems like you've stumbled upon a road less traveled, and our GPS got a bit confused. Don't worry, getting lost is just part of the adventure! While we figure out the best route, why not explore Camp On Wheels main page? You're bound to find stylish and comfy rides for your next epic journey. Trust us: it's all part of the scenic route!"})]})})})]})}export{g as default};
