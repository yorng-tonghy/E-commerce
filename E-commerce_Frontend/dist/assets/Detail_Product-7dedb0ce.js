import{_ as n,b as r,r as _,o as p,c as h,a as t,d as o,w as i,t as l,e as c,f as a}from"./index-fec06847.js";const v={data(){return{product:{image:""}}},mounted(){r.get("http://localhost:9000/detail/"+localStorage.getItem("selectedItem")).then(d=>{this.product=d.data,console.log(this.product)})}},m={lang:"en"},u=c('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Home-Page-E-Commerce</title><link rel="stylesheet" href="style.css"><link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"></head>',1),g={class:"header__section"},f={class:"header__wrapper"},b=t("div",{class:"header__logo"},[t("h2",null,"NIKEEE")],-1),y={class:"header__nav_item"},w={href:"#"},x={href:"#"},P={href:"#"},S={href:"#"},k={class:"header__cart"},A={class:"login"},C={class:"main_wrapper"},D={class:"main_wrapper"},E={class:"left_side"},B={class:"top_box"},I=["src"],T={class:"box_row_1"},V={class:"box 1"},H=["src"],K={class:"box 2"},M=["src"],N={class:"box_row_2"},F={class:"box 1"},U=["src"],j={class:"box 2"},q=["src"],z={class:"right_side"},G=t("div",{class:"title"},null,-1),J=t("div",{class:"name"},[t("p",null,"Home/Shoes")],-1),L={class:"type"},O={class:"price"},Z=c('<select name="" id=""><option value="">M 3.5 / W 5</option><option value="">M 4 /W 5.5</option></select><div class="Add_to_cart"><a href="#">ADD TO CART</a></div>',2),Q={class:"desc"},R=t("b",null,"Product Details",-1),W=t("br",null,null,-1),X=c('<section class="footer__section"><div class="footer__wrapper"><div class="item1"><div class="footer_logo"><h1>NIKEEE</h1></div><div class="footer_contact"><p>Contact</p></div><div class="footer_address"><p>Address: 210 road,Street 30, PhnomPenh</p></div><div class="footer_phone"><p>Phone: +855012312322</p></div><div class="footer_time"><p>Hours: 8:00-20:00, Mon-Fri</p></div></div><div class="item2"><p><a href="#">About</a></p><p><a href="#">About Us</a></p><p><a href="#">Privacy Policy</a></p><p><a href="#">Term &amp; Condition</a></p><p><a href="#">Contact Us</a></p></div><div class="item3"><p><a href="#">My Account</a></p><p><a href="#">Sign In</a></p><p><a href="#">View Cart</a></p><p><a href="#">Track My Order</a></p><p><a href="#">Help</a></p></div><div class="item4"><div class="app"><p>Install App</p></div><div class="app_desc"><p>From App Store or Google Play</p></div><div class="app_box_wrapper"><div class="appStore_box"><div class="appStore_logo"><i class="bx bxl-apple"></i></div><div class="appStore_text_wrapper"><p>Download on the</p><p><b>App Store</b></p></div></div><div class="playStore_box"><div class="playStore_logo"><i class="bx bxl-play-store"></i></div><div class="playStore_text"><p><b>GooglePlay</b></p></div></div></div><div class="payment_wrapper"><div class="payment_text"><p>Secured Payment Gateways</p></div><div class="payment_logo"><img src="https://i.pinimg.com/originals/e2/33/f5/e233f5b0c5a358449398f202b03f063a.jpg" alt=""><img src="https://play-lh.googleusercontent.com/-deHHbwBUh2I4dzTjq9n4ggBGPqJwKzj9pwvPqyaR-hPxzKN9QVJOBsZP_ShlCDmX60" alt=""><img src="https://www.acledabank.com.kh/kh/assets/download_material/download-logo-icon.png" alt=""><img src="https://play-lh.googleusercontent.com/lKebetEHVDuBrbq5KJJ4MK6V6BaFuo0Mj9Qy9YZkoenrEDZVU-IzLrbAuoKMaCT4nA" alt=""></div></div></div></div></section>',1);function Y(d,$,tt,st,s,et){const e=_("router-link");return p(),h("html",m,[u,t("body",null,[t("section",g,[t("div",f,[b,t("div",y,[t("ul",null,[t("li",null,[t("a",w,[o(e,{to:"/"},{default:i(()=>[a("Home")]),_:1})])]),t("li",null,[t("a",x,[o(e,{to:"/landing"},{default:i(()=>[a("Landing")]),_:1})])]),t("li",null,[t("a",P,[o(e,{to:"/detail"},{default:i(()=>[a("Detail")]),_:1})])]),t("li",null,[t("a",S,[o(e,{to:"/contact"},{default:i(()=>[a("Contact")]),_:1})])])])]),t("div",k,[o(e,{to:"/cart"},{default:i(()=>[a("Cart(0)")]),_:1})]),t("div",A,[o(e,{to:"/login"},{default:i(()=>[a("Login")]),_:1})])])]),t("div",C,[t("div",D,[t("div",E,[t("div",B,[t("img",{src:s.product.image,alt:""},null,8,I)]),t("div",T,[t("div",V,[t("img",{src:s.product.imgFront,alt:""},null,8,H)]),t("div",K,[t("img",{src:s.product.imgBottom,alt:""},null,8,M)])]),t("div",N,[t("div",F,[t("img",{src:s.product.imgFar,alt:""},null,8,U)]),t("div",j,[t("img",{src:s.product.imgTop,alt:""},null,8,q)])])]),t("div",z,[G,J,t("div",L,[t("p",null,l(s.product.name),1)]),t("div",O,[t("p",null,l(s.product.price),1)]),Z,t("div",Q,[R,W,t("p",null,l(s.product.desc),1)])])])]),X])])}const it=n(v,[["render",Y]]);export{it as default};