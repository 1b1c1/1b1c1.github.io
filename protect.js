const fs = require('fs');
const path = require('path');

const PASSWORD = 'your-secret-password'; // 设置你的密码
const TOKEN_FILE = path.join(__dirname, '.token'); // 令牌文件路径

if (process.argv[2] === 'check') {
  // 检查令牌是否存在
  if (fs.existsSync(TOKEN_FILE)) {
    console.log('Authenticated'); // 存在则认证通过
  } else {
    console.log('Not authenticated'); // 不存在则认证失败
  }
} else {
  // 验证密码并生成令牌
  const inputPassword = process.argv[2];
  if (inputPassword === PASSWORD) {
    fs.writeFileSync(TOKEN_FILE, 'true'); // 密码正确，生成令牌文件
    console.log('Token generated');
  } else {
    console.log('Incorrect password'); // 密码错误
  }
}