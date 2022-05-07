function distanceFromHqInBlocks(distance) {
  let pickupDistance = distance > 42? distance - 42 : 42 - distance
  return pickupDistance;
}

function distanceFromHqInFeet(pickupDistance) {
  let difference = distanceFromHqInBlocks(pickupDistance) ;
  return difference * 264;
}
function distanceTravelledInFeet(start, destination){
  let travel =destination > start ? (destination - start )* 264 :( start - destination)* 264 
  return travel;
  
}

function calculatesFarePrice(start, destination) {
	let pricing = distanceTravelledInFeet(start, destination);
	if(pricing <= 400) {
		return 0;
	}
	else if(pricing > 400 && pricing < 2000) {
		return 2.56
	}
	else if(pricing > 2000) {
		if(pricing > 2500) {
			return 'cannot travel that far';
		}
		return 25;
	}
}
