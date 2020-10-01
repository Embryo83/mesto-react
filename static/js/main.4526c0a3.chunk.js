(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(3),r=a.n(c),i=(a(12),a(1)),l=a(4),s=a.n(l);var p=function(){return o.a.createElement("header",{className:"header section"},o.a.createElement("img",{className:"logo",src:s.a,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f \u041c\u0435\u0441\u0442\u043e"}))};var u=function(e){return o.a.createElement("li",{className:"element"},o.a.createElement("img",{src:e.card.link,className:"element__item",alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),o.a.createElement("button",{type:"button",className:"element__delete-button"}),o.a.createElement("div",{className:"element__caption"},o.a.createElement("h2",{className:"element__title"},e.card.name),o.a.createElement("div",{className:"element__like-container"},o.a.createElement("button",{type:"button",className:"element__like-button"}),o.a.createElement("span",{className:"element__like-counter"},"0"))))},m=a(5),_=a(6),d=new(function(){function e(t){var a=t.baseUrl,n=t.token;Object(m.a)(this,e),this._baseUrl=a,this._token=n}return Object(_.a)(e,[{key:"checkRes",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:{authorization:this._token}}).then(this.checkRes)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:{authorization:this._token}}).then(this.checkRes)}},{key:"addNewCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then(this.checkRes)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this.checkRes)}},{key:"handleLike",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:{authorization:this._token}}).then(this.checkRes)}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then(this.checkRes)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.link})}).then(this.checkRes)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-15",token:"f1c23b59-12ef-41ca-b659-2fe3930a6862"});var h=function(e){var t=o.a.useState(),a=Object(i.a)(t,2),n=a[0],c=a[1],r=o.a.useState(),l=Object(i.a)(r,2),s=l[0],p=l[1],m=o.a.useState(),_=Object(i.a)(m,2),h=_[0],f=_[1],E=o.a.useState([]),b=Object(i.a)(E,2),k=b[0],N=b[1];return o.a.useEffect((function(){Promise.all([d.getInitialCards(),d.getUserInfo()]).then((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];c(n.name),p(n.about),f(n.avatar),N(a)})).catch((function(e){return console.log(e)}))}),[]),o.a.createElement("main",{className:"page__content"},o.a.createElement("section",{className:"profile section section_narrow"},o.a.createElement("div",{className:"profile__content"},o.a.createElement("div",{className:"profile__user"},o.a.createElement("img",{alt:"\u0410\u0432\u0430\u0442\u0430\u0440",src:h,className:"profile__avatar"}),o.a.createElement("button",{type:"button",onClick:e.onEditAvatar,className:"profile__avatar-button"})),o.a.createElement("div",{className:"profile__info"},o.a.createElement("div",{className:"profile__info-header"},o.a.createElement("h1",{className:"profile__title"},n),o.a.createElement("button",{type:"button",onClick:e.onEditProfile,className:"profile__edit-button"})),o.a.createElement("h2",{className:"profile__subtitle"},s)),o.a.createElement("button",{type:"button",onClick:e.onAddPlace,className:"profile__add-button"}))),o.a.createElement("section",{className:"elements section section_narrow"},o.a.createElement("ul",{className:"elements__list"},k.map((function(t){return o.a.createElement(u,{card:t,key:t._id,onCardClick:e.onCardClick})})))))};var f=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var E=function(e){return o.a.createElement("section",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_is-open":"")},o.a.createElement("div",{className:"popup__container"},o.a.createElement("button",{type:"button",className:"popup__close-button",onClick:e.onClose}),o.a.createElement("h2",{className:"popup__title"},e.title),o.a.createElement("form",{action:"#",name:e.name,className:"popup__form",noValidate:!0},e.children,o.a.createElement("button",{type:"submit",className:"popup__submit-button",disabled:!0},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))};var b=function(e){return o.a.createElement("section",{className:"popup popup_type_photo ".concat(e.card.link?"popup_is-open":"")},o.a.createElement("figure",{className:"popup__container_type_photo"},o.a.createElement("button",{type:"button",className:"popup__close-button",onClick:e.onClose}),o.a.createElement("img",{src:e.card.link,alt:e.card.name,className:"popup__photo"}),o.a.createElement("figcaption",{className:"popup__caption"},e.card.name)))};var k=function(){var e=o.a.useState(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],c=o.a.useState(!1),r=Object(i.a)(c,2),l=r[0],s=r[1],u=o.a.useState(!1),m=Object(i.a)(u,2),_=m[0],d=m[1],k=o.a.useState({}),N=Object(i.a)(k,2),v=N[0],y=N[1];function C(){s(!1),n(!1),d(!1),y({})}return o.a.createElement("div",{className:"page"},o.a.createElement("div",{className:"page__container"},o.a.createElement(p,null),o.a.createElement(h,{onEditProfile:function(){s(!0)},onEditAvatar:function(){n(!0)},onAddPlace:function(){d(!0)},onCardClick:function(e){y(e)}}),o.a.createElement(f,null)),o.a.createElement(E,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",isOpen:a,onClose:C},o.a.createElement("input",{autoComplete:"off",id:"avatar-input",type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_type_ava",required:!0}),o.a.createElement("span",{id:"avatar-input-error",className:"popup__error"})),o.a.createElement(E,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",isOpen:l,onClose:C},o.a.createElement("input",{autoComplete:"off",id:"name-input",type:"text",name:"name",placeholder:"\u0418\u043c\u044f",className:"popup__input popup__input_type_name",minLength:"2",maxLength:"40",required:!0}),o.a.createElement("span",{id:"name-input-error",className:"popup__error"}),o.a.createElement("input",{type:"text",name:"job",placeholder:"\u041e \u0441\u0435\u0431\u0435",className:"popup__input popup__input_type_job",id:"job-input",minLength:"2",maxLength:"200",autoComplete:"off",required:!0}),o.a.createElement("span",{className:"popup__error",id:"job-input-error"})),o.a.createElement(E,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add",isOpen:_,onClose:C},o.a.createElement("input",{type:"text",name:"place",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input popup__input_type_place",id:"place-input",minLength:"1",maxLength:"30",autoComplete:"off",required:!0}),o.a.createElement("span",{className:"popup__error",id:"place-input-error"}),o.a.createElement("input",{type:"url",name:"link",placeholder:"C\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_type_link",id:"url-input",autoComplete:"off",required:!0}),o.a.createElement("span",{className:"popup__error",id:"url-input-error"})),o.a.createElement(b,{card:v,onClose:C}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,a){e.exports=a.p+"static/media/logo.94cbab21.svg"},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.4526c0a3.chunk.js.map