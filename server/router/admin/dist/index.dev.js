"use strict";

var Router = require('koa-router');

var adminRouter = new Router();

var _require = require('../../utils/tools'),
    sendResponse = _require.sendResponse;

var jwt = require('jsonwebtoken'); // 用于生成token
// login


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
              ctx.body = token;
            }
          }

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}); // dashboard

adminRouter.get('/dashboard', function _callee2(ctx) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log(ctx, ctx.body, ctx.body === ctx.request.body, ctx.body === ctx.response.body);
          ctx.body = 'this is admin dashboard';

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
}); // form

adminRouter.post('/jobs/insert', function _callee3(ctx) {
  var _ctx$request$body2, category, title, startTime, endTime, responsibilityHtmlText, requirementHtmlText, author, date, responsibility, requirement, sql, result;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _ctx$request$body2 = ctx.request.body, category = _ctx$request$body2.category, title = _ctx$request$body2.title, startTime = _ctx$request$body2.startTime, endTime = _ctx$request$body2.endTime, responsibilityHtmlText = _ctx$request$body2.responsibilityHtmlText, requirementHtmlText = _ctx$request$body2.requirementHtmlText, author = _ctx$request$body2.author;
          date = "".concat(startTime, "~").concat(endTime);
          responsibility = responsibilityHtmlText;
          requirement = requirementHtmlText;
          sql = "insert into jobs (id, category, title, date, responsibility, requirement, author) \n        values (1, '".concat(category, "', '").concat(title, "', '").concat(date, "', '").concat(responsibility, "', '").concat(requirement, "', '").concat(author, "')");
          _context3.next = 7;
          return regeneratorRuntime.awrap(sendResponse(sql));

        case 7:
          result = _context3.sent;

          if (result) {
            ctx.body = {
              status: 200,
              ext: '',
              msg: 'insert success'
            };
          }

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  });
});
module.exports = adminRouter;