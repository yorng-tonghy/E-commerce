import{_ as n,b as r,r as _,o as p,c as h,a as t,d as o,w as i,t as c,e as l,f as a}from"./index-b0c98122.js";const v={data(){return{product:{image:""}}},mounted(){r.get("https://nikee-commerce.onrender.com/detail/"+localStorage.getItem("selectedItem")).then(d=>{this.product=d.data,console.log(this.product)})}},m={lang:"en"},u=l('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Home-Page-E-Commerce</title><link rel="stylesheet" href="style.css"><link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"></head>',1),g={class:"header__section"},f={class:"header__wrapper"},b=t("div",{class:"header__logo"},[t("h2",null,"NIKEEE")],-1),y={class:"header__nav_item"},w={href:"#"},x={href:"#"},P={href:"#"},S={class:"header__cart"},k={class:"main_wrapper"},A={class:"main_wrapper"},C={class:"left_side"},E={class:"top_box"},D=["src"],B={class:"box_row_1"},I={class:"box 1"},T=["src"],V={class:"box 2"},H=["src"],K={class:"box_row_2"},M={class:"box 1"},N=["src"],F={class:"box 2"},U=["src"],j={class:"right_side"},q=t("div",{class:"title"},null,-1),z=t("div",{class:"name"},[t("p",null,"Home/Shoes")],-1),G={class:"type"},J={class:"price"},L=l('<select name="" id=""><option value="">M 3.5 / W 5</option><option value="">M 4 /W 5.5</option></select><div class="Add_to_cart"><a href="#">ADD TO CART</a></div>',2),O={class:"desc"},Z=t("b",null,"Product Details",-1),Q=t("br",null,null,-1),R=l('<section class="footer__section"><div class="footer__wrapper"><div class="item1"><div class="footer_logo"><h1>NIKEEE</h1></div><div class="footer_contact"><p>Contact</p></div><div class="footer_address"><p>Address: 210 road,Street 30, PhnomPenh</p></div><div class="footer_phone"><p>Phone: +855012312322</p></div><div class="footer_time"><p>Hours: 8:00-20:00, Mon-Fri</p></div></div><div class="item2"><p><a href="#">About</a></p><p><a href="#">About Us</a></p><p><a href="#">Privacy Policy</a></p><p><a href="#">Term &amp; Condition</a></p><p><a href="#">Contact Us</a></p></div><div class="item3"><p><a href="#">My Account</a></p><p><a href="#">Sign In</a></p><p><a href="#">View Cart</a></p><p><a href="#">Track My Order</a></p><p><a href="#">Help</a></p></div><div class="item4"><div class="app"><p>Install App</p></div><div class="app_desc"><p>From App Store or Google Play</p></div><div class="app_box_wrapper"><div class="appStore_box"><div class="appStore_logo"><i class="bx bxl-apple"></i></div><div class="appStore_text_wrapper"><p>Download on the</p><p><b>App Store</b></p></div></div><div class="playStore_box"><div class="playStore_logo"><i class="bx bxl-play-store"></i></div><div class="playStore_text"><p><b>GooglePlay</b></p></div></div></div><div class="payment_wrapper"><div class="payment_text"><p>Secured Payment Gateways</p></div><div class="payment_logo"><img src="https://i.pinimg.com/originals/e2/33/f5/e233f5b0c5a358449398f202b03f063a.jpg" alt=""><img src="https://play-lh.googleusercontent.com/-deHHbwBUh2I4dzTjq9n4ggBGPqJwKzj9pwvPqyaR-hPxzKN9QVJOBsZP_ShlCDmX60" alt=""><img src="https://www.acledabank.com.kh/kh/assets/download_material/download-logo-icon.png" alt=""><img src="https://play-lh.googleusercontent.com/lKebetEHVDuBrbq5KJJ4MK6V6BaFuo0Mj9Qy9YZkoenrEDZVU-IzLrbAuoKMaCT4nA" alt=""></div></div></div></div></section>',1);function W(d,X,Y,$,e,tt){const s=_("router-link");return p(),h("html",m,[u,t("body",null,[t("section",g,[t("div",f,[b,t("div",y,[t("ul",null,[t("li",null,[t("a",w,[o(s,{to:"/"},{default:i(()=>[a("Home")]),_:1})])]),t("li",null,[t("a",x,[o(s,{to:"/landing"},{default:i(()=>[a("Landing")]),_:1})])]),t("li",null,[t("a",P,[o(s,{to:"/contact"},{default:i(()=>[a("Contact")]),_:1})])])])]),t("div",S,[t("ul",null,[o(s,{to:"/cart"},{default:i(()=>[a("Cart")]),_:1}),o(s,{to:"/login"},{default:i(()=>[a("Login")]),_:1})])])])]),t("div",k,[t("div",A,[t("div",C,[t("div",E,[t("img",{src:e.product.image,alt:""},null,8,D)]),t("div",B,[t("div",I,[t("img",{src:e.product.imgFront,alt:""},null,8,T)]),t("div",V,[t("img",{src:e.product.imgBottom,alt:""},null,8,H)])]),t("div",K,[t("div",M,[t("img",{src:e.product.imgFar,alt:""},null,8,N)]),t("div",F,[t("img",{src:e.product.imgTop,alt:""},null,8,U)])])]),t("div",j,[q,z,t("div",G,[t("p",null,c(e.product.name),1)]),t("div",J,[t("p",null,c(e.product.price),1)]),L,t("div",O,[Z,Q,t("p",null,c(e.product.desc),1)])])])]),R])])}const st=n(v,[["render",W]]);export{st as default};