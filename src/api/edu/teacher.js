import request from '@/utils/request'

export function getTeacherList(current, limit, teacherQuery) {
    return request({
    //   url: '/admin/edu/teacher/condition/'+current+'/'+limit,
      url: '/admin/edu/teacher/condition/${current}/${limit}',
      method: 'get',
      //data表示将对象转换为json传输
      data: {
          teacherQuery
      },
      params:{
          current,
          limit
      }
    })
}
  