import crypto from 'crypto'

// 1-1. 양방향 암호화 - 암호화
function encrypt (value, key) {
  if (value) {
    const cipher = crypto.createCipher('aes256', key)
    return cipher.update(value, 'ascii', 'hex') + cipher.final('hex')
  } else {
    return value
  }
}

// 1-2. 양방향 암호화 - 복호화
function decrypt (value, key) {
  if (value) {
    const decipher = crypto.createDecipher('aes256', key)
    return decipher.update(value, 'hex', 'ascii') + decipher.final('ascii')
  } else {
    return value
  }
}
