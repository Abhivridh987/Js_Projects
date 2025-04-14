// document.getElementById("myid") - to access the files using ids
// document.getElementsByClassName("myclass") - to access the html document using .class  // returns a collection
// document.getElementsByTagName("p") - to access the html document using tags
// document.querySelector("myid"/"myClass"/tag) - returns 1st matching element            // returns the element
// document.querySelectorAll("myid"/"myClass"/tag) - returns all the elements with the matching name // returns a node list and can be accessed using indexes
// for example thing=document.querySelectorAll('div') - returns a node list NodeList(5) // thing[0] - returns first div // thing[0].innerText = 'Please enter form' changes the text

// tagName : returns the tag for element nodes
// innerText : returns the inner text of the element and all its children
// innerHtml : return the plain html content or plain text in the element
// textContent : returns the textual content even for hidden elements

let number_list=[]

        function execute()
        {
            let number=document.getElementById("entertext").value;
            number=Number(number);
            number_list.push(number);
            let sum=number_list.reduce((res,curr)=>res+curr);
            let avg=(sum)/(number_list.length);
            let max=number_list.reduce((res,curr)=> curr>res ? curr : res);
            let min=number_list.reduce((res,curr)=> curr<res ? curr : res);

            const result={
                s:sum,
                av:avg,
                mx:max,
                mn:min,
                l:number_list.length
            };
            return result;
        }

        function display()
        {
            let res=document.getElementById("Answer");
            let number=document.getElementById("entertext").value;
            if(isNaN(Number(number)) || number.trim==="")
            {
                res.innerHTML=`<h1>Please Enter a Number</h1> ` 
                document.getElementById("entertext").value='';
            }
            else
            {
                let ans=execute();
                res.innerHTML=`<div class="ansheading"><h2> Current Analytics</h2></div><div class="content"><p>Length : ${number_list.length}<br>Sum : ${ans.s}<br>Average : ${ans.av}<br>Maximum : ${ans.mx}<br>Minimum : ${ans.mn}<br></p></div>`
                document.getElementById("entertext").value='';
            }
            
        }