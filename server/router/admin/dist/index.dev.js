"use strict";

var Router = require('koa-router');

var adminRouter = new Router();

var formidable = require('formidable');

var _require = require('../../utils/tools'),
    sendResponse = _require.sendResponse,
    resCallback = _require.resCallback;

var jwt = require('jsonwebtoken'); // 用于生成token
// 其他模块
// 登录接口


adminRouter.post('/login', function _callee(ctx) {
  var _ctx$request$body, username, password, sql, result, params, token;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ctx$request$body = ctx.request.body, username = _ctx$request$body.username, password = _ctx$request$body.password;
          sql = "select * from user where username='".concat(username, "'");
          _context.next = 4;
          return regeneratorRuntime.awrap(sendResponse(sql));

        case 4:
          result = _context.sent;

          if (result && result.length > 0) {
            // 存在该用户
            result.password = '';
            params = Object.assign({}, result);
            token = jwt.sign(params, 'secret', {
              expiresIn: 24 * 60 * 60
            });

            if (password === result[0].password) {
              ctx.body = {
                code: '0',
                ext: {
                  token: token
                },
                msg: 'success'
              };
            }
          } else {
            ctx.body = {
              code: '1',
              ext: null,
              msg: 'failed'
            };
          }

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}); // 控制台

adminRouter.get('/dashboard', function _callee2(ctx) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          ctx.body = 'this is admin dashboard';

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
}); // 图片上传

adminRouter.post('/upload', function _callee3(ctx) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log(ctx.request.files.file, ctx.request.files.file.path, 77); // const filePath = ctx.request.file.path;
          // const curFilePath = filePath.split('/server')?.length > 1 && filePath.split('/server')[1]; 
          // const { size, type } = ctx.request.body;
          // ctx.body = resCallback(true, {
          //     name,
          //     url: `${ctx.origin}${curFilePath}`,
          //     size,
          //     type
          // });

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
}); // 表单模块
// 发布新闻

adminRouter.post('/news/insert', function _callee4(ctx) {
  var _ctx$request$body2, category, title, date, responsibilityHtmlText, requirementHtmlText, author, uid, responsibility, requirement, sql, result;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _ctx$request$body2 = ctx.request.body, category = _ctx$request$body2.category, title = _ctx$request$body2.title, date = _ctx$request$body2.date, responsibilityHtmlText = _ctx$request$body2.responsibilityHtmlText, requirementHtmlText = _ctx$request$body2.requirementHtmlText, author = _ctx$request$body2.author, uid = _ctx$request$body2.uid;
          responsibility = responsibilityHtmlText;
          requirement = requirementHtmlText;
          sql = "insert into jobs (category, title, date, responsibility, requirement, author, uid) \n        values ('".concat(category, "', '").concat(title, "', '").concat(date, "', '").concat(responsibility, "', '").concat(requirement, "', '").concat(author, "', ").concat(uid, ")");
          _context4.next = 6;
          return regeneratorRuntime.awrap(sendResponse(sql));

        case 6:
          result = _context4.sent;
          ctx.body = resCallback(result);

        case 8:
        case "end":
          return _context4.stop();
      }
    }
  });
}); // 发布职位接口

adminRouter.post('/jobs/insert', function _callee5(ctx) {
  var _ctx$request$body3, category, title, date, responsibilityHtmlText, requirementHtmlText, author, uid, responsibility, requirement, sql, result;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _ctx$request$body3 = ctx.request.body, category = _ctx$request$body3.category, title = _ctx$request$body3.title, date = _ctx$request$body3.date, responsibilityHtmlText = _ctx$request$body3.responsibilityHtmlText, requirementHtmlText = _ctx$request$body3.requirementHtmlText, author = _ctx$request$body3.author, uid = _ctx$request$body3.uid;
          responsibility = responsibilityHtmlText;
          requirement = requirementHtmlText;
          sql = "insert into jobs (category, title, date, responsibility, requirement, author, uid) \n        values ('".concat(category, "', '").concat(title, "', '").concat(date, "', '").concat(responsibility, "', '").concat(requirement, "', '").concat(author, "', ").concat(uid, ")");
          _context5.next = 6;
          return regeneratorRuntime.awrap(sendResponse(sql));

        case 6:
          result = _context5.sent;
          ctx.body = resCallback(result);

        case 8:
        case "end":
          return _context5.stop();
      }
    }
  });
}); // 添加子账号

adminRouter.post('/account/insert', function _callee6(ctx) {
  var _ctx$request$body4, username, password, type, sql, result;

  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _ctx$request$body4 = ctx.request.body, username = _ctx$request$body4.username, password = _ctx$request$body4.password, type = _ctx$request$body4.type;
          sql = "insert into user (username, password, type) values ('".concat(username, "', '").concat(password, "', ").concat(type, ")");
          _context6.next = 4;
          return regeneratorRuntime.awrap(sendResponse(sql));

        case 4:
          result = _context6.sent;
          ctx.body = resCallback(result);

        case 6:
        case "end":
          return _context6.stop();
      }
    }
  });
}); // 表格模块

adminRouter.get('/jobs/list', function _callee7(ctx) {
  var sql, result;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          sql = "select * from jobs";
          _context7.next = 3;
          return regeneratorRuntime.awrap(sendResponse(sql));

        case 3:
          result = _context7.sent;
          ctx.body = resCallback(result, {
            list: result
          });

        case 5:
        case "end":
          return _context7.stop();
      }
    }
  });
});
module.exports = adminRouter;