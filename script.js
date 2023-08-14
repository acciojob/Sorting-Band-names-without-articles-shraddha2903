//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let noArticle={};

let temp=[];
for(int i=0;i<touristSpots.length;i++)
{
	let sub=touristSpots[i];
	let t=sub.split(" ");//The ,Virupaksha ,Temple
	let nArt="";
	for(let j=0;j<t.length;j++)
		{
			let c=t[j].toLowerCase();
			if(c!='a' || c!='an' || c!='the')
			{
				nArt=nArt+t[j]+" ";
				// console.log(nArt);
			}
		}
	nArt.trim();
	temp.push(nArt);
	setattr(noArticle, nArt, touristSpots[i]);
	
}

document.getElementById("bands").innerHTML=temp;





