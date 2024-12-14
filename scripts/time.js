const time = document.querySelector(".time");
const items = document.querySelectorAll(".item");
  
  time.addEventListener("mousemove", (e) => {
    const {clientX, clientY} = e;

    // Get the parent's bounding rectangle
    const parentRect = time.getBoundingClientRect();

    // Calculate mouse position relative to the parent
    const relativeX = clientX - parentRect.left + window.scrollX;
    const relativeY = clientY - parentRect.top - parentRect.height + window.scrollY;

    // Iterate through the elements and move them to mouse position
    items.forEach((item, index) => {

        // Get the box that is the parent of the item
        const box = item.parentElement;

        // Get the box's bounding rectangle
        const boxRect = box.getBoundingClientRect();

        // Calculate position of the box relative to .time
        const boxRelativeX = boxRect.left - parentRect.left;
        const boxRelativeY = boxRect.top - parentRect.top;

        // Centering
        const itemRect = item.getBoundingClientRect();
        const elementCenterX = itemRect.width/2;
        const elementCenterY = itemRect.height/2;
        // Calculate position of the mouse relative to .box
        const itemX = relativeX - boxRelativeX - elementCenterX;
        const itemY = relativeY - boxRelativeY - elementCenterY/2;

        item.animate({
            left : `${itemX}px`,
            top : `${itemY}px`
          }, {duration: 1500, fill: 'forwards'});

    });
});
