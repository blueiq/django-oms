webpackJsonp([17,83],{La9a:function(t,e,a){var s=a("VE98");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("5b4b1f36",s,!0)},VE98:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"",""])},aFkl:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={components:{},props:["Status","statusdata"],data:function(){return{}},created:function(){},methods:{submitForm:function(t){this.$emit("formdata",this.statusdata)}}},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",[a("el-form-item",{attrs:{model:t.statusdata,label:"当前状态"}},[a("span",[t._v(t._s(t.Status[t.statusdata.status]))])]),t._v(" "),a("el-form-item",{attrs:{model:t.statusdata,label:"状态修改"}},[a("el-select",{attrs:{placeholder:"请选择状态"},model:{value:t.statusdata.status,callback:function(e){t.$set(t.statusdata,"status",e)},expression:"statusdata.status"}},t._l(t.Status,function(t,e){return a("el-option",{key:t.id,attrs:{label:t,value:e}})}))],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-check"},on:{click:t.submitForm}},[t._v("提交")])],1)],1)},r=[],n={render:o,staticRenderFns:r},l=n,i=a("VU/8"),c=i(s,l,!1,null,null,null);e.default=c.exports},uR2v:function(t,e,a){"use strict";function s(t){a("La9a")}Object.defineProperty(e,"__esModule",{value:!0});var o=a("EMlb"),r=a("QmSG"),n=a("TDrc"),l=a("3oPl"),i=a("28C8"),c=a("aFkl"),u={components:{addGroup:n.default,editGroup:l.default,getProject:o.k,showProject:i.default,chStatus:c.default},data:function(){return{tableData:[],tabletotal:0,searchdata:"",currentPage:1,limit:r.LIMIT,offset:"",pagesize:r.pagesize,pageformat:r.pageformat,addForm:!1,editForm:!1,rowdata:{},Bug_Nice:{0:"低",1:"中",2:"高"},Bug_Status:{0:"新建",1:"打开",2:"关闭",3:"已修复",4:"暂不处理",5:"重新打开"},showprojectForm:!1,changestatusForm:!1,project:"",bugdata:{id:"",status:""}}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this,e={limit:this.limit,offset:this.offset,name__contains:this.searchdata};Object(o.h)(e).then(function(e){t.tableData=e.data.results,t.tabletotal=e.data.count})},getDialogStatus:function(t){this.addForm=t,this.editForm=t,setTimeout(this.fetchData,1e3)},deleteGroup:function(t){var e=this;Object(o.a)(t).then(function(t){e.$message({message:"恭喜你，删除成功",type:"success"}),e.fetchData()}).catch(function(t){e.$message.error("删除失败"),console.log(t)})},closeEditForm:function(){this.fetchData()},handleEdit:function(t){this.editForm=!0,this.rowdata=t},searchClick:function(){this.fetchData()},handleSizeChange:function(t){this.limit=t,this.fetchData()},handleCurrentChange:function(t){this.offset=(t-1)*r.LIMIT,this.fetchData()},showProject:function(t){var e=this;this.showprojectForm=!0;var a={pid:t};Object(o.k)(a).then(function(t){e.project=t.data[0]})},changeStatus:function(t){this.bugdata.id=t.id,this.bugdata.status=t.status,this.changestatusForm=!0},UpdateStatus:function(t){var e=this;Object(o.p)(this.bugdata.id,t).then(function(){e.changestatusForm=!1,e.fetchData()})}}},d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-card",[a("div",{staticClass:"head-lavel"},[a("div",{staticClass:"table-button"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(e){t.addForm=!0}}},[t._v("新建")])],1),t._v(" "),a("div",{staticClass:"table-search"},[a("el-input",{attrs:{placeholder:"搜索 ..."},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.searchClick(e)}},model:{value:t.searchdata,callback:function(e){t.searchdata=e},expression:"searchdata"}},[a("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},on:{click:t.searchClick},slot:"suffix"})])],1)]),t._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"测试人员",prop:"test_user"}},[a("span",[t._v(t._s(e.row.test_user))])]),t._v(" "),a("el-form-item",{attrs:{label:"分配给",prop:"action_user"}},[a("span",[t._v(t._s(e.row.action_user))])]),t._v(" "),a("el-form-item",{attrs:{label:"测试时间",prop:"test_time"}},[a("span",[t._v(t._s(e.row.test_time))])]),t._v(" "),a("el-form-item",{attrs:{label:"关闭时间",prop:"end_time"}},[a("span",[t._v(t._s(e.row.end_time))])]),t._v(" "),a("el-form-item",{attrs:{label:"描述",prop:"desc"}},[a("span",[t._v(t._s(e.row.desc))])])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"id",label:"编号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"degree",label:"严重程度"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[a("el-rate",{attrs:{colors:["#99A9BF","#F7BA2A","#ff1425"],disabled:""},model:{value:e.row.degree,callback:function(a){t.$set(e.row,"degree",a)},expression:"scope.row.degree"}})],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"nice",label:"优先级"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{size:"mini"}},[t._v(t._s(t.Bug_Nice[e.row.nice]))])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.changeStatus(e.row)}}},[t._v(t._s(t.Bug_Status[e.row.status]))])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"project",label:"关联任务"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[a("el-button",{attrs:{type:"text"},on:{click:function(a){t.showProject(e.row.project)}}},[t._v(t._s(e.row.project))])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"test",label:"关联test"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(a){t.handleEdit(e.row)}}},[t._v("修改")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){t.deleteGroup(e.row.id)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"table-pagination"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":t.pagesize,"page-size":t.limit,layout:t.pageformat,total:t.tabletotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1)]),t._v(" "),a("el-dialog",{attrs:{visible:t.addForm},on:{"update:visible":function(e){t.addForm=e}}},[a("add-group",{on:{DialogStatus:t.getDialogStatus}})],1),t._v(" "),a("el-dialog",{attrs:{visible:t.editForm},on:{"update:visible":function(e){t.editForm=e},close:t.closeEditForm}},[a("edit-group",{attrs:{ruleForm:t.rowdata},on:{DialogStatus:t.getDialogStatus}})],1),t._v(" "),a("el-dialog",{attrs:{visible:t.showprojectForm},on:{"update:visible":function(e){t.showprojectForm=e}}},[a("show-project",{attrs:{ruleForm:t.project}})],1),t._v(" "),a("el-dialog",{attrs:{visible:t.changestatusForm},on:{"update:visible":function(e){t.changestatusForm=e}}},[a("ch-status",{attrs:{Status:t.Bug_Status,statusdata:t.bugdata},on:{formdata:t.UpdateStatus}})],1)],1)},f=[],p={render:d,staticRenderFns:f},m=p,h=a("VU/8"),_=s,b=h(u,m,!1,_,null,null);e.default=b.exports}});