//Problem-01: Match Winner
function matchWinner(teamAGoals, teamBGoals)
{
if (typeof teamAGoals !== 'number' || typeof teamBGoals !== 'number')
{
return "Invalid";
}
if (teamAGoals > teamBGoals)
{
return "Team A Won";
}
else if (teamBGoals > teamAGoals)
{
return "Team B Won";
} 
else
{
return "Draw";
}
}


//Problem-02: Elevator Weight Safety Checker
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


//Problem-03: AI Token Cost Calculator
function calculateAiCost(tokensUsed)
{
if (typeof tokensUsed !== "number" || tokensUsed < 0)
{
    return "Invalid";
}

if (tokensUsed < 500)
{
    return 0;
}
let w = tokensUsed - 500 ;
let q = Math.floor(w/100);

return q * 5 ;
}


//Problem-04: Top Rated Restaurant Finder
function topRatedRestaurant(restaurants) 
{
    if (Array.isArray(restaurants) === false || restaurants.length === 0)
    {
        return "Invalid";
    }
let e = restaurants[0];
let w = restaurants.length;
for (let i = 0 ; i < w; i++)
{
    if (restaurants[i].rating > e.rating)
    {
        e = restaurants[i];
    }
}
return e.name.toUpperCase();

}

//Problem-05: Debugging Challenge - API Response Time Monitor
/* এই ফাংশনের সব বাগ খুঁজে ঠিক করো — নাম পরিবর্তন করবে না */
function averageResponseTime(times) {
  if (Array.isArray(times) === false) {
        return "Invalid";
   }

   if (times.length === 0) {
        return "Invalid";
    }

 let total = 0;
    for (let i = 0; i < times.length; i++) {
        if (typeof times[i] !== 'number')
        {
            return "Invalid";
        }
        total = total + times[i];
    }

  return total / times.length;
} 

