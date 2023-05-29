function changeShape(shape) {
    var shapeElement = document.getElementById('shape');
    
    // Remove existing shape classes
    shapeElement.classList.remove('circle', 'square', 'triangle');
    
    // Add class based on the selected shape
    shapeElement.classList.add(shape);
  }
  