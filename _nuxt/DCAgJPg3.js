import{m as c,r as a,o as f,c as g,a as s,D as b,B as n,C as i,q as d,z as m,E as y}from"./B9Jdsbtr.js";import{u as x}from"./S5yHZ_bO.js";const w={class:"flex items-center justify-center min-h-screen bg-gray-100"},v={class:"w-full max-w-md p-6 bg-white rounded-lg shadow-lg"},h={class:"mb-4"},k={class:"mb-6"},E=c({__name:"login",setup(B){const{login:u}=x(),o=a(""),t=a(""),p=async()=>{try{await u(o.value,t.value),y("/app/cash-register")}catch(l){console.error("Login failed:",l)}};return(l,e)=>(f(),g("div",w,[s("div",v,[e[5]||(e[5]=s("h2",{class:"text-2xl font-semibold text-center text-gray-800 mb-6"}," Se connecter ",-1)),s("form",{onSubmit:b(p,["prevent"])},[s("div",h,[e[2]||(e[2]=s("label",{for:"email",class:"block text-sm font-medium text-gray-600"}," Email ",-1)),n(s("input",{type:"email",id:"email","onUpdate:modelValue":e[0]||(e[0]=r=>m(o)?o.value=r:null),required:"",class:"mt-2 p-3 w-full border border-gray-300 rounded focus:ring-2 focus:ring-primary-500",placeholder:"you@example.com"},null,512),[[i,d(o)]])]),s("div",k,[e[3]||(e[3]=s("label",{for:"password",class:"block text-sm font-medium text-gray-600"}," Mot de passe ",-1)),n(s("input",{type:"password",id:"password","onUpdate:modelValue":e[1]||(e[1]=r=>m(t)?t.value=r:null),required:"",class:"mt-2 p-3 w-full border border-gray-300 rounded focus:ring-2 focus:ring-primary-500",placeholder:"********"},null,512),[[i,d(t)]])]),e[4]||(e[4]=s("button",{type:"submit",class:"w-full py-3 px-4font-semibold rounded text-white bg-primary-500 hover:bg-primary-700 duration-200"}," Se connecter ",-1))],32)])]))}});export{E as default};
