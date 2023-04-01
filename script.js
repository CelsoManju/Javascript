function display_resume(resume)
{
    console.log(resume);
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