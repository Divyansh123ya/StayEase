// Modal Functions
function openLoginModal() {
  document.getElementById("loginModal").style.display = "block"
}

function closeLoginModal() {
  document.getElementById("loginModal").style.display = "none"
}

function openSignupModal() {
  document.getElementById("signupModal").style.display = "block"
}

function closeSignupModal() {
  document.getElementById("signupModal").style.display = "none"
}

function openAddPropertyModal() {
  document.getElementById("addPropertyModal").style.display = "block"
}

function closeAddPropertyModal() {
  document.getElementById("addPropertyModal").style.display = "none"
}

// Close modal when clicking outside
window.onclick = (event) => {
  const loginModal = document.getElementById("loginModal")
  const signupModal = document.getElementById("signupModal")
  const addPropertyModal = document.getElementById("addPropertyModal")

  if (event.target === loginModal) {
    loginModal.style.display = "none"
  }
  if (event.target === signupModal) {
    signupModal.style.display = "none"
  }
  if (event.target === addPropertyModal) {
    addPropertyModal.style.display = "none"
  }
}

// Search Tab Switching
function switchTab(tab) {
  const rentForm = document.getElementById("rent-form")
  const listForm = document.getElementById("list-form")
  const tabs = document.querySelectorAll(".search-tab")

  tabs.forEach((t) => t.classList.remove("active"))

  if (tab === "rent") {
    rentForm.classList.remove("hidden")
    listForm.classList.add("hidden")
    tabs[0].classList.add("active")
  } else {
    rentForm.classList.add("hidden")
    listForm.classList.remove("hidden")
    tabs[1].classList.add("active")
  }
}

// Search Function
function searchPGs() {
  const location = document.getElementById("location-input")?.value || ""
  const roomType = document.getElementById("room-type")?.value || ""

  if (location) {
    window.location.href = `listings.html?location=${encodeURIComponent(location)}&room=${encodeURIComponent(roomType)}`
  } else {
    alert("Please enter a location")
  }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const navLinks = document.querySelector(".nav-links")
  const navActions = document.querySelector(".nav-actions")

  if (navLinks && navActions) {
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex"
    navActions.style.display = navActions.style.display === "flex" ? "none" : "flex"
  }
}

// Filter Functions
function resetFilters() {
  const checkboxes = document.querySelectorAll('.filters-sidebar input[type="checkbox"]')
  const radios = document.querySelectorAll('.filters-sidebar input[type="radio"]')
  const textInputs = document.querySelectorAll(
    '.filters-sidebar input[type="text"], .filters-sidebar input[type="number"]',
  )

  checkboxes.forEach((cb) => (cb.checked = false))
  radios.forEach((r) => (r.checked = false))
  textInputs.forEach((input) => (input.value = ""))

  console.log("[v0] Filters reset")
}

function applyFilters() {
  console.log("[v0] Applying filters...")
  // In a real application, this would filter the property listings
  alert("Filters applied! In a real app, this would update the listings.")
}

// Property Detail Functions
function changeMainImage(thumbnail) {
  const mainImage = document.getElementById("mainImage")
  if (mainImage && thumbnail) {
    mainImage.src = thumbnail.src

    // Update active thumbnail
    document.querySelectorAll(".thumbnail").forEach((t) => t.classList.remove("active"))
    thumbnail.classList.add("active")
  }
}

// Form Submissions
document.addEventListener("DOMContentLoaded", () => {
  // Auth form submissions
  const authForms = document.querySelectorAll(".auth-form")
  authForms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      console.log("[v0] Form submitted")
      alert("Authentication functionality would be implemented here!")

      // Close modals
      closeLoginModal()
      closeSignupModal()
    })
  })

  // Property form submission
  const propertyForm = document.querySelector(".property-form")
  if (propertyForm) {
    propertyForm.addEventListener("submit", (e) => {
      e.preventDefault()
      console.log("[v0] Property form submitted")
      alert("Property submitted for approval! You will be notified once it's reviewed.")
      closeAddPropertyModal()
    })
  }

  // Booking form
  const bookingBtn = document.querySelector(".booking-form .btn-primary")
  if (bookingBtn) {
    bookingBtn.addEventListener("click", (e) => {
      e.preventDefault()
      alert("Booking request sent! Owner will contact you shortly.")
    })
  }

  const addPropertyForm = document.querySelector(".add-property-form form")
  if (addPropertyForm) {
    addPropertyForm.addEventListener("submit", (e) => {
      e.preventDefault()
      alert("Property added successfully!")
      hideAddProperty()
    })
  }

  // Handle approve/reject buttons
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-success")) {
      alert("Booking approved!")
    }
    if (e.target.classList.contains("btn-danger")) {
      alert("Booking rejected!")
    }
  })
})

// Add some interactivity to favorite buttons
document.addEventListener("click", (e) => {
  if (e.target.closest(".favorite-btn") || e.target.closest(".favorite-btn-large")) {
    const btn = e.target.closest(".favorite-btn") || e.target.closest(".favorite-btn-large")
    const svg = btn.querySelector("svg path")

    if (svg) {
      const isFilled = svg.getAttribute("fill") !== "none"
      if (isFilled) {
        svg.setAttribute("fill", "none")
        console.log("[v0] Removed from favorites")
      } else {
        svg.setAttribute("fill", "currentColor")
        console.log("[v0] Added to favorites")
      }
    }

    e.stopPropagation()
  }
})

// Dashboard approve/reject buttons
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-success")) {
    console.log("[v0] Booking approved")
    alert("Booking request approved! Tenant will be notified.")
  }

  if (e.target.classList.contains("btn-danger")) {
    console.log("[v0] Booking rejected")
    alert("Booking request rejected.")
  }
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#") {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        })
      }
    }
  })
})

// Additional functions for add property form
function showAddProperty() {
  const form = document.getElementById("addPropertyForm")
  if (form) {
    form.style.display = "block"
  }
}

function hideAddProperty() {
  const form = document.getElementById("addPropertyForm")
  if (form) {
    form.style.display = "none"
  }
}
