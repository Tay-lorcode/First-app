const readline = require("readline")
const Task=[]
rdl=readline.createInterface({input : process.stdin,
                        output : process.stdout})
async function addTask(){
    rdl.question(`Please enter an item to add to the list.\n`, input=> {

       Task.push(input)
        console.log(`you have added ${input} to your list`)
        console.log(Task)
        Home()
        
    })
       
}            
async function listTask(){
    Task.forEach((value,i)=>{
        console.log(i, value);
    }),
    console.log(`These are the items on your list `);
}



async function deleteTask(){
    listTask()
    
    rdl.question(`Enter the number asigned to the item you want to delete.\n`, userInput=> {
    Task.pop(userInput )
    console.log(Task)
    console.log('This is the item left for your your list')
    rdl.close()
    });
        
    
    

}


async function selectAction(){
    console.log("1. Add a Task")
    console.log("2. Remove a task")
    console.log("3. List  Added Tasks")
    //console.log(4.)


}
Home()
async function Home(){
    console.log(`Welcome to MY TO DO LIST app`)
    console.log(`----------------------------`)
    selectAction()
    rdl.question(`Please select a task to perform."select a number between 1 and 3"\n`, selectAction=> {
        if (0< selectAction <4 ){

            console.log(`you selected  ${selectAction}` );

        
        

                if(selectAction=='1'){
                    addTask();
                }
                
                    
                if(selectAction=='2'){
                    deleteTask();
                }
                if (selectAction=='3'){
                    listTask();
                }  

        } 
        else{
            rdl.setPrompt("Incorret response, please select a number between 1 and 3")
            rdl.Prompt()
        }
  })
}  

rdl.question()


