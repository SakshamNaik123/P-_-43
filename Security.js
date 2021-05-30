class Security {

    constructor(){

        this.access1 = createInput("Eligibility Criteria for Admission in Medicine")
        this.access1.position(100,90);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Code1")
        this.access2.position(700,190);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(700,220);
        this.button2.style('background', 'lightgrey');
//add code for creating and positioning the third input box and button
        this.access3 = createInput("Code1")
        this.access3.position(100,340);
        this.access3.style('background', 'white');
        
        this.button3 = createButton('Check');
        this.button3.position(100,380);
        this.button3.style('background', 'lightgrey');
        
    }

    display(){

        this.button1.mousePressed(() => {
            textSize(15)
            text("Getting admission in medical colleges requires great determination and hard work.") 
            text("The profession demands not only professional commitment but a promise to save life of an aggrieved personHence,")
            text(" one must follow the admission process earnestly to pursue the degree.")
            text("Let us take a look at the eligibility criteria and entrance exams to seek admission in medical courses")
            
                
            this.button1.hide();
                this.access1.hide();
                
            
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });
//add code for what happens when the third button is pressed

        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
    }
});
        

    }
}