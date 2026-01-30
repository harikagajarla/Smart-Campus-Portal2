const loginBtn = document.getElementById('loginBtn');
const dashboard = document.getElementById('dashboard');
const complaintModal = new bootstrap.Modal(document.getElementById('complaintModal'));
const complaintTitle = document.getElementById('complaintTitle');
const complaintDesc = document.getElementById('complaintDesc');
const submitComplaint = document.getElementById('submitComplaint');
const toastEl = document.getElementById('successToast');
const toast = new bootstrap.Toast(toastEl);

// Simulate login
loginBtn.addEventListener('click', () => {
  dashboard.classList.remove('hidden');
  window.scrollTo({ top: dashboard.offsetTop, behavior: 'smooth' });
});

// Complaint submission validation
submitComplaint.addEventListener('click', () => {
  if (complaintTitle.value && complaintDesc.value) {
    complaintModal.hide();
    toast.show();
    complaintTitle.value = '';
    complaintDesc.value = '';
  } else {
    alert('Please fill out all fields.');
  }
});

// Notice Search Filter
document.getElementById('noticeSearch').addEventListener('input', (e) => {
  const filter = e.target.value.toLowerCase();
  document.querySelectorAll('#noticeList li').forEach((li) => {
    li.style.display = li.textContent.toLowerCase().includes(filter) ? '' : 'none';
  });
});

// Translate simulation
document.querySelectorAll('.translate-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.textContent = 'Translated ✔️';
  });
});

// Lost & Found Image Preview
const itemImg = document.getElementById('itemImg');
const imagePreview = document.getElementById('imagePreview');
itemImg.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (evt) => {
      imagePreview.innerHTML = `<img src="${evt.target.result}" class="img-fluid rounded">`;
    };
    reader.readAsDataURL(file);
  }
});

// Simple search filter for Lost & Found
document.getElementById('lostSearch').addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  document.querySelectorAll('#lostGallery .card').forEach(card => {
    card.style.display = card.textContent.toLowerCase().includes(term) ? '' : 'none';
  });
});
