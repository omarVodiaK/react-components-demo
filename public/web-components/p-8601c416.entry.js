import{r as a,c as d,h as o}from"./p-0cf7d88f.js";const l=class{constructor(o){a(this,o),this.dimiss=d(this,"dimiss",7)}dismissModal(){var a;null===(a=this.dimiss)||void 0===a||a.emit()}backDropClick(a){console.log("clicked",a,this.backdropDismiss,this.toggle,this.centered),null==a||a.stopPropagation(),this.backdropDismiss&&this.dismissModal()}render(){return o("div",{class:{show:this.toggle,"modal-centered":this.centered,"ac modal":!0},role:"dialog",tabIndex:-1,"aria-modal":"true",onClick:a=>this.backDropClick(a)},o("div",{role:"document",class:"modal-dialog"},o("div",{class:"modal-content"},o("div",{class:"modal-header"},o("slot",{name:"header"}),o("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",onClick:()=>{this.dismissModal()}},o("span",{"aria-hidden":"true"},"×"))),o("div",{class:"modal-body"},o("slot",{name:"body"})),o("div",{class:"modal-footer"},o("slot",{name:"footer"})))))}};l.style="div.ac.modal,div.ac.modal.modal-aside{display:flex;justify-content:center;height:0;background-color:rgba(0, 0, 0, 0.6);transition:opacity 200ms linear}div.ac.modal.show,div.ac.modal.modal-aside.show{animation:fade-in-modal-container 200ms forwards}div.ac.modal.hide,div.ac.modal.modal-aside.hide{animation:fade-out-modal-container 400ms forwards}div.ac.modal>.modal-dialog,div.ac.modal.modal-aside>.modal-dialog{margin:0;animation:none}div.ac.modal.modal-centered,div.ac.modal.modal-aside.modal-centered{align-items:center}div.ac.modal:not(.modal-aside):not(.modal-fullscreen)>.modal-dialog{height:max-content}@media (min-width: 576px){div.ac.modal:not(.modal-aside):not(.modal-fullscreen)>.modal-dialog:not(.modal-lg):not(.modal-sm){width:500px}}@media (min-width: 576px){div.ac.modal:not(.modal-aside):not(.modal-fullscreen)>.modal-dialog.modal-lg{width:800px}}@media (min-width: 576px){div.ac.modal:not(.modal-aside):not(.modal-fullscreen)>.modal-dialog.modal-sm{width:300px}}@media (min-width: 576px){div.ac.modal:not(.modal-aside):not(.modal-fullscreen):not(.modal-centered)>.modal-dialog{margin-top:1.75rem}}div.ac.modal:not(.modal-aside):not(.modal-fullscreen).show>.modal-dialog{animation:modal-slide-down 400ms forwards}div.ac.modal:not(.modal-aside):not(.modal-fullscreen).hide>.modal-dialog{animation:modal-slide-up 400ms forwards}div.ac.modal.modal-aside>.modal-dialog{position:absolute}div.ac.modal.modal-aside.modal-aside-right.show>.modal-dialog{animation:modal-slide-in-right 400ms forwards}div.ac.modal.modal-aside.modal-aside-right.hide>.modal-dialog{animation:modal-slide-out-right 400ms forwards}div.ac.modal.modal-aside.modal-aside-left.show>.modal-dialog{animation:modal-slide-in-left 400ms forwards}div.ac.modal.modal-aside.modal-aside-left.hide>.modal-dialog{animation:modal-slide-out-left 400ms forwards}div.ac.modal.modal-fullscreen>.modal-dialog{position:absolute;left:0}@keyframes fade-in-modal-container{0%{display:none;height:0;opacity:0}1%{display:flex;height:100%;opacity:0}100%{display:flex;height:100%;opacity:1}}@keyframes fade-out-modal-container{0%{display:flex;height:100%;opacity:1}99%{display:flex;height:100%;opacity:0}100%{display:none;height:0;opacity:0}}@keyframes modal-slide-down{0%{transform:translate3d(0, -30%, 0)}100%{transform:translate3d(0, 0, 0)}}@keyframes modal-slide-up{0%{transform:translate3d(0, 0, 0)}100%{transform:translate3d(0, -30%, 0)}}@keyframes modal-slide-in-right{0%{transform:translate3d(100%, 0, 0)}100%{transform:translate3d(0, 0, 0)}}@keyframes modal-slide-out-right{0%{transform:translate3d(0, 0, 0)}100%{transform:translate3d(100%, 0, 0)}}@keyframes modal-slide-in-left{0%{transform:translate3d(-100%, 0, 0)}100%{transform:translate3d(0, 0, 0)}}@keyframes modal-slide-out-left{0%{transform:translate3d(0, 0, 0)}100%{transform:translate3d(-100%, 0, 0)}}";export{l as seb_modal}