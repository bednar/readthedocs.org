require=function e(t,r,n){function o(a,c){if(!r[a]){if(!t[a]){var u="function"==typeof require&&require;if(!c&&u)return u(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var s=r[a]={exports:{}};t[a][0].call(s.exports,function(e){var r=t[a][1][e];return o(r?r:e)},s,s.exports,e,t,r,n)}return r[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)o(n[a]);return o}({1:[function(e,t,r){(function(){var e,t,r,n,o,i,a,c,u,l,s,p,d,h,v,f,m,y,g,_,b,w,C,x,k=[].slice,T=[].indexOf||function(e){for(var t=0,r=this.length;r>t;t++)if(t in this&&this[t]===e)return t;return-1};e=window.jQuery||window.Zepto||window.$,e.payment={},e.payment.fn={},e.fn.payment=function(){var t,r;return r=arguments[0],t=2<=arguments.length?k.call(arguments,1):[],e.payment.fn[r].apply(this,t)},o=/(\d{1,4})/g,e.payment.cards=n=[{type:"visaelectron",pattern:/^4(026|17500|405|508|844|91[37])/,format:o,length:[16],cvcLength:[3],luhn:!0},{type:"maestro",pattern:/^(5(018|0[23]|[68])|6(39|7))/,format:o,length:[12,13,14,15,16,17,18,19],cvcLength:[3],luhn:!0},{type:"forbrugsforeningen",pattern:/^600/,format:o,length:[16],cvcLength:[3],luhn:!0},{type:"dankort",pattern:/^5019/,format:o,length:[16],cvcLength:[3],luhn:!0},{type:"visa",pattern:/^4/,format:o,length:[13,16],cvcLength:[3],luhn:!0},{type:"mastercard",pattern:/^(5[1-5]|2[2-7])/,format:o,length:[16],cvcLength:[3],luhn:!0},{type:"amex",pattern:/^3[47]/,format:/(\d{1,4})(\d{1,6})?(\d{1,5})?/,length:[15],cvcLength:[3,4],luhn:!0},{type:"dinersclub",pattern:/^3[0689]/,format:/(\d{1,4})(\d{1,6})?(\d{1,4})?/,length:[14],cvcLength:[3],luhn:!0},{type:"discover",pattern:/^6([045]|22)/,format:o,length:[16],cvcLength:[3],luhn:!0},{type:"unionpay",pattern:/^(62|88)/,format:o,length:[16,17,18,19],cvcLength:[3],luhn:!1},{type:"jcb",pattern:/^35/,format:o,length:[16],cvcLength:[3],luhn:!0}],t=function(e){var t,r,o;for(e=(e+"").replace(/\D/g,""),r=0,o=n.length;o>r;r++)if(t=n[r],t.pattern.test(e))return t},r=function(e){var t,r,o;for(r=0,o=n.length;o>r;r++)if(t=n[r],t.type===e)return t},d=function(e){var t,r,n,o,i,a;for(n=!0,o=0,r=(e+"").split("").reverse(),i=0,a=r.length;a>i;i++)t=r[i],t=parseInt(t,10),(n=!n)&&(t*=2),t>9&&(t-=9),o+=t;return o%10===0},p=function(e){var t;return null!=e.prop("selectionStart")&&e.prop("selectionStart")!==e.prop("selectionEnd")?!0:null!=("undefined"!=typeof document&&null!==document&&null!=(t=document.selection)?t.createRange:void 0)&&document.selection.createRange().text?!0:!1},C=function(e,t){var r,n,o;try{r=t.prop("selectionStart")}catch(i){n=i,r=null}return o=t.val(),t.val(e),null!==r&&t.is(":focus")?(r===o.length&&(r=e.length),t.prop("selectionStart",r),t.prop("selectionEnd",r)):void 0},y=function(e){var t,r,n,o,i,a,c,u;for(null==e&&(e=""),n="０１２３４５６７８９",o="0123456789",a="",r=e.split(""),c=0,u=r.length;u>c;c++)t=r[c],i=n.indexOf(t),i>-1&&(t=o[i]),a+=t;return a},m=function(t){return setTimeout(function(){var r,n;return r=e(t.currentTarget),n=r.val(),n=y(n),n=n.replace(/\D/g,""),C(n,r)})},v=function(t){return setTimeout(function(){var r,n;return r=e(t.currentTarget),n=r.val(),n=y(n),n=e.payment.formatCardNumber(n),C(n,r)})},c=function(r){var n,o,i,a,c,u,l;return i=String.fromCharCode(r.which),!/^\d+$/.test(i)||(n=e(r.currentTarget),l=n.val(),o=t(l+i),a=(l.replace(/\D/g,"")+i).length,u=16,o&&(u=o.length[o.length.length-1]),a>=u||null!=n.prop("selectionStart")&&n.prop("selectionStart")!==l.length)?void 0:(c=o&&"amex"===o.type?/^(\d{4}|\d{4}\s\d{6})$/:/(?:^|\s)(\d{4})$/,c.test(l)?(r.preventDefault(),setTimeout(function(){return n.val(l+" "+i)})):c.test(l+i)?(r.preventDefault(),setTimeout(function(){return n.val(l+i+" ")})):void 0)},i=function(t){var r,n;return r=e(t.currentTarget),n=r.val(),8!==t.which||null!=r.prop("selectionStart")&&r.prop("selectionStart")!==n.length?void 0:/\d\s$/.test(n)?(t.preventDefault(),setTimeout(function(){return r.val(n.replace(/\d\s$/,""))})):/\s\d?$/.test(n)?(t.preventDefault(),setTimeout(function(){return r.val(n.replace(/\d$/,""))})):void 0},f=function(t){return setTimeout(function(){var r,n;return r=e(t.currentTarget),n=r.val(),n=y(n),n=e.payment.formatExpiry(n),C(n,r)})},u=function(t){var r,n,o;return n=String.fromCharCode(t.which),/^\d+$/.test(n)?(r=e(t.currentTarget),o=r.val()+n,/^\d$/.test(o)&&"0"!==o&&"1"!==o?(t.preventDefault(),setTimeout(function(){return r.val("0"+o+" / ")})):/^\d\d$/.test(o)?(t.preventDefault(),setTimeout(function(){return r.val(""+o+" / ")})):void 0):void 0},l=function(t){var r,n,o;return n=String.fromCharCode(t.which),/^\d+$/.test(n)?(r=e(t.currentTarget),o=r.val(),/^\d\d$/.test(o)?r.val(""+o+" / "):void 0):void 0},s=function(t){var r,n,o;return o=String.fromCharCode(t.which),"/"===o||" "===o?(r=e(t.currentTarget),n=r.val(),/^\d$/.test(n)&&"0"!==n?r.val("0"+n+" / "):void 0):void 0},a=function(t){var r,n;return r=e(t.currentTarget),n=r.val(),8!==t.which||null!=r.prop("selectionStart")&&r.prop("selectionStart")!==n.length?void 0:/\d\s\/\s$/.test(n)?(t.preventDefault(),setTimeout(function(){return r.val(n.replace(/\d\s\/\s$/,""))})):void 0},h=function(t){return setTimeout(function(){var r,n;return r=e(t.currentTarget),n=r.val(),n=y(n),n=n.replace(/\D/g,"").slice(0,4),C(n,r)})},w=function(e){var t;return e.metaKey||e.ctrlKey?!0:32===e.which?!1:0===e.which?!0:e.which<33?!0:(t=String.fromCharCode(e.which),!!/[\d\s]/.test(t))},_=function(r){var n,o,i,a;return n=e(r.currentTarget),i=String.fromCharCode(r.which),/^\d+$/.test(i)&&!p(n)?(a=(n.val()+i).replace(/\D/g,""),o=t(a),o?a.length<=o.length[o.length.length-1]:a.length<=16):void 0},b=function(t){var r,n,o;return r=e(t.currentTarget),n=String.fromCharCode(t.which),/^\d+$/.test(n)&&!p(r)?(o=r.val()+n,o=o.replace(/\D/g,""),o.length>6?!1:void 0):void 0},g=function(t){var r,n,o;return r=e(t.currentTarget),n=String.fromCharCode(t.which),/^\d+$/.test(n)&&!p(r)?(o=r.val()+n,o.length<=4):void 0},x=function(t){var r,o,i,a,c;return r=e(t.currentTarget),c=r.val(),a=e.payment.cardType(c)||"unknown",r.hasClass(a)?void 0:(o=function(){var e,t,r;for(r=[],e=0,t=n.length;t>e;e++)i=n[e],r.push(i.type);return r}(),r.removeClass("unknown"),r.removeClass(o.join(" ")),r.addClass(a),r.toggleClass("identified","unknown"!==a),r.trigger("payment.cardType",a))},e.payment.fn.formatCardCVC=function(){return this.on("keypress",w),this.on("keypress",g),this.on("paste",h),this.on("change",h),this.on("input",h),this},e.payment.fn.formatCardExpiry=function(){return this.on("keypress",w),this.on("keypress",b),this.on("keypress",u),this.on("keypress",s),this.on("keypress",l),this.on("keydown",a),this.on("change",f),this.on("input",f),this},e.payment.fn.formatCardNumber=function(){return this.on("keypress",w),this.on("keypress",_),this.on("keypress",c),this.on("keydown",i),this.on("keyup",x),this.on("paste",v),this.on("change",v),this.on("input",v),this.on("input",x),this},e.payment.fn.restrictNumeric=function(){return this.on("keypress",w),this.on("paste",m),this.on("change",m),this.on("input",m),this},e.payment.fn.cardExpiryVal=function(){return e.payment.cardExpiryVal(e(this).val())},e.payment.cardExpiryVal=function(e){var t,r,n,o;return o=e.split(/[\s\/]+/,2),t=o[0],n=o[1],2===(null!=n?n.length:void 0)&&/^\d+$/.test(n)&&(r=(new Date).getFullYear(),r=r.toString().slice(0,2),n=r+n),t=parseInt(t,10),n=parseInt(n,10),{month:t,year:n}},e.payment.validateCardNumber=function(e){var r,n;return e=(e+"").replace(/\s+|-/g,""),/^\d+$/.test(e)?(r=t(e),r?(n=e.length,T.call(r.length,n)>=0&&(r.luhn===!1||d(e))):!1):!1},e.payment.validateCardExpiry=function(t,r){var n,o,i;return"object"==typeof t&&"month"in t&&(i=t,t=i.month,r=i.year),t&&r?(t=e.trim(t),r=e.trim(r),/^\d+$/.test(t)&&/^\d+$/.test(r)&&t>=1&&12>=t?(2===r.length&&(r=70>r?"20"+r:"19"+r),4!==r.length?!1:(o=new Date(r,t),n=new Date,o.setMonth(o.getMonth()-1),o.setMonth(o.getMonth()+1,1),o>n)):!1):!1},e.payment.validateCardCVC=function(t,n){var o,i;return t=e.trim(t),/^\d+$/.test(t)?(o=r(n),null!=o?(i=t.length,T.call(o.cvcLength,i)>=0):t.length>=3&&t.length<=4):!1},e.payment.cardType=function(e){var r;return e?(null!=(r=t(e))?r.type:void 0)||null:null},e.payment.formatCardNumber=function(r){var n,o,i,a;return r=r.replace(/\D/g,""),(n=t(r))?(i=n.length[n.length.length-1],r=r.slice(0,i),n.format.global?null!=(a=r.match(n.format))?a.join(" "):void 0:(o=n.format.exec(r),null!=o?(o.shift(),o=e.grep(o,function(e){return e}),o.join(" ")):void 0)):r},e.payment.formatExpiry=function(e){var t,r,n,o;return(r=e.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/))?(t=r[1]||"",n=r[2]||"",o=r[3]||"",o.length>0?n=" / ":" /"===n?(t=t.substring(0,1),n=""):2===t.length||n.length>0?n=" / ":1===t.length&&"0"!==t&&"1"!==t&&(t="0"+t,n=" / "),t+n+o):""}}).call(this)},{}],2:[function(e,t,r){function n(e){var t=this,e=e||{};a.publishableKey=t.stripe_key=e.key,t.form=e.form,t.cc_number=o.observable(null),t.cc_expiry=o.observable(null),t.cc_cvv=o.observable(null),t.error_cc_number=o.observable(null),t.error_cc_expiry=o.observable(null),t.error_cc_cvv=o.observable(null),t.stripe_token=o.observable(null),t.card_digits=o.observable(null),t.is_editing_card=o.observable(!1),t.show_card_form=o.computed(function(){return t.is_editing_card()||!t.card_digits()||t.cc_number()||t.cc_expiry()||t.cc_cvv()}),t.initialize_form(),t.error=o.observable(null),t.process_form=function(){var e=i.payment.cardExpiryVal(t.cc_expiry()),r={number:t.cc_number(),exp_month:e.month,exp_year:e.year,cvc:t.cc_cvv()};return t.error(null),t.error_cc_number(null),t.error_cc_expiry(null),t.error_cc_cvv(null),i.payment.validateCardNumber(r.number)?i.payment.validateCardExpiry(r.exp_month,r.exp_year)?i.payment.validateCardCVC(r.cvc)?void a.createToken(r,function(e,r){if(r.error)if("card_error"==r.error.type){var n={invalid_number:t.error_cc_number,incorrect_number:t.error_cc_number,expired_card:t.error_cc_number,card_declined:t.error_cc_number,invalid_expiry_month:t.error_cc_expiry,invalid_expiry_year:t.error_cc_expiry,invalid_cvc:t.error_cc_cvv,incorrect_cvc:t.error_cc_cvv},o=n[r.error.code]||t.error_cc_number;o(r.error.message)}else t.error_cc_number(r.error.message);else t.submit_form(r.card.last4,r.id)}):(t.error_cc_cvv("Invalid security code"),!1):(t.error_cc_expiry("Invalid expiration date"),!1):(t.error_cc_number("Invalid card number"),!1)},t.process_full_form=function(){return t.show_card_form()?void t.process_form():!0}}var o=e("knockout"),i=(e("./../../../../../bower_components/jquery.payment/lib/jquery.payment.js"),e("jquery")),a=null;"undefined"!=typeof window&&"undefined"!=typeof window.Stripe&&(a=window.Stripe||{}),o.bindingHandlers.valueInit={init:function(e,t){var r=t();o.isWriteableObservable(r)&&r(e.value)}},n.prototype.submit_form=function(e,t){this.form.find("#id_card_digits").val(e),this.form.find("#id_stripe_token").val(t),this.form.submit()},n.prototype.initialize_form=function(){var e=i("input#id_cc_number"),t=i("input#id_cc_cvv"),r=i("input#id_cc_expiry");e.payment("formatCardNumber"),r.payment("formatCardExpiry"),t.payment("formatCardCVC"),e.trigger("keyup")},n.init=function(e,t){var r=new n(e),t=t||i("#payment-form")[0];return o.applyBindings(r,t),r},t.exports.PaymentView=n},{"./../../../../../bower_components/jquery.payment/lib/jquery.payment.js":1,jquery:"jquery",knockout:"knockout"}],"donate/donate":[function(e,t,r){function n(e){var t=this,e=e||{};t.constructor.call(t,e),t.dollars=i.observable(),t.logo_url=i.observable(),t.site_url=i.observable(),t.error_dollars=i.observable(),t.error_logo_url=i.observable(),t.error_site_url=i.observable(),i.computed(function(){var e=$("input#id_logo_url").closest("p"),r=$("input#id_site_url").closest("p");t.dollars()<400?(t.logo_url(null),t.site_url(null),e.hide(),r.hide()):(e.show(),r.show())}),t.urls_enabled=i.computed(function(){return t.dollars()>=400})}var o=(e("jquery"),e("readthedocs/payments/static-src/payments/js/base")),i=e("knockout");n.prototype=new o.PaymentView,n.init=function(e,t){var r=new n(e),t=t||$("#donate-payment")[0];return i.applyBindings(r,t),r},n.prototype.submit_form=function(e,t){this.form.find("#id_last_4_digits").val(e),this.form.find("#id_stripe_token").val(t),this.form.submit()},t.exports.DonateView=n},{jquery:"jquery",knockout:"knockout","readthedocs/payments/static-src/payments/js/base":2}]},{},[]);