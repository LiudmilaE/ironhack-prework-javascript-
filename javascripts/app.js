// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

// ======================
function turnLeft(rover){
  //console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction= "W";
      break;
    case "S":
      rover.direction= "E";
      break;
    case "W":
      rover.direction= "S";
      break;
    case "E":
      rover.direction= "N";
      break;
    default:
      console.log("There is no direction to turn!");
  };
  console.log("After turning left a new direction is " + rover.direction);
}

function turnRight(rover){
  //console.log("turnRight was called!");

  switch (rover.direction) {
    case "N":
      rover.direction= "E"
      break;
    case "S":
          rover.direction= "W";
        break;
    case "W":
        rover.direction= "N";
      break;
    case "E":
        rover.direction= "S";
        break;
        default:
      console.log("No turn!");
  };
  console.log("After turning right a new direction is " + rover.direction);
};

////move forward

function moveForward(rover){
  //console.log("moveForward was called");
  if (rover.direction==="W") {
    rover.x=rover.x-1;
  } else if (rover.directuion === "N"){
    rover.y=rover.y-1;
  } else if (rover.direction==="S"){
    rover.y=rover.y+1;
  } else if(rover.direction === "E"){
    rover.x=rover.x+1;
  }
  console.log("After moving forward a new position of rover is x: "+rover.x + " and y: "+rover.y);
};


function recievedCommands(string){
  var travelLogCoordinates=" ";
  for (var i = 0; i < string.length; i++) {
    if(string[i]==="f"){
      moveForward(rover);
    } else if(string[i]==="r"){
      turnRight(rover);
    } else if(string[i]=="l"){
      turnLeft(rover);
    }
    rover.travelLog.push([rover.x, rover.y]);
    console.log(rover.travelLog[i]);
    travelLogCoordinates = travelLogCoordinates + rover.travelLog[i]+ "; ";
  }
  console.log("The coordinates of the places where rover has been are:"+travelLogCoordinates);
};

recievedCommands("rffrfflfrff");
///turnLeft(rover);
///moveForward(rover);
