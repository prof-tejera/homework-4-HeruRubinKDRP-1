"use strict";(self.webpackChunkhomework_4=self.webpackChunkhomework_4||[]).push([[109],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/Intro.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),E_Code_homework_4_HeruRubinKDRP_1_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_components_Calculator_Calculator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Calculator/Calculator.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p"},(0,E_Code_homework_4_HeruRubinKDRP_1_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{title:"Intro"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"sb-section-title",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"calculator",children:"Calculator"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Browse Project"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Calculator_Calculator__WEBPACK_IMPORTED_MODULE_2__.Z,{})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style",{children:"\n  .sb-container {\n    margin-bottom: 48px;\n  }\n\n  .sb-section {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n  }\n\n  img {\n    object-fit: cover;\n  }\n\n  .sb-section-title {\n    margin-bottom: 32px;\n  }\n\n  .sb-section a:not(h1 a, h2 a, h3 a) {\n    font-size: 14px;\n  }\n\n  .sb-section-item, .sb-grid-item {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .sb-section-item-heading {\n    padding-top: 20px !important;\n    padding-bottom: 5px !important;\n    margin: 0 !important;\n  }\n  .sb-section-item-paragraph {\n    margin: 0;\n    padding-bottom: 10px;\n  }\n\n  .sb-chevron {\n    margin-left: 5px;\n  }\n\n  .sb-features-grid {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 32px 20px;\n  }\n\n  .sb-socials {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  .sb-socials p {\n    margin-bottom: 10px;\n  }\n\n  .sb-explore-image {\n    max-height: 32px;\n    align-self: flex-start;\n  }\n\n  .sb-addon {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    position: relative;\n    background-color: #EEF3F8;\n    border-radius: 5px;\n    border: 1px solid rgba(0, 0, 0, 0.05);\n    background: #EEF3F8;\n    height: 180px;\n    margin-bottom: 48px;\n    overflow: hidden;\n  }\n\n  .sb-addon-text {\n    padding-left: 48px;\n    max-width: 240px;\n  }\n\n  .sb-addon-text h4 {\n    padding-top: 0px;\n  }\n\n  .sb-addon-img {\n    position: absolute;\n    left: 345px;\n    top: 0;\n    height: 100%;\n    width: 200%;\n    overflow: hidden;\n  }\n\n  .sb-addon-img img {\n    width: 650px;\n    transform: rotate(-15deg);\n    margin-left: 40px;\n    margin-top: -72px;\n    box-shadow: 0 0 1px rgba(255, 255, 255, 0);\n    backface-visibility: hidden;\n  }\n\n  @media screen and (max-width: 800px) {\n    .sb-addon-img {\n      left: 300px;\n    }\n  }\n\n  @media screen and (max-width: 600px) {\n    .sb-section {\n      flex-direction: column;\n    }\n\n    .sb-features-grid {\n      grid-template-columns: repeat(1, 1fr);\n    }\n\n    .sb-socials {\n      grid-template-columns: repeat(2, 1fr);\n    }\n\n    .sb-addon {\n      height: 280px;\n      align-items: flex-start;\n      padding-top: 32px;\n      overflow: hidden;\n    }\n\n    .sb-addon-text {\n      padding-left: 24px;\n    }\n\n    .sb-addon-img {\n      right: 0;\n      left: 0;\n      top: 130px;\n      bottom: 0;\n      overflow: hidden;\n      height: auto;\n      width: 124%;\n    }\n\n    .sb-addon-img img {\n      width: 1200px;\n      transform: rotate(-12deg);\n      margin-left: 0;\n      margin-top: 48px;\n      margin-bottom: -40px;\n      margin-left: -24px;\n    }\n  }\n  "})]})}__webpack_exports__.default=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,E_Code_homework_4_HeruRubinKDRP_1_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/Calculator/Calculator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}__webpack_require__.d(__webpack_exports__,{Z:function(){return Calculator_Calculator}});var _templateObject,react=__webpack_require__("./node_modules/react/index.js"),Number_Number=__webpack_require__("./src/components/Number/Number.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),OperationStyled=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  font-size: var(--step-3);\n  padding: 10%;\n  text-align: center;\n  border: 1px solid black;\n"])));try{OperationStyled.displayName="OperationStyled",OperationStyled.__docgenInfo={description:"",displayName:"OperationStyled",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Operation/operation.styled.tsx#OperationStyled"]={docgenInfo:OperationStyled.__docgenInfo,name:"OperationStyled",path:"src/components/Operation/operation.styled.tsx#OperationStyled"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Operation=function Operation(props){return(0,jsx_runtime.jsx)(OperationStyled,{onClick:props.onClick,children:props.value})},Operation_Operation=Operation;try{Operation.displayName="Operation",Operation.__docgenInfo={description:"",displayName:"Operation",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Operation/Operation.tsx#Operation"]={docgenInfo:Operation.__docgenInfo,name:"Operation",path:"src/components/Operation/Operation.tsx#Operation"})}catch(__react_docgen_typescript_loader_error){}var calculator_styled_templateObject,Screen=__webpack_require__("./src/components/Screen/Screen.tsx"),CalculatorStyled=styled_components_browser_esm.ZP.div(calculator_styled_templateObject||(calculator_styled_templateObject=(0,taggedTemplateLiteral.Z)(["\n  --step--6: clamp(0.30rem, calc(0.16rem + 0.8vw), 0.75rem);\n  --step--5: clamp(0.40rem, calc(0.20rem + 1.01vw), 0.98rem);\n  --step--4: clamp(0.48rem, calc(0.22rem + 1.30vw), 1.23rem);\n  --step--3: clamp(0.58rem, calc(0.25rem + 1.67vw), 1.54rem);\n  --step--2: clamp(0.69rem, calc(0.27rem + 2.13vw), 1.92rem);\n  --step--1: clamp(0.83rem, calc(0.29rem + 2.73vw), 2.40rem);\n  --step-0: clamp(1.00rem, calc(0.30rem + 3.48vw), 3.00rem);\n  --step-1: clamp(1.20rem, calc(0.31rem + 4.43vw), 3.75rem);\n  --step-2: clamp(1.44rem, calc(0.31rem + 5.65vw), 4.69rem);\n  --step-3: clamp(1.73rem, calc(0.29rem + 7.18vw), 5.86rem);\n  --step-4: clamp(2.07rem, calc(0.25rem + 9.13vw), 7.32rem);\n  --step-5: clamp(2.49rem, calc(0.17rem + 11.59vw), 9.15rem);\n  padding: var(--step-0);\n  * {\n    font-family: 'Kanit', sans-serif;\n    user-select: none;\n    box-sizing: border-box;\n  }\n  \n\n  .operations {\n    width: 25%;\n  }\n\n  .number-pad {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(4, 1fr);\n    width: 75%;\n    height: 100%;\n    gap: 1px;\n    border: 1px solid #ccc;\n    background-color: #ccc;\n\n    \n\n    .zero {\n      grid-row-start: 4;\n      grid-row-end: 4;\n      grid-column-start: 1;\n      grid-column-end: 3;\n    }\n\n    .one {\n      grid-row-start: 3;\n      grid-row-end: 3;\n      grid-column-start: 1;\n      grid-column-end: 1;\n    }\n\n    .two {\n      grid-row-start: 3;\n      grid-row-end: 3;\n      grid-column-start: 2;\n      grid-column-end: 2;\n    }\n\n    .three {\n      grid-row-start: 3;\n      grid-row-end: 3;\n      grid-column-start: 3;\n      grid-column-end: 3;\n    }\n\n    .four {\n      grid-row-start: 2;\n      grid-row-end: 2;\n      grid-column-start: 1;\n      grid-column-end: 1;\n    }\n\n    .five {\n      grid-row-start: 2;\n      grid-row-end: 2;\n      grid-column-start: 2;\n      grid-column-end: 2;\n    }\n\n    .six {\n      grid-row-start: 2;\n      grid-row-end: 2;\n      grid-column-start: 3;\n      grid-column-end: 3;\n    }\n\n    .seven {\n      grid-row-start: 1;\n      grid-row-end: 1;\n      grid-column-start: 1;\n      grid-column-end: 1;\n    }\n\n    .eight {\n      grid-row-start: 1;\n      grid-row-end: 1;\n      grid-column-start: 2;\n      grid-column-end: 2;\n    }\n\n    .nine {\n      grid-row-start: 1;\n      grid-row-end: 1;\n      grid-column-start: 3;\n      grid-column-end: 3;\n    }\n  }\n\n"])));try{CalculatorStyled.displayName="CalculatorStyled",CalculatorStyled.__docgenInfo={description:"",displayName:"CalculatorStyled",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Calculator/calculator.styled.tsx#CalculatorStyled"]={docgenInfo:CalculatorStyled.__docgenInfo,name:"CalculatorStyled",path:"src/components/Calculator/calculator.styled.tsx#CalculatorStyled"})}catch(__react_docgen_typescript_loader_error){}var Calculator_Calculator=function Calculator(){var _useState2=_slicedToArray((0,react.useState)(""),2),input=_useState2[0],setInput=_useState2[1],_useState4=_slicedToArray((0,react.useState)("0"),2),displayResult=_useState4[0],setDisplayResult=_useState4[1],handleNumberClick=function handleNumberClick(value){setInput((function(prevInput){return prevInput+value.toString()}))},handleOperationClick=function handleOperationClick(operator){"clear"===operator?setInput(""):"="===operator?function calculate(){for(var parts=input.split(/([+\-*\/])/),total=parseFloat(parts[0]),i=1;i<parts.length;i+=2){var operator=parts[i],operand=parseFloat(parts[i+1]);switch(operator){case"+":total+=operand;break;case"-":total-=operand;break;case"*":total*=operand;break;case"/":if(0===operand)return setDisplayResult(null),void setInput("Error: Division by zero");total/=operand}}var formattedTotal=total.toLocaleString();setDisplayResult(total.toLocaleString()),setInput(formattedTotal)}():setInput((function(prevInput){return prevInput+operator}))};return(0,jsx_runtime.jsxs)(CalculatorStyled,{children:[(0,jsx_runtime.jsx)(Screen.Z,{value:input,result:displayResult}),(0,jsx_runtime.jsxs)("div",{style:{display:"flex"},children:[(0,jsx_runtime.jsxs)("div",{className:"number-pad",children:[(0,jsx_runtime.jsx)(Number_Number.Z,{classes:"zero",value:0,onClick:handleNumberClick}),(0,jsx_runtime.jsx)(Number_Number.Z,{classes:"one",value:1,onClick:handleNumberClick}),(0,jsx_runtime.jsx)(Number_Number.Z,{classes:"two",value:2,onClick:handleNumberClick}),(0,jsx_runtime.jsx)(Number_Number.Z,{classes:"three",value:3,onClick:handleNumberClick}),(0,jsx_runtime.jsx)(Number_Number.Z,{classes:"four",value:4,onClick:handleNumberClick}),(0,jsx_runtime.jsx)(Number_Number.Z,{classes:"five",value:5,onClick:handleNumberClick}),(0,jsx_runtime.jsx)(Number_Number.Z,{classes:"six",value:6,onClick:handleNumberClick}),(0,jsx_runtime.jsx)(Number_Number.Z,{classes:"seven",value:7,onClick:handleNumberClick}),(0,jsx_runtime.jsx)(Number_Number.Z,{classes:"eight",value:8,onClick:handleNumberClick}),(0,jsx_runtime.jsx)(Number_Number.Z,{classes:"nine",value:9,onClick:handleNumberClick})]}),(0,jsx_runtime.jsxs)("div",{className:"operations",style:{paddingLeft:10},children:[(0,jsx_runtime.jsx)(Operation_Operation,{value:"+",onClick:function onClick(){return handleOperationClick("+")}}),(0,jsx_runtime.jsx)(Operation_Operation,{value:"÷",onClick:function onClick(){return handleOperationClick("/")}}),(0,jsx_runtime.jsx)(Operation_Operation,{value:"×",onClick:function onClick(){return handleOperationClick("*")}}),(0,jsx_runtime.jsx)(Operation_Operation,{value:"-",onClick:function onClick(){return handleOperationClick("-")}}),(0,jsx_runtime.jsx)(Operation_Operation,{value:"=",onClick:function onClick(){return handleOperationClick("=")}}),(0,jsx_runtime.jsx)(Operation_Operation,{value:"clear",onClick:function onClick(){return handleOperationClick("clear")}})]})]})]})}},"./src/components/Number/Number.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return components_Number_Number}});__webpack_require__("./node_modules/react/index.js");var _templateObject,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),NumberStyled=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  padding: 10%;  \n  background-color: #e0e0e0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  font-weight: 500;\n  font-size: var(--step-1);\n  user-select: none;\n"])));try{NumberStyled.displayName="NumberStyled",NumberStyled.__docgenInfo={description:"",displayName:"NumberStyled",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Number/number.styled.tsx#NumberStyled"]={docgenInfo:NumberStyled.__docgenInfo,name:"NumberStyled",path:"src/components/Number/number.styled.tsx#NumberStyled"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Number_Number=function Number(props){return(0,jsx_runtime.jsx)(NumberStyled,{className:"number ".concat(props.classes),onClick:function handleClick(){props.onClick&&props.onClick(props.value)},style:{},children:props.value})},components_Number_Number=Number_Number;try{Number_Number.displayName="Number",Number_Number.__docgenInfo={description:"",displayName:"Number",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(value: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Number/Number.tsx#Number"]={docgenInfo:Number_Number.__docgenInfo,name:"Number",path:"src/components/Number/Number.tsx#Number"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Screen/Screen.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Screen_Screen}});__webpack_require__("./node_modules/react/index.js");var _templateObject,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),ScreenStyled=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.section(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  text-align: right;\n  height: auto;\n  .result{\n  font-size: var(--step-4);\n}\n\n"])));try{ScreenStyled.displayName="ScreenStyled",ScreenStyled.__docgenInfo={description:"",displayName:"ScreenStyled",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Screen/screen.styled.tsx#ScreenStyled"]={docgenInfo:ScreenStyled.__docgenInfo,name:"ScreenStyled",path:"src/components/Screen/screen.styled.tsx#ScreenStyled"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Screen=function Screen(props){return(0,jsx_runtime.jsxs)(ScreenStyled,{children:[props.value,(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("div",{className:"result",children:props.result})]})},Screen_Screen=Screen;try{Screen.displayName="Screen",Screen.__docgenInfo={description:"",displayName:"Screen",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},result:{defaultValue:null,description:"",name:"result",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Screen/Screen.tsx#Screen"]={docgenInfo:Screen.__docgenInfo,name:"Screen",path:"src/components/Screen/Screen.tsx#Screen"})}catch(__react_docgen_typescript_loader_error){}}}]);