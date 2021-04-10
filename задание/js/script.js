let m_pos;
function resize(e){
    let parent = resize_el.parentNode;
    let dx = m_pos - e.x;
    m_pos = e.x;
    parent.style.width = (parseInt(getComputedStyle(parent, '').width) - dx) + "px";
}

let resize_el = document.getElementById("resize");
resize_el.addEventListener("mousedown", function(e){
    m_pos = e.x;
    document.addEventListener("mousemove", resize, false);
}, false);
document.addEventListener("mouseup", function(){
    document.removeEventListener("mousemove", resize, false);
}, false);
