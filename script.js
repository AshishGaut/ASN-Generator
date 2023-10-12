function fcn() {
    // Calculate days
    birth = document.getElementById("DOB").value;
    date_2 = new Date(birth);

    const date_1 = new Date();
    console.log(date_1);

    const days = (date_1, date_2) => {
        let difference = date_1.getTime() - date_2.getTime();
        let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
        return TotalDays;
    }

    // Calculate code
    firstname = document.getElementById("name").value;
    name = new String(firstname);
    const fcode = name[1];

    lastname = document.getElementById("sname").value;
    name = new String(lastname);
    const scode = name[1];

    // Calculate the two-digit sum
    const currentDate = new Date();
    const timestamp = currentDate.getTime();
    const timestampString = timestamp.toString();

    function addDigitsToTwoDigits(number) {
        let sum = 0;
        let twoDigitNumber = 0;

        for (let i = 0; i < timestampString.length; i++) {
            const digit = parseInt(timestampString[i]);
            sum += digit;
        }

        while (sum >= 100) {
            sum = Math.floor(sum / 10) + (sum % 10);
        }

        twoDigitNumber = sum;

        return twoDigitNumber;
    }

    const twoDigitSum = addDigitsToTwoDigits(timestamp);

    // Generate the output
    const result = `${twoDigitSum}${fcode}${days(date_1, date_2)}${scode}`;
    
    // Display the result
    document.getElementById("result").innerHTML = result;
}
