
const ages = [25, 31, 42, 77];

for (var i = 0; i < ages.length; i++)
{
    console.log(ages[i]);
    // In case the number is less than 70
    if (ages[i] < 70)
    {
        // Multiply number by 2
        console.log(ages[i] * 2);
    }
    // In case number is not bigger than 70
    else 
    {
        console.log("Number is bigger than 70");
    }
    console.log("----------");
}

