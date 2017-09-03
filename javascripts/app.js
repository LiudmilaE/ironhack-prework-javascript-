// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

// ======================////Rover can turn right or left
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
      break;
  }
  //console.log("After turning left a new direction is " + rover.direction);
}


function turnRight(rover){
  //console.log("turnRight was called!");

  switch (rover.direction) {
    case "N":
      rover.direction= "E";
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
      break;
  }
  //console.log("After turning right a new direction is " + rover.direction);
}

////move forward with boundaries

function moveForward(rover){
  //console.log("moveForward was called");

  if (rover.direction === "W" && rover.x > 0) {
    rover.x=rover.x-1;
  } else if (rover.directuion === "N" && rover.y > 0){
    rover.y=rover.y-1;
  } else if (rover.direction === "S" && rover.y < 9){
    rover.y=rover.y+1;
  } else if(rover.direction === "E" && rover.x < 9){
    rover.x=rover.x+1;
  } else {
    console.log("Reached bounderies - cannot move forward!");
  }
  //console.log("After moving forward a new position of rover is x: "+rover.x + " and y: "+rover.y);
}

///move backward with boundaries


function moveBackward(rover){
  //console.log("moveBackward was called");
  if (rover.direction==="W" && rover.x < 9) {
    rover.x=rover.x+1;
  } else if (rover.direction === "N" && rover.y < 9){
    rover.y=rover.y+1;
  } else if (rover.direction === "S" && rover.y > 0){
    rover.y=rover.y-1;
  } else if(rover.direction === "E" && rover.x > 0){
    rover.x=rover.x-1;
  } else {
    console.log("Reached bounderies - cannot move backward!");
  }
}


////recieved commands to move the rover and print as result travel log
function recievedCommands(string){
  var travelLogCoordinates=" ";

  for (var i = 0; i < string.length; i++) {
    if(string[i]!="r" && string[i]!="l" && string[i]!="f" && string[i]!="b"){
      rover.travelLog.push(null);
      continue;  ///check that commands are only r l f b
    } else if(string[i]==="f"){
      moveForward(rover);
    } else if(string[i]==="r"){
      turnRight(rover);
    } else if(string[i]==="l"){
      turnLeft(rover);
    } else if(string[i]==="b"){
      moveBackward(rover);
    }

    rover.travelLog.push([rover.x, rover.y]);

    console.log(rover.travelLog[i]);
    travelLogCoordinates = travelLogCoordinates + rover.travelLog[i]+ "; ";
    }
  console.log("The coordinates of the places where rover has been are:"+travelLogCoordinates);
  }


recievedCommands("rffrffrbb");
///turnLeft(rover);
///moveForward(rover);
