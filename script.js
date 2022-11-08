function fcn() {
    // to calculate days
    birth = document.getElementById("DOB").value;
    date_2 = new Date(birth);

    const date_1 = new Date();
    console.log(date_1);

    const days = (date_1, date_2) => {
        let difference = date_1.getTime() - date_2.getTime();
        let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
        return TotalDays;
    }

    // to calculate code
    firstname = document.getElementById("name").value;
    name = new String(firstname);
    const fcode = name[1];

    lastname = document.getElementById("sname").value;
    name = new String(lastname);
    const scode = name[1];
    // output

    return document.getElementById("result").innerHTML =
        fcode+days(date_1, date_2)+scode;
}