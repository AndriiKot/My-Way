let nestedObject = {
  id: 28802695164,
  date: "April 14, 2024",
  data: {
    'total Users': 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
     'test busy': 8,
    },
  },
};

console.log(nestedObject.data.onlineStatus['test busy']);  // 8
console.log(nestedObject.data['total Users']);		   // 99

nestedObject.data['total Users'] = { user: 99 }
console.log(nestedObject.data['total Users']); 		  // { user: 99 }

console.log(nestedObject.data['total Users'].user)	  // 99







