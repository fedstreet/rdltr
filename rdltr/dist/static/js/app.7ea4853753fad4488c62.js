webpackJsonp([1],{I09S:function(e,t){},KetJ:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("/5sW"),a={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{attrs:{id:"header"}},[r("div",{staticClass:"logo"},[r("router-link",{attrs:{to:"/"}},[e._v("rdltr")])],1),e._v(" "),r("nav",[r("ul",[e.auth?e._e():r("li",[r("router-link",{attrs:{to:"/register"}},[e._v("Register")])],1),e._v(" "),e.auth?e._e():r("li",[r("router-link",{attrs:{to:"/login"}},[e._v("Log in")])],1),e._v(" "),e.auth?r("li",{staticClass:"user"},[r("router-link",{attrs:{to:"/profile"}},[e._v(e._s(e.username))])],1):e._e(),e._v(" "),e.auth?r("li",[r("button",{staticClass:"logout",on:{click:e.onLogout}},[e._v("Logout")])]):e._e()])])])},staticRenderFns:[]};var o={name:"app",components:{"app-header":r("VU/8")({computed:{auth:function(){return this.$store.getters.isAuthenticated},username:function(){return this.$store.getters.user.username}},methods:{onLogout:function(){this.$store.dispatch("logout")}}},a,!1,function(e){r("PT1j")},"data-v-f58356b4",null).exports}},n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("app-header"),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var i=r("VU/8")(o,n,!1,function(e){r("KetJ")},null,null).exports,u=r("/ocq"),l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"actionType"}},[r("div",{staticClass:"user-form"},[r("form",[r("div",{staticClass:"input"},[r("label",{attrs:{for:"username"}},[e._v("Username")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],attrs:{id:"username",disabled:""},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"input"},[r("label",{attrs:{for:"email"}},[e._v("Email")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],attrs:{type:"email",id:"email",disabled:""},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"input"},[r("label",{attrs:{for:"email"}},[e._v("Inscription date")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.created_at,expression:"user.created_at"}],attrs:{id:"creationDate",disabled:""},domProps:{value:e.user.created_at},on:{input:function(t){t.target.composing||e.$set(e.user,"created_at",t.target.value)}}})]),e._v(" "),"editProfile"===e.actionType?r("div",{staticClass:"input"},[r("label",{attrs:{for:"password"}},[e._v("Old password")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.oldPassword,expression:"oldPassword"}],attrs:{type:"password",id:"oldPassword"},domProps:{value:e.oldPassword},on:{input:function(t){t.target.composing||(e.oldPassword=t.target.value)}}})]):e._e(),e._v(" "),"editProfile"===e.actionType?r("div",{staticClass:"input"},[r("label",{attrs:{for:"password"}},[e._v("New password")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newPassword,expression:"newPassword"}],attrs:{type:"password",id:"password"},domProps:{value:e.newPassword},on:{input:function(t){t.target.composing||(e.newPassword=t.target.value)}}})]):e._e(),e._v(" "),"editProfile"===e.actionType?r("div",{staticClass:"input"},[r("label",{attrs:{for:"confirm-password"}},[e._v("Confirm New Password")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmNewPassword,expression:"confirmNewPassword"}],attrs:{type:"password",id:"confirm-password"},domProps:{value:e.confirmNewPassword},on:{input:function(t){t.target.composing||(e.confirmNewPassword=t.target.value)}}})]):e._e(),e._v(" "),"editProfile"===e.actionType?r("div",{staticClass:"submit"},[r("button",{attrs:{type:"submit"},on:{click:function(t){t.preventDefault(),e.onSubmit()}}},[e._v("Submit")]),e._v(" "),r("router-link",{staticClass:"cancel",attrs:{to:"/profile",tag:"button"}},[e._v("Cancel")])],1):r("div",{staticClass:"submit"},[r("router-link",{attrs:{to:"/profile/edit",tag:"button"}},[e._v("Change password")])],1)]),e._v(" "),e.errMessage?r("p",{staticClass:"user-error"},[e._v(e._s(e.errMessage))]):e._e()])])},staticRenderFns:[]};var c=r("VU/8")({props:["actionType"],data:function(){return{oldPassword:"",newPassword:"",confirmNewPassword:""}},computed:{errMessage:function(){return this.$store.getters.userErrorMessage},user:function(){return this.$store.getters.user}},methods:{onSubmit:function(){var e=this,t={old_password:this.oldPassword,new_password:this.newPassword,new_password_conf:this.confirmNewPassword};this.$store.dispatch("updateProfile",t).then(function(){e.oldPassword="",e.newPassword="",e.confirmNewPassword=""})}}},l,!1,function(e){r("n3H0")},"data-v-2537bad2",null).exports,d={render:function(){var e=this.$createElement;return(this._self._c||e)("p",[this._v("404 - Not Found")])},staticRenderFns:[]};var p=r("VU/8")(null,d,!1,function(e){r("dkey")},"data-v-3ea2f417",null).exports,m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"welcome"}},[t("h1",[this._v("rdltr")]),this._v(" "),t("p",[this._v('a simple "read-it later" app!')])])}]};var v=r("VU/8")(null,m,!1,function(e){r("I09S")},"data-v-646c334b",null).exports,f={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"actionType"}},[r("div",{staticClass:"user-form"},[r("form",{on:{submit:function(t){t.preventDefault(),e.onSubmit(e.actionType)}}},["register"===e.actionType?r("div",{staticClass:"input"},[r("label",{attrs:{for:"username"}},[e._v("Username")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{id:"username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]):e._e(),e._v(" "),r("div",{staticClass:"input"},[r("label",{attrs:{for:"email"}},[e._v("Email")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"input"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),"register"===e.actionType?r("div",{staticClass:"input"},[r("label",{attrs:{for:"confirm-password"}},[e._v("Confirm Password")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmPassword,expression:"confirmPassword"}],attrs:{type:"password",id:"confirm-password"},domProps:{value:e.confirmPassword},on:{input:function(t){t.target.composing||(e.confirmPassword=t.target.value)}}})]):e._e(),e._v(" "),e._m(0)]),e._v(" "),e.errMessage?r("p",{staticClass:"user-error"},[e._v(e._s(e.errMessage))]):e._e()])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"submit"},[t("button",{attrs:{type:"submit"}},[this._v("Submit")])])}]};var g=r("VU/8")({props:["actionType"],data:function(){return{username:"",email:"",password:"",confirmPassword:""}},computed:{errMessage:function(){return this.$store.getters.userErrorMessage}},methods:{onSubmit:function(e){var t={email:this.email,password:this.password};return"register"===e&&(t.username=this.username,t.password_conf=this.confirmPassword),this.$store.dispatch("loginOrRegister",{actionType:e,formData:t})}}},f,!1,function(e){r("Z8gl")},"data-v-298946cc",null).exports,h=r("NYxO"),w=r("mtWM"),_=r.n(w),P=_.a.create({baseURL:"http://localhost:5000/api"}),b=r("//Fk"),T=r.n(b),y=_.a.create({baseURL:"http://localhost:5000/api"});y.interceptors.request.use(function(e){if(C.state.user.authToken){var t="Bearer "+C.state.user.authToken;e.headers.Authorization!==t&&(e.headers.Authorization="Bearer "+C.state.user.authToken)}return e},function(e){return T.a.reject(e)});var E=y,k={state:{authToken:null,user:{},userErrorMessage:null},getters:{isAuthenticated:function(e){return null!==e.authToken},user:function(e){return e.user},userErrorMessage:function(e){return e.userErrorMessage}},mutations:{authUser:function(e,t){e.authToken=t,e.userErrorMessage=null},clearUserData:function(e,t){e.authToken=null,e.user={},e.userErrorMessage=null},updateErrorMsg:function(e,t){e.userErrorMessage=t},userProfile:function(e,t){e.user=t}},actions:{checkUserAuth:function(e){var t=e.commit,r=e.dispatch;window.localStorage.authToken&&(t("authUser",window.localStorage.authToken),r("getUserProfile"))},getUserProfile:function(e){var t=e.commit;E.get("auth/profile").then(function(e){"success"===e.data.status&&t("userProfile",e.data.user)}).catch(function(e){if(e.response)return t("updateErrorMsg",e.response.data.message);t("updateErrorMsg",e.message?e.message:"error on profile")})},loginOrRegister:function(e,t){var r=e.commit,s=e.dispatch;P.post("/auth/"+t.actionType,t.formData).then(function(e){if("success"===e.data.status){var t=e.data.auth_token;window.localStorage.setItem("authToken",t),r("authUser",t),s("getUserProfile"),U.replace("/")}}).catch(function(e){if(e.response)return r("updateErrorMsg",e.response.data.message);r("updateErrorMsg",e.message?e.message:"error on "+t.actionType)})},logout:function(e){(0,e.commit)("clearUserData"),localStorage.removeItem("authToken"),U.replace("/login")},updateProfile:function(e,t){var r=e.commit;e.dispatch;E.post("/auth/profile/edit",t).then(function(e){"success"===e.data.status&&U.replace("/profile")}).catch(function(e){if(e.response)return r("updateErrorMsg",e.response.data.message);r("updateErrorMsg",e.message?e.message:"error on update password")})}}};s.a.use(h.a);var C=new h.a.Store({state:{},mutations:{},actions:{},getters:{},modules:{user:k}});function M(e,t,r){C.dispatch("checkUserAuth").then(function(){return C.getters.isAuthenticated&&["/login","/register"].includes(e.path)?r("/"):C.getters.isAuthenticated||["/login","/register"].includes(e.path)?void 0:r("/login")}),r()}s.a.use(u.a);var N=[{path:"/",component:v,beforeEnter:M},{path:"/register",component:g,props:{actionType:"register"},beforeEnter:M},{path:"/login",component:g,props:{actionType:"login"},beforeEnter:M},{path:"/profile",component:c,props:{actionType:"viewProfile"},beforeEnter:M},{path:"/profile/edit",component:c,props:{actionType:"editProfile"},beforeEnter:M},{path:"*",component:p}],U=new u.a({mode:"history",routes:N});s.a.config.productionTip=!1,new s.a({el:"#app",router:U,store:C,render:function(e){return e(i)}})},PT1j:function(e,t){},Z8gl:function(e,t){},dkey:function(e,t){},n3H0:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.7ea4853753fad4488c62.js.map