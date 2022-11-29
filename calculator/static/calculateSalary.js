document.getElementById("salaryForm").addEventListener("submit", calculateSalary);
document.getElementById("cleanFields").addEventListener("click", cleanFields);


function calculateSalary(e) {
    e.preventDefault();
    
    const minimumSalary = 1000000
    const tranportMount = 117.172

    let salary = parseInt(document.getElementById("salary").value) ;

    const salaryToShow = document.getElementById("salaryToShow");
    const healthToShow = document.getElementById("healthToShow");
    const pensionToShow = document.getElementById("pensionToShow");
    const transportSubsidyToShow = document.getElementById("transportSubsidyToShow");
    const salarioNetoToShow = document.getElementById("salarioNetoToShow");

    if (salary / minimumSalary > 2) {
        transportSubsidyToShow.innerHTML = "$"+"0";
    }else {
        transportSubsidyToShow.innerHTML = "$"+tranportMount;
    }

    salaryToShow.innerHTML = "$ "+salary;
    healthToShow.innerHTML = "$ "+(salary*0.04);
    pensionToShow.innerHTML = "$ "+(salary*0.04);
    salarioNetoToShow.innerHTML = "$ "+(salary-(salary*0.08)-tranportMount); 
}

function cleanFields() {
    document.getElementById("salaryToShow").innerHTML = "$ 0";
    document.getElementById("healthToShow").innerHTML = "$ 0";
    document.getElementById("pensionToShow").innerHTML = "$ 0";
    document.getElementById("transportSubsidyToShow").innerHTML = "$ 0";
    document.getElementById("salarioNetoToShow").innerHTML = "$ 0";
    document.getElementById("salary").value = "";

}

