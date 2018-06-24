/*
var fs = require("fs");

// 异步读取
fs.readFile('example.html', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("异步读取: " + data.toString());
});

// 同步读取
var data = fs.readFileSync('example.html');
console.log("同步读取: " + data.toString());

console.log("程序执行完毕。");
*/



var fs = require("fs");


// 同步读取
var data = fs.readFileSync('example.html');
//console.log("同步读取: " + data.toString());
if(data.toString != ''){
	console.log('yes');
//	console.log("异步读取: " + data.toString());

}else{
	console.log("程序执行完毕。");
}



var alt=0;




var str = data.toString();   
var regExp = /alt= ""/; //未使用g选项   
var res = regExp.exec(str);    
if(res!=''){
	alt=1;
}else{
	alt=0;

}
	
	//console.log('break');
   
//console.log(res); //输出[ 'aaa', index: 0, input: 'aaabbbcccaaabbbccc' ]   



var expect = require('chai').expect;




var n_img=(data.toString().split('img')).length-1;
var n_alt=(data.toString().split('alt')).length-1;
var n_red=(data.toString().split('color:red')).length-1;
var n_require=(data.toString().split('require')).length-1;
  

  describe('#indexOf1()', function(){
    it('if there are imgs', function(){
      expect(data.toString()).to.include('img')
    });
    it('every <img> has "alt"', function(){
      expect(n_img).to.be.equal(n_alt);
    });
    it('alt is not empty', function(){
      expect(data.toString()).to.not.include('alt= ""')
    });

  });
describe('#alt_test()', function(){
    it('alt can not be empty', function(){
      expect(alt).to.be.equal(0)

  });
});


