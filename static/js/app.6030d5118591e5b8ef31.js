webpackJsonp([1],{"8xYN":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),o=n("mvHQ"),s=n.n(o),a=n("Zrlr"),c=n.n(a),d=function t(){c()(this,t)};d.STATE_ACTIVE="Active",d.STATE_COMPLETED="Completed";var u=d,l=Date.now(),r=function t(e){c()(this,t),this.id=l++,this.subject=e,this.state=u.STATE_ACTIVE,this.editing=!1},p=window.localStorage,m={name:"Todo",data:function(){var t=[{name:"All"},{name:u.STATE_ACTIVE},{name:u.STATE_COMPLETED}],e=JSON.parse(p.getItem("pwa-homework5")||"[]");return{Values:u,textInput:"",tabs:t,activeTab:t[0],viewTodoItems:e,todoItems:e}},methods:{addTodoItem:function(){this.textInput&&(this.todoItems.push(new r(this.textInput)),this.textInput="",this._updateViewTodoItems())},deleteTodoItem:function(t){var e=this.todoItems.findIndex(function(e){return e===t});this.todoItems.splice(e,1),this._updateViewTodoItems()},changeTodoState:function(t){t.state=t.state===u.STATE_ACTIVE?u.STATE_COMPLETED:u.STATE_ACTIVE,this._updateViewTodoItems()},changeTab:function(t){var e=this.tabs[t];this.activeTab=e,this._updateViewTodoItems()},enterTodoEdit:function(t,e){var n=t.currentTarget.nextElementSibling.querySelector("input");e.editing=!0,this.$nextTick(function(){n.select()})},_updateViewTodoItems:function(){var t=this;"All"===this.activeTab.name?this.viewTodoItems=this.todoItems:this.viewTodoItems=this.todoItems.filter(function(e){return e.state===t.activeTab.name}),p.setItem("pwa-homework5",s()(this.todoItems))}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column is-half"},[n("nav",{staticClass:"panel"},[n("p",{staticClass:"panel-heading has-text-centered"},[t._v("Todos")]),t._v(" "),n("form",{staticClass:"panel-block",on:{submit:function(e){return e.preventDefault(),t.addTodoItem(e)}}},[n("p",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.textInput,expression:"textInput"}],staticClass:"input",attrs:{type:"text",placeholder:"What to do",autofocus:"",autocomplete:"off"},domProps:{value:t.textInput},on:{input:function(e){e.target.composing||(t.textInput=e.target.value)}}})])]),t._v(" "),n("p",{staticClass:"panel-tabs"},t._l(t.tabs,function(e,i){return n("a",{key:e.name,class:e===t.activeTab?"is-active":"",on:{click:function(e){t.changeTab(i)}}},[t._v(t._s(e.name))])})),t._v(" "),n("div",t._l(t.viewTodoItems,function(e){return n("div",{key:e.id,staticClass:"todo panel-block"},[n("input",{staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:e.state===t.Values.STATE_COMPLETED},on:{change:function(n){t.changeTodoState(e)}}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.editing,expression:"!todo.editing"}],staticStyle:{flex:"1","min-width":"0"},on:{click:function(n){t.enterTodoEdit(n,e)}}},[n("div",{staticStyle:{overflow:"hidden","text-overflow":"ellipsis"}},[t._v(t._s(e.subject))])]),t._v(" "),n("form",{directives:[{name:"show",rawName:"v-show",value:e.editing,expression:"todo.editing"}],staticStyle:{flex:"1","min-width":"0"},on:{submit:function(t){t.preventDefault(),e.editing=!1}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.subject,expression:"todo.subject"}],staticClass:"input is-small",attrs:{type:"text"},domProps:{value:e.subject},on:{blur:function(t){e.editing=!1},input:function(n){n.target.composing||t.$set(e,"subject",n.target.value)}}})]),t._v(" "),n("button",{staticClass:"is-pulled-right",staticStyle:{display:"block"},attrs:{type:"button"},on:{click:function(n){t.deleteTodoItem(e)}}},[t._v("X")])])}))])])])},staticRenderFns:[]};var T={name:"App",components:{Todo:n("VU/8")(m,v,!1,function(t){n("8xYN")},"data-v-1db3fc0e",null).exports}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Todo")],1)},staticRenderFns:[]};var f=n("VU/8")(T,h,!1,function(t){n("caT6")},null,null).exports;i.a.config.productionTip=!1,new i.a({el:"#app",components:{App:f},template:"<App/>"})},caT6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6030d5118591e5b8ef31.js.map