import Mock from 'mockjs' // 引入mockjs

export default (()=> {
  const menuDataTree = [
    {
      "path": "/dashboard",
      "component": "Layout",
      // "redirect": "/dashboard",
      "children": [
        {
          "path": "",
          "component": "dashboard/index",
          "meta": {
            "title": "首页",
            "icon": "dashboard"
          }
        }
      ]
    },
    {
      "path": "/components",
      "component": "Layout",
      "redirect": "/components/tinymce",
      "name": "Components",
      "meta":{
        "title":"组件",
        "icon":"components"
      },
      "children": [
        {
          "path": "tinymce",
          "name": "Tinymce",
          "component": "components/tinymce/index",
          "meta": {
            "title": "富文本编辑器",
            "icon": "tinymce"
          }
        },
        {
          "path": "markdown",
          "name": "Markdown",
          "component": "components/markdown/index",
          "meta": {
            "title": "markdown编辑器",
            "icon": "markdown"
          }
        }
        ,{
          "path": "upload",
          "name": "Upload",
          "component": "components/upload/index",
          "meta": {
            "title": "文件上传",
            "icon": "upload"
          }
        }
      ]
    },
    {
      "path": "/chart",
      "component": "Layout",
      "redirect": "/chart/lineChart",
      "name": "Chart",
      "meta":{
        "title":"图表",
        "icon":"chart"
      },
      "children": [
        {
          "path": "linechart",
          "name": "Linechart",
          "component": "chart/linechart/index",
          "meta": {
            "title": "折线图",
            "icon": "linechart"
          }
        },
        {
          "path": "piechart",
          "name": "Piechart",
          "component": "chart/piechart/index",
          "meta": {
            "title": "饼图",
            "icon": "piechart"
          }
        }
      ]
    },
    {
      "path": "/router",
      "component": "Layout",
      "redirect": "/router/menu1",
      "name": "Router",
      "children": [
        {
          "path": "/",
          "name": "menu1",
          "component": "router/menu1/index",
          "meta": {
            "title": "路由",
            "icon": "linechart"
          }
        }
      ]
    },
    {
      "path": "/table",
      "component": "Layout",
      "redirect": "/table/dynamic",
      "name": "Tables",
      "meta":{
        "title":"表格",
        "icon":"chart"
      },
      "children": [
        {
          "path": "dynamic",
          "name": "Dynamic",
          "component": "table/dynamic/index",
          "meta": {
            "title": "动态表格",
            "icon": "dynamic"
          }
        },
        {
          "path": "drag",
          "name": "Drag",
          "component": "table/drag/index",
          "meta": {
            "title": "拖拽表格",
            "icon": "drag"
          }
        }
      ]
    },
    {
      "path": "/excel",
      "component": "Layout",
      "redirect": "/excel/exportExcel",
      "name": "Excel",
      "meta":{
        "title":"Excel",
        "icon":"excel"
      },
      "children": [
        {
          "path": "exportExcel",
          "name": "ExportExcel",
          "component": "excel/exportExcel/index",
          "meta": {
            "title": "导出Excel",
            "icon": "exportExcel"
          }
        },
        {
          "path": "uploadExcel",
          "name": "UploadExcel",
          "component": "excel/uploadExcel/index",
          "meta": {
            "title": "上传Excel",
            "icon": "uploadExcel"
          }
        }
      ]
    },
    {
      "path": "/zip",
      "component": "Layout",
      "name": "Zip",
      "children": [
        {
          "path": "/",
          "name": "Zip",
          "component": "zip/index",
          "meta": {
            "title": "Zip",
            "icon": "zip"
          }
        }
      ]
    },
    {
      "path": "/PDF",
      "component": "Layout",
      "name": "PDF",
      "children": [
        {
          "path": "/",
          "name": "PDF",
          "component": "zip/index",
          "meta": {
            "title": "PDF",
            "icon": "pdf"
          }
        }
      ]
    },
    {
      "path": "/example",
      "component": "Layout",
      "redirect": "/example/table",
      "name": "Example",
      "meta": {
        "title": "案例",
        "icon": "example"
      },
      "children": [
        {
          "path": "table",
          "name": "Table",
          "component": "example/table/index",
          "meta": {
            "title": "表格",
            "icon": "table"
          }
        },
        {
          "path": "tree",
          "name": "Tree",
          "component": "example/tree/index",
          "meta": {
            "title": "树形菜单",
            "icon": "tree"
          }
        }
      ]
    },
    {
      "path": "/form",
      "component": "Layout",
      "children": [
        {
          "path": "",
          "name": "Form",
          "component": "form/index",
          "meta": {
            "title": "表单",
            "icon": "form"
          }
        }
      ]
    }
  ]

  Mock.mock('/data/menu', 'get', function () {
    return menuDataTree;
  })

})();

