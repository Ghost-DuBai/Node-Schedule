//导入发送http请求的包
const request = require('superagent')
//导入爬去数据的包
const cheerio = require('cheerio')
//导入定时任务的包
const schedule = require('node-schedule');
//导入发送邮件的包
const nodemailer = require('nodemailer')
let tq, wd, jy;
let day=0
function getMojiData() {
  return new Promise((resolve, reject) => {
    request
      .get('http://tianqi.moji.com/tommorrow/china/zhejiang/taizhou') //这是爬取成都明天的天气，如果是其他城市直接换那个城市的页面爬取就行
      .end((err, res) => {
        if (err) return console.log('数据请求失败')
        const $ = cheerio.load(res.text)
        //温度
        const wendu =
          $('.detail_weather em:eq(0)').text() +
          '-' +
          $('.detail_weather em:eq(1)').text()
        //天气
        const weather = $('.detail_weather span').text()
        //提示
        const tips = $('.detail_ware_title span').text()
        const mojiData = {
          weather,
          wendu,
          tips,
        }
        tq = mojiData.weather
        wd = mojiData.wendu
        jy = mojiData.tips
        day++
        //邮箱验证码的处理函数
        let fn = function () {
          let transporter = nodemailer.createTransport({
            host: 'smtp.QQ.com',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
              user: '@qq.com', // 你的邮箱账号
              pass: '*****', //你的邮箱SMTP授权码
            },
          })

          // send mail with defined transport object
          let options = {
            from: '"The most handsome people" <@qq.com>',
            to: '@qq.com',
            subject: `每日提醒--第${day}天`, // 
            html: `<p>已经很晚了，你该睡觉了。</p>
            <p>明日天气:${tq}</p>
            <p>明日温度:${wd}</p>
            <p>${jy}</p>
            `, // html主体文件
          }
          //发送
          transporter.sendMail(options, function (err, msg) {
            if (err) {
              console.log(err);
              fn()
            } else {
              console.log('发送成功');
              transporter.close()
            }
          })

        }
        fn()
        resolve(mojiData)
      })
  })
}

let job = schedule.scheduleJob('00 00 23 * * *', () => {
  getMojiData()
});