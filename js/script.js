const celciusinput = document.getElementById("celcius");
const fahreinheitinput = document.getElementById("fahrenheit");

const inputs = document.getElementsByClassName("input");

for(Let i=0; i<inputs.length; i++) {
    Let input = inputs[i];
    
    input.addEventListener("input", function(e){
        Let value = parseFloat(e.target.value);
        switch(e.target.name) {
            case "celcius":
                fahreinheitInput.value = (value * 1.8) + 32;
                break;
            case "fahrenheit":
                celciusInput.value =(value - 32) / 1.8;
                break;
        }
    });
}