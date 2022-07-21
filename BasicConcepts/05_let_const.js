// let
let a = 'Variable a'
let b = 'Variable b'

{
  a = 'New variable A'
  let b = 'Local Variable B'
  console.log('scope A', a)
  console.log('scope B', b)
}
console.log('A:', a)
console.log('B:', b)
