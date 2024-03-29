/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/customize.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/customize.js":
/*!********************************!*\
  !*** ./assets/js/customize.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_customize_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/customize/global */ "./assets/js/modules/customize/global.js");
/* harmony import */ var _modules_customize_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/customize/header */ "./assets/js/modules/customize/header.js");
/* harmony import */ var _modules_customize_designer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/customize/designer */ "./assets/js/modules/customize/designer.js");
/* harmony import */ var _modules_customize_heading_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/customize/heading-bar */ "./assets/js/modules/customize/heading-bar.js");
/* harmony import */ var _modules_customize_taxonomy_heading_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/customize/taxonomy-heading-bar */ "./assets/js/modules/customize/taxonomy-heading-bar.js");
/* harmony import */ var _modules_customize_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/customize/footer */ "./assets/js/modules/customize/footer.js");
/* harmony import */ var _modules_customize_woocommerce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/customize/woocommerce */ "./assets/js/modules/customize/woocommerce.js");
/* harmony import */ var _modules_customize_jetpack_portfolio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/customize/jetpack-portfolio */ "./assets/js/modules/customize/jetpack-portfolio.js");
/* harmony import */ var _modules_customize_blog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/customize/blog */ "./assets/js/modules/customize/blog.js");
/* harmony import */ var vue_color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-color */ "./node_modules/vue-color/dist/vue-color.min.js");
/* harmony import */ var vue_color__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_color__WEBPACK_IMPORTED_MODULE_9__);
/**
 * @package theme customize script
 * @author Bearsthemes
 * @version 1.0.0
 */

/*
  * Customize lib
  */












!(function(wp, $) {
  "use strict";

  ELEMENT.locale(ELEMENT.lang.en);

  /* DOM Ready */
  $(function() {
    /* store module */
    const moduleGlobal = __webpack_require__(/*! ./modules/store/module-global.js */ "./assets/js/modules/store/module-global.js");
    const moduleHeader = __webpack_require__(/*! ./modules/store/module-header.js */ "./assets/js/modules/store/module-header.js");
    const moduleFooter = __webpack_require__(/*! ./modules/store/module-footer.js */ "./assets/js/modules/store/module-footer.js");
    const moduleDesigner = __webpack_require__(/*! ./modules/store/module-designer.js */ "./assets/js/modules/store/module-designer.js");
    const moduleHeadingBar = __webpack_require__(/*! ./modules/store/module-heading-bar.js */ "./assets/js/modules/store/module-heading-bar.js");
    const moduleTaxonomyHeadingBar = __webpack_require__(/*! ./modules/store/module-taxonomy-heading-bar.js */ "./assets/js/modules/store/module-taxonomy-heading-bar.js");
    const moduleWooCommerce = __webpack_require__(/*! ./modules/store/module-woocommerce.js */ "./assets/js/modules/store/module-woocommerce.js");
    const moduleJetpackPortfolio = __webpack_require__(/*! ./modules/store/module-jetpack-portfolio.js */ "./assets/js/modules/store/module-jetpack-portfolio.js");
    const moduleBlog = __webpack_require__(/*! ./modules/store/module-blog.js */ "./assets/js/modules/store/module-blog.js");

    wp.theme_store = new Vuex.Store({
      state: {
        widgets: theme_customize_object.flintotheme_header_widget, // widgets,
        widget_options: theme_customize_object.flintotheme_header_widget_options, // widget options
        wp_widgets: theme_customize_object.flintotheme_header_wp_widget // wp widgets,
      },
      modules: {
        global: moduleGlobal,
        header: moduleHeader,
        footer: moduleFooter,
        designer: moduleDesigner,
        headingBar: moduleHeadingBar,
        taxonomyHeadingBar: moduleTaxonomyHeadingBar,
        woocommerce: moduleWooCommerce,
        jetpack_portfolio: moduleJetpackPortfolio,
        blog: moduleBlog
      }
    });

    /**
     * vue directives
     */
    Vue.directive("col-resize", __webpack_require__(/*! ./modules/directives/col-resize */ "./assets/js/modules/directives/col-resize.js"));
    Vue.directive(
      "sortable-element",
      __webpack_require__(/*! ./modules/directives/sortable-element */ "./assets/js/modules/directives/sortable-element.js")
    );
    Vue.directive(
      "draggable-element",
      __webpack_require__(/*! ./modules/directives/draggable-element */ "./assets/js/modules/directives/draggable-element.js")
    );

    /**
     * vue components
     */

    // fields
    Vue.component(
      "input-field",
      __webpack_require__(/*! ./modules/components/fields/vue-input-field */ "./assets/js/modules/components/fields/vue-input-field.js")
    );
    Vue.component(
      "select-field",
      __webpack_require__(/*! ./modules/components/fields/vue-select-field */ "./assets/js/modules/components/fields/vue-select-field.js")
    );
    Vue.component(
      "switch-field",
      __webpack_require__(/*! ./modules/components/fields/vue-switch-field */ "./assets/js/modules/components/fields/vue-switch-field.js")
    );
    Vue.component(
      "color-picker-field",
      __webpack_require__(/*! ./modules/components/fields/vue-color-picker-field */ "./assets/js/modules/components/fields/vue-color-picker-field.js")
    );
    Vue.component(
      "chrome-color-picker-field",
      vue_color__WEBPACK_IMPORTED_MODULE_9__["Chrome"],
    );
    Vue.component(
      "bears-color-picker-field",
      __webpack_require__(/*! ./modules/components/fields/vue-bears-color-picker-field.js */ "./assets/js/modules/components/fields/vue-bears-color-picker-field.js"),
    );
    Vue.component(
      "radio-group-field",
      __webpack_require__(/*! ./modules/components/fields/vue-radio-group-field */ "./assets/js/modules/components/fields/vue-radio-group-field.js")
    );
    Vue.component(
      "checkbox-group-field",
      __webpack_require__(/*! ./modules/components/fields/vue-checkbox-group-field */ "./assets/js/modules/components/fields/vue-checkbox-group-field.js")
    );
    Vue.component(
      "wp-widget-fields",
      __webpack_require__(/*! ./modules/components/fields/vue-wp-widget-fields */ "./assets/js/modules/components/fields/vue-wp-widget-fields.js")
    );
    Vue.component(
      "wp-media-field",
      __webpack_require__(/*! ./modules/components/fields/vue-wp-media-field */ "./assets/js/modules/components/fields/vue-wp-media-field.js")
    );
    Vue.component(
      "typography-field",
      __webpack_require__(/*! ./modules/components/fields/vue-typography-field */ "./assets/js/modules/components/fields/vue-typography-field.js")
    );
    Vue.component(
      "separator-field",
      __webpack_require__(/*! ./modules/components/fields/vue-separator */ "./assets/js/modules/components/fields/vue-separator.js")
    );
    Vue.component(
      "design-group-fields",
      __webpack_require__(/*! ./modules/components/fields/vue-design-group-fields */ "./assets/js/modules/components/fields/vue-design-group-fields.js")
    );

    // components builder
    Vue.component("rs-row", __webpack_require__(/*! ./modules/components/vue-rs-row-element */ "./assets/js/modules/components/vue-rs-row-element.js"));
    Vue.component("rs-col", __webpack_require__(/*! ./modules/components/vue-rs-col-element */ "./assets/js/modules/components/vue-rs-col-element.js"));
    Vue.component("widget", __webpack_require__(/*! ./modules/components/vue-widget-element */ "./assets/js/modules/components/vue-widget-element.js"));
    Vue.component(
      "wp-widget",
      __webpack_require__(/*! ./modules/components/vue-wp-widget-element */ "./assets/js/modules/components/vue-wp-widget-element.js")
    );
    Vue.component(
      "editor-tool",
      __webpack_require__(/*! ./modules/components/vue-editor-tool */ "./assets/js/modules/components/vue-editor-tool.js")
    );
    Vue.component(
      "settings-render",
      __webpack_require__(/*! ./modules/components/vue-settings-render */ "./assets/js/modules/components/vue-settings-render.js")
    );
    Vue.component(
      "popup-edit-element",
      __webpack_require__(/*! ./modules/components/vue-popup-edit-element */ "./assets/js/modules/components/vue-popup-edit-element.js")
    );
    Vue.component(
      "child-component",
      __webpack_require__(/*! ./modules/components/vue-child-component-element */ "./assets/js/modules/components/vue-child-component-element.js")
    );
    Vue.component(
      "customize-builder",
      __webpack_require__(/*! ./modules/components/vue-customize-builder-element */ "./assets/js/modules/components/vue-customize-builder-element.js")
    );
  });

  /* browser load complete */
  $(window).load(function() {
    /* Customize call */
    Object(_modules_customize_global__WEBPACK_IMPORTED_MODULE_0__["default"])(wp, $);
    Object(_modules_customize_header__WEBPACK_IMPORTED_MODULE_1__["default"])(wp, $);
    Object(_modules_customize_designer__WEBPACK_IMPORTED_MODULE_2__["default"])(wp, $);
    Object(_modules_customize_heading_bar__WEBPACK_IMPORTED_MODULE_3__["default"])(wp, $);
    Object(_modules_customize_taxonomy_heading_bar__WEBPACK_IMPORTED_MODULE_4__["default"])(wp, $);
    Object(_modules_customize_footer__WEBPACK_IMPORTED_MODULE_5__["default"])(wp, $);
    Object(_modules_customize_woocommerce__WEBPACK_IMPORTED_MODULE_6__["default"])(wp, $);
    Object(_modules_customize_jetpack_portfolio__WEBPACK_IMPORTED_MODULE_7__["default"])(wp, $);
    Object(_modules_customize_blog__WEBPACK_IMPORTED_MODULE_8__["default"])(wp, $);
  });
})(window.wp, jQuery);


/***/ }),

/***/ "./assets/js/modules/components/fields/vue-bears-color-picker-field.js":
/*!*****************************************************************************!*\
  !*** ./assets/js/modules/components/fields/vue-bears-color-picker-field.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * component select field
 */
var condition = __webpack_require__(/*! ../mixins/vue-condition-mixins.js */ "./assets/js/modules/components/mixins/vue-condition-mixins.js");

module.exports = {
    props: ['value'],
    data () {
        return {
           
        }
    },
    template: `
    <div class="el-bears-color-picker">
        <el-popover
            placement="top"
            width="200"
            popper-class="popup-bears-color-picker" 
            trigger="click">
            <div class="el-bears-color-picker">
                <chrome-color-picker-field v-model="value" @input="updateValue"/>
            </div>
            <el-button slot="reference" class="bears-color-picker-btn">
                <span :class="el_color_bg_class" :style="{'background-color': value}"></span>
                <span class="__icon"><i class="el-icon-arrow-down"></i></span>
            </el-button>
        </el-popover>
        <span v-show="(value != '')" class="clear-color" @click="clearColor">×</span>
    </div>`,
    created(el) {
       
    },
    watch: {
        
    },
    computed: {
       el_color_bg_class() {
            var classes = ['el-color-bg'];
            if(this.value == '') {
                    classes.push( '__color_empty' );
            }

            return classes.join(' ');
       }
    },
    methods: {
        updateValue(value) {
            if( value && value.rgba ) {
                var rgba_value = `rgba(${value.rgba.r}, ${value.rgba.g}, ${value.rgba.b}, ${value.rgba.a})`;
                // this._color = rgba_value;
                this.$emit('input', rgba_value);
                this.$emit('change', rgba_value);
            }
        },
        clearColor() {
            this.$emit('input', '');
            this.$emit('change', '');
        }
    }
}

/***/ }),

/***/ "./assets/js/modules/components/fields/vue-checkbox-group-field.js":
/*!*************************************************************************!*\
  !*** ./assets/js/modules/components/fields/vue-checkbox-group-field.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * component checkbox group field
 */
var condition = __webpack_require__(/*! ../mixins/vue-condition-mixins.js */ "./assets/js/modules/components/mixins/vue-condition-mixins.js");

module.exports = {
    props: ['params', 'name', 'dataMap'],
    mixins: [condition],
    template: `
        <div :class="classes" v-show="condition_value">
            <label v-if="params.label">
                {{ params.label }}
                <el-tooltip placement="top" v-if="params.description" popper-class="theme-extends-customize-zindex">
                <div slot="content">{{ params.description }}</div>
                <span class="ion-help-circled"></span>
                </el-tooltip>
            </label>
            <div>
                <el-checkbox-group v-model="dataMap[name]" :size="fieldSize">
                <el-checkbox-button v-if="params.options" v-for="(item, index) in params.options" :label="item.label" :key="item.label">
                    {{ item.text }}
                </el-radio-button>
                </el-radio-group>
            </div>
            <slot></slot>
        </div>`,
    created(el) {
        this.setDataDefault();
    },
    computed: {
        classes() {
            return ['theme-extends-field-wrap', 'field-type-' + this.params.type];
        },
        fieldSize() {
            return ( this.params.size ) ? this.params.size : '';
        }
    },
    methods: {
        setDataDefault() {
            if(! this.dataMap[this.name]) {
                Vue.set(this.dataMap, this.name, ( this.params.value ) ? this.params.value : [] );
            }
        }
    }
}


/***/ }),

/***/ "./assets/js/modules/components/fields/vue-color-picker-field.js":
/*!***********************************************************************!*\
  !*** ./assets/js/modules/components/fields/vue-color-picker-field.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * component color picker field
 */
var condition = __webpack_require__(/*! ../mixins/vue-condition-mixins.js */ "./assets/js/modules/components/mixins/vue-condition-mixins.js");

module.exports = {
  props: ['params', 'name', 'dataMap'],
  mixins: [condition],
  template: `
    <div :class="classes" v-show="condition_value">
      <label v-if="params.label">
        {{ params.label }}
        <el-tooltip placement="top" v-if="params.description" popper-class="theme-extends-customize-zindex">
          <div slot="content">{{ params.description }}</div>
          <span class="ion-help-circled"></span>
        </el-tooltip>
      </label>
      <bears-color-picker-field v-model="dataMap[name]" />
      <!-- <el-color-picker v-model="dataMap[name]" :show-alpha="(params.alpha && params.alpha == true) ? true : false"></el-color-picker> -->
      <slot></slot>
    </div>`,
  created (el) {
    // value init
    if(typeof this.dataMap[this.name] == 'undefined' && this.params.value ) {
      Vue.set(this.dataMap, this.name, this.params.value);
    }
  },
  computed: {
    classes () {
      var classes = ['theme-extends-field-wrap', 'field-type-' + this.params.type];
      if(this.params.extra_class) classes.push(this.params.extra_class);
      return classes;
    }
  },
  methods: {

  }
}


/***/ }),

/***/ "./assets/js/modules/components/fields/vue-design-group-fields.js":
/*!************************************************************************!*\
  !*** ./assets/js/modules/components/fields/vue-design-group-fields.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * component design group fields
 */

module.exports = {
  props: ['item', 'index'],
  data () {
    return {
      activeNames: '',
    }
  },
  template: `
    <el-collapse v-model="activeNames">
      <el-collapse-item :name="group_controls.base_id">
        <span slot="title" class="collapse-title-group-style">
          {{ group_controls.name }}
        </span>
        <div :class="classes">
          <component
            v-for="(_item, key, _index) in control_data"
            :is="get_component_type(_item.type)"
            :name="key"
            :params="_item"
            :data-map="item.properties">
          </component>
          <div class="collapse-footer">
            <button class="btn-remove-style" type="button" @click="remove_block_style($event)">
              <i class="ion-close-round"></i>
              Remove Style
            </button>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>`,
  computed: {
    classes () {
      return ['theme-extends-design-group-fields'];
    },
    group_type () {
      return this.item.type;
    },
    group_style () {
      return this.$root.designer_store.group_style;
    },
    group_controls () {
      var type = this.group_type;
      return this.group_style.filter( item => {
        return item.base_id == type;
      } )[0];
    },
    control_data () {
      return JSON.parse(JSON.stringify(this.group_controls.controls));
    },
  },
  methods: {
    remove_block_style (event) {
      event.preventDefault();
      this.$root.designer_store.data_edit.group_style.splice(this.index, 1);
    },
    get_component_type (type) {
      return `${type}-field`;
    },
  },
}


/***/ }),

/***/ "./assets/js/modules/components/fields/vue-input-field.js":
/*!****************************************************************!*\
  !*** ./assets/js/modules/components/fields/vue-input-field.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * component input field
 */
var condition = __webpack_require__(/*! ../mixins/vue-condition-mixins.js */ "./assets/js/modules/components/mixins/vue-condition-mixins.js");
module.exports = {
  props: ['params', 'name', 'dataMap'],
  mixins: [condition],
  template: `
    <div :class="classes" v-show="visible">
      <label v-if="params.label">
        {{ params.label }}
        <el-tooltip placement="top" v-if="params.description" popper-class="theme-extends-customize-zindex">
          <div slot="content">{{ params.description }}</div>
          <span class="ion-help-circled"></span>
        </el-tooltip>
      </label>
      <el-input :placeholder="params.placeholder" v-model="dataMap[name]"></el-input>
      <slot></slot>
    </div>`,
  created (el) {
    if(typeof this.dataMap[this.name] == 'undefined' && this.params.value ) {
      Vue.set(this.dataMap, this.name, this.params.value);
    }
  },
  computed: {
    classes () {
      var classes = ['theme-extends-field-wrap', 'field-type-' + this.params.type];
      if(this.params.extra_class) classes.push(this.params.extra_class);
      return classes;
    },
    visible () {
      if(this.params.hidden && this.params.hidden == true) return false;
      return this.condition_value;
    }
  },
  methods: {

  }
}


/***/ }),

/***/ "./assets/js/modules/components/fields/vue-radio-group-field.js":
/*!**********************************************************************!*\
  !*** ./assets/js/modules/components/fields/vue-radio-group-field.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * component radio group field
 */
var condition = __webpack_require__(/*! ../mixins/vue-condition-mixins.js */ "./assets/js/modules/components/mixins/vue-condition-mixins.js");

module.exports = {
  props: ['params', 'name', 'dataMap'],
  mixins: [condition],
  template: `
    <div :class="classes" v-show="condition_value">
      <label v-if="params.label">
        {{ params.label }}
        <el-tooltip placement="top" v-if="params.description" popper-class="theme-extends-customize-zindex">
          <div slot="content">{{ params.description }}</div>
          <span class="ion-help-circled"></span>
        </el-tooltip>
      </label>
      <div>
        <el-radio-group v-model="dataMap[name]">
          <el-radio-button v-if="params.options" v-for="(item, index) in params.options" :label="item.label">
            {{ item.text }}
          </el-radio-button>
        </el-radio-group>
      </div>
      <slot></slot>
    </div>`,
  computed: {
    classes () {
      return ['theme-extends-field-wrap', 'field-type-' + this.params.type];
    }
  },
  methods: {

  }
}


/***/ }),

/***/ "./assets/js/modules/components/fields/vue-select-field.js":
/*!*****************************************************************!*\
  !*** ./assets/js/modules/components/fields/vue-select-field.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * component select field
 */
var condition = __webpack_require__(/*! ../mixins/vue-condition-mixins.js */ "./assets/js/modules/components/mixins/vue-condition-mixins.js");

module.exports = {
  props: ['params', 'name', 'dataMap'],
  mixins: [condition],
  template: `
    <div :class="classes" v-show="condition_value">
      <label v-if="params.label">
        {{ params.label }}
        <el-tooltip placement="top" v-if="params.description" popper-class="theme-extends-customize-zindex">
          <div slot="content">{{ params.description }}</div>
          <span class="ion-help-circled"></span>
        </el-tooltip>
      </label>
      <el-select v-model="dataMap[name]" class="theme-extends-select-full-width" popper-class="theme-extends-customize-zindex theme-extends-custom-select-option">
        <el-option
          v-for="item in params.options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <slot></slot>
    </div>`,
  created (el) {
    // value init
    if(typeof this.dataMap[this.name] == 'undefined' && this.params.value ) {
      Vue.set(this.dataMap, this.name, this.params.value);
    }
  },
  computed: {
    classes () {
      var classes = ['theme-extends-field-wrap', 'field-type-' + this.params.type];
      if(this.params.extra_class) classes.push(this.params.extra_class);
      return classes;
    }
  },
  methods: {

  }
}


/***/ }),

/***/ "./assets/js/modules/components/fields/vue-separator.js":
/*!**************************************************************!*\
  !*** ./assets/js/modules/components/fields/vue-separator.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * component separator
 */

module.exports = {
    props: ['params', 'name', 'dataMap'],
    template: `
        <div :class="classes">
            <hr />
            <slot></slot>
        </div>`,
    computed: {
        classes () {
            return ['theme-extends-field-wrap', 'field-type-' + this.params.type];
        }
    },
}


/***/ }),

/***/ "./assets/js/modules/components/fields/vue-switch-field.js":
/*!*****************************************************************!*\
  !*** ./assets/js/modules/components/fields/vue-switch-field.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * component switch field
 */
var condition = __webpack_require__(/*! ../mixins/vue-condition-mixins.js */ "./assets/js/modules/components/mixins/vue-condition-mixins.js");

module.exports = {
  props: ['params', 'name', 'dataMap'],
  mixins: [condition],
  template: `
    <div :class="classes" v-show="condition_value">
      <span v-if="params.label">
        {{ params.label }}
        <el-tooltip placement="top" v-if="params.description" popper-class="theme-extends-customize-zindex">
          <div slot="content">{{ params.description }}</div>
          <span class="ion-help-circled"></span>
        </el-tooltip>
      </span>
      <span>
        <el-switch
          v-model="dataMap[name]"
          on-value="on"
          off-value="off"
          on-text=""
          off-text="">
        </el-switch>
      </span>
      <slot></slot>
    </div>`,
  created (el) {
    // value init
    if(typeof this.dataMap[this.name] == 'undefined' && this.params.value ) {
      Vue.set(this.dataMap, this.name, this.params.value);
    }
  },
  computed: {
    classes () {
      var classes = ['theme-extends-field-wrap __field-inline', 'field-type-' + this.params.type];
      if(this.params.extra_class) classes.push(this.params.extra_class);
      return classes;
    }
  },
  methods: {

  }
}


/***/ }),

/***/ "./assets/js/modules/components/fields/vue-typography-field.js":
/*!*********************************************************************!*\
  !*** ./assets/js/modules/components/fields/vue-typography-field.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * component typography field
 */

var google_font_data = __webpack_require__(/*! ../../google_webfonts.js */ "./assets/js/modules/google_webfonts.js");

module.exports = {
  props: ['params', 'name', 'dataMap'],
  data () {
    return {
      model: this.dataMap[this.name],
      font_variant_data: [],
      font_style_data: [
        { label: 'bold', icon: 'flaticon-bold' },
        { label: 'italic', icon: 'flaticon-italic-text' },
        { label: 'underline', icon: 'flaticon-underline' },
        { label: 'strikethrough', icon: 'flaticon-strikethrough-text-interface-option-button' },
      ],
      google_fonts: google_font_data.items,
      lang: {
        text_16px: '16px',
        text_25px: '25px',
        text_0px: '0px',
      }
    };
  },
  template: `
    <div :class="classes">
      <label v-if="params.label">
        {{ params.label }}
        <el-tooltip placement="top" v-if="params.description" popper-class="theme-extends-customize-zindex">
          <div slot="content">{{ params.description }}</div>
          <span class="ion-help-circled"></span>
        </el-tooltip>
      </label>
      <div class="theme-extends-font-style-group">
        <div class="label">Font Style</div>
        <el-checkbox-group v-model="model.font_style">
          <el-checkbox-button v-for="font_style_item in font_style_data" :label="font_style_item.label">
            <i :class="['fi', font_style_item.icon]"></i>
          </el-checkbox-button>
        </el-checkbox-group>
      </div>
      <div class="theme-extends-font-family-group theme-extends-margin">
        <div class="label">Font Family</div>
        <el-select v-model="model.font_family" filterable class="theme-extends-select-full-width" popper-class="theme-extends-customize-zindex theme-extends-custom-select-option">
          <el-option-group
            v-for="font_family_group in font_family_data"
            :key="font_family_group.label"
            :label="font_family_group.label">
            <el-option
              v-for="font_family_item in font_family_group.options"
              :key="font_family_item.value"
              :label="font_family_item.label"
              :value="font_family_item.value">
            </el-option>
          </el-option-group>
        </el-select>
      </div>
      <div class="theme-extends-margin">
        <div class="theme-extends-font-variant-group" style="width: 60%; float: left; padding-right: 10px; box-sizing: border-box;">
          <div class="label">Font Variant</div>
          <el-select v-model="model.font_variant" class="theme-extends-select-full-width" popper-class="theme-extends-customize-zindex theme-extends-custom-select-option">
            <el-option
              v-for="font_variant_item in font_variant_data"
              :key="font_variant_item.value"
              :label="font_variant_item.label"
              :value="font_variant_item.value">
            </el-option>
          </el-select>
        </div>
        <div class="theme-extends-font-size-group" style="width: 40%; float: left;">
          <div class="label">Font Size</div>
          <el-input :placeholder="lang.text_16px" v-model="model.font_size"></el-input>
        </div>
        <div class="clear"></div>
      </div>
      <div class="theme-extends-margin">
        <div class="theme-extends-lineheight-group" style="width: 60%; float: left; padding-right: 10px; box-sizing: border-box;">
          <div class="label">Line Height</div>
          <el-input :placeholder="lang.text_25px" v-model="model.line_height"></el-input>
        </div>
        <div class="theme-extends-letterspacing-group" style="width: 40%; float: left;">
          <div class="label">Letter Spacing</div>
          <el-input :placeholder="lang.text_0px" v-model="model.letter_spacing"></el-input>
        </div>
        <div class="clear"></div>
      </div>
      <div class="theme-extends-margin">
        <div class="theme-extends-textcolor-group" style="width: 60%; float: left; padding-right: 10px; box-sizing: border-box;">
          <div class="label">Text Color</div>
          <bears-color-picker-field v-model="model.text_color" />
          <!-- <el-color-picker v-model="model.text_color"></el-color-picker> -->
        </div>
        <div class="theme-extends-textcolor-group" style="width: 40%; float: left;">
          <div class="label">SVG Fill Color</div>
          <bears-color-picker-field v-model="model.fill_color" />
          <!-- <el-color-picker v-model="model.fill_color"></el-color-picker> -->
        </div>
        <div class="clear"></div>
      </div>
      <slot></slot>
    </div>`,
  created (el) {
    if(this.model.font_family) {
      this.set_font_variant(this.model.font_family);
    }
  },
  computed: {
    classes () {
      var classes = ['theme-extends-field-wrap', 'field-type-' + this.params.type];
      if(this.params.extra_class) classes.push(this.params.extra_class);
      return classes;
    },
    google_font_data () {
      return this.google_fonts.map(function(item) {
        return {
          value: item.family,
          key: item.family,
        };
      })
    },
    font_family_data () {
      return [
        {
          label: 'Theme',
          options: [
            {
              value: '',
              label: 'Cỉrcular (default)',
            },
            {
              value: 'Futura',
              label: 'Futura Regular'
            },
            // {
            //   value: 'Gilroy',
            //   label: 'Gilroy',
            //   variants: ['300', '800'],
            // },
            {
              value: 'Texta',
              label: 'Texta',
              variants: ['normal', '300', '500', '700'],
            },
            {
              value: 'Neue Einstellung',
              label: 'Neue Einstellung',
              variants: ['normal', '300', '500', '700'],
            },
          ]
        },
        {
          label: 'Google Fonts',
          options: this.google_font_data,
        }
      ];
    },
  },
  watch: {
    'model.font_family' (data) {
      this.set_font_variant(data);
      this.model.font_variant = (this.font_variant_data.length > 0) ? this.font_variant_data[0].value : '';
    },
  },
  methods: {
    set_font_variant (font_family) {

      /* scan local fonts */
      var result = this.font_family_data[0].options.find(function( item ) {
        return (font_family == item.value);
      })
      
      if( ! result ) {
        /* scan google fonts */
        var result = this.google_fonts.find(function(item) {
          return (font_family == item.family);
        })
      }

      this.font_variant_data = (result && result.variants) ? result.variants.map(function(item) {
        return {
          value: item,
          label: item
        }
      }) : [];
    }
  }
}


/***/ }),

/***/ "./assets/js/modules/components/fields/vue-wp-media-field.js":
/*!*******************************************************************!*\
  !*** ./assets/js/modules/components/fields/vue-wp-media-field.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * component wp media field
 */

var helpers = __webpack_require__(/*! ../../helpers.js */ "./assets/js/modules/helpers.js");
var condition = __webpack_require__(/*! ../mixins/vue-condition-mixins.js */ "./assets/js/modules/components/mixins/vue-condition-mixins.js");

module.exports = {
  props: ['params', 'name', 'dataMap'],
  mixins: [condition],
  template: `
    <div :class="classes" v-show="condition_value">
      <label v-if="params.label">
        {{ params.label }}
        <el-tooltip placement="top" v-if="params.description" popper-class="theme-extends-customize-zindex">
          <div slot="content">{{ params.description }}</div>
          <span class="ion-help-circled"></span>
        </el-tooltip>
      </label>
      <div class="theme-extend-image-preview-area">
        <div v-if="dataMap[name]" class="img-wrap">
          <img :src="dataMap[name]" />
          <a href="#" class="clear-image" @click="clear_image($event)"><i class="ion-close-round"></i></a>
        </div>
        <span v-else class="no-image">No image set</span>
      </div>
      <button class="btn-open-modal" @click="open_wp_media_lightbox($event)">Select Image</button>
      <slot></slot>
    </div>`,
  computed: {
    classes () {
      var classes = ['theme-extends-field-wrap', 'field-type-' + this.params.type];
      if(this.params.extra_class) classes.push(this.params.extra_class);
      return classes;
    },
    wp_media () {

      var frame = helpers.wp_media();
      frame.on('select', this.wp_media_select_handle);

      return frame;
    },

  },
  methods: {
    open_wp_media_lightbox (event) {

      event.preventDefault();
      this.wp_media.open();
    },
    wp_media_select_handle () {

      // Get media attachment details from the frame state
      var attachment = this.wp_media.state().get('selection').first().toJSON();
      // console.log(attachment);
      // this.dataMap[this.name] = attachment.url;
      Vue.set(this.dataMap, this.name, attachment.url);
    },
    clear_image (event) {

      event.preventDefault();
      this.dataMap[this.name] = "";
    }
  }
}


/***/ }),

/***/ "./assets/js/modules/components/fields/vue-wp-widget-fields.js":
/*!*********************************************************************!*\
  !*** ./assets/js/modules/components/fields/vue-wp-widget-fields.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * component wordpress widget fields
 */
var helpers = __webpack_require__(/*! ../../helpers.js */ "./assets/js/modules/helpers.js");
$ = jQuery.noConflict();

module.exports = {
  props: ['item'],
  data () {
    return {
      ajaxload    : true,
      form        : '',
    }
  },
  template: `
    <div :class="classes">
      <div v-if="form != ''" class="">
        <div v-html="form" class="wp-widget-form widget-content" ref="wp_widget_form"></div>
      </div>
      <button v-if="form != ''" class="btn-apply" @click="send_data($event)">Apply <i v-show="ajaxload" class="el-icon-loading"></i></button>
    </div>`,
  created (el) {
    this.get_wp_widget_form(this.item)
  },
  computed: {
    classes () {
      return ['field-wrap'];
    }
  },
  methods: {
    send_data (event) {
      event.preventDefault();
      var self = this;
          form = $(this.$refs.wp_widget_form).find('[data-theme-extends-widget-id]'),
          data = form.serialize();

      this.ajaxload = true;
      var sendData = [
        'action=flintotheme_save_wp_widget_data', 
        'widget_key=' + self.item.widget_key, 
        'key=' + self.item.key, 
        'element=' + self.item.element,
        data
      ];

      $.ajax({
        type: 'POST',
        url: theme_customize_object.ajax_url,
        data: sendData.join('&'),
        success (result) {
          self.ajaxload = false;
          if(result.success != true) return;

          Vue.set(self.item, 'params', result.data);
        },
        error (e) { console.log(e); }
      })
    },
    get_wp_widget_form (item) {
      var self = this;
      this.ajaxload = true;
      // console.log(item);
      $.ajax({
        type: 'POST',
        url: theme_customize_object.ajax_url,
        data: { action: 'flintotheme_load_wp_widget_form', data: item },
        success (result) {
          self.ajaxload = false;
          if(! result) return;

          try{
            var form = (result.data && result.data.form) ? result.data.form : '';
            self.form = form;

    				// WP >= 4.8
    				if ( window.wp.textWidgets ) {
              setTimeout(function() {
                var event = new $.Event( 'widget-added' ),
                    widget_id = $('[data-theme-extends-widget-id]').data('theme-extends-widget-id'); // $('#theme-extends-widget-area-define');
                
                var form = $('#' + widget_id);
                    
      					window.wp.textWidgets.handleWidgetAdded( event, form );
                window.wp.mediaWidgets.handleWidgetAdded( event, form );
                window.wp.customHtmlWidgets.handleWidgetAdded( event, form );
                $(document).trigger('widget-before-added', [form])

                // console.log(window.wp);
                // window.carbon_json.pagenow = '@@'; 

                // $(document).trigger('carbonFields.apiLoaded', form[0]);
                // .trigger('widget-added', [form])
              }, 10)
    				}

          } catch (e) { console.log(e) }
        },
        error (e) { console.log(e) }
      })
    },
  }
}


/***/ }),

/***/ "./assets/js/modules/components/mixins/vue-condition-mixins.js":
/*!*********************************************************************!*\
  !*** ./assets/js/modules/components/mixins/vue-condition-mixins.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * condition mixins
 */
$ = jQuery.noConflict();

module.exports = {
  // data () {
  //   return {
  //     condition_value: true,
  //   };
  // },
  computed: {
    condition_value () {
      return this._condition();
    }
  },
  // created (el) {
  //   this.condition_value = this._condition();
  //   console.log(this.condition_value);
  // },
  methods: {
    _condition () {
      var self = this,
          showing = true;

      /* check condition exist */
      if( ! this.params.condition ) return showing;

      var handle_map = {
        'string' (key, val) {
          var result = true;

          switch (val) {
            case 'not-null': result = (self.dataMap[key] != '') ? true : false; break;
            default: result = (self.dataMap[key] == val); break;
          }

          return result;
        },
        'object' (key, val) {
          return $.inArray(self.dataMap[key], val);
        },
      };

      /* each condition */
      $.each(this.params.condition, function(key, val) {
        var type = typeof val;
        showing = handle_map[type](key, val);
        if(showing == false) return false;
      })

      return showing;
    }
  }
}


/***/ }),

/***/ "./assets/js/modules/components/vue-child-component-element.js":
/*!*********************************************************************!*\
  !*** ./assets/js/modules/components/vue-child-component-element.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * component child component
 */

$ = jQuery.noConflict();
module.exports = {
  props: ['item', 'index', 'mode'],
  template: `
      <component
        :is="item.element"
        v-col-resize="element_resize_data"
        v-sortable-element="element_sortable_data"
        :item="item"
        :index="index"
        :mode="mode"
        :action="enable_widget_action"
        :class="element_class(item)"
        :style="element_style_inline">

        <editor-tool slot="tool" v-if="editor_tool_display" :parent-data="parent_item_data" :item="item" :index="index"></editor-tool>

        <child-component
          v-if="item.children && item.children.length > 0"
          v-for="(child_item, child_index) in item.children"
          :item="child_item"
          :index="child_index"
          :mode="mode"
          :key="child_item.key">
        </child-component>

      </component>`,
  created (el) {
    switch (this.item.element) {
      case 'rs-row':
        this.$root.$on('event:resize_col' + this.item.key, this.calc_col_resize_handle);
        break;

      case 'rs-col':

        break;
    }
  },
  computed: {
    enable_widget_action () {
      var allow_element = ['widget', 'wp-widget'];
      return ( ($.inArray(this.item.element, allow_element) >= 0) && this.mode != 'preview' );
    },
    count_children_element () {
      if( this.item.element != 'rs-row' ) return;
      return this.item.children.length;
    },
    parent_item_data () {
      switch (this.item.element) {
        case 'rs-row':
          return this.$parent.data;
          break;

        case 'rs-col':
          return this.$parent.$parent.item.children;
          break;
      }
    },
    children_data () {
      return (this.item.children) ? this.item.children : [];
    },
    editor_tool_display () {
      return ($.inArray(this.item.element, ['sr-row','sr-col']) && this.mode != 'preview');
    },
    element_sortable_data () {

      var sortable_opts = {
        'rs-row': {
          group: {
            name: 'cols',
            put: ['cols'],
          },
          animation: 150,
          handle: '.sort-item-rs-col',
          draggable: '.rs-col',
          dragoverBubble: true,
          onUpdate: this.sortable_update_cols_handle,
          onAdd: this.sortable_add_cols_handle,
        },
      }

      return (sortable_opts[this.item.element] && this.mode != 'preview') ? sortable_opts[this.item.element] : false;
    },
    element_resize_data () {
      return (this.item.element == 'rs-col') ? [this.item, this.index] : false;
    },
    element_style_inline () {
      var style = {};

      if(this.item.params && this.item.params.style_inline)
        style = $.extend(style, this.item.params.style_inline);

      if(this.item.element == 'rs-col') {
        style.width = this.get_col_width() + '%';
      }

      return style;
    }
  },
  watch: {
    'count_children_element' (count) {
      this.item.children.forEach(function(item) {
        if(item.element == 'rs-col') {
          item.params.width = 100/count;
        }
      })
    }
  },
  methods: {
    sortable_add_cols_handle (event) {
      var fromData = event.from.__vue__.item || event.from.__vue__.$parent.item,
          toData = event.to.__vue__.item || event.to.__vue__.$parent.item;

      toData.children.splice(event.newIndex, 0, fromData.children.splice(event.oldIndex, 1)[0]);
    },
    sortable_update_cols_handle (event) {
      // console.log(event);
      this.children_data.splice(event.newIndex, 0, this.children_data.splice(event.oldIndex, 1)[0]);
    },
    calc_col_resize_handle (item, new_width) {

      if(this.item.element != 'rs-row') return;
      var index = this.item.children.indexOf(item);


      var current_item        = this.item.children[index],
          pre_item            = this.item.children[index - 1];

      var current_width       = parseFloat(current_item.params.width).toFixed(3),
          pre_width           = parseFloat(pre_item.params.width).toFixed(3),
          change_width        = parseFloat(new_width - current_width).toFixed(3),
          pre_new_width       = parseFloat(pre_width - change_width).toFixed(3);

      this.item.children[index].params.width = new_width;
      this.item.children[index - 1].params.width = pre_new_width;
    },
    get_col_width () {
      return this.item.params.width;
    },
    element_class (item) {
      return '';
    }
  }
}


/***/ }),

/***/ "./assets/js/modules/components/vue-customize-builder-element.js":
/*!***********************************************************************!*\
  !*** ./assets/js/modules/components/vue-customize-builder-element.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * component customize builder
 */

var helpers = __webpack_require__(/*! ../helpers.js */ "./assets/js/modules/helpers.js");
module.exports = {
  props: ['data', 'mode'],
  data () {
    return {
      popover_row_temp_visible: false,
      custom_row_input: '',
      lang: {
        custom_row_text: 'Input custom row (Exam: 15/70/15 & Enter for push a new row)',
      }
    }
  },
  template: `
    <div
      :class="wrap_classes"
      v-sortable-element="element_sortable_data">

      <child-component
        v-for="(item, index) in data"
        :item="item"
        :index="index"
        :mode="mode"
        :key="item.key"
        >
      </child-component>

      <div class="customize-builder-footer-tools" v-if="mode != 'preview'">
        <el-popover
          ref="rowtemplate"
          placement="top"
          title="Select your structure"
          width="600"
          trigger="hover"
          v-model="popover_row_temp_visible"
          popper-class="theme-extends-popover-ui theme-extends-customize-zindex"
        >
          <el-row class="theme-extends-grid-template" :gutter="8">
            <el-col :span="12">
              <div class="grid-content bg-purple" @click="add_row($event, [100])">
                <el-row class="theme-extends-custom-el-row" >
                  <el-col :span="24"><div class="grid-content bg-purple-dark">100%</div></el-col>
                </el-row>
              </div>
            </el-col>

            <el-col :span="12">
              <div class="grid-content bg-purple" @click="add_row($event, [50,50])">
                <el-row class="theme-extends-custom-el-row" >
                  <el-col :span="12"><div class="grid-content bg-purple">50%</div></el-col>
                  <el-col :span="12"><div class="grid-content bg-purple-light">50%</div></el-col>
                </el-row>
              </div>
            </el-col>

            <el-col :span="12">
              <div class="grid-content bg-purple" @click="add_row($event, [33.333,33.333,33.333])">
                <el-row class="theme-extends-custom-el-row" >
                  <el-col :span="8"><div class="grid-content bg-purple">33.3%</div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple-light">33.3%</div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple">33.3%</div></el-col>
                </el-row>
              </div>
            </el-col>

            <el-col :span="12">
              <div class="grid-content bg-purple" @click="add_row($event, [20, 80])">
                <el-row class="theme-extends-custom-el-row" >
                  <el-col :span="4"><div class="grid-content bg-purple">20%</div></el-col>
                  <el-col :span="20"><div class="grid-content bg-purple-light">80%</div></el-col>
                </el-row>
              </div>
            </el-col>

            <el-col :span="12">
              <div class="grid-content bg-purple" @click="add_row($event, [20,60,20])">
                <el-row class="theme-extends-custom-el-row" >
                  <el-col :span="4"><div class="grid-content bg-purple">20%</div></el-col>
                  <el-col :span="16"><div class="grid-content bg-purple-light">60%</div></el-col>
                  <el-col :span="4"><div class="grid-content bg-purple">20%</div></el-col>
                </el-row>
              </div>
            </el-col>

            <el-col :span="12">
              <div class="grid-content bg-purple" @click="add_row($event, [25,25,25,25])">
                <el-row class="theme-extends-custom-el-row" >
                  <el-col :span="6"><div class="grid-content bg-purple">25%</div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple-light">25%</div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple">25%</div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple-light">25%</div></el-col>
                </el-row>
              </div>
            </el-col>

            <el-col :span="24">
            <div class="grid-content bg-purple">
              <el-row class="theme-extends-custom-el-row">
                <input
                  v-on:keyup="add_custom_row($event)"
                  v-model="custom_row_input"
                  class="theme-extends-input-add-custom-row"
                  :placeholder="lang.custom_row_text">
              </el-row>
            </div>
            </el-col>
          </el-row>
        </el-popover>
        <div class="tool-item add-row-wrap" v-popover:rowtemplate><span class="ion-plus-round"></span></div>
      </div>
    </div>`,
  computed: {
    wrap_classes () {
      var _class = ['theme-extends-customize-builder', 'customize-builder-wrap'];
      if(this.mode) { _class.push('builder-mode-' + this.mode); }

      return _class;
    },
    element_sortable_data () {
      return {
        group: 'rows',
        onUpdate: this.sortable_update_rows_handle,
        animation: 150,
        draggable: '.rs-row',
        handle: '.sort-item-rs-row',
      };
    }
  },
  methods: {
    add_custom_row(e) {
      if (e.keyCode == 13) {
        var data = this.custom_row_input;
        this.add_row(e, data.split('/'));

        /* empty field */
        this.custom_row_input = '';
      }
    },
    sortable_update_rows_handle (event) {
      this.data.splice(event.newIndex, 0, this.data.splice(event.oldIndex, 1)[0]);
    },
    make_col_data (data) {
      var result = [];

      data.forEach(function(width) {
        result.push({
          key: helpers.random_key('col-element'),
          element: 'rs-col',
          params: {
            width: width,
            padding: '',
          },
          children: []
        })
      });

      return result;
    },
    add_row (event, data) {
      this.data.push({
        key: helpers.random_key('row-element'),
        element: 'rs-row',
        params: {
          content_width: 'large',
        },
        children: this.make_col_data(data),
      });

      this.popover_row_temp_visible = false;
    }
  }
}


/***/ }),

/***/ "./assets/js/modules/components/vue-editor-tool.js":
/*!*********************************************************!*\
  !*** ./assets/js/modules/components/vue-editor-tool.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * component editor tool
 */
var helpers = __webpack_require__(/*! ../helpers.js */ "./assets/js/modules/helpers.js");

module.exports = {
  props: ['parentData', 'item', 'index'],
  template: `
    <ul :class="classes.wrap">
      <li :class="classes.sort"><span class="ion-navicon-round" aria-hidden="true"></span></li>
      <li :class="classes.config" @click="config_item($event, item)"><span class="ion-gear-a"></span></li>
      <li v-if="item.element == 'rs-col'" :class="classes.addmore" @click="addmore_col_item"><span class="ion-plus-round" aria-hidden="true"></span></li>
      <li :class="classes.remove" @click="remove_item"><span class="ion-android-delete" aria-hidden="true"></span></li>
    </ul>`,
  computed: {
    classes () {
      // var class_data = ['element-editor-tools', 'control-' + this.item.element];

      var class_data = {
        'wrap': ['element-editor-tools', 'control-' + this.item.element].join(' '),
        'sort': ['sort-item', 'sort-item-' + this.item.element].join(' '),
        'addmore': ['add-more-item', 'add-more-item-' + this.item.element].join(' '),
        'config': ['config-item', 'config-item-' + this.item.element].join(' '),
        'remove': ['remove-item', 'remove-item-' + this.item.element].join(' '),
      }

      return class_data;
    }
  },
  methods: {
    reset_col_width () {

    },
    remove_item () {
      this.parentData.splice(this.index, 1);
    },
    addmore_col_item () {
      var new_col = {
        key: helpers.random_key('col-element'),
        element: 'rs-col',
        params: {
          width: 0,
          padding: '',
        },
        children: [],
      };

      this.parentData.splice(this.index + 1 , 0, new_col);
    },
    config_item (event, item) {
      this.$root.root_store.element_edit = item;
    },
  }
}


/***/ }),

/***/ "./assets/js/modules/components/vue-popup-edit-element.js":
/*!****************************************************************!*\
  !*** ./assets/js/modules/components/vue-popup-edit-element.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * component popup edit element
 */

$ = jQuery.noConflict();
module.exports = {
  data () {
    return {
      draggable_opts: {
        handle: '.popup-title',
        cursor: 'crosshair',
        drag: this.draggable_drag_handle,
      },
      active_name: 'general',
    }
  },
  template: `
    <div class="popup-edit-element-wrap" v-show="Object.keys(element_edit).length > 0" v-draggable-element="draggable_opts">
      <div class="close-popup" @click="close_popup($event)"><span class="ion-close-round"></span></div>
      <div class="popup-title">{{ popup_title }}</div>
      <div class="popup-body">
      
        <el-tabs v-if="active_tabs == true" v-model="active_name">
          <el-tab-pane v-for="(item, index) in group_options" :name="item.name">
            <span slot="label"><i v-if="item.icon" :class="item.icon"></i> {{ item.title }}</span>
            <settings-render :data-map="get_element_params()" :field-map="item.fields"></settings-render>
          </el-tab-pane>
        </el-tabs>

        <!-- WordPress Widget Form -->
        <div v-if="this.element_edit.element == 'wp-widget'" class="wp-widget-fields">
          <wp-widget-fields :item="element_edit"></wp-widget-fields>
        </div>
      </div>
    </div>`,
  computed: {
    field_map () {
      return this.$store.state.header.widget_options;
    },
    element_edit () {
      return this.$root.root_store.element_edit;
    },
    popup_title () {
      return ( $.inArray(this.element_edit.element, ['widget', 'wp-widget']) >= 0 ) ? `${this.element_edit.element} - ${this.element_edit.title}` : this.element_edit.element;
    },
    active_tabs () {
      var element_type = this.get_widget_type(this.element_edit);
      // console.log(element_type, this.field_map);
      return (this.field_map[element_type] && typeof this.field_map[element_type].groups != 'undefined') ? true : false;
    },
    group_options () {
      var element_type = this.get_widget_type(this.element_edit);
      return this.field_map[element_type].groups;
    },
  },
  watch: {

  },
  methods: {
    get_element_params () {
      if ( (Object.keys(this.element_edit).length > 0) && ! this.element_edit.params )
        Vue.set(this.element_edit, 'params', {});
      // console.log(this.field_map);
      return this.element_edit.params;
    },
    get_widget_type (element) {
      return ( $.inArray(element.element, ['widget', 'wp-widget']) >= 0 ) ? `${element.element}-${element.name}` : element.element;
    },
    draggable_drag_handle (event, ui) {
      $(event.target).css('height', '');
    },
    close_popup ($event) {
      this.$root.root_store.element_edit = {};
    },
  }
}


/***/ }),

/***/ "./assets/js/modules/components/vue-rs-col-element.js":
/*!************************************************************!*\
  !*** ./assets/js/modules/components/vue-rs-col-element.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * component rs-col
 */
var helpers = __webpack_require__(/*! ../helpers.js */ "./assets/js/modules/helpers.js");

module.exports = {
  props: ['item', 'index', 'mode'],
  data () {
    return {
      rs_col_inner_classes: ['rs-col-inner'],
    }
  },
  template: `
    <div class="rs-col" :item="item" :index="index" :key="item.key">
      <slot name="tool"></slot>
      <div :class="rs_col_inner_classes" v-sortable-element="widget_sortable_data">
        <slot></slot>
      </div>
    </div>`,
  created (el) {
    if(this.item.children && this.item.children.length == 0) {
      this.rs_col_inner_classes.push('empty-widget');
    }
  },
  computed: {
    area_element_first_display () {
      return (this.item.children && this.item.children.length <= 0) ? true : false;
    },
    widget_sortable_data () {
      var sortable_data = {
        group: {
          name: 'widgets',
          put: ['widgets'],
        },
        draggable: '.widget-item',
        animation: 150,
        dragoverBubble: true,
        onUpdate: this.sortable_update_handle,
        onAdd: this.sortable_add_handle,
      };

      return (this.mode != 'preview') ? sortable_data : false;
    }
  },
  watch: {
    'item.children' (data) {
      if(data.length > 0) {
        if(this.rs_col_inner_classes.indexOf('empty-widget') > 0)
          this.rs_col_inner_classes.splice(this.rs_col_inner_classes.indexOf('empty-widget'), 1);
      } else {
        this.rs_col_inner_classes.push('empty-widget');
      }
    }
  },
  methods: {
    sortable_update_handle (event) {
      this.item.children.splice(event.newIndex, 0, this.item.children.splice(event.oldIndex, 1)[0]);
    },
    sortable_add_handle (event) {
      if(event.from.parentElement.__vue__) {
        /* move group */
        var fromData = event.from.parentElement.__vue__.item || event.from.parentElement.__vue__.$parent.item,
            toData = event.to.parentElement.__vue__.item || event.to.parentElement.__vue__.$parent.item;

        toData.children.splice(event.newIndex, 0, fromData.children.splice(event.oldIndex, 1)[0]);
      } else {
        /* add new */

        var widget_name = $(event.item).data('name'),
            widget_type = $(event.item).data('widget-type'),
            widget_source = (widget_type == 'widget') ? this.$root.root_store.widgets : this.$root.root_store.wp_widgets,
            widgetItem = widget_source.filter(item => {
              return item.name.toLowerCase().indexOf(widget_name.toLowerCase()) > -1
            })[0];

        /* add key */
        var newItem = JSON.parse(JSON.stringify(widgetItem));
        newItem.key = helpers.random_key('widget-element');

        var newIndex = (event.to.parentElement.__vue__.item.children.length == 0) ? 0 : event.newIndex;

        event.to.parentElement.__vue__.item.children.splice(newIndex, 0, newItem);
        $(event.item).remove();
      }

    }
  }
}


/***/ }),

/***/ "./assets/js/modules/components/vue-rs-row-element.js":
/*!************************************************************!*\
  !*** ./assets/js/modules/components/vue-rs-row-element.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * component rs-row
 */

module.exports = {
  props: [],
  template: `
    <div class="rs-row">
      <slot name="tool"></slot>
      <slot></slot>
    </div>`,
  methods: {}
}


/***/ }),

/***/ "./assets/js/modules/components/vue-settings-render.js":
/*!*************************************************************!*\
  !*** ./assets/js/modules/components/vue-settings-render.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * component settings render
 */

$ = jQuery.noConflict();
module.exports = {
  props: ['fieldMap', 'dataMap'],
  template: `
    <div class="settings-wrap">
      <component
        v-for="(item, key, index) in fieldMap"
        :is="is_component(item.type)"
        :name="key"
        :data-map="dataMap"
        :params="item"
      ></component>
    </div>`,
  created (el) {

  },
  computed: {

  },
  methods: {
    is_component (type) {
      return `${type}-field`;
    },
  }
}


/***/ }),

/***/ "./assets/js/modules/components/vue-widget-element.js":
/*!************************************************************!*\
  !*** ./assets/js/modules/components/vue-widget-element.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * component widget
 */

module.exports = {
  props: ['item', 'index', 'mode', 'showDescription', 'action'],
  data () {
    return {
      lang: {
        edit: 'edit',
        remove: 'remove',
      }
    }
  },
  template: `
    <div class="widget-item" :data-name="item.name" :data-widget-type="item.element">
      <div class="icon-wrap">
        <span v-if="item.icon" :class="item.icon"></span>
      </div>
      <div class="widget-entry" v-if="mode != 'preview'">
        <div class="title">{{ item.title }}</div>
        <div class="des" v-show="showDescription">{{ item.description }}</div>
      </div>
      <div class="widget-actions" v-if="action == true">
        <div class="item-action config-action" :title="lang.edit" @click="config_item($event, item)"><span class="ion-gear-a"></span></div>
        <div class="item-action remove-action" :title="lang.remove" @click="remove_handle"><span class="ion-android-delete"></span></div>
      </div>
    </div>`,
  computed: {

  },
  methods: {
    config_item (event, item) {
      event.preventDefault();
      this.$root.root_store.element_edit = item;
    },
    remove_handle ($event) {
      $event.preventDefault();
      /**
       * rs-col/rs-col-inner/widget
       */
      this.$parent.$parent.item.children.splice(this.index, 1);
    }
  }
}


/***/ }),

/***/ "./assets/js/modules/components/vue-wp-widget-element.js":
/*!***************************************************************!*\
  !*** ./assets/js/modules/components/vue-wp-widget-element.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * component wp widget
 */

module.exports = {
  props: ['item', 'index', 'mode', 'showDescription', 'action'],
  data () {
    return {
      lang: {
        edit: 'edit',
        remove: 'remove',
      }
    }
  },
  template: `
    <div class="widget-item wp-widget-item" :data-name="item.name" :data-widget-type="item.element">
      <div class="icon-wrap">
        <span v-if="item.icon" :class="item.icon"></span>
      </div>
      <div class="widget-entry" v-if="mode != 'preview'">
        <div class="title">{{ item.title }}</div>
        <div class="des" v-show="showDescription">{{ item.description }}</div>
      </div>
      <div class="widget-actions" v-if="action == true">
        <div class="item-action config-action" :title="lang.edit" @click="config_item($event, item)"><span class="ion-gear-a"></span></div>
        <div class="item-action remove-action" :title="lang.remove" @click="remove_handle"><span class="ion-android-delete"></span></div>
      </div>
    </div>`,
  computed: {

  },
  methods: {
    config_item (event, item) {
      event.preventDefault();
      this.$root.root_store.element_edit = item;
    },
    remove_handle (event) {
      event.preventDefault();
      /**
       * rs-col/rs-col-inner/widget
       */
      this.$parent.$parent.item.children.splice(this.index, 1);
    }
  }
}


/***/ }),

/***/ "./assets/js/modules/customize/blog.js":
/*!*********************************************!*\
  !*** ./assets/js/modules/customize/blog.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Customize blog control
 */
var helpers = __webpack_require__(/*! ../helpers.js */ "./assets/js/modules/helpers.js");

/* harmony default export */ __webpack_exports__["default"] = (function (wp, $) {
    'use strict';

    if ( ! wp || ! wp.customize ) { return; }

	// Set up our namespace.
	var customize_api = wp.customize;
    customize_api.themeExtends = customize_api.themeExtends || {};

    /**
     * Blog customize function control
     */
    customize_api.themeExtends.customizeBlogControl = function() {
        return {
            init () {
                if($('#theme-extends-blog-action-control').length <= 0) return;
                this.vue_setup();
            },
            vue_setup () {

                new Vue({
                    el: '#theme-extends-blog-action-control',
                    store: wp.theme_store,
                    data () {
                        return {

                        }
                    },
                    computed: {
                        root_store () {
                            return this.$store.state.blog;
                        },

                    },
                    watch: {
                        'root_store.data': {
                            handler (data) {
                                // console.log(data);
                                $('textarea#theme-extends-blog-settings-field').val( JSON.stringify(data) ).trigger('change');
                            },
                            deep: true,
                        },
                    },
                    methods: {

                    }
                })

            },
        }
    }

    /* Customize ready */
    customize_api.themeExtends.customizeBlog = new customize_api.themeExtends.customizeBlogControl();
    customize_api.themeExtends.customizeBlog.init();

    /* DOM Ready */
    $(function() {

    })
});;


/***/ }),

/***/ "./assets/js/modules/customize/designer.js":
/*!*************************************************!*\
  !*** ./assets/js/modules/customize/designer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Customize header control
 */
var helpers = __webpack_require__(/*! ../helpers.js */ "./assets/js/modules/helpers.js");

/* harmony default export */ __webpack_exports__["default"] = (function (wp, $) {
  'use strict';

  if ( ! wp || ! wp.customize ) { return; }

	// Set up our namespace.
	var customize_api = wp.customize;
  customize_api.themeExtends = customize_api.themeExtends || {};

  /**
   * Designer customize function control
   */
  customize_api.themeExtends.customizeDesignerControl = function() {
    return {
      init () {
        this.vue_setup();
      },
      vue_setup () {

        new Vue({
          el: '#theme-extends-designer-action-control',
          store: wp.theme_store,
          data () {
            return {
              group_style_visible : false,
              stylelist_visible   : false,
              element_target      : false,
              element_target_list : [],
            }
          },
          created: function (el) {

          },
          computed: {
            designer_store () {
              return this.$store.state.designer;
            },
            design_panel_class () {
              return (Object.keys(this.designer_store.data_edit).length > 0) ? 'is-active' : '';
            },
          },
          watch: {
            'designer_store.data': {
              handler (data) {
                this.google_fonts_saving(data);
                $('textarea#theme-extends-design-data-field').val(JSON.stringify(data)).trigger('change');
              },
              deep: true,
            },
            'designer_store.google_fonts': {
              handler (data) {
                $('textarea#theme-extends-design-google-fonts-data-field').val(JSON.stringify(data)).trigger('change');
              },
              deep: true,
            },
            'element_target' (data) {
              this.element_selector_design_handle(data);
            },
          },
          methods: {
            description_element_item_text (item) {
              if(! item.description) return;

              var replace_map = {
                '%group_default%': (item.group_default) ? item.group_default.join(', ') : '',
              };

              return helpers.replace_str(item.description, Object.keys(replace_map), Object.values(replace_map));
            },
            edit_element (item) {
              this.designer_store.data_edit = item;
            },
            clear_edit () {
              this.designer_store.data_edit = {};
            },
            add_block_style (item) {
              var new_block_style = {
                type: item.base_id,
                properties: JSON.parse(JSON.stringify(item.data_map)),
              };

              this.designer_store.data_edit.group_style.push(new_block_style);
              this.group_style_visible = false;
            },
            element_design_exist (css_selector) {
              var element_added = this.designer_store.data.find( item => {
                return css_selector == item.css_selector;
              });

              return element_added;
            },
            add_design_element (item) {
              var css_selector = item.css_selector;
              var element_added = this.element_design_exist(css_selector);

              if(element_added) {
                this.designer_store.data_edit = element_added;
              } else {
                var new_element = {
                  name: item.name,
                  css_selector: item.css_selector,
                  group_style: [],
                };

                this.designer_store.data.push(new_element);
                this.designer_store.data_edit = new_element;
              }

              this.stylelist_visible = false;
            },
            add_design_target_element (event) {
              event.preventDefault();
              this.element_target = ! this.element_target;
            },
            remove_design_element (event) {
              event.preventDefault();

              var index = this.designer_store.data.indexOf(this.designer_store.data_edit);
              this.designer_store.data.splice(index, 1);
              this.clear_edit();
            },
            google_fonts_saving (data) {
              var self = this;
              var fonts = {};
              if(data.length <= 0) return fonts;

              var typography_block = [];
              $.each(data, function(index, item) {
                var style = item.group_style.filter(item => {
                  return 'typography' == item.type;
                })

                if(style.length > 0) typography_block.push(style[0].properties);
              })

              if(typography_block.length > 0) {
                $.each(typography_block, function(index, item) {
                  var typography = item.typography;
                  if(typography.font_family == '') return;

                  if(! fonts[typography.font_family]) {
                    fonts[typography.font_family] = (typography.font_variant && typography.font_variant != 'regular') ? [typography.font_variant] : [];
                  } else {
                    if($.inArray(typography.font_variant, fonts[typography.font_family]) == -1 && 'regular' != typography.font_variant){
                      fonts[typography.font_family].push(typography.font_variant);
                    }
                  }
                })
              }

              Vue.set(this.designer_store, 'google_fonts', fonts);
            },
            get_customize_iframe () {
              return $('#customize-preview').find('iframe')[0].contentWindow.document;
            },
            element_selector_design_handle (type) {
              var self = this;
              var customize_iframe = this.get_customize_iframe();

              if(type == true) {

                $(customize_iframe)
                .find('[data-design-selector]')
                .off('.designer')
                .on({
                  'mouseover.designer' (e) {

                    $(this).addClass('is-mouse-hover');
                    e.stopPropagation();
                  },
                  'mouseout.designer' (e) {

                    $(this).removeClass('is-mouse-hover');
                    e.stopPropagation();
                  },
                  'click.designer' (e) {
                    e.preventDefault();
                    e.stopPropagation();

                    var design_name = $(this).data('design-name'),
                        design_css_selector = $(this).data('design-selector');

                    if(typeof design_css_selector == 'object') {
                      self.element_target_list = design_css_selector;
                      self.element_target = false;
                    } else {
                      self.add_design_element(design_name, design_css_selector);
                    }
                  },
                })
              } else {

                $(customize_iframe).find('[data-design-selector]')
                .removeClass('is-mouse-hover')
                .off('.designer');
              }
            },
            select_element_default_list (design_name, design_css_selector) {
              var self = this;

              if(typeof design_css_selector == 'object') {
                self.element_target_list = design_css_selector;
                self.stylelist_visible = false;
              } else {
                self.add_design_element(design_name, design_css_selector);
              }
            },
            add_design_element (name, selector) {
              var self = this;
              var element_added = self.element_design_exist(selector);

              if(element_added) {
                self.designer_store.data_edit = element_added;
              } else {
                var new_element = {
                  name: name,
                  css_selector: selector,
                  group_style: [],
                };

                self.designer_store.data.push(new_element);
                self.designer_store.data_edit = new_element;
              }

              self.element_target = false;
              self.stylelist_visible = false;
            },
          }
        })

      },
    }
  }

  /* Customize ready */
  customize_api.themeExtends.customizeDesigner = new customize_api.themeExtends.customizeDesignerControl();
  customize_api.themeExtends.customizeDesigner.init();

  /* DOM Ready */
  $(function() {

  })
});;


/***/ }),

/***/ "./assets/js/modules/customize/footer.js":
/*!***********************************************!*\
  !*** ./assets/js/modules/customize/footer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Customize footer control
 */
var helpers = __webpack_require__(/*! ../helpers.js */ "./assets/js/modules/helpers.js");

/* harmony default export */ __webpack_exports__["default"] = (function (wp, $) {
  'use strict';

  if ( ! wp || ! wp.customize ) { return; }

	// Set up our namespace.
	var customize_api = wp.customize;
  customize_api.themeExtends = customize_api.themeExtends || {};

  /**
   * Footer customize function control
   */
  customize_api.themeExtends.customizeFooterControl = function() {
    return {
      init () {
        this.vue_setup();
      },
      vue_setup () {
        var self = this;

        new Vue({
          el: '#theme-extends-footer-configurator',
          store: wp.theme_store,
          data () {
            return {
              footer_panel_inner_classes: ['theme-extends-footer-panel-inner', 'is-widget-open'],
              footer_customize_layout_tab: 'desktop',
              settings_tab: 'footer_strip',
              has_edit: false,
            }
          },
          created: function () {

          },
          watch: {
            footer_edit: {
              handler (data, old_data) {
                this.has_edit = (data.key == old_data.key) ? true : false;
              },
              deep: true,
            }
          },
          computed: {
            root_store () {
              return this.$store.state.footer;
            },
            footer_edit () {
              return this.root_store.layout_edit;
            },
            widget_sortable_data () {
              return {
                group: {
                  name: 'widgets',
                  pull: "clone",
                },
                animation: 150,
                dragoverBubble: true,
                sort: false,
              }
            },
          },
          methods: {
            toggle_class_open_widget () {
              (this.footer_panel_inner_classes.indexOf('is-widget-open') == -1)
                ? this.footer_panel_inner_classes.push('is-widget-open')
                : this.footer_panel_inner_classes.splice(this.footer_panel_inner_classes.indexOf('is-widget-open'), 1);
            },
            clear_footer_edit () {
              this.root_store.layout_edit = {};
            },
            update_footer_edit () {
              $('textarea#theme-extends-footer-builder-data-field, textarea#theme-extends-footer-builder-layout-field').trigger('change');
              this.clear_footer_edit();
            },
          }
        })

        new Vue({
          el: '#theme-extends-footer-action-control',
          store: wp.theme_store,
          created: function (el) {
            this.set_layout_current_init();
          },
          computed: {
            root_store () {
              return this.$store.state.footer;
            },
            footer_edit () {
              return this.root_store.layout_edit;
            },
            footer_current () {
              return this.root_store.layout_current;
            },
          },
          watch: {
            footer_edit (data) {
              if(Object.keys(data).length > 0) self.openPanel();
              else self.closePanel();
            },
            footer_current: {
              handler(data, old_data){
                if( data.key == old_data.key ) {
                  $('textarea#theme-extends-footer-builder-data-field').val(JSON.stringify(data)); // .trigger('change');
                } else {
                  $('textarea#theme-extends-footer-builder-data-field').val(JSON.stringify(data)).trigger('change');
                } 

                 // do stuff
                 // $('textarea#theme-extends-footer-builder-data-field').val(JSON.stringify(data)).trigger('change');
              },
              deep: true,
            },
            'root_store.layouts': {
              handler (data) {
                $('textarea#theme-extends-footer-builder-layout-field').val(JSON.stringify(data)); //.trigger('change');
                // $('textarea#theme-extends-footer-builder-layout-field').val(helpers.jsesc(data)).trigger('change');
              },
              deep: true,
            }
          },
          methods: {
            set_layout_current_init () {
              var self = this,
                  flintotheme_footer_builder_data = $('textarea#theme-extends-footer-builder-data-field').val();

              this.root_store.layouts.forEach(function(item) {
                if(JSON.stringify(item) == flintotheme_footer_builder_data.trim()) {
                  self.root_store.layout_current = item;
                }
              })
            },
            footer_class_list (item) {
              var classes = ['footer-item'];

              if(item == this.footer_current) {
                classes.push('selected');
              };

              return classes;
            },
            edit_layout_handle (event, item) {
              event.preventDefault();
              this.root_store.layout_edit = item;
            },
            select_layout_handle (event, item) {
              event.preventDefault();
              this.root_store.layout_current = item;
            },
            remove_layout_handle (event, item, index) {

              if(this.footer_current == item) {
                this.root_store.layout_current = this.root_store.layouts[0];
              }

              if(this.footer_edit == item) {
                this.root_store.layout_edit = {};
              }

              this.root_store.layouts.splice(index, 1);
            },
            new_layout_handle (event) {
              event.preventDefault();
              var new_layout = {
                "key": helpers.random_key('__layout'), // new Date(),
                "name": "New Layout",
                "style": "nav-top",
                "settings": {
                  "footer_strip_display": false,
                  "footer_strip_text": '',
                  "footer_strip_button_display": true,
                  "footer_strip_button_text": "Read More",
                  "footer_strip_link": "#",
                  "footer_strip_button_close_display": true,
                  "footer_strip_content": "container",
                  "footer_tablet_mobile_transform_width": 979,
                  "footer_sticky": false,
                },
                "footer_sticky_data": [
                  {
                    "key": helpers.random_key('row-element'),
                    "element": "rs-row",
                    "children": [
                      {
                        "key": helpers.random_key('col-element'),
                        "element": "rs-col",
                        "params": {
                          "width": 100
                        },
                        "children": []
                      }
                    ],
                  }
                ],
                "footer_tablet_mobile_data": [
                  {
                    "key": helpers.random_key('row-element'),
                    "element": "rs-row",
                    "children": [
                      {
                        "key": helpers.random_key('col-element'),
                        "element": "rs-col",
                        "params": {
                          "width": 100
                        },
                        "children": []
                      }
                    ],
                  }
                ],
                "footer_data": [
                  {
                    "key": helpers.random_key('row-element'),
                    "element": "rs-row",
                    "children": [
                      {
                        "key": helpers.random_key('col-element'),
                        "element": "rs-col",
                        "params": {
                          "width": 100
                        },
                        "children": []
                      }
                    ],
                  }
                ]
              };

              this.root_store.layouts.push(new_layout);
              this.root_store.layout_edit = new_layout;
            },

          }
        })
      },
      openPanel () {
        $('body').addClass('theme-extends-footer-panel-visible');
      },
      closePanel () {
        $('body').removeClass('theme-extends-footer-panel-visible');
      },
    }
  }

  /* Customize ready */
  customize_api.themeExtends.customizeFooter = new customize_api.themeExtends.customizeFooterControl();
  customize_api.themeExtends.customizeFooter.init();

  /**
   * button toogle footer customize panel
   */
  $('body').on('click.toggle_customize_footer', '.theme-extends-btn-footer-open', function(e) {
    e.preventDefault();

    if($(this).hasClass('btn-is-active')) {
      customize_api.themeExtends.customizeFooter.closePanel();
      $(this).removeClass('btn-is-active');
    } else {
      customize_api.themeExtends.customizeFooter.openPanel();
      $(this).addClass('btn-is-active');
    }
  })

});;


/***/ }),

/***/ "./assets/js/modules/customize/global.js":
/*!***********************************************!*\
  !*** ./assets/js/modules/customize/global.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Customize global control
 */
var helpers = __webpack_require__(/*! ../helpers.js */ "./assets/js/modules/helpers.js");

/* harmony default export */ __webpack_exports__["default"] = (function (wp, $) {
  'use strict';

  if ( ! wp || ! wp.customize ) { return; }

	// Set up our namespace.
	var customize_api = wp.customize;
  customize_api.themeExtends = customize_api.themeExtends || {};

  /**
   * Global customize function control
   */
  customize_api.themeExtends.customizeGlobalControl = function() {
    return {
      init () {
        this.vue_setup();
      },
      vue_setup () {

        new Vue({
          el: '#theme-extends-global-action-control',
          store: wp.theme_store,
          data () {
            return {
              unique_opened: true,
            }
          },
          computed: {
            root_store () {
              return this.$store.state.global;
            },
            data () {
              return this.root_store.data;
            },
            edit () {
              return this.root_store.edit;
            },
          },
          watch: {
            'root_store.data': {
              handler (data) {
                $('textarea#theme-extends-global-settings-field').val( JSON.stringify(data) ).trigger('change');
              },
              deep: true,
            },
          },
          methods: {
            setEdit (data) {
              this.$store.state.global.edit = data;
            },
            disableElement(itemData, disableData) {
              if($.inArray(itemData, disableData) >= 0) {
                return 'theme-extends-element-disable';
              } else {
                return '';
              }
            },
          }
        })
      },
    }
  }

  /* Customize ready */
  customize_api.themeExtends.customizeGlobal = new customize_api.themeExtends.customizeGlobalControl();
  customize_api.themeExtends.customizeGlobal.init();

  /* DOM Ready */
  $(function() {

  })
});;


/***/ }),

/***/ "./assets/js/modules/customize/header.js":
/*!***********************************************!*\
  !*** ./assets/js/modules/customize/header.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Customize header control
 */
var helpers = __webpack_require__(/*! ../helpers.js */ "./assets/js/modules/helpers.js");

/* harmony default export */ __webpack_exports__["default"] = (function (wp, $) {
  'use strict';

  if ( ! wp || ! wp.customize ) { return; }

	// Set up our namespace.
	var customize_api = wp.customize;
  customize_api.themeExtends = customize_api.themeExtends || {};

  /**
   * Header customize function control
   */
  customize_api.themeExtends.customizeHeaderControl = function() {
    return {
      init () {
        this.vue_setup();
      },
      vue_setup () {
        var self = this;

        new Vue({
          el: '#theme-extends-header-configurator',
          store: wp.theme_store,
          data () {
            return {
              header_panel_inner_classes: ['theme-extends-header-panel-inner', 'is-widget-open'],
              header_customize_layout_tab: 'desktop',
              settings_tab: 'header_strip',
              has_edit: false,
            }
          },
          created: function (el) {
            
          },
          watch: {
            header_edit: {
              handler (data, old_data) {
                this.has_edit = (data.key == old_data.key) ? true : false;
              },
              deep: true,
            }
          },
          computed: {
            root_store () {
              return this.$store.state.header;
            },
            header_edit () {
              return this.root_store.layout_edit;
            },
            widget_sortable_data () {
              return {
                group: {
                  name: 'widgets',
                  pull: "clone",
                },
                animation: 150,
                dragoverBubble: true,
                sort: false,
              }
            },
          },
          methods: {
            toggle_class_open_widget () {
              (this.header_panel_inner_classes.indexOf('is-widget-open') == -1)
                ? this.header_panel_inner_classes.push('is-widget-open')
                : this.header_panel_inner_classes.splice(this.header_panel_inner_classes.indexOf('is-widget-open'), 1);
            },
            clear_header_edit () {
              this.root_store.layout_edit = {};
            },
            update_header_edit () {
              $('textarea#theme-extends-header-builder-data-field, textarea#theme-extends-header-builder-layout-field').trigger('change');
              this.clear_header_edit();
            },
            update_data_on_blur(evt, nameStringBinding) {
              if(evt.target.value == this.header_edit.settings[nameStringBinding]) return;
              Vue.set(this.header_edit.settings, nameStringBinding, evt.target.value)
            },
          }
        })

        new Vue({
          el: '#theme-extends-header-action-control',
          store: wp.theme_store,
          data () {
            return {};
          },
          created: function (el) {
            this.set_layout_current_init();
          },
          computed: {
            root_store () {
              return this.$store.state.header;
            },
            header_edit () {
              return this.root_store.layout_edit;
            },
            header_current () {
              return this.root_store.layout_current;
            },
          },
          watch: {
            header_edit (data) {
              if(Object.keys(data).length > 0) self.openPanel();
              else self.closePanel();
            },
            header_current: {
              handler(data, old_data){ 
                if( data.key == old_data.key ) {
                  $('textarea#theme-extends-header-builder-data-field').val(JSON.stringify(data)); // .trigger('change');
                } else {
                  $('textarea#theme-extends-header-builder-data-field').val(JSON.stringify(data)).trigger('change');
                } 

                // do stuff
                // $('textarea#theme-extends-header-builder-data-field').val(JSON.stringify(data)); // .trigger('change');
              },
              deep: true,
            },
            'root_store.layouts': {
              handler (data) {
                $('textarea#theme-extends-header-builder-layout-field').val(JSON.stringify(data)); //.trigger('change');
              },
              deep: true,
            }
          },
          methods: {
            set_layout_current_init () {
              var self = this,
                  flintotheme_header_builder_data = $('textarea#theme-extends-header-builder-data-field').val();

              this.root_store.layouts.forEach(function(item) {
                if(JSON.stringify(item) == flintotheme_header_builder_data.trim()) {
                  self.root_store.layout_current = item;
                }
              })
            },
            header_class_list (item) {
              var classes = ['header-item'];

              if(item == this.header_current) {
                classes.push('selected');
              };

              return classes;
            },
            edit_layout_handle (event, item) {
              event.preventDefault();
              this.$store.state.header.layout_edit = item;
            },
            select_layout_handle (event, item) {
              event.preventDefault();
              this.root_store.layout_current = item;
            },
            remove_layout_handle (event, item, index) {

              if(this.header_current == item) {
                this.root_store.layout_current = this.root_store.layouts[0];
              }

              if(this.header_edit == item) {
                this.root_store.layout_edit = {};
              }

              this.root_store.layouts.splice(index, 1);
            },
            new_layout_handle (event) {
              event.preventDefault();
              var new_layout = {
                "key": helpers.random_key('__layout'), //'__layout-' + new Date(),
                "name": "New Layout",
                "style": "nav-top",
                "settings": {
                  "header_strip_display": false,
                  "header_strip_text": '',
                  "header_strip_button_display": true,
                  "header_strip_button_text": "Read More",
                  "header_strip_link": "#",
                  "header_strip_button_close_display": true,
                  "header_strip_content": "large",
                  "header_tablet_mobile_transform_width": 979,
                  "header_sticky": false,
                },
                "header_sticky_data": [
                  {
                    "key": helpers.random_key('row-element'),
                    "element": "rs-row",
                    "children": [
                      {
                        "key": helpers.random_key('col-element'),
                        "element": "rs-col",
                        "params": {
                          "width": 100
                        },
                        "children": []
                      }
                    ],
                  }
                ],
                "header_tablet_mobile_data": [
                  {
                    "key": helpers.random_key('row-element'),
                    "element": "rs-row",
                    "children": [
                      {
                        "key": helpers.random_key('col-element'),
                        "element": "rs-col",
                        "params": {
                          "width": 100
                        },
                        "children": []
                      }
                    ],
                  }
                ],
                "header_data": [
                  {
                    "key": helpers.random_key('row-element'),
                    "element": "rs-row",
                    "children": [
                      {
                        "key": helpers.random_key('col-element'),
                        "element": "rs-col",
                        "params": {
                          "width": 100
                        },
                        "children": []
                      }
                    ],
                  }
                ]
              };

              this.root_store.layouts.push(new_layout);
              this.root_store.layout_edit = new_layout;
            },

          }
        })
      },
      openPanel () {
        $('body').addClass('theme-extends-header-panel-visible');
      },
      closePanel () {
        $('body').removeClass('theme-extends-header-panel-visible');
      },
    }
  }

  /* Customize ready */
  customize_api.themeExtends.customizeHeader = new customize_api.themeExtends.customizeHeaderControl();
  customize_api.themeExtends.customizeHeader.init();

  /**
   * button toogle header customize panel
   */
  $('body').on('click.toggle_customize_header', '.theme-extends-btn-header-open', function(e) {
    e.preventDefault();

    if($(this).hasClass('btn-is-active')) {
      customize_api.themeExtends.customizeHeader.closePanel();
      $(this).removeClass('btn-is-active');
    } else {
      customize_api.themeExtends.customizeHeader.openPanel();
      $(this).addClass('btn-is-active');
    }
  })

});;


/***/ }),

/***/ "./assets/js/modules/customize/heading-bar.js":
/*!****************************************************!*\
  !*** ./assets/js/modules/customize/heading-bar.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Customize heading bar control
 */
var helpers = __webpack_require__(/*! ../helpers.js */ "./assets/js/modules/helpers.js");

/* harmony default export */ __webpack_exports__["default"] = (function (wp, $) {
  'use strict';

  if ( ! wp || ! wp.customize ) { return; }

	// Set up our namespace.
	var customize_api = wp.customize;
  customize_api.themeExtends = customize_api.themeExtends || {};

  /**
   * Designer customize function control
   */
  customize_api.themeExtends.customizeHeadingBarControl = function() {
    return {
      init () {
        this.vue_setup();
      },
      vue_setup () {

        new Vue({
          el: '#theme-extends-heading-bar-action-control',
          store: wp.theme_store,
          data () {
            return {
              wp_media_field_params: {
                'label': "Select Image",
                'type': "wp-media"
              },
              bg_image_size: [
                { label: 'Cover', value: 'cover' },
                { label: 'Contain', value: 'contain' },
                { label: 'Initial', value: 'initial' },
              ],
              bg_image_position: [
                { label: 'Left', value: 'left' },
                { label: 'Right', value: 'right' },
                { label: 'Center', value: 'center' },
              ],
              bg_image_repeat: [
                { label: 'No Repeat', value: 'no-repeat' },
                { label: 'Tile', value: 'repeat' },
                { label: 'Tile Horizontally', value: 'repeat-x' },
                { label: 'Tile Vertically', value: 'repeat-y' },
              ],
              bg_image_attachment: [
                { label: 'Scroll', value: 'scroll' },
                { label: 'Fixed', value: 'fixed' },
              ],
            }
          },
          computed: {
            headingBarStore () {
              return this.$store.state.headingBar;
            }
          },
          watch: {
            'headingBarStore.data.flintotheme_heading_bar_display' (data) {
              $('input#theme-extends-heading-bar-title-bar-display-data-field').val(data).trigger('change');
            },
            'headingBarStore.data.flintotheme_heading_bar_page_title_display' (data) {
              $('input#theme-extends-heading-bar-page-title-display-data-field').val(data).trigger('change');
            },
            'headingBarStore.data.flintotheme_heading_bar_breadcrumb_display' (data) {
              $('input#theme-extends-heading-bar-breadcrumb-display-data-field').val(data).trigger('change');
            },
            'headingBarStore.data.flintotheme_heading_bar_content_align' (data) {
              $('input#theme-extends-heading-bar-content-align-data-field').val(data).trigger('change');
            },
            'headingBarStore.data.flintotheme_heading_bar_background_settings': {
              handler (data) {
                $('textarea#theme-extends-heading-bar-background-setings-data-field').val(JSON.stringify(data)).trigger('change');
              },
              deep: true,
            }
          }
        })
      },
    }
  }

  /* Customize ready */
  customize_api.themeExtends.customizeHeadingBar = new customize_api.themeExtends.customizeHeadingBarControl();
  customize_api.themeExtends.customizeHeadingBar.init();

  /* DOM Ready */
  $(function() {

  })
});;


/***/ }),

/***/ "./assets/js/modules/customize/jetpack-portfolio.js":
/*!**********************************************************!*\
  !*** ./assets/js/modules/customize/jetpack-portfolio.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Customize jetpack-portfolio control
 */
var helpers = __webpack_require__(/*! ../helpers.js */ "./assets/js/modules/helpers.js");

/* harmony default export */ __webpack_exports__["default"] = (function (wp, $) {
  'use strict';

  if ( ! wp || ! wp.customize ) { return; }

	// Set up our namespace.
	var customize_api = wp.customize;
  customize_api.themeExtends = customize_api.themeExtends || {};

  /**
   * WooCommerce customize function control
   */
  customize_api.themeExtends.customizeJetpackPortfolioControl = function() {
    return {
      init () {
        if($('#theme-extends-jetpack-portfolio-action-control').length <= 0) return;
        this.vue_setup();
      },
      vue_setup () {

        new Vue({
          el: '#theme-extends-jetpack-portfolio-action-control',
          store: wp.theme_store,
          data () {
            return {

            }
          },
          computed: {
            root_store () {
              return this.$store.state.jetpack_portfolio;
            },
          },
          watch: {
            'root_store.data': {
              handler (data) {
                $('textarea#theme-extends-jetpack-portfolio-settings-field').val( JSON.stringify(data) ).trigger('change');
              },
              deep: true,
            },
          },
          methods: {

          }
        })

      },
    }
  }

  /* Customize ready */
  customize_api.themeExtends.customizeJetpackPortfolio = new customize_api.themeExtends.customizeJetpackPortfolioControl();
  customize_api.themeExtends.customizeJetpackPortfolio.init();

  /* DOM Ready */
  $(function() {

  })
});;


/***/ }),

/***/ "./assets/js/modules/customize/taxonomy-heading-bar.js":
/*!*************************************************************!*\
  !*** ./assets/js/modules/customize/taxonomy-heading-bar.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Customize taxonomy heading bar control
 */
var helpers = __webpack_require__(/*! ../helpers.js */ "./assets/js/modules/helpers.js");

/* harmony default export */ __webpack_exports__["default"] = (function (wp, $) {
  'use strict';

  if ( ! wp || ! wp.customize ) { return; }

	// Set up our namespace.
	var customize_api = wp.customize;
    customize_api.themeExtends = customize_api.themeExtends || {};

    /**
     * Designer customize function control
     */
    customize_api.themeExtends.customizeTaxonomyHeadingBarControl = function() {
        return {
            init () {
                this.vue_setup();
            },
            vue_setup () {
                new Vue({
                    el: '#theme-extends-taxonomy-heading-bar-action-control',
                    store: wp.theme_store,
                    data () {
                        return {
                            edit: '',
                            taxonomies_popover: false,
                            taxonomies_popover_remove_settings: false,
                            wp_media_field_params: {
                                'label': "Select Image",
                                'type': "wp-media",
                            },
                            bg_image_size: [
                                { label: 'Cover', value: 'cover' },
                                { label: 'Contain', value: 'contain' },
                                { label: 'Initial', value: 'initial' },
                            ],
                            bg_image_position: [
                                { label: 'Left', value: 'left' },
                                { label: 'Right', value: 'right' },
                                { label: 'Center', value: 'center' },
                            ],
                            bg_image_repeat: [
                                { label: 'No Repeat', value: 'no-repeat' },
                                { label: 'Tile', value: 'repeat' },
                                { label: 'Tile Horizontally', value: 'repeat-x' },
                                { label: 'Tile Vertically', value: 'repeat-y' },
                            ],
                            bg_image_attachment: [
                                { label: 'Scroll', value: 'scroll' },
                                { label: 'Fixed', value: 'fixed' },
                            ],
                        }
                    },
                    computed: {
                        root_store () {
                            return this.$store.state.taxonomyHeadingBar;
                        },
                        taxonomy_data () {
                            return this.root_store.data.flintotheme_data_taxonomy;
                        },
                        taxonomy_heading_bar_data () {
                            return this.root_store.data.flintotheme_heading_bar_settings;
                        },
                        taxonomy_heading_bar_panel_class () {
                            var classes = (this.edit) ? 'is-active' : '';
                            return [classes].join(' ');
                        },
                        taxonomy_current_edit () {
                            if(this.taxonomy_heading_bar_data[this.edit]) return this.taxonomy_heading_bar_data[this.edit];
                        },
                    },
                    watch: {
                        'taxonomy_heading_bar_data': {
                            handler (data) {
                                $('textarea#theme-extends-taxonomy-heading-bar-settings-data-field').val(JSON.stringify(data)).trigger('change');
                            },
                            deep: true,
                        },
                    },
                    methods: {
                        select_taxonomy_options(event, name, options) {
                            this.edit = name;
                        },
                        render_new_options(label_text) {
                            // Clone settings
                            var newSettings = JSON.parse(JSON.stringify(theme_customize_object.flintotheme_taxonomy_settings_default));
                            
                            // change label
                            newSettings.label = `${label_text}`;

                            return newSettings;
                        },
                        check_taxonomy_options_exist(taxonomy_name) {
                            var taxo_opts_exist = Object.keys(this.taxonomy_heading_bar_data);
                            if($.inArray(taxonomy_name, taxo_opts_exist) >= 0) {
                                return true;
                            } else {
                                return false;
                            }
                        },
                        add_taxonomy_settings(event, taxonomy) {
                            if(this.check_taxonomy_options_exist(taxonomy.name)) {
                                // set current edit
                                this.edit = taxonomy.name;
                                
                                // hidden popover
                                this.taxonomies_popover = false;
                                return;
                            }

                            var newSettings = this.render_new_options(`${taxonomy.label} (${taxonomy.posttype})`);
                            
                            // push new taxonomy options
                            Vue.set(this.taxonomy_heading_bar_data, taxonomy.name, newSettings);

                            // set current edit
                            this.edit = taxonomy.name;

                            // hidden popover
                            this.taxonomies_popover = false;
                        },
                        remove_taxonomy_settings(event, taxonomy_name) {
                            // delete settings from list
                            Vue.delete(this.taxonomy_heading_bar_data, taxonomy_name);

                            // set current edit
                            this.edit = '';

                            // hidden popover
                            this.taxonomies_popover_remove_settings = false;
                        }
                    },
                })
            },
        }
    }

    /* Customize ready */
    customize_api.themeExtends.customizeTaxonomyHeadingBar = new customize_api.themeExtends.customizeTaxonomyHeadingBarControl();
    customize_api.themeExtends.customizeTaxonomyHeadingBar.init();

    /* DOM Ready */
    $(function() {

    })
});;


/***/ }),

/***/ "./assets/js/modules/customize/woocommerce.js":
/*!****************************************************!*\
  !*** ./assets/js/modules/customize/woocommerce.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Customize woocommerce control
 */
var helpers = __webpack_require__(/*! ../helpers.js */ "./assets/js/modules/helpers.js");

/* harmony default export */ __webpack_exports__["default"] = (function (wp, $) {
  'use strict';

  if ( ! wp || ! wp.customize ) { return; }

	// Set up our namespace.
	var customize_api = wp.customize;
  customize_api.themeExtends = customize_api.themeExtends || {};

  /**
   * WooCommerce customize function control
   */
  customize_api.themeExtends.customizeWooCommerceControl = function() {
    return {
      init () {
        if($('#theme-extends-woocommerce-action-control').length <= 0) return;
        this.vue_setup();
      },
      vue_setup () {

        new Vue({
          el: '#theme-extends-woocommerce-action-control',
          store: wp.theme_store,
          data () {
            return {

            }
          },
          computed: {
            root_store () {
              return this.$store.state.woocommerce;
            },
          },
          watch: {
            'root_store.data': {
              handler (data) {
                // console.log(data);
                $('textarea#theme-extends-woocommerce-settings-field').val( JSON.stringify(data) ).trigger('change');
              },
              deep: true,
            },
          },
          methods: {

          }
        })

      },
    }
  }

  /* Customize ready */
  customize_api.themeExtends.customizeWooCommerce = new customize_api.themeExtends.customizeWooCommerceControl();
  customize_api.themeExtends.customizeWooCommerce.init();

  /* DOM Ready */
  $(function() {

  })
});;


/***/ }),

/***/ "./assets/js/modules/directives/col-resize.js":
/*!****************************************************!*\
  !*** ./assets/js/modules/directives/col-resize.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * directive col resize
 */

$ = jQuery.noConflict();
module.exports = {
  bind (el, binding, vnode) {

  },
  inserted (el, binding, vnode) {
    if(binding.value == false) return;
    var [item, index] = binding.value;

    el.resizable_obj = $(el).resizable({
      handles: 'w',
      create () {

        /* get width first parent rs-row */
        this.get_row_width = function(ui) {
          return $(ui.element).closest('.rs-row').innerWidth();
        }

        /* calc new row percent */
        this.calc_new_percent = function(ui) {
          return parseFloat((ui.size.width / this.get_row_width(ui)) * 100).toFixed(3);
        }
      },
      resize (event, ui) {
        var col_new_percent = this.calc_new_percent(ui);
        vnode.context.$root.$emit('event:resize_col' + vnode.parent.context.$props.item.key, item, col_new_percent);
        ui.position.left = 0;
        ui.originalElement.css('width', col_new_percent + '%');
      },
    });

    if(index == 0)
      el.resizable_obj.resizable( 'option', 'disabled', true );
  },
  update (el, binding, vnode) {
    if(binding.value == false) return;
    var [item, index] = binding.value;

    var children_data = vnode.parent.context.item.children;
        new_index = children_data.indexOf(binding.value[0]);

    if(0 == new_index) {
      el.resizable_obj.resizable( 'option', 'disabled', true );
    } else {
      el.resizable_obj.resizable( 'option', 'disabled', false );
    }
  },
  componentUpdated (el, binding, vnode) {

  }
}


/***/ }),

/***/ "./assets/js/modules/directives/draggable-element.js":
/*!***********************************************************!*\
  !*** ./assets/js/modules/directives/draggable-element.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * directive draggable
 */

$ = jQuery.noConflict();
module.exports = {
  bind (el, binding, vnode) {

  },
  inserted (el, binding, vnode) {
    $(el).draggable(binding.value);
  },
  update (el, binding, vnode) {

  },
  componentUpdated (el, binding, vnode) {

  }
}


/***/ }),

/***/ "./assets/js/modules/directives/sortable-element.js":
/*!**********************************************************!*\
  !*** ./assets/js/modules/directives/sortable-element.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * directive sortable
 */

$ = jQuery.noConflict();
module.exports = {
  bind (el, binding, vnode) {

  },
  inserted (el, binding, vnode) {
    if(binding.value == false) return;

    var options = binding.value;
    new Sortable(el, options);
  },
  update (el, binding, vnode) {
    
  },
  componentUpdated (el, binding, vnode) {

  }
}


/***/ }),

/***/ "./assets/js/modules/google_webfonts.js":
/*!**********************************************!*\
  !*** ./assets/js/modules/google_webfonts.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"kind":"webfonts#webfontList","items":[{"kind":"webfonts#webfont","family":"ABeeZee","category":"sans-serif","variants":["regular","italic"],"subsets":["latin"],"version":"v11","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/abeezee/v11/mE5BOuZKGln_Ex0uYKpIaw.ttf","italic":"http://fonts.gstatic.com/s/abeezee/v11/kpplLynmYgP0YtlJA3atRw.ttf"}},{"kind":"webfonts#webfont","family":"Abel","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/abel/v8/RpUKfqNxoyNe_ka23bzQ2A.ttf"}},{"kind":"webfonts#webfont","family":"Abhaya Libre","category":"serif","variants":["regular","500","600","700","800"],"subsets":["sinhala","latin-ext","latin"],"version":"v3","lastModified":"2017-10-10","files":{"500":"http://fonts.gstatic.com/s/abhayalibre/v3/wBjdF6T34NCo7wQYXgzrc5MQuUSAwdHsY8ov_6tk1oA.ttf","600":"http://fonts.gstatic.com/s/abhayalibre/v3/wBjdF6T34NCo7wQYXgzrc2v8CylhIUtwUiYO7Z2wXbE.ttf","700":"http://fonts.gstatic.com/s/abhayalibre/v3/wBjdF6T34NCo7wQYXgzrc0D2ttfZwueP-QU272T9-k4.ttf","800":"http://fonts.gstatic.com/s/abhayalibre/v3/wBjdF6T34NCo7wQYXgzrc_qsay_1ZmRGmC8pVRdIfAg.ttf","regular":"http://fonts.gstatic.com/s/abhayalibre/v3/zTLc5Jxv6yvb1nHyqBasVy3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Abril Fatface","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/abrilfatface/v9/X1g_KwGeBV3ajZIXQ9VnDojjx0o0jr6fNXxPgYh_a8Q.ttf"}},{"kind":"webfonts#webfont","family":"Aclonica","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/aclonica/v8/M6pHZMPwK3DiBSlo3jwAKQ.ttf"}},{"kind":"webfonts#webfont","family":"Acme","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/acme/v7/-J6XNtAHPZBEbsifCdBt-g.ttf"}},{"kind":"webfonts#webfont","family":"Actor","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/actor/v7/ugMf40CrRK6Jf6Yz_xNSmQ.ttf"}},{"kind":"webfonts#webfont","family":"Adamina","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v10","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/adamina/v10/RUQfOodOMiVVYqFZcSlT9w.ttf"}},{"kind":"webfonts#webfont","family":"Advent Pro","category":"sans-serif","variants":["100","200","300","regular","500","600","700"],"subsets":["latin-ext","greek","latin"],"version":"v7","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/adventpro/v7/87-JOpSUecTG50PBYK4ysi3USBnSvpkopQaUR-2r7iU.ttf","200":"http://fonts.gstatic.com/s/adventpro/v7/URTSSjIp0Wr-GrjxFdFWnGeudeTO44zf-ht3k-KNzwg.ttf","300":"http://fonts.gstatic.com/s/adventpro/v7/sJaBfJYSFgoB80OL1_66m0eOrDcLawS7-ssYqLr2Xp4.ttf","500":"http://fonts.gstatic.com/s/adventpro/v7/7kBth2-rT8tP40RmMMXMLJp-63r6doWhTEbsfBIRJ7A.ttf","600":"http://fonts.gstatic.com/s/adventpro/v7/3Jo-2maCzv2QLzQBzaKHV_pTEJqju4Hz1txDWij77d4.ttf","700":"http://fonts.gstatic.com/s/adventpro/v7/M4I6QiICt-ey_wZTpR2gKwJKKGfqHaYFsRG-T3ceEVo.ttf","regular":"http://fonts.gstatic.com/s/adventpro/v7/1NxMBeKVcNNH2H46AUR3wfesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Aguafina Script","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/aguafinascript/v6/65g7cgMtMGnNlNyq_Z6CvMxLhO8OSNnfAp53LK1_iRs.ttf"}},{"kind":"webfonts#webfont","family":"Akronim","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/akronim/v7/qA0L2CSArk3tuOWE1AR1DA.ttf"}},{"kind":"webfonts#webfont","family":"Aladin","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/aladin/v6/PyuJ5cVHkduO0j5fAMKvAA.ttf"}},{"kind":"webfonts#webfont","family":"Aldrich","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/aldrich/v8/kMMW1S56gFx7RP_mW1g-Eg.ttf"}},{"kind":"webfonts#webfont","family":"Alef","category":"sans-serif","variants":["regular","700"],"subsets":["hebrew","latin"],"version":"v9","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/alef/v9/VDgZJhEwudtOzOFQpZ8MEA.ttf","regular":"http://fonts.gstatic.com/s/alef/v9/ENvZ_P0HBDQxNZYCQO0lUA.ttf"}},{"kind":"webfonts#webfont","family":"Alegreya","category":"serif","variants":["regular","italic","700","700italic","900","900italic"],"subsets":["latin-ext","latin"],"version":"v9","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/alegreya/v9/5oZtdI5-wQwgAFrd9erCsaCWcynf_cDxXwCLxiixG1c.ttf","900":"http://fonts.gstatic.com/s/alegreya/v9/oQeMxX-vxGImzDgX6nxA7KCWcynf_cDxXwCLxiixG1c.ttf","regular":"http://fonts.gstatic.com/s/alegreya/v9/62J3atXd6bvMU4qO_ca-eA.ttf","italic":"http://fonts.gstatic.com/s/alegreya/v9/cbshnQGxwmlHBjUil7DaIfesZW2xOQ-xsNqO47m55DA.ttf","700italic":"http://fonts.gstatic.com/s/alegreya/v9/IWi8e5bpnqhMRsZKTcTUWgJKKGfqHaYFsRG-T3ceEVo.ttf","900italic":"http://fonts.gstatic.com/s/alegreya/v9/-L71QLH_XqgYWaI1GbOVhp0EAVxt0G0biEntp43Qt6E.ttf"}},{"kind":"webfonts#webfont","family":"Alegreya SC","category":"serif","variants":["regular","italic","700","700italic","900","900italic"],"subsets":["latin-ext","latin"],"version":"v8","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/alegreyasc/v8/M9OIREoxDkvynwTpBAYUq3e1Pd76Vl7zRpE7NLJQ7XU.ttf","900":"http://fonts.gstatic.com/s/alegreyasc/v8/M9OIREoxDkvynwTpBAYUqyenaqEuufTBk9XMKnKmgDA.ttf","regular":"http://fonts.gstatic.com/s/alegreyasc/v8/3ozeFnTbygMK6PfHh8B-iqCWcynf_cDxXwCLxiixG1c.ttf","italic":"http://fonts.gstatic.com/s/alegreyasc/v8/GOqmv3FLsJ2r6ZALMZVBmkeOrDcLawS7-ssYqLr2Xp4.ttf","700italic":"http://fonts.gstatic.com/s/alegreyasc/v8/5PCoU7IUfCicpKBJtBmP6c_zJjSACmk0BRPxQqhnNLU.ttf","900italic":"http://fonts.gstatic.com/s/alegreyasc/v8/5PCoU7IUfCicpKBJtBmP6U_yTOUGsoC54csJe1b-IRw.ttf"}},{"kind":"webfonts#webfont","family":"Alegreya Sans","category":"sans-serif","variants":["100","100italic","300","300italic","regular","italic","500","500italic","700","700italic","800","800italic","900","900italic"],"subsets":["cyrillic","latin-ext","cyrillic-ext","greek","vietnamese","greek-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/alegreyasans/v6/TKyx_-JJ6MdpQruNk-t-PJFGFO4uyVFMfB6LZsii7kI.ttf","300":"http://fonts.gstatic.com/s/alegreyasans/v6/11EDm-lum6tskJMBbdy9acB1LjARzAvdqa1uQC32v70.ttf","500":"http://fonts.gstatic.com/s/alegreyasans/v6/11EDm-lum6tskJMBbdy9aQqQmZ7VjhwksfpNVG0pqGc.ttf","700":"http://fonts.gstatic.com/s/alegreyasans/v6/11EDm-lum6tskJMBbdy9aVCbmAUID8LN-q3pJpOk3Ys.ttf","800":"http://fonts.gstatic.com/s/alegreyasans/v6/11EDm-lum6tskJMBbdy9acxnD5BewVtRRHHljCwR2bM.ttf","900":"http://fonts.gstatic.com/s/alegreyasans/v6/11EDm-lum6tskJMBbdy9aW42xlVP-j5dagE7-AU2zwg.ttf","100italic":"http://fonts.gstatic.com/s/alegreyasans/v6/gRkSP2lBpqoMTVxg7DmVn2cDnjsrnI9_xJ-5gnBaHsE.ttf","300italic":"http://fonts.gstatic.com/s/alegreyasans/v6/WfiXipsmjqRqsDBQ1bA9CnfqlVoxTUFFx1C8tBqmbcg.ttf","regular":"http://fonts.gstatic.com/s/alegreyasans/v6/KYNzioYhDai7mTMnx_gDgn8f0n03UdmQgF_CLvNR2vg.ttf","italic":"http://fonts.gstatic.com/s/alegreyasans/v6/TKyx_-JJ6MdpQruNk-t-PD4G9C9ttb0Oz5Cvf0qOitE.ttf","500italic":"http://fonts.gstatic.com/s/alegreyasans/v6/WfiXipsmjqRqsDBQ1bA9Cs7DCVO6wo6i5LKIyZDzK40.ttf","700italic":"http://fonts.gstatic.com/s/alegreyasans/v6/WfiXipsmjqRqsDBQ1bA9CpF66r9C4AnxxlBlGd7xY4g.ttf","800italic":"http://fonts.gstatic.com/s/alegreyasans/v6/WfiXipsmjqRqsDBQ1bA9CicOAJ_9MkLPbDmrtXDPbIU.ttf","900italic":"http://fonts.gstatic.com/s/alegreyasans/v6/WfiXipsmjqRqsDBQ1bA9ChRaDUI9aE8-k7PrIG2iiuo.ttf"}},{"kind":"webfonts#webfont","family":"Alegreya Sans SC","category":"sans-serif","variants":["100","100italic","300","300italic","regular","italic","500","500italic","700","700italic","800","800italic","900","900italic"],"subsets":["cyrillic","latin-ext","cyrillic-ext","greek","vietnamese","greek-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/alegreyasanssc/v6/trwFkDJLOJf6hqM93944kVnzStfdnFU-MXbO84aBs_M.ttf","300":"http://fonts.gstatic.com/s/alegreyasanssc/v6/AjAmkoP1y0Vaad0UPPR46-1IqtfxJspFjzJp0SaQRcI.ttf","500":"http://fonts.gstatic.com/s/alegreyasanssc/v6/AjAmkoP1y0Vaad0UPPR46_hHTluI57wqxl55RvSYo3s.ttf","700":"http://fonts.gstatic.com/s/alegreyasanssc/v6/AjAmkoP1y0Vaad0UPPR4600aId5t1FC-xZ8nmpa_XLk.ttf","800":"http://fonts.gstatic.com/s/alegreyasanssc/v6/AjAmkoP1y0Vaad0UPPR46wQgSHD3Lo1Mif2Wkk5swWA.ttf","900":"http://fonts.gstatic.com/s/alegreyasanssc/v6/AjAmkoP1y0Vaad0UPPR461Rf9EWUSEX_PR1d_gLKfpM.ttf","100italic":"http://fonts.gstatic.com/s/alegreyasanssc/v6/qG3gA9iy5RpXMH4crZboqqakMVR0XlJhO7VdJ8yYvA4.ttf","300italic":"http://fonts.gstatic.com/s/alegreyasanssc/v6/0VweK-TO3aQgazdxg8fs0CnTKaH808trtzttbEg4yVA.ttf","regular":"http://fonts.gstatic.com/s/alegreyasanssc/v6/6kgb6ZvOagoVIRZyl8XV-EklWX-XdLVn1WTiuGuvKIU.ttf","italic":"http://fonts.gstatic.com/s/alegreyasanssc/v6/trwFkDJLOJf6hqM93944kTfqo69HNOlCNZvbwAmUtiA.ttf","500italic":"http://fonts.gstatic.com/s/alegreyasanssc/v6/0VweK-TO3aQgazdxg8fs0NqVvxKdFVwqwzilqfVd39U.ttf","700italic":"http://fonts.gstatic.com/s/alegreyasanssc/v6/0VweK-TO3aQgazdxg8fs0IBYn3VD6xMEnodOh8pnFw4.ttf","800italic":"http://fonts.gstatic.com/s/alegreyasanssc/v6/0VweK-TO3aQgazdxg8fs0HStmCm6Rs90XeztCALm0H8.ttf","900italic":"http://fonts.gstatic.com/s/alegreyasanssc/v6/0VweK-TO3aQgazdxg8fs0IvtwEfTCJoOJugANj-jWDI.ttf"}},{"kind":"webfonts#webfont","family":"Alex Brush","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/alexbrush/v8/ooh3KJFbKJSUoIRWfiu8o_esZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Alfa Slab One","category":"display","variants":["regular"],"subsets":["latin-ext","vietnamese","latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/alfaslabone/v7/Qx6FPcitRwTC_k88tLPc-Yjjx0o0jr6fNXxPgYh_a8Q.ttf"}},{"kind":"webfonts#webfont","family":"Alice","category":"serif","variants":["regular"],"subsets":["cyrillic","cyrillic-ext","latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/alice/v9/wZTAfivekBqIg-rk63nFvQ.ttf"}},{"kind":"webfonts#webfont","family":"Alike","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v10","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/alike/v10/Ho8YpRKNk_202fwDiGNIyw.ttf"}},{"kind":"webfonts#webfont","family":"Alike Angular","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/alikeangular/v8/OpeCu4xxI3qO1C7CZcJtPT3XH2uEnVI__ynTBvNyki8.ttf"}},{"kind":"webfonts#webfont","family":"Allan","category":"display","variants":["regular","700"],"subsets":["latin-ext","latin"],"version":"v9","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/allan/v9/zSxQiwo7wgnr7KkMXhSiag.ttf","regular":"http://fonts.gstatic.com/s/allan/v9/T3lemhgZmLQkQI2Qc2bQHA.ttf"}},{"kind":"webfonts#webfont","family":"Allerta","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/allerta/v8/s9FOEuiJFTNbMe06ifzV8g.ttf"}},{"kind":"webfonts#webfont","family":"Allerta Stencil","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/allertastencil/v8/CdSZfRtHbQrBohqmzSdDYFf2eT4jUldwg_9fgfY_tHc.ttf"}},{"kind":"webfonts#webfont","family":"Allura","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/allura/v6/4hcqgZanyuJ2gMYWffIR6A.ttf"}},{"kind":"webfonts#webfont","family":"Almendra","category":"serif","variants":["regular","italic","700","700italic"],"subsets":["latin-ext","latin"],"version":"v10","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/almendra/v10/ZpLdQMj7Q2AFio4nNO6A76CWcynf_cDxXwCLxiixG1c.ttf","regular":"http://fonts.gstatic.com/s/almendra/v10/PDpbB-ZF7deXAAEYPkQOeg.ttf","italic":"http://fonts.gstatic.com/s/almendra/v10/CNWLyiDucqVKVgr4EMidi_esZW2xOQ-xsNqO47m55DA.ttf","700italic":"http://fonts.gstatic.com/s/almendra/v10/-tXHKMcnn6FqrhJV3l1e3QJKKGfqHaYFsRG-T3ceEVo.ttf"}},{"kind":"webfonts#webfont","family":"Almendra Display","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v8","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/almendradisplay/v8/2Zuu97WJ_ez-87yz5Ai8fF6uyC_qD11hrFQ6EGgTJWI.ttf"}},{"kind":"webfonts#webfont","family":"Almendra SC","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/almendrasc/v8/IuiLd8Fm9I6raSalxMoWeaCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Amarante","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/amarante/v5/2dQHjIBWSpydit5zkJZnOw.ttf"}},{"kind":"webfonts#webfont","family":"Amaranth","category":"sans-serif","variants":["regular","italic","700","700italic"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/amaranth/v8/j5OFHqadfxyLnQRxFeox6qCWcynf_cDxXwCLxiixG1c.ttf","regular":"http://fonts.gstatic.com/s/amaranth/v8/7VcBog22JBHsHXHdnnycTA.ttf","italic":"http://fonts.gstatic.com/s/amaranth/v8/UrJlRY9LcVERJSvggsdBqPesZW2xOQ-xsNqO47m55DA.ttf","700italic":"http://fonts.gstatic.com/s/amaranth/v8/BHyuYFj9nqLFNvOvGh0xTwJKKGfqHaYFsRG-T3ceEVo.ttf"}},{"kind":"webfonts#webfont","family":"Amatic SC","category":"handwriting","variants":["regular","700"],"subsets":["hebrew","latin-ext","vietnamese","latin"],"version":"v10","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/amaticsc/v10/IDnkRTPGcrSVo50UyYNK7y3USBnSvpkopQaUR-2r7iU.ttf","regular":"http://fonts.gstatic.com/s/amaticsc/v10/MldbRWLFytvqxU1y81xSVg.ttf"}},{"kind":"webfonts#webfont","family":"Amethysta","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/amethysta/v6/1jEo9tOFIJDolAUpBnWbnA.ttf"}},{"kind":"webfonts#webfont","family":"Amiko","category":"sans-serif","variants":["regular","600","700"],"subsets":["devanagari","latin-ext","latin"],"version":"v2","lastModified":"2017-10-10","files":{"600":"http://fonts.gstatic.com/s/amiko/v2/BaZst4RZ4sDyD3mH-BfVaA.ttf","700":"http://fonts.gstatic.com/s/amiko/v2/6syx43mQ07VvOmpFc0G9Lg.ttf","regular":"http://fonts.gstatic.com/s/amiko/v2/A7bjc3cOLJtGgpPGnxyHsw.ttf"}},{"kind":"webfonts#webfont","family":"Amiri","category":"serif","variants":["regular","italic","700","700italic"],"subsets":["arabic","latin-ext","latin"],"version":"v9","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/amiri/v9/WQsR_moz-FNqVwGYgptqiA.ttf","regular":"http://fonts.gstatic.com/s/amiri/v9/ATARrPmSew75SlpOw2YABQ.ttf","italic":"http://fonts.gstatic.com/s/amiri/v9/3t1yTQlLUXBw8htrqlXBrw.ttf","700italic":"http://fonts.gstatic.com/s/amiri/v9/uF8aNEyD0bxMeTBg9bFDSPesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Amita","category":"handwriting","variants":["regular","700"],"subsets":["devanagari","latin-ext","latin"],"version":"v3","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/amita/v3/cIYA2Lzp7l2pcGsqpUidBg.ttf","regular":"http://fonts.gstatic.com/s/amita/v3/RhdhGBXSJqkHo6g7miTEcQ.ttf"}},{"kind":"webfonts#webfont","family":"Anaheim","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/anaheim/v5/t-z8aXHMpgI2gjN_rIflKA.ttf"}},{"kind":"webfonts#webfont","family":"Andada","category":"serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/andada/v9/rSFaDqNNQBRw3y19MB5Y4w.ttf"}},{"kind":"webfonts#webfont","family":"Andika","category":"sans-serif","variants":["regular"],"subsets":["cyrillic","latin-ext","cyrillic-ext","vietnamese","latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/andika/v9/oe-ag1G0lcqZ3IXfeEgaGg.ttf"}},{"kind":"webfonts#webfont","family":"Angkor","category":"display","variants":["regular"],"subsets":["khmer"],"version":"v10","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/angkor/v10/DLpLgIS-8F10ecwKqCm95Q.ttf"}},{"kind":"webfonts#webfont","family":"Annie Use Your Telescope","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/annieuseyourtelescope/v8/2cuiO5VmaR09C8SLGEQjGqbp7mtG8sPlcZvOaO8HBak.ttf"}},{"kind":"webfonts#webfont","family":"Anonymous Pro","category":"monospace","variants":["regular","italic","700","700italic"],"subsets":["cyrillic","latin-ext","greek","latin"],"version":"v11","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/anonymouspro/v11/WDf5lZYgdmmKhO8E1AQud--Cz_5MeePnXDAcLNWyBME.ttf","regular":"http://fonts.gstatic.com/s/anonymouspro/v11/Zhfjj_gat3waL4JSju74E-V_5zh5b-_HiooIRUBwn1A.ttf","italic":"http://fonts.gstatic.com/s/anonymouspro/v11/q0u6LFHwttnT_69euiDbWKwIsuKDCXG0NQm7BvAgx-c.ttf","700italic":"http://fonts.gstatic.com/s/anonymouspro/v11/_fVr_XGln-cetWSUc-JpfA1LL9bfs7wyIp6F8OC9RxA.ttf"}},{"kind":"webfonts#webfont","family":"Antic","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/antic/v9/hEa8XCNM7tXGzD0Uk0AipA.ttf"}},{"kind":"webfonts#webfont","family":"Antic Didone","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/anticdidone/v6/r3nJcTDuOluOL6LGDV1vRy3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Antic Slab","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/anticslab/v6/PSbJCTKkAS7skPdkd7AKEvesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Anton","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","vietnamese","latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/anton/v9/XIbCenm-W0IRHWYIh7CGUQ.ttf"}},{"kind":"webfonts#webfont","family":"Arapey","category":"serif","variants":["regular","italic"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/arapey/v6/dqu823lrSYn8T2gApTdslA.ttf","italic":"http://fonts.gstatic.com/s/arapey/v6/pY-Xi5JNBpaWxy2tZhEm5A.ttf"}},{"kind":"webfonts#webfont","family":"Arbutus","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/arbutus/v7/Go_hurxoUsn5MnqNVQgodQ.ttf"}},{"kind":"webfonts#webfont","family":"Arbutus Slab","category":"serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/arbutusslab/v6/6k3Yp6iS9l4jRIpynA8qMy3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Architects Daughter","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/architectsdaughter/v8/RXTgOOQ9AAtaVOHxx0IUBMCy0EhZjHzu-y0e6uLf4Fg.ttf"}},{"kind":"webfonts#webfont","family":"Archivo","category":"sans-serif","variants":["regular","italic","500","500italic","600","600italic","700","700italic"],"subsets":["latin-ext","vietnamese","latin"],"version":"v3","lastModified":"2017-10-10","files":{"500":"http://fonts.gstatic.com/s/archivo/v3/kolpDHEnC87zFuFfslSCevesZW2xOQ-xsNqO47m55DA.ttf","600":"http://fonts.gstatic.com/s/archivo/v3/ujChrOQvaQhWGqGyAyvouPesZW2xOQ-xsNqO47m55DA.ttf","700":"http://fonts.gstatic.com/s/archivo/v3/pOE88CC9eYkEsVEVFu184_esZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/archivo/v3/r-UxY2mA_5pDuZN717veMA.ttf","italic":"http://fonts.gstatic.com/s/archivo/v3/xM6Bws4B8M6CBFj_NjFDmQ.ttf","500italic":"http://fonts.gstatic.com/s/archivo/v3/MKuleTj-xvH_kzDLSfxAny3USBnSvpkopQaUR-2r7iU.ttf","600italic":"http://fonts.gstatic.com/s/archivo/v3/yabYJWzTLFXwCTAuo02FTC3USBnSvpkopQaUR-2r7iU.ttf","700italic":"http://fonts.gstatic.com/s/archivo/v3/KPG24G28nybJri09faZ5fy3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Archivo Black","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/archivoblack/v7/WoAoVT7K3k7hHfxKbvB6B51XQG8isOYYJhPIYAyrESQ.ttf"}},{"kind":"webfonts#webfont","family":"Archivo Narrow","category":"sans-serif","variants":["regular","italic","500","500italic","600","600italic","700","700italic"],"subsets":["latin-ext","latin"],"version":"v8","lastModified":"2017-10-10","files":{"500":"http://fonts.gstatic.com/s/archivonarrow/v8/M__Wu4PAmHf4YZvQM8tWsFZXnRfcj2QuLtpR7YorIko.ttf","600":"http://fonts.gstatic.com/s/archivonarrow/v8/M__Wu4PAmHf4YZvQM8tWsAYHMmBTXW-z0TFb_R_tMpQ.ttf","700":"http://fonts.gstatic.com/s/archivonarrow/v8/M__Wu4PAmHf4YZvQM8tWsMLtdzs3iyjn_YuT226ZsLU.ttf","regular":"http://fonts.gstatic.com/s/archivonarrow/v8/DsLzC9scoPnrGiwYYMQXppTvAuddT2xDMbdz0mdLyZY.ttf","italic":"http://fonts.gstatic.com/s/archivonarrow/v8/vqsrtPCpTU3tJlKfuXP5zUpmlyBQEFfdE6dERLXdQGQ.ttf","500italic":"http://fonts.gstatic.com/s/archivonarrow/v8/wG6O733y5zHl4EKCOh8rSQPEI7VifuA7dF_atQng58I.ttf","600italic":"http://fonts.gstatic.com/s/archivonarrow/v8/wG6O733y5zHl4EKCOh8rSQFfhWXBmyfiPDGj4ZvwGNU.ttf","700italic":"http://fonts.gstatic.com/s/archivonarrow/v8/wG6O733y5zHl4EKCOh8rSTg5KB8MNJ4uPAETq9naQO8.ttf"}},{"kind":"webfonts#webfont","family":"Aref Ruqaa","category":"serif","variants":["regular","700"],"subsets":["arabic","latin"],"version":"v4","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/arefruqaa/v4/RT-Q5DVI9arM6ZKux-UmTAJKKGfqHaYFsRG-T3ceEVo.ttf","regular":"http://fonts.gstatic.com/s/arefruqaa/v4/kbqI055uLQz2hkccTTrYPfesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Arima Madurai","category":"display","variants":["100","200","300","regular","500","700","800","900"],"subsets":["latin-ext","vietnamese","tamil","latin"],"version":"v3","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/arimamadurai/v3/Q0tjl46beRRcUe3RlWWNrdyXLlNBCUjoM1yKFfVCFUI.ttf","200":"http://fonts.gstatic.com/s/arimamadurai/v3/EsCGNPwBfkMk17-w_DTJ4rArwWuxcSSKq67BdR6k5Rg.ttf","300":"http://fonts.gstatic.com/s/arimamadurai/v3/EsCGNPwBfkMk17-w_DTJ4joJ52uD-1fmXmi8u0n_zsc.ttf","500":"http://fonts.gstatic.com/s/arimamadurai/v3/EsCGNPwBfkMk17-w_DTJ4v_2zpxNHQ3utWt_82o9dAo.ttf","700":"http://fonts.gstatic.com/s/arimamadurai/v3/EsCGNPwBfkMk17-w_DTJ4qiiXuG_rGcOxkuidirlnJE.ttf","800":"http://fonts.gstatic.com/s/arimamadurai/v3/EsCGNPwBfkMk17-w_DTJ4khKLu0CevfTHM1eXjGnvQo.ttf","900":"http://fonts.gstatic.com/s/arimamadurai/v3/EsCGNPwBfkMk17-w_DTJ4kZ0oshA7r_PlGegwiHddT8.ttf","regular":"http://fonts.gstatic.com/s/arimamadurai/v3/8fNfThKRw_pr7MwgNdcHiW_MnNA9OgK8I1F23mNWOpE.ttf"}},{"kind":"webfonts#webfont","family":"Arimo","category":"sans-serif","variants":["regular","italic","700","700italic"],"subsets":["hebrew","cyrillic","latin-ext","cyrillic-ext","greek","vietnamese","greek-ext","latin"],"version":"v11","lastModified":"2017-10-11","files":{"700":"http://fonts.gstatic.com/s/arimo/v11/ZItXugREyvV9LnbY_gxAmw.ttf","regular":"http://fonts.gstatic.com/s/arimo/v11/Gpeo80g-5ji2CcyXWnzh7g.ttf","italic":"http://fonts.gstatic.com/s/arimo/v11/_OdGbnX2-qQ96C4OjhyuPw.ttf","700italic":"http://fonts.gstatic.com/s/arimo/v11/__nOLWqmeXdhfr0g7GaFePesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Arizonia","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/arizonia/v8/yzJqkHZqryZBTM7RKYV9Wg.ttf"}},{"kind":"webfonts#webfont","family":"Armata","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/armata/v8/1H8FwGgIRrbYtxSfXhOHlQ.ttf"}},{"kind":"webfonts#webfont","family":"Arsenal","category":"sans-serif","variants":["regular","italic","700","700italic"],"subsets":["cyrillic","latin-ext","cyrillic-ext","vietnamese","latin"],"version":"v2","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/arsenal/v2/6R-JWA0Y5N2Lvul2TLOH3_esZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/arsenal/v2/PkcjwJ0AdgwImdsRdyzQQQ.ttf","italic":"http://fonts.gstatic.com/s/arsenal/v2/FvYQ_YMyIFZw-8dXMYPhHg.ttf","700italic":"http://fonts.gstatic.com/s/arsenal/v2/AnUIg26c0nuMZMpNWtsDFy3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Artifika","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/artifika/v8/Ekfp4H4QG7D-WsABDOyj8g.ttf"}},{"kind":"webfonts#webfont","family":"Arvo","category":"serif","variants":["regular","italic","700","700italic"],"subsets":["latin"],"version":"v10","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/arvo/v10/OB3FDST7U38u3OjPK_vvRQ.ttf","regular":"http://fonts.gstatic.com/s/arvo/v10/vvWPwz-PlZEwjOOIKqoZzA.ttf","italic":"http://fonts.gstatic.com/s/arvo/v10/id5a4BCjbenl5Gkqonw_Rw.ttf","700italic":"http://fonts.gstatic.com/s/arvo/v10/Hvl2MuWoXLaCy2v6MD4Yvw.ttf"}},{"kind":"webfonts#webfont","family":"Arya","category":"sans-serif","variants":["regular","700"],"subsets":["devanagari","latin-ext","latin"],"version":"v3","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/arya/v3/N13tgOvG7VTXawiI-fJiQA.ttf","regular":"http://fonts.gstatic.com/s/arya/v3/xEVqtU3v8QLospHKpDaYEw.ttf"}},{"kind":"webfonts#webfont","family":"Asap","category":"sans-serif","variants":["regular","italic","500","500italic","600","600italic","700","700italic"],"subsets":["latin-ext","vietnamese","latin"],"version":"v7","lastModified":"2017-10-10","files":{"500":"http://fonts.gstatic.com/s/asap/v7/bSf7UzaPFkjzB9TuOPVhgw.ttf","600":"http://fonts.gstatic.com/s/asap/v7/aj9e6BCAPmcrrkHyAtWfSg.ttf","700":"http://fonts.gstatic.com/s/asap/v7/o5RUA7SsJ80M8oDFBnrDbg.ttf","regular":"http://fonts.gstatic.com/s/asap/v7/2lf-1MDR8tsTpEtvJmr2hA.ttf","italic":"http://fonts.gstatic.com/s/asap/v7/mwxNHf8QS8gNWCAMwkJNIg.ttf","500italic":"http://fonts.gstatic.com/s/asap/v7/RUbFVj3EkB2Yo9QDVzDKLw.ttf","600italic":"http://fonts.gstatic.com/s/asap/v7/lSgrQWENLu3EVBpHYwzirw.ttf","700italic":"http://fonts.gstatic.com/s/asap/v7/_rZz9y2oXc09jT5T6BexLQ.ttf"}},{"kind":"webfonts#webfont","family":"Asap Condensed","category":"sans-serif","variants":["regular","italic","500","500italic","600","600italic","700","700italic"],"subsets":["latin-ext","vietnamese","latin"],"version":"v2","lastModified":"2017-10-10","files":{"500":"http://fonts.gstatic.com/s/asapcondensed/v2/TyBiCbCbffkYs45BrMexjI_Y-6sQdpH-OU-ZdWEi-4E.ttf","600":"http://fonts.gstatic.com/s/asapcondensed/v2/TyBiCbCbffkYs45BrMexjKfWDuPM568rGzS6rTUUBAI.ttf","700":"http://fonts.gstatic.com/s/asapcondensed/v2/TyBiCbCbffkYs45BrMexjDuwRdwRx6RgmD2V-BAnY3I.ttf","regular":"http://fonts.gstatic.com/s/asapcondensed/v2/WnB1QP0n-KM9-GXLGChcYSavnWbQ852KImK774Atfew.ttf","italic":"http://fonts.gstatic.com/s/asapcondensed/v2/qnSL07X2cz9966iZSWZCBfYZB3dvQ7xQFxvHcvx7fMA.ttf","500italic":"http://fonts.gstatic.com/s/asapcondensed/v2/9jDg2d4w2asxgWRh6ddxUYiIPHHw_LT0InVaNEq3i9o.ttf","600italic":"http://fonts.gstatic.com/s/asapcondensed/v2/9jDg2d4w2asxgWRh6ddxUSWF8ZKt6Ad7F4DSH_awyvE.ttf","700italic":"http://fonts.gstatic.com/s/asapcondensed/v2/9jDg2d4w2asxgWRh6ddxUWd8_gdoFFngi4b8GzqPlPw.ttf"}},{"kind":"webfonts#webfont","family":"Asar","category":"serif","variants":["regular"],"subsets":["devanagari","latin-ext","latin"],"version":"v4","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/asar/v4/mSmn3H5CcMA84CZ586X7WQ.ttf"}},{"kind":"webfonts#webfont","family":"Asset","category":"display","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/asset/v8/hfPmqY-JzuR1lULlQf9iTg.ttf"}},{"kind":"webfonts#webfont","family":"Assistant","category":"sans-serif","variants":["200","300","regular","600","700","800"],"subsets":["hebrew","latin"],"version":"v2","lastModified":"2017-10-10","files":{"200":"http://fonts.gstatic.com/s/assistant/v2/xXstfiHQzjB9j5ZxYTBoZy3USBnSvpkopQaUR-2r7iU.ttf","300":"http://fonts.gstatic.com/s/assistant/v2/vPC3tCw3LOzCSeGCtVp5Wi3USBnSvpkopQaUR-2r7iU.ttf","600":"http://fonts.gstatic.com/s/assistant/v2/Y4UC5nQA69lWpfV0itoWLi3USBnSvpkopQaUR-2r7iU.ttf","700":"http://fonts.gstatic.com/s/assistant/v2/dZywGH4pMxP6OVyrppOJxy3USBnSvpkopQaUR-2r7iU.ttf","800":"http://fonts.gstatic.com/s/assistant/v2/-mTR0sX8a0RsadH4AMDT8C3USBnSvpkopQaUR-2r7iU.ttf","regular":"http://fonts.gstatic.com/s/assistant/v2/2iDwv6DBtyixlK5YHngp1w.ttf"}},{"kind":"webfonts#webfont","family":"Astloch","category":"display","variants":["regular","700"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/astloch/v8/aPkhM2tL-tz1jX6aX2rvo_esZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/astloch/v8/fmbitVmHYLQP7MGPuFgpag.ttf"}},{"kind":"webfonts#webfont","family":"Asul","category":"sans-serif","variants":["regular","700"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/asul/v7/uO8uNmxaq87-DdPmkEg5Gg.ttf","regular":"http://fonts.gstatic.com/s/asul/v7/9qpsNR_OOwyOYyo2N0IbBw.ttf"}},{"kind":"webfonts#webfont","family":"Athiti","category":"sans-serif","variants":["200","300","regular","500","600","700"],"subsets":["latin-ext","thai","vietnamese","latin"],"version":"v2","lastModified":"2017-10-10","files":{"200":"http://fonts.gstatic.com/s/athiti/v2/Ge5skdKwzxRPajVLdOJuIg.ttf","300":"http://fonts.gstatic.com/s/athiti/v2/OoT7lj4AaSp1JpGJLKn3CA.ttf","500":"http://fonts.gstatic.com/s/athiti/v2/W3pP-ANXfsMOVOG-cqqMFw.ttf","600":"http://fonts.gstatic.com/s/athiti/v2/kYx3dtUYNEuUlzWczYzsmQ.ttf","700":"http://fonts.gstatic.com/s/athiti/v2/tyXFOxQyZGXfqHhtqSikdw.ttf","regular":"http://fonts.gstatic.com/s/athiti/v2/e7eiIKP18Iz9Kg1xat6AYw.ttf"}},{"kind":"webfonts#webfont","family":"Atma","category":"display","variants":["300","regular","500","600","700"],"subsets":["bengali","latin-ext","latin"],"version":"v3","lastModified":"2017-10-09","files":{"300":"http://fonts.gstatic.com/s/atma/v3/noxn2r6cT3JgmEDt6Ip5pQ.ttf","500":"http://fonts.gstatic.com/s/atma/v3/Htksg3ZXeAEbSvUdTQX-uw.ttf","600":"http://fonts.gstatic.com/s/atma/v3/EGUwD65ZZn9IIHp5Y36b4A.ttf","700":"http://fonts.gstatic.com/s/atma/v3/-fkXl3wADUHjobbwO9d-Wg.ttf","regular":"http://fonts.gstatic.com/s/atma/v3/dkXPrLoE_uqcgUFj4JdfRQ.ttf"}},{"kind":"webfonts#webfont","family":"Atomic Age","category":"display","variants":["regular"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/atomicage/v9/WvBMe4FxANIKpo6Oi0mVJ_esZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Aubrey","category":"display","variants":["regular"],"subsets":["latin"],"version":"v10","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/aubrey/v10/zo9w8klO8bmOQIMajQ2aTA.ttf"}},{"kind":"webfonts#webfont","family":"Audiowide","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/audiowide/v6/yGcwRZB6VmoYhPUYT-mEow.ttf"}},{"kind":"webfonts#webfont","family":"Autour One","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/autourone/v7/2xmQBcg7FN72jaQRFZPIDvesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Average","category":"serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/average/v6/aHUibBqdDbVYl5FM48pxyQ.ttf"}},{"kind":"webfonts#webfont","family":"Average Sans","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/averagesans/v6/dnU3R-5A_43y5bIyLztPsS3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Averia Gruesa Libre","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/averiagruesalibre/v6/10vbZTOoN6T8D-nvDzwRFyXcKHuZXlCN8VkWHpkUzKM.ttf"}},{"kind":"webfonts#webfont","family":"Averia Libre","category":"display","variants":["300","300italic","regular","italic","700","700italic"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/averialibre/v6/r6hGL8sSLm4dTzOPXgx5XacQoVhARpoaILP7amxE_8g.ttf","700":"http://fonts.gstatic.com/s/averialibre/v6/r6hGL8sSLm4dTzOPXgx5XUD2ttfZwueP-QU272T9-k4.ttf","300italic":"http://fonts.gstatic.com/s/averialibre/v6/I6wAYuAvOgT7el2ePj2nkina0FLWfcB-J_SAYmcAXaI.ttf","regular":"http://fonts.gstatic.com/s/averialibre/v6/rYVgHZZQICWnhjguGsBspC3USBnSvpkopQaUR-2r7iU.ttf","italic":"http://fonts.gstatic.com/s/averialibre/v6/1etzuoNxVHR8F533EkD1WfMZXuCXbOrAvx5R0IT5Oyo.ttf","700italic":"http://fonts.gstatic.com/s/averialibre/v6/I6wAYuAvOgT7el2ePj2nkvAs9-1nE9qOqhChW0m4nDE.ttf"}},{"kind":"webfonts#webfont","family":"Averia Sans Libre","category":"display","variants":["300","300italic","regular","italic","700","700italic"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/averiasanslibre/v6/_9-jTfQjaBsWAF_yp5z-V4CP_KG_g80s1KXiBtJHoNc.ttf","700":"http://fonts.gstatic.com/s/averiasanslibre/v6/_9-jTfQjaBsWAF_yp5z-V8QwVOrz1y5GihpZmtKLhlI.ttf","300italic":"http://fonts.gstatic.com/s/averiasanslibre/v6/o7BEIK-fG3Ykc5Rzteh88YuyGu4JqttndUh4gRKxic0.ttf","regular":"http://fonts.gstatic.com/s/averiasanslibre/v6/yRJpjT39KxACO9F31mj_LqV8_KRn4epKAjTFK1s1fsg.ttf","italic":"http://fonts.gstatic.com/s/averiasanslibre/v6/COEzR_NPBSUOl3pFwPbPoCZU2HnUZT1xVKaIrHDioao.ttf","700italic":"http://fonts.gstatic.com/s/averiasanslibre/v6/o7BEIK-fG3Ykc5Rzteh88bXy1DXgmJcVtKjM5UWamMs.ttf"}},{"kind":"webfonts#webfont","family":"Averia Serif Libre","category":"display","variants":["300","300italic","regular","italic","700","700italic"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/averiaseriflibre/v7/yvITAdr5D1nlsdFswJAb8SmC4gFJ2PHmfdVKEd_5S9M.ttf","700":"http://fonts.gstatic.com/s/averiaseriflibre/v7/yvITAdr5D1nlsdFswJAb8Q50KV5TaOVolur4zV2iZsg.ttf","300italic":"http://fonts.gstatic.com/s/averiaseriflibre/v7/YOLFXyye4sZt6AZk1QybCG2okl0bU63CauowU4iApig.ttf","regular":"http://fonts.gstatic.com/s/averiaseriflibre/v7/fdtF30xa_Erw0zAzOoG4BZqY66i8AUyI16fGqw0iAew.ttf","italic":"http://fonts.gstatic.com/s/averiaseriflibre/v7/o9qhvK9iT5iDWfyhQUe-6Ru_b0bTq5iipbJ9hhgHJ6U.ttf","700italic":"http://fonts.gstatic.com/s/averiaseriflibre/v7/YOLFXyye4sZt6AZk1QybCNxohRXP4tNDqG3X4Hqn21k.ttf"}},{"kind":"webfonts#webfont","family":"Bad Script","category":"handwriting","variants":["regular"],"subsets":["cyrillic","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/badscript/v6/cRyUs0nJ2eMQFHwBsZNRXfesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Bahiana","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v2","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/bahiana/v2/uUnBWf2QkuMyfXPof7lcwQ.ttf"}},{"kind":"webfonts#webfont","family":"Baloo","category":"display","variants":["regular"],"subsets":["devanagari","latin-ext","vietnamese","latin"],"version":"v3","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/baloo/v3/uFkbq9GEAWUcT0XNeptJ1Q.ttf"}},{"kind":"webfonts#webfont","family":"Baloo Bhai","category":"display","variants":["regular"],"subsets":["latin-ext","vietnamese","gujarati","latin"],"version":"v3","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/baloobhai/v3/FQvpC-04bh2QINuWAdnNW_esZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Baloo Bhaijaan","category":"display","variants":["regular"],"subsets":["arabic","latin-ext","vietnamese","latin"],"version":"v2","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/baloobhaijaan/v2/WADJjVg5Kkv7JQ_7Ty9eDj083UVTX9pxrhfn5xHQ3fY.ttf"}},{"kind":"webfonts#webfont","family":"Baloo Bhaina","category":"display","variants":["regular"],"subsets":["oriya","latin-ext","vietnamese","latin"],"version":"v3","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/baloobhaina/v3/HxxbxOVf9WQem_hKo1MXSi3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Baloo Chettan","category":"display","variants":["regular"],"subsets":["latin-ext","malayalam","vietnamese","latin"],"version":"v3","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/baloochettan/v3/ODsFofLybGVOJ90e_EwdFbyYXtM25qb63HASTPtoTFA.ttf"}},{"kind":"webfonts#webfont","family":"Baloo Da","category":"display","variants":["regular"],"subsets":["bengali","latin-ext","vietnamese","latin"],"version":"v3","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/balooda/v3/RAJ0l2eJl_HDURCVxRE1iQ.ttf"}},{"kind":"webfonts#webfont","family":"Baloo Paaji","category":"display","variants":["regular"],"subsets":["latin-ext","vietnamese","gurmukhi","latin"],"version":"v3","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/baloopaaji/v3/KeqAjVRzso6QUEfpMLQ-7KCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Baloo Tamma","category":"display","variants":["regular"],"subsets":["kannada","latin-ext","vietnamese","latin"],"version":"v3","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/balootamma/v3/-FKAYy14SAfG8Gc6YAAaMaCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Baloo Tammudu","category":"display","variants":["regular"],"subsets":["latin-ext","vietnamese","telugu","latin"],"version":"v3","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/balootammudu/v3/_VlYJH4sGzgC_fTDQEKfT6ESp5dI1YWe8pDCvQ6RhbI.ttf"}},{"kind":"webfonts#webfont","family":"Baloo Thambi","category":"display","variants":["regular"],"subsets":["latin-ext","vietnamese","tamil","latin"],"version":"v3","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/baloothambi/v3/qXK3dZIeU-O-HruaN5cK0y3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Balthazar","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/balthazar/v6/WgbaSIs6dJAGXJ0qbz2xlw.ttf"}},{"kind":"webfonts#webfont","family":"Bangers","category":"display","variants":["regular"],"subsets":["latin-ext","vietnamese","latin"],"version":"v10","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/bangers/v10/WAffdge5w99Xif-DLeqmcA.ttf"}},{"kind":"webfonts#webfont","family":"Barrio","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v2","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/barrio/v2/kzvMfZB0agZKzXC5yyRwWA.ttf"}},{"kind":"webfonts#webfont","family":"Basic","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/basic/v7/hNII2mS5Dxw5C0u_m3mXgA.ttf"}},{"kind":"webfonts#webfont","family":"Battambang","category":"display","variants":["regular","700"],"subsets":["khmer"],"version":"v11","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/battambang/v11/dezbRtMzfzAA99DmrCYRMgJKKGfqHaYFsRG-T3ceEVo.ttf","regular":"http://fonts.gstatic.com/s/battambang/v11/MzrUfQLefYum5vVGM3EZVPesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Baumans","category":"display","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/baumans/v7/o0bFdPW1H5kd5saqqOcoVg.ttf"}},{"kind":"webfonts#webfont","family":"Bayon","category":"display","variants":["regular"],"subsets":["khmer"],"version":"v10","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/bayon/v10/yTubusjTnpNRZwA4_50iVw.ttf"}},{"kind":"webfonts#webfont","family":"Belgrano","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/belgrano/v8/iq8DUa2s7g6WRCeMiFrmtQ.ttf"}},{"kind":"webfonts#webfont","family":"Bellefair","category":"serif","variants":["regular"],"subsets":["hebrew","latin-ext","latin"],"version":"v3","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/bellefair/v3/V_AInB3Ikm6UgW6_YKlk2g.ttf"}},{"kind":"webfonts#webfont","family":"Belleza","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/belleza/v6/wchA3BWJlVqvIcSeNZyXew.ttf"}},{"kind":"webfonts#webfont","family":"BenchNine","category":"sans-serif","variants":["300","regular","700"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/benchnine/v6/ah9xtUy9wLQ3qnWa2p-piS3USBnSvpkopQaUR-2r7iU.ttf","700":"http://fonts.gstatic.com/s/benchnine/v6/qZpi6ZVZg3L2RL_xoBLxWS3USBnSvpkopQaUR-2r7iU.ttf","regular":"http://fonts.gstatic.com/s/benchnine/v6/h3OAlYqU3aOeNkuXgH2Q2w.ttf"}},{"kind":"webfonts#webfont","family":"Bentham","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/bentham/v8/5-Mo8Fe7yg5tzV0GlQIuzQ.ttf"}},{"kind":"webfonts#webfont","family":"Berkshire Swash","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/berkshireswash/v6/4RZJjVRPjYnC2939hKCAimKfbtsIjCZP_edQljX9gR0.ttf"}},{"kind":"webfonts#webfont","family":"Bevan","category":"display","variants":["regular"],"subsets":["latin-ext","vietnamese","latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/bevan/v9/Rtg3zDsCeQiaJ_Qno22OJA.ttf"}},{"kind":"webfonts#webfont","family":"Bigelow Rules","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/bigelowrules/v6/FEJCPLwo07FS-6SK6Al50X8f0n03UdmQgF_CLvNR2vg.ttf"}},{"kind":"webfonts#webfont","family":"Bigshot One","category":"display","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/bigshotone/v8/wSyZjBNTWDQHnvWE2jt6j6CWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Bilbo","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/bilbo/v7/-ty-lPs5H7OIucWbnpFrkA.ttf"}},{"kind":"webfonts#webfont","family":"Bilbo Swash Caps","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/bilboswashcaps/v9/UB_-crLvhx-PwGKW1oosDmYeFSdnSpRYv5h9gpdlD1g.ttf"}},{"kind":"webfonts#webfont","family":"BioRhyme","category":"serif","variants":["200","300","regular","700","800"],"subsets":["latin-ext","latin"],"version":"v2","lastModified":"2017-10-10","files":{"200":"http://fonts.gstatic.com/s/biorhyme/v2/bj-6g_1gJHCc9xQZtLWL36CWcynf_cDxXwCLxiixG1c.ttf","300":"http://fonts.gstatic.com/s/biorhyme/v2/jWqHmLFlu30n7xp12uZd8qCWcynf_cDxXwCLxiixG1c.ttf","700":"http://fonts.gstatic.com/s/biorhyme/v2/36KN76U1iKt5TFDm2lBz0KCWcynf_cDxXwCLxiixG1c.ttf","800":"http://fonts.gstatic.com/s/biorhyme/v2/k6bYbUnESjLYnworWvSTL6CWcynf_cDxXwCLxiixG1c.ttf","regular":"http://fonts.gstatic.com/s/biorhyme/v2/n6v5UkVPy_CjbP3fvsu1CA.ttf"}},{"kind":"webfonts#webfont","family":"BioRhyme Expanded","category":"serif","variants":["200","300","regular","700","800"],"subsets":["latin-ext","latin"],"version":"v3","lastModified":"2017-10-09","files":{"200":"http://fonts.gstatic.com/s/biorhymeexpanded/v3/FKL4Vyxmq2vsiDrSOzz2sC7oxZzNh3ej55UHm-HviBI.ttf","300":"http://fonts.gstatic.com/s/biorhymeexpanded/v3/FKL4Vyxmq2vsiDrSOzz2sFu4cYPPksG4MRjB5UiYPPw.ttf","700":"http://fonts.gstatic.com/s/biorhymeexpanded/v3/FKL4Vyxmq2vsiDrSOzz2sMVisRVfPEfQ0jijOMQbr0Q.ttf","800":"http://fonts.gstatic.com/s/biorhymeexpanded/v3/FKL4Vyxmq2vsiDrSOzz2sIv1v1eCT6RPbcYZYQ1T1CE.ttf","regular":"http://fonts.gstatic.com/s/biorhymeexpanded/v3/hgBNpgjTRZzGmZxqN5OuVjndr_hij4ilAk2n1d1AhsE.ttf"}},{"kind":"webfonts#webfont","family":"Biryani","category":"sans-serif","variants":["200","300","regular","600","700","800","900"],"subsets":["devanagari","latin-ext","latin"],"version":"v3","lastModified":"2017-10-10","files":{"200":"http://fonts.gstatic.com/s/biryani/v3/Xx38YzyTFF8n6mRS1Yd88vesZW2xOQ-xsNqO47m55DA.ttf","300":"http://fonts.gstatic.com/s/biryani/v3/u-bneRbizmFMd0VQp5Ze6vesZW2xOQ-xsNqO47m55DA.ttf","600":"http://fonts.gstatic.com/s/biryani/v3/1EdcPCVxBR2txgjrza6_YPesZW2xOQ-xsNqO47m55DA.ttf","700":"http://fonts.gstatic.com/s/biryani/v3/qN2MTZ0j1sKSCtfXLB2dR_esZW2xOQ-xsNqO47m55DA.ttf","800":"http://fonts.gstatic.com/s/biryani/v3/DJyziS7FEy441v22InYdevesZW2xOQ-xsNqO47m55DA.ttf","900":"http://fonts.gstatic.com/s/biryani/v3/trcLkrIut0lM_PPSyQfAMPesZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/biryani/v3/W7bfR8-IY76Xz0QoB8L2xw.ttf"}},{"kind":"webfonts#webfont","family":"Bitter","category":"serif","variants":["regular","italic","700"],"subsets":["latin-ext","latin"],"version":"v12","lastModified":"2017-10-11","files":{"700":"http://fonts.gstatic.com/s/bitter/v12/4dUtr_4BvHuoRU35suyOAg.ttf","regular":"http://fonts.gstatic.com/s/bitter/v12/w_BNdJvVZDRmqy5aSfB2kQ.ttf","italic":"http://fonts.gstatic.com/s/bitter/v12/TC0FZEVzXQIGgzmRfKPZbA.ttf"}},{"kind":"webfonts#webfont","family":"Black Ops One","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/blackopsone/v9/2XW-DmDsGbDLE372KrMW1Yjjx0o0jr6fNXxPgYh_a8Q.ttf"}},{"kind":"webfonts#webfont","family":"Bokor","category":"display","variants":["regular"],"subsets":["khmer"],"version":"v10","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/bokor/v10/uAKdo0A85WW23Gs6mcbw7A.ttf"}},{"kind":"webfonts#webfont","family":"Bonbon","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/bonbon/v9/IW3u1yzG1knyW5oz0s9_6Q.ttf"}},{"kind":"webfonts#webfont","family":"Boogaloo","category":"display","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/boogaloo/v8/4Wu1tvFMoB80fSu8qLgQfQ.ttf"}},{"kind":"webfonts#webfont","family":"Bowlby One","category":"display","variants":["regular"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/bowlbyone/v9/eKpHjHfjoxM2bX36YNucefesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Bowlby One SC","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/bowlbyonesc/v9/8ZkeXftTuzKBtmxOYXoRedDkZCMxWJecxjvKm2f8MJw.ttf"}},{"kind":"webfonts#webfont","family":"Brawler","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/brawler/v8/3gfSw6imxQnQxweVITqUrg.ttf"}},{"kind":"webfonts#webfont","family":"Bree Serif","category":"serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/breeserif/v7/5h9crBVIrvZqgf34FHcnEfesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Bubblegum Sans","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/bubblegumsans/v6/Y9iTUUNz6lbl6TrvV4iwsytnKWgpfO2iSkLzTz-AABg.ttf"}},{"kind":"webfonts#webfont","family":"Bubbler One","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/bubblerone/v6/e8S0qevkZAFaBybtt_SU4qCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Buda","category":"display","variants":["300"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/buda/v8/hLtAmNUmEMJH2yx7NGUjnA.ttf"}},{"kind":"webfonts#webfont","family":"Buenard","category":"serif","variants":["regular","700"],"subsets":["latin-ext","latin"],"version":"v9","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/buenard/v9/yUlGE115dGr7O9w9FlP3UvesZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/buenard/v9/NSpMPGKAUgrLrlstYVvIXQ.ttf"}},{"kind":"webfonts#webfont","family":"Bungee","category":"display","variants":["regular"],"subsets":["latin-ext","vietnamese","latin"],"version":"v3","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/bungee/v3/0jM4G9s968t1_tpwzM9UDg.ttf"}},{"kind":"webfonts#webfont","family":"Bungee Hairline","category":"display","variants":["regular"],"subsets":["latin-ext","vietnamese","latin"],"version":"v3","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/bungeehairline/v3/8Li3dr3whdkxuk7pmLaZaSom6rTIagUDR1YFcrrRZjQ.ttf"}},{"kind":"webfonts#webfont","family":"Bungee Inline","category":"display","variants":["regular"],"subsets":["latin-ext","vietnamese","latin"],"version":"v3","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/bungeeinline/v3/Tb-1914q4rFpjT-F66PLCYjjx0o0jr6fNXxPgYh_a8Q.ttf"}},{"kind":"webfonts#webfont","family":"Bungee Outline","category":"display","variants":["regular"],"subsets":["latin-ext","vietnamese","latin"],"version":"v3","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/bungeeoutline/v3/PcidvzXIcqS2Qwxm_iG6bLAREgn5xbW23GEXXnhMQ5Y.ttf"}},{"kind":"webfonts#webfont","family":"Bungee Shade","category":"display","variants":["regular"],"subsets":["latin-ext","vietnamese","latin"],"version":"v3","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/bungeeshade/v3/HSW7pxPYXBWkq7OSnuXoeC3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Butcherman","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v9","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/butcherman/v9/bxiJmD567sPBVpJsT0XR0vesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Butterfly Kids","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/butterflykids/v6/J4NTF5M25htqeTffYImtlUZaDk62iwTBnbnvwSjZciA.ttf"}},{"kind":"webfonts#webfont","family":"Cabin","category":"sans-serif","variants":["regular","italic","500","500italic","600","600italic","700","700italic"],"subsets":["latin-ext","vietnamese","latin"],"version":"v12","lastModified":"2017-10-10","files":{"500":"http://fonts.gstatic.com/s/cabin/v12/HgsCQ-k3_Z_uQ86aFolNBg.ttf","600":"http://fonts.gstatic.com/s/cabin/v12/eUDAvKhBtmTCkeVBsFk34A.ttf","700":"http://fonts.gstatic.com/s/cabin/v12/4EKhProuY1hq_WCAomq9Dg.ttf","regular":"http://fonts.gstatic.com/s/cabin/v12/XeuAFYo2xAPHxZGBbQtHhA.ttf","italic":"http://fonts.gstatic.com/s/cabin/v12/0tJ9k3DI5xC4GBgs1E_Jxw.ttf","500italic":"http://fonts.gstatic.com/s/cabin/v12/50sjhrGE0njyO-7mGDhGP_esZW2xOQ-xsNqO47m55DA.ttf","600italic":"http://fonts.gstatic.com/s/cabin/v12/sFQpQDBd3G2om0Nl5dD2CvesZW2xOQ-xsNqO47m55DA.ttf","700italic":"http://fonts.gstatic.com/s/cabin/v12/K83QKi8MOKLEqj6bgZ7LrfesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Cabin Condensed","category":"sans-serif","variants":["regular","500","600","700"],"subsets":["latin-ext","vietnamese","latin"],"version":"v11","lastModified":"2017-10-10","files":{"500":"http://fonts.gstatic.com/s/cabincondensed/v11/Ez4zJbsGr2BgXcNUWBVgEARL_-ABKXdjsJSPT0lc2Bk.ttf","600":"http://fonts.gstatic.com/s/cabincondensed/v11/Ez4zJbsGr2BgXcNUWBVgELS5sSASxc8z4EQTQj7DCAI.ttf","700":"http://fonts.gstatic.com/s/cabincondensed/v11/Ez4zJbsGr2BgXcNUWBVgEMAWgzcA047xWLixhLCofl8.ttf","regular":"http://fonts.gstatic.com/s/cabincondensed/v11/B0txb0blf2N29WdYPJjMSiQPsWWoiv__AzYJ9Zzn9II.ttf"}},{"kind":"webfonts#webfont","family":"Cabin Sketch","category":"display","variants":["regular","700"],"subsets":["latin"],"version":"v11","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/cabinsketch/v11/ki3SSN5HMOO0-IOLOj069ED2ttfZwueP-QU272T9-k4.ttf","regular":"http://fonts.gstatic.com/s/cabinsketch/v11/d9fijO34zQajqQvl3YHRCS3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Caesar Dressing","category":"display","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/caesardressing/v6/2T_WzBgE2Xz3FsyJMq34T9gR43u4FvCuJwIfF5Zxl6Y.ttf"}},{"kind":"webfonts#webfont","family":"Cagliostro","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/cagliostro/v6/i85oXbtdSatNEzss99bpj_esZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Cairo","category":"sans-serif","variants":["200","300","regular","600","700","900"],"subsets":["arabic","latin-ext","latin"],"version":"v2","lastModified":"2017-10-10","files":{"200":"http://fonts.gstatic.com/s/cairo/v2/9BU6Hrio9syG9zwo_CNPXg.ttf","300":"http://fonts.gstatic.com/s/cairo/v2/mpy3SIEJVOIfFnVLujcRDg.ttf","600":"http://fonts.gstatic.com/s/cairo/v2/Ct_3a0tcTEyNNSnuZKDd7g.ttf","700":"http://fonts.gstatic.com/s/cairo/v2/ONxTSBYfmg-V5CkIwS_5gQ.ttf","900":"http://fonts.gstatic.com/s/cairo/v2/Fm-hIVCp5OI5mO4Ec71jcw.ttf","regular":"http://fonts.gstatic.com/s/cairo/v2/-tPnHq7mmAjcjJRSjsuZGA.ttf"}},{"kind":"webfonts#webfont","family":"Calligraffitti","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/calligraffitti/v9/vLVN2Y-z65rVu1R7lWdvyDXz_orj3gX0_NzfmYulrko.ttf"}},{"kind":"webfonts#webfont","family":"Cambay","category":"sans-serif","variants":["regular","italic","700","700italic"],"subsets":["devanagari","latin-ext","latin"],"version":"v3","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/cambay/v3/jw9niBxa04eEhnSwTWCEgw.ttf","regular":"http://fonts.gstatic.com/s/cambay/v3/etU9Bab4VuhzS-OKsb1VXg.ttf","italic":"http://fonts.gstatic.com/s/cambay/v3/ZEz9yNqpEOgejaw1rBhugQ.ttf","700italic":"http://fonts.gstatic.com/s/cambay/v3/j-5v_uUr0NXTumWN0siOiaCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Cambo","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/cambo/v6/PnwpRuTdkYCf8qk4ajmNRA.ttf"}},{"kind":"webfonts#webfont","family":"Candal","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/candal/v7/x44dDW28zK7GR1gGDBmj9g.ttf"}},{"kind":"webfonts#webfont","family":"Cantarell","category":"sans-serif","variants":["regular","italic","700","700italic"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/cantarell/v7/Yir4ZDsCn4g1kWopdg-ehC3USBnSvpkopQaUR-2r7iU.ttf","regular":"http://fonts.gstatic.com/s/cantarell/v7/p5ydP_uWQ5lsFzcP_XVMEw.ttf","italic":"http://fonts.gstatic.com/s/cantarell/v7/DTCLtOSqP-7dgM-V_xKUjqCWcynf_cDxXwCLxiixG1c.ttf","700italic":"http://fonts.gstatic.com/s/cantarell/v7/weehrwMeZBXb0QyrWnRwFXe1Pd76Vl7zRpE7NLJQ7XU.ttf"}},{"kind":"webfonts#webfont","family":"Cantata One","category":"serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/cantataone/v7/-a5FDvnBqaBMDaGgZYnEfqCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Cantora One","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/cantoraone/v7/oI-DS62RbHI8ZREjp73ehqCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Capriola","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/capriola/v5/JxXPlkdzWwF9Cwelbvi9jA.ttf"}},{"kind":"webfonts#webfont","family":"Cardo","category":"serif","variants":["regular","italic","700"],"subsets":["latin-ext","greek","greek-ext","latin"],"version":"v9","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/cardo/v9/lQN30weILimrKvp8rZhF1w.ttf","regular":"http://fonts.gstatic.com/s/cardo/v9/jbkF2_R0FKUEZTq5dwSknQ.ttf","italic":"http://fonts.gstatic.com/s/cardo/v9/pcv4Np9tUkq0YREYUcEEJQ.ttf"}},{"kind":"webfonts#webfont","family":"Carme","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/carme/v8/08E0NP1eRBEyFRUadmMfgA.ttf"}},{"kind":"webfonts#webfont","family":"Carrois Gothic","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/carroisgothic/v7/GCgb7bssGpwp7V5ynxmWy2x3d0cwUleGuRTmCYfCUaM.ttf"}},{"kind":"webfonts#webfont","family":"Carrois Gothic SC","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/carroisgothicsc/v7/bVp4nhwFIXU-r3LqUR8DSJTdPW1ioadGi2uRiKgJVCY.ttf"}},{"kind":"webfonts#webfont","family":"Carter One","category":"display","variants":["regular"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/carterone/v9/5X_LFvdbcB7OBG7hBgZ7fPesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Catamaran","category":"sans-serif","variants":["100","200","300","regular","500","600","700","800","900"],"subsets":["latin-ext","tamil","latin"],"version":"v4","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/catamaran/v4/ilWHBiy0krUPdlmYxDuqC6CWcynf_cDxXwCLxiixG1c.ttf","200":"http://fonts.gstatic.com/s/catamaran/v4/hFc-HKSsGk6M-psujei1MC3USBnSvpkopQaUR-2r7iU.ttf","300":"http://fonts.gstatic.com/s/catamaran/v4/Aaag4ccR7Oh_4eai-jbrYC3USBnSvpkopQaUR-2r7iU.ttf","500":"http://fonts.gstatic.com/s/catamaran/v4/83WSX3F86qsvj1Z4EI0tQi3USBnSvpkopQaUR-2r7iU.ttf","600":"http://fonts.gstatic.com/s/catamaran/v4/a9PlHHnuBWiGGk0TwuFKTi3USBnSvpkopQaUR-2r7iU.ttf","700":"http://fonts.gstatic.com/s/catamaran/v4/PpgVtUHUdnBZYNpnzGbScy3USBnSvpkopQaUR-2r7iU.ttf","800":"http://fonts.gstatic.com/s/catamaran/v4/6VjB_uSfn3DZ93IQv58CmC3USBnSvpkopQaUR-2r7iU.ttf","900":"http://fonts.gstatic.com/s/catamaran/v4/5ys9TqpQc9Q6gHqbSox6py3USBnSvpkopQaUR-2r7iU.ttf","regular":"http://fonts.gstatic.com/s/catamaran/v4/MdNkM-DU8f6R-25Nxpr_XA.ttf"}},{"kind":"webfonts#webfont","family":"Caudex","category":"serif","variants":["regular","italic","700","700italic"],"subsets":["latin-ext","greek","greek-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/caudex/v7/PetCI4GyQ5Q3LiOzUu_mMg.ttf","regular":"http://fonts.gstatic.com/s/caudex/v7/PWEexiHLDmQbn2b1OPZWfg.ttf","italic":"http://fonts.gstatic.com/s/caudex/v7/XjMZF6XCisvV3qapD4oJdw.ttf","700italic":"http://fonts.gstatic.com/s/caudex/v7/yT8YeHLjaJvQXlUEYOA8gqCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Caveat","category":"handwriting","variants":["regular","700"],"subsets":["latin-ext","latin"],"version":"v3","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/caveat/v3/LkaFtQENGJry2eUMwGRTeA.ttf","regular":"http://fonts.gstatic.com/s/caveat/v3/8I23b6N-6rRVbh-C_Vx3yA.ttf"}},{"kind":"webfonts#webfont","family":"Caveat Brush","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v3","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/caveatbrush/v3/_d7bgsk3hfC4DXnUEeYKsy3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Cedarville Cursive","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/cedarvillecursive/v8/cuCe6HrkcqrWTWTUE7dw-41zwq9-z_Lf44CzRAA0d0Y.ttf"}},{"kind":"webfonts#webfont","family":"Ceviche One","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/cevicheone/v8/WOaXIMBD4VYMy39MsobJhKCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Changa","category":"sans-serif","variants":["200","300","regular","500","600","700","800"],"subsets":["arabic","latin-ext","latin"],"version":"v3","lastModified":"2017-10-10","files":{"200":"http://fonts.gstatic.com/s/changa/v3/QNWVD9FzsnhVmHzE7HryDQ.ttf","300":"http://fonts.gstatic.com/s/changa/v3/OKZ0H1bMg3M9EZMVzgQ9fg.ttf","500":"http://fonts.gstatic.com/s/changa/v3/KrXcHYf9ILB8aFWCj0Vfxg.ttf","600":"http://fonts.gstatic.com/s/changa/v3/6uCpqxwcsYkfV0M8Ls6WPA.ttf","700":"http://fonts.gstatic.com/s/changa/v3/vAXzeaPkdpxlejFN7h0ibw.ttf","800":"http://fonts.gstatic.com/s/changa/v3/H3IsiH2Fx0Pc4_OU4HSpng.ttf","regular":"http://fonts.gstatic.com/s/changa/v3/7_e8qktkj6uKM0DamZJY9Q.ttf"}},{"kind":"webfonts#webfont","family":"Changa One","category":"display","variants":["regular","italic"],"subsets":["latin"],"version":"v10","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/changaone/v10/dr4qjce4W3kxFrZRkVD87fesZW2xOQ-xsNqO47m55DA.ttf","italic":"http://fonts.gstatic.com/s/changaone/v10/wJVQlUs1lAZel-WdTo2U9y3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Chango","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/chango/v6/3W3AeMMtRTH08t5qLOjBmg.ttf"}},{"kind":"webfonts#webfont","family":"Chathura","category":"sans-serif","variants":["100","300","regular","700","800"],"subsets":["telugu","latin"],"version":"v3","lastModified":"2017-10-09","files":{"100":"http://fonts.gstatic.com/s/chathura/v3/7tUse0wFXIOSPewsdeNXPvesZW2xOQ-xsNqO47m55DA.ttf","300":"http://fonts.gstatic.com/s/chathura/v3/Gmhr6ULHnPDt9spOZrHOfKCWcynf_cDxXwCLxiixG1c.ttf","700":"http://fonts.gstatic.com/s/chathura/v3/BO9LvNAseMQ3n1tKWH-uTKCWcynf_cDxXwCLxiixG1c.ttf","800":"http://fonts.gstatic.com/s/chathura/v3/prh_X_5NSsBQefIdGi5B6KCWcynf_cDxXwCLxiixG1c.ttf","regular":"http://fonts.gstatic.com/s/chathura/v3/7hRNO-_zjRopkcP2n1rr8g.ttf"}},{"kind":"webfonts#webfont","family":"Chau Philomene One","category":"sans-serif","variants":["regular","italic"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/chauphilomeneone/v7/KKc5egCL-a2fFVoOA2x6tBFi5dxgSTdxqnMJgWkBJcg.ttf","italic":"http://fonts.gstatic.com/s/chauphilomeneone/v7/eJj1PY_iN4KiIuyOvtMHJP6uyLkxyiC4WcYA74sfquE.ttf"}},{"kind":"webfonts#webfont","family":"Chela One","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/chelaone/v6/h5O0dEnpnIq6jQnWxZybrA.ttf"}},{"kind":"webfonts#webfont","family":"Chelsea Market","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/chelseamarket/v5/qSdzwh2A4BbNemy78sJLfAAI1i8fIftCBXsBF2v9UMI.ttf"}},{"kind":"webfonts#webfont","family":"Chenla","category":"display","variants":["regular"],"subsets":["khmer"],"version":"v10","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/chenla/v10/aLNpdAUDq2MZbWz2U1a16g.ttf"}},{"kind":"webfonts#webfont","family":"Cherry Cream Soda","category":"display","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/cherrycreamsoda/v8/OrD-AUnFcZeeKa6F_c0_WxOiHiuAPYA9ry3O1RG2XIU.ttf"}},{"kind":"webfonts#webfont","family":"Cherry Swash","category":"display","variants":["regular","700"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/cherryswash/v5/-CfyMyQqfucZPQNB0nvYyED2ttfZwueP-QU272T9-k4.ttf","regular":"http://fonts.gstatic.com/s/cherryswash/v5/HqOk7C7J1TZ5i3L-ejF0vi3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Chewy","category":"display","variants":["regular"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/chewy/v9/hcDN5cvQdIu6Bx4mg_TSyw.ttf"}},{"kind":"webfonts#webfont","family":"Chicle","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/chicle/v6/xg4q57Ut9ZmyFwLp51JLgg.ttf"}},{"kind":"webfonts#webfont","family":"Chivo","category":"sans-serif","variants":["300","300italic","regular","italic","700","700italic","900","900italic"],"subsets":["latin-ext","latin"],"version":"v9","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/chivo/v9/NB24D2RW9gYUd3ctGd-AhA.ttf","700":"http://fonts.gstatic.com/s/chivo/v9/zC8JLnJuu9Lw0_rA3_VYhg.ttf","900":"http://fonts.gstatic.com/s/chivo/v9/JAdkiWd46QCW4vOsj3dzTA.ttf","300italic":"http://fonts.gstatic.com/s/chivo/v9/A0NbKkUXhyt-4OxUzvrNT_esZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/chivo/v9/L88PEuzS9eRfHRZhAPhZyw.ttf","italic":"http://fonts.gstatic.com/s/chivo/v9/Oe3-Q-a2kBzPnhHck_baMg.ttf","700italic":"http://fonts.gstatic.com/s/chivo/v9/2M3ifXA84fdnDIxoCi18JvesZW2xOQ-xsNqO47m55DA.ttf","900italic":"http://fonts.gstatic.com/s/chivo/v9/LoszYnE86q2wJEOjCigBQ_esZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Chonburi","category":"display","variants":["regular"],"subsets":["latin-ext","thai","vietnamese","latin"],"version":"v2","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/chonburi/v2/jd9PfbW0x_8Myt_XeUxvSQ.ttf"}},{"kind":"webfonts#webfont","family":"Cinzel","category":"serif","variants":["regular","700","900"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/cinzel/v7/nYcFQ6_3pf_6YDrOFjBR8Q.ttf","900":"http://fonts.gstatic.com/s/cinzel/v7/FTBj72ozM2cEOSxiVsRb3A.ttf","regular":"http://fonts.gstatic.com/s/cinzel/v7/GF7dy_Nc-a6EaHYSyGd-EA.ttf"}},{"kind":"webfonts#webfont","family":"Cinzel Decorative","category":"display","variants":["regular","700","900"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/cinzeldecorative/v6/pXhIVnhFtL_B9Vb1wq2F95-YYVDmZkJErg0zgx9XuZI.ttf","900":"http://fonts.gstatic.com/s/cinzeldecorative/v6/pXhIVnhFtL_B9Vb1wq2F97Khqbv0zQZa0g-9HOXAalU.ttf","regular":"http://fonts.gstatic.com/s/cinzeldecorative/v6/fmgK7oaJJIXAkhd9798yQgT5USbJx2F82lQbogPy2bY.ttf"}},{"kind":"webfonts#webfont","family":"Clicker Script","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/clickerscript/v5/Zupmk8XwADjufGxWB9KThBnpV0hQCek3EmWnCPrvGRM.ttf"}},{"kind":"webfonts#webfont","family":"Coda","category":"display","variants":["regular","800"],"subsets":["latin-ext","latin"],"version":"v13","lastModified":"2017-10-10","files":{"800":"http://fonts.gstatic.com/s/coda/v13/6ZIw0sbALY0KTMWllZB3hQ.ttf","regular":"http://fonts.gstatic.com/s/coda/v13/yHDvulhg-P-p2KRgRrnUYw.ttf"}},{"kind":"webfonts#webfont","family":"Coda Caption","category":"sans-serif","variants":["800"],"subsets":["latin-ext","latin"],"version":"v11","lastModified":"2017-10-10","files":{"800":"http://fonts.gstatic.com/s/codacaption/v11/YDl6urZh-DUFhiMBTgAnz_qsay_1ZmRGmC8pVRdIfAg.ttf"}},{"kind":"webfonts#webfont","family":"Codystar","category":"display","variants":["300","regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/codystar/v5/EVaUzfJkcb8Zqx9kzQLXqqCWcynf_cDxXwCLxiixG1c.ttf","regular":"http://fonts.gstatic.com/s/codystar/v5/EN-CPFKYowSI7SuR7-0cZA.ttf"}},{"kind":"webfonts#webfont","family":"Coiny","category":"display","variants":["regular"],"subsets":["latin-ext","vietnamese","tamil","latin"],"version":"v3","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/coiny/v3/B-pC9lRxssd2RDK37Rdekw.ttf"}},{"kind":"webfonts#webfont","family":"Combo","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/combo/v6/Nab98KjR3JZSSPGtzLyXNw.ttf"}},{"kind":"webfonts#webfont","family":"Comfortaa","category":"display","variants":["300","regular","700"],"subsets":["cyrillic","latin-ext","cyrillic-ext","greek","vietnamese","latin"],"version":"v11","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/comfortaa/v11/r_tUZNl0G8xCoOmp_JkSCi3USBnSvpkopQaUR-2r7iU.ttf","700":"http://fonts.gstatic.com/s/comfortaa/v11/fND5XPYKrF2tQDwwfWZJIy3USBnSvpkopQaUR-2r7iU.ttf","regular":"http://fonts.gstatic.com/s/comfortaa/v11/lZx6C1VViPgSOhCBUP7hXA.ttf"}},{"kind":"webfonts#webfont","family":"Coming Soon","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/comingsoon/v8/Yz2z3IAe2HSQAOWsSG8COKCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Concert One","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/concertone/v8/N5IWCIGhUNdPZn_efTxKN6CWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Condiment","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/condiment/v5/CstmdiPpgFSV0FUNL5LrJA.ttf"}},{"kind":"webfonts#webfont","family":"Content","category":"display","variants":["regular","700"],"subsets":["khmer"],"version":"v9","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/content/v9/7PivP8Zvs2qn6F6aNbSQe_esZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/content/v9/l8qaLjygvOkDEU2G6-cjfQ.ttf"}},{"kind":"webfonts#webfont","family":"Contrail One","category":"display","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/contrailone/v7/b41KxjgiyqX-hkggANDU6C3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Convergence","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/convergence/v6/eykrGz1NN_YpQmkAZjW-qKCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Cookie","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/cookie/v8/HxeUC62y_YdDbiFlze357A.ttf"}},{"kind":"webfonts#webfont","family":"Copse","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/copse/v7/wikLrtPGjZDvZ5w2i5HLWg.ttf"}},{"kind":"webfonts#webfont","family":"Corben","category":"display","variants":["regular","700"],"subsets":["latin-ext","latin"],"version":"v11","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/corben/v11/lirJaFSQWdGQuV--fksg5g.ttf","regular":"http://fonts.gstatic.com/s/corben/v11/tTysMZkt-j8Y5yhkgsoajQ.ttf"}},{"kind":"webfonts#webfont","family":"Cormorant","category":"serif","variants":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"subsets":["cyrillic","latin-ext","cyrillic-ext","vietnamese","latin"],"version":"v6","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/cormorant/v6/diggKPcUerIA8GQWRVxsVS3USBnSvpkopQaUR-2r7iU.ttf","500":"http://fonts.gstatic.com/s/cormorant/v6/lwoiMb1lzDf49h802vpRUy3USBnSvpkopQaUR-2r7iU.ttf","600":"http://fonts.gstatic.com/s/cormorant/v6/LKEtp8XimHLN0gSYqnV9qy3USBnSvpkopQaUR-2r7iU.ttf","700":"http://fonts.gstatic.com/s/cormorant/v6/vOi7JV5F3JmPzXDgUqUwgS3USBnSvpkopQaUR-2r7iU.ttf","300italic":"http://fonts.gstatic.com/s/cormorant/v6/UydD9tmk-DfLnEFRr_bBZy9-WlPSxbfiI49GsXo3q0g.ttf","regular":"http://fonts.gstatic.com/s/cormorant/v6/9vWr5LgrNEgvhv1P3z9uuQ.ttf","italic":"http://fonts.gstatic.com/s/cormorant/v6/zzcH3j00ejnIc8jicdcz6KCWcynf_cDxXwCLxiixG1c.ttf","500italic":"http://fonts.gstatic.com/s/cormorant/v6/UydD9tmk-DfLnEFRr_bBZ8CNfqCYlB_eIx7H1TVXe60.ttf","600italic":"http://fonts.gstatic.com/s/cormorant/v6/UydD9tmk-DfLnEFRr_bBZ5Z7xm-Bj30Bj2KNdXDzSZg.ttf","700italic":"http://fonts.gstatic.com/s/cormorant/v6/UydD9tmk-DfLnEFRr_bBZ3e1Pd76Vl7zRpE7NLJQ7XU.ttf"}},{"kind":"webfonts#webfont","family":"Cormorant Garamond","category":"serif","variants":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"subsets":["cyrillic","latin-ext","cyrillic-ext","vietnamese","latin"],"version":"v5","lastModified":"2017-10-09","files":{"300":"http://fonts.gstatic.com/s/cormorantgaramond/v5/iEjm9hVxcattz37Y8gZwVXDeRRUpi2fYbqcTC9PsYaU.ttf","500":"http://fonts.gstatic.com/s/cormorantgaramond/v5/iEjm9hVxcattz37Y8gZwVSkwnhSVYGQY4MSUB3uw374.ttf","600":"http://fonts.gstatic.com/s/cormorantgaramond/v5/iEjm9hVxcattz37Y8gZwVVc2xdGA7R8efE0K6NwSoyI.ttf","700":"http://fonts.gstatic.com/s/cormorantgaramond/v5/iEjm9hVxcattz37Y8gZwVdNg01MkafbqNYmDx8wt95c.ttf","300italic":"http://fonts.gstatic.com/s/cormorantgaramond/v5/zuqx3k1yUEl3Eavo-ZPEAjZXe39LdglsIzDOvKnCCso.ttf","regular":"http://fonts.gstatic.com/s/cormorantgaramond/v5/EI2hhCO6kSfLAy-Dpd8fd7_BES7rBA-D9Lo3vCx9yHc.ttf","italic":"http://fonts.gstatic.com/s/cormorantgaramond/v5/eGTlzchVxDKKvK6d7drzlkVlEttMzBRhK_wsRQ4MqEE.ttf","500italic":"http://fonts.gstatic.com/s/cormorantgaramond/v5/zuqx3k1yUEl3Eavo-ZPEAq8qrY1CcUgPLrA3ytfr3SY.ttf","600italic":"http://fonts.gstatic.com/s/cormorantgaramond/v5/zuqx3k1yUEl3Eavo-ZPEAqms9Rm_p2hhD4xhClOGPEw.ttf","700italic":"http://fonts.gstatic.com/s/cormorantgaramond/v5/zuqx3k1yUEl3Eavo-ZPEAvEntfLz8TC-DlAIEJQEwCA.ttf"}},{"kind":"webfonts#webfont","family":"Cormorant Infant","category":"serif","variants":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"subsets":["cyrillic","latin-ext","cyrillic-ext","vietnamese","latin"],"version":"v5","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/cormorantinfant/v5/MYRpw6pQIf0XStsiZXQWA_alucuYFvoGqpCMGloCN2Y.ttf","500":"http://fonts.gstatic.com/s/cormorantinfant/v5/MYRpw6pQIf0XStsiZXQWA4PJQ8Vh-2Qw35Pq7cVYzdo.ttf","600":"http://fonts.gstatic.com/s/cormorantinfant/v5/MYRpw6pQIf0XStsiZXQWA9G0tNuOpbNMRdNl4S5e-n0.ttf","700":"http://fonts.gstatic.com/s/cormorantinfant/v5/MYRpw6pQIf0XStsiZXQWAx-3ZynwDtU_450Ho62jf_I.ttf","300italic":"http://fonts.gstatic.com/s/cormorantinfant/v5/PK34LKusK6SSQFR2m5-LZgNCjGMFnYSoo4kW2wZNowE.ttf","regular":"http://fonts.gstatic.com/s/cormorantinfant/v5/q5F0I_a42y_qtMoOtqdjagGlf-pqPDOheSBqZOVpkRo.ttf","italic":"http://fonts.gstatic.com/s/cormorantinfant/v5/U6OamtMgLoVs0zd53Z1pNpbq6_N3pcDBvA-VsecMIAA.ttf","500italic":"http://fonts.gstatic.com/s/cormorantinfant/v5/PK34LKusK6SSQFR2m5-LZq9x-au7fLBTFpfuT52_G64.ttf","600italic":"http://fonts.gstatic.com/s/cormorantinfant/v5/PK34LKusK6SSQFR2m5-LZkZbdnTqrL_1WMEFjxg0OwY.ttf","700italic":"http://fonts.gstatic.com/s/cormorantinfant/v5/PK34LKusK6SSQFR2m5-LZmKEEmz9BBHY1o7RrRAiUXQ.ttf"}},{"kind":"webfonts#webfont","family":"Cormorant SC","category":"serif","variants":["300","regular","500","600","700"],"subsets":["cyrillic","latin-ext","cyrillic-ext","vietnamese","latin"],"version":"v5","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/cormorantsc/v5/CCo4fI9EYzhUJcvojQ9Em6cQoVhARpoaILP7amxE_8g.ttf","500":"http://fonts.gstatic.com/s/cormorantsc/v5/CCo4fI9EYzhUJcvojQ9Em5MQuUSAwdHsY8ov_6tk1oA.ttf","600":"http://fonts.gstatic.com/s/cormorantsc/v5/CCo4fI9EYzhUJcvojQ9Em2v8CylhIUtwUiYO7Z2wXbE.ttf","700":"http://fonts.gstatic.com/s/cormorantsc/v5/CCo4fI9EYzhUJcvojQ9Em0D2ttfZwueP-QU272T9-k4.ttf","regular":"http://fonts.gstatic.com/s/cormorantsc/v5/o2HxNCgvhmwJdltu-68tzC3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Cormorant Unicase","category":"serif","variants":["300","regular","500","600","700"],"subsets":["cyrillic","latin-ext","cyrillic-ext","vietnamese","latin"],"version":"v5","lastModified":"2017-10-09","files":{"300":"http://fonts.gstatic.com/s/cormorantunicase/v5/-0mwRHhjEGfrz-UDHJ_78TyAYAK5JX1-zBpfFXu9t3Y.ttf","500":"http://fonts.gstatic.com/s/cormorantunicase/v5/-0mwRHhjEGfrz-UDHJ_78WActzpz5sLElWWJpZBcHK4.ttf","600":"http://fonts.gstatic.com/s/cormorantunicase/v5/-0mwRHhjEGfrz-UDHJ_78U0bQT13XmwBbvkXy6Yb64Y.ttf","700":"http://fonts.gstatic.com/s/cormorantunicase/v5/-0mwRHhjEGfrz-UDHJ_78Z5CFeQBXku3ADXbkP2V7W8.ttf","regular":"http://fonts.gstatic.com/s/cormorantunicase/v5/THO7JMNV6qRoZlg7dU5RUz01TLsHlMvD1uPU3gXOh9s.ttf"}},{"kind":"webfonts#webfont","family":"Cormorant Upright","category":"serif","variants":["300","regular","500","600","700"],"subsets":["latin-ext","vietnamese","latin"],"version":"v4","lastModified":"2017-10-09","files":{"300":"http://fonts.gstatic.com/s/cormorantupright/v4/PwJT_lCdbLUyVq-tARIPhjCfCvaSiUMfec2BKBTMAaw.ttf","500":"http://fonts.gstatic.com/s/cormorantupright/v4/PwJT_lCdbLUyVq-tARIPhiWhx5Kr-bzfZXhgF-AnSvk.ttf","600":"http://fonts.gstatic.com/s/cormorantupright/v4/PwJT_lCdbLUyVq-tARIPhuDigFx2V_wQ4SOTZdg5a2s.ttf","700":"http://fonts.gstatic.com/s/cormorantupright/v4/PwJT_lCdbLUyVq-tARIPhuO6SP7lRr11seyd3AkK37Q.ttf","regular":"http://fonts.gstatic.com/s/cormorantupright/v4/0n68kajKjTOJn9EPQkf1a-ojtTJJf2MtgkoRSid3NcM.ttf"}},{"kind":"webfonts#webfont","family":"Courgette","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/courgette/v5/2YO0EYtyE9HUPLZprahpZA.ttf"}},{"kind":"webfonts#webfont","family":"Cousine","category":"monospace","variants":["regular","italic","700","700italic"],"subsets":["hebrew","cyrillic","latin-ext","cyrillic-ext","greek","vietnamese","greek-ext","latin"],"version":"v12","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/cousine/v12/FXEOnNUcCzhdtoBxiq-lovesZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/cousine/v12/GYX4bPXObJNJo63QJEUnLg.ttf","italic":"http://fonts.gstatic.com/s/cousine/v12/1WtIuajLoo8vjVwsrZ3eOg.ttf","700italic":"http://fonts.gstatic.com/s/cousine/v12/y_AZ5Sz-FwL1lux2xLSTZS3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Coustard","category":"serif","variants":["regular","900"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"900":"http://fonts.gstatic.com/s/coustard/v8/W02OCWO6OfMUHz6aVyegQ6CWcynf_cDxXwCLxiixG1c.ttf","regular":"http://fonts.gstatic.com/s/coustard/v8/iO2Rs5PmqAEAXoU3SkMVBg.ttf"}},{"kind":"webfonts#webfont","family":"Covered By Your Grace","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/coveredbyyourgrace/v7/6ozZp4BPlrbDRWPe3EBGA6CVUMdvnk-GcAiZQrX9Gek.ttf"}},{"kind":"webfonts#webfont","family":"Crafty Girls","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/craftygirls/v7/0Sv8UWFFdhQmesHL32H8oy3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Creepster","category":"display","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/creepster/v6/0vdr5kWJ6aJlOg5JvxnXzQ.ttf"}},{"kind":"webfonts#webfont","family":"Crete Round","category":"serif","variants":["regular","italic"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/creteround/v6/B8EwN421qqOCCT8vOH4wJ6CWcynf_cDxXwCLxiixG1c.ttf","italic":"http://fonts.gstatic.com/s/creteround/v6/5xAt7XK2vkUdjhGtt98unUeOrDcLawS7-ssYqLr2Xp4.ttf"}},{"kind":"webfonts#webfont","family":"Crimson Text","category":"serif","variants":["regular","italic","600","600italic","700","700italic"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"600":"http://fonts.gstatic.com/s/crimsontext/v8/rEy5tGc5HdXy56Xvd4f3I2v8CylhIUtwUiYO7Z2wXbE.ttf","700":"http://fonts.gstatic.com/s/crimsontext/v8/rEy5tGc5HdXy56Xvd4f3I0D2ttfZwueP-QU272T9-k4.ttf","regular":"http://fonts.gstatic.com/s/crimsontext/v8/3IFMwfRa07i-auYR-B-zNS3USBnSvpkopQaUR-2r7iU.ttf","italic":"http://fonts.gstatic.com/s/crimsontext/v8/a5QZnvmn5amyNI-t2BMkWPMZXuCXbOrAvx5R0IT5Oyo.ttf","600italic":"http://fonts.gstatic.com/s/crimsontext/v8/4j4TR-EfnvCt43InYpUNDIR-5-urNOGAobhAyctHvW8.ttf","700italic":"http://fonts.gstatic.com/s/crimsontext/v8/4j4TR-EfnvCt43InYpUNDPAs9-1nE9qOqhChW0m4nDE.ttf"}},{"kind":"webfonts#webfont","family":"Croissant One","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/croissantone/v5/mPjsOObnC77fp1cvZlOfIYjjx0o0jr6fNXxPgYh_a8Q.ttf"}},{"kind":"webfonts#webfont","family":"Crushed","category":"display","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/crushed/v8/aHwSejs3Kt0Lg95u7j32jA.ttf"}},{"kind":"webfonts#webfont","family":"Cuprum","category":"sans-serif","variants":["regular","italic","700","700italic"],"subsets":["cyrillic","latin-ext","cyrillic-ext","vietnamese","latin"],"version":"v9","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/cuprum/v9/6tl3_FkDeXSD72oEHuJh4w.ttf","regular":"http://fonts.gstatic.com/s/cuprum/v9/JgXs0F_UiaEdAS74msmFNg.ttf","italic":"http://fonts.gstatic.com/s/cuprum/v9/cLEz0KV6OxInnktSzpk58g.ttf","700italic":"http://fonts.gstatic.com/s/cuprum/v9/bnkXaBfoYvaJ75axRPSwVKCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Cutive","category":"serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/cutive/v9/G2bW-ImyOCwKxBkLyz39YQ.ttf"}},{"kind":"webfonts#webfont","family":"Cutive Mono","category":"monospace","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/cutivemono/v6/ncWQtFVKcSs8OW798v30k6CWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Damion","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/damion/v7/13XtECwKxhD_VrOqXL4SiA.ttf"}},{"kind":"webfonts#webfont","family":"Dancing Script","category":"handwriting","variants":["regular","700"],"subsets":["latin-ext","vietnamese","latin"],"version":"v9","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/dancingscript/v9/KGBfwabt0ZRLA5W1ywjowb_dAmXiKjTPGCuO6G2MbfA.ttf","regular":"http://fonts.gstatic.com/s/dancingscript/v9/DK0eTGXiZjN6yA8zAEyM2RnpV0hQCek3EmWnCPrvGRM.ttf"}},{"kind":"webfonts#webfont","family":"Dangrek","category":"display","variants":["regular"],"subsets":["khmer"],"version":"v9","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/dangrek/v9/LOaFhBT-EHNxZjV8DAW_ew.ttf"}},{"kind":"webfonts#webfont","family":"David Libre","category":"serif","variants":["regular","500","700"],"subsets":["hebrew","latin-ext","vietnamese","latin"],"version":"v2","lastModified":"2017-10-10","files":{"500":"http://fonts.gstatic.com/s/davidlibre/v2/ea-623K8OFNeGhfSzdpmysCNfqCYlB_eIx7H1TVXe60.ttf","700":"http://fonts.gstatic.com/s/davidlibre/v2/ea-623K8OFNeGhfSzdpmyne1Pd76Vl7zRpE7NLJQ7XU.ttf","regular":"http://fonts.gstatic.com/s/davidlibre/v2/Fp_YuX4CP0pzlSUtACdOo6CWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Dawning of a New Day","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/dawningofanewday/v8/JiDsRhiKZt8uz3NJ5xA06gXLnohmOYWQZqo_sW8GLTk.ttf"}},{"kind":"webfonts#webfont","family":"Days One","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/daysone/v7/kzwZjNhc1iabMsrc_hKBIA.ttf"}},{"kind":"webfonts#webfont","family":"Dekko","category":"handwriting","variants":["regular"],"subsets":["devanagari","latin-ext","latin"],"version":"v4","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/dekko/v4/AKtgABKC1rUxgIgS-bpojw.ttf"}},{"kind":"webfonts#webfont","family":"Delius","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/delius/v7/TQA163qafki2-gV-B6F_ag.ttf"}},{"kind":"webfonts#webfont","family":"Delius Swash Caps","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/deliusswashcaps/v9/uXyrEUnoWApxIOICunRq7yIrxb5zDVgU2N3VzXm7zq4.ttf"}},{"kind":"webfonts#webfont","family":"Delius Unicase","category":"handwriting","variants":["regular","700"],"subsets":["latin"],"version":"v10","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/deliusunicase/v10/7FTMTITcb4dxUp99FAdTqNy5weKXdcrx-wE0cgECMq8.ttf","regular":"http://fonts.gstatic.com/s/deliusunicase/v10/b2sKujV3Q48RV2PQ0k1vqu6rPKfVZo7L2bERcf0BDns.ttf"}},{"kind":"webfonts#webfont","family":"Della Respira","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/dellarespira/v5/F4E6Lo_IZ6L9AJCcbqtDVeDcg5akpSnIcsPhLOFv7l8.ttf"}},{"kind":"webfonts#webfont","family":"Denk One","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/denkone/v5/TdXOeA4eA_hEx4W8Sh9wPw.ttf"}},{"kind":"webfonts#webfont","family":"Devonshire","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/devonshire/v6/I3ct_2t12SYizP8ZC-KFi_esZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Dhurjati","category":"sans-serif","variants":["regular"],"subsets":["telugu","latin"],"version":"v5","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/dhurjati/v5/uV6jO5e2iFMbGB0z79Cy5g.ttf"}},{"kind":"webfonts#webfont","family":"Didact Gothic","category":"sans-serif","variants":["regular"],"subsets":["cyrillic","latin-ext","cyrillic-ext","greek","greek-ext","latin"],"version":"v11","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/didactgothic/v11/v8_72sD3DYMKyM0dn3LtWotBLojGU5Qdl8-5NL4v70w.ttf"}},{"kind":"webfonts#webfont","family":"Diplomata","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/diplomata/v9/u-ByBiKgN6rTMA36H3kcKg.ttf"}},{"kind":"webfonts#webfont","family":"Diplomata SC","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/diplomatasc/v6/JdVwAwfE1a_pahXjk5qpNi3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Domine","category":"serif","variants":["regular","700"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/domine/v5/phBcG1ZbQFxUIt18hPVxnw.ttf","regular":"http://fonts.gstatic.com/s/domine/v5/wfVIgamVFjMNQAEWurCiHA.ttf"}},{"kind":"webfonts#webfont","family":"Donegal One","category":"serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/donegalone/v5/6kN4-fDxz7T9s5U61HwfF6CWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Doppio One","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/doppioone/v5/WHZ3HJQotpk_4aSMNBo_t_esZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Dorsa","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/dorsa/v8/wCc3cUe6XrmG2LQE6GlIrw.ttf"}},{"kind":"webfonts#webfont","family":"Dosis","category":"sans-serif","variants":["200","300","regular","500","600","700","800"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"200":"http://fonts.gstatic.com/s/dosis/v7/ztftab0r6hcd7AeurUGrSQ.ttf","300":"http://fonts.gstatic.com/s/dosis/v7/awIB6L0h5mb0plIKorXmuA.ttf","500":"http://fonts.gstatic.com/s/dosis/v7/ruEXDOFMxDPGnjCBKRqdAQ.ttf","600":"http://fonts.gstatic.com/s/dosis/v7/KNAswRNwm3tfONddYyidxg.ttf","700":"http://fonts.gstatic.com/s/dosis/v7/AEEAj0ONidK8NQQMBBlSig.ttf","800":"http://fonts.gstatic.com/s/dosis/v7/nlrKd8E69vvUU39XGsvR7Q.ttf","regular":"http://fonts.gstatic.com/s/dosis/v7/rJRlixu-w0JZ1MyhJpao_Q.ttf"}},{"kind":"webfonts#webfont","family":"Dr Sugiyama","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/drsugiyama/v6/S5Yx3MIckgoyHhhS4C9Tv6CWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Droid Sans","category":"sans-serif","variants":["regular","700"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-11","files":{"700":"http://fonts.gstatic.com/s/droidsans/v8/EFpQQyG9GqCrobXxL-KRMQJKKGfqHaYFsRG-T3ceEVo.ttf","regular":"http://fonts.gstatic.com/s/droidsans/v8/rS9BT6-asrfjpkcV3DXf__esZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Droid Sans Mono","category":"monospace","variants":["regular"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/droidsansmono/v9/ns-m2xQYezAtqh7ai59hJcwD6PD0c3_abh9zHKQtbGU.ttf"}},{"kind":"webfonts#webfont","family":"Droid Serif","category":"serif","variants":["regular","italic","700","700italic"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-11","files":{"700":"http://fonts.gstatic.com/s/droidserif/v8/QQt14e8dY39u-eYBZmppwXe1Pd76Vl7zRpE7NLJQ7XU.ttf","regular":"http://fonts.gstatic.com/s/droidserif/v8/DgAtPy6rIVa2Zx3Xh9KaNaCWcynf_cDxXwCLxiixG1c.ttf","italic":"http://fonts.gstatic.com/s/droidserif/v8/cj2hUnSRBhwmSPr9kS5890eOrDcLawS7-ssYqLr2Xp4.ttf","700italic":"http://fonts.gstatic.com/s/droidserif/v8/c92rD_x0V1LslSFt3-QEps_zJjSACmk0BRPxQqhnNLU.ttf"}},{"kind":"webfonts#webfont","family":"Duru Sans","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v10","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/durusans/v10/xn7iYH8xwmSyTvEV_HOxTw.ttf"}},{"kind":"webfonts#webfont","family":"Dynalight","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/dynalight/v6/-CWsIe8OUDWTIHjSAh41kA.ttf"}},{"kind":"webfonts#webfont","family":"EB Garamond","category":"serif","variants":["regular"],"subsets":["cyrillic","latin-ext","cyrillic-ext","vietnamese","latin"],"version":"v8","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/ebgaramond/v8/CDR0kuiFK7I1OZ2hSdR7G6CWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Eagle Lake","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/eaglelake/v5/ZKlYin7caemhx9eSg6RvPfesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Eater","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/eater/v6/gm6f3OmYEdbs3lPQtUfBkA.ttf"}},{"kind":"webfonts#webfont","family":"Economica","category":"sans-serif","variants":["regular","italic","700","700italic"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/economica/v5/UK4l2VEpwjv3gdcwbwXE9C3USBnSvpkopQaUR-2r7iU.ttf","regular":"http://fonts.gstatic.com/s/economica/v5/G4rJRujzZbq9Nxngu9l3hg.ttf","italic":"http://fonts.gstatic.com/s/economica/v5/p5O9AVeUqx_n35xQRinNYaCWcynf_cDxXwCLxiixG1c.ttf","700italic":"http://fonts.gstatic.com/s/economica/v5/ac5dlUsedQ03RqGOeay-3Xe1Pd76Vl7zRpE7NLJQ7XU.ttf"}},{"kind":"webfonts#webfont","family":"Eczar","category":"serif","variants":["regular","500","600","700","800"],"subsets":["devanagari","latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"500":"http://fonts.gstatic.com/s/eczar/v6/Ooe4KaPp2594tF8TbMfdlQ.ttf","600":"http://fonts.gstatic.com/s/eczar/v6/IjQsWW0bmgkZ6lnN72cnTQ.ttf","700":"http://fonts.gstatic.com/s/eczar/v6/ELC8RVXfBMb3VuuHtMwBOA.ttf","800":"http://fonts.gstatic.com/s/eczar/v6/9Uyt6nTZLx_Qj5_WRah-iQ.ttf","regular":"http://fonts.gstatic.com/s/eczar/v6/uKZcAQ5JBBs1UbeXFRbBRg.ttf"}},{"kind":"webfonts#webfont","family":"El Messiri","category":"sans-serif","variants":["regular","500","600","700"],"subsets":["arabic","cyrillic","latin"],"version":"v2","lastModified":"2017-10-10","files":{"500":"http://fonts.gstatic.com/s/elmessiri/v2/kQW9PA2krAOzditagrX75pp-63r6doWhTEbsfBIRJ7A.ttf","600":"http://fonts.gstatic.com/s/elmessiri/v2/HYl7TNqFfA1utGLZRWwzLPpTEJqju4Hz1txDWij77d4.ttf","700":"http://fonts.gstatic.com/s/elmessiri/v2/ji73glXFIetaSqMU3cz7rAJKKGfqHaYFsRG-T3ceEVo.ttf","regular":"http://fonts.gstatic.com/s/elmessiri/v2/dik94vfrFvHFnvdvxaX8N_esZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Electrolize","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/electrolize/v6/yFVu5iokC-nt4B1Cyfxb9aCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Elsie","category":"display","variants":["regular","900"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"900":"http://fonts.gstatic.com/s/elsie/v7/1t-9f0N2NFYwAgN7oaISqg.ttf","regular":"http://fonts.gstatic.com/s/elsie/v7/gwspePauE45BJu6Ok1QrfQ.ttf"}},{"kind":"webfonts#webfont","family":"Elsie Swash Caps","category":"display","variants":["regular","900"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-09","files":{"900":"http://fonts.gstatic.com/s/elsieswashcaps/v6/iZnus9qif0tR5pGaDv5zdKoKBWBozTtxi30NfZDOXXU.ttf","regular":"http://fonts.gstatic.com/s/elsieswashcaps/v6/9L3hIJMPCf6sxCltnxd6X2YeFSdnSpRYv5h9gpdlD1g.ttf"}},{"kind":"webfonts#webfont","family":"Emblema One","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/emblemaone/v6/7IlBUjBWPIiw7cr_O2IfSaCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Emilys Candy","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/emilyscandy/v5/PofLVm6v1SwZGOzC8s-I3S3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Encode Sans","category":"sans-serif","variants":["100","200","300","regular","500","600","700","800","900"],"subsets":["latin-ext","vietnamese","latin"],"version":"v2","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/encodesans/v2/TvUFkOGoNYwmv-XugrRC14AWxXGWZ3yJw6KhWS7MxOk.ttf","200":"http://fonts.gstatic.com/s/encodesans/v2/IaOhmWC4W3-qZLH1UUd4vEnzyIngrzGjGh22wPb6cGM.ttf","300":"http://fonts.gstatic.com/s/encodesans/v2/IaOhmWC4W3-qZLH1UUd4vC9-WlPSxbfiI49GsXo3q0g.ttf","500":"http://fonts.gstatic.com/s/encodesans/v2/IaOhmWC4W3-qZLH1UUd4vMCNfqCYlB_eIx7H1TVXe60.ttf","600":"http://fonts.gstatic.com/s/encodesans/v2/IaOhmWC4W3-qZLH1UUd4vJZ7xm-Bj30Bj2KNdXDzSZg.ttf","700":"http://fonts.gstatic.com/s/encodesans/v2/IaOhmWC4W3-qZLH1UUd4vHe1Pd76Vl7zRpE7NLJQ7XU.ttf","800":"http://fonts.gstatic.com/s/encodesans/v2/IaOhmWC4W3-qZLH1UUd4vA89PwPrYLaRFJ-HNCU9NbA.ttf","900":"http://fonts.gstatic.com/s/encodesans/v2/IaOhmWC4W3-qZLH1UUd4vCenaqEuufTBk9XMKnKmgDA.ttf","regular":"http://fonts.gstatic.com/s/encodesans/v2/xpYstnmVhPpbvOHKD75EK6CWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Encode Sans Condensed","category":"sans-serif","variants":["100","200","300","regular","500","600","700","800","900"],"subsets":["latin-ext","vietnamese","latin"],"version":"v2","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/encodesanscondensed/v2/6LOoEWi9It096ZzMNw6yeii7tdGxScTr3oVgcrTUqWw.ttf","200":"http://fonts.gstatic.com/s/encodesanscondensed/v2/UP_H-DzI6prLPN-PMUyxY61IHoFZjDq9yl49NJ3Y0wY.ttf","300":"http://fonts.gstatic.com/s/encodesanscondensed/v2/UP_H-DzI6prLPN-PMUyxY-ZroXgFx_lT3TTeDaAqrWE.ttf","500":"http://fonts.gstatic.com/s/encodesanscondensed/v2/UP_H-DzI6prLPN-PMUyxY64Ixr3FMLIaz6yY1ILODIU.ttf","600":"http://fonts.gstatic.com/s/encodesanscondensed/v2/UP_H-DzI6prLPN-PMUyxY8MHImBNo4aGUuMCjGiDijI.ttf","700":"http://fonts.gstatic.com/s/encodesanscondensed/v2/UP_H-DzI6prLPN-PMUyxY7GMx7y0UuyPIsLqSMg46Ks.ttf","800":"http://fonts.gstatic.com/s/encodesanscondensed/v2/UP_H-DzI6prLPN-PMUyxY_3VPWKD9LjLpSGgTAgUUIc.ttf","900":"http://fonts.gstatic.com/s/encodesanscondensed/v2/UP_H-DzI6prLPN-PMUyxY73y6LE9HhLx9tlnlwi3OAw.ttf","regular":"http://fonts.gstatic.com/s/encodesanscondensed/v2/CbFzpyBSY4j-AYSd59uzHIelbRYnLTTQA1Z5cVLnsI4.ttf"}},{"kind":"webfonts#webfont","family":"Encode Sans Expanded","category":"sans-serif","variants":["100","200","300","regular","500","600","700","800","900"],"subsets":["latin-ext","vietnamese","latin"],"version":"v2","lastModified":"2017-10-09","files":{"100":"http://fonts.gstatic.com/s/encodesansexpanded/v2/SxJCe-5XtgTwkLeuB6DsDAzYtaUryPdMybTmqF2t-hk.ttf","200":"http://fonts.gstatic.com/s/encodesansexpanded/v2/NZFW_aAjtWMwFwRPQHyMtImyl4eLRAk2hWaf4usQtfw.ttf","300":"http://fonts.gstatic.com/s/encodesansexpanded/v2/NZFW_aAjtWMwFwRPQHyMtE8dNemX_23MZOKO5OoYF5E.ttf","500":"http://fonts.gstatic.com/s/encodesansexpanded/v2/NZFW_aAjtWMwFwRPQHyMtPqCJK4Zn8SYLcLgnaiBGrc.ttf","600":"http://fonts.gstatic.com/s/encodesansexpanded/v2/NZFW_aAjtWMwFwRPQHyMtFwX9co0a2-oIpf1o8i-1K0.ttf","700":"http://fonts.gstatic.com/s/encodesansexpanded/v2/NZFW_aAjtWMwFwRPQHyMtD3JW4OQm61sg8k8DfLBAwg.ttf","800":"http://fonts.gstatic.com/s/encodesansexpanded/v2/NZFW_aAjtWMwFwRPQHyMtJvi7umicd6qVgIYLFojqyc.ttf","900":"http://fonts.gstatic.com/s/encodesansexpanded/v2/NZFW_aAjtWMwFwRPQHyMtGZrxQvJ_xEKbxayeNEjyrc.ttf","regular":"http://fonts.gstatic.com/s/encodesansexpanded/v2/OdOWbHhxwo9XAUoeS5o4Dg7dxr0N5HY0cZKknTIL6n4.ttf"}},{"kind":"webfonts#webfont","family":"Encode Sans Semi Condensed","category":"sans-serif","variants":["100","200","300","regular","500","600","700","800","900"],"subsets":["latin-ext","vietnamese","latin"],"version":"v2","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/encodesanssemicondensed/v2/E6kA5T3mzxUj69IdQg70PS1QEJchpDhTUwbwiSjEPbgt1EgZ0r6ZKKUGlEftq-4l.ttf","200":"http://fonts.gstatic.com/s/encodesanssemicondensed/v2/z-mVMDpNLBzCo6eVg95vHVxi1xYyRqMxS_FPu-moW0lnrnXkzuOM3_obd5Pijc8I.ttf","300":"http://fonts.gstatic.com/s/encodesanssemicondensed/v2/z-mVMDpNLBzCo6eVg95vHSLQwj9Lduqb1W3tq4fXf91Hjqw3C2sEu_rLGKi69l6e.ttf","500":"http://fonts.gstatic.com/s/encodesanssemicondensed/v2/z-mVMDpNLBzCo6eVg95vHWPzD9HBxt0HXJBsJbnj8Taafut6-naFoUxG7HwSESew.ttf","600":"http://fonts.gstatic.com/s/encodesanssemicondensed/v2/z-mVMDpNLBzCo6eVg95vHZTIxrxLvLMtU-yhyAf1TK_6UxCao7uB89bcQ1oo--3e.ttf","700":"http://fonts.gstatic.com/s/encodesanssemicondensed/v2/z-mVMDpNLBzCo6eVg95vHanrccv-0xgQwXIoROQBHDkCSihn6h2mBbERvk93HhFa.ttf","800":"http://fonts.gstatic.com/s/encodesanssemicondensed/v2/z-mVMDpNLBzCo6eVg95vHaUGwPLApwd9av9Pcjv04cOpN24TwUgSdG0iUOmnC_tI.ttf","900":"http://fonts.gstatic.com/s/encodesanssemicondensed/v2/z-mVMDpNLBzCo6eVg95vHf3LPq0EY0JuN61BrMSCA9udBAFcbdBtG4hJ7aeN0Leh.ttf","regular":"http://fonts.gstatic.com/s/encodesanssemicondensed/v2/70xnFP2R6L67b4lbb0LqFQ760Nu0ZmWpK1JTCHVCKHz3rGVtsTkPsbDajuO5ueQw.ttf"}},{"kind":"webfonts#webfont","family":"Encode Sans Semi Expanded","category":"sans-serif","variants":["100","200","300","regular","500","600","700","800","900"],"subsets":["latin-ext","vietnamese","latin"],"version":"v2","lastModified":"2017-10-09","files":{"100":"http://fonts.gstatic.com/s/encodesanssemiexpanded/v2/Dt9vBR-jlFaGi37WwOwD_8qIAxu59oivT8gVJSaPAJmglnMp3_3A8V8Ai8YosRtX.ttf","200":"http://fonts.gstatic.com/s/encodesanssemiexpanded/v2/CzlMbAciMXgtU6UUaNDI4iyuBgySKCdxv6GjzoxXXEct1EgZ0r6ZKKUGlEftq-4l.ttf","300":"http://fonts.gstatic.com/s/encodesanssemiexpanded/v2/CzlMbAciMXgtU6UUaNDI4mA0loIJ_cqzG2SO7pmT2v8t1EgZ0r6ZKKUGlEftq-4l.ttf","500":"http://fonts.gstatic.com/s/encodesanssemiexpanded/v2/CzlMbAciMXgtU6UUaNDI4m9ZGOr7ke8-zfCGnYaqVkwt1EgZ0r6ZKKUGlEftq-4l.ttf","600":"http://fonts.gstatic.com/s/encodesanssemiexpanded/v2/CzlMbAciMXgtU6UUaNDI4jZr6ABenySL2MEoV49ZPIEt1EgZ0r6ZKKUGlEftq-4l.ttf","700":"http://fonts.gstatic.com/s/encodesanssemiexpanded/v2/CzlMbAciMXgtU6UUaNDI4vb58e8syHA9EvUqaFcpH8kt1EgZ0r6ZKKUGlEftq-4l.ttf","800":"http://fonts.gstatic.com/s/encodesanssemiexpanded/v2/CzlMbAciMXgtU6UUaNDI4v1ujhhC8jANxa3d-BaQZ3st1EgZ0r6ZKKUGlEftq-4l.ttf","900":"http://fonts.gstatic.com/s/encodesanssemiexpanded/v2/CzlMbAciMXgtU6UUaNDI4sIOIZ6BsfRi1i9aEyUWch4t1EgZ0r6ZKKUGlEftq-4l.ttf","regular":"http://fonts.gstatic.com/s/encodesanssemiexpanded/v2/L50h_XWfeGcmQgSaLLv8qDl-hG_EEbQLBeCEvsoBv9c.ttf"}},{"kind":"webfonts#webfont","family":"Engagement","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/engagement/v6/4Uz0Jii7oVPcaFRYmbpU6vesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Englebert","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/englebert/v5/sll38iOvOuarDTYBchlP3Q.ttf"}},{"kind":"webfonts#webfont","family":"Enriqueta","category":"serif","variants":["regular","700"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/enriqueta/v6/I27Pb-wEGH2ajLYP0QrtSC3USBnSvpkopQaUR-2r7iU.ttf","regular":"http://fonts.gstatic.com/s/enriqueta/v6/_p90TrIwR1SC-vDKtmrv6A.ttf"}},{"kind":"webfonts#webfont","family":"Erica One","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v8","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/ericaone/v8/cIBnH2VAqQMIGYAcE4ufvQ.ttf"}},{"kind":"webfonts#webfont","family":"Esteban","category":"serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/esteban/v5/ESyhLgqDDyK5JcFPp2svDw.ttf"}},{"kind":"webfonts#webfont","family":"Euphoria Script","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/euphoriascript/v5/c4XB4Iijj_NvSsCF4I0O2MxLhO8OSNnfAp53LK1_iRs.ttf"}},{"kind":"webfonts#webfont","family":"Ewert","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/ewert/v5/Em8hrzuzSbfHcTVqMjbAQg.ttf"}},{"kind":"webfonts#webfont","family":"Exo","category":"sans-serif","variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"subsets":["latin-ext","vietnamese","latin"],"version":"v6","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/exo/v6/RI7A9uwjRmPbVp0n8e-Jvg.ttf","200":"http://fonts.gstatic.com/s/exo/v6/F8OfC_swrRRxpFt-tlXZQg.ttf","300":"http://fonts.gstatic.com/s/exo/v6/SBrN7TKUqgGUvfxqHqsnNw.ttf","500":"http://fonts.gstatic.com/s/exo/v6/jCg6DmGGXt_OVyp5ofQHPw.ttf","600":"http://fonts.gstatic.com/s/exo/v6/q_SG5kXUmOcIvFpgtdZnlw.ttf","700":"http://fonts.gstatic.com/s/exo/v6/3_jwsL4v9uHjl5Q37G57mw.ttf","800":"http://fonts.gstatic.com/s/exo/v6/yLPuxBuV0lzqibRJyooOJg.ttf","900":"http://fonts.gstatic.com/s/exo/v6/97d0nd6Yv4-SA_X92xAuZA.ttf","100italic":"http://fonts.gstatic.com/s/exo/v6/qtGyZZlWb2EEvby3ZPosxw.ttf","200italic":"http://fonts.gstatic.com/s/exo/v6/fr4HBfXHYiIngW2_bhlgRw.ttf","300italic":"http://fonts.gstatic.com/s/exo/v6/3gmiLjBegIfcDLISjTGA1g.ttf","regular":"http://fonts.gstatic.com/s/exo/v6/eUEzTFueNXRVhbt4PEB8kQ.ttf","italic":"http://fonts.gstatic.com/s/exo/v6/cfgolWisMSURhpQeVHl_NA.ttf","500italic":"http://fonts.gstatic.com/s/exo/v6/lo5eTdCNJZQVN08p8RnzAQ.ttf","600italic":"http://fonts.gstatic.com/s/exo/v6/0cExa8K_pxS2lTuMr68XUA.ttf","700italic":"http://fonts.gstatic.com/s/exo/v6/0me55yJIxd5vyQ9bF7SsiA.ttf","800italic":"http://fonts.gstatic.com/s/exo/v6/n3LejeKVj_8gtZq5fIgNYw.ttf","900italic":"http://fonts.gstatic.com/s/exo/v6/JHTkQVhzyLtkY13Ye95TJQ.ttf"}},{"kind":"webfonts#webfont","family":"Exo 2","category":"sans-serif","variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"subsets":["cyrillic","latin-ext","latin"],"version":"v4","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/exo2/v4/oVOtQy53isv97g4UhBUDqg.ttf","200":"http://fonts.gstatic.com/s/exo2/v4/qa-Ci2pBwJdCxciE1ErifQ.ttf","300":"http://fonts.gstatic.com/s/exo2/v4/nLUBdz_lHHoVIPor05Byhw.ttf","500":"http://fonts.gstatic.com/s/exo2/v4/oM0rzUuPqVJpW-VEIpuW5w.ttf","600":"http://fonts.gstatic.com/s/exo2/v4/YnSn3HsyvyI1feGSdRMYqA.ttf","700":"http://fonts.gstatic.com/s/exo2/v4/2DiK4XkdTckfTk6we73-bQ.ttf","800":"http://fonts.gstatic.com/s/exo2/v4/IVYl_7dJruOg8zKRpC8Hrw.ttf","900":"http://fonts.gstatic.com/s/exo2/v4/e8csG8Wnu87AF6uCndkFRQ.ttf","100italic":"http://fonts.gstatic.com/s/exo2/v4/LNYVgsJcaCxoKFHmd4AZcg.ttf","200italic":"http://fonts.gstatic.com/s/exo2/v4/DCrVxDVvS69n50O-5erZVvesZW2xOQ-xsNqO47m55DA.ttf","300italic":"http://fonts.gstatic.com/s/exo2/v4/iSy9VTeUTiqiurQg2ywtu_esZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/exo2/v4/Pf_kZuIH5c5WKVkQUaeSWQ.ttf","italic":"http://fonts.gstatic.com/s/exo2/v4/xxA5ZscX9sTU6U0lZJUlYA.ttf","500italic":"http://fonts.gstatic.com/s/exo2/v4/amzRVCB-gipwdihZZ2LtT_esZW2xOQ-xsNqO47m55DA.ttf","600italic":"http://fonts.gstatic.com/s/exo2/v4/Vmo58BiptGwfVFb0teU5gPesZW2xOQ-xsNqO47m55DA.ttf","700italic":"http://fonts.gstatic.com/s/exo2/v4/Sdo-zW-4_--pDkTg6bYrY_esZW2xOQ-xsNqO47m55DA.ttf","800italic":"http://fonts.gstatic.com/s/exo2/v4/p0TA6KeOz1o4rySEbvUxI_esZW2xOQ-xsNqO47m55DA.ttf","900italic":"http://fonts.gstatic.com/s/exo2/v4/KPhsGCoT2-7Uj6pMlRscH_esZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Expletus Sans","category":"display","variants":["regular","italic","500","500italic","600","600italic","700","700italic"],"subsets":["latin"],"version":"v10","lastModified":"2017-10-10","files":{"500":"http://fonts.gstatic.com/s/expletussans/v10/cl6rhMY77Ilk8lB_uYRRwAqQmZ7VjhwksfpNVG0pqGc.ttf","600":"http://fonts.gstatic.com/s/expletussans/v10/cl6rhMY77Ilk8lB_uYRRwCvj1tU7IJMS3CS9kCx2B3U.ttf","700":"http://fonts.gstatic.com/s/expletussans/v10/cl6rhMY77Ilk8lB_uYRRwFCbmAUID8LN-q3pJpOk3Ys.ttf","regular":"http://fonts.gstatic.com/s/expletussans/v10/gegTSDBDs5le3g6uxU1ZsX8f0n03UdmQgF_CLvNR2vg.ttf","italic":"http://fonts.gstatic.com/s/expletussans/v10/Y-erXmY0b6DU_i2Qu0hTJj4G9C9ttb0Oz5Cvf0qOitE.ttf","500italic":"http://fonts.gstatic.com/s/expletussans/v10/sRBNtc46w65uJE451UYmW87DCVO6wo6i5LKIyZDzK40.ttf","600italic":"http://fonts.gstatic.com/s/expletussans/v10/sRBNtc46w65uJE451UYmW8yKH23ZS6zCKOFHG0e_4JE.ttf","700italic":"http://fonts.gstatic.com/s/expletussans/v10/sRBNtc46w65uJE451UYmW5F66r9C4AnxxlBlGd7xY4g.ttf"}},{"kind":"webfonts#webfont","family":"Fanwood Text","category":"serif","variants":["regular","italic"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/fanwoodtext/v7/hDNDHUlsSb8bgnEmDp4T_i3USBnSvpkopQaUR-2r7iU.ttf","italic":"http://fonts.gstatic.com/s/fanwoodtext/v7/0J3SBbkMZqBV-3iGxs5E9_MZXuCXbOrAvx5R0IT5Oyo.ttf"}},{"kind":"webfonts#webfont","family":"Farsan","category":"display","variants":["regular"],"subsets":["latin-ext","vietnamese","gujarati","latin"],"version":"v3","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/farsan/v3/Hdf9Y76SQ6e1X0Nqk3rHtw.ttf"}},{"kind":"webfonts#webfont","family":"Fascinate","category":"display","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/fascinate/v6/ZE0637WWkBPKt1AmFaqD3Q.ttf"}},{"kind":"webfonts#webfont","family":"Fascinate Inline","category":"display","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/fascinateinline/v7/lRguYfMfWArflkm5aOQ5QJmp8DTZ6iHear7UV05iykg.ttf"}},{"kind":"webfonts#webfont","family":"Faster One","category":"display","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/fasterone/v8/H4ciBXCHmdfClFb-vWhfyLs.ttf"}},{"kind":"webfonts#webfont","family":"Fasthand","category":"serif","variants":["regular"],"subsets":["khmer"],"version":"v8","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/fasthand/v8/6XAagHH_KmpZL67wTvsETQ.ttf"}},{"kind":"webfonts#webfont","family":"Fauna One","category":"serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/faunaone/v5/8kL-wpAPofcAMELI_5NRnQ.ttf"}},{"kind":"webfonts#webfont","family":"Faustina","category":"serif","variants":["regular","italic","500","500italic","600","600italic","700","700italic"],"subsets":["latin-ext","vietnamese","latin"],"version":"v2","lastModified":"2017-10-09","files":{"500":"http://fonts.gstatic.com/s/faustina/v2/DMeEDU8yYDdzN-7RbPNe8KCWcynf_cDxXwCLxiixG1c.ttf","600":"http://fonts.gstatic.com/s/faustina/v2/YOr4BI3KhIzqwTG7vH0SM6CWcynf_cDxXwCLxiixG1c.ttf","700":"http://fonts.gstatic.com/s/faustina/v2/fO-A_KFKgRicxL_4JD_smaCWcynf_cDxXwCLxiixG1c.ttf","regular":"http://fonts.gstatic.com/s/faustina/v2/VG2SxiuKreAgH5lXZ5wbng.ttf","italic":"http://fonts.gstatic.com/s/faustina/v2/JxwP25AedFpQZdkRJXn_5_esZW2xOQ-xsNqO47m55DA.ttf","500italic":"http://fonts.gstatic.com/s/faustina/v2/P6ASjT1goNMRHifKhq6WRZp-63r6doWhTEbsfBIRJ7A.ttf","600italic":"http://fonts.gstatic.com/s/faustina/v2/OJMzHMQmadDP2rMiZVbZd_pTEJqju4Hz1txDWij77d4.ttf","700italic":"http://fonts.gstatic.com/s/faustina/v2/XGqbj0LfEd8UkIzdKBNuggJKKGfqHaYFsRG-T3ceEVo.ttf"}},{"kind":"webfonts#webfont","family":"Federant","category":"display","variants":["regular"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/federant/v9/tddZFSiGvxICNOGra0i5aA.ttf"}},{"kind":"webfonts#webfont","family":"Federo","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/federo/v9/JPhe1S2tujeyaR79gXBLeQ.ttf"}},{"kind":"webfonts#webfont","family":"Felipa","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/felipa/v5/SeyfyFZY7abAQXGrOIYnYg.ttf"}},{"kind":"webfonts#webfont","family":"Fenix","category":"serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/fenix/v5/Ak8wR3VSlAN7VN_eMeJj7Q.ttf"}},{"kind":"webfonts#webfont","family":"Finger Paint","category":"display","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/fingerpaint/v7/m_ZRbiY-aPb13R3DWPBGXy3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Fira Mono","category":"monospace","variants":["regular","500","700"],"subsets":["cyrillic","latin-ext","cyrillic-ext","greek","greek-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"500":"http://fonts.gstatic.com/s/firamono/v6/PJ4zAY1ucu5ib6LzyvHMkS3USBnSvpkopQaUR-2r7iU.ttf","700":"http://fonts.gstatic.com/s/firamono/v6/l24Wph3FsyKAbJ8dfExTZy3USBnSvpkopQaUR-2r7iU.ttf","regular":"http://fonts.gstatic.com/s/firamono/v6/WQOm1D4RO-yvA9q9trJc8g.ttf"}},{"kind":"webfonts#webfont","family":"Fira Sans","category":"sans-serif","variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"subsets":["cyrillic","latin-ext","cyrillic-ext","greek","vietnamese","greek-ext","latin"],"version":"v8","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/firasans/v8/8lKWk2lAb6-y9gc_GLDdPKCWcynf_cDxXwCLxiixG1c.ttf","200":"http://fonts.gstatic.com/s/firasans/v8/H2QtVYRshA1CFy63P7ykZy3USBnSvpkopQaUR-2r7iU.ttf","300":"http://fonts.gstatic.com/s/firasans/v8/VTBnrK42EiOBncVyQXZ7jy3USBnSvpkopQaUR-2r7iU.ttf","500":"http://fonts.gstatic.com/s/firasans/v8/zM2u8V3CuPVwAAXFQcDi4C3USBnSvpkopQaUR-2r7iU.ttf","600":"http://fonts.gstatic.com/s/firasans/v8/TPhEsJuyxIEzWtby22btfi3USBnSvpkopQaUR-2r7iU.ttf","700":"http://fonts.gstatic.com/s/firasans/v8/DugPdSljmOTocZOR2CItOi3USBnSvpkopQaUR-2r7iU.ttf","800":"http://fonts.gstatic.com/s/firasans/v8/htOw9f-chtELyJuFCkCrFi3USBnSvpkopQaUR-2r7iU.ttf","900":"http://fonts.gstatic.com/s/firasans/v8/rowJfijyp23uW9P2J-sluC3USBnSvpkopQaUR-2r7iU.ttf","100italic":"http://fonts.gstatic.com/s/firasans/v8/fmobwZujc_UI4huzQvESm4AWxXGWZ3yJw6KhWS7MxOk.ttf","200italic":"http://fonts.gstatic.com/s/firasans/v8/6s0YCA9oCTF6hM60YM-qTUnzyIngrzGjGh22wPb6cGM.ttf","300italic":"http://fonts.gstatic.com/s/firasans/v8/6s0YCA9oCTF6hM60YM-qTS9-WlPSxbfiI49GsXo3q0g.ttf","regular":"http://fonts.gstatic.com/s/firasans/v8/nsT0isDy56OkSX99sFQbXw.ttf","italic":"http://fonts.gstatic.com/s/firasans/v8/cPT_2ddmoxsUuMtQqa8zGqCWcynf_cDxXwCLxiixG1c.ttf","500italic":"http://fonts.gstatic.com/s/firasans/v8/6s0YCA9oCTF6hM60YM-qTcCNfqCYlB_eIx7H1TVXe60.ttf","600italic":"http://fonts.gstatic.com/s/firasans/v8/6s0YCA9oCTF6hM60YM-qTZZ7xm-Bj30Bj2KNdXDzSZg.ttf","700italic":"http://fonts.gstatic.com/s/firasans/v8/6s0YCA9oCTF6hM60YM-qTXe1Pd76Vl7zRpE7NLJQ7XU.ttf","800italic":"http://fonts.gstatic.com/s/firasans/v8/6s0YCA9oCTF6hM60YM-qTQ89PwPrYLaRFJ-HNCU9NbA.ttf","900italic":"http://fonts.gstatic.com/s/firasans/v8/6s0YCA9oCTF6hM60YM-qTSenaqEuufTBk9XMKnKmgDA.ttf"}},{"kind":"webfonts#webfont","family":"Fira Sans Condensed","category":"sans-serif","variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"subsets":["cyrillic","latin-ext","cyrillic-ext","greek","vietnamese","greek-ext","latin"],"version":"v2","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/firasanscondensed/v2/-hkH0zXsjNm-yd0g99LvtmzsEJYDLiwza6ZHrdqhthQ.ttf","200":"http://fonts.gstatic.com/s/firasanscondensed/v2/k1srRZ14gKpu4XGd0R993IBfX0yoOQz7y6Fa57EWAgY.ttf","300":"http://fonts.gstatic.com/s/firasanscondensed/v2/k1srRZ14gKpu4XGd0R993EMwSSh38KQVJx4ABtsZTnA.ttf","500":"http://fonts.gstatic.com/s/firasanscondensed/v2/k1srRZ14gKpu4XGd0R993OsjvTPWUq6WFqixIyn02S8.ttf","600":"http://fonts.gstatic.com/s/firasanscondensed/v2/k1srRZ14gKpu4XGd0R993HI2_Em5SxSZLj3SINQVfR0.ttf","700":"http://fonts.gstatic.com/s/firasanscondensed/v2/k1srRZ14gKpu4XGd0R993BEM87DM3yorPOrvA-vB930.ttf","800":"http://fonts.gstatic.com/s/firasanscondensed/v2/k1srRZ14gKpu4XGd0R993IakE3OFfI2LZ4c6GPO8Mzs.ttf","900":"http://fonts.gstatic.com/s/firasanscondensed/v2/k1srRZ14gKpu4XGd0R993BL2AAruu1GYH8xAyPJJAg8.ttf","100italic":"http://fonts.gstatic.com/s/firasanscondensed/v2/Nqqv1KfmeTlTML-ky7aaRPKr3wa5Ugsm4QGD8HSjBf8.ttf","200italic":"http://fonts.gstatic.com/s/firasanscondensed/v2/Z87ZCYzj43dcQd7C-kCjDzTCSvnRzshTGhbaUNxVLsY.ttf","300italic":"http://fonts.gstatic.com/s/firasanscondensed/v2/Z87ZCYzj43dcQd7C-kCjD4_LkTZ_uhAwfmGJ084hlvM.ttf","regular":"http://fonts.gstatic.com/s/firasanscondensed/v2/HQGj1o4-qj8agzakWWMQw0b2huS6PSilRpwXI3qYZmg.ttf","italic":"http://fonts.gstatic.com/s/firasanscondensed/v2/-hkH0zXsjNm-yd0g99Lvtv745YdnE8ZqDtluSBzScUA.ttf","500italic":"http://fonts.gstatic.com/s/firasanscondensed/v2/Z87ZCYzj43dcQd7C-kCjD4BZvKPjZWiSZqpadd3c-cI.ttf","600italic":"http://fonts.gstatic.com/s/firasanscondensed/v2/Z87ZCYzj43dcQd7C-kCjD5AgRolq0CFuJyGMzcpUuqI.ttf","700italic":"http://fonts.gstatic.com/s/firasanscondensed/v2/Z87ZCYzj43dcQd7C-kCjDzkJmEiMQ4xM-o8FMi_9og4.ttf","800italic":"http://fonts.gstatic.com/s/firasanscondensed/v2/Z87ZCYzj43dcQd7C-kCjD07QUKmu2W_Ow4yNN8hZ1i8.ttf","900italic":"http://fonts.gstatic.com/s/firasanscondensed/v2/Z87ZCYzj43dcQd7C-kCjD8mJu-lqHNyZBDoYLJNH3Ks.ttf"}},{"kind":"webfonts#webfont","family":"Fira Sans Extra Condensed","category":"sans-serif","variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"subsets":["cyrillic","latin-ext","cyrillic-ext","greek","vietnamese","greek-ext","latin"],"version":"v2","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/firasansextracondensed/v2/_dPmaUiuUAWmL0ibePdArgFORyOzJNaQMfz6m4ejZbGglnMp3_3A8V8Ai8YosRtX.ttf","200":"http://fonts.gstatic.com/s/firasansextracondensed/v2/34whiWDL4CxC1laOcj7OwW_7IC3ILXfeIVwvfWGu4Sgt1EgZ0r6ZKKUGlEftq-4l.ttf","300":"http://fonts.gstatic.com/s/firasansextracondensed/v2/34whiWDL4CxC1laOcj7OwW7O05EUNkkL_mPtCuekiV0t1EgZ0r6ZKKUGlEftq-4l.ttf","500":"http://fonts.gstatic.com/s/firasansextracondensed/v2/34whiWDL4CxC1laOcj7Owdd0GPYAHEVh0EvoffkRAuMt1EgZ0r6ZKKUGlEftq-4l.ttf","600":"http://fonts.gstatic.com/s/firasansextracondensed/v2/34whiWDL4CxC1laOcj7OwW8v1dGG_WArVpDmblm5TDot1EgZ0r6ZKKUGlEftq-4l.ttf","700":"http://fonts.gstatic.com/s/firasansextracondensed/v2/34whiWDL4CxC1laOcj7OwdEjTMY3GGLBv_AxlS3Ww6ct1EgZ0r6ZKKUGlEftq-4l.ttf","800":"http://fonts.gstatic.com/s/firasansextracondensed/v2/34whiWDL4CxC1laOcj7OwZZWqFq9WyGGQ2ef9bXDKiQt1EgZ0r6ZKKUGlEftq-4l.ttf","900":"http://fonts.gstatic.com/s/firasansextracondensed/v2/34whiWDL4CxC1laOcj7OwRPaRBEe7-4iQsBL_zD1FQ8t1EgZ0r6ZKKUGlEftq-4l.ttf","100italic":"http://fonts.gstatic.com/s/firasansextracondensed/v2/G8VKhLxlTd0YOlG3i1R8CfHXjqTqiXVW6z8kDssMYPCAFsVxlmd8icOioVkuzMTp.ttf","200italic":"http://fonts.gstatic.com/s/firasansextracondensed/v2/iGnuurQ1EqiOs_hlr82MCvHXjqTqiXVW6z8kDssMYPBJ88iJ4K8xoxodtsD2-nBj.ttf","300italic":"http://fonts.gstatic.com/s/firasansextracondensed/v2/iGnuurQ1EqiOs_hlr82MCvHXjqTqiXVW6z8kDssMYPAvflpT0sW34iOPRrF6N6tI.ttf","regular":"http://fonts.gstatic.com/s/firasansextracondensed/v2/wg_5XrW_o1_ZfuCbAkBfGRreEc6WSk_gssVJg3w2ARQ.ttf","italic":"http://fonts.gstatic.com/s/firasansextracondensed/v2/_dPmaUiuUAWmL0ibePdArnKUexidEaHsf8DLYXbriUSglnMp3_3A8V8Ai8YosRtX.ttf","500italic":"http://fonts.gstatic.com/s/firasansextracondensed/v2/iGnuurQ1EqiOs_hlr82MCvHXjqTqiXVW6z8kDssMYPDAjX6gmJQf3iMex9U1V3ut.ttf","600italic":"http://fonts.gstatic.com/s/firasansextracondensed/v2/iGnuurQ1EqiOs_hlr82MCvHXjqTqiXVW6z8kDssMYPCWe8ZvgY99AY9ijXVw80mY.ttf","700italic":"http://fonts.gstatic.com/s/firasansextracondensed/v2/iGnuurQ1EqiOs_hlr82MCvHXjqTqiXVW6z8kDssMYPB3tT3e-lZe80aROzSyUO11.ttf","800italic":"http://fonts.gstatic.com/s/firasansextracondensed/v2/iGnuurQ1EqiOs_hlr82MCvHXjqTqiXVW6z8kDssMYPAPPT8D62C2kRSfhzQlPTWw.ttf","900italic":"http://fonts.gstatic.com/s/firasansextracondensed/v2/iGnuurQ1EqiOs_hlr82MCvHXjqTqiXVW6z8kDssMYPAnp2qhLrn0wZPVzCpypoAw.ttf"}},{"kind":"webfonts#webfont","family":"Fjalla One","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/fjallaone/v5/3b7vWCfOZsU53vMa8LWsf_esZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Fjord One","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/fjordone/v6/R_YHK8au2uFPw5tNu5N7zw.ttf"}},{"kind":"webfonts#webfont","family":"Flamenco","category":"display","variants":["300","regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/flamenco/v8/x9iI5CogvuZVCGoRHwXuo6CWcynf_cDxXwCLxiixG1c.ttf","regular":"http://fonts.gstatic.com/s/flamenco/v8/HC0ugfLLgt26I5_BWD1PZA.ttf"}},{"kind":"webfonts#webfont","family":"Flavors","category":"display","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/flavors/v6/SPJi5QclATvon8ExcKGRvQ.ttf"}},{"kind":"webfonts#webfont","family":"Fondamento","category":"handwriting","variants":["regular","italic"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/fondamento/v7/6LWXcjT1B7bnWluAOSNfMPesZW2xOQ-xsNqO47m55DA.ttf","italic":"http://fonts.gstatic.com/s/fondamento/v7/y6TmwhSbZ8rYq7OTFyo7OS3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Fontdiner Swanky","category":"display","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/fontdinerswanky/v8/8_GxIO5ixMtn5P6COsF3TlBjMPLzPAFJwRBn-s1U7kA.ttf"}},{"kind":"webfonts#webfont","family":"Forum","category":"display","variants":["regular"],"subsets":["cyrillic","latin-ext","cyrillic-ext","latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/forum/v8/MZUpsq1VfLrqv8eSDcbrrQ.ttf"}},{"kind":"webfonts#webfont","family":"Francois One","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","vietnamese","latin"],"version":"v11","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/francoisone/v11/bYbkq2nU2TSx4SwFbz5sCC3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Frank Ruhl Libre","category":"serif","variants":["300","regular","500","700","900"],"subsets":["hebrew","latin-ext","latin"],"version":"v3","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/frankruhllibre/v3/y8NWif61iD8Hg8bGAmxFPOo9jvbqtCEVUIntIHarXsc.ttf","500":"http://fonts.gstatic.com/s/frankruhllibre/v3/y8NWif61iD8Hg8bGAmxFPC-WNtISbX_UO2d0wZPgXtk.ttf","700":"http://fonts.gstatic.com/s/frankruhllibre/v3/y8NWif61iD8Hg8bGAmxFPDPYiZEMiRRbPdIFMoTwDbo.ttf","900":"http://fonts.gstatic.com/s/frankruhllibre/v3/y8NWif61iD8Hg8bGAmxFPNRZIVFRjDx-6MOpcoWbVhA.ttf","regular":"http://fonts.gstatic.com/s/frankruhllibre/v3/yDLloNqBpFmakCImLv4OJkfFI6QBbouvcOFcz81E3Ek.ttf"}},{"kind":"webfonts#webfont","family":"Freckle Face","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/freckleface/v5/7-B8j9BPJgazdHIGqPNv8y3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Fredericka the Great","category":"display","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/frederickathegreat/v6/7Es8Lxoku-e5eOZWpxw18nrnet6gXN1McwdQxS1dVrI.ttf"}},{"kind":"webfonts#webfont","family":"Fredoka One","category":"display","variants":["regular"],"subsets":["latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/fredokaone/v5/QKfwXi-z-KtJAlnO2ethYqCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Freehand","category":"display","variants":["regular"],"subsets":["khmer"],"version":"v9","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/freehand/v9/uEBQxvA0lnn_BrD6krlxMw.ttf"}},{"kind":"webfonts#webfont","family":"Fresca","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/fresca/v6/2q7Qm9sCo1tWvVgSDVWNIw.ttf"}},{"kind":"webfonts#webfont","family":"Frijole","category":"display","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/frijole/v6/L2MfZse-2gCascuD-nLhWg.ttf"}},{"kind":"webfonts#webfont","family":"Fruktur","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v10","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/fruktur/v10/PnQvfEi1LssAvhJsCwH__w.ttf"}},{"kind":"webfonts#webfont","family":"Fugaz One","category":"display","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/fugazone/v7/5tteVDCwxsr8-5RuSiRWOw.ttf"}},{"kind":"webfonts#webfont","family":"GFS Didot","category":"serif","variants":["regular"],"subsets":["greek"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/gfsdidot/v7/jQKxZy2RU-h9tkPZcRVluA.ttf"}},{"kind":"webfonts#webfont","family":"GFS Neohellenic","category":"sans-serif","variants":["regular","italic","700","700italic"],"subsets":["greek"],"version":"v8","lastModified":"2017-10-09","files":{"700":"http://fonts.gstatic.com/s/gfsneohellenic/v8/7HwjPQa7qNiOsnUce2h4448_BwCLZY3eDSV6kppAwI8.ttf","regular":"http://fonts.gstatic.com/s/gfsneohellenic/v8/B4xRqbn-tANVqVgamMsSDiayCZa0z7CpFzlkqoCHztc.ttf","italic":"http://fonts.gstatic.com/s/gfsneohellenic/v8/KnaWrO4awITAqigQIIYXKkCTdomiyJpIzPbEbIES3rU.ttf","700italic":"http://fonts.gstatic.com/s/gfsneohellenic/v8/FwWjoX6XqT-szJFyqsu_GYFF0fM4h-krcpQk7emtCpE.ttf"}},{"kind":"webfonts#webfont","family":"Gabriela","category":"serif","variants":["regular"],"subsets":["cyrillic","cyrillic-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/gabriela/v6/B-2ZfbAO3HDrxqV6lR5tdA.ttf"}},{"kind":"webfonts#webfont","family":"Gafata","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/gafata/v6/aTFqlki_3Dc3geo-FxHTvQ.ttf"}},{"kind":"webfonts#webfont","family":"Galada","category":"display","variants":["regular"],"subsets":["bengali","latin"],"version":"v3","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/galada/v3/xGkllHQb8OOCv9VJ6IObSA.ttf"}},{"kind":"webfonts#webfont","family":"Galdeano","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/galdeano/v7/ZKFMQI6HxEG1jOT0UGSZUg.ttf"}},{"kind":"webfonts#webfont","family":"Galindo","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/galindo/v5/2lafAS_ZEfB33OJryhXDUg.ttf"}},{"kind":"webfonts#webfont","family":"Gentium Basic","category":"serif","variants":["regular","italic","700","700italic"],"subsets":["latin-ext","latin"],"version":"v9","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/gentiumbasic/v9/2qL6yulgGf0wwgOp-UqGyLNuTeOOLg3nUymsEEGmdO0.ttf","regular":"http://fonts.gstatic.com/s/gentiumbasic/v9/KCktj43blvLkhOTolFn-MYtBLojGU5Qdl8-5NL4v70w.ttf","italic":"http://fonts.gstatic.com/s/gentiumbasic/v9/qoFz4NSMaYC2UmsMAG3lyTj3mvXnCeAk09uTtmkJGRc.ttf","700italic":"http://fonts.gstatic.com/s/gentiumbasic/v9/8N9-c_aQDJ8LbI1NGVMrwtswO1vWwP9exiF8s0wqW10.ttf"}},{"kind":"webfonts#webfont","family":"Gentium Book Basic","category":"serif","variants":["regular","italic","700","700italic"],"subsets":["latin-ext","latin"],"version":"v8","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/gentiumbookbasic/v8/T2vUYmWzlqUtgLYdlemGnaWESMHIjnSjm9UUxYtEOko.ttf","regular":"http://fonts.gstatic.com/s/gentiumbookbasic/v8/IRFxB2matTxrjZt6a3FUnrWDjKAyldGEr6eEi2MBNeY.ttf","italic":"http://fonts.gstatic.com/s/gentiumbookbasic/v8/qHqW2lwKO8-uTfIkh8FsUfXfjMwrYnmPVsQth2IcAPY.ttf","700italic":"http://fonts.gstatic.com/s/gentiumbookbasic/v8/632u7TMIoFDWQYUaHFUp5PA2A9KyRZEkn4TZVuhsWRM.ttf"}},{"kind":"webfonts#webfont","family":"Geo","category":"sans-serif","variants":["regular","italic"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/geo/v9/mJuJYk5Pww84B4uHAQ1XaA.ttf","italic":"http://fonts.gstatic.com/s/geo/v9/8_r1wToF7nPdDuX1qxel6Q.ttf"}},{"kind":"webfonts#webfont","family":"Geostar","category":"display","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/geostar/v7/A8WQbhQbpYx3GWWaShJ9GA.ttf"}},{"kind":"webfonts#webfont","family":"Geostar Fill","category":"display","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/geostarfill/v7/Y5ovXPPOHYTfQzK2aM-hui3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Germania One","category":"display","variants":["regular"],"subsets":["latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/germaniaone/v5/3_6AyUql_-FbDi1e68jHdC3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Gidugu","category":"sans-serif","variants":["regular"],"subsets":["telugu","latin"],"version":"v4","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/gidugu/v4/Ey6Eq3hrT6MM58iFItFcgw.ttf"}},{"kind":"webfonts#webfont","family":"Gilda Display","category":"serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/gildadisplay/v5/8yAVUZLLZ3wb7dSsjix0CADHmap7fRWINAsw8-RaxNg.ttf"}},{"kind":"webfonts#webfont","family":"Give You Glory","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/giveyouglory/v7/DFEWZFgGmfseyIdGRJAxuBwwkpSPZdvjnMtysdqprfI.ttf"}},{"kind":"webfonts#webfont","family":"Glass Antiqua","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/glassantiqua/v5/0yLrXKplgdUDIMz5TnCHNODcg5akpSnIcsPhLOFv7l8.ttf"}},{"kind":"webfonts#webfont","family":"Glegoo","category":"serif","variants":["regular","700"],"subsets":["devanagari","latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/glegoo/v6/TlLolbauH0-0Aiz1LUH5og.ttf","regular":"http://fonts.gstatic.com/s/glegoo/v6/2tf-h3n2A_SNYXEO0C8bKw.ttf"}},{"kind":"webfonts#webfont","family":"Gloria Hallelujah","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/gloriahallelujah/v9/CA1k7SlXcY5kvI81M_R28Q3RdPdyebSUyJECJouPsvA.ttf"}},{"kind":"webfonts#webfont","family":"Goblin One","category":"display","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/goblinone/v7/331XtzoXgpVEvNTVcBJ_C_esZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Gochi Hand","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/gochihand/v8/KT1-WxgHsittJ34_20IfAPesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Gorditas","category":"display","variants":["regular","700"],"subsets":["latin"],"version":"v5","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/gorditas/v5/6-XCeknmxaon8AUqVkMnHaCWcynf_cDxXwCLxiixG1c.ttf","regular":"http://fonts.gstatic.com/s/gorditas/v5/uMgZhXUyH6qNGF3QsjQT5Q.ttf"}},{"kind":"webfonts#webfont","family":"Goudy Bookletter 1911","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/goudybookletter1911/v7/l5lwlGTN3pEY5Bf-rQEuIIjNDsyURsIKu4GSfvSE4mA.ttf"}},{"kind":"webfonts#webfont","family":"Graduate","category":"display","variants":["regular"],"subsets":["latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/graduate/v5/JpAmYLHqcIh9_Ff35HHwiA.ttf"}},{"kind":"webfonts#webfont","family":"Grand Hotel","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/grandhotel/v5/C_A8HiFZjXPpnMt38XnK7qCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Gravitas One","category":"display","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/gravitasone/v7/nBHdBv6zVNU8MtP6w9FwTS3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Great Vibes","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/greatvibes/v5/4Mi5RG_9LjQYrTU55GN_L6CWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Griffy","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/griffy/v5/vWkyYGBSyE5xjnShNtJtzw.ttf"}},{"kind":"webfonts#webfont","family":"Gruppo","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/gruppo/v8/pS_JM0cK_piBZve-lfUq9w.ttf"}},{"kind":"webfonts#webfont","family":"Gudea","category":"sans-serif","variants":["regular","italic","700"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/gudea/v5/lsip4aiWhJ9bx172Y9FN_w.ttf","regular":"http://fonts.gstatic.com/s/gudea/v5/S-4QqBlkMPiiA3jNeCR5yw.ttf","italic":"http://fonts.gstatic.com/s/gudea/v5/7mNgsGw_vfS-uUgRVXNDSw.ttf"}},{"kind":"webfonts#webfont","family":"Gurajada","category":"serif","variants":["regular"],"subsets":["telugu","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/gurajada/v5/6Adfkl4PCRyq6XTENACEyA.ttf"}},{"kind":"webfonts#webfont","family":"Habibi","category":"serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/habibi/v6/YYyqXF6pWpL7kmKgS_2iUA.ttf"}},{"kind":"webfonts#webfont","family":"Halant","category":"serif","variants":["300","regular","500","600","700"],"subsets":["devanagari","latin-ext","latin"],"version":"v4","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/halant/v4/dM3ItAOWNNod_Cf3MnLlEg.ttf","500":"http://fonts.gstatic.com/s/halant/v4/tlsNj3K-hJKtiirTDtUbkQ.ttf","600":"http://fonts.gstatic.com/s/halant/v4/zNR2WvI_V8o652vIZp3X4Q.ttf","700":"http://fonts.gstatic.com/s/halant/v4/D9FN7OH89AuCmZDLHbPQfA.ttf","regular":"http://fonts.gstatic.com/s/halant/v4/rEs7Jk3SVyt3cTx6DoTu1w.ttf"}},{"kind":"webfonts#webfont","family":"Hammersmith One","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/hammersmithone/v8/FWNn6ITYqL6or7ZTmBxRhjjVlsJB_M_Q_LtZxsoxvlw.ttf"}},{"kind":"webfonts#webfont","family":"Hanalei","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/hanalei/v7/Sx8vVMBnXSQyK6Cn0CBJ3A.ttf"}},{"kind":"webfonts#webfont","family":"Hanalei Fill","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/hanaleifill/v6/5uPeWLnaDdtm4UBG26Ds6C3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Handlee","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/handlee/v6/6OfkXkyC0E5NZN80ED8u3A.ttf"}},{"kind":"webfonts#webfont","family":"Hanuman","category":"serif","variants":["regular","700"],"subsets":["khmer"],"version":"v11","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/hanuman/v11/lzzXZ2l84x88giDrbfq76vesZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/hanuman/v11/hRhwOGGmElJSl6KSPvEnOQ.ttf"}},{"kind":"webfonts#webfont","family":"Happy Monkey","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/happymonkey/v6/c2o0ps8nkBmaOYctqBq1rS3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Harmattan","category":"sans-serif","variants":["regular"],"subsets":["arabic","latin"],"version":"v2","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/harmattan/v2/xNM1nDKzsLfoCLQtMRztGA.ttf"}},{"kind":"webfonts#webfont","family":"Headland One","category":"serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/headlandone/v5/iGmBeOvQGfq9DSbjJ8jDVy3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Heebo","category":"sans-serif","variants":["100","300","regular","500","700","800","900"],"subsets":["hebrew","latin"],"version":"v3","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/heebo/v3/SoQODIucfpkiveZloUR6ag.ttf","300":"http://fonts.gstatic.com/s/heebo/v3/dg5T18yyjkKiU_9mmcbDSQ.ttf","500":"http://fonts.gstatic.com/s/heebo/v3/jDb70ZCwdD6JnmQU62ZQZA.ttf","700":"http://fonts.gstatic.com/s/heebo/v3/NsBYEn6oWei8pPqytA07yA.ttf","800":"http://fonts.gstatic.com/s/heebo/v3/h4CV2Qq56LKIinGGOStvsw.ttf","900":"http://fonts.gstatic.com/s/heebo/v3/uDfzHw3R0Bfa6HyIIcj-ow.ttf","regular":"http://fonts.gstatic.com/s/heebo/v3/nyHCGMPliplPNqpssbDSIA.ttf"}},{"kind":"webfonts#webfont","family":"Henny Penny","category":"display","variants":["regular"],"subsets":["latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/hennypenny/v5/XRgo3ogXyi3tpsFfjImRF6CWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Herr Von Muellerhoff","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/herrvonmuellerhoff/v7/mmy24EUmk4tjm4gAEjUd7NLGIYrUsBdh-JWHYgiDiMU.ttf"}},{"kind":"webfonts#webfont","family":"Hind","category":"sans-serif","variants":["300","regular","500","600","700"],"subsets":["devanagari","latin-ext","latin"],"version":"v8","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/hind/v8/qa346Adgv9kPDXoD1my4kA.ttf","500":"http://fonts.gstatic.com/s/hind/v8/2cs8RCVcYtiv4iNDH1UsQQ.ttf","600":"http://fonts.gstatic.com/s/hind/v8/TUKUmFMXSoxloBP1ni08oA.ttf","700":"http://fonts.gstatic.com/s/hind/v8/cXJJavLdUbCfjxlsA6DqTw.ttf","regular":"http://fonts.gstatic.com/s/hind/v8/mktFHh5Z5P9YjGKSslSUtA.ttf"}},{"kind":"webfonts#webfont","family":"Hind Guntur","category":"sans-serif","variants":["300","regular","500","600","700"],"subsets":["latin-ext","telugu","latin"],"version":"v3","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/hindguntur/v3/Szg33M7ab5MTWe-PWAcNAi9-WlPSxbfiI49GsXo3q0g.ttf","500":"http://fonts.gstatic.com/s/hindguntur/v3/Szg33M7ab5MTWe-PWAcNAsCNfqCYlB_eIx7H1TVXe60.ttf","600":"http://fonts.gstatic.com/s/hindguntur/v3/Szg33M7ab5MTWe-PWAcNApZ7xm-Bj30Bj2KNdXDzSZg.ttf","700":"http://fonts.gstatic.com/s/hindguntur/v3/Szg33M7ab5MTWe-PWAcNAne1Pd76Vl7zRpE7NLJQ7XU.ttf","regular":"http://fonts.gstatic.com/s/hindguntur/v3/MXz-KyAeVZstlFz6v-5SC6CWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Hind Madurai","category":"sans-serif","variants":["300","regular","500","600","700"],"subsets":["latin-ext","tamil","latin"],"version":"v3","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/hindmadurai/v3/sdSJTZLdRXJhVTP92m2S66cQoVhARpoaILP7amxE_8g.ttf","500":"http://fonts.gstatic.com/s/hindmadurai/v3/sdSJTZLdRXJhVTP92m2S65MQuUSAwdHsY8ov_6tk1oA.ttf","600":"http://fonts.gstatic.com/s/hindmadurai/v3/sdSJTZLdRXJhVTP92m2S62v8CylhIUtwUiYO7Z2wXbE.ttf","700":"http://fonts.gstatic.com/s/hindmadurai/v3/sdSJTZLdRXJhVTP92m2S60D2ttfZwueP-QU272T9-k4.ttf","regular":"http://fonts.gstatic.com/s/hindmadurai/v3/pJpl47LatORZNWf8rgdiyS3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Hind Siliguri","category":"sans-serif","variants":["300","regular","500","600","700"],"subsets":["bengali","latin-ext","latin"],"version":"v4","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/hindsiliguri/v4/fBpmjMpv5Rh6S25yVfWJnzoJ52uD-1fmXmi8u0n_zsc.ttf","500":"http://fonts.gstatic.com/s/hindsiliguri/v4/fBpmjMpv5Rh6S25yVfWJn__2zpxNHQ3utWt_82o9dAo.ttf","600":"http://fonts.gstatic.com/s/hindsiliguri/v4/fBpmjMpv5Rh6S25yVfWJn-x91FDzFvnud68bXrNkpDA.ttf","700":"http://fonts.gstatic.com/s/hindsiliguri/v4/fBpmjMpv5Rh6S25yVfWJn6iiXuG_rGcOxkuidirlnJE.ttf","regular":"http://fonts.gstatic.com/s/hindsiliguri/v4/f2eEi2pbIa8eBfNwpUl0Am_MnNA9OgK8I1F23mNWOpE.ttf"}},{"kind":"webfonts#webfont","family":"Hind Vadodara","category":"sans-serif","variants":["300","regular","500","600","700"],"subsets":["latin-ext","gujarati","latin"],"version":"v4","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/hindvadodara/v4/KrZ6f_YevRawHvh0qDBkTbDwfZ__Dotj_J8NiWv76DQ.ttf","500":"http://fonts.gstatic.com/s/hindvadodara/v4/KrZ6f_YevRawHvh0qDBkTZzEKvFIU9WyojfbAkhDb6c.ttf","600":"http://fonts.gstatic.com/s/hindvadodara/v4/KrZ6f_YevRawHvh0qDBkTfgXs2VXrZsRiQ1c96pXZKI.ttf","700":"http://fonts.gstatic.com/s/hindvadodara/v4/KrZ6f_YevRawHvh0qDBkTYGjoH95IEFGA7BjhXnx_eg.ttf","regular":"http://fonts.gstatic.com/s/hindvadodara/v4/9c6KKeibr6NtFqknnNxZB-Dcg5akpSnIcsPhLOFv7l8.ttf"}},{"kind":"webfonts#webfont","family":"Holtwood One SC","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/holtwoodonesc/v8/sToOq3cIxbfnhbEkgYNuBbAgSRh1LpJXlLfl8IbsmHg.ttf"}},{"kind":"webfonts#webfont","family":"Homemade Apple","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/homemadeapple/v8/yg3UMEsefgZ8IHz_ryz86BiPOmFWYV1WlrJkRafc4c0.ttf"}},{"kind":"webfonts#webfont","family":"Homenaje","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/homenaje/v7/v0YBU0iBRrGdVjDNQILxtA.ttf"}},{"kind":"webfonts#webfont","family":"IM Fell DW Pica","category":"serif","variants":["regular","italic"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/imfelldwpica/v7/W81bfaWiUicLSPbJhW-ATsA5qm663gJGVdtpamafG5A.ttf","italic":"http://fonts.gstatic.com/s/imfelldwpica/v7/alQJ8SK5aSOZVaelYoyT4PL2asmh5DlYQYCosKo6yQs.ttf"}},{"kind":"webfonts#webfont","family":"IM Fell DW Pica SC","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/imfelldwpicasc/v7/xBKKJV4z2KsrtQnmjGO17JZ9RBdEL0H9o5qzT1Rtof4.ttf"}},{"kind":"webfonts#webfont","family":"IM Fell Double Pica","category":"serif","variants":["regular","italic"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/imfelldoublepica/v7/yN1wY_01BkQnO0LYAhXdUol14jEdVOhEmvtCMCVwYak.ttf","italic":"http://fonts.gstatic.com/s/imfelldoublepica/v7/64odUh2hAw8D9dkFKTlWYq0AWwkgdQfsRHec8TYi4mI.ttf"}},{"kind":"webfonts#webfont","family":"IM Fell Double Pica SC","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/imfelldoublepicasc/v7/jkrUtrLFpMw4ZazhfkKsGwc4LoC4OJUqLw9omnT3VOU.ttf"}},{"kind":"webfonts#webfont","family":"IM Fell English","category":"serif","variants":["regular","italic"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/imfellenglish/v7/xwIisCqGFi8pff-oa9uSVHGNmx1fDm-u2eBJHQkdrmk.ttf","italic":"http://fonts.gstatic.com/s/imfellenglish/v7/Z3cnIAI_L3XTRfz4JuZKbuewladMPCWTthtMv9cPS-c.ttf"}},{"kind":"webfonts#webfont","family":"IM Fell English SC","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/imfellenglishsc/v7/h3Tn6yWfw4b5qaLD1RWvz5ATixNthKRRR1XVH3rJNiw.ttf"}},{"kind":"webfonts#webfont","family":"IM Fell French Canon","category":"serif","variants":["regular","italic"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/imfellfrenchcanon/v7/iKB0WL1BagSpNPz3NLMdsJ3V2FNpBrlLSvqUnERhBP8.ttf","italic":"http://fonts.gstatic.com/s/imfellfrenchcanon/v7/owCuNQkLLFW7TBBPJbMnhRa-QL94KdW80H29tcyld2A.ttf"}},{"kind":"webfonts#webfont","family":"IM Fell French Canon SC","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/imfellfrenchcanonsc/v7/kA3bS19-tQbeT_iG32EZmaiyyzHwYrAbmNulTz423iM.ttf"}},{"kind":"webfonts#webfont","family":"IM Fell Great Primer","category":"serif","variants":["regular","italic"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/imfellgreatprimer/v7/AL8ALGNthei20f9Cu3e93rgeX3ROgtTz44CitKAxzKI.ttf","italic":"http://fonts.gstatic.com/s/imfellgreatprimer/v7/1a-artkXMVg682r7TTxVY1_YG2SFv8Ma7CxRl1S3o7g.ttf"}},{"kind":"webfonts#webfont","family":"IM Fell Great Primer SC","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/imfellgreatprimersc/v7/A313vRj97hMMGFjt6rgSJtRg-ciw1Y27JeXb2Zv4lZQ.ttf"}},{"kind":"webfonts#webfont","family":"Iceberg","category":"display","variants":["regular"],"subsets":["latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/iceberg/v5/p2XVm4M-N0AOEEOymFKC5w.ttf"}},{"kind":"webfonts#webfont","family":"Iceland","category":"display","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/iceland/v6/kq3uTMGgvzWGNi39B_WxGA.ttf"}},{"kind":"webfonts#webfont","family":"Imprima","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/imprima/v5/eRjquWLjwLGnTEhLH7u3kA.ttf"}},{"kind":"webfonts#webfont","family":"Inconsolata","category":"monospace","variants":["regular","700"],"subsets":["latin-ext","vietnamese","latin"],"version":"v16","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/inconsolata/v16/AIed271kqQlcIRSOnQH0yXe1Pd76Vl7zRpE7NLJQ7XU.ttf","regular":"http://fonts.gstatic.com/s/inconsolata/v16/7bMKuoy6Nh0ft0SHnIGMuaCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Inder","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/inder/v6/C38TwecLTfKxIHDc_Adcrw.ttf"}},{"kind":"webfonts#webfont","family":"Indie Flower","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-11","files":{"regular":"http://fonts.gstatic.com/s/indieflower/v9/10JVD_humAd5zP2yrFqw6i3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Inika","category":"serif","variants":["regular","700"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/inika/v5/bl3ZoTyrWsFun2zYbsgJrA.ttf","regular":"http://fonts.gstatic.com/s/inika/v5/eZCrULQGaIxkrRoGz_DjhQ.ttf"}},{"kind":"webfonts#webfont","family":"Inknut Antiqua","category":"serif","variants":["300","regular","500","600","700","800","900"],"subsets":["devanagari","latin-ext","latin"],"version":"v3","lastModified":"2017-10-09","files":{"300":"http://fonts.gstatic.com/s/inknutantiqua/v3/CagoW52rBcslcXzHh6tVIg6hmPNSXwHGnJQCeQHKUMo.ttf","500":"http://fonts.gstatic.com/s/inknutantiqua/v3/CagoW52rBcslcXzHh6tVIiYCDvi1XFzRnTV7qUFsNgk.ttf","600":"http://fonts.gstatic.com/s/inknutantiqua/v3/CagoW52rBcslcXzHh6tVIjLEgY6PI0GrY6L00mykcEQ.ttf","700":"http://fonts.gstatic.com/s/inknutantiqua/v3/CagoW52rBcslcXzHh6tVIlRhfXn9P4_QueZ7VkUHUNc.ttf","800":"http://fonts.gstatic.com/s/inknutantiqua/v3/CagoW52rBcslcXzHh6tVInARjXVu2t2krcNTHiCb1qY.ttf","900":"http://fonts.gstatic.com/s/inknutantiqua/v3/CagoW52rBcslcXzHh6tVIrTsNy1JrFNT1qKy8j7W3CU.ttf","regular":"http://fonts.gstatic.com/s/inknutantiqua/v3/VlmmTfOrxr3HfcnhMueX9arFJ4O13IHVxZbM6yoslpo.ttf"}},{"kind":"webfonts#webfont","family":"Irish Grover","category":"display","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/irishgrover/v8/kUp7uUPooL-KsLGzeVJbBC3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Istok Web","category":"sans-serif","variants":["regular","italic","700","700italic"],"subsets":["cyrillic","latin-ext","cyrillic-ext","latin"],"version":"v11","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/istokweb/v11/2koEo4AKFSvK4B52O_Mwai3USBnSvpkopQaUR-2r7iU.ttf","regular":"http://fonts.gstatic.com/s/istokweb/v11/RYLSjEXQ0nNtLLc4n7--dQ.ttf","italic":"http://fonts.gstatic.com/s/istokweb/v11/kvcT2SlTjmGbC3YlZxmrl6CWcynf_cDxXwCLxiixG1c.ttf","700italic":"http://fonts.gstatic.com/s/istokweb/v11/ycQ3g52ELrh3o_HYCNNUw3e1Pd76Vl7zRpE7NLJQ7XU.ttf"}},{"kind":"webfonts#webfont","family":"Italiana","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/italiana/v6/dt95fkCSTOF-c6QNjwSycA.ttf"}},{"kind":"webfonts#webfont","family":"Italianno","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/italianno/v7/HsyHnLpKf8uP7aMpDQHZmg.ttf"}},{"kind":"webfonts#webfont","family":"Itim","category":"handwriting","variants":["regular"],"subsets":["latin-ext","thai","vietnamese","latin"],"version":"v2","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/itim/v2/HHV9WK2x5lUkc5bxMXG8Tw.ttf"}},{"kind":"webfonts#webfont","family":"Jacques Francois","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/jacquesfrancois/v5/_-0XWPQIW6tOzTHg4KaJ_M13D_4KM32Q4UmTSjpuNGQ.ttf"}},{"kind":"webfonts#webfont","family":"Jacques Francois Shadow","category":"display","variants":["regular"],"subsets":["latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/jacquesfrancoisshadow/v5/V14y0H3vq56fY9SV4OL_FASt0D_oLVawA8L8b9iKjbs.ttf"}},{"kind":"webfonts#webfont","family":"Jaldi","category":"sans-serif","variants":["regular","700"],"subsets":["devanagari","latin-ext","latin"],"version":"v3","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/jaldi/v3/OIbtgjjEp3aVWtjF6WY8mA.ttf","regular":"http://fonts.gstatic.com/s/jaldi/v3/x1vR-bPW9a1EB-BUVqttCw.ttf"}},{"kind":"webfonts#webfont","family":"Jim Nightshade","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/jimnightshade/v5/_n43lYHXVWNgXegdYRIK9CF1W_bo0EdycfH0kHciIic.ttf"}},{"kind":"webfonts#webfont","family":"Jockey One","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/jockeyone/v7/cAucnOZLvFo07w2AbufBCfesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Jolly Lodger","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/jollylodger/v5/RX8HnkBgaEKQSHQyP9itiS3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Jomhuria","category":"display","variants":["regular"],"subsets":["arabic","latin-ext","latin"],"version":"v3","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/jomhuria/v3/hrvsccQpBliIgor15WxE6g.ttf"}},{"kind":"webfonts#webfont","family":"Josefin Sans","category":"sans-serif","variants":["100","100italic","300","300italic","regular","italic","600","600italic","700","700italic"],"subsets":["latin-ext","vietnamese","latin"],"version":"v12","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/josefinsans/v12/q9w3H4aeBxj0hZ8Osfi3d8SVQ0giZ-l_NELu3lgGyYw.ttf","300":"http://fonts.gstatic.com/s/josefinsans/v12/C6HYlRF50SGJq1XyXj04z6cQoVhARpoaILP7amxE_8g.ttf","600":"http://fonts.gstatic.com/s/josefinsans/v12/C6HYlRF50SGJq1XyXj04z2v8CylhIUtwUiYO7Z2wXbE.ttf","700":"http://fonts.gstatic.com/s/josefinsans/v12/C6HYlRF50SGJq1XyXj04z0D2ttfZwueP-QU272T9-k4.ttf","100italic":"http://fonts.gstatic.com/s/josefinsans/v12/s7-P1gqRNRNn-YWdOYnAOXXcj1rQwlNLIS625o-SrL0.ttf","300italic":"http://fonts.gstatic.com/s/josefinsans/v12/ppse0J9fKSaoxCIIJb33Gyna0FLWfcB-J_SAYmcAXaI.ttf","regular":"http://fonts.gstatic.com/s/josefinsans/v12/xgzbb53t8j-Mo-vYa23n5i3USBnSvpkopQaUR-2r7iU.ttf","italic":"http://fonts.gstatic.com/s/josefinsans/v12/q9w3H4aeBxj0hZ8Osfi3d_MZXuCXbOrAvx5R0IT5Oyo.ttf","600italic":"http://fonts.gstatic.com/s/josefinsans/v12/ppse0J9fKSaoxCIIJb33G4R-5-urNOGAobhAyctHvW8.ttf","700italic":"http://fonts.gstatic.com/s/josefinsans/v12/ppse0J9fKSaoxCIIJb33G_As9-1nE9qOqhChW0m4nDE.ttf"}},{"kind":"webfonts#webfont","family":"Josefin Slab","category":"serif","variants":["100","100italic","300","300italic","regular","italic","600","600italic","700","700italic"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/josefinslab/v8/etsUjZYO8lTLU85lDhZwUsSVQ0giZ-l_NELu3lgGyYw.ttf","300":"http://fonts.gstatic.com/s/josefinslab/v8/NbE6ykYuM2IyEwxQxOIi2KcQoVhARpoaILP7amxE_8g.ttf","600":"http://fonts.gstatic.com/s/josefinslab/v8/NbE6ykYuM2IyEwxQxOIi2Gv8CylhIUtwUiYO7Z2wXbE.ttf","700":"http://fonts.gstatic.com/s/josefinslab/v8/NbE6ykYuM2IyEwxQxOIi2ED2ttfZwueP-QU272T9-k4.ttf","100italic":"http://fonts.gstatic.com/s/josefinslab/v8/8BjDChqLgBF3RJKfwHIYh3Xcj1rQwlNLIS625o-SrL0.ttf","300italic":"http://fonts.gstatic.com/s/josefinslab/v8/af9sBoKGPbGO0r21xJulyyna0FLWfcB-J_SAYmcAXaI.ttf","regular":"http://fonts.gstatic.com/s/josefinslab/v8/46aYWdgz-1oFX11flmyEfS3USBnSvpkopQaUR-2r7iU.ttf","italic":"http://fonts.gstatic.com/s/josefinslab/v8/etsUjZYO8lTLU85lDhZwUvMZXuCXbOrAvx5R0IT5Oyo.ttf","600italic":"http://fonts.gstatic.com/s/josefinslab/v8/af9sBoKGPbGO0r21xJuly4R-5-urNOGAobhAyctHvW8.ttf","700italic":"http://fonts.gstatic.com/s/josefinslab/v8/af9sBoKGPbGO0r21xJuly_As9-1nE9qOqhChW0m4nDE.ttf"}},{"kind":"webfonts#webfont","family":"Joti One","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/jotione/v5/P3r_Th0ESHJdzunsvWgUfQ.ttf"}},{"kind":"webfonts#webfont","family":"Judson","category":"serif","variants":["regular","italic","700"],"subsets":["latin-ext","vietnamese","latin"],"version":"v10","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/judson/v10/he4a2LwiPJc7r8x0oKCKiA.ttf","regular":"http://fonts.gstatic.com/s/judson/v10/znM1AAs0eytUaJzf1CrYZQ.ttf","italic":"http://fonts.gstatic.com/s/judson/v10/GVqQW9P52ygW-ySq-CLwAA.ttf"}},{"kind":"webfonts#webfont","family":"Julee","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/julee/v7/CAib-jsUsSO8SvVRnE9fHA.ttf"}},{"kind":"webfonts#webfont","family":"Julius Sans One","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/juliussansone/v6/iU65JP9acQHPDLkdalCF7jjVlsJB_M_Q_LtZxsoxvlw.ttf"}},{"kind":"webfonts#webfont","family":"Junge","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/junge/v5/j4IXCXtxrw9qIBheercp3A.ttf"}},{"kind":"webfonts#webfont","family":"Jura","category":"sans-serif","variants":["300","regular","500","600","700"],"subsets":["cyrillic","latin-ext","cyrillic-ext","greek","vietnamese","greek-ext","latin"],"version":"v9","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/jura/v9/Rqx_xy1UnN0C7wD3FUSyPQ.ttf","500":"http://fonts.gstatic.com/s/jura/v9/16xhfjHCiaLj3tsqqgmtGg.ttf","600":"http://fonts.gstatic.com/s/jura/v9/iwseduOwJSdY8wQ1Y6CJdA.ttf","700":"http://fonts.gstatic.com/s/jura/v9/k0wz0WR1Y0M_AuROdfv4xQ.ttf","regular":"http://fonts.gstatic.com/s/jura/v9/YAWMwF3sN0KCbynMq-Yr_Q.ttf"}},{"kind":"webfonts#webfont","family":"Just Another Hand","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/justanotherhand/v9/fKV8XYuRNNagXr38eqbRf99BnJIEGrvoojniP57E51c.ttf"}},{"kind":"webfonts#webfont","family":"Just Me Again Down Here","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/justmeagaindownhere/v9/sN06iTc9ITubLTgXoG-kc3M9eVLpVTSK6TqZTIgBrWQ.ttf"}},{"kind":"webfonts#webfont","family":"Kadwa","category":"serif","variants":["regular","700"],"subsets":["devanagari","latin"],"version":"v2","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/kadwa/v2/NFPZaBfekj_Io-7vUMz4Ww.ttf","regular":"http://fonts.gstatic.com/s/kadwa/v2/VwEN8oKGqaa0ug9kRpvSSg.ttf"}},{"kind":"webfonts#webfont","family":"Kalam","category":"handwriting","variants":["300","regular","700"],"subsets":["devanagari","latin-ext","latin"],"version":"v8","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/kalam/v8/MgQQlk1SgPEHdlkWMNh7Jg.ttf","700":"http://fonts.gstatic.com/s/kalam/v8/95nLItUGyWtNLZjSckluLQ.ttf","regular":"http://fonts.gstatic.com/s/kalam/v8/hNEJkp2K-aql7e5WQish4Q.ttf"}},{"kind":"webfonts#webfont","family":"Kameron","category":"serif","variants":["regular","700"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/kameron/v8/rabVVbzlflqvmXJUFlKnu_esZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/kameron/v8/9r8HYhqDSwcq9WMjupL82A.ttf"}},{"kind":"webfonts#webfont","family":"Kanit","category":"sans-serif","variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"subsets":["latin-ext","thai","vietnamese","latin"],"version":"v3","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/kanit/v3/CYl4qOK-NWwZp3iTKW1eIA.ttf","200":"http://fonts.gstatic.com/s/kanit/v3/wfLWkj1C4tYl7MoiFWS3bA.ttf","300":"http://fonts.gstatic.com/s/kanit/v3/SM5qHynYGdOmMKEwGUFIPA.ttf","500":"http://fonts.gstatic.com/s/kanit/v3/GxoU_USIJyIy8WIcYSUO2g.ttf","600":"http://fonts.gstatic.com/s/kanit/v3/n_qoIVxojeQY0D1pvoNDhA.ttf","700":"http://fonts.gstatic.com/s/kanit/v3/kEGmYvO8My36j5ILmbUPRg.ttf","800":"http://fonts.gstatic.com/s/kanit/v3/YTp-zAuKXxwnA1YnJIF1rg.ttf","900":"http://fonts.gstatic.com/s/kanit/v3/1NIEkusi3bG3GgO9Hor3fQ.ttf","100italic":"http://fonts.gstatic.com/s/kanit/v3/NLNtc56MpXmHl1yOrop8oQ.ttf","200italic":"http://fonts.gstatic.com/s/kanit/v3/D8gkrAAM2bvNJ-1i4ot-1_esZW2xOQ-xsNqO47m55DA.ttf","300italic":"http://fonts.gstatic.com/s/kanit/v3/IePislKOKy3Bqfpb9V5VM_esZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/kanit/v3/L6VKvM17ZmevDynOiw7H9w.ttf","italic":"http://fonts.gstatic.com/s/kanit/v3/sHLq5U0-T0oSMTnwTKgv-A.ttf","500italic":"http://fonts.gstatic.com/s/kanit/v3/hrCiWCaNv9AaF0mDY1F2zPesZW2xOQ-xsNqO47m55DA.ttf","600italic":"http://fonts.gstatic.com/s/kanit/v3/9BkP85yRDoVayTWQwdGLqPesZW2xOQ-xsNqO47m55DA.ttf","700italic":"http://fonts.gstatic.com/s/kanit/v3/WNo3ZZ9xtOZJknNlvHAFWfesZW2xOQ-xsNqO47m55DA.ttf","800italic":"http://fonts.gstatic.com/s/kanit/v3/qiTGrW5sCa9UQp841fWjc_esZW2xOQ-xsNqO47m55DA.ttf","900italic":"http://fonts.gstatic.com/s/kanit/v3/ogN5dFD1r4BfxNV4Nb-TXfesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Kantumruy","category":"sans-serif","variants":["300","regular","700"],"subsets":["khmer"],"version":"v4","lastModified":"2017-10-09","files":{"300":"http://fonts.gstatic.com/s/kantumruy/v4/ERRwQE0WG5uanaZWmOFXNi3USBnSvpkopQaUR-2r7iU.ttf","700":"http://fonts.gstatic.com/s/kantumruy/v4/gie_zErpGf_rNzs920C2Ji3USBnSvpkopQaUR-2r7iU.ttf","regular":"http://fonts.gstatic.com/s/kantumruy/v4/kQfXNYElQxr5dS8FyjD39Q.ttf"}},{"kind":"webfonts#webfont","family":"Karla","category":"sans-serif","variants":["regular","italic","700","700italic"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/karla/v6/JS501sZLxZ4zraLQdncOUA.ttf","regular":"http://fonts.gstatic.com/s/karla/v6/78UgGRwJFkhqaoFimqoKpQ.ttf","italic":"http://fonts.gstatic.com/s/karla/v6/51UBKly9RQOnOkj95ZwEFw.ttf","700italic":"http://fonts.gstatic.com/s/karla/v6/3YDyi09gQjCRh-5-SVhTTvesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Karma","category":"serif","variants":["300","regular","500","600","700"],"subsets":["devanagari","latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/karma/v7/lH6ijJnguWR2Sz7tEl6MQQ.ttf","500":"http://fonts.gstatic.com/s/karma/v7/9YGjxi6Hcvz2Kh-rzO_cAw.ttf","600":"http://fonts.gstatic.com/s/karma/v7/h_CVzXXtqSxjfS2sIwaejA.ttf","700":"http://fonts.gstatic.com/s/karma/v7/smuSM08oApsQPPVYbHd1CA.ttf","regular":"http://fonts.gstatic.com/s/karma/v7/wvqTxAGBUrTqU0urTEoPIw.ttf"}},{"kind":"webfonts#webfont","family":"Katibeh","category":"display","variants":["regular"],"subsets":["arabic","latin-ext","latin"],"version":"v3","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/katibeh/v3/Q-SA43uWR2uu3wBIvedotA.ttf"}},{"kind":"webfonts#webfont","family":"Kaushan Script","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/kaushanscript/v6/qx1LSqts-NtiKcLw4N03IBnpV0hQCek3EmWnCPrvGRM.ttf"}},{"kind":"webfonts#webfont","family":"Kavivanar","category":"handwriting","variants":["regular"],"subsets":["latin-ext","tamil","latin"],"version":"v3","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/kavivanar/v3/VLDrdUtF1irKFc8rFWgDaw.ttf"}},{"kind":"webfonts#webfont","family":"Kavoon","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/kavoon/v6/382m-6baKXqJFQjEgobt6Q.ttf"}},{"kind":"webfonts#webfont","family":"Kdam Thmor","category":"display","variants":["regular"],"subsets":["khmer"],"version":"v4","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/kdamthmor/v4/otCdP6UU-VBIrBfVDWBQJ_esZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Keania One","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/keaniaone/v5/PACrDKZWngXzgo-ucl6buvesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Kelly Slab","category":"display","variants":["regular"],"subsets":["cyrillic","latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/kellyslab/v7/F_2oS1e9XdYx1MAi8XEVefesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Kenia","category":"display","variants":["regular"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/kenia/v9/OLM9-XfITK9PsTLKbGBrwg.ttf"}},{"kind":"webfonts#webfont","family":"Khand","category":"sans-serif","variants":["300","regular","500","600","700"],"subsets":["devanagari","latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/khand/v6/072zRl4OU9Pinjjkg174LA.ttf","500":"http://fonts.gstatic.com/s/khand/v6/46_p-SqtuMe56nxQdteWxg.ttf","600":"http://fonts.gstatic.com/s/khand/v6/zggGWYIiPJyMTgkfxP_kaA.ttf","700":"http://fonts.gstatic.com/s/khand/v6/0I0UWaN-X5QBmfexpXKhqg.ttf","regular":"http://fonts.gstatic.com/s/khand/v6/HdLdTNFqNIDGJZl1ZEj84w.ttf"}},{"kind":"webfonts#webfont","family":"Khmer","category":"display","variants":["regular"],"subsets":["khmer"],"version":"v10","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/khmer/v10/vWaBJIbaQuBNz02ALIKJ3A.ttf"}},{"kind":"webfonts#webfont","family":"Khula","category":"sans-serif","variants":["300","regular","600","700","800"],"subsets":["devanagari","latin-ext","latin"],"version":"v3","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/khula/v3/_1LySU5Upq-sc4OZ1b_GIw.ttf","600":"http://fonts.gstatic.com/s/khula/v3/4ZH86Hce-aeFDaedTnbkbg.ttf","700":"http://fonts.gstatic.com/s/khula/v3/UGVExGl-Jjs-YPpGv-MZ6w.ttf","800":"http://fonts.gstatic.com/s/khula/v3/Sccp_oOo8FWgbx5smie7xQ.ttf","regular":"http://fonts.gstatic.com/s/khula/v3/izcPIFyCSd16XI1Ak_Wk7Q.ttf"}},{"kind":"webfonts#webfont","family":"Kite One","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/kiteone/v5/8ojWmgUc97m0f_i6sTqLoQ.ttf"}},{"kind":"webfonts#webfont","family":"Knewave","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/knewave/v6/KGHM4XWr4iKnBMqzZLkPBg.ttf"}},{"kind":"webfonts#webfont","family":"Kotta One","category":"serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/kottaone/v5/AB2Q7hVw6niJYDgLvFXu5w.ttf"}},{"kind":"webfonts#webfont","family":"Koulen","category":"display","variants":["regular"],"subsets":["khmer"],"version":"v11","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/koulen/v11/AAYOK8RSRO7FTskTzFuzNw.ttf"}},{"kind":"webfonts#webfont","family":"Kranky","category":"display","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/kranky/v8/C8dxxTS99-fZ84vWk8SDrg.ttf"}},{"kind":"webfonts#webfont","family":"Kreon","category":"serif","variants":["300","regular","700"],"subsets":["latin"],"version":"v11","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/kreon/v11/HKtJRiq5C2zbq5N1IX32sA.ttf","700":"http://fonts.gstatic.com/s/kreon/v11/jh0dSmaPodjxISiblIUTkw.ttf","regular":"http://fonts.gstatic.com/s/kreon/v11/zA_IZt0u0S3cvHJu-n1oEg.ttf"}},{"kind":"webfonts#webfont","family":"Kristi","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/kristi/v9/aRsgBQrkQkMlu4UPSnJyOQ.ttf"}},{"kind":"webfonts#webfont","family":"Krona One","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/kronaone/v5/zcQj4ljqTo166AdourlF9w.ttf"}},{"kind":"webfonts#webfont","family":"Kumar One","category":"display","variants":["regular"],"subsets":["latin-ext","gujarati","latin"],"version":"v2","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/kumarone/v2/YmcJD6Wky1clGYY5OD-BkQ.ttf"}},{"kind":"webfonts#webfont","family":"Kumar One Outline","category":"display","variants":["regular"],"subsets":["latin-ext","gujarati","latin"],"version":"v2","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/kumaroneoutline/v2/hnQF47H-55qiLAGgq7C3QyxhoCTLJoiJ-y-zew8F8j0.ttf"}},{"kind":"webfonts#webfont","family":"Kurale","category":"serif","variants":["regular"],"subsets":["cyrillic","devanagari","latin-ext","cyrillic-ext","latin"],"version":"v3","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/kurale/v3/rxeyIcvQlT4XAWwNbXFCfw.ttf"}},{"kind":"webfonts#webfont","family":"La Belle Aurore","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/labelleaurore/v8/Irdbc4ASuUoWDjd_Wc3md123K2iuuhwZgaKapkyRTY8.ttf"}},{"kind":"webfonts#webfont","family":"Laila","category":"serif","variants":["300","regular","500","600","700"],"subsets":["devanagari","latin-ext","latin"],"version":"v4","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/laila/v4/bLbIVEZF3IWSZ-in72GJvA.ttf","500":"http://fonts.gstatic.com/s/laila/v4/tkf8VtFvW9g3VsxQCA6WOQ.ttf","600":"http://fonts.gstatic.com/s/laila/v4/3EMP2L6JRQ4GaHIxCldCeA.ttf","700":"http://fonts.gstatic.com/s/laila/v4/R7P4z1xjcjecmjZ9GyhqHQ.ttf","regular":"http://fonts.gstatic.com/s/laila/v4/6iYor3edprH7360qtBGoag.ttf"}},{"kind":"webfonts#webfont","family":"Lakki Reddy","category":"handwriting","variants":["regular"],"subsets":["telugu","latin"],"version":"v4","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/lakkireddy/v4/Q5EpFa91FjW37t0FCnedaKCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Lalezar","category":"display","variants":["regular"],"subsets":["arabic","latin-ext","vietnamese","latin"],"version":"v2","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/lalezar/v2/k4_MPf09PGmL7oyGdPKwcg.ttf"}},{"kind":"webfonts#webfont","family":"Lancelot","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/lancelot/v7/XMT7T_oo_MQUGAnU2v-sdA.ttf"}},{"kind":"webfonts#webfont","family":"Lateef","category":"handwriting","variants":["regular"],"subsets":["arabic","latin"],"version":"v11","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/lateef/v11/PAsKCgi1qc7XPwvzo_I-DQ.ttf"}},{"kind":"webfonts#webfont","family":"Lato","category":"sans-serif","variants":["100","100italic","300","300italic","regular","italic","700","700italic","900","900italic"],"subsets":["latin-ext","latin"],"version":"v14","lastModified":"2017-10-11","files":{"100":"http://fonts.gstatic.com/s/lato/v14/Upp-ka9rLQmHYCsFgwL-eg.ttf","300":"http://fonts.gstatic.com/s/lato/v14/Ja02qOppOVq9jeRjWekbHg.ttf","700":"http://fonts.gstatic.com/s/lato/v14/iX_QxBBZLhNj5JHlTzHQzg.ttf","900":"http://fonts.gstatic.com/s/lato/v14/8TPEV6NbYWZlNsXjbYVv7w.ttf","100italic":"http://fonts.gstatic.com/s/lato/v14/zLegi10uS_9-fnUDISl0KA.ttf","300italic":"http://fonts.gstatic.com/s/lato/v14/dVebFcn7EV7wAKwgYestUg.ttf","regular":"http://fonts.gstatic.com/s/lato/v14/h7rISIcQapZBpei-sXwIwg.ttf","italic":"http://fonts.gstatic.com/s/lato/v14/P_dJOFJylV3A870UIOtr0w.ttf","700italic":"http://fonts.gstatic.com/s/lato/v14/WFcZakHrrCKeUJxHA4T_gw.ttf","900italic":"http://fonts.gstatic.com/s/lato/v14/draWperrI7n2xi35Cl08fA.ttf"}},{"kind":"webfonts#webfont","family":"League Script","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/leaguescript/v8/wnRFLvfabWK_DauqppD6vSeUSrabuTpOsMEiRLtKwk0.ttf"}},{"kind":"webfonts#webfont","family":"Leckerli One","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/leckerlione/v8/S2Y_iLrItTu8kIJTkS7DrC3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Ledger","category":"serif","variants":["regular"],"subsets":["cyrillic","latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/ledger/v5/G432jp-tahOfWHbCYkI0jw.ttf"}},{"kind":"webfonts#webfont","family":"Lekton","category":"sans-serif","variants":["regular","italic","700"],"subsets":["latin-ext","latin"],"version":"v8","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/lekton/v8/WZw-uL8WTkx3SBVfTlevXQ.ttf","regular":"http://fonts.gstatic.com/s/lekton/v8/r483JYmxf5PjIm4jVAm8Yg.ttf","italic":"http://fonts.gstatic.com/s/lekton/v8/_UbDIPBA1wDqSbhp-OED7A.ttf"}},{"kind":"webfonts#webfont","family":"Lemon","category":"display","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/lemon/v6/wed1nNu4LNSu-3RoRVUhUw.ttf"}},{"kind":"webfonts#webfont","family":"Lemonada","category":"display","variants":["300","regular","600","700"],"subsets":["arabic","latin-ext","vietnamese","latin"],"version":"v3","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/lemonada/v3/uM3MufQOcwGHuruj4TsXiqCWcynf_cDxXwCLxiixG1c.ttf","600":"http://fonts.gstatic.com/s/lemonada/v3/9Vd4MNKsOxNyLzlfTXdKLqCWcynf_cDxXwCLxiixG1c.ttf","700":"http://fonts.gstatic.com/s/lemonada/v3/9jKcm4hRI511-Dy7FFfQ3aCWcynf_cDxXwCLxiixG1c.ttf","regular":"http://fonts.gstatic.com/s/lemonada/v3/pkzws3AUXmaaAzOi7aydSQ.ttf"}},{"kind":"webfonts#webfont","family":"Libre Barcode 128","category":"display","variants":["regular"],"subsets":["latin"],"version":"v4","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/librebarcode128/v4/mJ_rGOyyL62_i4eysdBvxEaNJhdpbyHQuRiGjlHceQo.ttf"}},{"kind":"webfonts#webfont","family":"Libre Barcode 128 Text","category":"display","variants":["regular"],"subsets":["latin"],"version":"v4","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/librebarcode128text/v4/T1o66XlW_PeuHiRa8wDOJDfWl2h5aCwBu15s5iWPtdk.ttf"}},{"kind":"webfonts#webfont","family":"Libre Barcode 39","category":"display","variants":["regular"],"subsets":["latin"],"version":"v4","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/librebarcode39/v4/tsmYkcVN_FjeCmyWhRNQuDLD7PrtP9qwC5bVQ-6ZBpw.ttf"}},{"kind":"webfonts#webfont","family":"Libre Barcode 39 Extended","category":"display","variants":["regular"],"subsets":["latin"],"version":"v3","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/librebarcode39extended/v3/fb2-vuy0PLrmtXyLBPV4KGYAiLTSvZR2kkYPJthhKEg.ttf"}},{"kind":"webfonts#webfont","family":"Libre Barcode 39 Extended Text","category":"display","variants":["regular"],"subsets":["latin"],"version":"v3","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/librebarcode39extendedtext/v3/wJsqK3E245PKDhdHYS7MabGP_8dGDh0UJYBW4DYg-cv00s133LT-tR5tU-vU7gLU.ttf"}},{"kind":"webfonts#webfont","family":"Libre Barcode 39 Text","category":"display","variants":["regular"],"subsets":["latin"],"version":"v4","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/librebarcode39text/v4/O4inMvtTcDsw_GI-nhT1nhLP3W-fKNeNuxNx_t55A8U.ttf"}},{"kind":"webfonts#webfont","family":"Libre Baskerville","category":"serif","variants":["regular","italic","700"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/librebaskerville/v5/kH7K4InNTm7mmOXXjrA5v-xuswJKUVpBRfYFpz0W3Iw.ttf","regular":"http://fonts.gstatic.com/s/librebaskerville/v5/pR0sBQVcY0JZc_ciXjFsKyyZRYCSvpCzQKuMWnP5NDY.ttf","italic":"http://fonts.gstatic.com/s/librebaskerville/v5/QHIOz1iKF3bIEzRdDFaf5QnhapNS5Oi8FPrBRDLbsW4.ttf"}},{"kind":"webfonts#webfont","family":"Libre Franklin","category":"sans-serif","variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"subsets":["latin-ext","latin"],"version":"v2","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/librefranklin/v2/zrsyK9EytLQ07oRM9IZIsX6Zf0VB_l-7q6pFtcZSRCs.ttf","200":"http://fonts.gstatic.com/s/librefranklin/v2/1_DGDtljMiPWFs5rl_p0yCwKTB4uIbnDXE2hyxZaFPY.ttf","300":"http://fonts.gstatic.com/s/librefranklin/v2/1_DGDtljMiPWFs5rl_p0yMhKJW3W9-339CFS_Lie1us.ttf","500":"http://fonts.gstatic.com/s/librefranklin/v2/1_DGDtljMiPWFs5rl_p0yMBjwrbmxH6gp8HgxjPD8qo.ttf","600":"http://fonts.gstatic.com/s/librefranklin/v2/1_DGDtljMiPWFs5rl_p0yORt4MKdIUjA60qLK3wI2m8.ttf","700":"http://fonts.gstatic.com/s/librefranklin/v2/1_DGDtljMiPWFs5rl_p0yEnStGWSv3WdwjmyyI8xc7Q.ttf","800":"http://fonts.gstatic.com/s/librefranklin/v2/1_DGDtljMiPWFs5rl_p0yKltwG0cydF-uC1kFVv1hts.ttf","900":"http://fonts.gstatic.com/s/librefranklin/v2/1_DGDtljMiPWFs5rl_p0yF7duMYIKwoQ5QsTL00fobw.ttf","100italic":"http://fonts.gstatic.com/s/librefranklin/v2/LHzsuUmxr4UY-IoiG8pRK4gsWNE1DYiT_eIOcNe2Au4.ttf","200italic":"http://fonts.gstatic.com/s/librefranklin/v2/7_V210XP3LBEtEwiCTqho0lu1sSkaQaYEjN61aJ3i1I.ttf","300italic":"http://fonts.gstatic.com/s/librefranklin/v2/7_V210XP3LBEtEwiCTqho14je5cfhxzx5bEvSaoyQQI.ttf","regular":"http://fonts.gstatic.com/s/librefranklin/v2/PFwjf3aDdAQPvNKUrT3U7_fSnedoLXQQjURyDxluu8g.ttf","italic":"http://fonts.gstatic.com/s/librefranklin/v2/zrsyK9EytLQ07oRM9IZIsX5kKxjpQfTpnFf2SrDLxlg.ttf","500italic":"http://fonts.gstatic.com/s/librefranklin/v2/7_V210XP3LBEtEwiCTqho5VcuOW5XbZIr02vW37iuvg.ttf","600italic":"http://fonts.gstatic.com/s/librefranklin/v2/7_V210XP3LBEtEwiCTqhowNPRgU5g4Xymf9hgRWrbNs.ttf","700italic":"http://fonts.gstatic.com/s/librefranklin/v2/7_V210XP3LBEtEwiCTqhow7kn3RFjf4gfwsdsBE-Rf4.ttf","800italic":"http://fonts.gstatic.com/s/librefranklin/v2/7_V210XP3LBEtEwiCTqho80d7u0uHUbaRkK-cNyim1w.ttf","900italic":"http://fonts.gstatic.com/s/librefranklin/v2/7_V210XP3LBEtEwiCTqho0THpHUXJVnEwH4tSjkF0wg.ttf"}},{"kind":"webfonts#webfont","family":"Life Savers","category":"display","variants":["regular","700"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/lifesavers/v7/THQKqChyYUm97rNPVFdGGXe1Pd76Vl7zRpE7NLJQ7XU.ttf","regular":"http://fonts.gstatic.com/s/lifesavers/v7/g49cUDk4Y1P0G5NMkMAm7qCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Lilita One","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/lilitaone/v5/vTxJQjbNV6BCBHx8sGDCVvesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Lily Script One","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/lilyscriptone/v5/uPWsLVW8uiXqIBnE8ZwGPDjVlsJB_M_Q_LtZxsoxvlw.ttf"}},{"kind":"webfonts#webfont","family":"Limelight","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/limelight/v8/5dTfN6igsXjLjOy8QQShcg.ttf"}},{"kind":"webfonts#webfont","family":"Linden Hill","category":"serif","variants":["regular","italic"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/lindenhill/v7/UgsC0txqd-E1yjvjutwm_KCWcynf_cDxXwCLxiixG1c.ttf","italic":"http://fonts.gstatic.com/s/lindenhill/v7/OcS3bZcu8vJvIDH8Zic83keOrDcLawS7-ssYqLr2Xp4.ttf"}},{"kind":"webfonts#webfont","family":"Lobster","category":"display","variants":["regular"],"subsets":["cyrillic","latin-ext","vietnamese","latin"],"version":"v19","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/lobster/v19/9LpJGtNuM1D8FAZ2BkJH2Q.ttf"}},{"kind":"webfonts#webfont","family":"Lobster Two","category":"display","variants":["regular","italic","700","700italic"],"subsets":["latin"],"version":"v10","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/lobstertwo/v10/bmdxOflBqMqjEC0-kGsIiHe1Pd76Vl7zRpE7NLJQ7XU.ttf","regular":"http://fonts.gstatic.com/s/lobstertwo/v10/xb9aY4w9ceh8JRzobID1naCWcynf_cDxXwCLxiixG1c.ttf","italic":"http://fonts.gstatic.com/s/lobstertwo/v10/Ul_16MSbfayQv1I4QhLEoEeOrDcLawS7-ssYqLr2Xp4.ttf","700italic":"http://fonts.gstatic.com/s/lobstertwo/v10/LEkN2_no_6kFvRfiBZ8xpM_zJjSACmk0BRPxQqhnNLU.ttf"}},{"kind":"webfonts#webfont","family":"Londrina Outline","category":"display","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/londrinaoutline/v8/lls08GOa1eT74p072l1AWJmp8DTZ6iHear7UV05iykg.ttf"}},{"kind":"webfonts#webfont","family":"Londrina Shadow","category":"display","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/londrinashadow/v6/dNYuzPS_7eYgXFJBzMoKdbw6Z3rVA5KDSi7aQxS92Nk.ttf"}},{"kind":"webfonts#webfont","family":"Londrina Sketch","category":"display","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/londrinasketch/v6/p7Ai06aT1Ycp_D2fyE3z69d6z_uhFGnpCOifUY1fJQo.ttf"}},{"kind":"webfonts#webfont","family":"Londrina Solid","category":"display","variants":["100","300","regular","900"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/londrinasolid/v6/GNw2ckl4GiWuueFb9dMt4kBPCDJ-ayOoeeQPacAe1lc.ttf","300":"http://fonts.gstatic.com/s/londrinasolid/v6/BDKo9ty0kfh66weuamkY1YGlXQxaR_emZVjFa6K5Gm8.ttf","900":"http://fonts.gstatic.com/s/londrinasolid/v6/BDKo9ty0kfh66weuamkY1cOBCLEQFAwATxcDa2xYLs8.ttf","regular":"http://fonts.gstatic.com/s/londrinasolid/v6/yysorIEiYSBb0ylZjg791MR125CwGqh8XBqkBzea0LA.ttf"}},{"kind":"webfonts#webfont","family":"Lora","category":"serif","variants":["regular","italic","700","700italic"],"subsets":["cyrillic","latin-ext","cyrillic-ext","vietnamese","latin"],"version":"v11","lastModified":"2017-10-11","files":{"700":"http://fonts.gstatic.com/s/lora/v11/enKND5SfzQKkggBA_VnT1A.ttf","regular":"http://fonts.gstatic.com/s/lora/v11/aXJ7KVIGcejEy1abawZazg.ttf","italic":"http://fonts.gstatic.com/s/lora/v11/AN2EZaj2tFRpyveuNn9BOg.ttf","700italic":"http://fonts.gstatic.com/s/lora/v11/ivs9j3kYU65pR9QD9YFdzQ.ttf"}},{"kind":"webfonts#webfont","family":"Love Ya Like A Sister","category":"display","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/loveyalikeasister/v8/LzkxWS-af0Br2Sk_YgSJY-ad1xEP8DQfgfY8MH9aBUg.ttf"}},{"kind":"webfonts#webfont","family":"Loved by the King","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/lovedbytheking/v7/wg03xD4cWigj4YDufLBSr8io2AFEwwMpu7y5KyiyAJc.ttf"}},{"kind":"webfonts#webfont","family":"Lovers Quarrel","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/loversquarrel/v5/gipdZ8b7pKb89MzQLAtJHLHLxci2ElvNEmOB303HLk0.ttf"}},{"kind":"webfonts#webfont","family":"Luckiest Guy","category":"display","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/luckiestguy/v8/5718gH8nDy3hFVihOpkY5C3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Lusitana","category":"serif","variants":["regular","700"],"subsets":["latin"],"version":"v5","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/lusitana/v5/GWtZyUsONxgkdl3Mc1P7FKCWcynf_cDxXwCLxiixG1c.ttf","regular":"http://fonts.gstatic.com/s/lusitana/v5/l1h9VDomkwbdzbPdmLcUIw.ttf"}},{"kind":"webfonts#webfont","family":"Lustria","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/lustria/v5/gXAk0s4ai0X-TAOhYzZd1w.ttf"}},{"kind":"webfonts#webfont","family":"Macondo","category":"display","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/macondo/v6/G6yPNUscRPQ8ufBXs_8yRQ.ttf"}},{"kind":"webfonts#webfont","family":"Macondo Swash Caps","category":"display","variants":["regular"],"subsets":["latin"],"version":"v5","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/macondoswashcaps/v5/SsSR706z-MlvEH7_LS6JAPkkgYRHs6GSG949m-K6x2k.ttf"}},{"kind":"webfonts#webfont","family":"Mada","category":"sans-serif","variants":["200","300","regular","500","600","700","900"],"subsets":["arabic","latin"],"version":"v4","lastModified":"2017-10-10","files":{"200":"http://fonts.gstatic.com/s/mada/v4/sN1aPvvd07F1Sq3qcEQg4w.ttf","300":"http://fonts.gstatic.com/s/mada/v4/P46fye2TPh4fVwALgHSXCA.ttf","500":"http://fonts.gstatic.com/s/mada/v4/PhhDsBi34sP0LptbpS9m6w.ttf","600":"http://fonts.gstatic.com/s/mada/v4/6zYBU-NFokCo3MIlPsWCUw.ttf","700":"http://fonts.gstatic.com/s/mada/v4/VnwndFbEsjy4VcU_Dzedhg.ttf","900":"http://fonts.gstatic.com/s/mada/v4/aCyc9Kc3rOJLL6fV9VfptA.ttf","regular":"http://fonts.gstatic.com/s/mada/v4/io_zUrt5o943T_q45OHLWQ.ttf"}},{"kind":"webfonts#webfont","family":"Magra","category":"sans-serif","variants":["regular","700"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/magra/v5/6fOM5sq5cIn8D0RjX8Lztw.ttf","regular":"http://fonts.gstatic.com/s/magra/v5/hoZ13bwCXBxuGZqAudgc5A.ttf"}},{"kind":"webfonts#webfont","family":"Maiden Orange","category":"display","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/maidenorange/v8/ZhKIA2SPisEwdhW7g0RUWojjx0o0jr6fNXxPgYh_a8Q.ttf"}},{"kind":"webfonts#webfont","family":"Maitree","category":"serif","variants":["200","300","regular","500","600","700"],"subsets":["latin-ext","thai","vietnamese","latin"],"version":"v2","lastModified":"2017-10-10","files":{"200":"http://fonts.gstatic.com/s/maitree/v2/JTlrRs3bVPV4i05cUIx_z_esZW2xOQ-xsNqO47m55DA.ttf","300":"http://fonts.gstatic.com/s/maitree/v2/rEGdABAOaqCHggl37mkWjfesZW2xOQ-xsNqO47m55DA.ttf","500":"http://fonts.gstatic.com/s/maitree/v2/2VHD7TXjRhN4Xu74SEPGdvesZW2xOQ-xsNqO47m55DA.ttf","600":"http://fonts.gstatic.com/s/maitree/v2/uuazDnPwt30gW3cKsG-e0_esZW2xOQ-xsNqO47m55DA.ttf","700":"http://fonts.gstatic.com/s/maitree/v2/cnHhc9fphsL3q-pistN3IPesZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/maitree/v2/SpKVJkAjDAYOr1VkdSRspA.ttf"}},{"kind":"webfonts#webfont","family":"Mako","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/mako/v8/z5zSLmfPlv1uTVAdmJBLXg.ttf"}},{"kind":"webfonts#webfont","family":"Mallanna","category":"sans-serif","variants":["regular"],"subsets":["telugu","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/mallanna/v5/krCTa-CfMbtxqF0689CbuQ.ttf"}},{"kind":"webfonts#webfont","family":"Mandali","category":"sans-serif","variants":["regular"],"subsets":["telugu","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/mandali/v5/0lF8yJ7fkyjXuqtSi5bWbQ.ttf"}},{"kind":"webfonts#webfont","family":"Manuale","category":"serif","variants":["regular","italic","500","500italic","600","600italic","700","700italic"],"subsets":["latin-ext","vietnamese","latin"],"version":"v2","lastModified":"2017-10-09","files":{"500":"http://fonts.gstatic.com/s/manuale/v2/xsy0EZlufjk4A6mPfwX5mfesZW2xOQ-xsNqO47m55DA.ttf","600":"http://fonts.gstatic.com/s/manuale/v2/gDxlyLYdCx7A4S8cf-Z8JvesZW2xOQ-xsNqO47m55DA.ttf","700":"http://fonts.gstatic.com/s/manuale/v2/ut2ZOkBP2LtTYOuh1fI83_esZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/manuale/v2/OL9lzPXATGiZUB8Qdk3tiQ.ttf","italic":"http://fonts.gstatic.com/s/manuale/v2/oRbwaLnv_NzztbUuhNLiBw.ttf","500italic":"http://fonts.gstatic.com/s/manuale/v2/r4TYrL7JhyPxpmVA-JAN0S3USBnSvpkopQaUR-2r7iU.ttf","600italic":"http://fonts.gstatic.com/s/manuale/v2/n25GBfdDLxRFJ-OYtzyorS3USBnSvpkopQaUR-2r7iU.ttf","700italic":"http://fonts.gstatic.com/s/manuale/v2/Lrka5WC7aKfhIA6uk-QS6y3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Marcellus","category":"serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/marcellus/v5/UjiLZzumxWC9whJ86UtaYw.ttf"}},{"kind":"webfonts#webfont","family":"Marcellus SC","category":"serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/marcellussc/v5/_jugwxhkkynrvsfrxVx8gS3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Marck Script","category":"handwriting","variants":["regular"],"subsets":["cyrillic","latin-ext","latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/marckscript/v8/O_D1NAZVOFOobLbVtW3bci3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Margarine","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/margarine/v6/DJnJwIrcO_cGkjSzY3MERw.ttf"}},{"kind":"webfonts#webfont","family":"Marko One","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/markoone/v7/hpP7j861sOAco43iDc4n4w.ttf"}},{"kind":"webfonts#webfont","family":"Marmelad","category":"sans-serif","variants":["regular"],"subsets":["cyrillic","latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/marmelad/v7/jI0_FBlSOIRLL0ePWOhOwQ.ttf"}},{"kind":"webfonts#webfont","family":"Martel","category":"serif","variants":["200","300","regular","600","700","800","900"],"subsets":["devanagari","latin-ext","latin"],"version":"v2","lastModified":"2017-10-10","files":{"200":"http://fonts.gstatic.com/s/martel/v2/_wfGdswZbat7P4tupHLA1w.ttf","300":"http://fonts.gstatic.com/s/martel/v2/SghoV2F2VPdVU3P0a4fa9w.ttf","600":"http://fonts.gstatic.com/s/martel/v2/Kt9uPhH1PvUwuZ5Y6zuAMQ.ttf","700":"http://fonts.gstatic.com/s/martel/v2/4OzIiKB5wE36xXL2U0vzWQ.ttf","800":"http://fonts.gstatic.com/s/martel/v2/RVF8drcQoRkRL7l_ZkpTlQ.ttf","900":"http://fonts.gstatic.com/s/martel/v2/iS0YUpFJoiLRlnyl40rpEA.ttf","regular":"http://fonts.gstatic.com/s/martel/v2/9ALu5czkaaf5zsYk6GJEnQ.ttf"}},{"kind":"webfonts#webfont","family":"Martel Sans","category":"sans-serif","variants":["200","300","regular","600","700","800","900"],"subsets":["devanagari","latin-ext","latin"],"version":"v4","lastModified":"2017-10-10","files":{"200":"http://fonts.gstatic.com/s/martelsans/v4/7ajme85aKKx_SCWF59ImQEnzyIngrzGjGh22wPb6cGM.ttf","300":"http://fonts.gstatic.com/s/martelsans/v4/7ajme85aKKx_SCWF59ImQC9-WlPSxbfiI49GsXo3q0g.ttf","600":"http://fonts.gstatic.com/s/martelsans/v4/7ajme85aKKx_SCWF59ImQJZ7xm-Bj30Bj2KNdXDzSZg.ttf","700":"http://fonts.gstatic.com/s/martelsans/v4/7ajme85aKKx_SCWF59ImQHe1Pd76Vl7zRpE7NLJQ7XU.ttf","800":"http://fonts.gstatic.com/s/martelsans/v4/7ajme85aKKx_SCWF59ImQA89PwPrYLaRFJ-HNCU9NbA.ttf","900":"http://fonts.gstatic.com/s/martelsans/v4/7ajme85aKKx_SCWF59ImQCenaqEuufTBk9XMKnKmgDA.ttf","regular":"http://fonts.gstatic.com/s/martelsans/v4/91c8DPDZncMc0RFfhmc2RqCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Marvel","category":"sans-serif","variants":["regular","italic","700","700italic"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/marvel/v7/WrHDBL1RupWGo2UcdgxB3Q.ttf","regular":"http://fonts.gstatic.com/s/marvel/v7/Fg1dO8tWVb-MlyqhsbXEkg.ttf","italic":"http://fonts.gstatic.com/s/marvel/v7/HzyjFB-oR5usrc7Lxz9g8w.ttf","700italic":"http://fonts.gstatic.com/s/marvel/v7/Gzf5NT09Y6xskdQRj2kz1qCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Mate","category":"serif","variants":["regular","italic"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/mate/v6/ooFviPcJ6hZP5bAE71Cawg.ttf","italic":"http://fonts.gstatic.com/s/mate/v6/5XwW6_cbisGvCX5qmNiqfA.ttf"}},{"kind":"webfonts#webfont","family":"Mate SC","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/matesc/v6/-YkIT2TZoPZF6pawKzDpWw.ttf"}},{"kind":"webfonts#webfont","family":"Maven Pro","category":"sans-serif","variants":["regular","500","700","900"],"subsets":["latin-ext","vietnamese","latin"],"version":"v11","lastModified":"2017-10-10","files":{"500":"http://fonts.gstatic.com/s/mavenpro/v11/SQVfzoJBbj9t3aVcmbspRi3USBnSvpkopQaUR-2r7iU.ttf","700":"http://fonts.gstatic.com/s/mavenpro/v11/uDssvmXgp7Nj3i336k_dSi3USBnSvpkopQaUR-2r7iU.ttf","900":"http://fonts.gstatic.com/s/mavenpro/v11/-91TwiFzqeL1F7Kh91APwS3USBnSvpkopQaUR-2r7iU.ttf","regular":"http://fonts.gstatic.com/s/mavenpro/v11/sqPJIFG4gqsjl-0q_46Gbw.ttf"}},{"kind":"webfonts#webfont","family":"McLaren","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/mclaren/v5/OprvTGxaiINBKW_1_U0eoQ.ttf"}},{"kind":"webfonts#webfont","family":"Meddon","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v10","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/meddon/v10/f8zJO98uu2EtSj9p7ci9RA.ttf"}},{"kind":"webfonts#webfont","family":"MedievalSharp","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/medievalsharp/v9/85X_PjV6tftJ0-rX7KYQkOe45sJkivqprK7VkUlzfg0.ttf"}},{"kind":"webfonts#webfont","family":"Medula One","category":"display","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/medulaone/v7/AasPgDQak81dsTGQHc5zUPesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Meera Inimai","category":"sans-serif","variants":["regular"],"subsets":["tamil","latin"],"version":"v2","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/meerainimai/v2/fWbdJc2ZVZnWCi06NRCxDy3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Megrim","category":"display","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/megrim/v8/e-9jVUC9lv1zxaFQARuftw.ttf"}},{"kind":"webfonts#webfont","family":"Meie Script","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/meiescript/v5/oTIWE5MmPye-rCyVp_6KEqCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Merienda","category":"handwriting","variants":["regular","700"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/merienda/v5/GlwcvRLlgiVE2MBFQ4r0sKCWcynf_cDxXwCLxiixG1c.ttf","regular":"http://fonts.gstatic.com/s/merienda/v5/MYY6Og1qZlOQtPW2G95Y3A.ttf"}},{"kind":"webfonts#webfont","family":"Merienda One","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/meriendaone/v8/bCA-uDdUx6nTO8SjzCLXvS3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Merriweather","category":"serif","variants":["300","300italic","regular","italic","700","700italic","900","900italic"],"subsets":["cyrillic","latin-ext","cyrillic-ext","latin"],"version":"v18","lastModified":"2017-10-11","files":{"300":"http://fonts.gstatic.com/s/merriweather/v18/ZvcMqxEwPfh2qDWBPxn6nqcQoVhARpoaILP7amxE_8g.ttf","700":"http://fonts.gstatic.com/s/merriweather/v18/ZvcMqxEwPfh2qDWBPxn6nkD2ttfZwueP-QU272T9-k4.ttf","900":"http://fonts.gstatic.com/s/merriweather/v18/ZvcMqxEwPfh2qDWBPxn6nqObDOjC3UL77puoeHsE3fw.ttf","300italic":"http://fonts.gstatic.com/s/merriweather/v18/EYh7Vl4ywhowqULgRdYwICna0FLWfcB-J_SAYmcAXaI.ttf","regular":"http://fonts.gstatic.com/s/merriweather/v18/RFda8w1V0eDZheqfcyQ4EC3USBnSvpkopQaUR-2r7iU.ttf","italic":"http://fonts.gstatic.com/s/merriweather/v18/So5lHxHT37p2SS4-t60SlPMZXuCXbOrAvx5R0IT5Oyo.ttf","700italic":"http://fonts.gstatic.com/s/merriweather/v18/EYh7Vl4ywhowqULgRdYwIPAs9-1nE9qOqhChW0m4nDE.ttf","900italic":"http://fonts.gstatic.com/s/merriweather/v18/EYh7Vl4ywhowqULgRdYwIBd0_s6jQr9r5s5OZYvtzBY.ttf"}},{"kind":"webfonts#webfont","family":"Merriweather Sans","category":"sans-serif","variants":["300","300italic","regular","italic","700","700italic","800","800italic"],"subsets":["latin-ext","latin"],"version":"v9","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/merriweathersans/v9/6LmGj5dOJopQKEkt88Gowan5N8K-_DP0e9e_v51obXQ.ttf","700":"http://fonts.gstatic.com/s/merriweathersans/v9/6LmGj5dOJopQKEkt88GowbqxG25nQNOioCZSK4sU-CA.ttf","800":"http://fonts.gstatic.com/s/merriweathersans/v9/6LmGj5dOJopQKEkt88GowYufzO2zUYSj5LqoJ3UGkco.ttf","300italic":"http://fonts.gstatic.com/s/merriweathersans/v9/nAqt4hiqwq3tzCecpgPmVdytE4nGXk2hYD5nJ740tBw.ttf","regular":"http://fonts.gstatic.com/s/merriweathersans/v9/AKu1CjQ4qnV8MUltkAX3sOAj_ty82iuwwDTNEYXGiyQ.ttf","italic":"http://fonts.gstatic.com/s/merriweathersans/v9/3Mz4hOHzs2npRMG3B1ascZ32VBCoA_HLsn85tSWZmdo.ttf","700italic":"http://fonts.gstatic.com/s/merriweathersans/v9/nAqt4hiqwq3tzCecpgPmVbuqAJxizi8Dk_SK5et7kMg.ttf","800italic":"http://fonts.gstatic.com/s/merriweathersans/v9/nAqt4hiqwq3tzCecpgPmVdDmPrYMy3aZO4LmnZsxTQw.ttf"}},{"kind":"webfonts#webfont","family":"Metal","category":"display","variants":["regular"],"subsets":["khmer"],"version":"v10","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/metal/v10/zA3UOP13ooQcxjv04BZX5g.ttf"}},{"kind":"webfonts#webfont","family":"Metal Mania","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/metalmania/v7/isriV_rAUgj6bPWPN6l9QKCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Metamorphous","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/metamorphous/v7/wGqUKXRinIYggz-BTRU9ei3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Metrophobic","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v10","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/metrophobic/v10/SaglWZWCrrv_D17u1i4v_aCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Michroma","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/michroma/v8/0c2XrW81_QsiKV8T9thumA.ttf"}},{"kind":"webfonts#webfont","family":"Milonga","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/milonga/v5/dzNdIUSTGFmy2ahovDRcWg.ttf"}},{"kind":"webfonts#webfont","family":"Miltonian","category":"display","variants":["regular"],"subsets":["latin"],"version":"v11","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/miltonian/v11/Z4HrYZyqm0BnNNzcCUfzoQ.ttf"}},{"kind":"webfonts#webfont","family":"Miltonian Tattoo","category":"display","variants":["regular"],"subsets":["latin"],"version":"v12","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/miltoniantattoo/v12/1oU_8OGYwW46eh02YHydn2uk0YtI6thZkz1Hmh-odwg.ttf"}},{"kind":"webfonts#webfont","family":"Miniver","category":"display","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/miniver/v6/4yTQohOH_cWKRS5laRFhYg.ttf"}},{"kind":"webfonts#webfont","family":"Miriam Libre","category":"sans-serif","variants":["regular","700"],"subsets":["hebrew","latin-ext","latin"],"version":"v3","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/miriamlibre/v3/FLc0J-Gdn8ynDWUkeeesAED2ttfZwueP-QU272T9-k4.ttf","regular":"http://fonts.gstatic.com/s/miriamlibre/v3/Ljtpu8zR5iJWmlN3Faba5S3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Mirza","category":"display","variants":["regular","500","600","700"],"subsets":["arabic","latin-ext","latin"],"version":"v3","lastModified":"2017-10-10","files":{"500":"http://fonts.gstatic.com/s/mirza/v3/dT3HbZoBCx1xbU7PnFEFyQ.ttf","600":"http://fonts.gstatic.com/s/mirza/v3/6T4uh2Zti9P6Eq_gbAYvVQ.ttf","700":"http://fonts.gstatic.com/s/mirza/v3/b47CZDHoZdhnplmDpZymFw.ttf","regular":"http://fonts.gstatic.com/s/mirza/v3/8oe36Xbgj9BMSLJBaZ8VAQ.ttf"}},{"kind":"webfonts#webfont","family":"Miss Fajardose","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/missfajardose/v7/WcXjlQPKn6nBfr8LY3ktNu6rPKfVZo7L2bERcf0BDns.ttf"}},{"kind":"webfonts#webfont","family":"Mitr","category":"sans-serif","variants":["200","300","regular","500","600","700"],"subsets":["latin-ext","thai","vietnamese","latin"],"version":"v3","lastModified":"2017-10-10","files":{"200":"http://fonts.gstatic.com/s/mitr/v3/GCzZRAhweqJhxrmM0bPztg.ttf","300":"http://fonts.gstatic.com/s/mitr/v3/A61rQ_y9i8Ja__oFN7KxiQ.ttf","500":"http://fonts.gstatic.com/s/mitr/v3/r_Z6yrJJ0zmkGAqxqjlLRg.ttf","600":"http://fonts.gstatic.com/s/mitr/v3/42l66tb_XMxM97GKatU9Ng.ttf","700":"http://fonts.gstatic.com/s/mitr/v3/V-V7Rul5HOZ651R4Tml2Lw.ttf","regular":"http://fonts.gstatic.com/s/mitr/v3/vKMd72X2iT4iBo5GvdCa_A.ttf"}},{"kind":"webfonts#webfont","family":"Modak","category":"display","variants":["regular"],"subsets":["devanagari","latin-ext","latin"],"version":"v3","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/modak/v3/lMsN0QIKid-pCPvL0hH4nw.ttf"}},{"kind":"webfonts#webfont","family":"Modern Antiqua","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/modernantiqua/v7/8qX_tr6Xzy4t9fvZDXPkh6rFJ4O13IHVxZbM6yoslpo.ttf"}},{"kind":"webfonts#webfont","family":"Mogra","category":"display","variants":["regular"],"subsets":["latin-ext","gujarati","latin"],"version":"v4","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/mogra/v4/gIxQBn9PseDaI0D4FnOiBQ.ttf"}},{"kind":"webfonts#webfont","family":"Molengo","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/molengo/v8/jcjgeGuzv83I55AzOTpXNQ.ttf"}},{"kind":"webfonts#webfont","family":"Molle","category":"handwriting","variants":["italic"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"italic":"http://fonts.gstatic.com/s/molle/v6/9XTdCsjPXifLqo5et-YoGA.ttf"}},{"kind":"webfonts#webfont","family":"Monda","category":"sans-serif","variants":["regular","700"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/monda/v7/EVOzZUyc_j1w2GuTgTAW1g.ttf","regular":"http://fonts.gstatic.com/s/monda/v7/qFMHZ9zvR6B_gnoIgosPrw.ttf"}},{"kind":"webfonts#webfont","family":"Monofett","category":"display","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/monofett/v7/C6K5L799Rgxzg2brgOaqAw.ttf"}},{"kind":"webfonts#webfont","family":"Monoton","category":"display","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/monoton/v7/aCz8ja_bE4dg-7agSvExdw.ttf"}},{"kind":"webfonts#webfont","family":"Monsieur La Doulaise","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/monsieurladoulaise/v6/IMAdMj6Eq9jZ46CPctFtMKP61oAqTJXlx5ZVOBmcPdM.ttf"}},{"kind":"webfonts#webfont","family":"Montaga","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/montaga/v5/PwTwUboiD-M4-mFjZfJs2A.ttf"}},{"kind":"webfonts#webfont","family":"Montez","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/montez/v8/kx58rLOWQQLGFM4pDHv5Ng.ttf"}},{"kind":"webfonts#webfont","family":"Montserrat","category":"sans-serif","variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"subsets":["latin-ext","vietnamese","latin"],"version":"v11","lastModified":"2017-10-11","files":{"100":"http://fonts.gstatic.com/s/montserrat/v11/CdKWaRAal2Bxq9mORLKRRS3USBnSvpkopQaUR-2r7iU.ttf","200":"http://fonts.gstatic.com/s/montserrat/v11/eWRmKHdPNWGn_iFyeEYja2eudeTO44zf-ht3k-KNzwg.ttf","300":"http://fonts.gstatic.com/s/montserrat/v11/IVeH6A3MiFyaSEiudUMXE0eOrDcLawS7-ssYqLr2Xp4.ttf","500":"http://fonts.gstatic.com/s/montserrat/v11/BYPM-GE291ZjIXBWrtCwepp-63r6doWhTEbsfBIRJ7A.ttf","600":"http://fonts.gstatic.com/s/montserrat/v11/q2OIMsAtXEkOulLQVdSl0_pTEJqju4Hz1txDWij77d4.ttf","700":"http://fonts.gstatic.com/s/montserrat/v11/IQHow_FEYlDC4Gzy_m8fcgJKKGfqHaYFsRG-T3ceEVo.ttf","800":"http://fonts.gstatic.com/s/montserrat/v11/H8_7oktkjVeeX06kbAvc0Kk3bhPBSBJ0bSJQ6acL-0g.ttf","900":"http://fonts.gstatic.com/s/montserrat/v11/aEu-9ATAroJ1iN4zmQ55Bp0EAVxt0G0biEntp43Qt6E.ttf","100italic":"http://fonts.gstatic.com/s/montserrat/v11/1809Y0aW9bpFOPXsQTFwf8SVQ0giZ-l_NELu3lgGyYw.ttf","200italic":"http://fonts.gstatic.com/s/montserrat/v11/zhwB3-BAdyKDf0geWr9FtwQm5IkIgNCodAfQb4ovl18.ttf","300italic":"http://fonts.gstatic.com/s/montserrat/v11/zhwB3-BAdyKDf0geWr9Ft6cQoVhARpoaILP7amxE_8g.ttf","regular":"http://fonts.gstatic.com/s/montserrat/v11/Kqy6-utIpx_30Xzecmeo8_esZW2xOQ-xsNqO47m55DA.ttf","italic":"http://fonts.gstatic.com/s/montserrat/v11/-iqwlckIhsmvkx0N6rwPmi3USBnSvpkopQaUR-2r7iU.ttf","500italic":"http://fonts.gstatic.com/s/montserrat/v11/zhwB3-BAdyKDf0geWr9Ft5MQuUSAwdHsY8ov_6tk1oA.ttf","600italic":"http://fonts.gstatic.com/s/montserrat/v11/zhwB3-BAdyKDf0geWr9Ft2v8CylhIUtwUiYO7Z2wXbE.ttf","700italic":"http://fonts.gstatic.com/s/montserrat/v11/zhwB3-BAdyKDf0geWr9Ft0D2ttfZwueP-QU272T9-k4.ttf","800italic":"http://fonts.gstatic.com/s/montserrat/v11/zhwB3-BAdyKDf0geWr9Ft_qsay_1ZmRGmC8pVRdIfAg.ttf","900italic":"http://fonts.gstatic.com/s/montserrat/v11/zhwB3-BAdyKDf0geWr9Ft6ObDOjC3UL77puoeHsE3fw.ttf"}},{"kind":"webfonts#webfont","family":"Montserrat Alternates","category":"sans-serif","variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"subsets":["latin-ext","vietnamese","latin"],"version":"v8","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/montserratalternates/v8/oqQkJ7FUCF9bJw9oNhwpltmjtuu7N1WAenNR-bns1HU.ttf","200":"http://fonts.gstatic.com/s/montserratalternates/v8/YENqOGAVzwIHjYNjmKuAZrWzJnWnTj1NV2WEtcqW8F0.ttf","300":"http://fonts.gstatic.com/s/montserratalternates/v8/YENqOGAVzwIHjYNjmKuAZoE9JAqK0NEjKMCIBssy61I.ttf","500":"http://fonts.gstatic.com/s/montserratalternates/v8/YENqOGAVzwIHjYNjmKuAZkLT1bEhWimL9YDPt6og4ow.ttf","600":"http://fonts.gstatic.com/s/montserratalternates/v8/YENqOGAVzwIHjYNjmKuAZlzJBia8MVcXq42LmpYhWMY.ttf","700":"http://fonts.gstatic.com/s/montserratalternates/v8/YENqOGAVzwIHjYNjmKuAZpeqBKvsAhm-s2I4RVSXFfc.ttf","800":"http://fonts.gstatic.com/s/montserratalternates/v8/YENqOGAVzwIHjYNjmKuAZkG2AOFTt9I0BIk1fL0aWvI.ttf","900":"http://fonts.gstatic.com/s/montserratalternates/v8/YENqOGAVzwIHjYNjmKuAZqjHT7NF_e7B-hWEBx2SqPI.ttf","100italic":"http://fonts.gstatic.com/s/montserratalternates/v8/3-rFIqHz_U7TAmWg7RcpLzob9T7De5a9EmE7cInrugI.ttf","200italic":"http://fonts.gstatic.com/s/montserratalternates/v8/AXzeb8s80Wvg1Wkw1cVlATSYqyfLbk4Wyr4DDJHtpar3rGVtsTkPsbDajuO5ueQw.ttf","300italic":"http://fonts.gstatic.com/s/montserratalternates/v8/AXzeb8s80Wvg1Wkw1cVlAX0Ksah31OxOJpZejHsaXyX3rGVtsTkPsbDajuO5ueQw.ttf","regular":"http://fonts.gstatic.com/s/montserratalternates/v8/z2n1Sjxk9souK3HCtdHuklPuEVRGaG9GCQnmM16YWq0.ttf","italic":"http://fonts.gstatic.com/s/montserratalternates/v8/oqQkJ7FUCF9bJw9oNhwpliKJhVBtn9MynHVBPiS2bkc.ttf","500italic":"http://fonts.gstatic.com/s/montserratalternates/v8/AXzeb8s80Wvg1Wkw1cVlAbq1yxDcj1rkVNifBkzxbjz3rGVtsTkPsbDajuO5ueQw.ttf","600italic":"http://fonts.gstatic.com/s/montserratalternates/v8/AXzeb8s80Wvg1Wkw1cVlAdzE96w6fJMDbKTKS-tt8C_3rGVtsTkPsbDajuO5ueQw.ttf","700italic":"http://fonts.gstatic.com/s/montserratalternates/v8/AXzeb8s80Wvg1Wkw1cVlAVeYZ2vsofSkgKvS_YtoH2b3rGVtsTkPsbDajuO5ueQw.ttf","800italic":"http://fonts.gstatic.com/s/montserratalternates/v8/AXzeb8s80Wvg1Wkw1cVlAbM_h-OHjcDf1XWbHqSgRF73rGVtsTkPsbDajuO5ueQw.ttf","900italic":"http://fonts.gstatic.com/s/montserratalternates/v8/AXzeb8s80Wvg1Wkw1cVlAX18ggQg0KDcknRVFWguAv_3rGVtsTkPsbDajuO5ueQw.ttf"}},{"kind":"webfonts#webfont","family":"Montserrat Subrayada","category":"sans-serif","variants":["regular","700"],"subsets":["latin"],"version":"v5","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/montserratsubrayada/v5/wf-IKpsHcfm0C9uaz9IeGJvEcF1LWArDbGWgKZSH9go.ttf","regular":"http://fonts.gstatic.com/s/montserratsubrayada/v5/nzoCWCz0e9c7Mr2Gl8bbgrJymm6ilkk9f0nDA_sC_qk.ttf"}},{"kind":"webfonts#webfont","family":"Moul","category":"display","variants":["regular"],"subsets":["khmer"],"version":"v9","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/moul/v9/Kb0ALQnfyXawP1a_P_gpTQ.ttf"}},{"kind":"webfonts#webfont","family":"Moulpali","category":"display","variants":["regular"],"subsets":["khmer"],"version":"v10","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/moulpali/v10/diD74BprGhmVkJoerKmrKA.ttf"}},{"kind":"webfonts#webfont","family":"Mountains of Christmas","category":"display","variants":["regular","700"],"subsets":["latin"],"version":"v10","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/mountainsofchristmas/v10/PymufKtHszoLrY0uiAYKNM9cPTbSBTrQyTa5TWAe3vE.ttf","regular":"http://fonts.gstatic.com/s/mountainsofchristmas/v10/dVGBFPwd6G44IWDbQtPew2Auds3jz1Fxb61CgfaGDr4.ttf"}},{"kind":"webfonts#webfont","family":"Mouse Memoirs","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/mousememoirs/v5/NBFaaJFux_j0AQbAsW3QeH8f0n03UdmQgF_CLvNR2vg.ttf"}},{"kind":"webfonts#webfont","family":"Mr Bedfort","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/mrbedfort/v6/81bGgHTRikLs_puEGshl7_esZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Mr Dafoe","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/mrdafoe/v6/s32Q1S6ZkT7EaX53mUirvQ.ttf"}},{"kind":"webfonts#webfont","family":"Mr De Haviland","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/mrdehaviland/v6/fD8y4L6PJ4vqDk7z8Y8e27v4lrhng1lzu7-weKO6cw8.ttf"}},{"kind":"webfonts#webfont","family":"Mrs Saint Delafield","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/mrssaintdelafield/v5/vuWagfFT7bj9lFtZOFBwmjHMBelqWf3tJeGyts2SmKU.ttf"}},{"kind":"webfonts#webfont","family":"Mrs Sheppards","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/mrssheppards/v6/2WFsWMV3VUeCz6UVH7UjCn8f0n03UdmQgF_CLvNR2vg.ttf"}},{"kind":"webfonts#webfont","family":"Mukta","category":"sans-serif","variants":["200","300","regular","500","600","700","800"],"subsets":["devanagari","latin-ext","latin"],"version":"v4","lastModified":"2017-10-10","files":{"200":"http://fonts.gstatic.com/s/mukta/v4/tDVdzIQ8YtIPQkpeTPxaRw.ttf","300":"http://fonts.gstatic.com/s/mukta/v4/XBYaFkW7WJ8kqXq2Yt41cw.ttf","500":"http://fonts.gstatic.com/s/mukta/v4/lQPvn1FqPa-GCFx-cAuBHg.ttf","600":"http://fonts.gstatic.com/s/mukta/v4/NcubiFyhit9Cmsn9p9y9Xg.ttf","700":"http://fonts.gstatic.com/s/mukta/v4/TZMKZcvgKiI-bWO9PoMI7w.ttf","800":"http://fonts.gstatic.com/s/mukta/v4/QJVapEVpFpMfDYz2xuPBmQ.ttf","regular":"http://fonts.gstatic.com/s/mukta/v4/7dmf9fx1PuHBtLhSPnZzrQ.ttf"}},{"kind":"webfonts#webfont","family":"Mukta Mahee","category":"sans-serif","variants":["200","300","regular","500","600","700","800"],"subsets":["latin-ext","gurmukhi","latin"],"version":"v2","lastModified":"2017-10-09","files":{"200":"http://fonts.gstatic.com/s/muktamahee/v2/kolKnxd29wydc4yTvsM4p0nzyIngrzGjGh22wPb6cGM.ttf","300":"http://fonts.gstatic.com/s/muktamahee/v2/kolKnxd29wydc4yTvsM4py9-WlPSxbfiI49GsXo3q0g.ttf","500":"http://fonts.gstatic.com/s/muktamahee/v2/kolKnxd29wydc4yTvsM4p8CNfqCYlB_eIx7H1TVXe60.ttf","600":"http://fonts.gstatic.com/s/muktamahee/v2/kolKnxd29wydc4yTvsM4p5Z7xm-Bj30Bj2KNdXDzSZg.ttf","700":"http://fonts.gstatic.com/s/muktamahee/v2/kolKnxd29wydc4yTvsM4p3e1Pd76Vl7zRpE7NLJQ7XU.ttf","800":"http://fonts.gstatic.com/s/muktamahee/v2/kolKnxd29wydc4yTvsM4pw89PwPrYLaRFJ-HNCU9NbA.ttf","regular":"http://fonts.gstatic.com/s/muktamahee/v2/aY_0-ayxlrgq21R8UWTI96CWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Mukta Malar","category":"sans-serif","variants":["200","300","regular","500","600","700","800"],"subsets":["latin-ext","tamil","latin"],"version":"v3","lastModified":"2017-10-09","files":{"200":"http://fonts.gstatic.com/s/muktamalar/v3/1-N_tlWLJvzngraerf18eUnzyIngrzGjGh22wPb6cGM.ttf","300":"http://fonts.gstatic.com/s/muktamalar/v3/1-N_tlWLJvzngraerf18eS9-WlPSxbfiI49GsXo3q0g.ttf","500":"http://fonts.gstatic.com/s/muktamalar/v3/1-N_tlWLJvzngraerf18ecCNfqCYlB_eIx7H1TVXe60.ttf","600":"http://fonts.gstatic.com/s/muktamalar/v3/1-N_tlWLJvzngraerf18eZZ7xm-Bj30Bj2KNdXDzSZg.ttf","700":"http://fonts.gstatic.com/s/muktamalar/v3/1-N_tlWLJvzngraerf18eXe1Pd76Vl7zRpE7NLJQ7XU.ttf","800":"http://fonts.gstatic.com/s/muktamalar/v3/1-N_tlWLJvzngraerf18eQ89PwPrYLaRFJ-HNCU9NbA.ttf","regular":"http://fonts.gstatic.com/s/muktamalar/v3/xdx0fv5-ENz5PCzqiKyrqqCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Mukta Vaani","category":"sans-serif","variants":["200","300","regular","500","600","700","800"],"subsets":["latin-ext","gujarati","latin"],"version":"v4","lastModified":"2017-10-10","files":{"200":"http://fonts.gstatic.com/s/muktavaani/v4/X9qyC4rK_D9w1AvSv0mw_0nzyIngrzGjGh22wPb6cGM.ttf","300":"http://fonts.gstatic.com/s/muktavaani/v4/X9qyC4rK_D9w1AvSv0mw_y9-WlPSxbfiI49GsXo3q0g.ttf","500":"http://fonts.gstatic.com/s/muktavaani/v4/X9qyC4rK_D9w1AvSv0mw_8CNfqCYlB_eIx7H1TVXe60.ttf","600":"http://fonts.gstatic.com/s/muktavaani/v4/X9qyC4rK_D9w1AvSv0mw_5Z7xm-Bj30Bj2KNdXDzSZg.ttf","700":"http://fonts.gstatic.com/s/muktavaani/v4/X9qyC4rK_D9w1AvSv0mw_3e1Pd76Vl7zRpE7NLJQ7XU.ttf","800":"http://fonts.gstatic.com/s/muktavaani/v4/X9qyC4rK_D9w1AvSv0mw_w89PwPrYLaRFJ-HNCU9NbA.ttf","regular":"http://fonts.gstatic.com/s/muktavaani/v4/knS0wTOFNOwOD4CZrdHIxKCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Muli","category":"sans-serif","variants":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","800","800italic","900","900italic"],"subsets":["latin-ext","vietnamese","latin"],"version":"v11","lastModified":"2017-10-11","files":{"200":"http://fonts.gstatic.com/s/muli/v11/59Vi0Dm-YSaaKxRiSKrm0w.ttf","300":"http://fonts.gstatic.com/s/muli/v11/VJw4F3ZHRAZ7Hmg3nQu5YQ.ttf","600":"http://fonts.gstatic.com/s/muli/v11/O4zVJyE-wzb2CQjcHkw-Xg.ttf","700":"http://fonts.gstatic.com/s/muli/v11/n0UfHdYd8jlanPB1sJ0WYQ.ttf","800":"http://fonts.gstatic.com/s/muli/v11/QdHPibssQgzNly7JkF7wdw.ttf","900":"http://fonts.gstatic.com/s/muli/v11/RcGfHFZUYLsFj9c3uAb4Gg.ttf","200italic":"http://fonts.gstatic.com/s/muli/v11/ZV7FMcmPA9u6IXfXrqyybA.ttf","300italic":"http://fonts.gstatic.com/s/muli/v11/s-NKMCru8HiyjEt0ZDoBoA.ttf","regular":"http://fonts.gstatic.com/s/muli/v11/KJiP6KznxbALQgfJcDdPAw.ttf","italic":"http://fonts.gstatic.com/s/muli/v11/Cg0K_IWANs9xkNoxV7H1_w.ttf","600italic":"http://fonts.gstatic.com/s/muli/v11/xasdEbMzFtnmERn70-CN-A.ttf","700italic":"http://fonts.gstatic.com/s/muli/v11/9vQS_qOVbbe4j6LkPjCG1g.ttf","800italic":"http://fonts.gstatic.com/s/muli/v11/jbD7XyPvLT1oJBLbEcQmmg.ttf","900italic":"http://fonts.gstatic.com/s/muli/v11/r4hqeWwjqEvTncJsq5KCSg.ttf"}},{"kind":"webfonts#webfont","family":"Mystery Quest","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/mysteryquest/v5/467jJvg0c7HgucvBB9PLDyeUSrabuTpOsMEiRLtKwk0.ttf"}},{"kind":"webfonts#webfont","family":"NTR","category":"sans-serif","variants":["regular"],"subsets":["telugu","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/ntr/v5/e7H4ZLtGfVOYyOupo6T12g.ttf"}},{"kind":"webfonts#webfont","family":"Neucha","category":"handwriting","variants":["regular"],"subsets":["cyrillic","latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/neucha/v9/bijdhB-TzQdtpl0ykhGh4Q.ttf"}},{"kind":"webfonts#webfont","family":"Neuton","category":"serif","variants":["200","300","regular","italic","700","800"],"subsets":["latin-ext","latin"],"version":"v10","lastModified":"2017-10-10","files":{"200":"http://fonts.gstatic.com/s/neuton/v10/DA3Mkew3XqSkPpi1f4tJow.ttf","300":"http://fonts.gstatic.com/s/neuton/v10/xrc_aZ2hx-gdeV0mlY8Vww.ttf","700":"http://fonts.gstatic.com/s/neuton/v10/gnWpkWY7DirkKiovncYrfg.ttf","800":"http://fonts.gstatic.com/s/neuton/v10/XPzBQV4lY6enLxQG9cF1jw.ttf","regular":"http://fonts.gstatic.com/s/neuton/v10/9R-MGIOQUdjAVeB6nE6PcQ.ttf","italic":"http://fonts.gstatic.com/s/neuton/v10/uVMT3JOB5BNFi3lgPp6kEg.ttf"}},{"kind":"webfonts#webfont","family":"New Rocker","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/newrocker/v6/EFUWzHJedEkpW399zYOHofesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"News Cycle","category":"sans-serif","variants":["regular","700"],"subsets":["latin-ext","latin"],"version":"v14","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/newscycle/v14/G28Ny31cr5orMqEQy6ljtwJKKGfqHaYFsRG-T3ceEVo.ttf","regular":"http://fonts.gstatic.com/s/newscycle/v14/xyMAr8VfiUzIOvS1abHJO_esZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Niconne","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/niconne/v7/ZA-mFw2QNXodx5y7kfELBg.ttf"}},{"kind":"webfonts#webfont","family":"Nixie One","category":"display","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/nixieone/v8/h6kQfmzm0Shdnp3eswRaqQ.ttf"}},{"kind":"webfonts#webfont","family":"Nobile","category":"sans-serif","variants":["regular","italic","500","500italic","700","700italic"],"subsets":["latin-ext","latin"],"version":"v9","lastModified":"2017-10-10","files":{"500":"http://fonts.gstatic.com/s/nobile/v9/el-1JDqzLC5ePMPiB2COqQ.ttf","700":"http://fonts.gstatic.com/s/nobile/v9/9p6M-Yrg_r_QPmSD1skrOg.ttf","regular":"http://fonts.gstatic.com/s/nobile/v9/lC_lPi1ddtN38iXTCRh6ow.ttf","italic":"http://fonts.gstatic.com/s/nobile/v9/vGmrpKzWQQSrb-PR6FWBIA.ttf","500italic":"http://fonts.gstatic.com/s/nobile/v9/y2A1jpvs_uHcnmIZDscDC6CWcynf_cDxXwCLxiixG1c.ttf","700italic":"http://fonts.gstatic.com/s/nobile/v9/oQ1eYPaXV638N03KvsNvyKCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Nokora","category":"serif","variants":["regular","700"],"subsets":["khmer"],"version":"v11","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/nokora/v11/QMqqa4QEOhQpiig3cAPmbQ.ttf","regular":"http://fonts.gstatic.com/s/nokora/v11/dRyz1JfnyKPNaRcBNX9F9A.ttf"}},{"kind":"webfonts#webfont","family":"Norican","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/norican/v5/SHnSqhYAWG5sZTWcPzEHig.ttf"}},{"kind":"webfonts#webfont","family":"Nosifer","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/nosifer/v6/7eJGoIuHRrtcG00j6CptSA.ttf"}},{"kind":"webfonts#webfont","family":"Nothing You Could Do","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/nothingyoucoulddo/v7/jpk1K3jbJoyoK0XKaSyQAf-TpkXjXYGWiJZAEtBRjPU.ttf"}},{"kind":"webfonts#webfont","family":"Noticia Text","category":"serif","variants":["regular","italic","700","700italic"],"subsets":["latin-ext","vietnamese","latin"],"version":"v7","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/noticiatext/v7/pEko-RqEtp45bE2P80AAKUD2ttfZwueP-QU272T9-k4.ttf","regular":"http://fonts.gstatic.com/s/noticiatext/v7/wdyV6x3eKpdeUPQ7BJ5uUC3USBnSvpkopQaUR-2r7iU.ttf","italic":"http://fonts.gstatic.com/s/noticiatext/v7/dAuxVpkYE_Q_IwIm6elsKPMZXuCXbOrAvx5R0IT5Oyo.ttf","700italic":"http://fonts.gstatic.com/s/noticiatext/v7/-rQ7V8ARjf28_b7kRa0JuvAs9-1nE9qOqhChW0m4nDE.ttf"}},{"kind":"webfonts#webfont","family":"Noto Sans","category":"sans-serif","variants":["regular","italic","700","700italic"],"subsets":["cyrillic","devanagari","latin-ext","cyrillic-ext","greek","vietnamese","greek-ext","latin"],"version":"v7","lastModified":"2017-10-11","files":{"700":"http://fonts.gstatic.com/s/notosans/v7/PIbvSEyHEdL91QLOQRnZ1y3USBnSvpkopQaUR-2r7iU.ttf","regular":"http://fonts.gstatic.com/s/notosans/v7/0Ue9FiUJwVhi4NGfHJS5uA.ttf","italic":"http://fonts.gstatic.com/s/notosans/v7/dLcNKMgJ1H5RVoZFraDz0qCWcynf_cDxXwCLxiixG1c.ttf","700italic":"http://fonts.gstatic.com/s/notosans/v7/9Z3uUWMRR7crzm1TjRicDne1Pd76Vl7zRpE7NLJQ7XU.ttf"}},{"kind":"webfonts#webfont","family":"Noto Serif","category":"serif","variants":["regular","italic","700","700italic"],"subsets":["cyrillic","latin-ext","cyrillic-ext","greek","vietnamese","greek-ext","latin"],"version":"v6","lastModified":"2017-10-11","files":{"700":"http://fonts.gstatic.com/s/notoserif/v6/lJAvZoKA5NttpPc9yc6lPQJKKGfqHaYFsRG-T3ceEVo.ttf","regular":"http://fonts.gstatic.com/s/notoserif/v6/zW6mc7bC1CWw8dH0yxY8JfesZW2xOQ-xsNqO47m55DA.ttf","italic":"http://fonts.gstatic.com/s/notoserif/v6/HQXBIwLHsOJCNEQeX9kNzy3USBnSvpkopQaUR-2r7iU.ttf","700italic":"http://fonts.gstatic.com/s/notoserif/v6/Wreg0Be4tcFGM2t6VWytvED2ttfZwueP-QU272T9-k4.ttf"}},{"kind":"webfonts#webfont","family":"Nova Cut","category":"display","variants":["regular"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/novacut/v9/6q12jWcBvj0KO2cMRP97tA.ttf"}},{"kind":"webfonts#webfont","family":"Nova Flat","category":"display","variants":["regular"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/novaflat/v9/pK7a0CoGzI684qe_XSHBqQ.ttf"}},{"kind":"webfonts#webfont","family":"Nova Mono","category":"monospace","variants":["regular"],"subsets":["greek","latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/novamono/v8/6-SChr5ZIaaasJFBkgrLNw.ttf"}},{"kind":"webfonts#webfont","family":"Nova Oval","category":"display","variants":["regular"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/novaoval/v9/VuukVpKP8BwUf8o9W5LYQQ.ttf"}},{"kind":"webfonts#webfont","family":"Nova Round","category":"display","variants":["regular"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/novaround/v9/7-cK3Ari_8XYYFgVMxVhDvesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Nova Script","category":"display","variants":["regular"],"subsets":["latin"],"version":"v10","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/novascript/v10/dEvxQDLgx1M1TKY-NmBWYaCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Nova Slim","category":"display","variants":["regular"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/novaslim/v9/rPYXC81_VL2EW-4CzBX65g.ttf"}},{"kind":"webfonts#webfont","family":"Nova Square","category":"display","variants":["regular"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/novasquare/v9/BcBzXoaDzYX78rquGXVuSqCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Numans","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/numans/v7/g5snI2p6OEjjTNmTHyBdiQ.ttf"}},{"kind":"webfonts#webfont","family":"Nunito","category":"sans-serif","variants":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","800","800italic","900","900italic"],"subsets":["latin-ext","vietnamese","latin"],"version":"v9","lastModified":"2017-10-10","files":{"200":"http://fonts.gstatic.com/s/nunito/v9/xtWPP_05UbsUNY9Kdgwt_w.ttf","300":"http://fonts.gstatic.com/s/nunito/v9/zXQvrWBJqUooM7Xv98MrQw.ttf","600":"http://fonts.gstatic.com/s/nunito/v9/B4-BGlpEzQ4WP-D3Zi0PRQ.ttf","700":"http://fonts.gstatic.com/s/nunito/v9/aEdlqgMuYbpe4U3TnqOQMA.ttf","800":"http://fonts.gstatic.com/s/nunito/v9/GtGHSZwowZF8a9-GAsh20A.ttf","900":"http://fonts.gstatic.com/s/nunito/v9/QVvFcvcPoFKH9Q71V4WsjQ.ttf","200italic":"http://fonts.gstatic.com/s/nunito/v9/EbyHzRpZ3jx6yC2BjZCsQqCWcynf_cDxXwCLxiixG1c.ttf","300italic":"http://fonts.gstatic.com/s/nunito/v9/4BFBxBQCHZfUELdybShAwKCWcynf_cDxXwCLxiixG1c.ttf","regular":"http://fonts.gstatic.com/s/nunito/v9/ySZTeT3IuzJj0GK6uGpbBg.ttf","italic":"http://fonts.gstatic.com/s/nunito/v9/NZNWFpgsC6hUUE2c03CLoQ.ttf","600italic":"http://fonts.gstatic.com/s/nunito/v9/7SyYp8NBEeMV4V7MAKJnZ6CWcynf_cDxXwCLxiixG1c.ttf","700italic":"http://fonts.gstatic.com/s/nunito/v9/4cHctiCFYmTpv-a6b6vYsKCWcynf_cDxXwCLxiixG1c.ttf","800italic":"http://fonts.gstatic.com/s/nunito/v9/2TsLUs-EFIKsriUeVTl6nKCWcynf_cDxXwCLxiixG1c.ttf","900italic":"http://fonts.gstatic.com/s/nunito/v9/cIxOb6Vw6BqF9ZoAlenp3qCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Nunito Sans","category":"sans-serif","variants":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","800","800italic","900","900italic"],"subsets":["latin-ext","vietnamese","latin"],"version":"v3","lastModified":"2017-10-10","files":{"200":"http://fonts.gstatic.com/s/nunitosans/v3/XvilrNtBQKRMeiqSPzEFHUnzyIngrzGjGh22wPb6cGM.ttf","300":"http://fonts.gstatic.com/s/nunitosans/v3/XvilrNtBQKRMeiqSPzEFHS9-WlPSxbfiI49GsXo3q0g.ttf","600":"http://fonts.gstatic.com/s/nunitosans/v3/XvilrNtBQKRMeiqSPzEFHZZ7xm-Bj30Bj2KNdXDzSZg.ttf","700":"http://fonts.gstatic.com/s/nunitosans/v3/XvilrNtBQKRMeiqSPzEFHXe1Pd76Vl7zRpE7NLJQ7XU.ttf","800":"http://fonts.gstatic.com/s/nunitosans/v3/XvilrNtBQKRMeiqSPzEFHQ89PwPrYLaRFJ-HNCU9NbA.ttf","900":"http://fonts.gstatic.com/s/nunitosans/v3/XvilrNtBQKRMeiqSPzEFHSenaqEuufTBk9XMKnKmgDA.ttf","200italic":"http://fonts.gstatic.com/s/nunitosans/v3/ORCQQ32ldzJ6bFTh_zXqV02YN_dW5g9CXH6iztHQiR4.ttf","300italic":"http://fonts.gstatic.com/s/nunitosans/v3/ORCQQ32ldzJ6bFTh_zXqV2o9eWDfYYxG3A176Zl7aIg.ttf","regular":"http://fonts.gstatic.com/s/nunitosans/v3/qDS9UelBO44ppiSawKNcIKCWcynf_cDxXwCLxiixG1c.ttf","italic":"http://fonts.gstatic.com/s/nunitosans/v3/w9sy7IRyDFLWACdltghEwUeOrDcLawS7-ssYqLr2Xp4.ttf","600italic":"http://fonts.gstatic.com/s/nunitosans/v3/ORCQQ32ldzJ6bFTh_zXqV5e6We3S5L6hKLscKpOkmlo.ttf","700italic":"http://fonts.gstatic.com/s/nunitosans/v3/ORCQQ32ldzJ6bFTh_zXqV8_zJjSACmk0BRPxQqhnNLU.ttf","800italic":"http://fonts.gstatic.com/s/nunitosans/v3/ORCQQ32ldzJ6bFTh_zXqVyad_7rtf4IdDfsLVg-2OV4.ttf","900italic":"http://fonts.gstatic.com/s/nunitosans/v3/ORCQQ32ldzJ6bFTh_zXqV0_yTOUGsoC54csJe1b-IRw.ttf"}},{"kind":"webfonts#webfont","family":"Odor Mean Chey","category":"display","variants":["regular"],"subsets":["khmer"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/odormeanchey/v9/GK3E7EjPoBkeZhYshGFo0eVKG8sq4NyGgdteJLvqLDs.ttf"}},{"kind":"webfonts#webfont","family":"Offside","category":"display","variants":["regular"],"subsets":["latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/offside/v5/v0C913SB8wqQUvcu1faUqw.ttf"}},{"kind":"webfonts#webfont","family":"Old Standard TT","category":"serif","variants":["regular","italic","700"],"subsets":["cyrillic","latin-ext","cyrillic-ext","vietnamese","latin"],"version":"v9","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/oldstandardtt/v9/5Ywdce7XEbTSbxs__4X1_HJqbZqK7TdZ58X80Q_Lw8Y.ttf","regular":"http://fonts.gstatic.com/s/oldstandardtt/v9/n6RTCDcIPWSE8UNBa4k-DLcB5jyhm1VsHs65c3QNDr0.ttf","italic":"http://fonts.gstatic.com/s/oldstandardtt/v9/QQT_AUSp4AV4dpJfIN7U5PWrQzeMtsHf8QsWQ2cZg3c.ttf"}},{"kind":"webfonts#webfont","family":"Oldenburg","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/oldenburg/v5/dqA_M_uoCVXZbCO-oKBTnQ.ttf"}},{"kind":"webfonts#webfont","family":"Oleo Script","category":"display","variants":["regular","700"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/oleoscript/v6/hudNQFKFl98JdNnlo363fne1Pd76Vl7zRpE7NLJQ7XU.ttf","regular":"http://fonts.gstatic.com/s/oleoscript/v6/21stZcmPyzbQVXtmGegyqKCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Oleo Script Swash Caps","category":"display","variants":["regular","700"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/oleoscriptswashcaps/v5/HMO3ftxA9AU5floml9c755reFYaXZ4zuJXJ8fr8OO1g.ttf","regular":"http://fonts.gstatic.com/s/oleoscriptswashcaps/v5/vdWhGqsBUAP-FF3NOYTe4iMF4kXAPemmyaDpMXQ31P0.ttf"}},{"kind":"webfonts#webfont","family":"Open Sans","category":"sans-serif","variants":["300","300italic","regular","italic","600","600italic","700","700italic","800","800italic"],"subsets":["cyrillic","latin-ext","cyrillic-ext","greek","vietnamese","greek-ext","latin"],"version":"v15","lastModified":"2017-10-11","files":{"300":"http://fonts.gstatic.com/s/opensans/v15/DXI1ORHCpsQm3Vp6mXoaTS3USBnSvpkopQaUR-2r7iU.ttf","600":"http://fonts.gstatic.com/s/opensans/v15/MTP_ySUJH_bn48VBG8sNSi3USBnSvpkopQaUR-2r7iU.ttf","700":"http://fonts.gstatic.com/s/opensans/v15/k3k702ZOKiLJc3WVjuplzC3USBnSvpkopQaUR-2r7iU.ttf","800":"http://fonts.gstatic.com/s/opensans/v15/EInbV5DfGHOiMmvb1Xr-hi3USBnSvpkopQaUR-2r7iU.ttf","300italic":"http://fonts.gstatic.com/s/opensans/v15/PRmiXeptR36kaC0GEAetxi9-WlPSxbfiI49GsXo3q0g.ttf","regular":"http://fonts.gstatic.com/s/opensans/v15/IgZJs4-7SA1XX_edsoXWog.ttf","italic":"http://fonts.gstatic.com/s/opensans/v15/O4NhV7_qs9r9seTo7fnsVKCWcynf_cDxXwCLxiixG1c.ttf","600italic":"http://fonts.gstatic.com/s/opensans/v15/PRmiXeptR36kaC0GEAetxpZ7xm-Bj30Bj2KNdXDzSZg.ttf","700italic":"http://fonts.gstatic.com/s/opensans/v15/PRmiXeptR36kaC0GEAetxne1Pd76Vl7zRpE7NLJQ7XU.ttf","800italic":"http://fonts.gstatic.com/s/opensans/v15/PRmiXeptR36kaC0GEAetxg89PwPrYLaRFJ-HNCU9NbA.ttf"}},{"kind":"webfonts#webfont","family":"Open Sans Condensed","category":"sans-serif","variants":["300","300italic","700"],"subsets":["cyrillic","latin-ext","cyrillic-ext","greek","vietnamese","greek-ext","latin"],"version":"v12","lastModified":"2017-10-11","files":{"300":"http://fonts.gstatic.com/s/opensanscondensed/v12/gk5FxslNkTTHtojXrkp-xEMwSSh38KQVJx4ABtsZTnA.ttf","700":"http://fonts.gstatic.com/s/opensanscondensed/v12/gk5FxslNkTTHtojXrkp-xBEM87DM3yorPOrvA-vB930.ttf","300italic":"http://fonts.gstatic.com/s/opensanscondensed/v12/jIXlqT1WKafUSwj6s9AzV4_LkTZ_uhAwfmGJ084hlvM.ttf"}},{"kind":"webfonts#webfont","family":"Oranienbaum","category":"serif","variants":["regular"],"subsets":["cyrillic","latin-ext","cyrillic-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/oranienbaum/v6/M98jYwCSn0PaFhXXgviCoaCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Orbitron","category":"sans-serif","variants":["regular","500","700","900"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-10","files":{"500":"http://fonts.gstatic.com/s/orbitron/v9/p-y_ffzMdo5JN_7ia0vYEqCWcynf_cDxXwCLxiixG1c.ttf","700":"http://fonts.gstatic.com/s/orbitron/v9/PS9_6SLkY1Y6OgPO3APr6qCWcynf_cDxXwCLxiixG1c.ttf","900":"http://fonts.gstatic.com/s/orbitron/v9/2I3-8i9hT294TE_pyjy9SaCWcynf_cDxXwCLxiixG1c.ttf","regular":"http://fonts.gstatic.com/s/orbitron/v9/DY8swouAZjR3RaUPRf0HDQ.ttf"}},{"kind":"webfonts#webfont","family":"Oregano","category":"display","variants":["regular","italic"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/oregano/v5/UiLhqNixVv2EpjRoBG6axA.ttf","italic":"http://fonts.gstatic.com/s/oregano/v5/_iwqGEht6XsAuEaCbYG64Q.ttf"}},{"kind":"webfonts#webfont","family":"Orienta","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/orienta/v5/_NKSk93mMs0xsqtfjCsB3Q.ttf"}},{"kind":"webfonts#webfont","family":"Original Surfer","category":"display","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/originalsurfer/v6/gdHw6HpSIN4D6Xt7pi1-qIkEz33TDwAZczo_6fY7eg0.ttf"}},{"kind":"webfonts#webfont","family":"Oswald","category":"sans-serif","variants":["200","300","regular","500","600","700"],"subsets":["cyrillic","latin-ext","vietnamese","latin"],"version":"v15","lastModified":"2017-10-11","files":{"200":"http://fonts.gstatic.com/s/oswald/v15/NFBt4e1rewQyDPftazXlBw.ttf","300":"http://fonts.gstatic.com/s/oswald/v15/y3tZpCdiRD4oNRRYFcAR5Q.ttf","500":"http://fonts.gstatic.com/s/oswald/v15/wrHWShuZ7ELtrnx0cnkzXw.ttf","600":"http://fonts.gstatic.com/s/oswald/v15/JNlamLn5ALW8eKp46JLlQA.ttf","700":"http://fonts.gstatic.com/s/oswald/v15/7wj8ldV_5Ti37rHa0m1DDw.ttf","regular":"http://fonts.gstatic.com/s/oswald/v15/uLEd2g2vJglLPfsBF91DCg.ttf"}},{"kind":"webfonts#webfont","family":"Over the Rainbow","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/overtherainbow/v8/6gp-gkpI2kie2dHQQLM2jQBdxkZd83xOSx-PAQ2QmiI.ttf"}},{"kind":"webfonts#webfont","family":"Overlock","category":"display","variants":["regular","italic","700","700italic","900","900italic"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/overlock/v7/Fexr8SqXM8Bm_gEVUA7AKaCWcynf_cDxXwCLxiixG1c.ttf","900":"http://fonts.gstatic.com/s/overlock/v7/YPJCVTT8ZbG3899l_-KIGqCWcynf_cDxXwCLxiixG1c.ttf","regular":"http://fonts.gstatic.com/s/overlock/v7/Z8oYsGi88-E1cUB8YBFMAg.ttf","italic":"http://fonts.gstatic.com/s/overlock/v7/rq6EacukHROOBrFrK_zF6_esZW2xOQ-xsNqO47m55DA.ttf","700italic":"http://fonts.gstatic.com/s/overlock/v7/wFWnYgeXKYBks6gEUwYnfAJKKGfqHaYFsRG-T3ceEVo.ttf","900italic":"http://fonts.gstatic.com/s/overlock/v7/iOZhxT2zlg7W5ij_lb-oDp0EAVxt0G0biEntp43Qt6E.ttf"}},{"kind":"webfonts#webfont","family":"Overlock SC","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/overlocksc/v6/8D7HYDsvS_g1GhBnlHzgzaCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Overpass","category":"sans-serif","variants":["100","100italic","200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","800","800italic","900","900italic"],"subsets":["latin-ext","latin"],"version":"v2","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/overpass/v2/ywiUWFAguOSxQn0FFeOdWPesZW2xOQ-xsNqO47m55DA.ttf","200":"http://fonts.gstatic.com/s/overpass/v2/WrbWRQuVnXt_EslNm2vBt6CWcynf_cDxXwCLxiixG1c.ttf","300":"http://fonts.gstatic.com/s/overpass/v2/nqDUqkXaOp0r1j0uaM5VUaCWcynf_cDxXwCLxiixG1c.ttf","600":"http://fonts.gstatic.com/s/overpass/v2/-GUou309ST_HAHIhkHjkz6CWcynf_cDxXwCLxiixG1c.ttf","700":"http://fonts.gstatic.com/s/overpass/v2/sBTg-F6_A1NQLJPfW5I7Q6CWcynf_cDxXwCLxiixG1c.ttf","800":"http://fonts.gstatic.com/s/overpass/v2/YeZIq305iGwGCyZbaiEbVqCWcynf_cDxXwCLxiixG1c.ttf","900":"http://fonts.gstatic.com/s/overpass/v2/4lJ8BLdIYI_B9rFwoB4zO6CWcynf_cDxXwCLxiixG1c.ttf","100italic":"http://fonts.gstatic.com/s/overpass/v2/thg-CA5nD5lyYWLwXbqXXi3USBnSvpkopQaUR-2r7iU.ttf","200italic":"http://fonts.gstatic.com/s/overpass/v2/Eyj9nfhrJ71MmfPNEwqE02eudeTO44zf-ht3k-KNzwg.ttf","300italic":"http://fonts.gstatic.com/s/overpass/v2/R77XtXNe7WC4SXZBLWmy80eOrDcLawS7-ssYqLr2Xp4.ttf","regular":"http://fonts.gstatic.com/s/overpass/v2/1fNed5evrqtu4ZjkbTnCRw.ttf","italic":"http://fonts.gstatic.com/s/overpass/v2/lG-Dpm66OH9lPHbYTnITSvesZW2xOQ-xsNqO47m55DA.ttf","600italic":"http://fonts.gstatic.com/s/overpass/v2/aPYi-s_WVz-zuU4TsgAEjvpTEJqju4Hz1txDWij77d4.ttf","700italic":"http://fonts.gstatic.com/s/overpass/v2/E5UsN4VY1e_Twk_bY6TpQAJKKGfqHaYFsRG-T3ceEVo.ttf","800italic":"http://fonts.gstatic.com/s/overpass/v2/j6xjlCEDoKw-D0Co-88A9Kk3bhPBSBJ0bSJQ6acL-0g.ttf","900italic":"http://fonts.gstatic.com/s/overpass/v2/SegM1mSQIRZG2pJwM_2Nm50EAVxt0G0biEntp43Qt6E.ttf"}},{"kind":"webfonts#webfont","family":"Overpass Mono","category":"monospace","variants":["300","regular","600","700"],"subsets":["latin-ext","latin"],"version":"v3","lastModified":"2017-10-09","files":{"300":"http://fonts.gstatic.com/s/overpassmono/v3/JEQ6tXkANEo2u0wZ-MTOPEW1P7_iUBn_wmH5B9p-CEw.ttf","600":"http://fonts.gstatic.com/s/overpassmono/v3/JEQ6tXkANEo2u0wZ-MTOPCvU6mrnWf1MVbTZ5LZwmOY.ttf","700":"http://fonts.gstatic.com/s/overpassmono/v3/JEQ6tXkANEo2u0wZ-MTOPO-Cz_5MeePnXDAcLNWyBME.ttf","regular":"http://fonts.gstatic.com/s/overpassmono/v3/MarHoIqW2hy_po97b_wS9uV_5zh5b-_HiooIRUBwn1A.ttf"}},{"kind":"webfonts#webfont","family":"Ovo","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/ovo/v8/mFg27dimu3s9t09qjCwB1g.ttf"}},{"kind":"webfonts#webfont","family":"Oxygen","category":"sans-serif","variants":["300","regular","700"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/oxygen/v7/lZ31r0bR1Bzt_DfGZu1S8A.ttf","700":"http://fonts.gstatic.com/s/oxygen/v7/yLqkmDwuNtt5pSqsJmhyrg.ttf","regular":"http://fonts.gstatic.com/s/oxygen/v7/uhoyAE7XlQL22abzQieHjw.ttf"}},{"kind":"webfonts#webfont","family":"Oxygen Mono","category":"monospace","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/oxygenmono/v5/DigTu7k4b7OmM8ubt1Qza6CWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"PT Mono","category":"monospace","variants":["regular"],"subsets":["cyrillic","latin-ext","cyrillic-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/ptmono/v5/QUbM8H9yJK5NhpQ0REO6Wg.ttf"}},{"kind":"webfonts#webfont","family":"PT Sans","category":"sans-serif","variants":["regular","italic","700","700italic"],"subsets":["cyrillic","latin-ext","cyrillic-ext","latin"],"version":"v9","lastModified":"2017-10-11","files":{"700":"http://fonts.gstatic.com/s/ptsans/v9/F51BEgHuR0tYHxF0bD4vwvesZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/ptsans/v9/UFoEz2uiuMypUGZL1NKoeg.ttf","italic":"http://fonts.gstatic.com/s/ptsans/v9/yls9EYWOd496wiu7qzfgNg.ttf","700italic":"http://fonts.gstatic.com/s/ptsans/v9/lILlYDvubYemzYzN7GbLkC3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"PT Sans Caption","category":"sans-serif","variants":["regular","700"],"subsets":["cyrillic","latin-ext","cyrillic-ext","latin"],"version":"v10","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/ptsanscaption/v10/Q-gJrFokeE7JydPpxASt25tc0eyfI4QDEsobEEpk_hA.ttf","regular":"http://fonts.gstatic.com/s/ptsanscaption/v10/OXYTDOzBcXU8MTNBvBHeSW8by34Z3mUMtM-o4y-SHCY.ttf"}},{"kind":"webfonts#webfont","family":"PT Sans Narrow","category":"sans-serif","variants":["regular","700"],"subsets":["cyrillic","latin-ext","cyrillic-ext","latin"],"version":"v8","lastModified":"2017-10-11","files":{"700":"http://fonts.gstatic.com/s/ptsansnarrow/v8/Q_pTky3Sc3ubRibGToTAYsLtdzs3iyjn_YuT226ZsLU.ttf","regular":"http://fonts.gstatic.com/s/ptsansnarrow/v8/UyYrYy3ltEffJV9QueSi4ZTvAuddT2xDMbdz0mdLyZY.ttf"}},{"kind":"webfonts#webfont","family":"PT Serif","category":"serif","variants":["regular","italic","700","700italic"],"subsets":["cyrillic","latin-ext","cyrillic-ext","latin"],"version":"v9","lastModified":"2017-10-11","files":{"700":"http://fonts.gstatic.com/s/ptserif/v9/kyZw18tqQ5if-_wpmxxOeKCWcynf_cDxXwCLxiixG1c.ttf","regular":"http://fonts.gstatic.com/s/ptserif/v9/sAo427rn3-QL9sWCbMZXhA.ttf","italic":"http://fonts.gstatic.com/s/ptserif/v9/9khWhKzhpkH0OkNnBKS3n_esZW2xOQ-xsNqO47m55DA.ttf","700italic":"http://fonts.gstatic.com/s/ptserif/v9/Foydq9xJp--nfYIx2TBz9QJKKGfqHaYFsRG-T3ceEVo.ttf"}},{"kind":"webfonts#webfont","family":"PT Serif Caption","category":"serif","variants":["regular","italic"],"subsets":["cyrillic","latin-ext","cyrillic-ext","latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/ptserifcaption/v9/7xkFOeTxxO1GMC1suOUYWVsRioCqs5fohhaYel24W3k.ttf","italic":"http://fonts.gstatic.com/s/ptserifcaption/v9/0kfPsmrmTSgiec7u_Wa0DB1mqvzPHelJwRcF_s_EUM0.ttf"}},{"kind":"webfonts#webfont","family":"Pacifico","category":"handwriting","variants":["regular"],"subsets":["latin-ext","vietnamese","latin"],"version":"v10","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/pacifico/v10/GIrpeRY1r5CzbfL8r182lw.ttf"}},{"kind":"webfonts#webfont","family":"Padauk","category":"sans-serif","variants":["regular","700"],"subsets":["myanmar","latin"],"version":"v4","lastModified":"2017-10-09","files":{"700":"http://fonts.gstatic.com/s/padauk/v4/XUBO5k0emPIVnqCcQCcEpg.ttf","regular":"http://fonts.gstatic.com/s/padauk/v4/WdTk6igBu-qn4v8naF9hGQ.ttf"}},{"kind":"webfonts#webfont","family":"Palanquin","category":"sans-serif","variants":["100","200","300","regular","500","600","700"],"subsets":["devanagari","latin-ext","latin"],"version":"v3","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/palanquin/v3/Hu0eGDVGK_g4saUFu6AK3KCWcynf_cDxXwCLxiixG1c.ttf","200":"http://fonts.gstatic.com/s/palanquin/v3/pqXYXD7-VI5ezTjeqQOcyC3USBnSvpkopQaUR-2r7iU.ttf","300":"http://fonts.gstatic.com/s/palanquin/v3/c0-J5OCAagpFCKkKraz-Ey3USBnSvpkopQaUR-2r7iU.ttf","500":"http://fonts.gstatic.com/s/palanquin/v3/wLvvkEcZMKy95afLWh2EfC3USBnSvpkopQaUR-2r7iU.ttf","600":"http://fonts.gstatic.com/s/palanquin/v3/405UIAv95_yZkCECrH6y-i3USBnSvpkopQaUR-2r7iU.ttf","700":"http://fonts.gstatic.com/s/palanquin/v3/-UtkePo3NFvxEN3rGCtTvi3USBnSvpkopQaUR-2r7iU.ttf","regular":"http://fonts.gstatic.com/s/palanquin/v3/xCwBUoAEV0kzCDwerAZ0Aw.ttf"}},{"kind":"webfonts#webfont","family":"Palanquin Dark","category":"sans-serif","variants":["regular","500","600","700"],"subsets":["devanagari","latin-ext","latin"],"version":"v3","lastModified":"2017-10-10","files":{"500":"http://fonts.gstatic.com/s/palanquindark/v3/iXyBGf5UbFUu6BG8hOY-maMZTo-EwKMRQt3RWHocLi0.ttf","600":"http://fonts.gstatic.com/s/palanquindark/v3/iXyBGf5UbFUu6BG8hOY-mVNxaunw8i4Gywrk2SigRnk.ttf","700":"http://fonts.gstatic.com/s/palanquindark/v3/iXyBGf5UbFUu6BG8hOY-mWToair6W0TEE44XrlfKbiM.ttf","regular":"http://fonts.gstatic.com/s/palanquindark/v3/PamTqrrgbBh_M3702w39rOfChn3JSg5yz_Q_xmrKQN0.ttf"}},{"kind":"webfonts#webfont","family":"Pangolin","category":"handwriting","variants":["regular"],"subsets":["cyrillic","latin-ext","cyrillic-ext","vietnamese","latin"],"version":"v3","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/pangolin/v3/i2W796ne6lveehHXs8AFGA.ttf"}},{"kind":"webfonts#webfont","family":"Paprika","category":"display","variants":["regular"],"subsets":["latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/paprika/v5/b-VpyoRSieBdB5BPJVF8HQ.ttf"}},{"kind":"webfonts#webfont","family":"Parisienne","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/parisienne/v5/TW74B5QISJNx9moxGlmJfvesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Passero One","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/passeroone/v9/Yc-7nH5deCCv9Ed0MMnAQqCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Passion One","category":"display","variants":["regular","700","900"],"subsets":["latin-ext","latin"],"version":"v8","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/passionone/v8/feOcYDy2R-f3Ysy72PYJ2ne1Pd76Vl7zRpE7NLJQ7XU.ttf","900":"http://fonts.gstatic.com/s/passionone/v8/feOcYDy2R-f3Ysy72PYJ2ienaqEuufTBk9XMKnKmgDA.ttf","regular":"http://fonts.gstatic.com/s/passionone/v8/1UIK1tg3bKJ4J3o35M4heqCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Pathway Gothic One","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/pathwaygothicone/v6/Lqv9ztoTUV8Q0FmQZzPqaA6A6xIYD7vYcYDop1i-K-c.ttf"}},{"kind":"webfonts#webfont","family":"Patrick Hand","category":"handwriting","variants":["regular"],"subsets":["latin-ext","vietnamese","latin"],"version":"v11","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/patrickhand/v11/9BG3JJgt_HlF3NpEUehL0C3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Patrick Hand SC","category":"handwriting","variants":["regular"],"subsets":["latin-ext","vietnamese","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/patrickhandsc/v5/OYFWCgfCR-7uHIovjUZXsbAgSRh1LpJXlLfl8IbsmHg.ttf"}},{"kind":"webfonts#webfont","family":"Pattaya","category":"sans-serif","variants":["regular"],"subsets":["cyrillic","latin-ext","thai","vietnamese","latin"],"version":"v2","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/pattaya/v2/sJEout1xdD7J8H-1H81pIQ.ttf"}},{"kind":"webfonts#webfont","family":"Patua One","category":"display","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/patuaone/v7/njZwotTYjswR4qdhsW-kJw.ttf"}},{"kind":"webfonts#webfont","family":"Pavanam","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","tamil","latin"],"version":"v2","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/pavanam/v2/C7yuEhNK5oftNLSL3I0bGw.ttf"}},{"kind":"webfonts#webfont","family":"Paytone One","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","vietnamese","latin"],"version":"v10","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/paytoneone/v10/3WCxC7JAJjQHQVoIE0ZwvqCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Peddana","category":"serif","variants":["regular"],"subsets":["telugu","latin"],"version":"v5","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/peddana/v5/zaSZuj_GhmC8AOTugOROnA.ttf"}},{"kind":"webfonts#webfont","family":"Peralta","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/peralta/v5/cTJX5KEuc0GKRU9NXSm-8Q.ttf"}},{"kind":"webfonts#webfont","family":"Permanent Marker","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/permanentmarker/v7/9vYsg5VgPHKK8SXYbf3sMol14xj5tdg9OHF8w4E7StQ.ttf"}},{"kind":"webfonts#webfont","family":"Petit Formal Script","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/petitformalscript/v5/OEZwr2-ovBsq2n3ACCKoEvVPl2Gjtxj0D6F7QLy1VQc.ttf"}},{"kind":"webfonts#webfont","family":"Petrona","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/petrona/v6/nnQwxlP6dhrGovYEFtemTg.ttf"}},{"kind":"webfonts#webfont","family":"Philosopher","category":"sans-serif","variants":["regular","italic","700","700italic"],"subsets":["cyrillic","cyrillic-ext","vietnamese","latin"],"version":"v9","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/philosopher/v9/napvkewXG9Gqby5vwGHICHe1Pd76Vl7zRpE7NLJQ7XU.ttf","regular":"http://fonts.gstatic.com/s/philosopher/v9/oZLTrB9jmJsyV0u_T0TKEaCWcynf_cDxXwCLxiixG1c.ttf","italic":"http://fonts.gstatic.com/s/philosopher/v9/_9Hnc_gz9k7Qq6uKaeHKmUeOrDcLawS7-ssYqLr2Xp4.ttf","700italic":"http://fonts.gstatic.com/s/philosopher/v9/PuKlryTcvTj7-qZWfLCFIM_zJjSACmk0BRPxQqhnNLU.ttf"}},{"kind":"webfonts#webfont","family":"Piedra","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/piedra/v6/owf-AvEEyAj9LJ2tVZ_3Mw.ttf"}},{"kind":"webfonts#webfont","family":"Pinyon Script","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/pinyonscript/v7/TzghnhfCn7TuE73f-CBQ0CeUSrabuTpOsMEiRLtKwk0.ttf"}},{"kind":"webfonts#webfont","family":"Pirata One","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/pirataone/v5/WnbD86B4vB2ckYcL7oxuhvesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Plaster","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/plaster/v9/O4QG9Z5116CXyfJdR9zxLw.ttf"}},{"kind":"webfonts#webfont","family":"Play","category":"sans-serif","variants":["regular","700"],"subsets":["cyrillic","latin-ext","cyrillic-ext","greek","vietnamese","latin"],"version":"v9","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/play/v9/crPhg6I0alLI-MpB3vW-zw.ttf","regular":"http://fonts.gstatic.com/s/play/v9/GWvfObW8LhtsOX333MCpBg.ttf"}},{"kind":"webfonts#webfont","family":"Playball","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/playball/v7/3hOFiQm_EUzycTpcN9uz4w.ttf"}},{"kind":"webfonts#webfont","family":"Playfair Display","category":"serif","variants":["regular","italic","700","700italic","900","900italic"],"subsets":["cyrillic","latin-ext","latin"],"version":"v12","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/playfairdisplay/v12/UC3ZEjagJi85gF9qFaBgICsv6SrURqJprbhH_C1Mw8w.ttf","900":"http://fonts.gstatic.com/s/playfairdisplay/v12/UC3ZEjagJi85gF9qFaBgIKqwMe2wjvZrAR44M0BJZ48.ttf","regular":"http://fonts.gstatic.com/s/playfairdisplay/v12/2NBgzUtEeyB-Xtpr9bm1CV6uyC_qD11hrFQ6EGgTJWI.ttf","italic":"http://fonts.gstatic.com/s/playfairdisplay/v12/9MkijrV-dEJ0-_NWV7E6NzMsbnvDNEBX25F5HWk9AhI.ttf","700italic":"http://fonts.gstatic.com/s/playfairdisplay/v12/n7G4PqJvFP2Kubl0VBLDECsYW3XoOVcYyYdp9NzzS9E.ttf","900italic":"http://fonts.gstatic.com/s/playfairdisplay/v12/n7G4PqJvFP2Kubl0VBLDEC0JfJ4xmm7j1kL6D7mPxrA.ttf"}},{"kind":"webfonts#webfont","family":"Playfair Display SC","category":"serif","variants":["regular","italic","700","700italic","900","900italic"],"subsets":["cyrillic","latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/playfairdisplaysc/v6/5ggqGkvWJU_TtW2W8cEubA-Amcyomnuy4WsCiPxGHjw.ttf","900":"http://fonts.gstatic.com/s/playfairdisplaysc/v6/5ggqGkvWJU_TtW2W8cEubKXL3C32k275YmX_AcBPZ7w.ttf","regular":"http://fonts.gstatic.com/s/playfairdisplaysc/v6/G0-tvBxd4eQRdwFKB8dRkcpjYTDWIvcAwAccqeW9uNM.ttf","italic":"http://fonts.gstatic.com/s/playfairdisplaysc/v6/myuYiFR-4NTrUT4w6TKls2klJsJYggW8rlNoTOTuau0.ttf","700italic":"http://fonts.gstatic.com/s/playfairdisplaysc/v6/6X0OQrQhEEnPo56RalREX4krgPi80XvBcbTwmz-rgmU.ttf","900italic":"http://fonts.gstatic.com/s/playfairdisplaysc/v6/6X0OQrQhEEnPo56RalREX8Zag2q3ssKz8uH1RU4a9gs.ttf"}},{"kind":"webfonts#webfont","family":"Podkova","category":"serif","variants":["regular","500","600","700","800"],"subsets":["cyrillic","latin-ext","cyrillic-ext","vietnamese","latin"],"version":"v11","lastModified":"2017-10-10","files":{"500":"http://fonts.gstatic.com/s/podkova/v11/8MkhKmKhl0HgqBeKkV0pmvesZW2xOQ-xsNqO47m55DA.ttf","600":"http://fonts.gstatic.com/s/podkova/v11/921xSzgq6uUBjPZXn2IH0PesZW2xOQ-xsNqO47m55DA.ttf","700":"http://fonts.gstatic.com/s/podkova/v11/SqW4aa8m_KVrOgYSydQ33vesZW2xOQ-xsNqO47m55DA.ttf","800":"http://fonts.gstatic.com/s/podkova/v11/ObfRYfRr58NtktZuAa1VhfesZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/podkova/v11/eylljyGVfB8ZUQjYY3WZRQ.ttf"}},{"kind":"webfonts#webfont","family":"Poiret One","category":"display","variants":["regular"],"subsets":["cyrillic","latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/poiretone/v5/dWcYed048E5gHGDIt8i1CPesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Poller One","category":"display","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/pollerone/v7/dkctmDlTPcZ6boC8662RA_esZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Poly","category":"serif","variants":["regular","italic"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/poly/v8/bcMAuiacS2qkd54BcwW6_Q.ttf","italic":"http://fonts.gstatic.com/s/poly/v8/Zkx-eIlZSjKUrPGYhV5PeA.ttf"}},{"kind":"webfonts#webfont","family":"Pompiere","category":"display","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/pompiere/v7/o_va2p9CD5JfmFohAkGZIA.ttf"}},{"kind":"webfonts#webfont","family":"Pontano Sans","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/pontanosans/v5/gTHiwyxi6S7iiHpqAoiE3C3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Poppins","category":"sans-serif","variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"subsets":["devanagari","latin-ext","latin"],"version":"v5","lastModified":"2017-10-11","files":{"100":"http://fonts.gstatic.com/s/poppins/v5/J_Uo-RBVJYTcfQfJqaBpiA.ttf","200":"http://fonts.gstatic.com/s/poppins/v5/iG8N2M28abs14mWAmy9C8vesZW2xOQ-xsNqO47m55DA.ttf","300":"http://fonts.gstatic.com/s/poppins/v5/VIeViZ2fPtYBt3B2fQZplvesZW2xOQ-xsNqO47m55DA.ttf","500":"http://fonts.gstatic.com/s/poppins/v5/4WGKlFyjcmCFVl8pRsgZ9vesZW2xOQ-xsNqO47m55DA.ttf","600":"http://fonts.gstatic.com/s/poppins/v5/-zOABrCWORC3lyDh-ajNnPesZW2xOQ-xsNqO47m55DA.ttf","700":"http://fonts.gstatic.com/s/poppins/v5/8JitanEsk5aDh7mDYs-fYfesZW2xOQ-xsNqO47m55DA.ttf","800":"http://fonts.gstatic.com/s/poppins/v5/vVhctzCFjekFM26ZXVvlAvesZW2xOQ-xsNqO47m55DA.ttf","900":"http://fonts.gstatic.com/s/poppins/v5/7WUVvX7AIKpgWf6w-guTPfesZW2xOQ-xsNqO47m55DA.ttf","100italic":"http://fonts.gstatic.com/s/poppins/v5/AgVJ3FHPsWMHPMmRYdKWQKCWcynf_cDxXwCLxiixG1c.ttf","200italic":"http://fonts.gstatic.com/s/poppins/v5/-GlaWpWcSgdVagNuOGuFKS3USBnSvpkopQaUR-2r7iU.ttf","300italic":"http://fonts.gstatic.com/s/poppins/v5/QmRKoWaGfh304P2oApdMLS3USBnSvpkopQaUR-2r7iU.ttf","regular":"http://fonts.gstatic.com/s/poppins/v5/hlvAxH6aIdOjWlLzgm0jqg.ttf","italic":"http://fonts.gstatic.com/s/poppins/v5/3cZiAJEeIIIKVRjGXr9qVg.ttf","500italic":"http://fonts.gstatic.com/s/poppins/v5/ZswPVmYNMYXIwQy7Wnzcyi3USBnSvpkopQaUR-2r7iU.ttf","600italic":"http://fonts.gstatic.com/s/poppins/v5/RbebACOccNN-5ixkDIVLjS3USBnSvpkopQaUR-2r7iU.ttf","700italic":"http://fonts.gstatic.com/s/poppins/v5/c4FPK8_hIFKoX59qcGwdCi3USBnSvpkopQaUR-2r7iU.ttf","800italic":"http://fonts.gstatic.com/s/poppins/v5/nhuxdF7XMkIXmkGDadS6EC3USBnSvpkopQaUR-2r7iU.ttf","900italic":"http://fonts.gstatic.com/s/poppins/v5/Lmn8WRFdDq3MeV9dyKOb_y3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Port Lligat Sans","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/portlligatsans/v6/CUEdhRk7oC7up0p6t0g4P6mASEpx5X0ZpsuJOuvfOGA.ttf"}},{"kind":"webfonts#webfont","family":"Port Lligat Slab","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/portlligatslab/v6/CUEdhRk7oC7up0p6t0g4PxLSPACXvawUYCBEnHsOe30.ttf"}},{"kind":"webfonts#webfont","family":"Pragati Narrow","category":"sans-serif","variants":["regular","700"],"subsets":["devanagari","latin-ext","latin"],"version":"v3","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/pragatinarrow/v3/DnSI1zRkc0CY-hI5SC3q3MLtdzs3iyjn_YuT226ZsLU.ttf","regular":"http://fonts.gstatic.com/s/pragatinarrow/v3/HzG2TfC862qPNsZsV_djPpTvAuddT2xDMbdz0mdLyZY.ttf"}},{"kind":"webfonts#webfont","family":"Prata","category":"serif","variants":["regular"],"subsets":["cyrillic","cyrillic-ext","vietnamese","latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/prata/v8/3gmx8r842loRRm9iQkCDGg.ttf"}},{"kind":"webfonts#webfont","family":"Preahvihear","category":"display","variants":["regular"],"subsets":["khmer"],"version":"v9","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/preahvihear/v9/82tDI-xTc53CxxOzEG4hDaCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Press Start 2P","category":"display","variants":["regular"],"subsets":["cyrillic","latin-ext","cyrillic-ext","greek","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/pressstart2p/v6/8Lg6LX8-ntOHUQnvQ0E7o1jfl3W46Sz5gOkEVhcFWF4.ttf"}},{"kind":"webfonts#webfont","family":"Pridi","category":"serif","variants":["200","300","regular","500","600","700"],"subsets":["latin-ext","thai","vietnamese","latin"],"version":"v3","lastModified":"2017-10-10","files":{"200":"http://fonts.gstatic.com/s/pridi/v3/WvKJ-kflGuELyK4uQzpYIA.ttf","300":"http://fonts.gstatic.com/s/pridi/v3/Ihwk-OGVFS69PINILdqAjQ.ttf","500":"http://fonts.gstatic.com/s/pridi/v3/dPNOrMxU-HjLo-fvkFydsQ.ttf","600":"http://fonts.gstatic.com/s/pridi/v3/J0i5OZxX07KC4mby5RjNbg.ttf","700":"http://fonts.gstatic.com/s/pridi/v3/UhCy4jDDJttTB8k8rtWadg.ttf","regular":"http://fonts.gstatic.com/s/pridi/v3/Mau018Ghi7LJX7FkGYCZAQ.ttf"}},{"kind":"webfonts#webfont","family":"Princess Sofia","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/princesssofia/v5/8g5l8r9BM0t1QsXLTajDe-wjmA7ie-lFcByzHGRhCIg.ttf"}},{"kind":"webfonts#webfont","family":"Prociono","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/prociono/v7/43ZYDHWogdFeNBWTl6ksmw.ttf"}},{"kind":"webfonts#webfont","family":"Prompt","category":"sans-serif","variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"subsets":["latin-ext","thai","vietnamese","latin"],"version":"v2","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/prompt/v2/ltjX-trOmfS-yKy_awt70g.ttf","200":"http://fonts.gstatic.com/s/prompt/v2/MNB_CVkbfYHFMWX_UbDC2Q.ttf","300":"http://fonts.gstatic.com/s/prompt/v2/LzifakiWysr3N3OoAdbdpg.ttf","500":"http://fonts.gstatic.com/s/prompt/v2/w31OY1otplAgr5iZ21K7Fg.ttf","600":"http://fonts.gstatic.com/s/prompt/v2/uUrJjg1BGaIb6CAOlUIp9g.ttf","700":"http://fonts.gstatic.com/s/prompt/v2/HdM_epiStzshOr-49ubVyg.ttf","800":"http://fonts.gstatic.com/s/prompt/v2/GF9cOamDd7mYPHNW1nZLKg.ttf","900":"http://fonts.gstatic.com/s/prompt/v2/KFgmbwHbRBQb28VFhH3c8Q.ttf","100italic":"http://fonts.gstatic.com/s/prompt/v2/KvTeArBpVb-tA2mahV6Jk_esZW2xOQ-xsNqO47m55DA.ttf","200italic":"http://fonts.gstatic.com/s/prompt/v2/NR0JuXzzCDKpLNVhfyEAiaCWcynf_cDxXwCLxiixG1c.ttf","300italic":"http://fonts.gstatic.com/s/prompt/v2/ir8BhbeDHM-qnbo-tnpmt6CWcynf_cDxXwCLxiixG1c.ttf","regular":"http://fonts.gstatic.com/s/prompt/v2/nDo1rQFnTFNua4cp-OnD2A.ttf","italic":"http://fonts.gstatic.com/s/prompt/v2/ZD4khIP924SU2fRYOJkraQ.ttf","500italic":"http://fonts.gstatic.com/s/prompt/v2/dfaeaRx00u9arVHsaDjliaCWcynf_cDxXwCLxiixG1c.ttf","600italic":"http://fonts.gstatic.com/s/prompt/v2/CJUBMsoNNHMMdFRxm-n7p6CWcynf_cDxXwCLxiixG1c.ttf","700italic":"http://fonts.gstatic.com/s/prompt/v2/GtXRH7QWy3aLCHoJuR5WIKCWcynf_cDxXwCLxiixG1c.ttf","800italic":"http://fonts.gstatic.com/s/prompt/v2/kBLgnnEB-VXkOLFCc0pzwqCWcynf_cDxXwCLxiixG1c.ttf","900italic":"http://fonts.gstatic.com/s/prompt/v2/qjrOe-lEPwDDeUu5g6q_DaCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Prosto One","category":"display","variants":["regular"],"subsets":["cyrillic","latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/prostoone/v6/bsqnAElAqk9kX7eABTRFJPesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Proza Libre","category":"sans-serif","variants":["regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"subsets":["latin-ext","latin"],"version":"v2","lastModified":"2017-10-10","files":{"500":"http://fonts.gstatic.com/s/prozalibre/v2/4gjxWDPA6RMWrIls_qgQBsCNfqCYlB_eIx7H1TVXe60.ttf","600":"http://fonts.gstatic.com/s/prozalibre/v2/4gjxWDPA6RMWrIls_qgQBpZ7xm-Bj30Bj2KNdXDzSZg.ttf","700":"http://fonts.gstatic.com/s/prozalibre/v2/4gjxWDPA6RMWrIls_qgQBne1Pd76Vl7zRpE7NLJQ7XU.ttf","800":"http://fonts.gstatic.com/s/prozalibre/v2/4gjxWDPA6RMWrIls_qgQBg89PwPrYLaRFJ-HNCU9NbA.ttf","regular":"http://fonts.gstatic.com/s/prozalibre/v2/Hg11OrfE1P_U6mKmrZPknKCWcynf_cDxXwCLxiixG1c.ttf","italic":"http://fonts.gstatic.com/s/prozalibre/v2/ClQTew5IUT7yKo8vyspLxEeOrDcLawS7-ssYqLr2Xp4.ttf","500italic":"http://fonts.gstatic.com/s/prozalibre/v2/rWq3Qp4ZlPGKduc1qkgLHGnWRcJAYo5PSCx8UfGMHCI.ttf","600italic":"http://fonts.gstatic.com/s/prozalibre/v2/rWq3Qp4ZlPGKduc1qkgLHJe6We3S5L6hKLscKpOkmlo.ttf","700italic":"http://fonts.gstatic.com/s/prozalibre/v2/rWq3Qp4ZlPGKduc1qkgLHM_zJjSACmk0BRPxQqhnNLU.ttf","800italic":"http://fonts.gstatic.com/s/prozalibre/v2/rWq3Qp4ZlPGKduc1qkgLHCad_7rtf4IdDfsLVg-2OV4.ttf"}},{"kind":"webfonts#webfont","family":"Puritan","category":"sans-serif","variants":["regular","italic","700","700italic"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/puritan/v9/pJS2SdwI0SCiVnO0iQSFT_esZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/puritan/v9/wv_RtgVBSCn-or2MC0n4Kg.ttf","italic":"http://fonts.gstatic.com/s/puritan/v9/BqZX8Tp200LeMv1KlzXgLQ.ttf","700italic":"http://fonts.gstatic.com/s/puritan/v9/rFG3XkMJL75nUNZwCEIJqC3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Purple Purse","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/purplepurse/v6/Q5heFUrdmei9axbMITxxxS3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Quando","category":"serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/quando/v6/03nDiEZuO2-h3xvtG6UmHg.ttf"}},{"kind":"webfonts#webfont","family":"Quantico","category":"sans-serif","variants":["regular","italic","700","700italic"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/quantico/v6/OVZZzjcZ3Hkq2ojVcUtDjaCWcynf_cDxXwCLxiixG1c.ttf","regular":"http://fonts.gstatic.com/s/quantico/v6/pwSnP8Xpaix2rIz99HrSlQ.ttf","italic":"http://fonts.gstatic.com/s/quantico/v6/KQhDd2OsZi6HiITUeFQ2U_esZW2xOQ-xsNqO47m55DA.ttf","700italic":"http://fonts.gstatic.com/s/quantico/v6/HeCYRcZbdRso3ZUu01ELbQJKKGfqHaYFsRG-T3ceEVo.ttf"}},{"kind":"webfonts#webfont","family":"Quattrocento","category":"serif","variants":["regular","700"],"subsets":["latin-ext","latin"],"version":"v9","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/quattrocento/v9/Uvi-cRwyvqFpl9j3oT2mqkD2ttfZwueP-QU272T9-k4.ttf","regular":"http://fonts.gstatic.com/s/quattrocento/v9/WZDISdyil4HsmirlOdBRFC3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Quattrocento Sans","category":"sans-serif","variants":["regular","italic","700","700italic"],"subsets":["latin-ext","latin"],"version":"v10","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/quattrocentosans/v10/tXSgPxDl7Lk8Zr_5qX8FIbqxG25nQNOioCZSK4sU-CA.ttf","regular":"http://fonts.gstatic.com/s/quattrocentosans/v10/efd6FGWWGX5Z3ztwLBrG9eAj_ty82iuwwDTNEYXGiyQ.ttf","italic":"http://fonts.gstatic.com/s/quattrocentosans/v10/8PXYbvM__bjl0rBnKiByg532VBCoA_HLsn85tSWZmdo.ttf","700italic":"http://fonts.gstatic.com/s/quattrocentosans/v10/8N1PdXpbG6RtFvTjl-5E7buqAJxizi8Dk_SK5et7kMg.ttf"}},{"kind":"webfonts#webfont","family":"Questrial","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/questrial/v7/MoHHaw_WwNs_hd9ob1zTVw.ttf"}},{"kind":"webfonts#webfont","family":"Quicksand","category":"sans-serif","variants":["300","regular","500","700"],"subsets":["latin-ext","vietnamese","latin"],"version":"v7","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/quicksand/v7/qhfoJiLu10kFjChCCTvGlC3USBnSvpkopQaUR-2r7iU.ttf","500":"http://fonts.gstatic.com/s/quicksand/v7/FRGja7LlrG1Mypm0hCq0Di3USBnSvpkopQaUR-2r7iU.ttf","700":"http://fonts.gstatic.com/s/quicksand/v7/32nyIRHyCu6iqEka_hbKsi3USBnSvpkopQaUR-2r7iU.ttf","regular":"http://fonts.gstatic.com/s/quicksand/v7/Ngv3fIJjKB7sD-bTUGIFCA.ttf"}},{"kind":"webfonts#webfont","family":"Quintessential","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/quintessential/v5/mmk6ioesnTrEky_Zb92E5s02lXbtMOtZWfuxKeMZO8Q.ttf"}},{"kind":"webfonts#webfont","family":"Qwigley","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/qwigley/v7/aDqxws-KubFID85TZHFouw.ttf"}},{"kind":"webfonts#webfont","family":"Racing Sans One","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/racingsansone/v5/1r3DpWaCiT7y3PD4KgkNyDjVlsJB_M_Q_LtZxsoxvlw.ttf"}},{"kind":"webfonts#webfont","family":"Radley","category":"serif","variants":["regular","italic"],"subsets":["latin-ext","latin"],"version":"v12","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/radley/v12/FgE9di09a-mXGzAIyI6Q9Q.ttf","italic":"http://fonts.gstatic.com/s/radley/v12/Z_JcACuPAOO2f9kzQcGRug.ttf"}},{"kind":"webfonts#webfont","family":"Rajdhani","category":"sans-serif","variants":["300","regular","500","600","700"],"subsets":["devanagari","latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/rajdhani/v7/9pItuEhQZVGdq8spnHTku6CWcynf_cDxXwCLxiixG1c.ttf","500":"http://fonts.gstatic.com/s/rajdhani/v7/nd_5ZpVwm710HcLual0fBqCWcynf_cDxXwCLxiixG1c.ttf","600":"http://fonts.gstatic.com/s/rajdhani/v7/5fnmZahByDeTtgxIiqbJSaCWcynf_cDxXwCLxiixG1c.ttf","700":"http://fonts.gstatic.com/s/rajdhani/v7/UBK6d2Hg7X7wYLlF92aXW6CWcynf_cDxXwCLxiixG1c.ttf","regular":"http://fonts.gstatic.com/s/rajdhani/v7/Wfy5zp4PGFAFS7-Wetehzw.ttf"}},{"kind":"webfonts#webfont","family":"Rakkas","category":"display","variants":["regular"],"subsets":["arabic","latin-ext","latin"],"version":"v2","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/rakkas/v2/XWSZpoSbAR4myQgKbSJM9A.ttf"}},{"kind":"webfonts#webfont","family":"Raleway","category":"sans-serif","variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"subsets":["latin-ext","latin"],"version":"v12","lastModified":"2017-10-11","files":{"100":"http://fonts.gstatic.com/s/raleway/v12/UDfD6oxBaBnmFJwQ7XAFNw.ttf","200":"http://fonts.gstatic.com/s/raleway/v12/LAQwev4hdCtYkOYX4Oc7nPesZW2xOQ-xsNqO47m55DA.ttf","300":"http://fonts.gstatic.com/s/raleway/v12/2VvSZU2kb4DZwFfRM4fLQPesZW2xOQ-xsNqO47m55DA.ttf","500":"http://fonts.gstatic.com/s/raleway/v12/348gn6PEmbLDWlHbbV15d_esZW2xOQ-xsNqO47m55DA.ttf","600":"http://fonts.gstatic.com/s/raleway/v12/M7no6oPkwKYJkedjB1wqEvesZW2xOQ-xsNqO47m55DA.ttf","700":"http://fonts.gstatic.com/s/raleway/v12/VGEV9-DrblisWOWLbK-1XPesZW2xOQ-xsNqO47m55DA.ttf","800":"http://fonts.gstatic.com/s/raleway/v12/mMh0JrsYMXcLO69jgJwpUvesZW2xOQ-xsNqO47m55DA.ttf","900":"http://fonts.gstatic.com/s/raleway/v12/ajQQGcDBLcyLpaUfD76UuPesZW2xOQ-xsNqO47m55DA.ttf","100italic":"http://fonts.gstatic.com/s/raleway/v12/hUpHtml6IPNuUR-FwVi2UKCWcynf_cDxXwCLxiixG1c.ttf","200italic":"http://fonts.gstatic.com/s/raleway/v12/N2DIbZG4399cPGfifZUEQi3USBnSvpkopQaUR-2r7iU.ttf","300italic":"http://fonts.gstatic.com/s/raleway/v12/TVSB8ogXDKMcnAAJ5CqrUi3USBnSvpkopQaUR-2r7iU.ttf","regular":"http://fonts.gstatic.com/s/raleway/v12/_dCzxpXzIS3sL-gdJWAP8A.ttf","italic":"http://fonts.gstatic.com/s/raleway/v12/utU2m1gdZSfuQpArSy5Dbw.ttf","500italic":"http://fonts.gstatic.com/s/raleway/v12/S7vGLZZ40c85SJgiptJGVy3USBnSvpkopQaUR-2r7iU.ttf","600italic":"http://fonts.gstatic.com/s/raleway/v12/OY22yoG8EJ3IN_muVWm29C3USBnSvpkopQaUR-2r7iU.ttf","700italic":"http://fonts.gstatic.com/s/raleway/v12/lFxvRPuGFG5ktd7P0WRwKi3USBnSvpkopQaUR-2r7iU.ttf","800italic":"http://fonts.gstatic.com/s/raleway/v12/us4LjTCmlYgh3W8CKujEJi3USBnSvpkopQaUR-2r7iU.ttf","900italic":"http://fonts.gstatic.com/s/raleway/v12/oY2RadnkHfshu5f0FLsgVS3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Raleway Dots","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/ralewaydots/v5/lhLgmWCRcyz-QXo8LCzTfC3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Ramabhadra","category":"sans-serif","variants":["regular"],"subsets":["telugu","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/ramabhadra/v6/JyhxLXRVQChLDGADS_c5MPesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Ramaraja","category":"serif","variants":["regular"],"subsets":["telugu","latin"],"version":"v2","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/ramaraja/v2/XIqzxFapVczstBedHdQTiw.ttf"}},{"kind":"webfonts#webfont","family":"Rambla","category":"sans-serif","variants":["regular","italic","700","700italic"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/rambla/v5/C5VZH8BxQKmnBuoC00UPpw.ttf","regular":"http://fonts.gstatic.com/s/rambla/v5/YaTmpvm5gFg_ShJKTQmdzg.ttf","italic":"http://fonts.gstatic.com/s/rambla/v5/mhUgsKmp0qw3uATdDDAuwA.ttf","700italic":"http://fonts.gstatic.com/s/rambla/v5/ziMzUZya6QahrKONSI1TzqCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Rammetto One","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/rammettoone/v6/mh0uQ1tV8QgSx9v_KyEYPC3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Ranchers","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/ranchers/v5/9ya8CZYhqT66VERfjQ7eLA.ttf"}},{"kind":"webfonts#webfont","family":"Rancho","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/rancho/v8/ekp3-4QykC4--6KaslRgHA.ttf"}},{"kind":"webfonts#webfont","family":"Ranga","category":"display","variants":["regular","700"],"subsets":["devanagari","latin-ext","latin"],"version":"v3","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/ranga/v3/h8G_gEUH7vHKH-NkjAs34A.ttf","regular":"http://fonts.gstatic.com/s/ranga/v3/xpW6zFTNzY1JykoBIqE1Zg.ttf"}},{"kind":"webfonts#webfont","family":"Rasa","category":"serif","variants":["300","regular","500","600","700"],"subsets":["latin-ext","gujarati","latin"],"version":"v3","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/rasa/v3/XQ1gDq2EqBtGcdadPyPbww.ttf","500":"http://fonts.gstatic.com/s/rasa/v3/HfsDi_Ls3NARO_YEODINGg.ttf","600":"http://fonts.gstatic.com/s/rasa/v3/f-fvbq-hWIQCdmT3QHGk3Q.ttf","700":"http://fonts.gstatic.com/s/rasa/v3/TSF3CG-8Cn72jvaVdqtMMQ.ttf","regular":"http://fonts.gstatic.com/s/rasa/v3/A5PoJUwX_PxTsywxlRB79g.ttf"}},{"kind":"webfonts#webfont","family":"Rationale","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/rationale/v8/7M2eN-di0NGLQse7HzJRfg.ttf"}},{"kind":"webfonts#webfont","family":"Ravi Prakash","category":"display","variants":["regular"],"subsets":["telugu","latin"],"version":"v4","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/raviprakash/v4/8EzbM7Rymjk25jWeHxbO6C3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Redressed","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/redressed/v8/3aZ5sTBppH3oSm5SabegtA.ttf"}},{"kind":"webfonts#webfont","family":"Reem Kufi","category":"sans-serif","variants":["regular"],"subsets":["arabic","latin"],"version":"v3","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/reemkufi/v3/xLwMbK_T1g-h9p-rp60A1Q.ttf"}},{"kind":"webfonts#webfont","family":"Reenie Beanie","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/reeniebeanie/v8/ljpKc6CdXusL1cnGUSamX4jjx0o0jr6fNXxPgYh_a8Q.ttf"}},{"kind":"webfonts#webfont","family":"Revalia","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/revalia/v5/1TKw66fF5_poiL0Ktgo4_A.ttf"}},{"kind":"webfonts#webfont","family":"Rhodium Libre","category":"serif","variants":["regular"],"subsets":["devanagari","latin-ext","latin"],"version":"v2","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/rhodiumlibre/v2/Vxr7A4-xE2zsBDDI8BcseIjjx0o0jr6fNXxPgYh_a8Q.ttf"}},{"kind":"webfonts#webfont","family":"Ribeye","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/ribeye/v6/e5w3VE8HnWBln4Ll6lUj3Q.ttf"}},{"kind":"webfonts#webfont","family":"Ribeye Marrow","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/ribeyemarrow/v7/q7cBSA-4ErAXBCDFPrhlY0cTNmV93fYG7UKgsLQNQWs.ttf"}},{"kind":"webfonts#webfont","family":"Righteous","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/righteous/v6/0nRRWM_gCGCt2S-BCfN8WQ.ttf"}},{"kind":"webfonts#webfont","family":"Risque","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/risque/v5/92RnElGnl8yHP97-KV3Fyg.ttf"}},{"kind":"webfonts#webfont","family":"Roboto","category":"sans-serif","variants":["100","100italic","300","300italic","regular","italic","500","500italic","700","700italic","900","900italic"],"subsets":["cyrillic","latin-ext","cyrillic-ext","greek","vietnamese","greek-ext","latin"],"version":"v16","lastModified":"2017-04-17","files":{"100":"http://fonts.gstatic.com/s/roboto/v16/7MygqTe2zs9YkP0adA9QQQ.ttf","300":"http://fonts.gstatic.com/s/roboto/v16/dtpHsbgPEm2lVWciJZ0P-A.ttf","500":"http://fonts.gstatic.com/s/roboto/v16/Uxzkqj-MIMWle-XP2pDNAA.ttf","700":"http://fonts.gstatic.com/s/roboto/v16/bdHGHleUa-ndQCOrdpfxfw.ttf","900":"http://fonts.gstatic.com/s/roboto/v16/H1vB34nOKWXqzKotq25pcg.ttf","100italic":"http://fonts.gstatic.com/s/roboto/v16/T1xnudodhcgwXCmZQ490TPesZW2xOQ-xsNqO47m55DA.ttf","300italic":"http://fonts.gstatic.com/s/roboto/v16/iE8HhaRzdhPxC93dOdA056CWcynf_cDxXwCLxiixG1c.ttf","regular":"http://fonts.gstatic.com/s/roboto/v16/W5F8_SL0XFawnjxHGsZjJA.ttf","italic":"http://fonts.gstatic.com/s/roboto/v16/hcKoSgxdnKlbH5dlTwKbow.ttf","500italic":"http://fonts.gstatic.com/s/roboto/v16/daIfzbEw-lbjMyv4rMUUTqCWcynf_cDxXwCLxiixG1c.ttf","700italic":"http://fonts.gstatic.com/s/roboto/v16/owYYXKukxFDFjr0ZO8NXh6CWcynf_cDxXwCLxiixG1c.ttf","900italic":"http://fonts.gstatic.com/s/roboto/v16/b9PWBSMHrT2zM5FgUdtu0aCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Roboto Condensed","category":"sans-serif","variants":["300","300italic","regular","italic","700","700italic"],"subsets":["cyrillic","latin-ext","cyrillic-ext","greek","vietnamese","greek-ext","latin"],"version":"v16","lastModified":"2017-10-11","files":{"300":"http://fonts.gstatic.com/s/robotocondensed/v16/b9QBgL0iMZfDSpmcXcE8nJRhFVcex_hajThhFkHyhYk.ttf","700":"http://fonts.gstatic.com/s/robotocondensed/v16/b9QBgL0iMZfDSpmcXcE8nPOYkGiSOYDq_T7HbIOV1hA.ttf","300italic":"http://fonts.gstatic.com/s/robotocondensed/v16/mg0cGfGRUERshzBlvqxeAPYa9bgCHecWXGgisnodcS0.ttf","regular":"http://fonts.gstatic.com/s/robotocondensed/v16/Zd2E9abXLFGSr9G3YK2MsKDbm6fPDOZJsR8PmdG62gY.ttf","italic":"http://fonts.gstatic.com/s/robotocondensed/v16/BP5K8ZAJv9qEbmuFp8RpJY_eiqgTfYGaH0bJiUDZ5GA.ttf","700italic":"http://fonts.gstatic.com/s/robotocondensed/v16/mg0cGfGRUERshzBlvqxeAE2zk2RGRC3SlyyLLQfjS_8.ttf"}},{"kind":"webfonts#webfont","family":"Roboto Mono","category":"monospace","variants":["100","100italic","300","300italic","regular","italic","500","500italic","700","700italic"],"subsets":["cyrillic","latin-ext","cyrillic-ext","greek","vietnamese","greek-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/robotomono/v5/aOIeRp72J9_Hp_8KwQ9M-YAWxXGWZ3yJw6KhWS7MxOk.ttf","300":"http://fonts.gstatic.com/s/robotomono/v5/N4duVc9C58uwPiY8_59Fzy9-WlPSxbfiI49GsXo3q0g.ttf","500":"http://fonts.gstatic.com/s/robotomono/v5/N4duVc9C58uwPiY8_59Fz8CNfqCYlB_eIx7H1TVXe60.ttf","700":"http://fonts.gstatic.com/s/robotomono/v5/N4duVc9C58uwPiY8_59Fz3e1Pd76Vl7zRpE7NLJQ7XU.ttf","100italic":"http://fonts.gstatic.com/s/robotomono/v5/rqQ1zSE-ZGCKVZgew-A9dgyDtfpXZi-8rXUZYR4dumU.ttf","300italic":"http://fonts.gstatic.com/s/robotomono/v5/1OsMuiiO6FCF2x67vzDKA2o9eWDfYYxG3A176Zl7aIg.ttf","regular":"http://fonts.gstatic.com/s/robotomono/v5/eJ4cxQe85Lo39t-LVoKa26CWcynf_cDxXwCLxiixG1c.ttf","italic":"http://fonts.gstatic.com/s/robotomono/v5/mE0EPT_93c7f86_WQexR3EeOrDcLawS7-ssYqLr2Xp4.ttf","500italic":"http://fonts.gstatic.com/s/robotomono/v5/1OsMuiiO6FCF2x67vzDKA2nWRcJAYo5PSCx8UfGMHCI.ttf","700italic":"http://fonts.gstatic.com/s/robotomono/v5/1OsMuiiO6FCF2x67vzDKA8_zJjSACmk0BRPxQqhnNLU.ttf"}},{"kind":"webfonts#webfont","family":"Roboto Slab","category":"serif","variants":["100","300","regular","700"],"subsets":["cyrillic","latin-ext","cyrillic-ext","greek","vietnamese","greek-ext","latin"],"version":"v7","lastModified":"2017-10-11","files":{"100":"http://fonts.gstatic.com/s/robotoslab/v7/MEz38VLIFL-t46JUtkIEgIAWxXGWZ3yJw6KhWS7MxOk.ttf","300":"http://fonts.gstatic.com/s/robotoslab/v7/dazS1PrQQuCxC3iOAJFEJS9-WlPSxbfiI49GsXo3q0g.ttf","700":"http://fonts.gstatic.com/s/robotoslab/v7/dazS1PrQQuCxC3iOAJFEJXe1Pd76Vl7zRpE7NLJQ7XU.ttf","regular":"http://fonts.gstatic.com/s/robotoslab/v7/3__ulTNA7unv0UtplybPiqCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Rochester","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/rochester/v8/bnj8tmQBiOkdji_G_yvypg.ttf"}},{"kind":"webfonts#webfont","family":"Rock Salt","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/rocksalt/v8/Zy7JF9h9WbhD9V3SFMQ1UQ.ttf"}},{"kind":"webfonts#webfont","family":"Rokkitt","category":"serif","variants":["100","200","300","regular","500","600","700","800","900"],"subsets":["latin-ext","vietnamese","latin"],"version":"v12","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/rokkitt/v12/_3YC6rPA1FdHK3T5HJAiKA.ttf","200":"http://fonts.gstatic.com/s/rokkitt/v12/YawjzRx4kAyF2FdhIXfg1_esZW2xOQ-xsNqO47m55DA.ttf","300":"http://fonts.gstatic.com/s/rokkitt/v12/Cw0HfZi5axnl2GTVcAe4x_esZW2xOQ-xsNqO47m55DA.ttf","500":"http://fonts.gstatic.com/s/rokkitt/v12/jSxUaZL9JCo117IMemf-iPesZW2xOQ-xsNqO47m55DA.ttf","600":"http://fonts.gstatic.com/s/rokkitt/v12/b4_SvUo9hy0bV60RoA1RKPesZW2xOQ-xsNqO47m55DA.ttf","700":"http://fonts.gstatic.com/s/rokkitt/v12/gxlo-sr3rPmvgSixYog_ofesZW2xOQ-xsNqO47m55DA.ttf","800":"http://fonts.gstatic.com/s/rokkitt/v12/mCok2W9ZHFgB-LY6ITuapfesZW2xOQ-xsNqO47m55DA.ttf","900":"http://fonts.gstatic.com/s/rokkitt/v12/riY221k9xwvseUAhNXMjQPesZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/rokkitt/v12/GMA7Z_ToF8uSvpZAgnp_VQ.ttf"}},{"kind":"webfonts#webfont","family":"Romanesco","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/romanesco/v6/2udIjUrpK_CPzYSxRVzD4Q.ttf"}},{"kind":"webfonts#webfont","family":"Ropa Sans","category":"sans-serif","variants":["regular","italic"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/ropasans/v7/Gba7ZzVBuhg6nX_AoSwlkQ.ttf","italic":"http://fonts.gstatic.com/s/ropasans/v7/V1zbhZQscNrh63dy5Jk2nqCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Rosario","category":"sans-serif","variants":["regular","italic","700","700italic"],"subsets":["latin"],"version":"v12","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/rosario/v12/nrS6PJvDWN42RP4TFWccd_esZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/rosario/v12/bL-cEh8dXtDupB2WccA2LA.ttf","italic":"http://fonts.gstatic.com/s/rosario/v12/pkflNy18HEuVVx4EOjeb_Q.ttf","700italic":"http://fonts.gstatic.com/s/rosario/v12/EOgFX2Va5VGrkhn_eDpIRS3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Rosarivo","category":"serif","variants":["regular","italic"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/rosarivo/v5/EmPiINK0qyqc7KSsNjJamA.ttf","italic":"http://fonts.gstatic.com/s/rosarivo/v5/u3VuWsWQlX1pDqsbz4paNPesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Rouge Script","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/rougescript/v6/AgXDSqZJmy12qS0ixjs6Vy3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Rozha One","category":"serif","variants":["regular"],"subsets":["devanagari","latin-ext","latin"],"version":"v4","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/rozhaone/v4/PyrMHQ6lucEIxwKmhqsX8A.ttf"}},{"kind":"webfonts#webfont","family":"Rubik","category":"sans-serif","variants":["300","300italic","regular","italic","500","500italic","700","700italic","900","900italic"],"subsets":["hebrew","cyrillic","latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/rubik/v7/o1vXYO8YwDpErHEAPAxpOg.ttf","500":"http://fonts.gstatic.com/s/rubik/v7/D4HihERG27s-BJrQ4dvkbw.ttf","700":"http://fonts.gstatic.com/s/rubik/v7/m1GGHcpLe6Mb0_sAyjXE4g.ttf","900":"http://fonts.gstatic.com/s/rubik/v7/mOHfPRl5uP4vw7-5-dbnng.ttf","300italic":"http://fonts.gstatic.com/s/rubik/v7/NyXDvUhvZLSWiVfGa5KM-vesZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/rubik/v7/4sMyW_teKWHB3K8Hm-Il6A.ttf","italic":"http://fonts.gstatic.com/s/rubik/v7/elD65ddI0qvNcCh42b1Iqg.ttf","500italic":"http://fonts.gstatic.com/s/rubik/v7/0hcxMdoMbXtHiEM1ebdN6PesZW2xOQ-xsNqO47m55DA.ttf","700italic":"http://fonts.gstatic.com/s/rubik/v7/R4g_rs714cUXVZcdnRdHw_esZW2xOQ-xsNqO47m55DA.ttf","900italic":"http://fonts.gstatic.com/s/rubik/v7/HH1b7kBbwInqlw8OQxRE5vesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Rubik Mono One","category":"sans-serif","variants":["regular"],"subsets":["cyrillic","latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/rubikmonoone/v6/e_cupPtD4BrZzotubJD7UbAREgn5xbW23GEXXnhMQ5Y.ttf"}},{"kind":"webfonts#webfont","family":"Ruda","category":"sans-serif","variants":["regular","700","900"],"subsets":["latin-ext","latin"],"version":"v9","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/ruda/v9/JABOu1SYOHcGXVejUq4w6g.ttf","900":"http://fonts.gstatic.com/s/ruda/v9/Uzusv-enCjoIrznlJJaBRw.ttf","regular":"http://fonts.gstatic.com/s/ruda/v9/jPEIPB7DM2DNK_uBGv2HGw.ttf"}},{"kind":"webfonts#webfont","family":"Rufina","category":"serif","variants":["regular","700"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/rufina/v5/D0RUjXFr55y4MVZY2Ww_RA.ttf","regular":"http://fonts.gstatic.com/s/rufina/v5/s9IFr_fIemiohfZS-ZRDbQ.ttf"}},{"kind":"webfonts#webfont","family":"Ruge Boogie","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v8","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/rugeboogie/v8/U-TTmltL8aENLVIqYbI5QaCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Ruluko","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/ruluko/v5/lv4cMwJtrx_dzmlK5SDc1g.ttf"}},{"kind":"webfonts#webfont","family":"Rum Raisin","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/rumraisin/v5/kDiL-ntDOEq26B7kYM7cx_esZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Ruslan Display","category":"display","variants":["regular"],"subsets":["cyrillic","latin-ext","latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/ruslandisplay/v8/SREdhlyLNUfU1VssRBfs3rgH88D3l9N4auRNHrNS708.ttf"}},{"kind":"webfonts#webfont","family":"Russo One","category":"sans-serif","variants":["regular"],"subsets":["cyrillic","latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/russoone/v6/zfwxZ--UhUc7FVfgT21PRQ.ttf"}},{"kind":"webfonts#webfont","family":"Ruthie","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/ruthie/v7/vJ2LorukHSbWYoEs5juivg.ttf"}},{"kind":"webfonts#webfont","family":"Rye","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/rye/v5/VUrJlpPpSZxspl3w_yNOrQ.ttf"}},{"kind":"webfonts#webfont","family":"Sacramento","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/sacramento/v5/_kv-qycSHMNdhjiv0Kj7BvesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Sahitya","category":"serif","variants":["regular","700"],"subsets":["devanagari","latin"],"version":"v2","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/sahitya/v2/Zm5hNvMwUyN3tC4GMkH1l_esZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/sahitya/v2/wQWULcDbZqljdTfjOUtDvw.ttf"}},{"kind":"webfonts#webfont","family":"Sail","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/sail/v8/iuEoG6kt-bePGvtdpL0GUQ.ttf"}},{"kind":"webfonts#webfont","family":"Saira","category":"sans-serif","variants":["100","200","300","regular","500","600","700","800","900"],"subsets":["latin-ext","vietnamese","latin"],"version":"v2","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/saira/v2/Ozk8do2fTcpbNH9fymkZGg.ttf","200":"http://fonts.gstatic.com/s/saira/v2/IqoIheMFTgcbZXFWbGwENA.ttf","300":"http://fonts.gstatic.com/s/saira/v2/ANavK9Yw1m9jo7r6xy-MSg.ttf","500":"http://fonts.gstatic.com/s/saira/v2/8JTYqpjvzQP3oTjzUn8w7Q.ttf","600":"http://fonts.gstatic.com/s/saira/v2/7TS8zxqrCaFpOEscLh1xXg.ttf","700":"http://fonts.gstatic.com/s/saira/v2/Vmcd_0w8o16ONteEu2UzSw.ttf","800":"http://fonts.gstatic.com/s/saira/v2/R-CIR5SYaB7pZZbF4KBcmg.ttf","900":"http://fonts.gstatic.com/s/saira/v2/NkJ3cJqxlFuVNRn8L9vVsg.ttf","regular":"http://fonts.gstatic.com/s/saira/v2/Xscf3I_Twe9a3mnmbLi5XQ.ttf"}},{"kind":"webfonts#webfont","family":"Saira Condensed","category":"sans-serif","variants":["100","200","300","regular","500","600","700","800","900"],"subsets":["latin-ext","vietnamese","latin"],"version":"v3","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/sairacondensed/v3/g6ZiOTAus3rTCuLbft-lrhQ4ZQgT5IY6T956D4i2DOg.ttf","200":"http://fonts.gstatic.com/s/sairacondensed/v3/iBnVn24meOdNw5Ie3y-w-t_1mjc__NNUUqnuBhyrdnQ.ttf","300":"http://fonts.gstatic.com/s/sairacondensed/v3/iBnVn24meOdNw5Ie3y-w-mOGg88i8doN2x6-0_j_XSs.ttf","500":"http://fonts.gstatic.com/s/sairacondensed/v3/iBnVn24meOdNw5Ie3y-w-gRL_-ABKXdjsJSPT0lc2Bk.ttf","600":"http://fonts.gstatic.com/s/sairacondensed/v3/iBnVn24meOdNw5Ie3y-w-rS5sSASxc8z4EQTQj7DCAI.ttf","700":"http://fonts.gstatic.com/s/sairacondensed/v3/iBnVn24meOdNw5Ie3y-w-sAWgzcA047xWLixhLCofl8.ttf","800":"http://fonts.gstatic.com/s/sairacondensed/v3/iBnVn24meOdNw5Ie3y-w-hVl4JojgVAnfiwswP7KrtY.ttf","900":"http://fonts.gstatic.com/s/sairacondensed/v3/iBnVn24meOdNw5Ie3y-w-mCsDIq3El29Rd5VD3daJ_M.ttf","regular":"http://fonts.gstatic.com/s/sairacondensed/v3/RzMaXT8ujYB0FpOoZJ_AtSQPsWWoiv__AzYJ9Zzn9II.ttf"}},{"kind":"webfonts#webfont","family":"Saira Extra Condensed","category":"sans-serif","variants":["100","200","300","regular","500","600","700","800","900"],"subsets":["latin-ext","vietnamese","latin"],"version":"v3","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/sairaextracondensed/v3/fW6xdUWepu0r8HZYLdXhdSi7tdGxScTr3oVgcrTUqWw.ttf","200":"http://fonts.gstatic.com/s/sairaextracondensed/v3/XVu3ZHO65MpX5FDLl4hwfa1IHoFZjDq9yl49NJ3Y0wY.ttf","300":"http://fonts.gstatic.com/s/sairaextracondensed/v3/XVu3ZHO65MpX5FDLl4hwfeZroXgFx_lT3TTeDaAqrWE.ttf","500":"http://fonts.gstatic.com/s/sairaextracondensed/v3/XVu3ZHO65MpX5FDLl4hwfa4Ixr3FMLIaz6yY1ILODIU.ttf","600":"http://fonts.gstatic.com/s/sairaextracondensed/v3/XVu3ZHO65MpX5FDLl4hwfcMHImBNo4aGUuMCjGiDijI.ttf","700":"http://fonts.gstatic.com/s/sairaextracondensed/v3/XVu3ZHO65MpX5FDLl4hwfbGMx7y0UuyPIsLqSMg46Ks.ttf","800":"http://fonts.gstatic.com/s/sairaextracondensed/v3/XVu3ZHO65MpX5FDLl4hwff3VPWKD9LjLpSGgTAgUUIc.ttf","900":"http://fonts.gstatic.com/s/sairaextracondensed/v3/XVu3ZHO65MpX5FDLl4hwfb3y6LE9HhLx9tlnlwi3OAw.ttf","regular":"http://fonts.gstatic.com/s/sairaextracondensed/v3/3XMbuc1UIdE_Bo4eJ-H3G4elbRYnLTTQA1Z5cVLnsI4.ttf"}},{"kind":"webfonts#webfont","family":"Saira Semi Condensed","category":"sans-serif","variants":["100","200","300","regular","500","600","700","800","900"],"subsets":["latin-ext","vietnamese","latin"],"version":"v3","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/sairasemicondensed/v3/W0qqtuwvTyZEzthCisMvJNpUFoAgdo3N6uMK4qBKl14.ttf","200":"http://fonts.gstatic.com/s/sairasemicondensed/v3/AqP7QX0TdaZHs8pWxeHdZXmwZH8Mj4a8GCt9BVpguoM.ttf","300":"http://fonts.gstatic.com/s/sairasemicondensed/v3/AqP7QX0TdaZHs8pWxeHdZf41r7gBuORyHypyaMk5V7M.ttf","500":"http://fonts.gstatic.com/s/sairasemicondensed/v3/AqP7QX0TdaZHs8pWxeHdZQTR7LyNMQKOmEK2zaPVo7k.ttf","600":"http://fonts.gstatic.com/s/sairasemicondensed/v3/AqP7QX0TdaZHs8pWxeHdZYxOyuVPIqzYlTscMcnFFdw.ttf","700":"http://fonts.gstatic.com/s/sairasemicondensed/v3/AqP7QX0TdaZHs8pWxeHdZVhvgkvS4Vb80oyvTRs3xAw.ttf","800":"http://fonts.gstatic.com/s/sairasemicondensed/v3/AqP7QX0TdaZHs8pWxeHdZbgNSs8Rfv-SK6bauL4DA_k.ttf","900":"http://fonts.gstatic.com/s/sairasemicondensed/v3/AqP7QX0TdaZHs8pWxeHdZftJ9g8-32R6gX5VB508ZS0.ttf","regular":"http://fonts.gstatic.com/s/sairasemicondensed/v3/E1gvqhdADptsO-uwP-KYOplmjOf-f3WTIBZyrvssS_s.ttf"}},{"kind":"webfonts#webfont","family":"Salsa","category":"display","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/salsa/v7/BnpUCBmYdvggScEPs5JbpA.ttf"}},{"kind":"webfonts#webfont","family":"Sanchez","category":"serif","variants":["regular","italic"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/sanchez/v5/BEL8ao-E2LJ5eHPLB2UAiw.ttf","italic":"http://fonts.gstatic.com/s/sanchez/v5/iSrhkWLexUZzDeNxNEHtzA.ttf"}},{"kind":"webfonts#webfont","family":"Sancreek","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/sancreek/v8/8ZacBMraWMvHly4IJI3esw.ttf"}},{"kind":"webfonts#webfont","family":"Sansita","category":"sans-serif","variants":["regular","italic","700","700italic","800","800italic","900","900italic"],"subsets":["latin-ext","latin"],"version":"v2","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/sansita/v2/q9hPUXq37zR3BVunMJi2HfesZW2xOQ-xsNqO47m55DA.ttf","800":"http://fonts.gstatic.com/s/sansita/v2/vOIsA3n-LuVE_PeoZ3aSFfesZW2xOQ-xsNqO47m55DA.ttf","900":"http://fonts.gstatic.com/s/sansita/v2/lwgTmJASMyrLsXnTfRSt7fesZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/sansita/v2/ey9oYobmakEwtEciY0G5Mg.ttf","italic":"http://fonts.gstatic.com/s/sansita/v2/UkWzQlyaYvMqX8-kX9fI1A.ttf","700italic":"http://fonts.gstatic.com/s/sansita/v2/Izkki8H_L5Nxxk6vpKrxXS3USBnSvpkopQaUR-2r7iU.ttf","800italic":"http://fonts.gstatic.com/s/sansita/v2/4OvihNMj_b3nyu4KlgNNVS3USBnSvpkopQaUR-2r7iU.ttf","900italic":"http://fonts.gstatic.com/s/sansita/v2/JTPHz0Wyy3AImmVqi8CQTy3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Sarala","category":"sans-serif","variants":["regular","700"],"subsets":["devanagari","latin-ext","latin"],"version":"v2","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/sarala/v2/hpc9cz8KYsazwq2In_oJYw.ttf","regular":"http://fonts.gstatic.com/s/sarala/v2/ohip9lixCHoBab7hTtgLnw.ttf"}},{"kind":"webfonts#webfont","family":"Sarina","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/sarina/v6/XYtRfaSknHIU3NHdfTdXoQ.ttf"}},{"kind":"webfonts#webfont","family":"Sarpanch","category":"sans-serif","variants":["regular","500","600","700","800","900"],"subsets":["devanagari","latin-ext","latin"],"version":"v3","lastModified":"2017-10-10","files":{"500":"http://fonts.gstatic.com/s/sarpanch/v3/Ov7BxSrFSZYrfuJxL1LzQaCWcynf_cDxXwCLxiixG1c.ttf","600":"http://fonts.gstatic.com/s/sarpanch/v3/WTnP2wnc0qSbUaaDG-2OQ6CWcynf_cDxXwCLxiixG1c.ttf","700":"http://fonts.gstatic.com/s/sarpanch/v3/57kYsSpovYmFaEt2hsZhv6CWcynf_cDxXwCLxiixG1c.ttf","800":"http://fonts.gstatic.com/s/sarpanch/v3/OKyqPLjdnuVghR-1TV6RzaCWcynf_cDxXwCLxiixG1c.ttf","900":"http://fonts.gstatic.com/s/sarpanch/v3/JhYc2cr6kqWTo_P0vfvJR6CWcynf_cDxXwCLxiixG1c.ttf","regular":"http://fonts.gstatic.com/s/sarpanch/v3/YMBZdT27b6O5a1DADbAGSg.ttf"}},{"kind":"webfonts#webfont","family":"Satisfy","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/satisfy/v8/PRlyepkd-JCGHiN8e9WV2w.ttf"}},{"kind":"webfonts#webfont","family":"Scada","category":"sans-serif","variants":["regular","italic","700","700italic"],"subsets":["cyrillic","latin-ext","cyrillic-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/scada/v6/t6XNWdMdVWUz93EuRVmifQ.ttf","regular":"http://fonts.gstatic.com/s/scada/v6/iZNC3ZEYwe3je6H-28d5Ug.ttf","italic":"http://fonts.gstatic.com/s/scada/v6/PCGyLT1qNawkOUQ3uHFhBw.ttf","700italic":"http://fonts.gstatic.com/s/scada/v6/kLrBIf7V4mDMwcd_Yw7-D_esZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Scheherazade","category":"serif","variants":["regular","700"],"subsets":["arabic","latin"],"version":"v13","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/scheherazade/v13/C1wtT46acJkQxc6mPHwvHED2ttfZwueP-QU272T9-k4.ttf","regular":"http://fonts.gstatic.com/s/scheherazade/v13/AuKlqGWzUC-8XqMOmsqXiy3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Schoolbell","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/schoolbell/v8/95-3djEuubb3cJx-6E7j4vesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Scope One","category":"serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v3","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/scopeone/v3/ge7dY8Yht-n7_1cLHtoT3w.ttf"}},{"kind":"webfonts#webfont","family":"Seaweed Script","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/seaweedscript/v5/eorWAPpOvvWrPw5IHwE60BnpV0hQCek3EmWnCPrvGRM.ttf"}},{"kind":"webfonts#webfont","family":"Secular One","category":"sans-serif","variants":["regular"],"subsets":["hebrew","latin-ext","latin"],"version":"v2","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/secularone/v2/yW9qikjpt_X0fh5oQJcdo6CWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Sedgwick Ave","category":"handwriting","variants":["regular"],"subsets":["latin-ext","vietnamese","latin"],"version":"v3","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/sedgwickave/v3/pbgmsWX_2A5V-qqzaczoEy3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Sedgwick Ave Display","category":"handwriting","variants":["regular"],"subsets":["latin-ext","vietnamese","latin"],"version":"v3","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/sedgwickavedisplay/v3/_2bQpgd1Hl3UOD3yDrU-cP912kD9slMJGfCNYtCeVl4.ttf"}},{"kind":"webfonts#webfont","family":"Sevillana","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/sevillana/v5/6m1Nh35oP7YEt00U80Smiw.ttf"}},{"kind":"webfonts#webfont","family":"Seymour One","category":"sans-serif","variants":["regular"],"subsets":["cyrillic","latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/seymourone/v5/HrdG2AEG_870Xb7xBVv6C6CWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Shadows Into Light","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/shadowsintolight/v7/clhLqOv7MXn459PTh0gXYAW_5bEze-iLRNvGrRpJsfM.ttf"}},{"kind":"webfonts#webfont","family":"Shadows Into Light Two","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/shadowsintolighttwo/v5/gDxHeefcXIo-lOuZFCn2xVQrZk-Pga5KeEE_oZjkQjQ.ttf"}},{"kind":"webfonts#webfont","family":"Shanti","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/shanti/v9/lc4nG_JG6Q-2FQSOMMhb_w.ttf"}},{"kind":"webfonts#webfont","family":"Share","category":"display","variants":["regular","italic","700","700italic"],"subsets":["latin-ext","latin"],"version":"v8","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/share/v8/XrU8e7a1YKurguyY2azk1Q.ttf","regular":"http://fonts.gstatic.com/s/share/v8/1ytD7zSb_-g9I2GG67vmVw.ttf","italic":"http://fonts.gstatic.com/s/share/v8/a9YGdQWFRlNJ0zClJVaY3Q.ttf","700italic":"http://fonts.gstatic.com/s/share/v8/A992-bLVYwAflKu6iaznufesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Share Tech","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/sharetech/v7/Dq3DuZ5_0SW3oEfAWFpen_esZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Share Tech Mono","category":"monospace","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/sharetechmono/v7/RQxK-3RA0Lnf3gnnnNrAscwD6PD0c3_abh9zHKQtbGU.ttf"}},{"kind":"webfonts#webfont","family":"Shojumaru","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/shojumaru/v5/WP8cxonzQQVAoI3RJQ2wug.ttf"}},{"kind":"webfonts#webfont","family":"Short Stack","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/shortstack/v7/v4dXPI0Rm8XN9gk4SDdqlqCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Shrikhand","category":"display","variants":["regular"],"subsets":["latin-ext","gujarati","latin"],"version":"v3","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/shrikhand/v3/45jwHiwIDTWCy3Ir85vvKA.ttf"}},{"kind":"webfonts#webfont","family":"Siemreap","category":"display","variants":["regular"],"subsets":["khmer"],"version":"v10","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/siemreap/v10/JSK-mOIsXwxo-zE9XDDl_g.ttf"}},{"kind":"webfonts#webfont","family":"Sigmar One","category":"display","variants":["regular"],"subsets":["latin-ext","vietnamese","latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/sigmarone/v8/oh_5NxD5JBZksdo2EntKefesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Signika","category":"sans-serif","variants":["300","regular","600","700"],"subsets":["latin-ext","latin"],"version":"v8","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/signika/v8/0wDPonOzsYeEo-1KO78w4fesZW2xOQ-xsNqO47m55DA.ttf","600":"http://fonts.gstatic.com/s/signika/v8/lQMOF6NUN2ooR7WvB7tADvesZW2xOQ-xsNqO47m55DA.ttf","700":"http://fonts.gstatic.com/s/signika/v8/lEcnfPBICWJPv5BbVNnFJPesZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/signika/v8/WvDswbww0oAtvBg2l1L-9w.ttf"}},{"kind":"webfonts#webfont","family":"Signika Negative","category":"sans-serif","variants":["300","regular","600","700"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/signikanegative/v7/q5TOjIw4CenPw6C-TW06FjYFXpUPtCmIEFDvjUnLLaI.ttf","600":"http://fonts.gstatic.com/s/signikanegative/v7/q5TOjIw4CenPw6C-TW06FrKLaDJM01OezSVA2R_O3qI.ttf","700":"http://fonts.gstatic.com/s/signikanegative/v7/q5TOjIw4CenPw6C-TW06FpYzPxtVvobH1w3hEppR8WI.ttf","regular":"http://fonts.gstatic.com/s/signikanegative/v7/Z-Q1hzbY8uAo3TpTyPFMXVM1lnCWMnren5_v6047e5A.ttf"}},{"kind":"webfonts#webfont","family":"Simonetta","category":"display","variants":["regular","italic","900","900italic"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"900":"http://fonts.gstatic.com/s/simonetta/v7/22EwvvJ2r1VwVCxit5LcVi3USBnSvpkopQaUR-2r7iU.ttf","regular":"http://fonts.gstatic.com/s/simonetta/v7/fN8puNuahBo4EYMQgp12Yg.ttf","italic":"http://fonts.gstatic.com/s/simonetta/v7/ynxQ3FqfF_Nziwy3T9ZwL6CWcynf_cDxXwCLxiixG1c.ttf","900italic":"http://fonts.gstatic.com/s/simonetta/v7/WUXOpCgBZaRPrWtMCpeKoienaqEuufTBk9XMKnKmgDA.ttf"}},{"kind":"webfonts#webfont","family":"Sintony","category":"sans-serif","variants":["regular","700"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/sintony/v5/zVXQB1wqJn6PE4dWXoYpvPesZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/sintony/v5/IDhCijoIMev2L6Lg5QsduQ.ttf"}},{"kind":"webfonts#webfont","family":"Sirin Stencil","category":"display","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/sirinstencil/v6/pRpLdo0SawzO7MoBpvowsImg74kgS1F7KeR8rWhYwkU.ttf"}},{"kind":"webfonts#webfont","family":"Six Caps","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/sixcaps/v8/_XeDnO0HOV8Er9u97If1tQ.ttf"}},{"kind":"webfonts#webfont","family":"Skranji","category":"display","variants":["regular","700"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/skranji/v5/Lcrhg-fviVkxiEgoadsI1vesZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/skranji/v5/jnOLPS0iZmDL7dfWnW3nIw.ttf"}},{"kind":"webfonts#webfont","family":"Slabo 13px","category":"serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v4","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/slabo13px/v4/jPGWFTjRXfCSzy0qd1nqdvesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Slabo 27px","category":"serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v4","lastModified":"2017-10-11","files":{"regular":"http://fonts.gstatic.com/s/slabo27px/v4/gC0o8B9eU21EafNkXlRAfPesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Slackey","category":"display","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/slackey/v8/evRIMNhGVCRJvCPv4kteeA.ttf"}},{"kind":"webfonts#webfont","family":"Smokum","category":"display","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/smokum/v8/8YP4BuAcy97X8WfdKfxVRw.ttf"}},{"kind":"webfonts#webfont","family":"Smythe","category":"display","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/smythe/v8/yACD1gy_MpbB9Ft42fUvYw.ttf"}},{"kind":"webfonts#webfont","family":"Sniglet","category":"display","variants":["regular","800"],"subsets":["latin-ext","latin"],"version":"v9","lastModified":"2017-10-10","files":{"800":"http://fonts.gstatic.com/s/sniglet/v9/NLF91nBmcEfkBgcEWbHFa_esZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/sniglet/v9/XWhyQLHH4SpCVsHRPRgu9w.ttf"}},{"kind":"webfonts#webfont","family":"Snippet","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/snippet/v7/eUcYMLq2GtHZovLlQH_9kA.ttf"}},{"kind":"webfonts#webfont","family":"Snowburst One","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/snowburstone/v5/zSQzKOPukXRux2oTqfYJjIjjx0o0jr6fNXxPgYh_a8Q.ttf"}},{"kind":"webfonts#webfont","family":"Sofadi One","category":"display","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/sofadione/v6/nirf4G12IcJ6KI8Eoj119fesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Sofia","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/sofia/v6/Imnvx0Ag9r6iDBFUY5_RaQ.ttf"}},{"kind":"webfonts#webfont","family":"Sonsie One","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/sonsieone/v6/KSP7xT1OSy0q2ob6RQOTWPesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Sorts Mill Goudy","category":"serif","variants":["regular","italic"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/sortsmillgoudy/v7/JzRrPKdwEnE8F1TDmDLMUlIL2Qjg-Xlsg_fhGbe2P5U.ttf","italic":"http://fonts.gstatic.com/s/sortsmillgoudy/v7/UUu1lKiy4hRmBWk599VL1TYNkCNSzLyoucKmbTguvr0.ttf"}},{"kind":"webfonts#webfont","family":"Source Code Pro","category":"monospace","variants":["200","300","regular","500","600","700","900"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"200":"http://fonts.gstatic.com/s/sourcecodepro/v7/leqv3v-yTsJNC7nFznSMqaXvKVW_haheDNrHjziJZVk.ttf","300":"http://fonts.gstatic.com/s/sourcecodepro/v7/leqv3v-yTsJNC7nFznSMqVP7R5lD_au4SZC6Ks_vyWs.ttf","500":"http://fonts.gstatic.com/s/sourcecodepro/v7/leqv3v-yTsJNC7nFznSMqX63uKwMO11Of4rJWV582wg.ttf","600":"http://fonts.gstatic.com/s/sourcecodepro/v7/leqv3v-yTsJNC7nFznSMqeiMeWyi5E_-XkTgB5psiDg.ttf","700":"http://fonts.gstatic.com/s/sourcecodepro/v7/leqv3v-yTsJNC7nFznSMqfgXsetDviZcdR5OzC1KPcw.ttf","900":"http://fonts.gstatic.com/s/sourcecodepro/v7/leqv3v-yTsJNC7nFznSMqRA_awHl7mXRjE_LQVochcU.ttf","regular":"http://fonts.gstatic.com/s/sourcecodepro/v7/mrl8jkM18OlOQN8JLgasD9Rl0pGnog23EMYRrBmUzJQ.ttf"}},{"kind":"webfonts#webfont","family":"Source Sans Pro","category":"sans-serif","variants":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","900","900italic"],"subsets":["cyrillic","latin-ext","cyrillic-ext","greek","vietnamese","greek-ext","latin"],"version":"v11","lastModified":"2017-10-11","files":{"200":"http://fonts.gstatic.com/s/sourcesanspro/v11/toadOcfmlt9b38dHJxOBGKXvKVW_haheDNrHjziJZVk.ttf","300":"http://fonts.gstatic.com/s/sourcesanspro/v11/toadOcfmlt9b38dHJxOBGFP7R5lD_au4SZC6Ks_vyWs.ttf","600":"http://fonts.gstatic.com/s/sourcesanspro/v11/toadOcfmlt9b38dHJxOBGOiMeWyi5E_-XkTgB5psiDg.ttf","700":"http://fonts.gstatic.com/s/sourcesanspro/v11/toadOcfmlt9b38dHJxOBGPgXsetDviZcdR5OzC1KPcw.ttf","900":"http://fonts.gstatic.com/s/sourcesanspro/v11/toadOcfmlt9b38dHJxOBGBA_awHl7mXRjE_LQVochcU.ttf","200italic":"http://fonts.gstatic.com/s/sourcesanspro/v11/fpTVHK8qsXbIeTHTrnQH6OptKU7UIBg2hLM7eMTU8bI.ttf","300italic":"http://fonts.gstatic.com/s/sourcesanspro/v11/fpTVHK8qsXbIeTHTrnQH6DUpNKoQAsDux-Todp8f29w.ttf","regular":"http://fonts.gstatic.com/s/sourcesanspro/v11/ODelI1aHBYDBqgeIAH2zlNRl0pGnog23EMYRrBmUzJQ.ttf","italic":"http://fonts.gstatic.com/s/sourcesanspro/v11/M2Jd71oPJhLKp0zdtTvoMwRX4TIfMQQEXLu74GftruE.ttf","600italic":"http://fonts.gstatic.com/s/sourcesanspro/v11/fpTVHK8qsXbIeTHTrnQH6Pp6lGoTTgjlW0sC4r900Co.ttf","700italic":"http://fonts.gstatic.com/s/sourcesanspro/v11/fpTVHK8qsXbIeTHTrnQH6LVT4locI09aamSzFGQlDMY.ttf","900italic":"http://fonts.gstatic.com/s/sourcesanspro/v11/fpTVHK8qsXbIeTHTrnQH6A0NcF6HPGWR298uWIdxWv0.ttf"}},{"kind":"webfonts#webfont","family":"Source Serif Pro","category":"serif","variants":["regular","600","700"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"600":"http://fonts.gstatic.com/s/sourceserifpro/v5/yd5lDMt8Sva2PE17yiLarGi4cQnvCGV11m1KlXh97aQ.ttf","700":"http://fonts.gstatic.com/s/sourceserifpro/v5/yd5lDMt8Sva2PE17yiLarEkpYHRvxGNSCrR82n_RDNk.ttf","regular":"http://fonts.gstatic.com/s/sourceserifpro/v5/CeUM4np2c42DV49nanp55YGL0S0YDpKs5GpLtZIQ0m4.ttf"}},{"kind":"webfonts#webfont","family":"Space Mono","category":"monospace","variants":["regular","italic","700","700italic"],"subsets":["latin-ext","vietnamese","latin"],"version":"v2","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/spacemono/v2/vdpMRWfyjfCvDYTz00NEPAJKKGfqHaYFsRG-T3ceEVo.ttf","regular":"http://fonts.gstatic.com/s/spacemono/v2/B_LOPq3uMVBqC_kmqwURBfesZW2xOQ-xsNqO47m55DA.ttf","italic":"http://fonts.gstatic.com/s/spacemono/v2/7xgIgvUEl9Gvhtf7tXsRzC3USBnSvpkopQaUR-2r7iU.ttf","700italic":"http://fonts.gstatic.com/s/spacemono/v2/y2NWQDXe2-qPj6a6rWkLc0D2ttfZwueP-QU272T9-k4.ttf"}},{"kind":"webfonts#webfont","family":"Special Elite","category":"display","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/specialelite/v8/9-wW4zu3WNoD5Fjka35Jm4jjx0o0jr6fNXxPgYh_a8Q.ttf"}},{"kind":"webfonts#webfont","family":"Spectral","category":"serif","variants":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"subsets":["latin-ext","vietnamese","latin"],"version":"v2","lastModified":"2017-10-10","files":{"200":"http://fonts.gstatic.com/s/spectral/v2/RPsjutNSGdCMO0uTaGNKAaCWcynf_cDxXwCLxiixG1c.ttf","300":"http://fonts.gstatic.com/s/spectral/v2/EUVu_t3TbuiAmr-6bAqTvaCWcynf_cDxXwCLxiixG1c.ttf","500":"http://fonts.gstatic.com/s/spectral/v2/KuRhuOjLr-dCVlaHBMOF96CWcynf_cDxXwCLxiixG1c.ttf","600":"http://fonts.gstatic.com/s/spectral/v2/OSDAbiOpLs0hkOIFx2oUZKCWcynf_cDxXwCLxiixG1c.ttf","700":"http://fonts.gstatic.com/s/spectral/v2/g1QizOcRY_Apk-QDq3rhOKCWcynf_cDxXwCLxiixG1c.ttf","800":"http://fonts.gstatic.com/s/spectral/v2/qQdpRyS_X5oC54LeW0MlmKCWcynf_cDxXwCLxiixG1c.ttf","200italic":"http://fonts.gstatic.com/s/spectral/v2/iTACFYcWCBGY-0cRjdYs3meudeTO44zf-ht3k-KNzwg.ttf","300italic":"http://fonts.gstatic.com/s/spectral/v2/gXmD0bm_WQVxhEdjIN6xlEeOrDcLawS7-ssYqLr2Xp4.ttf","regular":"http://fonts.gstatic.com/s/spectral/v2/iBj67vddkZHOY5CJLE9SnA.ttf","italic":"http://fonts.gstatic.com/s/spectral/v2/lQA62MkEULvXDckLFYyk-vesZW2xOQ-xsNqO47m55DA.ttf","500italic":"http://fonts.gstatic.com/s/spectral/v2/hUloM7YPsU02LWYFA7w1x5p-63r6doWhTEbsfBIRJ7A.ttf","600italic":"http://fonts.gstatic.com/s/spectral/v2/c6okfJABbOc8QqRI28ISV_pTEJqju4Hz1txDWij77d4.ttf","700italic":"http://fonts.gstatic.com/s/spectral/v2/v9WvdY1ll-vjpGHSRxsAIQJKKGfqHaYFsRG-T3ceEVo.ttf","800italic":"http://fonts.gstatic.com/s/spectral/v2/wYroR9dlOe2UFhp_3HJ9qqk3bhPBSBJ0bSJQ6acL-0g.ttf"}},{"kind":"webfonts#webfont","family":"Spicy Rice","category":"display","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/spicyrice/v6/WGCtz7cLoggXARPi9OGD6_esZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Spinnaker","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/spinnaker/v9/MQdIXivKITpjROUdiN6Jgg.ttf"}},{"kind":"webfonts#webfont","family":"Spirax","category":"display","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/spirax/v6/IOKqhk-Ccl7y31yDsePPkw.ttf"}},{"kind":"webfonts#webfont","family":"Squada One","category":"display","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/squadaone/v6/3tzGuaJdD65cZVgfQzN8uvesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Sree Krushnadevaraya","category":"serif","variants":["regular"],"subsets":["telugu","latin"],"version":"v5","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/sreekrushnadevaraya/v5/CdsXmnHyEqVl1ahzOh5qnzjDZVem5Eb4d0dXjXa0F_Q.ttf"}},{"kind":"webfonts#webfont","family":"Sriracha","category":"handwriting","variants":["regular"],"subsets":["latin-ext","thai","vietnamese","latin"],"version":"v2","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/sriracha/v2/l-TXHmKwoHm6vtjy4oUz8Q.ttf"}},{"kind":"webfonts#webfont","family":"Stalemate","category":"handwriting","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/stalemate/v5/wQLCnG0qB6mOu2Wit2dt_w.ttf"}},{"kind":"webfonts#webfont","family":"Stalinist One","category":"display","variants":["regular"],"subsets":["cyrillic","latin-ext","latin"],"version":"v10","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/stalinistone/v10/MQpS-WezM9W4Dd7D3B7I-UT7eZ8.ttf"}},{"kind":"webfonts#webfont","family":"Stardos Stencil","category":"display","variants":["regular","700"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/stardosstencil/v7/h4ExtgvoXhPtv9Ieqd-XC81wDCbBgmIo8UyjIhmkeSM.ttf","regular":"http://fonts.gstatic.com/s/stardosstencil/v7/ygEOyTW9a6u4fi4OXEZeTFf2eT4jUldwg_9fgfY_tHc.ttf"}},{"kind":"webfonts#webfont","family":"Stint Ultra Condensed","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/stintultracondensed/v6/8DqLK6-YSClFZt3u3EgOUYelbRYnLTTQA1Z5cVLnsI4.ttf"}},{"kind":"webfonts#webfont","family":"Stint Ultra Expanded","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/stintultraexpanded/v5/FeigX-wDDgHMCKuhekhedQ7dxr0N5HY0cZKknTIL6n4.ttf"}},{"kind":"webfonts#webfont","family":"Stoke","category":"serif","variants":["300","regular"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/stoke/v7/Sell9475FOS8jUqQsfFsUQ.ttf","regular":"http://fonts.gstatic.com/s/stoke/v7/A7qJNoqOm2d6o1E6e0yUFg.ttf"}},{"kind":"webfonts#webfont","family":"Strait","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/strait/v5/m4W73ViNmProETY2ybc-Bg.ttf"}},{"kind":"webfonts#webfont","family":"Sue Ellen Francisco","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/sueellenfrancisco/v8/TwHX4vSxMUnJUdEz1JIgrhzazJzPVbGl8jnf1tisRz4.ttf"}},{"kind":"webfonts#webfont","family":"Suez One","category":"serif","variants":["regular"],"subsets":["hebrew","latin-ext","latin"],"version":"v2","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/suezone/v2/xulpHtKbz3V8hoSLE2uKDw.ttf"}},{"kind":"webfonts#webfont","family":"Sumana","category":"serif","variants":["regular","700"],"subsets":["devanagari","latin-ext","latin"],"version":"v2","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/sumana/v2/8AcM-KAproitONSBBHj3sQ.ttf","regular":"http://fonts.gstatic.com/s/sumana/v2/wgdl__wAK7pzliiWs0Nlog.ttf"}},{"kind":"webfonts#webfont","family":"Sunshiney","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/sunshiney/v8/kaWOb4pGbwNijM7CkxK1sQ.ttf"}},{"kind":"webfonts#webfont","family":"Supermercado One","category":"display","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/supermercadoone/v7/kMGPVTNFiFEp1U274uBMb4mm5hmSKNFf3C5YoMa-lrM.ttf"}},{"kind":"webfonts#webfont","family":"Sura","category":"serif","variants":["regular","700"],"subsets":["devanagari","latin-ext","latin"],"version":"v2","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/sura/v2/Z5bXQaFGmoWicN1WlcncxA.ttf","regular":"http://fonts.gstatic.com/s/sura/v2/jznKrhTH5NezYxb0-Q5zzA.ttf"}},{"kind":"webfonts#webfont","family":"Suranna","category":"serif","variants":["regular"],"subsets":["telugu","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/suranna/v5/PYmfr6TQeTqZ-r8HnPM-kA.ttf"}},{"kind":"webfonts#webfont","family":"Suravaram","category":"serif","variants":["regular"],"subsets":["telugu","latin"],"version":"v4","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/suravaram/v4/G4dPee4pel_w2HqzavW4MA.ttf"}},{"kind":"webfonts#webfont","family":"Suwannaphum","category":"display","variants":["regular"],"subsets":["khmer"],"version":"v11","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/suwannaphum/v11/1jIPOyXied3T79GCnSlCN6CWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Swanky and Moo Moo","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/swankyandmoomoo/v7/orVNZ9kDeE3lWp3U3YELu9DVLKqNC3_XMNHhr8S94FU.ttf"}},{"kind":"webfonts#webfont","family":"Syncopate","category":"sans-serif","variants":["regular","700"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/syncopate/v9/S5z8ixiOoC4WJ1im6jAlYC3USBnSvpkopQaUR-2r7iU.ttf","regular":"http://fonts.gstatic.com/s/syncopate/v9/RQVwO52fAH6MI764EcaYtw.ttf"}},{"kind":"webfonts#webfont","family":"Tangerine","category":"handwriting","variants":["regular","700"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/tangerine/v9/UkFsr-RwJB_d2l9fIWsx3i3USBnSvpkopQaUR-2r7iU.ttf","regular":"http://fonts.gstatic.com/s/tangerine/v9/DTPeM3IROhnkz7aYG2a9sA.ttf"}},{"kind":"webfonts#webfont","family":"Taprom","category":"display","variants":["regular"],"subsets":["khmer"],"version":"v9","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/taprom/v9/-KByU3BaUsyIvQs79qFObg.ttf"}},{"kind":"webfonts#webfont","family":"Tauri","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/tauri/v5/XIWeYJDXNqiVNej0zEqtGg.ttf"}},{"kind":"webfonts#webfont","family":"Taviraj","category":"serif","variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"subsets":["latin-ext","thai","vietnamese","latin"],"version":"v3","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/taviraj/v3/7iDtujKEc7hwcT6D0zLx-A.ttf","200":"http://fonts.gstatic.com/s/taviraj/v3/fn3qCO_sC_zLuf2hqWE37fesZW2xOQ-xsNqO47m55DA.ttf","300":"http://fonts.gstatic.com/s/taviraj/v3/1EIpbtG_cs5haG6Ba9wX8vesZW2xOQ-xsNqO47m55DA.ttf","500":"http://fonts.gstatic.com/s/taviraj/v3/s8BuqYm5ebG2N1R4JkTp_fesZW2xOQ-xsNqO47m55DA.ttf","600":"http://fonts.gstatic.com/s/taviraj/v3/KscmiA6HGz7nCcHhaddQH_esZW2xOQ-xsNqO47m55DA.ttf","700":"http://fonts.gstatic.com/s/taviraj/v3/TY91892tTFNYCeCXjQ1AEPesZW2xOQ-xsNqO47m55DA.ttf","800":"http://fonts.gstatic.com/s/taviraj/v3/oGWJbiDGcxlInLLnrLxTDvesZW2xOQ-xsNqO47m55DA.ttf","900":"http://fonts.gstatic.com/s/taviraj/v3/RfIEodnN0NYWUdZHol5fdPesZW2xOQ-xsNqO47m55DA.ttf","100italic":"http://fonts.gstatic.com/s/taviraj/v3/ai0UdHXB1gi5etfpU0CZ6aCWcynf_cDxXwCLxiixG1c.ttf","200italic":"http://fonts.gstatic.com/s/taviraj/v3/eDMMTK5GhTdvvz3R-ZWvay3USBnSvpkopQaUR-2r7iU.ttf","300italic":"http://fonts.gstatic.com/s/taviraj/v3/IEBfc1xGgsBbdCeXKNAtfS3USBnSvpkopQaUR-2r7iU.ttf","regular":"http://fonts.gstatic.com/s/taviraj/v3/AH1eoWagKJhbVx4Poc3M1A.ttf","italic":"http://fonts.gstatic.com/s/taviraj/v3/hAS5RxygdSnG4626KdkXuQ.ttf","500italic":"http://fonts.gstatic.com/s/taviraj/v3/319qfe3yzAi9RNFu-dI9zy3USBnSvpkopQaUR-2r7iU.ttf","600italic":"http://fonts.gstatic.com/s/taviraj/v3/ofRN6EMiboGiM2Ga3cG_yy3USBnSvpkopQaUR-2r7iU.ttf","700italic":"http://fonts.gstatic.com/s/taviraj/v3/4Yzb6i1xtMRZn9oAQ484nS3USBnSvpkopQaUR-2r7iU.ttf","800italic":"http://fonts.gstatic.com/s/taviraj/v3/MPtY5Qs3hwV4f0LUH-vVmy3USBnSvpkopQaUR-2r7iU.ttf","900italic":"http://fonts.gstatic.com/s/taviraj/v3/aDM2JaXSd_qo0nqKiBAq5C3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Teko","category":"sans-serif","variants":["300","regular","500","600","700"],"subsets":["devanagari","latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/teko/v7/OobFGE9eo24rcBpN6zXDaQ.ttf","500":"http://fonts.gstatic.com/s/teko/v7/FQ0duU7gWM4cSaImOfAjBA.ttf","600":"http://fonts.gstatic.com/s/teko/v7/QDx_i8H-TZ1IK1JEVrqwEQ.ttf","700":"http://fonts.gstatic.com/s/teko/v7/xKfTxe_SWpH4xU75vmvylA.ttf","regular":"http://fonts.gstatic.com/s/teko/v7/UtekqODEqZXSN2L-njejpA.ttf"}},{"kind":"webfonts#webfont","family":"Telex","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/telex/v6/24-3xP9ywYeHOcFU3iGk8A.ttf"}},{"kind":"webfonts#webfont","family":"Tenali Ramakrishna","category":"sans-serif","variants":["regular"],"subsets":["telugu","latin"],"version":"v4","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/tenaliramakrishna/v4/M0nTmDqv2M7AGoGh-c946BZak5pSBHqWX6uyVMiMFoA.ttf"}},{"kind":"webfonts#webfont","family":"Tenor Sans","category":"sans-serif","variants":["regular"],"subsets":["cyrillic","latin-ext","latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/tenorsans/v8/dUBulmjNJJInvK5vL7O9yfesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Text Me One","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/textmeone/v5/9em_3ckd_P5PQkP4aDyDLqCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"The Girl Next Door","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/thegirlnextdoor/v8/cWRA4JVGeEcHGcPl5hmX7kzo0nFFoM60ux_D9BUymX4.ttf"}},{"kind":"webfonts#webfont","family":"Tienne","category":"serif","variants":["regular","700","900"],"subsets":["latin"],"version":"v10","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/tienne/v10/JvoCDOlyOSEyYGRwCyfs3g.ttf","900":"http://fonts.gstatic.com/s/tienne/v10/FBano5T521OWexj2iRYLMw.ttf","regular":"http://fonts.gstatic.com/s/tienne/v10/-IIfDl701C0z7-fy2kmGvA.ttf"}},{"kind":"webfonts#webfont","family":"Tillana","category":"handwriting","variants":["regular","500","600","700","800"],"subsets":["devanagari","latin-ext","latin"],"version":"v3","lastModified":"2017-10-10","files":{"500":"http://fonts.gstatic.com/s/tillana/v3/gqdUngSIcY9tSla5eCZky_esZW2xOQ-xsNqO47m55DA.ttf","600":"http://fonts.gstatic.com/s/tillana/v3/fqon6-r15hy8M1cyiYfQBvesZW2xOQ-xsNqO47m55DA.ttf","700":"http://fonts.gstatic.com/s/tillana/v3/jGARMTxLrMerzTCpGBpMffesZW2xOQ-xsNqO47m55DA.ttf","800":"http://fonts.gstatic.com/s/tillana/v3/pmTtNH_Ibktj5Cyc1XrP6vesZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/tillana/v3/zN0D-jDPsr1HzU3VRFLY5g.ttf"}},{"kind":"webfonts#webfont","family":"Timmana","category":"sans-serif","variants":["regular"],"subsets":["telugu","latin"],"version":"v2","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/timmana/v2/T25SicsJUJkc2s2sbBsDnA.ttf"}},{"kind":"webfonts#webfont","family":"Tinos","category":"serif","variants":["regular","italic","700","700italic"],"subsets":["hebrew","cyrillic","latin-ext","cyrillic-ext","greek","vietnamese","greek-ext","latin"],"version":"v11","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/tinos/v11/vHXfhX8jZuQruowfon93yQ.ttf","regular":"http://fonts.gstatic.com/s/tinos/v11/EqpUbkVmutfwZ0PjpoGwCg.ttf","italic":"http://fonts.gstatic.com/s/tinos/v11/slfyzlasCr9vTsaP4lUh9A.ttf","700italic":"http://fonts.gstatic.com/s/tinos/v11/M6kfzvDMM0CdxdraoFpG6vesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Titan One","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/titanone/v5/FbvpRvzfV_oipS0De3iAZg.ttf"}},{"kind":"webfonts#webfont","family":"Titillium Web","category":"sans-serif","variants":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","900"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-11","files":{"200":"http://fonts.gstatic.com/s/titilliumweb/v6/anMUvcNT0H1YN4FII8wprzOdCrLccoxq42eaxM802O0.ttf","300":"http://fonts.gstatic.com/s/titilliumweb/v6/anMUvcNT0H1YN4FII8wpr9ZAkYT8DuUZELiKLwMGWAo.ttf","600":"http://fonts.gstatic.com/s/titilliumweb/v6/anMUvcNT0H1YN4FII8wpr28K9dEd5Ue-HTQrlA7E2xQ.ttf","700":"http://fonts.gstatic.com/s/titilliumweb/v6/anMUvcNT0H1YN4FII8wpr2-6tpSbB9YhmWtmd1_gi_U.ttf","900":"http://fonts.gstatic.com/s/titilliumweb/v6/anMUvcNT0H1YN4FII8wpr7L0GmZLri-m-nfoo0Vul4Y.ttf","200italic":"http://fonts.gstatic.com/s/titilliumweb/v6/RZunN20OBmkvrU7sA4GPPj4N98U-66ThNJvtgddRfBE.ttf","300italic":"http://fonts.gstatic.com/s/titilliumweb/v6/RZunN20OBmkvrU7sA4GPPrfzCkqg7ORZlRf2cc4mXu8.ttf","regular":"http://fonts.gstatic.com/s/titilliumweb/v6/7XUFZ5tgS-tD6QamInJTcTyagQBwYgYywpS70xNq8SQ.ttf","italic":"http://fonts.gstatic.com/s/titilliumweb/v6/r9OmwyQxrgzUAhaLET_KO-ixohbIP6lHkU-1Mgq95cY.ttf","600italic":"http://fonts.gstatic.com/s/titilliumweb/v6/RZunN20OBmkvrU7sA4GPPgOhzTSndyK8UWja2yJjKLc.ttf","700italic":"http://fonts.gstatic.com/s/titilliumweb/v6/RZunN20OBmkvrU7sA4GPPio3LEw-4MM8Ao2j9wPOfpw.ttf"}},{"kind":"webfonts#webfont","family":"Trade Winds","category":"display","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/tradewinds/v6/sDOCVgAxw6PEUi2xdMsoDaCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Trirong","category":"serif","variants":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"subsets":["latin-ext","thai","vietnamese","latin"],"version":"v3","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/trirong/v3/A4AP1moxqvtadq5CW3L17A.ttf","200":"http://fonts.gstatic.com/s/trirong/v3/QD8N5qk-agpAEYCSSWullPesZW2xOQ-xsNqO47m55DA.ttf","300":"http://fonts.gstatic.com/s/trirong/v3/mfCfGz4GqprWJZ47PUMDGfesZW2xOQ-xsNqO47m55DA.ttf","500":"http://fonts.gstatic.com/s/trirong/v3/6CsQ6UR1e8rURaEPxqnGBvesZW2xOQ-xsNqO47m55DA.ttf","600":"http://fonts.gstatic.com/s/trirong/v3/1FjmLIhPhB6Yc7RWqO27mfesZW2xOQ-xsNqO47m55DA.ttf","700":"http://fonts.gstatic.com/s/trirong/v3/ab8hG5CTSzMAobTnPgcDP_esZW2xOQ-xsNqO47m55DA.ttf","800":"http://fonts.gstatic.com/s/trirong/v3/UBRQXGJvi5EHcyI5wwZew_esZW2xOQ-xsNqO47m55DA.ttf","900":"http://fonts.gstatic.com/s/trirong/v3/Lam1ewMdiP3O-bVYT-W6t_esZW2xOQ-xsNqO47m55DA.ttf","100italic":"http://fonts.gstatic.com/s/trirong/v3/ke-m75CXBPHlqwRHmCTBi6CWcynf_cDxXwCLxiixG1c.ttf","200italic":"http://fonts.gstatic.com/s/trirong/v3/TLnptEEWKdIVHKJYBO592y3USBnSvpkopQaUR-2r7iU.ttf","300italic":"http://fonts.gstatic.com/s/trirong/v3/RnkK09k5OfEHFxd_smcYuC3USBnSvpkopQaUR-2r7iU.ttf","regular":"http://fonts.gstatic.com/s/trirong/v3/lYu4kez-Enlvh2X-itx6CA.ttf","italic":"http://fonts.gstatic.com/s/trirong/v3/kV0MzmWPKkglEtJf--dQhQ.ttf","500italic":"http://fonts.gstatic.com/s/trirong/v3/I7H5Vf-5oH45BHkyxaUodS3USBnSvpkopQaUR-2r7iU.ttf","600italic":"http://fonts.gstatic.com/s/trirong/v3/BXLhSV51vCWUiACSqyWe6i3USBnSvpkopQaUR-2r7iU.ttf","700italic":"http://fonts.gstatic.com/s/trirong/v3/CEBv6IoZawJuRHdATx4LQi3USBnSvpkopQaUR-2r7iU.ttf","800italic":"http://fonts.gstatic.com/s/trirong/v3/lGUgSzOvjUqrsrJfnROivC3USBnSvpkopQaUR-2r7iU.ttf","900italic":"http://fonts.gstatic.com/s/trirong/v3/EtuLHyx5DS9oX5NoKhYlkC3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Trocchi","category":"serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/trocchi/v6/uldNPaKrUGVeGCVsmacLwA.ttf"}},{"kind":"webfonts#webfont","family":"Trochut","category":"display","variants":["regular","italic","700"],"subsets":["latin"],"version":"v5","lastModified":"2017-10-09","files":{"700":"http://fonts.gstatic.com/s/trochut/v5/lWqNOv6ISR8ehNzGLFLnJ_esZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/trochut/v5/6Y65B0x-2JsnYt16OH5omw.ttf","italic":"http://fonts.gstatic.com/s/trochut/v5/pczUwr4ZFvC79TgNO5cZng.ttf"}},{"kind":"webfonts#webfont","family":"Trykker","category":"serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/trykker/v6/YiVrVJpBFN7I1l_CWk6yYQ.ttf"}},{"kind":"webfonts#webfont","family":"Tulpen One","category":"display","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/tulpenone/v7/lwcTfVIEVxpZLZlWzR5baPesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Ubuntu","category":"sans-serif","variants":["300","300italic","regular","italic","500","500italic","700","700italic"],"subsets":["cyrillic","latin-ext","cyrillic-ext","greek","greek-ext","latin"],"version":"v11","lastModified":"2017-10-11","files":{"300":"http://fonts.gstatic.com/s/ubuntu/v11/4iCv6KVjbNBYlgoC1CzTtw.ttf","500":"http://fonts.gstatic.com/s/ubuntu/v11/4iCv6KVjbNBYlgoCjC3Ttw.ttf","700":"http://fonts.gstatic.com/s/ubuntu/v11/4iCv6KVjbNBYlgoCxCvTtw.ttf","300italic":"http://fonts.gstatic.com/s/ubuntu/v11/4iCp6KVjbNBYlgoKejZftWyI.ttf","regular":"http://fonts.gstatic.com/s/ubuntu/v11/4iCs6KVjbNBYlgo6eA.ttf","italic":"http://fonts.gstatic.com/s/ubuntu/v11/4iCu6KVjbNBYlgoKeg7z.ttf","500italic":"http://fonts.gstatic.com/s/ubuntu/v11/4iCp6KVjbNBYlgoKejYHtGyI.ttf","700italic":"http://fonts.gstatic.com/s/ubuntu/v11/4iCp6KVjbNBYlgoKejZPsmyI.ttf"}},{"kind":"webfonts#webfont","family":"Ubuntu Condensed","category":"sans-serif","variants":["regular"],"subsets":["cyrillic","latin-ext","cyrillic-ext","greek","greek-ext","latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/ubuntucondensed/v8/DBCt-NXN57MTAFjitYxdrKDbm6fPDOZJsR8PmdG62gY.ttf"}},{"kind":"webfonts#webfont","family":"Ubuntu Mono","category":"monospace","variants":["regular","italic","700","700italic"],"subsets":["cyrillic","latin-ext","cyrillic-ext","greek","greek-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/ubuntumono/v7/ceqTZGKHipo8pJj4molytne1Pd76Vl7zRpE7NLJQ7XU.ttf","regular":"http://fonts.gstatic.com/s/ubuntumono/v7/EgeuS9OtEmA0y_JRo03MQaCWcynf_cDxXwCLxiixG1c.ttf","italic":"http://fonts.gstatic.com/s/ubuntumono/v7/KAKuHXAHZOeECOWAHsRKA0eOrDcLawS7-ssYqLr2Xp4.ttf","700italic":"http://fonts.gstatic.com/s/ubuntumono/v7/n_d8tv_JOIiYyMXR4eaV9c_zJjSACmk0BRPxQqhnNLU.ttf"}},{"kind":"webfonts#webfont","family":"Ultra","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v10","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/ultra/v10/OW8uXkOstRADuhEmGOFQLA.ttf"}},{"kind":"webfonts#webfont","family":"Uncial Antiqua","category":"display","variants":["regular"],"subsets":["latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/uncialantiqua/v5/F-leefDiFwQXsyd6eaSllqrFJ4O13IHVxZbM6yoslpo.ttf"}},{"kind":"webfonts#webfont","family":"Underdog","category":"display","variants":["regular"],"subsets":["cyrillic","latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/underdog/v6/gBv9yjez_-5PnTprHWq0ig.ttf"}},{"kind":"webfonts#webfont","family":"Unica One","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/unicaone/v5/KbYKlhWMDpatWViqDkNQgA.ttf"}},{"kind":"webfonts#webfont","family":"UnifrakturCook","category":"display","variants":["700"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/unifrakturcook/v9/ASwh69ykD8iaoYijVEU6RrWZkcsCTHKV51zmcUsafQ0.ttf"}},{"kind":"webfonts#webfont","family":"UnifrakturMaguntia","category":"display","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/unifrakturmaguntia/v8/7KWy3ymCVR_xfAvvcIXm3-kdNg30GQauG_DE-tMYtWk.ttf"}},{"kind":"webfonts#webfont","family":"Unkempt","category":"display","variants":["regular","700"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/unkempt/v9/V7H-GCl9bgwGwqFqTTgDHvesZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/unkempt/v9/NLLBeNSspr0RGs71R5LHWA.ttf"}},{"kind":"webfonts#webfont","family":"Unlock","category":"display","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/unlock/v7/rXEQzK7uIAlhoyoAEiMy1w.ttf"}},{"kind":"webfonts#webfont","family":"Unna","category":"serif","variants":["regular","italic","700","700italic"],"subsets":["latin-ext","latin"],"version":"v10","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/unna/v10/V-r3KRrJqBWlu97fCUB8Nw.ttf","regular":"http://fonts.gstatic.com/s/unna/v10/UAS0AM7AmbdCNY_80xyAZQ.ttf","italic":"http://fonts.gstatic.com/s/unna/v10/CB25jfOme9BL61pT4h1_0A.ttf","700italic":"http://fonts.gstatic.com/s/unna/v10/H7rJH2hD4wVI9bOhx98O8A.ttf"}},{"kind":"webfonts#webfont","family":"VT323","category":"monospace","variants":["regular"],"subsets":["latin-ext","vietnamese","latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/vt323/v9/ITU2YQfM073o1iYK3nSOmQ.ttf"}},{"kind":"webfonts#webfont","family":"Vampiro One","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/vampiroone/v8/OVDs4gY4WpS5u3Qd1gXRW6CWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Varela","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/varela/v8/ON7qs0cKUUixhhDFXlZUjw.ttf"}},{"kind":"webfonts#webfont","family":"Varela Round","category":"sans-serif","variants":["regular"],"subsets":["hebrew","latin-ext","vietnamese","latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/varelaround/v9/APH4jr0uSos5wiut5cpjri3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Vast Shadow","category":"display","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/vastshadow/v7/io4hqKX3ibiqQQjYfW0-h6CWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Vesper Libre","category":"serif","variants":["regular","500","700","900"],"subsets":["devanagari","latin-ext","latin"],"version":"v9","lastModified":"2017-10-10","files":{"500":"http://fonts.gstatic.com/s/vesperlibre/v9/0liLgNkygqH6EOtsVjZDsZMQuUSAwdHsY8ov_6tk1oA.ttf","700":"http://fonts.gstatic.com/s/vesperlibre/v9/0liLgNkygqH6EOtsVjZDsUD2ttfZwueP-QU272T9-k4.ttf","900":"http://fonts.gstatic.com/s/vesperlibre/v9/0liLgNkygqH6EOtsVjZDsaObDOjC3UL77puoeHsE3fw.ttf","regular":"http://fonts.gstatic.com/s/vesperlibre/v9/Cg-TeZFsqV8BaOcoVwzu2C3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Vibur","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/vibur/v8/xB9aKsUbJo68XP0bAg2iLw.ttf"}},{"kind":"webfonts#webfont","family":"Vidaloka","category":"serif","variants":["regular"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/vidaloka/v9/C6Nul0ogKUWkx356rrt9RA.ttf"}},{"kind":"webfonts#webfont","family":"Viga","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/viga/v6/uD87gDbhS7frHLX4uL6agg.ttf"}},{"kind":"webfonts#webfont","family":"Voces","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/voces/v7/QoBH6g6yKgNIgvL8A2aE2Q.ttf"}},{"kind":"webfonts#webfont","family":"Volkhov","category":"serif","variants":["regular","italic","700","700italic"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-10","files":{"700":"http://fonts.gstatic.com/s/volkhov/v9/L8PbKS-kEoLHm7nP--NCzPesZW2xOQ-xsNqO47m55DA.ttf","regular":"http://fonts.gstatic.com/s/volkhov/v9/MDIZAofe1T_J3un5Kgo8zg.ttf","italic":"http://fonts.gstatic.com/s/volkhov/v9/1rTjmztKEpbkKH06JwF8Yw.ttf","700italic":"http://fonts.gstatic.com/s/volkhov/v9/W6oG0QDDjCgj0gmsHE520C3USBnSvpkopQaUR-2r7iU.ttf"}},{"kind":"webfonts#webfont","family":"Vollkorn","category":"serif","variants":["regular","italic","600","600italic","700","700italic","900","900italic"],"subsets":["cyrillic","latin-ext","cyrillic-ext","greek","vietnamese","latin"],"version":"v8","lastModified":"2017-10-10","files":{"600":"http://fonts.gstatic.com/s/vollkorn/v8/gWz-6Uqzc1g8XxDn5f2-pKCWcynf_cDxXwCLxiixG1c.ttf","700":"http://fonts.gstatic.com/s/vollkorn/v8/gOwQjJVGXlDOONC12hVoBqCWcynf_cDxXwCLxiixG1c.ttf","900":"http://fonts.gstatic.com/s/vollkorn/v8/IBcUSEL3da6GXw0kfPwtqqCWcynf_cDxXwCLxiixG1c.ttf","regular":"http://fonts.gstatic.com/s/vollkorn/v8/IiexqYAeh8uII223thYx3w.ttf","italic":"http://fonts.gstatic.com/s/vollkorn/v8/UuIzosgR1ovBhJFdwVp3fvesZW2xOQ-xsNqO47m55DA.ttf","600italic":"http://fonts.gstatic.com/s/vollkorn/v8/dU1kkg9Vvuo527vzySfgDPpTEJqju4Hz1txDWij77d4.ttf","700italic":"http://fonts.gstatic.com/s/vollkorn/v8/KNiAlx6phRqXCwnZZG51JAJKKGfqHaYFsRG-T3ceEVo.ttf","900italic":"http://fonts.gstatic.com/s/vollkorn/v8/5fOn_dOVwBIkZpOP3_1I750EAVxt0G0biEntp43Qt6E.ttf"}},{"kind":"webfonts#webfont","family":"Voltaire","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/voltaire/v7/WvqBzaGEBbRV-hrahwO2cA.ttf"}},{"kind":"webfonts#webfont","family":"Waiting for the Sunrise","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/waitingforthesunrise/v8/eNfH7kLpF1PZWpsetF-ha9TChrNgrDiT3Zy6yGf3FnM.ttf"}},{"kind":"webfonts#webfont","family":"Wallpoet","category":"display","variants":["regular"],"subsets":["latin"],"version":"v9","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/wallpoet/v9/hmum4WuBN4A0Z_7367NDIg.ttf"}},{"kind":"webfonts#webfont","family":"Walter Turncoat","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/walterturncoat/v8/sG9su5g4GXy1KP73cU3hvQplL2YwNeota48DxFlGDUo.ttf"}},{"kind":"webfonts#webfont","family":"Warnes","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v7","lastModified":"2017-10-09","files":{"regular":"http://fonts.gstatic.com/s/warnes/v7/MXG7_Phj4YpzAXxKGItuBw.ttf"}},{"kind":"webfonts#webfont","family":"Wellfleet","category":"display","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/wellfleet/v5/J5tOx72iFRPgHYpbK9J4XQ.ttf"}},{"kind":"webfonts#webfont","family":"Wendy One","category":"sans-serif","variants":["regular"],"subsets":["latin-ext","latin"],"version":"v5","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/wendyone/v5/R8CJT2oDXdMk_ZtuHTxoxw.ttf"}},{"kind":"webfonts#webfont","family":"Wire One","category":"sans-serif","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/wireone/v8/sRLhaQOQpWnvXwIx0CycQw.ttf"}},{"kind":"webfonts#webfont","family":"Work Sans","category":"sans-serif","variants":["100","200","300","regular","500","600","700","800","900"],"subsets":["latin-ext","latin"],"version":"v3","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/worksans/v3/ZAhtNqLaAViKjGLajtuwWaCWcynf_cDxXwCLxiixG1c.ttf","200":"http://fonts.gstatic.com/s/worksans/v3/u_mYNr_qYP37m7vgvmIYZy3USBnSvpkopQaUR-2r7iU.ttf","300":"http://fonts.gstatic.com/s/worksans/v3/FD_Udbezj8EHXbdsqLUply3USBnSvpkopQaUR-2r7iU.ttf","500":"http://fonts.gstatic.com/s/worksans/v3/Nbre-U_bp6Xktt8cpgwaJC3USBnSvpkopQaUR-2r7iU.ttf","600":"http://fonts.gstatic.com/s/worksans/v3/z9rX03Xuz9ZNHTMg1_ghGS3USBnSvpkopQaUR-2r7iU.ttf","700":"http://fonts.gstatic.com/s/worksans/v3/4udXuXg54JlPEP5iKO5AmS3USBnSvpkopQaUR-2r7iU.ttf","800":"http://fonts.gstatic.com/s/worksans/v3/IQh-ap2Uqs7kl1YINeeEGi3USBnSvpkopQaUR-2r7iU.ttf","900":"http://fonts.gstatic.com/s/worksans/v3/Hjn0acvjHfjY_vAK9Uc6gi3USBnSvpkopQaUR-2r7iU.ttf","regular":"http://fonts.gstatic.com/s/worksans/v3/zVvigUiMvx7JVEnrJgc-5Q.ttf"}},{"kind":"webfonts#webfont","family":"Yanone Kaffeesatz","category":"sans-serif","variants":["200","300","regular","700"],"subsets":["cyrillic","latin-ext","vietnamese","latin"],"version":"v9","lastModified":"2017-10-10","files":{"200":"http://fonts.gstatic.com/s/yanonekaffeesatz/v9/We_iSDqttE3etzfdfhuPRbq92v6XxU4pSv06GI0NsGc.ttf","300":"http://fonts.gstatic.com/s/yanonekaffeesatz/v9/We_iSDqttE3etzfdfhuPRZlIwXPiNoNT_wxzJ2t3mTE.ttf","700":"http://fonts.gstatic.com/s/yanonekaffeesatz/v9/We_iSDqttE3etzfdfhuPRf2R4S6PlKaGXWPfWpHpcl0.ttf","regular":"http://fonts.gstatic.com/s/yanonekaffeesatz/v9/YDAoLskQQ5MOAgvHUQCcLdXn3cHbFGWU4T2HrSN6JF4.ttf"}},{"kind":"webfonts#webfont","family":"Yantramanav","category":"sans-serif","variants":["100","300","regular","500","700","900"],"subsets":["devanagari","latin-ext","latin"],"version":"v3","lastModified":"2017-10-10","files":{"100":"http://fonts.gstatic.com/s/yantramanav/v3/Rs1I2PF4Z8GAb6qjgvr8wIAWxXGWZ3yJw6KhWS7MxOk.ttf","300":"http://fonts.gstatic.com/s/yantramanav/v3/HSfbC4Z8I8BZ00wiXeA5bC9-WlPSxbfiI49GsXo3q0g.ttf","500":"http://fonts.gstatic.com/s/yantramanav/v3/HSfbC4Z8I8BZ00wiXeA5bMCNfqCYlB_eIx7H1TVXe60.ttf","700":"http://fonts.gstatic.com/s/yantramanav/v3/HSfbC4Z8I8BZ00wiXeA5bHe1Pd76Vl7zRpE7NLJQ7XU.ttf","900":"http://fonts.gstatic.com/s/yantramanav/v3/HSfbC4Z8I8BZ00wiXeA5bCenaqEuufTBk9XMKnKmgDA.ttf","regular":"http://fonts.gstatic.com/s/yantramanav/v3/FwdziO-qWAO8pZg8e376kaCWcynf_cDxXwCLxiixG1c.ttf"}},{"kind":"webfonts#webfont","family":"Yatra One","category":"display","variants":["regular"],"subsets":["devanagari","latin-ext","latin"],"version":"v4","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/yatraone/v4/ApKQzWF7_vG0Lt5TDqgUvw.ttf"}},{"kind":"webfonts#webfont","family":"Yellowtail","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v8","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/yellowtail/v8/HLrU6lhCTjXfLZ7X60LcB_esZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Yeseva One","category":"display","variants":["regular"],"subsets":["cyrillic","latin-ext","cyrillic-ext","vietnamese","latin"],"version":"v12","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/yesevaone/v12/eenQQxvpzSA80JmisGcgX_esZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Yesteryear","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v6","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/yesteryear/v6/dv09hP_ZrdjVOfZQXKXuZvesZW2xOQ-xsNqO47m55DA.ttf"}},{"kind":"webfonts#webfont","family":"Yrsa","category":"serif","variants":["300","regular","500","600","700"],"subsets":["latin-ext","latin"],"version":"v3","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/yrsa/v3/YI0C1syzAYpkrPx27UnC2w.ttf","500":"http://fonts.gstatic.com/s/yrsa/v3/rWuZmBLHIeKRbnfSvWCvYg.ttf","600":"http://fonts.gstatic.com/s/yrsa/v3/1413P-oEfrq-tBIdqnslDQ.ttf","700":"http://fonts.gstatic.com/s/yrsa/v3/iV49zaJV5wyo_4LgxE2yng.ttf","regular":"http://fonts.gstatic.com/s/yrsa/v3/JWX_dCK4_Jq-oqF7r9rFHg.ttf"}},{"kind":"webfonts#webfont","family":"Zeyada","category":"handwriting","variants":["regular"],"subsets":["latin"],"version":"v7","lastModified":"2017-10-10","files":{"regular":"http://fonts.gstatic.com/s/zeyada/v7/hmonmGYYFwqTZQfG2nRswQ.ttf"}},{"kind":"webfonts#webfont","family":"Zilla Slab","category":"serif","variants":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"subsets":["latin-ext","latin"],"version":"v3","lastModified":"2017-10-10","files":{"300":"http://fonts.gstatic.com/s/zillaslab/v3/MIkI-zFTb-IKu6GQ4qfBIUeOrDcLawS7-ssYqLr2Xp4.ttf","500":"http://fonts.gstatic.com/s/zillaslab/v3/M-lMpg6F7WVOVam88MR7yJp-63r6doWhTEbsfBIRJ7A.ttf","600":"http://fonts.gstatic.com/s/zillaslab/v3/idTxEJxWLSyMdm2hH0_fO_pTEJqju4Hz1txDWij77d4.ttf","700":"http://fonts.gstatic.com/s/zillaslab/v3/5alS-fi1sAYG-KJydQxv8AJKKGfqHaYFsRG-T3ceEVo.ttf","300italic":"http://fonts.gstatic.com/s/zillaslab/v3/SlbCHfLtf3uBEqmR9ezZMqcQoVhARpoaILP7amxE_8g.ttf","regular":"http://fonts.gstatic.com/s/zillaslab/v3/GQa6C2kQZDjk1E7wBSIhnPesZW2xOQ-xsNqO47m55DA.ttf","italic":"http://fonts.gstatic.com/s/zillaslab/v3/0uwn9tpUNTyjFGXazfTluC3USBnSvpkopQaUR-2r7iU.ttf","500italic":"http://fonts.gstatic.com/s/zillaslab/v3/SlbCHfLtf3uBEqmR9ezZMpMQuUSAwdHsY8ov_6tk1oA.ttf","600italic":"http://fonts.gstatic.com/s/zillaslab/v3/SlbCHfLtf3uBEqmR9ezZMmv8CylhIUtwUiYO7Z2wXbE.ttf","700italic":"http://fonts.gstatic.com/s/zillaslab/v3/SlbCHfLtf3uBEqmR9ezZMkD2ttfZwueP-QU272T9-k4.ttf"}},{"kind":"webfonts#webfont","family":"Zilla Slab Highlight","category":"display","variants":["regular","700"],"subsets":["latin-ext","latin"],"version":"v3","lastModified":"2017-10-09","files":{"700":"http://fonts.gstatic.com/s/zillaslabhighlight/v3/4GC1z5cbR6tbZfervoVHHDJanj6ILIntqP8io1sy9nk.ttf","regular":"http://fonts.gstatic.com/s/zillaslabhighlight/v3/A1oFQmFZMluFeVEQs3f1ZsRj1XVSCnpi3yrU572D-Ys.ttf"}}]};


/***/ }),

/***/ "./assets/js/modules/helpers.js":
/*!**************************************!*\
  !*** ./assets/js/modules/helpers.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * helper js
 * @version 1.0.0
 *
 * - Random Key
 * - Replace String
 * - WP Media Lightbox
 */

$ = jQuery.noConflict();
const jsesc = __webpack_require__(/*! jsesc */ "./node_modules/jsesc/jsesc.js");

module.exports = {
  /**
   * make random key
   */
  random_key (prefix) {
    var rand_id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 15);
    return (prefix) ? prefix + '-' + rand_id : rand_id;;
  },
  /**
   * replace string
   */
  replace_str (str, find, replace) {
    for (var i = 0; i < find.length; i++) {
      str = str.replace(new RegExp(find[i], 'gi'), replace[i]);
    }
    return str;
  },
  /**
   * WP Media lightbox
   * @param [Object] opts
   */
  wp_media (opts) {
    var opts = $.extend({
      title: 'Select or Upload Media Of Your Chosen Persuasion',
      button: {
        text: 'Use this media'
      },
      multiple: false,
    }, opts);

    return wp.media(opts);
  },
  is_json_by_string (str) {
    try { JSON.parse(str); } 
    catch (e) { return false; }

    return true;
  },
  jsesc(value = '', opts = {}) {
    return jsesc(value, opts);
  },
  check_local_fonts( font_families ) { 
    var local_fonts = ['Neue Einstellung', 'Futura', 'Texta'];
    var array_clean = function( arr, delete_value ) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == delete_value) {         
          arr.splice(i, 1); i--;
        }
      }
      return arr;
    },

    font_families = font_families.map( function( font ) {
      var f_segment = font.split(':');
      if( -1 == $.inArray( f_segment[0], local_fonts ) ) { return font; }
    } )

    // remove undefined item
    font_families = array_clean( font_families, undefined );
    return font_families;
  }
};


/***/ }),

/***/ "./assets/js/modules/store/module-blog.js":
/*!************************************************!*\
  !*** ./assets/js/modules/store/module-blog.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Store module blog
 */

module.exports = {
    state: {
      data: theme_customize_object.flintotheme_blog_settings,
    },
    mutations: {
  
    },
};
  

/***/ }),

/***/ "./assets/js/modules/store/module-designer.js":
/*!****************************************************!*\
  !*** ./assets/js/modules/store/module-designer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Store module designer
 */

var group_style = [
  {
    base_id: 'typography',
    name: 'Typography',
    description: 'font, color, size, line-height, etc.',
    icon: 'flaticon-capitals',
    data_map: {
      'typography'  : {
        font_style: [],
        font_family: '',
        font_variant: '',
        font_size: '',
        line_height: '',
        letter_spacing: '',
        text_color: '',
        fill_color: '',
      },
    },
    controls: {
      'typography'  : {
        label: 'Text',
        type: 'typography',
        value: {},
        extra_class: '',
        description: ''
      },
    },
  },
  {
    base_id: 'size',
    name: 'Size',
    description: 'width, height.',
    icon: 'flaticon-full-size',
    data_map: {
      'width': '',
      'min-width': '',
      'max-width': '',
      'height': '',
      'min-height': '',
      'max-height': '',
    },
    controls: {
      'width'       : { label: 'Width',       type: 'input', extra_class: 'theme-extends-width-4',  value: '',  placeholder: '0px',  description: 'The width property sets the width of an element.' },
      'min-width'   : { label: 'Min Width',   type: 'input', extra_class: 'theme-extends-width-4',  value: '',  placeholder: '0px',  description: 'The min-width property is used to set the minimum width of an element.' },
      'max-width'   : { label: 'Max Width',   type: 'input', extra_class: 'theme-extends-width-4',  value: '',  placeholder: '0px',  description: 'The max-width property is used to set the maximum width of an element.' },
      'height'      : { label: 'Height',      type: 'input', extra_class: 'theme-extends-width-4',  value: '',  placeholder: '0px',  description: 'The height property sets the height of an element.' },
      'min-height'  : { label: 'Min Height',  type: 'input', extra_class: 'theme-extends-width-4',  value: '',  placeholder: '0px',  description: 'The min-height property is used to set the minimum height of an element.' },
      'max-height'  : { label: 'Max Height',  type: 'input', extra_class: 'theme-extends-width-4',  value: '',  placeholder: '0px',  description: 'The max-height property is used to set the maximum height of an element.' },
    },
  },
  {
    base_id: 'space',
    name: 'Space',
    description: 'margin & padding.',
    icon: 'flaticon-left-margin',
    data_map: {
      'margin': '',
      'padding': '',
    },
    controls: {
      'margin'      : { label: 'Margin',      type: 'input',   value: '', placeholder: '0px 0px 0px 0px',  description: 'The margin shorthand property sets all the margin properties in one declaration. This property can have from one to four values.' },
      'padding'     : { label: 'Padding',     type: 'input',   value: '', placeholder: '0px 0px 0px 0px',  description: 'The padding shorthand property sets all the padding properties in one declaration. This property can have from one to four values.' },
    },
  },
  {
    base_id: 'border',
    name: 'Border',
    description: 'format border style, color, radius.',
    icon: 'flaticon-border',
    data_map: {
      'border-style': '',
      'border-width': '',
      'border-radius': '',
      'border-color': '',
    },
    controls: {
      'border-style'  : {
        label: 'Border Style',
        type: 'select',
        options: [
          { label: 'None',    value: 'none',    },
          { label: 'Dotted',  value: 'dotted',  },
          { label: 'Dashed',  value: 'dashed',  },
          { label: 'Double',  value: 'double',  },
          { label: 'Solid',   value: 'solid',   },
        ],
        extra_class: 'theme-extends-width-7',
      },
      'border-width'  : {
        label: 'Border Width',
        type: 'input',
        extra_class: 'theme-extends-width-5',
        placeholder: '0px',
      },
      'border-radius' : {
        label: 'Border Radius',
        type: 'input',
        extra_class: '',
        placeholder: '0px 0px 0px 0px',
      },
      'border-color'  : {
        label: 'Border Color',
        type: 'color-picker',
        alpha: true,
        extra_class: '',
      },
    },
  },
  {
    base_id: 'position',
    name: 'Position',
    description: 'Property specifies the type of positioning method.',
    icon: 'flaticon-background',
    data_map: {
      position: '',
      left: '',
      top: '',
    },
    controls: {
      'position'  : {
        label: 'Position',
        type: 'select',
        options: [
          { label: 'Static',    value: 'static',    },
          { label: 'Absolute',  value: 'absolute',  },
          { label: 'Fixed',     value: 'fixed',     },
          { label: 'Relative',  value: 'relative',  },
          { label: 'Initial',   value: 'initial',   },
          // { label: 'Sticky',    value: 'sticky',    },
          // { label: 'Inherit',   value: 'inherit',   },
        ],
      },
      'top'  : {
        label: 'Top',
        type: 'input',
        extra_class: 'theme-extends-width-6',
        placeholder: '0px',
      },
      'right'  : {
        label: 'Right',
        type: 'input',
        extra_class: 'theme-extends-width-6',
        placeholder: '0px',
      },
      'bottom'  : {
        label: 'Bottom',
        type: 'input',
        extra_class: 'theme-extends-width-6',
        placeholder: '0px',
      },
      'left'  : {
        label: 'Left',
        type: 'input',
        extra_class: 'theme-extends-width-6',
        placeholder: '0px',
      },
    }
  },
  {
    base_id: 'background',
    name: 'Background',
    description: 'format background image, color.',
    icon: 'flaticon-background',
    data_map: {
      'background-color': '',
      'background-image': '',
      'background-size': '',
      'background-repeat': '',
      'background-position': '',
      'background-attachment': '',
    },
    controls: {
      'background-color': {
        label: 'Background Color',
        type: 'color-picker',
        alpha: true,
        extra_class: '',
      },
      'background-image': {
        label: 'Background Image',
        type: 'wp-media',
        extra_class: '',
      },
      'background-size': {
        type: 'select',
        options: [
          { label: 'Cover',               value: 'cover'     },
          { label: 'Contain',             value: 'contain'   },
          { label: 'Initial',             value: 'initial'   },
        ],
        condition: {
          'background-image': 'not-null',
        },
      },
      'background-repeat': {
        label: 'Background Repeat',
        type: 'select',
        options: [
          { label: 'No Repeat',           value: 'no-repeat'  },
          { label: 'Tile',                value: 'repeat'     },
          { label: 'Tile Horizontally',   value: 'repeat-x'   },
          { label: 'Tile Vertically',     value: 'repeat-y'   },
        ],
        condition: {
          'background-image': 'not-null',
        },
      },
      'background-position': {
        label: 'Background Position',
        type: 'select',
        options: [
          { label: 'Left',    value: 'left'    },
          { label: 'Center',  value: 'center'  },
          { label: 'Right',   value: 'right'   },
        ],
        condition: {
          'background-image': 'not-null',
        },
      },
      'background-attachment': {
        label: 'Background Attachment',
        type: 'select',
        options: [
          { label: 'Scroll',   value: 'scroll'  },
          { label: 'Fixed',    value: 'fixed'   },
        ],
        condition: {
          'background-image': 'not-null',
        },
      },
    },
  },
];

var elements = [
  {
    name: 'Body Tag',
    description: 'format body tag default style',
    help: 'The &#60;body&#62; element contains all the contents of an HTML <br />document, such as text, hyperlinks, images, tables, lists, etc.',
    css_selector: 'body',
    group_default: ['typography', 'space', 'border', 'background'],
  },
  {
    name: 'Button Tag',
    description: 'format button tag default style',
    help: 'The &#60;button&#62; tag defines a clickable button.',
    css_selector: [
      {name: 'Button style default', selector: 'button'},
      {name: 'Button style on :hover', selector: 'button:hover'},
    ],
    group_default: ['typography', 'space', 'border', 'background'],
  },
  {
    name: 'A Tag',
    description: 'format a(link) tag default style',
    help: 'The &#60;a&#62; tag defines a hyperlink, which is used to <br />link from one page to another. ',
    css_selector: [
      {name: 'Link style default', selector: 'a'},
      {name: 'Link style on :hover', selector: 'a:hover'},
    ],
    group_default: ['typography'],
  },
  {
    name: 'Heading Tag',
    description: 'format heading(h1 .. h6) tag default style',
    help: 'Headings are defined with the &#60;h1&#62; to &#60;h6&#62; tags.',
    css_selector: [
      {name: 'General H1 .. H6', selector: 'h1,h2,h3,h4,h5,h6'},
      {name: 'H1', selector: 'h1'},
      {name: 'H2', selector: 'h2'},
      {name: 'H3', selector: 'h3'},
      {name: 'H4', selector: 'h4'},
      {name: 'H5', selector: 'h5'},
      {name: 'H6', selector: 'h6'},
    ],
    group_default: ['typography'],
  },
];

module.exports = {
  state: {
    group_style   : group_style,
    elements      : elements,
    data          : theme_customize_object.flintotheme_designer_settings,
    google_fonts  : {},
    data_edit     : {},
  },
  mutations: {},
}


/***/ }),

/***/ "./assets/js/modules/store/module-footer.js":
/*!**************************************************!*\
  !*** ./assets/js/modules/store/module-footer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Store module footer
 */

module.exports = {
  state: {
    widgets           : theme_customize_object.flintotheme_header_widget,           // widgets,
    widget_options    : theme_customize_object.flintotheme_header_widget_options,   // widget options
    wp_widgets        : theme_customize_object.flintotheme_header_wp_widget,        // wp widgets,
    layouts           : theme_customize_object.flintotheme_footer_builder_layout,   // header layouts
    layout_current    : {},
    layout_edit       : {},
    element_edit      : {},
  },
  mutations: {

  },
};


/***/ }),

/***/ "./assets/js/modules/store/module-global.js":
/*!**************************************************!*\
  !*** ./assets/js/modules/store/module-global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Store module global
 */

var globalData = {
  layout: {
    layout: 'default', /* nav-left, nav-right */
    nav_toogle: 'no',
  },
  sidebar: {
    archive: 'right-sidebar',
    // archive_no_sidebar_col: 12,

    page_template_default: 'right-sidebar',
    // page_template_default_no_sidebar_col: 12,

    single_default: 'right-sidebar',
    // single_no_sidebar_col: 12,
  },
  pagination: {
    layout: 'default',
  },
  scroll_top: {
    show: 'no',
    icon: '',
  },
};

module.exports = {
  state: {
    data: theme_customize_object.flintotheme_global_settings,
    edit: '',
  },
  mutations: {

  },
};


/***/ }),

/***/ "./assets/js/modules/store/module-header.js":
/*!**************************************************!*\
  !*** ./assets/js/modules/store/module-header.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Store module header
 */

module.exports = {
  state: {
    widgets           : theme_customize_object.flintotheme_header_widget,           // widgets,
    widget_options    : theme_customize_object.flintotheme_header_widget_options,   // widget options
    wp_widgets        : theme_customize_object.flintotheme_header_wp_widget,        // wp widgets,
    layouts           : theme_customize_object.flintotheme_header_builder_layout,   // header layouts
    layout_current    : {},
    layout_edit       : {},
    element_edit      : {},
  },
  mutations: {

  },
};


/***/ }),

/***/ "./assets/js/modules/store/module-heading-bar.js":
/*!*******************************************************!*\
  !*** ./assets/js/modules/store/module-heading-bar.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Store module heading bar
 */

module.exports = {
  state: {
    data: {
      flintotheme_heading_bar_display             : theme_customize_object.flintotheme_heading_bar_display,
      flintotheme_heading_bar_page_title_display  : theme_customize_object.flintotheme_heading_bar_page_title_display,
      flintotheme_heading_bar_breadcrumb_display  : theme_customize_object.flintotheme_heading_bar_breadcrumb_display,
      flintotheme_heading_bar_content_align       : theme_customize_object.flintotheme_heading_bar_content_align,
      flintotheme_heading_bar_background_settings : theme_customize_object.flintotheme_heading_bar_background_settings,
    },
  },
  mutations: {

  },
};


/***/ }),

/***/ "./assets/js/modules/store/module-jetpack-portfolio.js":
/*!*************************************************************!*\
  !*** ./assets/js/modules/store/module-jetpack-portfolio.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Store module Jetpack Portfolio
 */

module.exports = {
    state: {
      data: theme_customize_object.flintotheme_jetpack_portfolio_settings,
    },
    mutations: {
  
    },
  };
  

/***/ }),

/***/ "./assets/js/modules/store/module-taxonomy-heading-bar.js":
/*!****************************************************************!*\
  !*** ./assets/js/modules/store/module-taxonomy-heading-bar.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Store module heading bar
 */

module.exports = {
  state: {
    data: {
      flintotheme_data_taxonomy : theme_customize_object.flintotheme_data_taxonomy,
      flintotheme_heading_bar_settings : theme_customize_object.flintotheme_taxonomy_heading_bar_settings,
    },
  },
  mutations: {

  },
};
  

/***/ }),

/***/ "./assets/js/modules/store/module-woocommerce.js":
/*!*******************************************************!*\
  !*** ./assets/js/modules/store/module-woocommerce.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Store module WooCommerce
 */

module.exports = {
  state: {
    data: theme_customize_object.flintotheme_woocommerce_settings,
  },
  mutations: {

  },
};


/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/jsesc/jsesc.js":
/*!*************************************!*\
  !*** ./node_modules/jsesc/jsesc.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

const object = {};
const hasOwnProperty = object.hasOwnProperty;
const forOwn = (object, callback) => {
	for (const key in object) {
		if (hasOwnProperty.call(object, key)) {
			callback(key, object[key]);
		}
	}
};

const extend = (destination, source) => {
	if (!source) {
		return destination;
	}
	forOwn(source, (key, value) => {
		destination[key] = value;
	});
	return destination;
};

const forEach = (array, callback) => {
	const length = array.length;
	let index = -1;
	while (++index < length) {
		callback(array[index]);
	}
};

const toString = object.toString;
const isArray = Array.isArray;
const isBuffer = Buffer.isBuffer;
const isObject = (value) => {
	// This is a very simple check, but it’s good enough for what we need.
	return toString.call(value) == '[object Object]';
};
const isString = (value) => {
	return typeof value == 'string' ||
		toString.call(value) == '[object String]';
};
const isNumber = (value) => {
	return typeof value == 'number' ||
		toString.call(value) == '[object Number]';
};
const isFunction = (value) => {
	return typeof value == 'function';
};
const isMap = (value) => {
	return toString.call(value) == '[object Map]';
};
const isSet = (value) => {
	return toString.call(value) == '[object Set]';
};

/*--------------------------------------------------------------------------*/

// https://mathiasbynens.be/notes/javascript-escapes#single
const singleEscapes = {
	'"': '\\"',
	'\'': '\\\'',
	'\\': '\\\\',
	'\b': '\\b',
	'\f': '\\f',
	'\n': '\\n',
	'\r': '\\r',
	'\t': '\\t'
	// `\v` is omitted intentionally, because in IE < 9, '\v' == 'v'.
	// '\v': '\\x0B'
};
const regexSingleEscape = /["'\\\b\f\n\r\t]/;

const regexDigit = /[0-9]/;
const regexWhitelist = /[ !#-&\(-\[\]-~]/;

const jsesc = (argument, options) => {
	const increaseIndentation = () => {
		oldIndent = indent;
		++options.indentLevel;
		indent = options.indent.repeat(options.indentLevel)
	};
	// Handle options
	const defaults = {
		'escapeEverything': false,
		'minimal': false,
		'isScriptContext': false,
		'quotes': 'single',
		'wrap': false,
		'es6': false,
		'json': false,
		'compact': true,
		'lowercaseHex': false,
		'numbers': 'decimal',
		'indent': '\t',
		'indentLevel': 0,
		'__inline1__': false,
		'__inline2__': false
	};
	const json = options && options.json;
	if (json) {
		defaults.quotes = 'double';
		defaults.wrap = true;
	}
	options = extend(defaults, options);
	if (
		options.quotes != 'single' &&
		options.quotes != 'double' &&
		options.quotes != 'backtick'
	) {
		options.quotes = 'single';
	}
	const quote = options.quotes == 'double' ?
		'"' :
		(options.quotes == 'backtick' ?
			'`' :
			'\''
		);
	const compact = options.compact;
	const lowercaseHex = options.lowercaseHex;
	let indent = options.indent.repeat(options.indentLevel);
	let oldIndent = '';
	const inline1 = options.__inline1__;
	const inline2 = options.__inline2__;
	const newLine = compact ? '' : '\n';
	let result;
	let isEmpty = true;
	const useBinNumbers = options.numbers == 'binary';
	const useOctNumbers = options.numbers == 'octal';
	const useDecNumbers = options.numbers == 'decimal';
	const useHexNumbers = options.numbers == 'hexadecimal';

	if (json && argument && isFunction(argument.toJSON)) {
		argument = argument.toJSON();
	}

	if (!isString(argument)) {
		if (isMap(argument)) {
			if (argument.size == 0) {
				return 'new Map()';
			}
			if (!compact) {
				options.__inline1__ = true;
				options.__inline2__ = false;
			}
			return 'new Map(' + jsesc(Array.from(argument), options) + ')';
		}
		if (isSet(argument)) {
			if (argument.size == 0) {
				return 'new Set()';
			}
			return 'new Set(' + jsesc(Array.from(argument), options) + ')';
		}
		if (isBuffer(argument)) {
			if (argument.length == 0) {
				return 'Buffer.from([])';
			}
			return 'Buffer.from(' + jsesc(Array.from(argument), options) + ')';
		}
		if (isArray(argument)) {
			result = [];
			options.wrap = true;
			if (inline1) {
				options.__inline1__ = false;
				options.__inline2__ = true;
			}
			if (!inline2) {
				increaseIndentation();
			}
			forEach(argument, (value) => {
				isEmpty = false;
				if (inline2) {
					options.__inline2__ = false;
				}
				result.push(
					(compact || inline2 ? '' : indent) +
					jsesc(value, options)
				);
			});
			if (isEmpty) {
				return '[]';
			}
			if (inline2) {
				return '[' + result.join(', ') + ']';
			}
			return '[' + newLine + result.join(',' + newLine) + newLine +
				(compact ? '' : oldIndent) + ']';
		} else if (isNumber(argument)) {
			if (json) {
				// Some number values (e.g. `Infinity`) cannot be represented in JSON.
				return JSON.stringify(argument);
			}
			if (useDecNumbers) {
				return String(argument);
			}
			if (useHexNumbers) {
				let hexadecimal = argument.toString(16);
				if (!lowercaseHex) {
					hexadecimal = hexadecimal.toUpperCase();
				}
				return '0x' + hexadecimal;
			}
			if (useBinNumbers) {
				return '0b' + argument.toString(2);
			}
			if (useOctNumbers) {
				return '0o' + argument.toString(8);
			}
		} else if (!isObject(argument)) {
			if (json) {
				// For some values (e.g. `undefined`, `function` objects),
				// `JSON.stringify(value)` returns `undefined` (which isn’t valid
				// JSON) instead of `'null'`.
				return JSON.stringify(argument) || 'null';
			}
			return String(argument);
		} else { // it’s an object
			result = [];
			options.wrap = true;
			increaseIndentation();
			forOwn(argument, (key, value) => {
				isEmpty = false;
				result.push(
					(compact ? '' : indent) +
					jsesc(key, options) + ':' +
					(compact ? '' : ' ') +
					jsesc(value, options)
				);
			});
			if (isEmpty) {
				return '{}';
			}
			return '{' + newLine + result.join(',' + newLine) + newLine +
				(compact ? '' : oldIndent) + '}';
		}
	}

	const string = argument;
	// Loop over each code unit in the string and escape it
	let index = -1;
	const length = string.length;
	result = '';
	while (++index < length) {
		const character = string.charAt(index);
		if (options.es6) {
			const first = string.charCodeAt(index);
			if ( // check if it’s the start of a surrogate pair
				first >= 0xD800 && first <= 0xDBFF && // high surrogate
				length > index + 1 // there is a next code unit
			) {
				const second = string.charCodeAt(index + 1);
				if (second >= 0xDC00 && second <= 0xDFFF) { // low surrogate
					// https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
					const codePoint = (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
					let hexadecimal = codePoint.toString(16);
					if (!lowercaseHex) {
						hexadecimal = hexadecimal.toUpperCase();
					}
					result += '\\u{' + hexadecimal + '}';
					++index;
					continue;
				}
			}
		}
		if (!options.escapeEverything) {
			if (regexWhitelist.test(character)) {
				// It’s a printable ASCII character that is not `"`, `'` or `\`,
				// so don’t escape it.
				result += character;
				continue;
			}
			if (character == '"') {
				result += quote == character ? '\\"' : character;
				continue;
			}
			if (character == '`') {
				result += quote == character ? '\\`' : character;
				continue;
			}
			if (character == '\'') {
				result += quote == character ? '\\\'' : character;
				continue;
			}
		}
		if (
			character == '\0' &&
			!json &&
			!regexDigit.test(string.charAt(index + 1))
		) {
			result += '\\0';
			continue;
		}
		if (regexSingleEscape.test(character)) {
			// no need for a `hasOwnProperty` check here
			result += singleEscapes[character];
			continue;
		}
		const charCode = character.charCodeAt(0);
		if (options.minimal && charCode != 0x2028 && charCode != 0x2029) {
			result += character;
			continue;
		}
		let hexadecimal = charCode.toString(16);
		if (!lowercaseHex) {
			hexadecimal = hexadecimal.toUpperCase();
		}
		const longhand = hexadecimal.length > 2 || json;
		const escaped = '\\' + (longhand ? 'u' : 'x') +
			('0000' + hexadecimal).slice(longhand ? -4 : -2);
		result += escaped;
		continue;
	}
	if (options.wrap) {
		result = quote + result + quote;
	}
	if (quote == '`') {
		result = result.replace(/\$\{/g, '\\\$\{');
	}
	if (options.isScriptContext) {
		// https://mathiasbynens.be/notes/etago
		return result
			.replace(/<\/(script|style)/gi, '<\\/$1')
			.replace(/<!--/g, json ? '\\u003C!--' : '\\x3C!--');
	}
	return result;
};

jsesc.version = '2.5.1';

module.exports = jsesc;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/vue-color/dist/vue-color.min.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-color/dist/vue-color.min.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=22)}([function(e,t){function n(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var i=r(a);return[n].concat(a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<e.length;a++){var o=e[a];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=u[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(i(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var o=[],a=0;a<n.parts.length;a++)o.push(i(n.parts[a]));u[n.id]={id:n.id,refs:1,parts:o}}}}function a(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(p)return v;r.parentNode.removeChild(r)}if(g){var i=f++;r=h||(h=a()),t=o.bind(null,r,i,!1),n=o.bind(null,r,i,!0)}else r=a(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function o(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(26),u={},d=c&&(document.head||document.getElementsByTagName("head")[0]),h=null,f=0,p=!1,v=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){p=n;var a=l(e,t);return r(a),function(t){for(var n=[],i=0;i<a.length;i++){var o=a[i],s=u[o.id];s.refs--,n.push(s)}t?(a=l(e,t),r(a)):a=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete u[s.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,n,r,a,i){var o,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(o=e,s=e.default);var l="function"==typeof s?s.options:s;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),a&&(l._scopeId=a);var u;if(i?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=u):r&&(u=r),u){var d=l.functional,h=d?l.render:l.beforeCreate;d?(l._injectStyles=u,l.render=function(e,t){return u.call(t),h(e,t)}):l.beforeCreate=h?[].concat(h,u):[u]}return{esModule:o,exports:s,options:l}}},function(e,t,n){"use strict";function r(e,t){var n,r=e&&e.a;!(n=e&&e.hsl?(0,i.default)(e.hsl):e&&e.hex&&e.hex.length>0?(0,i.default)(e.hex):(0,i.default)(e))||void 0!==n._a&&null!==n._a||n.setAlpha(r||1);var a=n.toHsl(),o=n.toHsv();return 0===a.s&&(o.h=a.h=e.h||e.hsl&&e.hsl.h||t||0),{hsl:a,hex:n.toHexString().toUpperCase(),rgba:n.toRgb(),hsv:o,oldHue:e.h||t||a.h,source:e.source,a:e.a||n.getAlpha()}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(27),i=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={props:["value"],data:function(){return{val:r(this.value)}},computed:{colors:{get:function(){return this.val},set:function(e){this.val=e,this.$emit("input",e)}}},watch:{value:function(e){this.val=r(e)}},methods:{colorChange:function(e,t){this.oldHue=this.colors.hsl.h,this.colors=r(e,t||this.oldHue)},isValidHex:function(e){return(0,i.default)(e).isValid()},simpleCheckForValidColor:function(e){for(var t=["r","g","b","a","h","s","l","v"],n=0,r=0,a=0;a<t.length;a++){var i=t[a];e[i]&&(n++,isNaN(e[i])||r++)}if(n===r)return e}}}},function(e,t,n){"use strict";function r(e){c||n(28)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(10),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var s=n(30),c=!1,l=n(2),u=r,d=l(i.a,s.a,!1,u,null,null);d.options.__file="src/components/common/EditableInput.vue",t.default=d.exports},function(e,t,n){"use strict";function r(e){c||n(43)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(14),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var s=n(45),c=!1,l=n(2),u=r,d=l(i.a,s.a,!1,u,null,null);d.options.__file="src/components/common/Hue.vue",t.default=d.exports},function(e,t,n){"use strict";function r(e){c||n(55)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(17),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var s=n(59),c=!1,l=n(2),u=r,d=l(i.a,s.a,!1,u,null,null);d.options.__file="src/components/common/Saturation.vue",t.default=d.exports},function(e,t,n){"use strict";function r(e){c||n(60)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(18),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var s=n(65),c=!1,l=n(2),u=r,d=l(i.a,s.a,!1,u,null,null);d.options.__file="src/components/common/Alpha.vue",t.default=d.exports},function(e,t,n){"use strict";function r(e){c||n(62)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(19),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var s=n(64),c=!1,l=n(2),u=r,d=l(i.a,s.a,!1,u,null,null);d.options.__file="src/components/common/Checkboard.vue",t.default=d.exports},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),i=r(a),o=n(4),s=r(o),c=["#4D4D4D","#999999","#FFFFFF","#F44E3B","#FE9200","#FCDC00","#DBDF00","#A4DD00","#68CCCA","#73D8FF","#AEA1FF","#FDA1FF","#333333","#808080","#CCCCCC","#D33115","#E27300","#FCC400","#B0BC00","#68BC00","#16A5A5","#009CE0","#7B64FF","#FA28FF","#000000","#666666","#B3B3B3","#9F0500","#C45100","#FB9E00","#808900","#194D33","#0C797D","#0062B1","#653294","#AB149E"];t.default={name:"Compact",mixins:[i.default],props:{palette:{type:Array,default:function(){return c}}},components:{"ed-in":s.default},computed:{pick:function(){return this.colors.hex}},methods:{handlerClick:function(e){this.colorChange({hex:e,source:"hex"})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"editableInput",props:{label:String,desc:String,value:[String,Number],max:Number,min:Number,arrowOffset:{type:Number,default:1}},computed:{val:{get:function(){return this.value},set:function(e){if(!(void 0!==this.max&&+e>this.max))return e;this.$refs.input.value=this.max}}},methods:{update:function(e){this.handleChange(e.target.value)},handleChange:function(e){var t={};t[this.label]=e,void 0===t.hex&&void 0===t["#"]?this.$emit("change",t):e.length>5&&this.$emit("change",t)},handleBlur:function(e){console.log(e)},handleKeyDown:function(e){var t=this.val,n=Number(t);if(n){var r=this.arrowOffset||1;38===e.keyCode&&(t=n+r,this.handleChange(t),e.preventDefault()),40===e.keyCode&&(t=n-r,this.handleChange(t),e.preventDefault())}},handleDrag:function(e){console.log(e)},handleMouseDown:function(e){console.log(e)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),a=function(e){return e&&e.__esModule?e:{default:e}}(r),i=["#FFFFFF","#F2F2F2","#E6E6E6","#D9D9D9","#CCCCCC","#BFBFBF","#B3B3B3","#A6A6A6","#999999","#8C8C8C","#808080","#737373","#666666","#595959","#4D4D4D","#404040","#333333","#262626","#0D0D0D","#000000"];t.default={name:"Grayscale",mixins:[a.default],props:{palette:{type:Array,default:function(){return i}}},components:{},computed:{pick:function(){return this.colors.hex}},methods:{handlerClick:function(e){this.colorChange({hex:e,source:"hex"})}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(4),i=r(a),o=n(3),s=r(o);t.default={name:"Material",mixins:[s.default],components:{"ed-in":i.default},methods:{onChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),i=r(a),o=n(5),s=r(o);t.default={name:"Slider",mixins:[i.default],props:{direction:String},components:{hue:s.default},computed:{activeOffset:function(){return Math.round(100*this.colors.hsl.s)/100==.5?Math.round(100*this.colors.hsl.l)/100:0}},data:function(){return{swatches:[".80",".65",".50",".35",".20"]}},methods:{hueChange:function(e){this.colorChange(e)},handleSwClick:function(e,t){this.colorChange({h:this.colors.hsl.h,s:.5,l:t,source:"hsl"})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Hue",props:{value:Object,direction:{type:String,default:"horizontal"}},data:function(){return{oldHue:0,pullDirection:""}},computed:{colors:function(){var e=this.value.hsl.h;return 0!==e&&e-this.oldHue>0&&(this.pullDirection="right"),0!==e&&e-this.oldHue<0&&(this.pullDirection="left"),this.oldHue=e,this.value},directionClass:function(){return{"vc-hue--horizontal":"horizontal"===this.direction,"vc-hue--vertical":"vertical"===this.direction}},pointerTop:function(){return"vertical"===this.direction?0===this.colors.hsl.h&&"right"===this.pullDirection?0:-100*this.colors.hsl.h/360+100+"%":0},pointerLeft:function(){return"vertical"===this.direction?0:0===this.colors.hsl.h&&"right"===this.pullDirection?"100%":100*this.colors.hsl.h/360+"%"}},methods:{handleChange:function(e,t){!t&&e.preventDefault();var n,r,a=this.$refs.container,i=a.clientWidth,o=a.clientHeight,s=a.getBoundingClientRect().left+window.pageXOffset,c=a.getBoundingClientRect().top+window.pageYOffset,l=e.pageX||(e.touches?e.touches[0].pageX:0),u=e.pageY||(e.touches?e.touches[0].pageY:0),d=l-s,h=u-c;"vertical"===this.direction?(h<0?n=360:h>o?n=0:(r=-100*h/o+100,n=360*r/100),this.colors.hsl.h!==n&&this.$emit("change",{h:n,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})):(d<0?n=0:d>i?n=360:(r=100*d/i,n=360*r/100),this.colors.hsl.h!==n&&this.$emit("change",{h:n,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"}))},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(50),i=r(a),o=n(3),s=r(o),c=["red","pink","purple","deepPurple","indigo","blue","lightBlue","cyan","teal","green","lightGreen","lime","yellow","amber","orange","deepOrange","brown","blueGrey","black"],l=["900","700","500","300","100"],u=function(){var e=[];return c.forEach(function(t){var n=[];"black"===t.toLowerCase()||"white"===t.toLowerCase()?n=n.concat(["#000000","#FFFFFF"]):l.forEach(function(e){var r=i.default[t][e];n.push(r.toUpperCase())}),e.push(n)}),e}();t.default={name:"Swatches",mixins:[s.default],props:{palette:{type:Array,default:function(){return u}}},computed:{pick:function(){return this.colors.hex}},methods:{equal:function(e){return e.toLowerCase()===this.colors.hex.toLowerCase()},handlerClick:function(e){this.colorChange({hex:e,source:"hex"})}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),i=r(a),o=n(4),s=r(o),c=n(6),l=r(c),u=n(5),d=r(u),h=n(7),f=r(h);t.default={name:"Photoshop",mixins:[i.default],props:{head:{type:String,default:"Color Picker"},disableFields:{type:Boolean,default:!1}},components:{saturation:l.default,hue:d.default,alpha:f.default,"ed-in":s.default},data:function(){return{currentColor:"#FFF"}},computed:{hsv:function(){var e=this.colors.hsv;return{h:e.h.toFixed(),s:(100*e.s).toFixed(),v:(100*e.v).toFixed()}},hex:function(){var e=this.colors.hex;return e&&e.replace("#","")}},created:function(){this.currentColor=this.colors.hex},methods:{childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e["#"]?this.isValidHex(e["#"])&&this.colorChange({hex:e["#"],source:"hex"}):e.r||e.g||e.b||e.a?this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}):(e.h||e.s||e.v)&&this.colorChange({h:e.h||this.colors.hsv.h,s:e.s/100||this.colors.hsv.s,v:e.v/100||this.colors.hsv.v,source:"hsv"}))},clickCurrentColor:function(){this.colorChange({hex:this.currentColor,source:"hex"})},handleAccept:function(){this.$emit("ok")},handleCancel:function(){this.$emit("cancel")}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(57),a=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={name:"Saturation",props:{value:Object},computed:{colors:function(){return this.value},bgColor:function(){return"hsl("+this.colors.hsv.h+", 100%, 50%)"},pointerTop:function(){return-100*this.colors.hsv.v+1+100+"%"},pointerLeft:function(){return 100*this.colors.hsv.s+"%"}},methods:{throttle:(0,a.default)(function(e,t){e(t)},20,{leading:!0,trailing:!1}),handleChange:function(e,t){!t&&e.preventDefault();var n=this.$refs.container,r=n.clientWidth,a=n.clientHeight,i=n.getBoundingClientRect().left+window.pageXOffset,o=n.getBoundingClientRect().top+window.pageYOffset,s=e.pageX||(e.touches?e.touches[0].pageX:0),c=e.pageY||(e.touches?e.touches[0].pageY:0),l=s-i,u=c-o;l<0?l=0:l>r?l=r:u<0?u=0:u>a&&(u=a);var d=l/r,h=-u/a+1;h=h>0?h:0,h=h>1?1:h,this.throttle(this.onChange,{h:this.colors.hsv.h,s:d,v:h,a:this.colors.hsv.a,source:"hsva"})},onChange:function(e){this.$emit("change",e)},handleMouseDown:function(e){window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),a=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={name:"Alpha",props:{value:Object,onChange:Function},components:{checkboard:a.default},computed:{colors:function(){return this.value},gradientColor:function(){var e=this.colors.rgba,t=[e.r,e.g,e.b].join(",");return"linear-gradient(to right, rgba("+t+", 0) 0%, rgba("+t+", 1) 100%)"}},methods:{handleChange:function(e,t){!t&&e.preventDefault();var n,r=this.$refs.container,a=r.clientWidth,i=r.getBoundingClientRect().left+window.pageXOffset,o=e.pageX||(e.touches?e.touches[0].pageX:0),s=o-i;n=s<0?0:s>a?1:Math.round(100*s/a)/100,this.colors.a!==n&&this.$emit("change",{h:this.colors.hsl.h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:n,source:"rgba"})},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,t,n){"use strict";function r(e,t,n){if("undefined"==typeof document)return null;var r=document.createElement("canvas");r.width=r.height=2*n;var a=r.getContext("2d");return a?(a.fillStyle=e,a.fillRect(0,0,r.width,r.height),a.fillStyle=t,a.fillRect(0,0,n,n),a.translate(n,n),a.fillRect(0,0,n,n),r.toDataURL()):null}function a(e,t,n){var a=e+","+t+","+n;if(i[a])return i[a];var o=r(e,t,n);return i[a]=o,o}Object.defineProperty(t,"__esModule",{value:!0});var i={};t.default={name:"Checkboard",props:{size:{type:[Number,String],default:8},white:{type:String,default:"#fff"},grey:{type:String,default:"#e6e6e6"}},computed:{bgStyle:function(){return{"background-image":"url("+a(this.white,this.grey,this.size)+")"}}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),i=r(a),o=n(4),s=r(o),c=n(6),l=r(c),u=n(5),d=r(u),h=n(7),f=r(h),p=n(8),v=r(p),g=["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF"];t.default={name:"Sketch",mixins:[i.default],components:{saturation:l.default,hue:d.default,alpha:f.default,"ed-in":s.default,checkboard:v.default},props:{presetColors:{type:Array,default:function(){return g}},disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},computed:{hex:function(){return this.colors.hex.replace("#","")},activeColor:function(){var e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"}},methods:{handlePreset:function(e){this.colorChange({hex:e,source:"hex"})},childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),i=r(a),o=n(4),s=r(o),c=n(6),l=r(c),u=n(5),d=r(u),h=n(7),f=r(h),p=n(8),v=r(p);t.default={name:"Chrome",mixins:[i.default],props:{disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},components:{saturation:l.default,hue:d.default,alpha:f.default,"ed-in":s.default,checkboard:v.default},data:function(){return{fields:["hex","rgba","hsla"],fieldsIndex:0,highlight:!1}},computed:{hsl:function(){var e=this.colors.hsl,t=e.h,n=e.s,r=e.l;return{h:t.toFixed(),s:(100*n).toFixed()+"%",l:(100*r).toFixed()+"%"}},activeColor:function(){var e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"}},watch:{colors:function(e){e.a<1&&0===this.fieldsIndex&&(this.fieldsIndex=1)}},methods:{handlePreset:function(e){this.colorChange({hex:e,source:"hex"})},childChange:function(e){this.colorChange(e)},inputChange:function(e){if(e)if(e.hex)this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"});else if(e.r||e.g||e.b||e.a)this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"});else if(e.h||e.s||e.l){var t=e.s?e.s.replace("%","")/100:this.colors.hsl.s,n=e.l?e.l.replace("%","")/100:this.colors.hsl.l;this.colorChange({h:e.h||this.colors.hsl.h,s:t,l:n,source:"hsl"})}},toggleViews:function(){if(this.fieldsIndex>=2)return void(this.fieldsIndex=this.colors.a<1?1:0);this.fieldsIndex++},showHighlight:function(){this.highlight=!0},hideHighlight:function(){this.highlight=!1}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=n(23),i=r(a),o=n(32),s=r(o),c=n(36),l=r(c),u=n(40),d=r(u),h=n(47),f=r(h),p=n(52),v=r(p),g=n(67),b=r(g),x=n(71),m=r(x),_=n(7),w=r(_),C=n(8),y=r(C),k=n(4),F=r(k),A=n(5),S=r(A),M=n(6),E=r(M),j=n(3),D=r(j),O={version:"2.4.6",Compact:i.default,Grayscale:s.default,Material:l.default,Slider:d.default,Swatches:f.default,Photoshop:v.default,Sketch:b.default,Chrome:m.default,Alpha:w.default,Checkboard:y.default,EditableInput:F.default,Hue:S.default,Saturation:E.default,ColorMixin:D.default};e.exports=O},function(e,t,n){"use strict";function r(e){c||n(24)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var s=n(31),c=!1,l=n(2),u=r,d=l(i.a,s.a,!1,u,null,null);d.options.__file="src/components/Compact.vue",t.default=d.exports},function(e,t,n){var r=n(25);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("cee7b64a",r,!1)},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-compact {\n  padding-top: 5px;\n  padding-left: 5px;\n  width: 240px;\n  border-radius: 2px;\n  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);\n  background-color: #fff;\n}\n.vc-compact-colors {\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n.vc-compact-color-item {\n  list-style: none;\n  width: 15px;\n  height: 15px;\n  float: left;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  position: relative;\n  cursor: pointer;\n}\n.vc-compact-color-item--white {\n  box-shadow: inset 0 0 0 1px #ddd;\n}\n.vc-compact-color-item--white .vc-compact-dot {\n  background: #000;\n}\n.vc-compact-dot {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  bottom: 5px;\n  left: 5px;\n  border-radius: 50%;\n  opacity: 1;\n  background: #fff;\n}\n",""])},function(e,t){e.exports=function(e,t){for(var n=[],r={},a=0;a<t.length;a++){var i=t[a],o=i[0],s=i[1],c=i[2],l=i[3],u={id:e+":"+a,css:s,media:c,sourceMap:l};r[o]?r[o].parts.push(u):n.push(r[o]={id:o,parts:[u]})}return n}},function(e,t,n){var r;!function(a){function i(e,t){if(e=e||"",t=t||{},e instanceof i)return e;if(!(this instanceof i))return new i(e,t);var n=o(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=q(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=q(this._r)),this._g<1&&(this._g=q(this._g)),this._b<1&&(this._b=q(this._b)),this._ok=n.ok,this._tc_id=U++}function o(e){var t={r:0,g:0,b:0},n=1,r=null,a=null,i=null,o=!1,c=!1;return"string"==typeof e&&(e=$(e)),"object"==typeof e&&(z(e.r)&&z(e.g)&&z(e.b)?(t=s(e.r,e.g,e.b),o=!0,c="%"===String(e.r).substr(-1)?"prgb":"rgb"):z(e.h)&&z(e.s)&&z(e.v)?(r=L(e.s),a=L(e.v),t=d(e.h,r,a),o=!0,c="hsv"):z(e.h)&&z(e.s)&&z(e.l)&&(r=L(e.s),i=L(e.l),t=l(e.h,r,i),o=!0,c="hsl"),e.hasOwnProperty("a")&&(n=e.a)),n=M(n),{ok:o,format:e.format||c,r:V(255,X(t.r,0)),g:V(255,X(t.g,0)),b:V(255,X(t.b,0)),a:n}}function s(e,t,n){return{r:255*E(e,255),g:255*E(t,255),b:255*E(n,255)}}function c(e,t,n){e=E(e,255),t=E(t,255),n=E(n,255);var r,a,i=X(e,t,n),o=V(e,t,n),s=(i+o)/2;if(i==o)r=a=0;else{var c=i-o;switch(a=s>.5?c/(2-i-o):c/(i+o),i){case e:r=(t-n)/c+(t<n?6:0);break;case t:r=(n-e)/c+2;break;case n:r=(e-t)/c+4}r/=6}return{h:r,s:a,l:s}}function l(e,t,n){function r(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}var a,i,o;if(e=E(e,360),t=E(t,100),n=E(n,100),0===t)a=i=o=n;else{var s=n<.5?n*(1+t):n+t-n*t,c=2*n-s;a=r(c,s,e+1/3),i=r(c,s,e),o=r(c,s,e-1/3)}return{r:255*a,g:255*i,b:255*o}}function u(e,t,n){e=E(e,255),t=E(t,255),n=E(n,255);var r,a,i=X(e,t,n),o=V(e,t,n),s=i,c=i-o;if(a=0===i?0:c/i,i==o)r=0;else{switch(i){case e:r=(t-n)/c+(t<n?6:0);break;case t:r=(n-e)/c+2;break;case n:r=(e-t)/c+4}r/=6}return{h:r,s:a,v:s}}function d(e,t,n){e=6*E(e,360),t=E(t,100),n=E(n,100);var r=a.floor(e),i=e-r,o=n*(1-t),s=n*(1-i*t),c=n*(1-(1-i)*t),l=r%6;return{r:255*[n,s,o,o,c,n][l],g:255*[c,n,n,s,o,o][l],b:255*[o,o,c,n,n,s][l]}}function h(e,t,n,r){var a=[B(q(e).toString(16)),B(q(t).toString(16)),B(q(n).toString(16))];return r&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function f(e,t,n,r,a){var i=[B(q(e).toString(16)),B(q(t).toString(16)),B(q(n).toString(16)),B(H(r))];return a&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function p(e,t,n,r){return[B(H(r)),B(q(e).toString(16)),B(q(t).toString(16)),B(q(n).toString(16))].join("")}function v(e,t){t=0===t?0:t||10;var n=i(e).toHsl();return n.s-=t/100,n.s=j(n.s),i(n)}function g(e,t){t=0===t?0:t||10;var n=i(e).toHsl();return n.s+=t/100,n.s=j(n.s),i(n)}function b(e){return i(e).desaturate(100)}function x(e,t){t=0===t?0:t||10;var n=i(e).toHsl();return n.l+=t/100,n.l=j(n.l),i(n)}function m(e,t){t=0===t?0:t||10;var n=i(e).toRgb();return n.r=X(0,V(255,n.r-q(-t/100*255))),n.g=X(0,V(255,n.g-q(-t/100*255))),n.b=X(0,V(255,n.b-q(-t/100*255))),i(n)}function _(e,t){t=0===t?0:t||10;var n=i(e).toHsl();return n.l-=t/100,n.l=j(n.l),i(n)}function w(e,t){var n=i(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,i(n)}function C(e){var t=i(e).toHsl();return t.h=(t.h+180)%360,i(t)}function y(e){var t=i(e).toHsl(),n=t.h;return[i(e),i({h:(n+120)%360,s:t.s,l:t.l}),i({h:(n+240)%360,s:t.s,l:t.l})]}function k(e){var t=i(e).toHsl(),n=t.h;return[i(e),i({h:(n+90)%360,s:t.s,l:t.l}),i({h:(n+180)%360,s:t.s,l:t.l}),i({h:(n+270)%360,s:t.s,l:t.l})]}function F(e){var t=i(e).toHsl(),n=t.h;return[i(e),i({h:(n+72)%360,s:t.s,l:t.l}),i({h:(n+216)%360,s:t.s,l:t.l})]}function A(e,t,n){t=t||6,n=n||30;var r=i(e).toHsl(),a=360/n,o=[i(e)];for(r.h=(r.h-(a*t>>1)+720)%360;--t;)r.h=(r.h+a)%360,o.push(i(r));return o}function S(e,t){t=t||6;for(var n=i(e).toHsv(),r=n.h,a=n.s,o=n.v,s=[],c=1/t;t--;)s.push(i({h:r,s:a,v:o})),o=(o+c)%1;return s}function M(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function E(e,t){O(e)&&(e="100%");var n=R(e);return e=V(t,X(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),a.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function j(e){return V(1,X(0,e))}function D(e){return parseInt(e,16)}function O(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)}function R(e){return"string"==typeof e&&-1!=e.indexOf("%")}function B(e){return 1==e.length?"0"+e:""+e}function L(e){return e<=1&&(e=100*e+"%"),e}function H(e){return a.round(255*parseFloat(e)).toString(16)}function P(e){return D(e)/255}function z(e){return!!K.CSS_UNIT.exec(e)}function $(e){e=e.replace(I,"").replace(T,"").toLowerCase();var t=!1;if(W[e])e=W[e],t=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};var n;return(n=K.rgb.exec(e))?{r:n[1],g:n[2],b:n[3]}:(n=K.rgba.exec(e))?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=K.hsl.exec(e))?{h:n[1],s:n[2],l:n[3]}:(n=K.hsla.exec(e))?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=K.hsv.exec(e))?{h:n[1],s:n[2],v:n[3]}:(n=K.hsva.exec(e))?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=K.hex8.exec(e))?{r:D(n[1]),g:D(n[2]),b:D(n[3]),a:P(n[4]),format:t?"name":"hex8"}:(n=K.hex6.exec(e))?{r:D(n[1]),g:D(n[2]),b:D(n[3]),format:t?"name":"hex"}:(n=K.hex4.exec(e))?{r:D(n[1]+""+n[1]),g:D(n[2]+""+n[2]),b:D(n[3]+""+n[3]),a:P(n[4]+""+n[4]),format:t?"name":"hex8"}:!!(n=K.hex3.exec(e))&&{r:D(n[1]+""+n[1]),g:D(n[2]+""+n[2]),b:D(n[3]+""+n[3]),format:t?"name":"hex"}}function N(e){var t,n;return e=e||{level:"AA",size:"small"},t=(e.level||"AA").toUpperCase(),n=(e.size||"small").toLowerCase(),"AA"!==t&&"AAA"!==t&&(t="AA"),"small"!==n&&"large"!==n&&(n="small"),{level:t,size:n}}var I=/^\s+/,T=/\s+$/,U=0,q=a.round,V=a.min,X=a.max,G=a.random;i.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,n,r,i,o,s=this.toRgb();return e=s.r/255,t=s.g/255,n=s.b/255,r=e<=.03928?e/12.92:a.pow((e+.055)/1.055,2.4),i=t<=.03928?t/12.92:a.pow((t+.055)/1.055,2.4),o=n<=.03928?n/12.92:a.pow((n+.055)/1.055,2.4),.2126*r+.7152*i+.0722*o},setAlpha:function(e){return this._a=M(e),this._roundA=q(100*this._a)/100,this},toHsv:function(){var e=u(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=u(this._r,this._g,this._b),t=q(360*e.h),n=q(100*e.s),r=q(100*e.v);return 1==this._a?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=c(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=c(this._r,this._g,this._b),t=q(360*e.h),n=q(100*e.s),r=q(100*e.l);return 1==this._a?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return h(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return f(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:q(this._r),g:q(this._g),b:q(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+q(this._r)+", "+q(this._g)+", "+q(this._b)+")":"rgba("+q(this._r)+", "+q(this._g)+", "+q(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:q(100*E(this._r,255))+"%",g:q(100*E(this._g,255))+"%",b:q(100*E(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+q(100*E(this._r,255))+"%, "+q(100*E(this._g,255))+"%, "+q(100*E(this._b,255))+"%)":"rgba("+q(100*E(this._r,255))+"%, "+q(100*E(this._g,255))+"%, "+q(100*E(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(Y[h(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+p(this._r,this._g,this._b,this._a),n=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var a=i(e);n="#"+p(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this._format;var n=!1,r=this._a<1&&this._a>=0;return t||!r||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(n=this.toRgbString()),"prgb"===e&&(n=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(n=this.toHexString()),"hex3"===e&&(n=this.toHexString(!0)),"hex4"===e&&(n=this.toHex8String(!0)),"hex8"===e&&(n=this.toHex8String()),"name"===e&&(n=this.toName()),"hsl"===e&&(n=this.toHslString()),"hsv"===e&&(n=this.toHsvString()),n||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone:function(){return i(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(x,arguments)},brighten:function(){return this._applyModification(m,arguments)},darken:function(){return this._applyModification(_,arguments)},desaturate:function(){return this._applyModification(v,arguments)},saturate:function(){return this._applyModification(g,arguments)},greyscale:function(){return this._applyModification(b,arguments)},spin:function(){return this._applyModification(w,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(A,arguments)},complement:function(){return this._applyCombination(C,arguments)},monochromatic:function(){return this._applyCombination(S,arguments)},splitcomplement:function(){return this._applyCombination(F,arguments)},triad:function(){return this._applyCombination(y,arguments)},tetrad:function(){return this._applyCombination(k,arguments)}},i.fromRatio=function(e,t){if("object"==typeof e){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]="a"===r?e[r]:L(e[r]));e=n}return i(e,t)},i.equals=function(e,t){return!(!e||!t)&&i(e).toRgbString()==i(t).toRgbString()},i.random=function(){return i.fromRatio({r:G(),g:G(),b:G()})},i.mix=function(e,t,n){n=0===n?0:n||50;var r=i(e).toRgb(),a=i(t).toRgb(),o=n/100;return i({r:(a.r-r.r)*o+r.r,g:(a.g-r.g)*o+r.g,b:(a.b-r.b)*o+r.b,a:(a.a-r.a)*o+r.a})},i.readability=function(e,t){var n=i(e),r=i(t);return(a.max(n.getLuminance(),r.getLuminance())+.05)/(a.min(n.getLuminance(),r.getLuminance())+.05)},i.isReadable=function(e,t,n){var r,a,o=i.readability(e,t);switch(a=!1,r=N(n),r.level+r.size){case"AAsmall":case"AAAlarge":a=o>=4.5;break;case"AAlarge":a=o>=3;break;case"AAAsmall":a=o>=7}return a},i.mostReadable=function(e,t,n){var r,a,o,s,c=null,l=0;n=n||{},a=n.includeFallbackColors,o=n.level,s=n.size;for(var u=0;u<t.length;u++)(r=i.readability(e,t[u]))>l&&(l=r,c=i(t[u]));return i.isReadable(e,c,{level:o,size:s})||!a?c:(n.includeFallbackColors=!1,i.mostReadable(e,["#fff","#000"],n))};var W=i.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Y=i.hexNames=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}(W),K=function(){var e="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",t="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?",n="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?";return{CSS_UNIT:new RegExp(e),rgb:new RegExp("rgb"+t),rgba:new RegExp("rgba"+n),hsl:new RegExp("hsl"+t),hsla:new RegExp("hsla"+n),hsv:new RegExp("hsv"+t),hsva:new RegExp("hsva"+n),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();void 0!==e&&e.exports?e.exports=i:void 0!==(r=function(){return i}.call(t,n,t,e))&&(e.exports=r)}(Math)},function(e,t,n){var r=n(29);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("d0d513f4",r,!1)},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-editable-input {\n  position: relative;\n}\n.vc-input__input {\n  padding: 0;\n  border: 0;\n  outline: none;\n}\n.vc-input__label {\n  text-transform: capitalize;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-editable-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],ref:"input",staticClass:"vc-input__input",attrs:{"aria-label":e.value},domProps:{value:e.val},on:{keydown:e.handleKeyDown,input:[function(t){t.target.composing||(e.val=t.target.value)},e.update]}}),e._v(" "),n("span",{staticClass:"vc-input__label"},[e._v(e._s(e.label))]),e._v(" "),n("span",{staticClass:"vc-input__desc"},[e._v(e._s(e.desc))])])},a=[];r._withStripped=!0;var i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-compact"},[n("ul",{staticClass:"vc-compact-colors"},e._l(e.palette,function(t){return n("li",{key:t,staticClass:"vc-compact-color-item",class:{"vc-compact-color-item--white":"#FFFFFF"===t},style:{background:t},on:{click:function(n){e.handlerClick(t)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t===e.pick,expression:"c === pick"}],staticClass:"vc-compact-dot"})])}))])},a=[];r._withStripped=!0;var i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";function r(e){c||n(33)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(11),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var s=n(35),c=!1,l=n(2),u=r,d=l(i.a,s.a,!1,u,null,null);d.options.__file="src/components/Grayscale.vue",t.default=d.exports},function(e,t,n){var r=n(34);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("52769f95",r,!1)},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-grayscale {\n  width: 125px;\n  border-radius: 2px;\n  box-shadow: 0 2px 15px rgba(0,0,0,.12), 0 2px 10px rgba(0,0,0,.16);\n  background-color: #fff;\n}\n.vc-grayscale-colors {\n  border-radius: 2px;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n.vc-grayscale-color-item {\n  list-style: none;\n  width: 25px;\n  height: 25px;\n  float: left;\n  position: relative;\n  cursor: pointer;\n}\n.vc-grayscale-color-item--white .vc-grayscale-dot {\n  background: #000;\n}\n.vc-grayscale-dot {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 6px;\n  height: 6px;\n  margin: -3px 0 0 -2px;\n  border-radius: 50%;\n  opacity: 1;\n  background: #fff;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-grayscale"},[n("ul",{staticClass:"vc-grayscale-colors"},e._l(e.palette,function(t){return n("li",{key:t,staticClass:"vc-grayscale-color-item",class:{"vc-grayscale-color-item--white":"#FFFFFF"==t},style:{background:t},on:{click:function(n){e.handlerClick(t)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t===e.pick,expression:"c === pick"}],staticClass:"vc-grayscale-dot"})])}))])},a=[];r._withStripped=!0;var i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";function r(e){c||n(37)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(12),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var s=n(39),c=!1,l=n(2),u=r,d=l(i.a,s.a,!1,u,null,null);d.options.__file="src/components/Material.vue",t.default=d.exports},function(e,t,n){var r=n(38);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("2712b48c",r,!1)},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,'\n.vc-material {\n  width: 98px;\n  height: 98px;\n  padding: 16px;\n  font-family: "Roboto";\n  position: relative;\n  border-radius: 2px;\n  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);\n  background-color: #fff;\n}\n.vc-material .vc-input__input {\n  width: 100%;\n  margin-top: 12px;\n  font-size: 15px;\n  color: #333;\n  height: 30px;\n}\n.vc-material .vc-input__label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 11px;\n  color: #999;\n  text-transform: capitalize;\n}\n.vc-material-hex {\n  border-bottom-width: 2px;\n  border-bottom-style: solid;\n}\n.vc-material-split {\n  display: flex;\n  margin-right: -10px;\n  padding-top: 11px;\n}\n.vc-material-third {\n  flex: 1;\n  padding-right: 10px;\n}\n',""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-material"},[n("ed-in",{staticClass:"vc-material-hex",style:{borderColor:e.colors.hex},attrs:{label:"hex"},on:{change:e.onChange},model:{value:e.colors.hex,callback:function(t){e.$set(e.colors,"hex",t)},expression:"colors.hex"}}),e._v(" "),n("div",{staticClass:"vc-material-split"},[n("div",{staticClass:"vc-material-third"},[n("ed-in",{attrs:{label:"r"},on:{change:e.onChange},model:{value:e.colors.rgba.r,callback:function(t){e.$set(e.colors.rgba,"r",t)},expression:"colors.rgba.r"}})],1),e._v(" "),n("div",{staticClass:"vc-material-third"},[n("ed-in",{attrs:{label:"g"},on:{change:e.onChange},model:{value:e.colors.rgba.g,callback:function(t){e.$set(e.colors.rgba,"g",t)},expression:"colors.rgba.g"}})],1),e._v(" "),n("div",{staticClass:"vc-material-third"},[n("ed-in",{attrs:{label:"b"},on:{change:e.onChange},model:{value:e.colors.rgba.b,callback:function(t){e.$set(e.colors.rgba,"b",t)},expression:"colors.rgba.b"}})],1)])],1)},a=[];r._withStripped=!0;var i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";function r(e){c||n(41)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(13),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var s=n(46),c=!1,l=n(2),u=r,d=l(i.a,s.a,!1,u,null,null);d.options.__file="src/components/Slider.vue",t.default=d.exports},function(e,t,n){var r=n(42);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("598b9964",r,!1)},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-slider {\n  position: relative;\n  width: 410px;\n}\n.vc-slider-hue-warp {\n  height: 12px;\n  position: relative;\n}\n.vc-slider-hue-warp .vc-hue-picker {\n  width: 14px;\n  height: 14px;\n  border-radius: 6px;\n  transform: translate(-7px, -2px);\n  background-color: rgb(248, 248, 248);\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n}\n.vc-slider-swatches {\n  display: flex;\n  margin-top: 20px;\n}\n.vc-slider-swatch {\n  margin-right: 1px;\n  flex: 1;\n  width: 20%;\n}\n.vc-slider-swatch:first-child {\n  margin-right: 1px;\n}\n.vc-slider-swatch:first-child .vc-slider-swatch-picker {\n  border-radius: 2px 0px 0px 2px;\n}\n.vc-slider-swatch:last-child {\n  margin-right: 0;\n}\n.vc-slider-swatch:last-child .vc-slider-swatch-picker {\n  border-radius: 0px 2px 2px 0px;\n}\n.vc-slider-swatch-picker {\n  cursor: pointer;\n  height: 12px;\n}\n.vc-slider-swatch-picker--active {\n  transform: scaleY(1.8);\n  border-radius: 3.6px/2px;\n}\n",""])},function(e,t,n){var r=n(44);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("af546530",r,!1)},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-hue {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  border-radius: 2px;\n}\n.vc-hue--horizontal {\n  background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n}\n.vc-hue--vertical {\n  background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n}\n.vc-hue-container {\n  cursor: pointer;\n  margin: 0 2px;\n  position: relative;\n  height: 100%;\n}\n.vc-hue-pointer {\n  z-index: 2;\n  position: absolute;\n}\n.vc-hue-picker {\n  cursor: pointer;\n  margin-top: 1px;\n  width: 4px;\n  border-radius: 1px;\n  height: 8px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, .6);\n  background: #fff;\n  transform: translateX(-2px) ;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["vc-hue",e.directionClass]},[n("div",{ref:"container",staticClass:"vc-hue-container",on:{mousedown:e.handleMouseDown,touchmove:e.handleChange,touchstart:e.handleChange}},[n("div",{staticClass:"vc-hue-pointer",style:{top:e.pointerTop,left:e.pointerLeft}},[n("div",{staticClass:"vc-hue-picker"})])])])},a=[];r._withStripped=!0;var i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-slider"},[n("div",{staticClass:"vc-slider-hue-warp"},[n("hue",{on:{change:e.hueChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),n("div",{staticClass:"vc-slider-swatches"},e._l(e.swatches,function(t,r){return n("div",{staticClass:"vc-slider-swatch",attrs:{"data-index":r},on:{click:function(n){e.handleSwClick(r,t)}}},[n("div",{staticClass:"vc-slider-swatch-picker",class:{"vc-slider-swatch-picker--active":t==e.activeOffset},style:{background:"hsl("+e.colors.hsl.h+", 50%, "+100*t+"%)"}})])}))])},a=[];r._withStripped=!0;var i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";function r(e){c||n(48)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(15),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var s=n(51),c=!1,l=n(2),u=r,d=l(i.a,s.a,!1,u,null,null);d.options.__file="src/components/Swatches.vue",t.default=d.exports},function(e,t,n){var r=n(49);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("445d3d64",r,!1)},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-swatches {\n  width: 320px;\n  height: 240px;\n  overflow-y: scroll;\n  background-color: #fff;\n  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);\n}\n.vc-swatches-box {\n  padding: 16px 0 6px 16px;\n  overflow: hidden;\n}\n.vc-swatches-color-group {\n  padding-bottom: 10px;\n  width: 40px;\n  float: left;\n  margin-right: 10px;\n}\n.vc-swatches-color-it {\n  box-sizing: border-box;\n  width: 40px;\n  height: 24px;\n  cursor: pointer;\n  background: #880e4f;\n  margin-bottom: 1px;\n  overflow: hidden;\n  -ms-border-radius: 2px 2px 0 0;\n  -moz-border-radius: 2px 2px 0 0;\n  -o-border-radius: 2px 2px 0 0;\n  -webkit-border-radius: 2px 2px 0 0;\n  border-radius: 2px 2px 0 0;\n}\n.vc-swatches-color--white {\n  border: 1px solid #DDD;\n}\n.vc-swatches-pick {\n  fill: rgb(255, 255, 255);\n  margin-left: 8px;\n  display: block;\n}\n.vc-swatches-color--white .vc-swatches-pick {\n  fill: rgb(51, 51, 51);\n}\n",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"red",function(){return r}),n.d(t,"pink",function(){return a}),n.d(t,"purple",function(){return i}),n.d(t,"deepPurple",function(){return o}),n.d(t,"indigo",function(){return s}),n.d(t,"blue",function(){return c}),n.d(t,"lightBlue",function(){return l}),n.d(t,"cyan",function(){return u}),n.d(t,"teal",function(){return d}),n.d(t,"green",function(){return h}),n.d(t,"lightGreen",function(){return f}),n.d(t,"lime",function(){return p}),n.d(t,"yellow",function(){return v}),n.d(t,"amber",function(){return g}),n.d(t,"orange",function(){return b}),n.d(t,"deepOrange",function(){return x}),n.d(t,"brown",function(){return m}),n.d(t,"grey",function(){return _}),n.d(t,"blueGrey",function(){return w}),n.d(t,"darkText",function(){return C}),n.d(t,"lightText",function(){return y}),n.d(t,"darkIcons",function(){return k}),n.d(t,"lightIcons",function(){return F}),n.d(t,"white",function(){return A}),n.d(t,"black",function(){return S});var r={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",a100:"#ff8a80",a200:"#ff5252",a400:"#ff1744",a700:"#d50000"},a={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",a100:"#ff80ab",a200:"#ff4081",a400:"#f50057",a700:"#c51162"},i={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",a100:"#ea80fc",a200:"#e040fb",a400:"#d500f9",a700:"#aa00ff"},o={50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",a100:"#b388ff",a200:"#7c4dff",a400:"#651fff",a700:"#6200ea"},s={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",a100:"#8c9eff",a200:"#536dfe",a400:"#3d5afe",a700:"#304ffe"},c={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",a100:"#82b1ff",a200:"#448aff",a400:"#2979ff",a700:"#2962ff"},l={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",a100:"#80d8ff",a200:"#40c4ff",a400:"#00b0ff",a700:"#0091ea"},u={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",a100:"#84ffff",a200:"#18ffff",a400:"#00e5ff",a700:"#00b8d4"},d={50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",a100:"#a7ffeb",a200:"#64ffda",a400:"#1de9b6",a700:"#00bfa5"},h={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",a100:"#b9f6ca",a200:"#69f0ae",a400:"#00e676",a700:"#00c853"},f={50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",a100:"#ccff90",a200:"#b2ff59",a400:"#76ff03",a700:"#64dd17"},p={50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",a100:"#f4ff81",a200:"#eeff41",a400:"#c6ff00",a700:"#aeea00"},v={50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",a100:"#ffff8d",a200:"#ffff00",a400:"#ffea00",a700:"#ffd600"},g={50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",a100:"#ffe57f",a200:"#ffd740",a400:"#ffc400",a700:"#ffab00"},b={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",a100:"#ffd180",a200:"#ffab40",a400:"#ff9100",a700:"#ff6d00"},x={50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",a100:"#ff9e80",a200:"#ff6e40",a400:"#ff3d00",a700:"#dd2c00"},m={50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723"},_={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121"},w={50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238"},C={primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",dividers:"rgba(0, 0, 0, 0.12)"},y={primary:"rgba(255, 255, 255, 1)",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",dividers:"rgba(255, 255, 255, 0.12)"},k={active:"rgba(0, 0, 0, 0.54)",inactive:"rgba(0, 0, 0, 0.38)"},F={active:"rgba(255, 255, 255, 1)",inactive:"rgba(255, 255, 255, 0.5)"},A="#ffffff",S="#000000";t.default={red:r,pink:a,purple:i,deepPurple:o,indigo:s,blue:c,lightBlue:l,cyan:u,teal:d,green:h,lightGreen:f,lime:p,yellow:v,amber:g,orange:b,deepOrange:x,brown:m,grey:_,blueGrey:w,darkText:C,lightText:y,darkIcons:k,lightIcons:F,white:A,black:S}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-swatches",attrs:{"data-pick":e.pick}},[n("div",{staticClass:"vc-swatches-box"},e._l(e.palette,function(t,r){return n("div",{key:r,staticClass:"vc-swatches-color-group"},e._l(t,function(t){return n("div",{key:t,class:["vc-swatches-color-it",{"vc-swatches-color--white":"#FFFFFF"===t}],style:{background:t},attrs:{"data-color":t},on:{click:function(n){e.handlerClick(t)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.equal(t),expression:"equal(c)"}],staticClass:"vc-swatches-pick"},[n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}})])])])}))}))])},a=[];r._withStripped=!0;var i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";function r(e){c||n(53)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(16),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var s=n(66),c=!1,l=n(2),u=r,d=l(i.a,s.a,!1,u,null,null);d.options.__file="src/components/Photoshop.vue",t.default=d.exports},function(e,t,n){var r=n(54);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("bdf43978",r,!1)},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,'\n.vc-photoshop {\n  background: #DCDCDC;\n  border-radius: 4px;\n  box-shadow: 0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15);\n  box-sizing: initial;\n  width: 513px;\n  font-family: Roboto;\n}\n.vc-photoshop__disable-fields {\n  width: 390px;\n}\n.vc-ps-head {\n  background-image: linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%);\n  border-bottom: 1px solid #B1B1B1;\n  box-shadow: inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02);\n  height: 23px;\n  line-height: 24px;\n  border-radius: 4px 4px 0 0;\n  font-size: 13px;\n  color: #4D4D4D;\n  text-align: center;\n}\n.vc-ps-body {\n  padding: 15px;\n  display: flex;\n}\n.vc-ps-saturation-wrap {\n  width: 256px;\n  height: 256px;\n  position: relative;\n  border: 2px solid #B3B3B3;\n  border-bottom: 2px solid #F0F0F0;\n  overflow: hidden;\n}\n.vc-ps-saturation-wrap .vc-saturation-circle {\n  width: 12px;\n  height: 12px;\n}\n.vc-ps-hue-wrap {\n  position: relative;\n  height: 256px;\n  width: 19px;\n  margin-left: 10px;\n  border: 2px solid #B3B3B3;\n  border-bottom: 2px solid #F0F0F0;\n}\n.vc-ps-hue-pointer {\n  position: relative;\n}\n.vc-ps-hue-pointer--left,\n.vc-ps-hue-pointer--right {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 5px 0 5px 8px;\n  border-color: transparent transparent transparent #555;\n}\n.vc-ps-hue-pointer--left:after,\n.vc-ps-hue-pointer--right:after {\n  content: "";\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 4px 0 4px 6px;\n  border-color: transparent transparent transparent #fff;\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  transform: translate(-8px, -5px);\n}\n.vc-ps-hue-pointer--left {\n  transform: translate(-13px, -4px);\n}\n.vc-ps-hue-pointer--right {\n  transform: translate(20px, -4px) rotate(180deg);\n}\n.vc-ps-controls {\n  width: 180px;\n  margin-left: 10px;\n  display: flex;\n}\n.vc-ps-controls__disable-fields {\n  width: auto;\n}\n.vc-ps-actions {\n  margin-left: 20px;\n  flex: 1;\n}\n.vc-ps-ac-btn {\n  cursor: pointer;\n  background-image: linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%);\n  border: 1px solid #878787;\n  border-radius: 2px;\n  height: 20px;\n  box-shadow: 0 1px 0 0 #EAEAEA;\n  font-size: 14px;\n  color: #000;\n  line-height: 20px;\n  text-align: center;\n  margin-bottom: 10px;\n}\n.vc-ps-previews {\n  width: 60px;\n}\n.vc-ps-previews__swatches {\n  border: 1px solid #B3B3B3;\n  border-bottom: 1px solid #F0F0F0;\n  margin-bottom: 2px;\n  margin-top: 1px;\n}\n.vc-ps-previews__pr-color {\n  height: 34px;\n  box-shadow: inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000;\n}\n.vc-ps-previews__label {\n  font-size: 14px;\n  color: #000;\n  text-align: center;\n}\n.vc-ps-fields {\n  padding-top: 5px;\n  padding-bottom: 9px;\n  width: 80px;\n  position: relative;\n}\n.vc-ps-fields .vc-input__input {\n  margin-left: 40%;\n  width: 40%;\n  height: 18px;\n  border: 1px solid #888888;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC;\n  margin-bottom: 5px;\n  font-size: 13px;\n  padding-left: 3px;\n  margin-right: 10px;\n}\n.vc-ps-fields .vc-input__label, .vc-ps-fields .vc-input__desc {\n  top: 0;\n  text-transform: uppercase;\n  font-size: 13px;\n  height: 18px;\n  line-height: 22px;\n  position: absolute;\n}\n.vc-ps-fields .vc-input__label {\n  left: 0;\n  width: 34px;\n}\n.vc-ps-fields .vc-input__desc {\n  right: 0;\n  width: 0;\n}\n.vc-ps-fields__divider {\n  height: 5px;\n}\n.vc-ps-fields__hex .vc-input__input {\n  margin-left: 20%;\n  width: 80%;\n  height: 18px;\n  border: 1px solid #888888;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC;\n  margin-bottom: 6px;\n  font-size: 13px;\n  padding-left: 3px;\n}\n.vc-ps-fields__hex .vc-input__label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 14px;\n  text-transform: uppercase;\n  font-size: 13px;\n  height: 18px;\n  line-height: 22px;\n}\n',""])},function(e,t,n){var r=n(56);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("4b2ac592",r,!1)},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-saturation,\n.vc-saturation--white,\n.vc-saturation--black {\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.vc-saturation--white {\n  background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n}\n.vc-saturation--black {\n  background: linear-gradient(to top, #000, rgba(0,0,0,0));\n}\n.vc-saturation-pointer {\n  cursor: pointer;\n  position: absolute;\n}\n.vc-saturation-circle {\n  cursor: head;\n  width: 4px;\n  height: 4px;\n  box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4);\n  border-radius: 50%;\n  transform: translate(-2px, -2px);\n}\n",""])},function(e,t,n){(function(t){function n(e,t,n){function r(t){var n=v,r=g;return v=g=void 0,k=t,x=e.apply(r,n)}function i(e){return k=e,m=setTimeout(u,t),F?r(e):x}function o(e){var n=e-_,r=e-k,a=t-n;return A?C(a,b-r):a}function l(e){var n=e-_,r=e-k;return void 0===_||n>=t||n<0||A&&r>=b}function u(){var e=y();if(l(e))return d(e);m=setTimeout(u,o(e))}function d(e){return m=void 0,S&&v?r(e):(v=g=void 0,x)}function h(){void 0!==m&&clearTimeout(m),k=0,v=_=g=m=void 0}function f(){return void 0===m?x:d(y())}function p(){var e=y(),n=l(e);if(v=arguments,g=this,_=e,n){if(void 0===m)return i(_);if(A)return m=setTimeout(u,t),r(_)}return void 0===m&&(m=setTimeout(u,t)),x}var v,g,b,x,m,_,k=0,F=!1,A=!1,S=!0;if("function"!=typeof e)throw new TypeError(c);return t=s(t)||0,a(n)&&(F=!!n.leading,A="maxWait"in n,b=A?w(s(n.maxWait)||0,t):b,S="trailing"in n?!!n.trailing:S),p.cancel=h,p.flush=f,p}function r(e,t,r){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(c);return a(r)&&(i="leading"in r?!!r.leading:i,o="trailing"in r?!!r.trailing:o),n(e,t,{leading:i,maxWait:t,trailing:o})}function a(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==typeof e}function o(e){return"symbol"==typeof e||i(e)&&_.call(e)==u}function s(e){if("number"==typeof e)return e;if(o(e))return l;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=f.test(e);return n||p.test(e)?v(e.slice(2),n?2:8):h.test(e)?l:+e}var c="Expected a function",l=NaN,u="[object Symbol]",d=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,p=/^0o[0-7]+$/i,v=parseInt,g="object"==typeof t&&t&&t.Object===Object&&t,b="object"==typeof self&&self&&self.Object===Object&&self,x=g||b||Function("return this")(),m=Object.prototype,_=m.toString,w=Math.max,C=Math.min,y=function(){return x.Date.now()};e.exports=r}).call(t,n(58))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"container",staticClass:"vc-saturation",style:{background:e.bgColor},on:{mousedown:e.handleMouseDown,touchmove:e.handleChange,touchstart:e.handleChange}},[n("div",{staticClass:"vc-saturation--white"}),e._v(" "),n("div",{staticClass:"vc-saturation--black"}),e._v(" "),n("div",{staticClass:"vc-saturation-pointer",style:{top:e.pointerTop,left:e.pointerLeft}},[n("div",{staticClass:"vc-saturation-circle"})])])},a=[];r._withStripped=!0;var i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){var r=n(61);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("04f8680c",r,!1)},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-alpha {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.vc-alpha-checkboard-wrap {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  overflow: hidden;\n}\n.vc-alpha-gradient {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.vc-alpha-container {\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  height: 100%;\n  margin: 0 3px;\n}\n.vc-alpha-pointer {\n  z-index: 2;\n  position: absolute;\n}\n.vc-alpha-picker {\n  cursor: pointer;\n  width: 4px;\n  border-radius: 1px;\n  height: 8px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, .6);\n  background: #fff;\n  margin-top: 1px;\n  transform: translateX(-2px);\n}\n",""])},function(e,t,n){var r=n(63);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("004624a2",r,!1)},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-checkerboard {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  background-size: contain;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"vc-checkerboard",style:e.bgStyle})},a=[];r._withStripped=!0;var i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-alpha"},[n("div",{staticClass:"vc-alpha-checkboard-wrap"},[n("checkboard")],1),e._v(" "),n("div",{staticClass:"vc-alpha-gradient",style:{background:e.gradientColor}}),e._v(" "),n("div",{ref:"container",staticClass:"vc-alpha-container",on:{mousedown:e.handleMouseDown,touchmove:e.handleChange,touchstart:e.handleChange}},[n("div",{staticClass:"vc-alpha-pointer",style:{left:100*e.colors.a+"%"}},[n("div",{staticClass:"vc-alpha-picker"})])])])},a=[];r._withStripped=!0;var i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["vc-photoshop",e.disableFields?"vc-photoshop__disable-fields":""]},[n("div",{staticClass:"vc-ps-head"},[e._v(e._s(e.head))]),e._v(" "),n("div",{staticClass:"vc-ps-body"},[n("div",{staticClass:"vc-ps-saturation-wrap"},[n("saturation",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),n("div",{staticClass:"vc-ps-hue-wrap"},[n("hue",{attrs:{direction:"vertical"},on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}},[n("div",{staticClass:"vc-ps-hue-pointer"},[n("i",{staticClass:"vc-ps-hue-pointer--left"}),n("i",{staticClass:"vc-ps-hue-pointer--right"})])])],1),e._v(" "),n("div",{class:["vc-ps-controls",e.disableFields?"vc-ps-controls__disable-fields":""]},[n("div",{staticClass:"vc-ps-previews"},[n("div",{staticClass:"vc-ps-previews__label"},[e._v("new")]),e._v(" "),n("div",{staticClass:"vc-ps-previews__swatches"},[n("div",{staticClass:"vc-ps-previews__pr-color",style:{background:e.colors.hex}}),e._v(" "),n("div",{staticClass:"vc-ps-previews__pr-color",style:{background:e.currentColor},on:{click:e.clickCurrentColor}})]),e._v(" "),n("div",{staticClass:"vc-ps-previews__label"},[e._v("current")])]),e._v(" "),e.disableFields?e._e():n("div",{staticClass:"vc-ps-actions"},[n("div",{staticClass:"vc-ps-ac-btn",on:{click:e.handleAccept}},[e._v("OK")]),e._v(" "),n("div",{staticClass:"vc-ps-ac-btn",on:{click:e.handleCancel}},[e._v("Cancel")]),e._v(" "),n("div",{staticClass:"vc-ps-fields"},[n("ed-in",{attrs:{label:"h",desc:"°",value:e.hsv.h},on:{change:e.inputChange}}),e._v(" "),n("ed-in",{attrs:{label:"s",desc:"%",value:e.hsv.s,max:100},on:{change:e.inputChange}}),e._v(" "),n("ed-in",{attrs:{label:"v",desc:"%",value:e.hsv.v,max:100},on:{change:e.inputChange}}),e._v(" "),n("div",{staticClass:"vc-ps-fields__divider"}),e._v(" "),n("ed-in",{attrs:{label:"r",value:e.colors.rgba.r},on:{change:e.inputChange}}),e._v(" "),n("ed-in",{attrs:{label:"g",value:e.colors.rgba.g},on:{change:e.inputChange}}),e._v(" "),n("ed-in",{attrs:{label:"b",value:e.colors.rgba.b},on:{change:e.inputChange}}),e._v(" "),n("div",{staticClass:"vc-ps-fields__divider"}),e._v(" "),n("ed-in",{staticClass:"vc-ps-fields__hex",attrs:{label:"#",value:e.hex},on:{change:e.inputChange}})],1)])])])])},a=[];r._withStripped=!0;var i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";function r(e){c||n(68)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(20),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var s=n(70),c=!1,l=n(2),u=r,d=l(i.a,s.a,!1,u,null,null);d.options.__file="src/components/Sketch.vue",t.default=d.exports},function(e,t,n){var r=n(69);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("e7574c18",r,!1)},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-sketch {\n  position: relative;\n  width: 200px;\n  padding: 10px 10px 0;\n  box-sizing: initial;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15);\n}\n.vc-sketch-saturation-wrap {\n  width: 100%;\n  padding-bottom: 75%;\n  position: relative;\n  overflow: hidden;\n}\n.vc-sketch-controls {\n  display: flex;\n}\n.vc-sketch-sliders {\n  padding: 4px 0;\n  flex: 1;\n}\n.vc-sketch-sliders .vc-hue,\n.vc-sketch-sliders .vc-alpha-gradient {\n  border-radius: 2px;\n}\n.vc-sketch-hue-wrap {\n  position: relative;\n  height: 10px;\n}\n.vc-sketch-alpha-wrap {\n  position: relative;\n  height: 10px;\n  margin-top: 4px;\n  overflow: hidden;\n}\n.vc-sketch-color-wrap {\n  width: 24px;\n  height: 24px;\n  position: relative;\n  margin-top: 4px;\n  margin-left: 4px;\n  border-radius: 3px;\n}\n.vc-sketch-active-color {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 2px;\n  box-shadow: inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25);\n  z-index: 2;\n}\n.vc-sketch-color-wrap .vc-checkerboard {\n  background-size: auto;\n}\n.vc-sketch-field {\n  display: flex;\n  padding-top: 4px;\n}\n.vc-sketch-field .vc-input__input {\n  width: 80%;\n  padding: 4px 10% 3px;\n  border: none;\n  box-shadow: inset 0 0 0 1px #ccc;\n  font-size: 11px;\n}\n.vc-sketch-field .vc-input__label {\n  display: block;\n  text-align: center;\n  font-size: 11px;\n  color: #222;\n  padding-top: 3px;\n  padding-bottom: 4px;\n  text-transform: capitalize;\n}\n.vc-sketch-field--single {\n  flex: 1;\n  padding-left: 6px;\n}\n.vc-sketch-field--double {\n  flex: 2;\n}\n.vc-sketch-presets {\n  margin-right: -10px;\n  margin-left: -10px;\n  padding-left: 10px;\n  padding-top: 10px;\n  border-top: 1px solid #eee;\n}\n.vc-sketch-presets-color {\n  border-radius: 3px;\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n  margin: 0 10px 10px 0;\n  vertical-align: top;\n  cursor: pointer;\n  width: 16px;\n  height: 16px;\n  box-shadow: inset 0 0 0 1px rgba(0,0,0,.15);\n}\n.vc-sketch__disable-alpha .vc-sketch-color-wrap {\n  height: 10px;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["vc-sketch",e.disableAlpha?"vc-sketch__disable-alpha":""]},[n("div",{staticClass:"vc-sketch-saturation-wrap"},[n("saturation",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),n("div",{staticClass:"vc-sketch-controls"},[n("div",{staticClass:"vc-sketch-sliders"},[n("div",{staticClass:"vc-sketch-hue-wrap"},[n("hue",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),e.disableAlpha?e._e():n("div",{staticClass:"vc-sketch-alpha-wrap"},[n("alpha",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1)]),e._v(" "),n("div",{staticClass:"vc-sketch-color-wrap"},[n("div",{staticClass:"vc-sketch-active-color",style:{background:e.activeColor}}),e._v(" "),n("checkboard")],1)]),e._v(" "),e.disableFields?e._e():n("div",{staticClass:"vc-sketch-field"},[n("div",{staticClass:"vc-sketch-field--double"},[n("ed-in",{attrs:{label:"hex",value:e.hex},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-sketch-field--single"},[n("ed-in",{attrs:{label:"r",value:e.colors.rgba.r},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-sketch-field--single"},[n("ed-in",{attrs:{label:"g",value:e.colors.rgba.g},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-sketch-field--single"},[n("ed-in",{attrs:{label:"b",value:e.colors.rgba.b},on:{change:e.inputChange}})],1),e._v(" "),e.disableAlpha?e._e():n("div",{staticClass:"vc-sketch-field--single"},[n("ed-in",{attrs:{label:"a",value:e.colors.a,"arrow-offset":.01,max:1},on:{change:e.inputChange}})],1)]),e._v(" "),n("div",{staticClass:"vc-sketch-presets"},e._l(e.presetColors,function(t){return n("div",{key:t,staticClass:"vc-sketch-presets-color",style:{background:t},on:{click:function(n){e.handlePreset(t)}}})}))])},a=[];r._withStripped=!0;var i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";function r(e){c||n(72)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(21),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var s=n(74),c=!1,l=n(2),u=r,d=l(i.a,s.a,!1,u,null,null);d.options.__file="src/components/Chrome.vue",t.default=d.exports},function(e,t,n){var r=n(73);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("2a2435f8",r,!1)},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-chrome {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3);\n  box-sizing: initial;\n  width: 225px;\n  font-family: Menlo;\n  background-color: #fff;\n}\n.vc-chrome-controls {\n  display: flex;\n}\n.vc-chrome-color-wrap {\n  position: relative;\n  width: 36px;\n}\n.vc-chrome-active-color {\n  position: relative;\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  overflow: hidden;\n  z-index: 1;\n}\n.vc-chrome-color-wrap .vc-checkerboard {\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  background-size: auto;\n}\n.vc-chrome-sliders {\n  flex: 1;\n}\n.vc-chrome-fields-wrap {\n  display: flex;\n  padding-top: 16px;\n}\n.vc-chrome-fields {\n  display: flex;\n  margin-left: -6px;\n  flex: 1;\n}\n.vc-chrome-field {\n  padding-left: 6px;\n  width: 100%;\n}\n.vc-chrome-toggle-btn {\n  width: 32px;\n  text-align: right;\n  position: relative;\n}\n.vc-chrome-toggle-icon {\n  margin-right: -4px;\n  margin-top: 12px;\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n}\n.vc-chrome-toggle-icon-highlight {\n  position: absolute;\n  width: 24px;\n  height: 28px;\n  background: #eee;\n  border-radius: 4px;\n  top: 10px;\n  left: 12px;\n}\n.vc-chrome-hue-wrap {\n  position: relative;\n  height: 10px;\n  margin-bottom: 8px;\n}\n.vc-chrome-alpha-wrap {\n  position: relative;\n  height: 10px;\n}\n.vc-chrome-hue-wrap .vc-hue {\n  border-radius: 2px;\n}\n.vc-chrome-alpha-wrap .vc-alpha-gradient {\n  border-radius: 2px;\n}\n.vc-chrome-hue-wrap .vc-hue-picker, .vc-chrome-alpha-wrap .vc-alpha-picker {\n  width: 12px;\n  height: 12px;\n  border-radius: 6px;\n  transform: translate(-6px, -2px);\n  background-color: rgb(248, 248, 248);\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n}\n.vc-chrome-body {\n  padding: 16px 16px 12px;\n  background-color: #fff;\n}\n.vc-chrome-saturation-wrap {\n  width: 100%;\n  padding-bottom: 55%;\n  position: relative;\n  border-radius: 2px 2px 0 0;\n  overflow: hidden;\n}\n.vc-chrome-saturation-wrap .vc-saturation-circle {\n  width: 12px;\n  height: 12px;\n}\n.vc-chrome-fields .vc-input__input {\n  font-size: 11px;\n  color: #333;\n  width: 100%;\n  border-radius: 2px;\n  border: none;\n  box-shadow: inset 0 0 0 1px #dadada;\n  height: 21px;\n  text-align: center;\n}\n.vc-chrome-fields .vc-input__label {\n  text-transform: uppercase;\n  font-size: 11px;\n  line-height: 11px;\n  color: #969696;\n  text-align: center;\n  display: block;\n  margin-top: 12px;\n}\n.vc-chrome__disable-alpha .vc-chrome-active-color {\n  width: 18px;\n  height: 18px;\n}\n.vc-chrome__disable-alpha .vc-chrome-color-wrap {\n  width: 30px;\n}\n.vc-chrome__disable-alpha .vc-chrome-hue-wrap {\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["vc-chrome",e.disableAlpha?"vc-chrome__disable-alpha":""]},[n("div",{staticClass:"vc-chrome-saturation-wrap"},[n("saturation",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),n("div",{staticClass:"vc-chrome-body"},[n("div",{staticClass:"vc-chrome-controls"},[n("div",{staticClass:"vc-chrome-color-wrap"},[n("div",{staticClass:"vc-chrome-active-color",style:{background:e.activeColor}}),e._v(" "),e.disableAlpha?e._e():n("checkboard")],1),e._v(" "),n("div",{staticClass:"vc-chrome-sliders"},[n("div",{staticClass:"vc-chrome-hue-wrap"},[n("hue",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),e.disableAlpha?e._e():n("div",{staticClass:"vc-chrome-alpha-wrap"},[n("alpha",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1)])]),e._v(" "),e.disableFields?e._e():n("div",{staticClass:"vc-chrome-fields-wrap"},[n("div",{directives:[{name:"show",rawName:"v-show",value:0===e.fieldsIndex,expression:"fieldsIndex === 0"}],staticClass:"vc-chrome-fields"},[n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"hex",value:e.colors.hex},on:{change:e.inputChange}})],1)]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:1===e.fieldsIndex,expression:"fieldsIndex === 1"}],staticClass:"vc-chrome-fields"},[n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"r",value:e.colors.rgba.r},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"g",value:e.colors.rgba.g},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"b",value:e.colors.rgba.b},on:{change:e.inputChange}})],1),e._v(" "),e.disableAlpha?e._e():n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"a",value:e.colors.a,"arrow-offset":.01,max:1},on:{change:e.inputChange}})],1)]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:2===e.fieldsIndex,expression:"fieldsIndex === 2"}],staticClass:"vc-chrome-fields"},[n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"h",value:e.hsl.h},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"s",value:e.hsl.s},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"l",value:e.hsl.l},on:{change:e.inputChange}})],1),e._v(" "),e.disableAlpha?e._e():n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"a",value:e.colors.a,"arrow-offset":.01,max:1},on:{change:e.inputChange}})],1)]),e._v(" "),n("div",{staticClass:"vc-chrome-toggle-btn",on:{click:e.toggleViews}},[n("div",{staticClass:"vc-chrome-toggle-icon"},[n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"},on:{mouseover:e.showHighlight,mouseenter:e.showHighlight,mouseout:e.hideHighlight}},[n("path",{attrs:{fill:"#333",d:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"}})])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.highlight,expression:"highlight"}],staticClass:"vc-chrome-toggle-icon-highlight"})])])])])},a=[];r._withStripped=!0;var i={render:r,staticRenderFns:a};t.a=i}])});

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=flintotheme-customize.bundle.js.map