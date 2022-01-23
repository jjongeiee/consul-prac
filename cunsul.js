var youtu = document.getElementById('youtu');
function disp(self) {
    if(self.value === '감추기'){
    youtu.style.display = "none";
    self.value = '보이기';
} else {
    youtu.style.display = "";
    self.value = '감추기';
}
};