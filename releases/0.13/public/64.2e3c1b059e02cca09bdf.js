webpackJsonp([64],{386:function(e,o,t){var a=t(0)(t(603),t(853),null,null,null);e.exports=a.exports},603:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{doc:{title:"Icons",component:"icon",edit:"IconView",desc:'The <code>v-icon</code> component provides a large set of glyphs to provide context to various aspects of your application. Vuetify icons utilize Google\'s Material Icons font library. For a list of all available icons, visit the official <a href="https://material.io/icons/" target="_blank" rel="noopener">Material Icons</a> page.',examples:[{header:"Standard",file:"icons/1",desc:"Icons come in two themes (light and dark), and four different sizes (standard, medium, large, and x-large)."},{header:"Font Awesome",file:"icons/2",desc:'<a href="http://fontawesome.io/icons/">Font Awesome</a> is also supported with the use of the <code>fa</code> prop. All text will be prefixed with <em>fa-</em> so that you can write your icons the same way as Material icons. Please note that you still need to include the Font Awesome icons in your project.'},{header:"Material Design Icons",file:"icons/3",desc:'<a href="https://materialdesignicons.com/">Material Design Icons</a> is also supported with the use of the <code>mdi</code> prop. All text will be prefixed with <em>mdi-</em> so that you can write your icons the same way as Material icons. Please note that you still need to include the MDI icons in your project.'},{header:"Color",file:"icons/4",desc:"Using color helpers you can change the color of an icon from the standard dark and light themes."},{header:"Buttons",file:"icons/5",desc:"Icons can be used inside of buttons to add emphasis to the action."}],props:{"v-icon":{params:[["medium","Boolean","False","Medium size"],["large","Boolean","False","Large size"],["x-large","Boolean","False","Extra-Large size"],["left","Boolean","False","Places icon on the left, when used inside a button"],["right","Boolean","False","Places icon on the right, when used inside a button"],["light","Boolean","False","Applies the light theme (default dark)"],["fa","Boolean","False","Switches icons to Font Awesome"],["mdi","Boolean","False","Switches icons to Material Design Icons"]]}}}}}}},853:function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("component-view",{attrs:{doc:e.doc}},[t("v-alert",{attrs:{warning:"warning",value:"value"}},[t("span",[e._v("Custom font libraries such as Icomoon can overwrite the "),t("code",[e._v("icon-")]),e._v(" class and cause issues. While other icon packages can work, the only official support is for Material Icons, FontAwesome, and Material Design Icons.")])])],1)},staticRenderFns:[]}}});