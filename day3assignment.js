function display_resume(resume)
{
    console.log("Display resume using for loop");
    console.log("---------------------");
    for (const key1 in resume) {
    console.log(key1 + ":");
    console.log("---------------------");
    const subkeys = resume[key1];
    for (const key2 in subkeys) {

        if (typeof subkeys[key2] === "object") {
        const subkeys2 = subkeys[key2];
        for (const key3 in subkeys2) {
          console.log(key3 + ":"+subkeys2[key3]);
        }
      } else {
        console.log(key2 +":"+ subkeys[key2]);
      }
      
  }
  console.log("---------------------");
}
};


let resume = { 
    personal_details:
    { firstName:"celso",
    lastname:"manju",
    email:"celso@gmail.com",
    phonenumber:"123",
    city:"chennai",
    gender:"female"
    },
   
    education:
    {
        Bachelor_degree:"B.C.A",
        Master_degree:"M.C.A"
    },
    employment:
    {
        employment1:
        {
            position:"Senior Software engineer",
            employer:"NortonLifelock",
            start_date:"2019",
            end_date:"till date"
        } 
    },       
    Skills:        
    { 
        Programming_language: "c#,.net core",
        frontend_language:"asp.net,angular",
        Scripting_language: "javascript,python,powershell" 
    }
    };

display_resume(resume);
