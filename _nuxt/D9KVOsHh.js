import{m as a,o as n,c as l,a as e,D as i,F as d,E as x}from"./B9Jdsbtr.js";import{u as m}from"./S5yHZ_bO.js";const p={class:"mx-auto"},u={class:"px-4 py-2 sm:px-6 lg:px-8"},b=a({__name:"index",setup(c){const{logout:s}=m(),r=async()=>{try{await s(),x("/login")}catch(o){console.error("Logout failed:",o)}};return(o,t)=>(n(),l(d,null,[t[2]||(t[2]=e("header",{class:"bg-gray-600 text-white"},[e("div",{class:"flex justify-between items-center mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8"},[e("h1",{class:"flex-1 text-2xl font-bold"},"Paramètres")])],-1)),e("main",null,[e("div",p,[e("div",u,[t[1]||(t[1]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-6"}," Session ",-1)),e("form",{onSubmit:i(r,["prevent"])},t[0]||(t[0]=[e("button",{type:"submit",class:"py-1.5 px-4 rounded text-red-600 bg-white border-2 border-red-600 hover:text-white hover:bg-red-600 duration-200"}," Se déconnecter ",-1)]),32)])])])],64))}});export{b as default};
