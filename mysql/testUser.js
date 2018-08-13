var user = require('./user');
// 添加用户
user.addUser('jack', 'jack@163.com').then(function(r) {
    console.log(r);
// 查询新添加的用户
    console.log(user.findByName('jack'))
    return user.findByName('jack'); 
}).then(function(user) {
        console.log('****************************'); 
        console.log('user name: ', user); 
        console.log('user email: ', user.email);
});