import{_ as d,b as u,r as c,o as _,c as m,a as e,d as p,w as h,j as b,g as l,v as i,e as f,f as g}from"./index-b0c98122.js";const v={data(){return{users:{name:null,email:null,pwd:null}}},methods:{sendPost(){u.post("https://nikee-commerce.onrender.com/users",this.users).then(n=>{console.log(n.data)}).catch(n=>{console.log(n)})}}},w={lang:"en"},x=f('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Home-Page-E-Commerce</title><link rel="stylesheet" href="style.css"><link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"></head>',1),y={class:"login_wrapper"},k=e("h1",null,"Sign Up",-1),U=e("p",null,"Dont' have an account?",-1),V={class:"box_login"},P={class:"myform"},N=e("label",{for:"name"},"Name:",-1),S=e("br",null,null,-1),B=e("br",null,null,-1),C=e("label",{for:"email"},"Email:",-1),E=e("br",null,null,-1),T=e("br",null,null,-1),D=e("label",{for:"password"},"Password:",-1),M=e("br",null,null,-1),j=e("br",null,null,-1),q=e("button",null,"SignUp",-1);function A(n,s,F,H,o,r){const a=c("router-link");return _(),m("html",w,[x,e("body",null,[e("div",y,[k,U,p(a,{to:"/login"},{default:h(()=>[g("Back to Login")]),_:1}),e("div",V,[e("form",{method:"POST",onSubmit:s[3]||(s[3]=b((...t)=>r.sendPost&&r.sendPost(...t),["prevent"]))},[e("div",P,[N,S,l(e("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=t=>o.users.name=t)},null,512),[[i,o.users.name]]),B,C,E,l(e("input",{type:"email","onUpdate:modelValue":s[1]||(s[1]=t=>o.users.email=t)},null,512),[[i,o.users.email]]),T,D,M,l(e("input",{type:"password","onUpdate:modelValue":s[2]||(s[2]=t=>o.users.pwd=t)},null,512),[[i,o.users.pwd]]),j,q])],32)])])])])}const L=d(v,[["render",A]]);export{L as default};