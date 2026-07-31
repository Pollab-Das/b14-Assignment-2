function isElevatorSafe(weights)
{
if (Array.isArray(weights) === false) {
return "Invalid";
}

let q = 0;

for (let i = 0; i < weights.length; i++)
{
q = q + weights[i];
}

if (q <= 400)
{
return true;
}
else
{
return false;
}
}
