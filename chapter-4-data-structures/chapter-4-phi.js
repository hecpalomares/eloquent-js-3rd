let journal = require('./journal.js');

// table {Array} - #00, #01, #10, #11 
function calculatePhi(table) {
  const phiNum = table[3] * table[0] - table[2] * table[1];
  const phiDem = Math.sqrt(
    (table[2] + table[3]) *
      (table[0] + table[1]) *
      (table[1] + table[3]) *
      (table[0] + table[2])
  );
  const phi = phiNum / phiDem;
  return phi;
}

// Assign an event into one of the 4 categories. 00, 01, 10, 11. Return them as an array. 
function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for(let entry of journal) {
    let index = 0;
    if(entry.events.includes(event)) {
      index++;
    }
    if(entry.squirrel) {
      index+=2;
    }
    table[index] += 1;
  }
  return table;
}

function journalEvents (journal) {
  let events = [];
  for(let entry of journal) {
    for(let event of entry.events) {
      if(!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

// Calculate the correlation for events with 0.1 and -0.1
for(let event of journalEvents(journal)) {
  let correlation = calculatePhi(tableFor(event, journal));
  if(correlation > 0.1 || correlation < -0.1) {
    console.log(event + ":", correlation);
  }
}

// Calculate the correlation for event eating peanuts and not brushinh teeth
for (let entry of journal) {
  if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")) {
     entry.events.push("eat-peanuts not-brushedTeeth");
  }
}

// Found Relation: 1
console.log(calculatePhi(tableFor("eat-peanuts not-brushedTeeth", JOURNAL)));