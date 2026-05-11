const Koa = require('koa');
const app = new Koa();
//启动一个koa服务 并使用try catch捕获错误
try {
    const port = process.env.PORT || 3000;
    console.log(process.env.PORT);
    const host = process.env.HOST || '0.0.0.0';
    app.listen(port, host, () => {
      console.log(`Server is running on http://${host}:${port}`);
    });
} catch (error) {
  console.error(error);
}


