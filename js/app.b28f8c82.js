(function(){"use strict";var t={9185:function(t,a,e){var o=e(6369),n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"bg-dark container"},[0==t.uzytk?a("div",{staticClass:"row",staticStyle:{"text-align":"center"}},[a("div",{staticClass:"col-sm-4"}),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginUser.email,expression:"loginUser.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.loginUser.email},on:{input:function(a){a.target.composing||t.$set(t.loginUser,"email",a.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginUser.password,expression:"loginUser.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Hasło"},domProps:{value:t.loginUser.password},on:{input:function(a){a.target.composing||t.$set(t.loginUser,"password",a.target.value)}}})]),a("button",{staticClass:"btn btn-success",staticStyle:{"margin-bottom":"5px","margin-top":"10px"},attrs:{type:"button"},on:{click:function(a){return t.logowanie()}}},[t._v(" Login ")]),a("div"),a("button",{staticClass:"btn btn-success",staticStyle:{"margin-bottom":"10px"},attrs:{type:"button"},on:{click:function(a){return t.logowanieGoogle()}}},[t._v(" Login with Google ")])])]):0==t.zbiorkadodawanie&&0==t.edycjaOSOB&&0==t.edycjaZBIOREK?a("div",{staticClass:"container",staticStyle:{"text-align":"center"}},[a("div",{staticClass:"row"},[a("TabelkaZbiorki",{attrs:{skladka:t.skladka,listaOsob:t.osoby},on:{wejscie:t.wejscieZbiorka}}),a("div",{staticClass:"col-sm-3"}),a("div",{staticClass:"col-sm-6"},[a("button",{staticClass:"btn btn-success",staticStyle:{"margin-bottom":"5px","margin-top":"10px"},attrs:{type:"button"},on:{click:function(a){t.edycjaOSOB=!0}}},[t._v(" Edycja osób ")]),a("div"),a("button",{staticClass:"btn btn-success",staticStyle:{"margin-bottom":"5px","margin-top":"10px"},attrs:{type:"button"},on:{click:function(a){t.edycjaZBIOREK=!0}}},[t._v(" Edycja Zbiórek ")])]),a("div",{staticClass:"col-sm-3"})],1)]):1==t.zbiorkadodawanie&&0==t.edycjaOSOB&&0==t.edycjaZBIOREK?a("div",{staticStyle:{"text-align":"center"}},[a("TabelaWplat",{attrs:{listaOsob:t.osoby,wplaty:t.Wplaty,wplatySkladka:t.skladkacopy},on:{zaplacil:t.placi,usun:t.usuwanie,edytowanie:t.zbiorkaedycja}}),a("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(a){t.zbiorkadodawanie=!1}}},[t._v(" Wróc ")])],1):0==t.zbiorkadodawanie&&0==t.edycjaOSOB&&1==t.edycjaZBIOREK?a("div",{staticStyle:{"text-align":"center"}},[a("TabelaSkladki",{attrs:{skladka:t.skladka},on:{usuniencie:t.skladkausuwanie,zapisywanie:t.skladkaedycja}}),a("WpisywanieSkladki",{attrs:{danezbiorki:t.zbiorka},on:{dodaj:t.skladkadodawanie}}),a("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(a){t.zbiorkadodawanie=!1,t.edycjaOSOB=!1,t.edycjaZBIOREK=!1}}},[t._v(" Wróc ")])],1):0==t.zbiorkadodawanie&&1==t.edycjaOSOB&&0==t.edycjaZBIOREK?a("div",{staticStyle:{"text-align":"center"}},[a("TabelaOsob",{attrs:{listaOsob:t.osoby},on:{usuniencie:t.usuwanieosoby,zapisywanie:t.edycjaosoby}}),a("WpisywanieOsob",{attrs:{daneosoba:t.osoba},on:{dodaj:t.dodawanieosoby}}),a("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(a){t.zbiorkadodawanie=!1,t.edycjaOSOB=!1,t.edycjaZBIOREK=!1}}},[t._v(" Wróc ")])],1):t._e()])},s=[],i=(e(7658),e(4287)),l=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container"},[a("form",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-3"}),a("div",{staticClass:"col-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.danezbiorkiclon.Nazwa,expression:"danezbiorkiclon.Nazwa"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nazwa"},domProps:{value:t.danezbiorkiclon.Nazwa},on:{input:function(a){a.target.composing||t.$set(t.danezbiorkiclon,"Nazwa",a.target.value)}}})]),a("div",{staticClass:"col-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.danezbiorkiclon.KwotaOdOsoby,expression:"danezbiorkiclon.KwotaOdOsoby"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Kwota od osoby"},domProps:{value:t.danezbiorkiclon.KwotaOdOsoby},on:{input:function(a){a.target.composing||t.$set(t.danezbiorkiclon,"KwotaOdOsoby",a.target.value)}}})]),a("div",{staticClass:"col-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.danezbiorkiclon.IleDoZebrania,expression:"danezbiorkiclon.IleDoZebrania"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Kwota do zebrania"},domProps:{value:t.danezbiorkiclon.IleDoZebrania},on:{input:function(a){a.target.composing||t.$set(t.danezbiorkiclon,"IleDoZebrania",a.target.value)}}})]),a("div",{staticClass:"col-3"})]),a("div",{staticClass:"row",staticStyle:{"text-align":"center"}},[a("div",{staticClass:"col-5"}),a("div",{staticClass:"col-2"},[a("button",{staticClass:"btn btn-light",staticStyle:{margin:"10px"},attrs:{type:"button"},on:{click:function(a){return t.$emit("dodaj",t.danezbiorkiclon)}}},[t._v(" Potwierdz ")])])])])])},r=[],c={name:"WpisywanieSkladki",props:["danezbiorki"],data(){var t=Object.assign({},this.danezbiorki);return{danezbiorkiclon:t}}},d=c,u=e(1001),b=(0,u.Z)(d,l,r,!1,null,null,null),p=b.exports,k=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"}),a("div",{staticClass:"col-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.szukane,expression:"szukane"}],staticClass:"form-control",staticStyle:{margin:"10px"},attrs:{type:"text",placeholder:"Wyszukaj Składki"},domProps:{value:t.szukane},on:{input:function(a){a.target.composing||(t.szukane=a.target.value)}}})]),a("table",{staticClass:"table table-bordered table-striped table-dark"},[t._m(0),a("tbody",t._l(t.skladka.filter(t.walonefiltrowanie),(function(e){return a("WierszSkladki",{key:e.id,attrs:{daneskladka:e},on:{usun:function(a){return t.$emit("usuniencie",e)},zapisz:function(a){return t.$emit("zapisywanie",e)}}})})),1)])])])},m=[function(){var t=this,a=t._self._c;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Nazwa")]),a("th",{attrs:{scope:"col"}},[t._v("Ile do zebrania")]),a("th",{attrs:{scope:"col"}},[t._v("Kwota od osoby")]),a("th",{attrs:{scope:"col"}},[t._v("Data")]),a("th")])])}],y=function(){var t=this,a=t._self._c;return 0==t.edytowanie?a("tr",{staticStyle:{margin:"10px"}},[a("td",[t._v(t._s(t.daneskladka.Nazwa))]),a("td",[t._v(t._s(t.daneskladka.IleDoZebrania))]),a("td",[t._v(t._s(t.daneskladka.KwotaOdOsoby))]),a("td",[t._v(t._s(t.daneskladka.Data))]),a("td",[a("button",{staticClass:"btn btn-sm btn-dark",staticStyle:{margin:"10px"},attrs:{type:"button"},on:{click:function(a){return t.$emit("usun")}}},[t._v(" Usuń ")]),a("button",{staticClass:"btn btn-sm btn-dark",staticStyle:{margin:"10px"},attrs:{type:"button"},on:{click:function(a){t.edytowanie=!0,t.daneZbiorki=t.daneskladka}}},[t._v(" Edytuj ")])])]):a("tr",{staticClass:"info"},[a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.daneZbiorki.Nazwa,expression:"daneZbiorki.Nazwa"}],staticClass:"form-control-dark",staticStyle:{margin:"10px"},attrs:{type:"text",placeholder:"Nazwa"},domProps:{value:t.daneZbiorki.Nazwa},on:{input:function(a){a.target.composing||t.$set(t.daneZbiorki,"Nazwa",a.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.daneZbiorki.IleDoZebrania,expression:"daneZbiorki.IleDoZebrania"}],staticClass:"form-control-dark",staticStyle:{margin:"10px"},attrs:{type:"text",placeholder:"Ilość do zebrania"},domProps:{value:t.daneZbiorki.IleDoZebrania},on:{input:function(a){a.target.composing||t.$set(t.daneZbiorki,"IleDoZebrania",a.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.daneZbiorki.KwotaOdOsoby,expression:"daneZbiorki.KwotaOdOsoby"}],staticClass:"form-control-dark",staticStyle:{margin:"10px"},attrs:{type:"text",placeholder:"Kwota od osoby"},domProps:{value:t.daneZbiorki.KwotaOdOsoby},on:{input:function(a){a.target.composing||t.$set(t.daneZbiorki,"KwotaOdOsoby",a.target.value)}}})]),a("td",[a("button",{staticClass:"btn btn-sm btn-dark",staticStyle:{margin:"10px"},attrs:{type:"button"},on:{click:function(a){t.$emit("zapisz",t.daneZbiorki),t.edytowanie=!1}}},[t._v(" Zapisz ")])]),a("td")])},v=[],w={data(){let t,a=!1;return console.log(this.daneskladka),{edytowanie:a,daneZbiorki:t}},name:"WierszSkladki",props:["daneskladka"]},f=w,g=(0,u.Z)(f,y,v,!1,null,null,null),z=g.exports,_={components:{WierszSkladki:z},data(){let t="";return{szukane:t}},methods:{walonefiltrowanie(t){return t.Nazwa.includes(this.szukane)||t.IleDoZebrania.includes(this.szukane)||t.KwotaOdOsoby.includes(this.szukane)}},name:"TabelaSkladki",props:["skladka"]},h=_,C=(0,u.Z)(h,k,m,!1,null,null,null),O=C.exports,x=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container"},[a("form",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-3"}),a("div",{staticClass:"col-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.daneosobaclon.Imie,expression:"daneosobaclon.Imie"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Imie"},domProps:{value:t.daneosobaclon.Imie},on:{input:function(a){a.target.composing||t.$set(t.daneosobaclon,"Imie",a.target.value)}}})]),a("div",{staticClass:"col-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.daneosobaclon.Nazwisko,expression:"daneosobaclon.Nazwisko"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nazwisko"},domProps:{value:t.daneosobaclon.Nazwisko},on:{input:function(a){a.target.composing||t.$set(t.daneosobaclon,"Nazwisko",a.target.value)}}})]),a("div",{staticClass:"col-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.daneosobaclon.Telefon,expression:"daneosobaclon.Telefon"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Telefon Komórkowy"},domProps:{value:t.daneosobaclon.Telefon},on:{input:function(a){a.target.composing||t.$set(t.daneosobaclon,"Telefon",a.target.value)}}})]),a("div",{staticClass:"col-3"})]),a("div",{staticClass:"row",staticStyle:{"text-align":"center"}},[a("div",{staticClass:"col-5"}),a("div",{staticClass:"col-2"},[a("button",{staticClass:"btn btn-light",staticStyle:{margin:"10px"},attrs:{type:"button"},on:{click:function(a){return t.$emit("dodaj",t.daneosobaclon)}}},[t._v(" Dodaj ")])]),a("div",{staticClass:"col-5"})])])])},j=[],S={name:"WpisywanieOsoby",props:["daneosoba"],data(){var t=Object.assign({},this.daneosoba);return{daneosobaclon:t}}},Z=S,N=(0,u.Z)(Z,x,j,!1,null,null,null),I=N.exports,W=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"}),a("div",{staticClass:"col-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.szukane,expression:"szukane"}],staticClass:"form-control",staticStyle:{margin:"10px"},attrs:{type:"text",placeholder:"Wyszukaj Osoby"},domProps:{value:t.szukane},on:{input:function(a){a.target.composing||(t.szukane=a.target.value)}}})]),a("div",{staticClass:"col-4"}),a("table",{staticClass:"table table-bordered table-striped table-dark"},[t._m(0),a("tbody",t._l(t.listaOsob,(function(e){return a("WierszTabela",{key:e.id,attrs:{daneosoba:e},on:{usun:function(a){return t.$emit("usuniencie",e)},zapisz:function(a){return t.$emit("zapisywanie",e)}}})})),1)])])])},T=[function(){var t=this,a=t._self._c;return a("thead",[a("tr",[a("th",[t._v("Imie")]),a("th",[t._v("Nazwisko")]),a("th",[t._v("Numer Telefonu")]),a("th",[t._v("Edytowanie")])])])}],D=function(){var t=this,a=t._self._c;return 0==t.edytowanie?a("tr",[a("td",[t._v(t._s(t.daneosoba.Imie))]),a("td",[t._v(t._s(t.daneosoba.Nazwisko))]),a("td",[t._v(t._s(t.daneosoba.Telefon))]),a("td",[a("button",{staticClass:"btn btn-sm btn-dark",staticStyle:{margin:"10px"},attrs:{type:"button"},on:{click:function(a){return t.$emit("usun")}}},[t._v(" Usuń ")]),a("button",{staticClass:"btn btn-sm btn-dark",staticStyle:{margin:"10px"},attrs:{type:"button"},on:{click:function(a){t.edytowanie=!0,t.clondaneosoba=t.daneosoba}}},[t._v(" Edytuj ")])])]):a("tr",{staticClass:"info",staticStyle:{"text-align":"center"}},[a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.clondaneosoba.Imie,expression:"clondaneosoba.Imie"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Imie"},domProps:{value:t.clondaneosoba.Imie},on:{input:function(a){a.target.composing||t.$set(t.clondaneosoba,"Imie",a.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.clondaneosoba.Nazwisko,expression:"clondaneosoba.Nazwisko"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nazwisko"},domProps:{value:t.clondaneosoba.Nazwisko},on:{input:function(a){a.target.composing||t.$set(t.clondaneosoba,"Nazwisko",a.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.clondaneosoba.Telefon,expression:"clondaneosoba.Telefon"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Numer Telefonu"},domProps:{value:t.clondaneosoba.Telefon},on:{input:function(a){a.target.composing||t.$set(t.clondaneosoba,"Telefon",a.target.value)}}})]),a("td",[a("button",{staticClass:"btn btn-sm btn-dark",attrs:{type:"button"},on:{click:function(a){t.$emit("zapisz",t.clondaneosoba),t.edytowanie=!1}}},[t._v(" Zapisz ")])]),a("td")])},P=[],U={data(){let t,a=!1;return console.log(this.daneosoba),{edytowanie:a,clondaneosoba:t}},name:"TabelaOsob",props:["daneosoba"]},K=U,$=(0,u.Z)(K,D,P,!1,null,null,null),E=$.exports,B={components:{WierszTabela:E},data(){let t="";return{szukane:t}},methods:{walonefiltrowanie(t){return t.Imie.includes(this.szukane)||t.Nazwisko.includes(this.szukane)||t.Telefon.includes(this.szukane)}},name:"TabelaOsob",props:["listaOsob"]},J=B,L=(0,u.Z)(J,W,T,!1,null,null,null),F=L.exports,R=function(){var t=this,a=t._self._c;return a("div",{staticClass:"TabelaTel"},[a("table",{staticClass:"table table-bordered table-dark"},[a("tbody",t._l(t.skladka,(function(e){return a("WierszZbiorki",{key:e.id,attrs:{daneskladka:e},on:{wejdz:function(a){return t.$emit("wejscie",e)}}})})),1)])])},A=[],M=function(){var t=this,a=t._self._c;return 0==t.edytowanie?a("tr",{staticStyle:{margin:"10px"}},[a("button",{staticClass:"btn btn-sm btn-dark",staticStyle:{margin:"10px"},attrs:{type:"button"},on:{click:function(a){return t.$emit("wejdz")}}},[t._v(" "+t._s(t.daneskladka.Nazwa)+" ")])]):t._e()},G=[],H={data(){let t,a=!1;return console.log(this.daneskladka),{edytowanie:a,daneZbiorki:t}},name:"WierszZbiorki",props:["daneskladka"]},Q=H,V=(0,u.Z)(Q,M,G,!1,null,null,null),q=V.exports,Y={components:{WierszZbiorki:q},data(){let t="";return{szukane:t}},name:"TabelaZbiorki",props:["skladka","listaOsob"]},X=Y,tt=(0,u.Z)(X,R,A,!1,null,null,null),at=tt.exports,et=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("table",{staticClass:"table table-bordered table-striped table-dark"},[t._m(0),t._l(t.listaOsob,(function(e){return a("tbody",{key:e.id},[0==t.wplaty.filter((a=>a.uczen_id==e.id&&a.skladka_id==t.wplatySkladka.id)).length?a("tr",{staticStyle:{"text-align":"center"}},[a("td",[t._v(" "+t._s(e.Imie)+" ")]),a("td",[t._v(t._s(e.Nazwisko))]),a("td",[t.idUczniaWplacajacego==e.id?a("input",{directives:[{name:"model",rawName:"v-model",value:t.kwotaDane,expression:"kwotaDane"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Kwota Wpłaty"},domProps:{value:t.kwotaDane},on:{input:function(a){a.target.composing||(t.kwotaDane=a.target.value)}}}):t._e()]),a("td"),a("td",[t.idUczniaWplacajacego!=e.id&&0==t.ukryjPrzycisk?a("button",{staticClass:"btn btn-sm btn-danger col-4",staticStyle:{margin:"10px"},attrs:{type:"button"},on:{click:function(a){t.idUczniaWplacajacego=e.id,t.ukryjPrzycisk=!0}}},[t._v(" Dodaj ")]):t._e(),t.idUczniaWplacajacego==e.id?a("div",[a("button",{staticClass:"btn btn-sm btn-dark",staticStyle:{margin:"10px"},attrs:{type:"button"},on:{click:function(a){t.$emit("zaplacil",e,t.wplatySkladka,t.kwotaDane),t.idUczniaWplacajacego="",t.kwotaDane="",t.ukryjPrzycisk=!1}}},[t._v(" Zapisz ")]),a("button",{staticClass:"btn btn-sm btn-dark",staticStyle:{margin:"10px"},attrs:{type:"button"},on:{click:function(a){t.idUczniaWplacajacego=!1,t.kwotaDane="",t.ukryjPrzycisk=!1}}},[t._v(" Anuluj ")])]):t._e()])]):t._e(),t.wplaty.filter((a=>a.uczen_id==e.id&&a.skladka_id==t.wplatySkladka.id)).length>0?t._l(t.wplaty.filter((a=>a.uczen_id==e.id&&a.skladka_id==t.wplatySkladka.id)),(function(o){return a("tr",{key:o.Id,staticStyle:{"text-align":"center"}},[a("td",[t._v(" "+t._s(e.Imie)+" ")]),a("td",[t._v(t._s(e.Nazwisko))]),a("td",[t.idUczniaWplacajacego==e.id&&0==t.ukryjPrzycisk&&1==t.edytowanie?a("input",{directives:[{name:"model",rawName:"v-model",value:t.kwotaDane,expression:"kwotaDane"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Kwota Wpłaty"},domProps:{value:t.kwotaDane},on:{input:function(a){a.target.composing||(t.kwotaDane=a.target.value)}}}):a("div",[t._v(t._s(t._f("currencyFormat")(o.kwota)))])]),a("td",[t._v(t._s(o.data))]),a("td",[t.idUczniaWplacajacego!=e.id&&0==t.ukryjPrzycisk?a("button",{staticClass:"btn btn-sm btn-success",attrs:{type:"button"},on:{click:function(a){t.idUczniaWplacajacego=e.id,t.ukryjPrzycisk=!0}}},[t._v(" Usuń ")]):t._e(),t.idUczniaWplacajacego!=e.id&&0==t.ukryjPrzycisk?a("button",{staticClass:"btn btn-sm btn-success",staticStyle:{"margin-left":"10px"},attrs:{type:"button"},on:{click:function(a){t.edytowanie=!0,t.idUczniaWplacajacego=e.id,t.kwotaDane=o.kwota}}},[t._v(" Edytuj ")]):t._e(),t.idUczniaWplacajacego==e.id&&1==t.ukryjPrzycisk&&0==t.edytowanie?a("div",[a("button",{staticClass:"btn btn-sm btn-dark",staticStyle:{margin:"10px"},attrs:{type:"button"},on:{click:function(a){t.$emit("edytowanie",o,t.kwotaDane),t.idUczniaWplacajacego="",t.kwotaDane="",t.ukryjPrzycisk=!1}}},[t._v(" Zapisz ")]),a("button",{staticClass:"btn btn-sm btn-dark",staticStyle:{margin:"10px"},attrs:{type:"button"},on:{click:function(a){t.idUczniaWplacajacego="",t.ukryjPrzycisk=!1}}},[t._v(" Anuluj ")])]):t._e(),t.idUczniaWplacajacego==e.id&&1==t.edytowanie?a("div",[a("div",[t._v("Usunąć?")]),a("button",{staticClass:"btn btn-sm btn-dark",staticStyle:{margin:"10px"},attrs:{type:"button"},on:{click:function(a){t.$emit("usun",o),t.idUczniaWplacajacego="",t.ukryjPrzycisk=!1,t.edytowanie=!1}}},[t._v(" Tak ")]),a("button",{staticClass:"btn btn-sm btn-dark",staticStyle:{margin:"10px"},attrs:{type:"button"},on:{click:function(a){t.idUczniaWplacajacego="",t.ukryjPrzycisk=!1,t.edytowanie=!1}}},[t._v(" Nie ")])]):t._e()])])})):t._e()],2)}))],2)])])},ot=[function(){var t=this,a=t._self._c;return a("thead",[a("tr",[a("th",[t._v("Imie")]),a("th",[t._v("Nazwisko")]),a("th",[t._v("Wpłacona Kwota")]),a("th",[t._v("Data Wpłaty")]),a("th")])])}],nt={data(){let t="",a=!1,e="",o=!1,n=!1;return{szukane:e,idUczniaWplacajacego:a,kwotaDane:t,ukryjPrzycisk:o,edytowanie:n}},name:"TabelaWplat",props:["listaOsob","wplaty","wplatySkladka"]},st=nt,it=(0,u.Z)(st,et,ot,!1,null,null,null),lt=it.exports,rt=e(7795),ct=e(3866);const dt={apiKey:"AIzaSyB3buWcYV1cUAeNVTbWQe3rI_F-qiQ3g4I",authDomain:"skladki-6ed69.firebaseapp.com",projectId:"skladki-6ed69",storageBucket:"skladki-6ed69.appspot.com",messagingSenderId:"1075576303372",appId:"1:1075576303372:web:463c463893a088352a6329",measurementId:"G-ZHMZPF1ED6"},ut=(0,rt.ZF)(dt),bt=new ct.hJ,pt=(0,i.ad)(ut);var kt={name:"App",components:{WpisywanieSkladki:p,TabelaSkladki:O,WpisywanieOsob:I,TabelaOsob:F,TabelkaZbiorki:at,TabelaWplat:lt},setup(){var t=(0,o.ref)([]),a=(0,o.ref)([]),e=(0,o.ref)([]);return(0,o.onMounted)((async()=>{null!=(0,ct.v0)()&&(console.log("auth >>"),(0,i.cf)((0,i.hJ)(pt,"skladki"),(a=>{const e=[];a.forEach((t=>{e.push({id:t.id,...t.data()})})),t.value=e})),(0,i.cf)((0,i.hJ)(pt,"WszystkieOsoby"),(t=>{const e=[];t.forEach((t=>{e.push({id:t.id,...t.data()})})),a.value=e})),(0,i.cf)((0,i.hJ)(pt,"Wplaty"),(t=>{const a=[];t.forEach((t=>{a.push({id:t.id,...t.data()})})),e.value=a})),console.log("<< auth"))})),{skladka:t,osoby:a,Wplaty:e}},data(){const t=!1,a=!1;var e,o={email:"",password:""};const n=!1,s=!1;var i={Nazwa:"",KwotaOdOsoby:"",IleDoZebrania:"",Data:""},l={data:"",uczen_id:"",skladka_id:"",kwota:""},r={Imie:"",Nazwisko:"",Telefon:""};return{edycjaOSOB:n,edycjaZBIOREK:s,zbiorka:i,loginUser:o,osoba:r,uzytk:a,zbiorkadodawanie:t,wplata:l,skladkacopy:e}},methods:{logowanie(){const t=(0,ct.v0)();console.log(t),(0,ct.e5)(t,this.loginUser.email,this.loginUser.password).then((t=>{const a=t.user;this.uzytk=!0,console.log(a)})).catch((t=>{const a=t.message;alert(a),console.log(t.Code)}))},logowanieGoogle(){console.log(bt);const t=(0,ct.v0)();console.log(t),(0,ct.rh)(t,bt).then((t=>{const a=ct.hJ.credentialFromResult(t),e=a.accessToken;this.uzytk=!0;const o=t.user;console.log(e),console.log(o)})).catch((t=>{const a=t.code,e=t.message,o=t.customData.email,n=ct.hJ.credentialFromError(t);console.log(a),console.log(e),console.log(o),console.log(n)}))},skladkadodawanie(t){(0,i.ET)((0,i.hJ)(pt,"skladki"),{Nazwa:t.Nazwa,KwotaOdOsoby:t.KwotaOdOsoby,IleDoZebrania:t.IleDoZebrania,Data:i.EK.now().toDate().toLocaleString("pl-PL")}),console.log(t),t.Nazwa="",t.KwotaOdOsoby="",t.IleDoZebrania="",t.Data=""},skladkausuwanie(t){console.log(t.uId),confirm("Czy chcesz usunąć tą składke")&&((0,i.oe)((0,i.JU)(pt,"skladki",t.id)),alert("Usunięto"))},skladkaedycja(t){(0,i.r7)((0,i.JU)(pt,"skladki",t.id),{Nazwa:t.Nazwa,KwotaOdOsoby:t.KwotaOdOsoby,IleDoZebrania:t.IleDoZebrania}),console.log(t)},dodawanieosoby(t){(0,i.ET)((0,i.hJ)(pt,"WszystkieOsoby"),{Imie:t.Imie,Nazwisko:t.Nazwisko,Telefon:t.Telefon}),console.log(t),t.Imie="",t.Nazwisko="",t.Telefon=""},usuwanieosoby(t){confirm("Czy chcesz usunąć ten kontakt")&&((0,i.oe)((0,i.JU)(pt,"WszystkieOsoby",t.id)),alert("Usunięto"))},edycjaosoby(t){(0,i.r7)((0,i.JU)(pt,"WszystkieOsoby",t.id),{Imie:t.Imie,Nazwisko:t.Nazwisko,Telefon:t.Telefon}),console.log(t)},wejscieZbiorka(t){this.skladkacopy=t,this.zbiorkadodawanie=!0},placi(t,a,e){(0,i.ET)((0,i.hJ)(pt,"Wplaty"),{data:i.EK.now().toDate().toLocaleString("pl-PL"),kwota:e,skladka_id:a.id,uczen_id:t.id})},usuwanie(t){(0,i.oe)((0,i.JU)(pt,"Wplaty",t.id)),alert("Usunięto")},zbiorkaedycja(t,a){(0,i.r7)((0,i.JU)(pt,"Wplaty",t.id),{kwota:a,data:i.EK.now().toDate().toLocaleString("pl-PL")}),console.log(t)}}},mt=kt,yt=(0,u.Z)(mt,n,s,!1,null,null,null),vt=yt.exports,wt=e(8702);e(7024);o["default"].use(wt.ZPm),o["default"].config.productionTip=!1,new o["default"]({el:"#app",render:t=>t(vt),components:{App:vt}}),o["default"].filter("currencyFormat",(function(t){return new Intl.NumberFormat("pl-PL",{style:"currency",currency:"PLN"}).format(t)})),o["default"].$mount("#app")}},a={};function e(o){var n=a[o];if(void 0!==n)return n.exports;var s=a[o]={exports:{}};return t[o].call(s.exports,s,s.exports,e),s.exports}e.m=t,function(){var t=[];e.O=function(a,o,n,s){if(!o){var i=1/0;for(d=0;d<t.length;d++){o=t[d][0],n=t[d][1],s=t[d][2];for(var l=!0,r=0;r<o.length;r++)(!1&s||i>=s)&&Object.keys(e.O).every((function(t){return e.O[t](o[r])}))?o.splice(r--,1):(l=!1,s<i&&(i=s));if(l){t.splice(d--,1);var c=n();void 0!==c&&(a=c)}}return a}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[o,n,s]}}(),function(){e.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(a,{a:a}),a}}(),function(){e.d=function(t,a){for(var o in a)e.o(a,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:a[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};e.O.j=function(a){return 0===t[a]};var a=function(a,o){var n,s,i=o[0],l=o[1],r=o[2],c=0;if(i.some((function(a){return 0!==t[a]}))){for(n in l)e.o(l,n)&&(e.m[n]=l[n]);if(r)var d=r(e)}for(a&&a(o);c<i.length;c++)s=i[c],e.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return e.O(d)},o=self["webpackChunktest"]=self["webpackChunktest"]||[];o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(9185)}));o=e.O(o)})();
//# sourceMappingURL=app.b28f8c82.js.map