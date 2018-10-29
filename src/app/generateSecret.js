const generateSecret = options => {
  const opt = options.slice()

  return [...Array(4)].map(() => 
    opt.splice(Math.floor(Math.random() * opt.length), 1).pop()
  ).join('')
}

export default generateSecret

