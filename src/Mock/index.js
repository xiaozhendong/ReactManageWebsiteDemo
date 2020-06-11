import Mock from 'mockjs';
//TODO 添加分类
Mock.mock('/addClass', 'post', (req, res, next) => {
  console.log(req)
  return Mock.mock({
    'status': 'SUCCESS', 'message': '插入成功',
    'data': {}
  })
})


//TODO 更新分类
Mock.mock('/updateClass', 'post', (req, res, next) => {
  console.log(req)
  return Mock.mock({
    'status': 'SUCCESS', 'message': '插入成功',
    'data': {}
  })
})

//TODO 删除分类


Mock.mock('/deleteClass', 'post', (req, res, next) => {
  console.log(req)
  return Mock.mock({
    'status': 'SUCCESS', 'message': '删除成功',
    'data': {}
  })
})

//TODO 添加文章
Mock.mock('/addArticle', 'post', (req, res, next) => {
  console.log(req)
  return Mock.mock({
    'status': 'SUCCESS', 'message': '插入成功',
    'data': {}
  })
})

//TODO 添加用户
Mock.mock('/addUser', 'post', (req, res, next) => {
  console.log(req);
  return Mock.mock({
    'status': 'SUCCESS', 'message': '插入成功',
    'data': {}
  })
})

//TODO 获取用户数据请求类型有两种ALL和SIMPLe
Mock.mock('/getClass', 'post', (req, res, next) => {
  let opt=JSON.parse(req.body);
  let page=opt.page||10
  if(opt.type==="ALL"){
    return Mock.mock({
      'status': 'SUCCESS', 'message': '查询成功',
      'data|10': [{"id|+1": 1, "name": "@first", "extraName": "@last", "createTime": "@now","updateTime":'@now'}]
    })
  }
  return Mock.mock({
    'status': 'SUCCESS', 'message': '查询成功',
    'data': [{"id|+1": 1, "name": opt.name, "extraName": "@last", "createTime": "@now","updateTime":'@now'}]
  })
});

//TODO 获取文章数据 这里请求类型分三类一是ALL获取10条包括文章的数据，二是TABLE这个和ALL唯一不同的是不下传文章详细内容数据三是SIMPLE获取单条数据
//
Mock.mock('/getArticle', 'post', (req, res, next) => {
  let opt=JSON.parse(req.body);
  console.log(opt)
  let page=opt.page||10
  if(opt.type==="ALL"){

    return Mock.mock({
      'status': 'SUCCESS', 'message': '查询成功',
      'data|10': [{"id|+1": 1, "articleName": "@first", "Author": "@last", "createTime": "@now","updateTime":'@now'}]
    })
  }
  if(opt.type==="TABLE"){

    return Mock.mock({
      'status': 'SUCCESS', 'message': '查询成功',
      'data|10': [{"id|+1": 1, "articleName": "@first", "Author": "@last", "createTime": "@now","updateTime":'@now'}]
    })
  }
  return Mock.mock({
    'status': 'SUCCESS', 'message': '查询成功',
    'data': [{"id|+1": 1, "articleName": "@first", "Author": "@last", "createTime": "@now","updateTime":'@now'}]
  })
});

Mock.mock('/deleteArticle', 'post', (req, res, next) => {
  console.log(req)
  return Mock.mock({
    'status': 'SUCCESS', 'message': '删除成功',
    'data': {}
  })
})


Mock.mock('/getArticleCount', 'post', (req, res, next) => {

  let opt=JSON.parse(req.body);

  return Mock.mock({
    'status': 'SUCCESS', 'message': '查询成功',
    'data': {"total|10-100":10}
  })
});
//TODO 获取分类数据总数(用于表格分页之类)
Mock.mock('/getClassCount', 'post', (req, res, next) => {

  let opt=JSON.parse(req.body);

  return Mock.mock({
    'status': 'SUCCESS', 'message': '查询成功',
    'data': {"total|10-100":10}
  })
});
export default Mock
