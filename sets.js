const annoyingHashTags = new Set(["#selfie","#nofilter"]);

annoyingHashTags.add("#YOLO");
annoyingHashTags.add("#YOLO"); 
annoyingHashTags.add(true); 
annoyingHashTags.add(true); 
console.log(annoyingHashTags);
//The second #YOLO is not added as SET elements are unique
//SETS are replacements for Arrays in SPECIFIC situations
//UNIQUE values
//don't care about random access
//don't care about order


//Checking for length
console.log(annoyingHashTags.size);


//Checking for values
//the has method is O(1) notation
//it uses a hashmap implicitly
console.log(annoyingHashTags.has("#YOLO"));
console.log(annoyingHashTags.has("#FOODIE"));

//delete
annoyingHashTags.delete(true);
console.log(annoyingHashTags);

//clear
annoyingHashTags.clear();
console.log(annoyingHashTags);

//for of loop
const reallyAnnoyingHashTags = new Set();

reallyAnnoyingHashTags.add("#Selfie");
reallyAnnoyingHashTags.add("#Blessed");
reallyAnnoyingHashTags.add("#NoFilter");
reallyAnnoyingHashTags.add("#YOLO"); 
console.log("---------------");

for(let val of reallyAnnoyingHashTags){
    console.log("Please don't use ",val);
}

//Useful situations for using Set
console.log('------------------');
const missedCalls = ["Kevin","Stevie","Kevin","Stevie","Kevin","Kevin"];
const uniqueMissedCalls = [...new Set(missedCalls)];
console.log(uniqueMissedCalls);