webpackJsonp([171],{183:function(t,e,i){var a=i(0)(i(472),i(765),null,null,null);t.exports=a.exports},472:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{items:[{action:"move_to_inbox",title:"Inbox"},{action:"send",title:"Sent"},{action:"delete",title:"Trash"},{action:"report",title:"Spam"},{divider:!0},{header:"Labels"},{action:"label",title:"Family"},{action:"label",title:"Friends"},{action:"label",title:"Work"}]}}}},765:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[i("v-card",[i("v-toolbar",{staticClass:"teal lighten-3 white--text",attrs:{dark:""}},[i("v-toolbar-side-icon"),i("v-toolbar-title",[t._v("Manage")]),i("v-spacer"),i("v-btn",{attrs:{icon:""}},[i("v-icon",[t._v("more_vert")])],1)],1),i("v-list",{staticClass:"teal darken-4"},[t._l(t.items,function(e){return[e.action?i("v-list-tile",{key:e},[i("v-list-tile-action",[i("v-icon",{attrs:{dark:""}},[t._v(t._s(e.action))])],1),i("v-list-tile-content",{staticClass:"white--text"},[i("v-list-tile-title",[t._v(t._s(e.title))])],1)],1):e.divider?i("v-divider",{attrs:{dark:""}}):e.header?i("v-subheader",{staticClass:"grey--text text--lighten-4",domProps:{textContent:t._s(e.header)}}):t._e()]})],2)],1)],1)],1)},staticRenderFns:[]}}});