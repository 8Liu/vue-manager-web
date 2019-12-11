<template>
    <el-menu
            default-active="2"
            :class="collapse?'collapse':'aside'"
            :collapse-transition="false"
            :collapse="collapse" router>
        <div class="menu-header">
            <el-avatar :size="40" src="http://img1.imgtn.bdimg.com/it/u=4238142487,3274484296&fm=26&gp=0.jpg"></el-avatar>
        </div>
        <template v-for="(route,index) in routers">
            <template v-if="route.children">
                <el-submenu :index="route.name" :key="index">
                    <template slot="title">
                        <i :class="route.meta.icon"></i>
                        <span slot="title">{{ route.meta.name }}</span>
                    </template>
                    <template v-for="(subRoute,subIndex) in route.children">
                        <el-submenu
                                v-if="subRoute.children"
                                :index="subRoute.name"
                                :key="subIndex"
                        >
                            <template>
                                <i :class="subRoute.meta.icon"></i>
                                <span slot="title">{{ subRoute.meta.name }}</span>
                            </template>
                            <el-menu-item
                                    v-for="(threeRoute,i) in subRoute.children"
                                    :key="i"
                                    :index="threeRoute.name"
                            >{{ threeRoute.meta.name }}
                            </el-menu-item>
                        </el-submenu>
                        <el-menu-item
                                v-else
                                :index="subRoute.name"
                                :key="subIndex"
                        >
                            <i :class="subRoute.meta.icon"></i>
                            <span slot="title">{{ subRoute.meta.name }}</span>
                        </el-menu-item>
                    </template>
                </el-submenu>
            </template>
            <template v-else>
                <el-menu-item :index="route.name" :key="index">
                    <i :class="route.meta.icon"></i>
                    <span slot="title">{{ route.meta.name }}</span>
                </el-menu-item>
            </template>
        </template>
    </el-menu>
</template>

<script>
import {mapState} from 'vuex'
import sliderPath from '@/router/sliderPath'
export default {
    name: "aside",
    data() {
        return {
            routers:sliderPath
        }
    },
    methods: {
    },
    computed: {
        ...mapState([
            'collapse'
        ])
    }
}
</script>

<style>
    .aside {
        width: 300px;
    }

    .collapse {
        width: 64px;
    }

    .menu-header {
        height: 60px;
        text-align: center;
    }
</style>
