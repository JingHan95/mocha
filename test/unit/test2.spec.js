

var fs = require("fs");


// 同步读取
var data = fs.readFileSync('example.html');
//console.log("同步读取: " + data.toString());
if(data.toString != ''){
	console.log('yes2');
//	console.log("异步读取: " + data.toString());

}else{
	console.log("程序执行完毕。");
}
/*
var expect = require('chai').expect;
var n_red=(data.toString().split('color:red')).length-1;
var n_require=(data.toString().split('require')).length-1;
  

  describe('#indexOf2()', function(){

    it('Ensuring that information conveyed by color differences is also available in text', function(){
      expect(n_red).to.be.equal(n_require)
    });
  });


*/


  
