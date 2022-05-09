<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu router>
            <el-submenu index="1" v-for="(item,index) in this.$router.options.routes" :key="index" v-if="!item.hidden">
              <template slot="title">
                <i class="el-icon-message"></i>
                {{ item.name }}
              </template>
              <el-menu-item :index="children.path" v-for="(children,children_index) in item.children"
                            :key="children_index">{{
                  children.name
                }}
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {}
}
</script>

<style scoped>

</style>