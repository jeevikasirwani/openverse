(window.webpackJsonp=window.webpackJsonp||[]).push([[201,15,23,24],{"../node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!../node_modules/.pnpm/vue-loader@15.11.1_babel-core@7.0.0-bridge.0_cache-loader@4.1.0_css-loader@5.2.7_lodash@4.17._jlc3rveazgxxfpnki3dcnqr46u/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/.pnpm/postcss-loader@4.3.0_postcss@8.4.31_webpack@4.46.0/node_modules/postcss-loader/dist/cjs.js?!../node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!../node_modules/.pnpm/vue-loader@15.10.0_babel-core@7.0.0-bridge.0_css-loader@5.2.7_vue-template-compiler@2.7.15_webpack@4.46.0/node_modules/vue-loader/lib/index.js?!./src/components/VSearchResultsTitle.vue?vue&type=style&index=0&id=04fb7dee&prod&scoped=true&lang=css&":function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__("../node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/runtime/api.js")((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,"h1[data-v-04fb7dee]:first-letter{text-transform:uppercase}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},"../node_modules/.pnpm/vue-docgen-loader@1.5.0_vue-docgen-api@4.44.18_webpack@4.46.0/node_modules/vue-docgen-loader/lib/index.js?!../node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js?!../node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!../node_modules/.pnpm/vue-loader@15.11.1_babel-core@7.0.0-bridge.0_cache-loader@4.1.0_css-loader@5.2.7_lodash@4.17._jlc3rveazgxxfpnki3dcnqr46u/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/.pnpm/postcss-loader@4.3.0_postcss@8.4.31_webpack@4.46.0/node_modules/postcss-loader/dist/cjs.js?!../node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!../node_modules/.pnpm/vue-loader@15.10.0_babel-core@7.0.0-bridge.0_css-loader@5.2.7_vue-template-compiler@2.7.15_webpack@4.46.0/node_modules/vue-loader/lib/index.js?!./src/components/VSearchResultsTitle.vue?vue&type=style&index=0&id=04fb7dee&prod&scoped=true&lang=css&":function(module,exports,__webpack_require__){var content=__webpack_require__("../node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!../node_modules/.pnpm/vue-loader@15.11.1_babel-core@7.0.0-bridge.0_cache-loader@4.1.0_css-loader@5.2.7_lodash@4.17._jlc3rveazgxxfpnki3dcnqr46u/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/.pnpm/postcss-loader@4.3.0_postcss@8.4.31_webpack@4.46.0/node_modules/postcss-loader/dist/cjs.js?!../node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!../node_modules/.pnpm/vue-loader@15.10.0_babel-core@7.0.0-bridge.0_css-loader@5.2.7_vue-template-compiler@2.7.15_webpack@4.46.0/node_modules/vue-loader/lib/index.js?!./src/components/VSearchResultsTitle.vue?vue&type=style&index=0&id=04fb7dee&prod&scoped=true&lang=css&");content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__("../node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/lib/addStylesClient.js").default)("63f6edbc",content,!0,{sourceMap:!1})},"./src/components/VExternalSearch/VExternalSearchForm.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.js"),pinia=__webpack_require__("../node_modules/.pnpm/pinia@2.1.7_typescript@5.2.2_vue@2.7.15/node_modules/pinia/dist/pinia.mjs"),emits=__webpack_require__("./src/types/emits.ts"),ui=__webpack_require__("./src/stores/ui.ts"),search=__webpack_require__("./src/stores/search.ts"),media=__webpack_require__("./src/stores/media/index.ts"),use_analytics=__webpack_require__("./src/composables/use-analytics.ts"),use_external_sources=__webpack_require__("./src/composables/use-external-sources.ts"),VExternalSourceList=__webpack_require__("./src/components/VExternalSearch/VExternalSourceList.vue"),VButton=__webpack_require__("./src/components/VButton.vue"),VIcon=__webpack_require__("./src/components/VIcon/VIcon.vue"),VModal=__webpack_require__("./src/components/VModal/VModal.vue"),VIconButton=__webpack_require__("./src/components/VIconButton/VIconButton.vue"),VExternalSearch_VExternalSearchFormvue_type_script_lang_ts_=Object(vue.defineComponent)({name:"VExternalSearchForm",components:{VModal:VModal.default,VIconButton:VIconButton.default,VIcon:VIcon.default,VButton:VButton.default,VExternalSourceList:VExternalSourceList.default},props:{searchTerm:{type:String,required:!0},isSupported:{type:Boolean,default:!1},hasNoResults:{type:Boolean,default:!0}},emits:{tab:Object(emits.a)()},setup:function setup(){var sectionRef=Object(vue.ref)(null),searchStore=Object(search.b)(),uiStore=Object(ui.a)(),sendCustomEvent=Object(use_analytics.a)().sendCustomEvent,mediaStore=Object(media.a)(),currentPage=Object(pinia.e)(mediaStore).currentPage;return{externalSourcesType:Object(use_external_sources.a)().externalSourcesType,sectionRef:sectionRef,isMd:Object(vue.computed)((function(){return uiStore.isBreakpoint("md")})),handleModalOpen:function handleModalOpen(){sendCustomEvent("VIEW_EXTERNAL_SOURCES",{searchType:searchStore.searchType,query:searchStore.searchTerm,resultPage:currentPage.value||1})}}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_babel-core@7.0.0-bridge.0_css-loader@5.2.7_vue-template-compiler@2.7.15_webpack@4.46.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VExternalSearch_VExternalSearchFormvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("section",{key:_vm.externalSourcesType,ref:"sectionRef",staticClass:"external-sources flex flex-row place-items-center justify-center pb-6 pt-4 lg:pb-10",attrs:{"data-testid":"external-sources-form"}},[_c("VModal",{staticClass:"w-full",attrs:{variant:"centered","hide-on-click-outside":!0,"labelled-by":"external-sources-button"},on:{open:_vm.handleModalOpen},scopedSlots:_vm._u([{key:"trigger",fn:function fn(triggerA11yProps){return[_c("VButton",{ref:"triggerRef",staticClass:"label-bold lg:description-bold h-16 w-full gap-x-2 lg:h-18",attrs:{id:"external-sources-button",pressed:triggerA11yProps["aria-expanded"],"aria-haspopup":"dialog","aria-controls":"external-sources-modal",variant:"bordered-gray",size:"disabled"}},[_vm.isMd?_c("i18n",{attrs:{path:"externalSources.form.supportedTitle",tag:"p"}}):_c("i18n",{attrs:{path:"externalSources.form.supportedTitleSm",tag:"p"}}),_vm._v(" "),_c("VIcon",{class:{"text-white":triggerA11yProps["aria-expanded"]},attrs:{name:"caret-down"}})],1)]}},{key:"top-bar",fn:function fn(_ref){var close=_ref.close;return[_c("header",{staticClass:"flex items-center justify-between pe-5 ps-7 pt-5 sm:pe-7 sm:ps-9 sm:pt-7"},[_c("h2",{staticClass:"heading-6",attrs:{tabindex:"-1"}},[_vm._v("\n          "+_vm._s(_vm.$t("externalSources.title"))+"\n        ")]),_vm._v(" "),_c("VIconButton",{attrs:{size:"small","icon-props":{name:"close"},variant:"transparent-gray",label:_vm.$t("modal.close")},on:{click:close}})],1)]}}])},[_vm._v(" "),_vm._v(" "),_c("VExternalSourceList",{staticClass:"flex flex-col",attrs:{"search-term":_vm.searchTerm}})],1)],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VIcon:__webpack_require__("./src/components/VIcon/VIcon.vue").default,VButton:__webpack_require__("./src/components/VButton.vue").default,VIconButton:__webpack_require__("./src/components/VIconButton/VIconButton.vue").default,VExternalSourceList:__webpack_require__("./src/components/VExternalSearch/VExternalSourceList.vue").default,VModal:__webpack_require__("./src/components/VModal/VModal.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VExternalSearchForm",exportName:"default",description:"",tags:{},props:[{name:"searchTerm",type:{name:"string"},required:!0},{name:"isSupported",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasNoResults",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"tab"}]}},"./src/components/VSearchResultsGrid/VSearchResults.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var slicedToArray=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),vue=(__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("../node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.js")),use_i18n=__webpack_require__("./src/composables/use-i18n.ts"),media=__webpack_require__("./src/stores/media/index.ts"),search=__webpack_require__("./src/stores/search.ts"),emits=__webpack_require__("./src/types/emits.ts"),VSearchResultsTitle=__webpack_require__("./src/components/VSearchResultsTitle.vue"),VMediaCollection=__webpack_require__("./src/components/VSearchResultsGrid/VMediaCollection.vue"),VLoadMore=__webpack_require__("./src/components/VLoadMore.vue"),VExternalSearchForm=__webpack_require__("./src/components/VExternalSearch/VExternalSearchForm.vue"),VContentLink=__webpack_require__("./src/components/VContentLink/VContentLink.vue"),VSearchResultsGrid_VSearchResultsvue_type_script_lang_ts_=Object(vue.defineComponent)({name:"VSearchResults",components:{VContentLink:VContentLink.default,VExternalSearchForm:VExternalSearchForm.default,VLoadMore:VLoadMore.default,VMediaCollection:VMediaCollection.default,VSearchResultsTitle:VSearchResultsTitle.default},props:{searchTerm:{type:String,required:!0},results:{type:Object,required:!0},isFetching:{type:Boolean,required:!0}},emits:{"load-more":Object(emits.a)()},setup:function setup(props){var i18n=Object(use_i18n.a)(),mediaStore=Object(media.a)(),searchStore=Object(search.b)();return{collectionLabel:Object(vue.computed)((function(){return i18n.t("browsePage.aria.results",{query:props.searchTerm}).toString()})),contentLinkPath:function contentLinkPath(mediaType){return searchStore.getSearchPath({type:mediaType})},resultCounts:Object(vue.computed)((function(){return mediaStore.resultCountsPerMediaType}))}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_babel-core@7.0.0-bridge.0_css-loader@5.2.7_vue-template-compiler@2.7.15_webpack@4.46.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VSearchResultsGrid_VSearchResultsvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("VMediaCollection",{attrs:{"collection-label":_vm.collectionLabel,results:_vm.results,"is-fetching":_vm.isFetching,"search-term":_vm.searchTerm,kind:"search"},scopedSlots:_vm._u([{key:"header",fn:function fn(){return[_vm.searchTerm?_c("header",{staticClass:"my-0 md:mb-8 md:mt-4"},[_c("VSearchResultsTitle",{attrs:{size:"all"===_vm.results.type?"large":"default"}},[_vm._v(_vm._s(_vm.searchTerm))])],1):_vm._e(),_vm._v(" "),"all"===_vm.results.type?_c("div",{staticClass:"mb-4 mt-2 grid grid-cols-2 gap-4 md:mt-0"},_vm._l(_vm.resultCounts,(function(_ref){var _ref2=Object(slicedToArray.a)(_ref,2),mediaType=_ref2[0],count=_ref2[1];return _c("VContentLink",{key:mediaType,attrs:{"media-type":mediaType,"search-term":_vm.searchTerm,"results-count":count,to:_vm.contentLinkPath(mediaType)}})})),1):_vm._e()]},proxy:!0},{key:"footer",fn:function fn(){return[_c("footer",{staticClass:"mb-6 mt-4 lg:mb-10"},[_c("VLoadMore",{staticClass:"mb-4",attrs:{"search-type":_vm.results.type,kind:"search","search-term":_vm.searchTerm,"is-fetching":_vm.isFetching},on:{"load-more":function loadMore($event){return _vm.$emit("load-more")}}}),_vm._v(" "),"all"!==_vm.results.type?_c("VExternalSearchForm",{attrs:{"search-term":_vm.searchTerm,"is-supported":!0,"has-no-results":!1}}):_vm._e()],1)]},proxy:!0}])})}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VSearchResultsTitle:__webpack_require__("./src/components/VSearchResultsTitle.vue").default,VContentLink:__webpack_require__("./src/components/VContentLink/VContentLink.vue").default,VLoadMore:__webpack_require__("./src/components/VLoadMore.vue").default,VExternalSearchForm:__webpack_require__("./src/components/VExternalSearch/VExternalSearchForm.vue").default,VMediaCollection:__webpack_require__("./src/components/VSearchResultsGrid/VMediaCollection.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VSearchResults",exportName:"default",description:"",tags:{},props:[{name:"searchTerm",type:{name:"string"},required:!0},{name:"results",type:{name:"Results"},required:!0},{name:"isFetching",type:{name:"boolean"},required:!0}],events:[{name:"load-more"}]}},"./src/components/VSearchResultsTitle.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.js"),components_VSearchResultsTitlevue_type_script_lang_ts_=Object(vue.defineComponent)({name:"VSearchResultsTitle",props:{size:{required:!1,default:"default",type:String}}}),componentNormalizer=(__webpack_require__("./src/components/VSearchResultsTitle.vue?vue&type=style&index=0&id=04fb7dee&prod&scoped=true&lang=css&"),__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_babel-core@7.0.0-bridge.0_css-loader@5.2.7_vue-template-compiler@2.7.15_webpack@4.46.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js"));const __vuedocgen_export_0=Object(componentNormalizer.a)(components_VSearchResultsTitlevue_type_script_lang_ts_,(function render(){var _c=this._self._c;this._self._setupProxy;return _c("h1",{staticClass:"sr-only break-words md:not-sr-only",class:["large"===this.size?"heading-2 lg:heading-1 !leading-none lg:!leading-none":"heading-2 !leading-none"]},[this._t("default",null,{default:""})],2)}),[],!1,null,"04fb7dee",null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"VSearchResultsTitle",exportName:"default",description:"",tags:{},props:[{name:"size",values:["default","large"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"default"'}}],slots:[{name:"default",scoped:!0,bindings:[{name:"default",title:"binding"}]}]}},"./src/components/VSearchResultsTitle.vue?vue&type=style&index=0&id=04fb7dee&prod&scoped=true&lang=css&":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("../node_modules/.pnpm/vue-docgen-loader@1.5.0_vue-docgen-api@4.44.18_webpack@4.46.0/node_modules/vue-docgen-loader/lib/index.js?!../node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js?!../node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!../node_modules/.pnpm/vue-loader@15.11.1_babel-core@7.0.0-bridge.0_cache-loader@4.1.0_css-loader@5.2.7_lodash@4.17._jlc3rveazgxxfpnki3dcnqr46u/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/.pnpm/postcss-loader@4.3.0_postcss@8.4.31_webpack@4.46.0/node_modules/postcss-loader/dist/cjs.js?!../node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!../node_modules/.pnpm/vue-loader@15.10.0_babel-core@7.0.0-bridge.0_css-loader@5.2.7_vue-template-compiler@2.7.15_webpack@4.46.0/node_modules/vue-loader/lib/index.js?!./src/components/VSearchResultsTitle.vue?vue&type=style&index=0&id=04fb7dee&prod&scoped=true&lang=css&")},"./src/pages/search/image.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.js"),VSearchResults=__webpack_require__("./src/components/VSearchResultsGrid/VSearchResults.vue"),search_imagevue_type_script_lang_ts_=Object(vue.defineComponent)({name:"ImageSearch",components:{VSearchResults:VSearchResults.default},props:{results:{type:Object,required:!0},isFetching:{type:Boolean,required:!0},searchTerm:{type:String,required:!0},handleLoadMore:{type:Function,required:!0}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_babel-core@7.0.0-bridge.0_css-loader@5.2.7_vue-template-compiler@2.7.15_webpack@4.46.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(search_imagevue_type_script_lang_ts_,(function render(){var _c=this._self._c;this._self._setupProxy;return _c("VSearchResults",{attrs:{results:this.results,"is-fetching":this.isFetching,"search-term":this.searchTerm,kind:"search"},on:{"load-more":this.handleLoadMore}})}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VSearchResults:__webpack_require__("./src/components/VSearchResultsGrid/VSearchResults.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"ImageSearch",exportName:"default",description:"",tags:{},props:[{name:"results",type:{name:"ImageResults"},required:!0},{name:"isFetching",type:{name:"boolean"},required:!0},{name:"searchTerm",type:{name:"string"},required:!0},{name:"handleLoadMore",type:{name:"() => void"},required:!0}]}}}]);