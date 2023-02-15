let num =0;


const value = document.querySelector(".value")  //This will only select the first value which matches the selector

const btns = document.querySelectorAll(".btn") //This will  select all the values which matches the selector

btns.forEach((btn)=>{  //This loop will display all the buttons 

    btn.addEventListener("click", (event)=>{

        const styles = event.currentTarget.classList
        if(styles.contains("btn-danger")){
            num--;
        }
        else if(styles.contains("btn-success")){
            num++;
        }else{
            num =0;
        }

        value.textContent = num;

        if(num>0){
            value.style.color = "green"
        }
        else if(num<0){
            value.style.color = "red"
        }
        else{
            value.style.color = "black"
        }
    })
})