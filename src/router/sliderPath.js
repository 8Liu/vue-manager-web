import Vue from 'vue'
import Router from 'vue-router'
import abstract from '@/view/abstract'
import dashBoard from '@/view/dashBoard'
import baseForm from "../view/baseForm/baseForm";
import upload from "../view/baseForm/upload";
import baseTable from "../view/basetable/baseTable";
import baseTab from "../view/tab/baseTab";

Vue.use(Router)

export default [
    {
        path: '/home',
        name: 'home',
        meta: {
            name: '系统首页',
            icon: 'el-icon-s-home'
        },
        component: dashBoard
    },
    {
        path: '/form',
        name: 'form',
        meta: {
            name: '表单相关',
            icon: 'el-icon-s-grid'
        },
        component: abstract,
        children: [
            {
                path: '/baseForm',
                name: 'baseForm',
                meta: {
                    name: '基本表单',
                    icon: 'el-icon-menu'
                },
                component: baseForm
            },
            {
                path: '/upload',
                name: 'upload',
                meta: {
                    name: '文件上传',
                    icon: 'el-icon-s-order'
                },
                component: upload
            }

        ]
    },
    {
        path: '/baseTable',
        name: 'baseTable',
        meta: {
            name: '基本表格',
            icon: 'el-icon-film'
        },
        component: baseTable
    },
    {
        path: '/baseTab',
        name: 'baseTab',
        meta: {
            name: 'tab选项',
            icon: 'el-icon-document-copy'
        },
        component: baseTab
    },

]
