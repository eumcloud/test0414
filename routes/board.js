var express = require('express');
var router = express.Router();

let data = require("../dao/dummy.js");
// console.log(data.head[0]);
// console.log(data.dummy[0]);

let host = "http://localhost:3000/";

/* GET Board page. */
router.get('/', function(req, res, next) {
    res.render('./board/List', { title: '게시판', head: data.head[0], data: data.dummy[0] });
});

/* GET Board page. */ //임시작업이므로 전부 get으로 처리
router.get('/write', (req, res, next) =>{
  let now = new Date();

  res.render('./board/Write', { title: '글쓰기', head: data.head[0], data: data.dummy[0], right:now });
});

router.get('/modify', (req, res, next) =>{
  res.render('./board/List', { title: '글 수정', head: data.head[0], data: data.dummy[0]  });
});

router.get('/read', (req, res, next) =>{
  res.render('./board/Board', { title: '상세내용', data: data.dummy[0]  });
});

router.get('/delete', (req, res, next)=> {
  res.redirect(
    "/board"
  );
});




module.exports = router;
