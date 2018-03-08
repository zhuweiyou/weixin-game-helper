const crypto = require('../src/crypto')

const data = 'Sm\/sQ0MC2CPbvGTxG8MswG+79SJVvp3P4XO5Gl+AE9HE90JYGUObeOg9rGp3EklRV4sXoD+Y83GyQL0gI4RrY82Q0mlpbh20nWjvtGOc6rFBUVMx3HlgHSzGn0XUFRIR8yN0AzkEbhCz\/k8VIjpojj3T77mGOVZlsKmfUugRO9HrxAdX45iT3ViMOD4B306UWaETRsWdeuuWGExeNyYVp14ZG33af5IvpKpQduzkzUGx+ejalTXcOUp9qo90pf2Pa4A0xpyNCzklCkamBLvrgM4f1t3wgOcQygHNJXCtCkzPVHdZAQvMe54Txtru\/lYfM\/SC5f3uro3teCieVqDzxbgcm30D25h3yDBKkG4fc6Xo6YKAOUIPXtriDKnhNlgYmNpbaQBqa4\/vhwtwxlUfkNOm8sDg3eMakkkyesL75Y\/uh\/d2s5fkMaDw\/pL4zxWNSzw6YWMwS0VCUanipNoE75XtQD1dovFJG0Btkt0cYh\/mUcSuSZvtasx\/6a\/+xtmW'
const encrypt = 'CavjsXgplAVwLUBd'

console.log(JSON.parse(crypto.decrypt(data, encrypt)))
