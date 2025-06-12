/*
const { execSync } = require('node:child_process'); 

console.log(execSync.toString());

const strTags = execSync('git tag', { encoding: 'utf-8' });
const arrTags = strTags.split('\n');

const replaceNameTag = (str) => str.slice(0, -3) + '' + str.slice(-2);

const newTags = Array.from(arrTags, (x) => replaceNameTag(x))


count = 0

while (arrTags.length > count) {
 execSync(`git tag ${newTags[count]} ${arrTags[count]}`)
 execSync(`git tag -d ${arrTags[count]}`)
 execSync(`git push origin --delete ${arrTags[count]}`)
 count++
}

*/ 
/*
`git push origin --delete step_50`   
`git tag new_tag_name old_tag_name`
`git tag -d old_tag_name`
*/ 


