const { hash } = require('@db/mysql_funct') // for private use

const generate_random = async ({hashCheck = false, uniqueAgainst, char_length = 6}) => {
  let [generate, allowChar] = ['', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@£€_ -[]&']

  const iterate = () => {
    while (true) {
      for (let i = 0; i <= char_length; ++i) {
        generate += allowChar.charAt(Math.floor(Math.random() * allowChar.length))
      }

      if (uniqueAgainst && (hashCheck ? hash(generate, true) : generate) !== uniqueAgainst) {
        return generate
      } else if (!uniqueAgainst) {
        return generate
      }
    }
  }

  return iterate()
}
