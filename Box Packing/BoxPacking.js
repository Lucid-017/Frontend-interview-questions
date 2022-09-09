var log = console.log
function boxesPacking(length, width, height) {
    // inside each box contains not more than 1 box
    // boxes inside its containing box all have length, width and height 
    // a box can be put into another box only if all sides of the first ones are less than the respective one of the second one
    // so we have to iterate between all possible comibinations of the length,width,height.length against each other
    var isPosible = true;
    for (var i = 0; i < length.length; i++) {
        log(length[i] + 'i')
      for (var j = 0; j < length.length; j++) {
        log(length[j] + 'j')
        if (i === j) {
          continue;
        }
        if (!(
            (length[i] < length[j] &&
              width[i] < width[j] &&
              height[i] < height[j]) ||
            (length[i] > length[j] &&
              width[i] > width[j] &&
              height[i] > height[j]) ||
            (length[i] < length[j] &&
              width[i] < height[j] &&
              height[i] < width[j]) ||
            (length[i] > length[j] &&
              width[i] > height[j] &&
              height[i] > width[j]) ||
            (length[i] < height[j] &&
              width[i] < width[j] &&
              height[i] < length[j]) ||
            (length[i] > height[j] &&
              width[i] > width[j] &&
              height[i] > length[j]) ||
            (length[i] < width[j] &&
              width[i] < length[j] &&
              height[i] < height[j]) ||
            (length[i] > width[j] &&
              width[i] > length[j] &&
              height[i] > height[j]) ||
            (length[i] < height[j] &&
              width[i] < length[j] &&
              height[i] < width[j]) ||
            (length[i] > height[j] &&
              width[i] > length[j] &&
              height[i] > width[j]) ||
            (length[i] < width[j] &&
              width[i] < height[j] &&
              height[i] < length[j]) ||
            (length[i] > width[j] &&
              width[i] > height[j] &&
              height[i] > length[j])
          )
        ) {
          isPosible = false;
        }
  
        if (!isPosible) {
          break;
        }
      }
      if (!isPosible) {
        break;
      }
    }
    return isPosible;
  }

  log(boxesPacking([1,2,3],[1,2,3] ,[1,2,3] ))