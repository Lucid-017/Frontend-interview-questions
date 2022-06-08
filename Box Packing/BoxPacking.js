var log = console.log
function boxesPacking(length, width, height) {
    
    var isPosible = true;
    for (var i = 0; i < length.length; i++) {
        log(length[i] + 'i')
      for (var j = 0; j < length.length; j++) {
        log(length[j] + 'j')
        if (i === j) {
          continue;
        }
        if (
          !(
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