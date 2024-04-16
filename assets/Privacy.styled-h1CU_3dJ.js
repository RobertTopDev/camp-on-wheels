import{u as i,p as t}from"./index-CRn7I2jZ.js";import{h as o}from"./heroBg-BCOlliND.js";const a=i.div`
  min-height: 100vh;
  margin: 0 auto;
`,l=i.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  background: url(${o});
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
`,c=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  padding: 2.4rem;
  width: 60rem;
  background-color: ${e=>e.theme.colors.heroBgLowOp};
  border-radius: 1.2rem;
  backdrop-filter: blur(5px);

  height: 100%;
`,s=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`,h=i.h2`
  color: ${e=>e.theme.colors.lightWhiteColor};
  font-family: ${t};
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 1.33333;
  letter-spacing: -0.02em;
`,m=i.h3`
  color: ${e=>e.theme.colors.lightWhiteColor};
  font-family: ${t};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
`,p=i.p`
  color: ${e=>e.theme.colors.lightWhiteColor};
  font-family: ${t};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
`,d=i.p`
  color: ${e=>e.theme.colors.lightWhiteColor};
  font-family: ${t};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.33333;
  letter-spacing: -0.02em;
`,g=i.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;export{a as P,l as a,c as b,s as c,h as d,p as e,g as f,m as g,d as h};
