document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("auth-form-adham");
  const usernameInput = document.getElementById("user-id-adham");
  const passwordInput = document.getElementById("pass-id-adham");
  const confirmPasswordInput = document.getElementById("confirm-pass-id-adham");

  // إنشاء عنصر لعرض الأخطاء تحت الفورم
  let errorContainer = document.createElement("div");
  errorContainer.style.color = "red";
  errorContainer.style.marginTop = "15px";
  errorContainer.style.fontWeight = "600";
  loginForm.appendChild(errorContainer);

  // عنصر لعرض تحذير تأكيد كلمة المرور تحت حقل التأكيد
  let confirmPasswordError = document.createElement("div");
  confirmPasswordError.style.color = "red";
  confirmPasswordError.style.fontSize = "0.9rem";
  confirmPasswordError.style.marginTop = "5px";
  confirmPasswordInput.parentNode.insertBefore(confirmPasswordError, confirmPasswordInput.nextSibling);

  // تحقق مستمر من تطابق كلمة المرور والتأكيد
  confirmPasswordInput.addEventListener("input", () => {
    if (passwordInput.value !== confirmPasswordInput.value) {
      confirmPasswordError.textContent = "كلمة المرور وتأكيدها غير متطابقين!";
    } else {
      confirmPasswordError.textContent = "";
    }
  });

  passwordInput.addEventListener("input", () => {
    if (confirmPasswordInput.value && passwordInput.value !== confirmPasswordInput.value) {
      confirmPasswordError.textContent = "كلمة المرور وتأكيدها غير متطابقين!";
    } else {
      confirmPasswordError.textContent = "";
    }
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    errorContainer.textContent = "";

    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // تحقق من تطابق كلمة المرور والتأكيد
    if (password !== confirmPassword) {
      confirmPasswordError.textContent = "كلمة المرور وتأكيدها غير متطابقين!";
      return;
    } else {
      confirmPasswordError.textContent = "";
    }

    // تحقق اسم المستخدم وكلمة المرور
    if (username === "admin" && password === "12345") {
      // ناجح
      errorContainer.style.color = "green";
      errorContainer.textContent = "تم تسجيل الدخول بنجاح، جاري التحويل...";
      setTimeout(() => {
        window.location.href = "home.html";
      }, 1500);
    } else {
      // خطأ في اسم المستخدم أو كلمة المرور
      errorContainer.style.color = "red";
      errorContainer.textContent = "خطأ في اسم المستخدم أو كلمة المرور!";
    }
  });

  // عند الضغط على زر إعادة التعيين يمسح الأخطاء والحقول
  loginForm.addEventListener("reset", () => {
    errorContainer.textContent = "";
    confirmPasswordError.textContent = "";
  });
});

// home

document.addEventListener('DOMContentLoaded', function() {
  // التحكم في القائمة المنسدلة
  const dropdown = document.querySelector('.dropdown');
  const dropdownBtn = document.querySelector('.dropdown-btn');
  
  dropdownBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdown.classList.toggle('active');
    dropdownBtn.classList.toggle('active');
  });
  
  document.addEventListener('click', function() {
    dropdown.classList.remove('active');
    dropdownBtn.classList.remove('active');
  });
  
  dropdown.addEventListener('click', function(e) {
    e.stopPropagation();
  });
  
  // تحسين التمرير مع مراعاة الهيدر الثابت
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if(this.getAttribute('href') === '#') return;
      
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if(targetElement) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const additionalOffset = 10; // مسافة إضافية صغيرة
        const targetPosition = targetElement.getBoundingClientRect().top + 
                              window.pageYOffset - 
                              headerHeight - 
                              additionalOffset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // إضافة هاش للرابط بدون تحديث الصفحة
        history.pushState(null, null, targetId);
      }
    });
  });
  
  // تأثيرات الظهور عند التمرير
  const animatedElements = document.querySelectorAll('.news-item, .video-item, .event-item, .staff-member');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, { threshold: 0.1 });
  
  animatedElements.forEach(el => observer.observe(el));
});

// يمكنك إضافة أي سكريبتات خاصة بصفحة الهيكل هنا
document.addEventListener('DOMContentLoaded', function() {
  // تأثيرات الظهور عند التمرير للبطاقات
  const structureCards = document.querySelectorAll('.structure-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, { threshold: 0.1 });

  structureCards.forEach(card => observer.observe(card));

  // يمكنك إضافة المزيد من الوظائف هنا
});