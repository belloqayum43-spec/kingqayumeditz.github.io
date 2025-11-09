// show current year
document.getElementById('year').textContent = new Date().getFullYear();

// small brand typing effect for header
const brand = document.getElementById('brand');
const text = brand.textContent;
brand.textContent = '';
let i=0;
const t = setInterval(()=> {
  brand.textContent += text[i];
  i++;
  if(i>=text.length) clearInterval(t);
}, 80);

// if profile image not found, replace with colored block
const img = document.getElementById('profileImage');
img.onerror = () => {
  img.style.background = 'linear-gradient(135deg,#ff007f,#5b00ff)';
  img.style.width = '260px';
  img.style.height = '260px';
  img.style.display = 'inline-block';
  img.src = '';
};
