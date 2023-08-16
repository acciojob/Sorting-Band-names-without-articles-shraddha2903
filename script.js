let bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let ans=[];
function stripArticles(name) {
  const articles = ['a', 'an', 'the'];
  for (const article of articles) {
    if (name.toLowerCase().startsWith(article + ' ')) {
      return name.slice(article.length + 1);
    }
  }
  return name;
}

function customSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (stripArticles(arr[j]) > stripArticles(arr[j + 1])) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

customSort(bandNames);

bandNames.forEach(name => {
ans.push(name)
});
console.log(ans);
