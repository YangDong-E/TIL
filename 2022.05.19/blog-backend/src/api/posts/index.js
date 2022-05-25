const Router = require('koa-router');

// const 모듈 이름 = require('파일이름');
// 모듈이름.이름(); 형식으로 불러올 수 있다.
const postsCtrl = require('./posts.ctrl');

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);
posts.get('/:id', postsCtrl.read);
posts.delete('/:id', postsCtrl.remove);
posts.put('/:id', postsCtrl.replace);
posts.patch('/:id', postsCtrl.update);
module.exports = posts;
