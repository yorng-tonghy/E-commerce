import{_ as c,b as m,r as a,o as g,c as x,a as t,d as r,w as i,j as f,g as n,v as s,f as p}from"./index-fec06847.js";const v={data(){return{products:{name:null,brand:null,image:null,price:null,imgBottom:null,imgTop:null,imgFar:null,Desc:null}}},methods:{sendPost2(){m.post(`${{}.VUE_APP_NAME}/products`,this.products).then(u=>{console.log(u.data)}).catch(u=>{console.log(u)})}}},V={class:"main"},y={class:"left_side"},h={class:"left_side_wrapper"},P=t("div",{class:"logo"},"NIKEEE",-1),N={class:"contents"},U={class:"logout_"},w={class:"right_wrapper"},b=t("h3",null,"Add New Product",-1),B=t("br",null,null,-1),D=t("tr",null,[t("td",null,"ID:"),t("td",null,[t("input",{type:"text"})])],-1),I=t("td",null,"Name:",-1),T=t("td",null,"Brand:",-1),A=t("td",null,"Image:",-1),E=t("td",null,"Front-Image: ",-1),F=t("td",null,"Distance-Image: ",-1),k=t("td",null,"Bottom-Image: ",-1),C=t("td",null,"Top-Image: ",-1),M=t("td",null,"Price",-1),O=t("td",null,"Description:",-1),S=t("button",null,"ADD NOW",-1);function j(u,l,K,L,e,_){const d=a("router-link");return g(),x("div",V,[t("div",y,[t("div",h,[P,t("div",N,[r(d,{to:"/contact_admin"},{default:i(()=>[p("Contacts")]),_:1}),r(d,{to:"/product"},{default:i(()=>[p("Products")]),_:1}),r(d,{to:"/reciepts"},{default:i(()=>[p("Reciepts")]),_:1})]),t("div",U,[r(d,{to:"/logout"},{default:i(()=>[p("Logout")]),_:1})])])]),t("div",w,[b,B,t("form",{method:"POST",onSubmit:l[9]||(l[9]=f((...o)=>_.sendPost2&&_.sendPost2(...o),["prevent"]))},[t("table",null,[D,t("tr",null,[I,t("td",null,[n(t("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=o=>e.products.name=o)},null,512),[[s,e.products.name]])])]),t("tr",null,[T,t("td",null,[n(t("input",{type:"text","onUpdate:modelValue":l[1]||(l[1]=o=>e.products.brand=o)},null,512),[[s,e.products.brand]])])]),t("tr",null,[A,t("td",null,[n(t("input",{type:"text","onUpdate:modelValue":l[2]||(l[2]=o=>e.products.image=o)},null,512),[[s,e.products.image]])])]),t("tr",null,[E,t("td",null,[n(t("input",{type:"text","onUpdate:modelValue":l[3]||(l[3]=o=>u.imgFront=o)},null,512),[[s,u.imgFront]])])]),t("tr",null,[F,t("td",null,[n(t("input",{type:"text","onUpdate:modelValue":l[4]||(l[4]=o=>e.products.imgFar=o)},null,512),[[s,e.products.imgFar]])])]),t("tr",null,[k,t("td",null,[n(t("input",{type:"text","onUpdate:modelValue":l[5]||(l[5]=o=>e.products.imgBottom=o)},null,512),[[s,e.products.imgBottom]])])]),t("tr",null,[C,t("td",null,[n(t("input",{type:"text","onUpdate:modelValue":l[6]||(l[6]=o=>e.products.imgTop=o)},null,512),[[s,e.products.imgTop]])])]),t("tr",null,[M,t("td",null,[n(t("input",{type:"text","onUpdate:modelValue":l[7]||(l[7]=o=>e.products.price=o)},null,512),[[s,e.products.price]])])]),t("tr",null,[O,t("td",null,[n(t("input",{type:"text","onUpdate:modelValue":l[8]||(l[8]=o=>e.products.desc=o)},null,512),[[s,e.products.desc]])])]),S])],32)])])}const W=c(v,[["render",j]]);export{W as default};