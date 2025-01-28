const func = () => {
  console.log('This is a function')
}

func()
func``


// ---- tagged templete literal
const modifier = (strs, ...people) => {
  console.log(strs)
  console.log(people)

  return strs.reduce((prev, curr) => {
    return prev + curr + (people.length ? people.shift().toUpperCase() : '')
  }, '')
}

const person1 = 'Sakib';
const person2 = 'Tamim';
console.log(modifier`We have ${person1} & ${person2} in our cricket team`)