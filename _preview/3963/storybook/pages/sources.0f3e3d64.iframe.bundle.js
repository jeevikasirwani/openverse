(window.webpackJsonp=window.webpackJsonp||[]).push([[206,14],{"./src/components/VContentPage.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.js"),constants_window=__webpack_require__("./src/constants/window.ts"),components_VContentPagevue_type_script_lang_ts_=Object(vue.defineComponent)({name:"VContentPage",setup:function setup(){return{skipToContentTargetId:constants_window.b}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_babel-core@7.0.0-bridge.0_css-loader@5.2.7_vue-template-compiler@2.7.15_webpack@4.46.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)(components_VContentPagevue_type_script_lang_ts_,(function render(){var _c=this._self._c;this._self._setupProxy;return _c("main",{staticClass:"flex-grow pt-5 md:pt-10",attrs:{id:this.skipToContentTargetId,tabindex:"-1",dir:"ltr"}},[_c("div",{staticClass:"prose-h1:text-bold prose prose-sm mx-auto mb-10 max-w-none px-6 md:prose-base prose-headings:font-bold prose-h1:text-4xl prose-h2:text-2xl prose-h2:font-semibold prose-h3:text-2xl prose-h3:font-semibold md:max-w-4xl md:prose-h1:mb-10 md:prose-h2:mt-10 md:prose-h3:mt-10 lg:mb-30 lg:px-0 lg:prose-headings:text-3xl lg:prose-h1:text-6xl xl:max-w-5xl"},[this._t("default",null,{default:""})],2)])}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"VContentPage",exportName:"default",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[{name:"default",title:"binding"}]}]}},"./src/pages/sources.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("../node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_@nuxt+vue-app@2.17.2_nuxt@2.17.2_vue@2.7.15/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),media=__webpack_require__("./src/constants/media.ts"),use_i18n=__webpack_require__("./src/composables/use-i18n.ts"),VButton=__webpack_require__("./src/components/VButton.vue"),VLink=__webpack_require__("./src/components/VLink.vue"),VContentPage=__webpack_require__("./src/components/VContentPage.vue"),VSourcesTable=__webpack_require__("./src/components/VSourcesTable.vue"),pages_sourcesvue_type_script_lang_ts_=Object(runtime.b)({name:"SourcePage",components:{VButton:VButton.default,VContentPage:VContentPage.default,VLink:VLink.default,VSourcesTable:VSourcesTable.default},layout:"content-layout",setup:function setup(){var i18n=Object(use_i18n.a)();return Object(runtime.j)({title:"".concat(i18n.t("sources.title")," | Openverse"),meta:[{hid:"robots",name:"robots",content:"all"}]}),{supportedMediaTypes:media.n}},head:{}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_babel-core@7.0.0-bridge.0_css-loader@5.2.7_vue-template-compiler@2.7.15_webpack@4.46.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(pages_sourcesvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("VContentPage",[_c("h1",[_vm._v("\n    "+_vm._s(_vm.$t("sources.title"))+"\n  ")]),_vm._v(" "),_c("h2",[_vm._v("\n    "+_vm._s(_vm.$t("sources.ccContent.where",{openverse:"Openverse"}))+"\n  ")]),_vm._v(" "),_c("p",[_vm._v("\n    "+_vm._s(_vm.$t("sources.ccContent.content",{openverse:"Openverse"}))+"\n  ")]),_vm._v(" "),_c("i18n",{attrs:{path:"sources.ccContent.provider",tag:"p"},scopedSlots:_vm._u([{key:"flickr",fn:function fn(){return[_c("VLink",{attrs:{href:"https://www.flickr.com/"}},[_vm._v("Flickr")])]},proxy:!0},{key:"smithsonian",fn:function fn(){return[_c("VLink",{attrs:{href:"https://www.si.edu/"}},[_vm._v(_vm._s(_vm.$t("sources.ccContent.smithsonian")))])]},proxy:!0}])}),_vm._v(" "),_c("i18n",{attrs:{path:"sources.ccContent.europeana",tag:"p"},scopedSlots:_vm._u([{key:"openverse",fn:function fn(){return[_vm._v("Openverse")]},proxy:!0},{key:"link",fn:function fn(){return[_c("VLink",{attrs:{href:"https://www.europeana.eu/en"}},[_vm._v("Europeana")])]},proxy:!0},{key:"linkApi",fn:function fn(){return[_c("VLink",{attrs:{href:"https://pro.europeana.eu/page/apis"}},[_vm._v(_vm._s(_vm.$t("sources.ccContent.europeanaApi")))])]},proxy:!0}])}),_vm._v(" "),_c("h2",[_vm._v("\n    "+_vm._s(_vm.$t("sources.newContent.next"))+"\n  ")]),_vm._v(" "),_c("p",[_vm._v("\n    "+_vm._s(_vm.$t("sources.newContent.integrate"))+"\n  ")]),_vm._v(" "),_c("ul",[_c("li",[_vm._v("\n      "+_vm._s(_vm.$t("sources.newContent.impact"))+"\n    ")]),_vm._v(" "),_c("li",[_vm._v("\n      "+_vm._s(_vm.$t("sources.newContent.reuse"))+"\n    ")]),_vm._v(" "),_c("li",[_vm._v("\n      "+_vm._s(_vm.$t("sources.newContent.totalItems"))+"\n    ")])]),_vm._v(" "),_c("h2",[_vm._v("\n    "+_vm._s(_vm.$t("sources.suggestions"))+"\n  ")]),_vm._v(" "),_c("p",{staticClass:"mt-5 inline-block"},[_c("VButton",{staticClass:"not-prose description-bold",attrs:{as:"VLink",variant:"filled-pink",size:"large","show-external-icon":"","external-icon-size":6,"has-icon-end":"",href:"https://github.com/WordPress/openverse/issues/new?assignees=&labels=%F0%9F%9A%A6+status%3A+awaiting+triage%2C+%F0%9F%A7%B9+status%3A+ticket+work+required%2C+%E2%98%81%EF%B8%8F+provider%3A+any&template=new-source-suggestion.md&title=[Source+Suggestion]+Insert+source+name+here"}},[_vm._v("\n      "+_vm._s(_vm.$t("sources.issueButton"))+"\n    ")])],1),_vm._v(" "),_c("i18n",{attrs:{path:"sources.detail",tag:"p"},scopedSlots:_vm._u([{key:"singleName",fn:function fn(){return[_c("strong",[_vm._v("\n        "+_vm._s(_vm.$t("sources.singleName"))+"\n      ")])]},proxy:!0}])}),_vm._v(" "),_vm._l(_vm.supportedMediaTypes,(function(mediaType,i){return[_c("h3",{key:"h3-".concat(mediaType)},[_vm._v(_vm._s(_vm.$t("sources.heading.".concat(mediaType))))]),_vm._v(" "),_c("VSourcesTable",{key:"table-".concat(mediaType),staticClass:"mt-4",class:i<_vm.supportedMediaTypes.length-1?"mb-10":"",attrs:{media:mediaType}})]}))],2)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VLink:__webpack_require__("./src/components/VLink.vue").default,VButton:__webpack_require__("./src/components/VButton.vue").default,VSourcesTable:__webpack_require__("./src/components/VSourcesTable.vue").default,VContentPage:__webpack_require__("./src/components/VContentPage.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"SourcePage",exportName:"default",description:"",tags:{}}}}]);