"use strict";(self.webpackJsonpCheckout=self.webpackJsonpCheckout||[]).push([[356],{53580:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var a=n(86940),r=n(696),c=n.n(r),i=n(67627),o=n(59728),l=n(70140),m=n(34927),s=n(70218),u=n(77068);function d(e){var t=e.physicalItems,n=e.digitalItems,a=e.giftCertificates,r=e.customItems;return t.length+n.length+a.length+(r||[]).length}var p=n(67106),h=n(46004),E=n(19984),g=n(9607),f=n(65228),v=n(71282),C=n(48527),y=n(57993),Z=n(50041),I=function(e){var t=e.onRequestClose,n=e.headerLink;return i.createElement(i.Fragment,null,i.createElement("a",{className:"cart-modal-close",href:"#",onClick:(0,p.Z)(t)},i.createElement("span",{className:"is-srOnly"},i.createElement(l.Z,{id:"common.close_action"})),i.createElement(h.Z,null)),i.createElement(g.Z,{additionalClassName:"cart-modal-title"},i.createElement(l.Z,{id:"cart.cart_heading"})),n)};const x=function(e){var t=e.additionalLineItems,n=(e.children,e.isTaxIncluded),r=e.taxes,c=e.onRequestClose,o=e.onAfterOpen,m=e.storeCurrency,s=e.shopperCurrency,u=e.isOpen,d=e.headerLink,p=e.lineItems,h=e.total,g=(0,a._T)(e,["additionalLineItems","children","isTaxIncluded","taxes","onRequestClose","onAfterOpen","storeCurrency","shopperCurrency","isOpen","headerLink","lineItems","total"]),x=n&&r&&r.length>0;return i.createElement(E.Z,{additionalBodyClassName:"cart-modal-body optimizedCheckout-orderSummary",additionalHeaderClassName:"cart-modal-header optimizedCheckout-orderSummary",header:I({headerLink:d,onRequestClose:c}),isOpen:u,onAfterOpen:o,onRequestClose:c},i.createElement(C.Z,null,i.createElement(f.Z,{items:p})),i.createElement(C.Z,null,i.createElement(y.Z,(0,a.pi)({isTaxIncluded:n,taxes:r},g)),t),i.createElement(C.Z,null,i.createElement(Z.Z,{orderAmount:h,shopperCurrencyCode:s.code,storeCurrencyCode:m.code})),x&&i.createElement(C.Z,null,i.createElement("h5",{className:"cart-taxItem cart-taxItem--subtotal optimizedCheckout-contentPrimary","data-test":"tax-text"},i.createElement(l.Z,{id:"tax.inclusive_label"})),(r||[]).map((function(e,t){return i.createElement(v.Z,{amount:e.amount,key:t,label:e.name,testId:"cart-taxes"})}))))};const b=(0,i.memo)((function(e){var t=e.additionalLineItems,n=e.coupons,r=e.discountAmount,p=e.giftCertificates,h=e.handlingAmount,E=e.headerLink,g=e.isTaxIncluded,f=e.lineItems,v=e.onRemovedCoupon,C=e.onRemovedGiftCertificate,y=e.shippingAmount,Z=e.shopperCurrency,I=e.storeCreditAmount,b=e.giftWrappingAmount,N=e.storeCurrency,k=e.subtotalAmount,_=e.taxes,A=e.total,w=(0,i.useCallback)((function(e){return i.createElement(x,(0,a.pi)({},e,{additionalLineItems:t,coupons:n,discountAmount:r,giftCertificates:p,giftWrappingAmount:b,handlingAmount:h,headerLink:E,isTaxIncluded:g,lineItems:f,onRemovedCoupon:v,onRemovedGiftCertificate:C,shippingAmount:y,shopperCurrency:Z,storeCreditAmount:I,storeCurrency:N,subtotalAmount:k,taxes:_,total:A}))}),[t,n,r,p,h,E,g,f,v,C,b,y,Z,I,N,k,_,A]);return i.createElement(s.Z,{modal:w},(function(e){var t=e.onClick,n=e.onKeyPress;return i.createElement("div",{className:"cartDrawer optimizedCheckout-orderSummary",onClick:t,onKeyPress:n,tabIndex:0},i.createElement("figure",{className:c()("cartDrawer-figure",{"cartDrawer-figure--stack":d(f)>1})},i.createElement("div",{className:"cartDrawer-imageWrapper"},function(e){var t=e.physicalItems[0]||e.digitalItems[0];if(t&&t.imageUrl)return i.createElement("img",{alt:t.name,"data-test":"cart-item-image",src:t.imageUrl});if(e.giftCertificates.length)return i.createElement(m.Z,null)}(f))),i.createElement("div",{className:"cartDrawer-body"},i.createElement("h3",{className:"cartDrawer-items optimizedCheckout-headingPrimary"},i.createElement(l.Z,{data:{count:(0,u.Z)(f)},id:"cart.item_count_text"})),i.createElement("a",null,i.createElement(l.Z,{id:"cart.show_details_action"}))),i.createElement("div",{className:"cartDrawer-actions"},i.createElement("h3",{className:"cartDrawer-total optimizedCheckout-headingPrimary"},i.createElement(o.Z,{amount:A}))))}))}))},65228:(e,t,n)=>{n.d(t,{Z:()=>Z});var a=n(86940),r=n(67627),c=n(70140);const i=(0,n(25426).Z)((function(){return r.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}))}));var o=n(34984),l=n(77068);const m=function(e){return{id:e.id,quantity:e.quantity,amount:e.extendedListPrice,name:e.name}};function s(e){if(e.imageUrl)return r.createElement("img",{alt:e.name,"data-test":"cart-item-image",src:e.imageUrl})}function u(e){return e.downloadPageUrl?{testId:"cart-item-digital-product-download",content:r.createElement("a",{href:e.downloadPageUrl,rel:"noopener noreferrer",target:"_blank"},r.createElement(c.Z,{id:"cart.downloads_action"}))}:{testId:"cart-item-digital-product",content:r.createElement(c.Z,{id:"cart.digital_item_text"})}}const d=function(e){return{id:e.id,quantity:e.quantity,amount:e.extendedListPrice,amountAfterDiscount:e.extendedSalePrice,name:e.name,image:s(e),productOptions:(0,a.ev)((0,a.ev)([],(e.options||[]).map((function(e){return{testId:"cart-item-product-option",content:"".concat(e.name," ").concat(e.value)}})),!0),[u(e)],!1)}};var p=n(34927);const h=function(e){return{id:e.id,quantity:1,amount:e.amount,name:e.name,image:r.createElement("span",{className:"productImage-giftCertificate","data-test":"cart-item-gift-certificate"},r.createElement(p.Z,null))}};const E=function(e){return{id:e.id,quantity:e.quantity,amount:e.extendedComparisonPrice,amountAfterDiscount:e.extendedSalePrice,name:e.name,image:s(e),description:e.giftWrapping?e.giftWrapping.name:void 0,productOptions:(e.options||[]).map((function(e){return{testId:"cart-item-product-option",content:"".concat(e.name," ").concat(e.value)}}))}};var g=n(696),f=n.n(g),v=n(91074),C=n(59728);const y=(0,r.memo)((function(e){var t=e.amount,n=e.amountAfterDiscount,a=e.image,c=e.name,i=e.productOptions,o=e.quantity,l=e.description;return r.createElement("div",{className:"product","data-test":"cart-item"},r.createElement("figure",{className:"product-column product-figure"},a),r.createElement("div",{className:"product-column product-body"},r.createElement("h4",{className:"product-title optimizedCheckout-contentPrimary","data-test":"cart-item-product-title"},"".concat(o," x ").concat(c)),i&&i.length>0&&r.createElement("ul",{className:"product-options optimizedCheckout-contentSecondary","data-test":"cart-item-product-options"},i.map((function(e,t){return r.createElement("li",{className:"product-option","data-test":e.testId,key:t},e.content)}))),l&&r.createElement("div",{className:"product-description optimizedCheckout-contentSecondary","data-test":"cart-item-product-description"},l)),r.createElement("div",{className:"product-column product-actions"},r.createElement("div",{className:f()("product-price","optimizedCheckout-contentPrimary",{"product-price--beforeDiscount":(0,v.isNumber)(n)&&n!==t}),"data-test":"cart-item-product-price"},r.createElement(C.Z,{amount:t})),(0,v.isNumber)(n)&&n!==t&&r.createElement("div",{className:"product-price","data-test":"cart-item-product-price--afterDiscount"},r.createElement(C.Z,{amount:n}))))}));const Z=function(e){function t(t){var n=e.call(this,t)||this;return n.handleToggle=function(){var e=n.state.isExpanded;n.setState({isExpanded:!e})},n.state={isExpanded:!1},n}return(0,a.ZT)(t,e),t.prototype.render=function(){var e=this.props.items,t=this.state.isExpanded;return r.createElement(r.Fragment,null,r.createElement("h3",{className:"cart-section-heading optimizedCheckout-contentPrimary","data-test":"cart-count-total"},r.createElement(c.Z,{data:{count:(0,l.Z)(e)},id:"cart.item_count_text"})),r.createElement("ul",{"aria-live":"polite",className:"productList"},(0,a.ev)((0,a.ev)((0,a.ev)((0,a.ev)([],e.physicalItems.slice().sort((function(e){return e.variantId})).map(E),!0),e.giftCertificates.slice().map(h),!0),e.digitalItems.slice().sort((function(e){return e.variantId})).map(d),!0),(e.customItems||[]).map(m),!0).slice(0,t?void 0:4).map((function(e){return r.createElement("li",{className:"productList-item is-visible",key:e.id},r.createElement(y,(0,a.pi)({},e)))}))),this.renderActions())},t.prototype.renderActions=function(){var e=this.state.isExpanded;if(!(this.getLineItemCount()<5))return r.createElement("div",{className:"cart-actions"},r.createElement("button",{className:"button button--tertiary button--tiny optimizedCheckout-buttonSecondary",onClick:this.handleToggle,type:"button"},e?r.createElement(r.Fragment,null,r.createElement(c.Z,{id:"cart.see_less_action"}),r.createElement(i,null)):r.createElement(r.Fragment,null,r.createElement(c.Z,{id:"cart.see_all_action"}),r.createElement(o.Z,null))))},t.prototype.getLineItemCount=function(){var e=this.props.items;return(e.customItems||[]).length+e.physicalItems.length+e.digitalItems.length+e.giftCertificates.length},t}(r.Component)},71282:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(86940),r=n(696),c=n.n(r),i=n(67627),o=n(35022),l=n(67106),m=n(59728);const s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={highlight:!1,previousAmount:0},t.handleTransitionEnd=function(e,n){var a=t.state.previousAmount;e.addEventListener("animationend",(function(r){r.target===e&&(t.setState({highlight:!1,previousAmount:a}),n())}))},t}return(0,a.ZT)(t,e),t.getDerivedStateFromProps=function(e,t){return{highlight:e.amount!==t.previousAmount,previousAmount:e.amount}},t.prototype.render=function(){var e=this.props,t=e.amount,n=e.actionLabel,a=e.onActionTriggered,r=e.children,s=e.className,u=e.currencyCode,d=e.label,p=e.superscript,h=e.testId,E=e.zeroLabel,g=this.state.highlight,f=function(e,t){return null==e?"--":t&&0===e?t:e}(t,E);return i.createElement("div",{"data-test":h},i.createElement(o.CSSTransition,{addEndListener:this.handleTransitionEnd,classNames:"changeHighlight",in:g,timeout:{}},i.createElement("div",{"aria-live":"polite",className:c()("cart-priceItem","optimizedCheckout-contentPrimary",s)},i.createElement("span",{className:"cart-priceItem-label"},i.createElement("span",{"data-test":"cart-price-label"},d,"  "),u&&i.createElement("span",{className:"cart-priceItem-currencyCode"},"(".concat(u,") ")),a&&n&&i.createElement("span",{className:"cart-priceItem-link"},i.createElement("a",{"data-test":"cart-price-callback",href:"#",onClick:(0,l.Z)(a)},n))),i.createElement("span",{className:"cart-priceItem-value"},i.createElement("span",{"data-test":"cart-price-value"},function(e){return"number"==typeof e}(f)?i.createElement(m.Z,{amount:f}):f),p&&i.createElement("sup",{"data-test":"cart-price-value-superscript"},p)),r)))},t}(i.Component)},48527:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67627);const r=function(e){var t=e.children;return a.createElement("section",{className:"cart-section optimizedCheckout-orderSummary-cartSection"},t)}},57993:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(67627),r=n(70140),c=n(86940),i=n(59728),o=n(71282);const l=(0,a.memo)((function(e){var t=e.code,n=e.remaining,l=e.amount,m=e.onRemoved,s=(0,c._T)(e,["code","remaining","amount","onRemoved"]);return a.createElement(o.Z,(0,c.pi)({},s,m&&{onActionTriggered:function(){return t&&m(t)},actionLabel:a.createElement(r.Z,{id:"cart.remove_action"})},{amount:-1*(l||0)}),!!n&&n>0&&a.createElement("span",{className:"cart-priceItem-postFix optimizedCheckout-contentSecondary","data-test":"cart-price-remaining"},a.createElement(r.Z,{id:"cart.remaining_text"}),": ",a.createElement(i.Z,{amount:n})),t&&a.createElement("span",{className:"cart-priceItem-postFix optimizedCheckout-contentSecondary","data-test":"cart-price-code"},t))}));const m=(0,a.memo)((function(e){var t=e.discountAmount,n=e.isTaxIncluded,c=e.giftCertificates,i=e.taxes,m=e.giftWrappingAmount,s=e.shippingAmount,u=e.subtotalAmount,d=e.handlingAmount,p=e.storeCreditAmount,h=e.coupons,E=e.onRemovedGiftCertificate,g=e.onRemovedCoupon;return a.createElement(a.Fragment,null,a.createElement(o.Z,{amount:u,className:"cart-priceItem--subtotal",label:a.createElement(r.Z,{id:"cart.subtotal_text"}),testId:"cart-subtotal"}),(h||[]).map((function(e,t){return a.createElement(l,{amount:e.discountedAmount,code:e.code,key:t,label:e.displayName,onRemoved:g,testId:"cart-coupon"})})),!!t&&a.createElement(l,{amount:t,label:a.createElement(r.Z,{id:"cart.discount_text"}),testId:"cart-discount"}),(c||[]).map((function(e,t){return a.createElement(l,{amount:e.used,code:e.code,key:t,label:a.createElement(r.Z,{id:"cart.gift_certificate_text"}),onRemoved:E,remaining:e.remaining,testId:"cart-gift-certificate"})})),!!m&&a.createElement(o.Z,{amount:m,label:a.createElement(r.Z,{id:"cart.gift_wrapping_text"}),testId:"cart-gift-wrapping"}),a.createElement(o.Z,{amount:s,label:a.createElement(r.Z,{id:"cart.shipping_text"}),testId:"cart-shipping",zeroLabel:a.createElement(r.Z,{id:"cart.free_text"})}),!!d&&a.createElement(o.Z,{amount:d,label:a.createElement(r.Z,{id:"cart.handling_text"}),testId:"cart-handling"}),!n&&(i||[]).map((function(e,t){return a.createElement(o.Z,{amount:e.amount,key:t,label:e.name,testId:"cart-taxes"})})),!!p&&a.createElement(l,{amount:p,label:a.createElement(r.Z,{id:"cart.store_credit_text"}),testId:"cart-store-credit"}))}))},50041:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67627),r=n(70140),c=n(91278),i=n(71282);const o=(0,c.Z)((function(e){var t=e.shopperCurrencyCode,n=e.storeCurrencyCode,c=e.orderAmount,o=e.currency,l=t!==n,m=a.createElement(a.Fragment,null,l?a.createElement(r.Z,{id:"cart.estimated_total_text"}):a.createElement(r.Z,{id:"cart.total_text"})," (".concat(t,")"));return a.createElement(a.Fragment,null,a.createElement(i.Z,{amount:c,className:"cart-priceItem--total",label:m,superscript:l?"*":void 0,testId:"cart-total"}),l&&o&&a.createElement("p",{className:"cart-priceItem--totalNote","data-test":"cart-price-item-total-note"},a.createElement(r.Z,{data:{total:o.toStoreCurrency(c),code:n},id:"cart.billed_amount_text"})))}))},77068:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(86940);function r(e){var t=e.physicalItems,n=e.digitalItems,r=e.giftCertificates,c=e.customItems;return(0,a.ev)((0,a.ev)((0,a.ev)([],t,!0),n,!0),c||[],!0).reduce((function(e,t){return e+t.quantity}),0)+r.length}},34927:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67627);const r=function(){return a.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"}))}},70218:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(86940),r=n(67627);const c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={isOpen:!1},t.canHandleEvent=!1,t.handleOpen=function(){t.canHandleEvent&&t.setState({isOpen:!0})},t.handleClose=function(){t.canHandleEvent&&t.setState({isOpen:!1})},t.handleKeyOpen=function(e){"Enter"===e.key&&t.handleOpen()},t}return(0,a.ZT)(t,e),t.prototype.componentDidMount=function(){this.canHandleEvent=!0},t.prototype.componentWillUnmount=function(){this.canHandleEvent=!1},t.prototype.render=function(){var e=this.props,t=e.children,n=e.modal,a=this.state.isOpen;return r.createElement(r.Fragment,null,t({onClick:this.handleOpen,onKeyPress:this.handleKeyOpen}),n({isOpen:a,onRequestClose:this.handleClose}))},t}(r.Component)}}]);
//# sourceMappingURL=order-summary-drawer-348ed3d7.js.map