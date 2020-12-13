<template>
  
</template>

<script>
import teacher, { getTeacherList } from '@/api/edu/teacher'

export default {
  name: 'List',
  data() {
    return {
      list: null,
      page: 1,
      limit: 10,
      teacherQuery: {

      }

    }
  },
  //页面渲染之前执行,一般调用methods定义的方法
  created(){
    getList(){
      teacher.getTeacherList(this.page, this.limit, this.teacherQuery)
        .then(response =>{

        }).cat
    }
  },
  //具体使用的方法，即api中的方法
  methods: {
    
  }
}
</script>

<style>

</style>