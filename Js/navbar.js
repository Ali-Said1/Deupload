// Generates the navbar for every page

document.addEventListener('DOMContentLoaded', ()=> {
    const navbar = document.getElementById('nav-wrapper');

    navbar.innerHTML = `
    <div class="navpanel">
        <a href="index.html"><img class="logo-img" src="../assets/logo/logo-color 1.png" alt="Deupload-logo"></a>
        <ul class="fast-links">
        <li class="nav-list outline-text">Features</li>
        <li class="nav-list outline-text">Solutions</li>
            <li class="nav-list outline-text">NFT storage</li>
            <li class="nav-list outline-text">Pricing</li>
            <li class="nav-list outline-text">Developers</li>
            <li class="nav-list outline-text">Resource</li>
            <span class="current-lang outline-text query-hidden">English</span>
            <button class="query-hidden">Sign in</button>
            <button class="query-hidden">Create an 
                account</button>
        </ul>
    </div>
    <i class="fa-solid fa-bars fast-links-toggle"></i>
    <p class="account-dropdown">Account<i class="fa-solid fa-circle-chevron-down"></i></p>
    <div class="account-lang hidden">
        <span class="current-lang outline-text">English</span>
        <div class="account">
            <button>Sign in</button>
            <button>Create an 
                account</button>
        </div>
    </div>
    `
    const acc_ddown = document.getElementsByClassName('account-dropdown')[0]
    const account_lang = document.getElementsByClassName('account-lang')[0]
    acc_ddown.addEventListener('click', ()=> {
      if (acc_ddown.firstElementChild.classList.contains('fa-circle-chevron-down')) {
        acc_ddown.firstElementChild.classList.remove('fa-circle-chevron-down')
        acc_ddown.firstElementChild.classList.add('fa-circle-chevron-up')
        account_lang.classList.remove('hidden')
      }else {
        acc_ddown.firstElementChild.classList.remove('fa-circle-chevron-up')
        acc_ddown.firstElementChild.classList.add('fa-circle-chevron-down')
        account_lang.classList.add('hidden')
      }
    })
    const fast_linksddown = document.getElementsByClassName('fast-links-toggle')[0]
    const fast_links = document.getElementsByClassName('fast-links')[0]
    fast_linksddown.addEventListener('click', ()=> {
      if (fast_linksddown.classList.contains('fa-bars')) {
        fast_linksddown.classList.remove('fa-bars')
        fast_linksddown.classList.add('fa-bars-staggered')
        fast_links.classList.add('query-view')
      }else {
        fast_linksddown.classList.remove('fa-bars-staggered')
        fast_linksddown.classList.add('fa-bars')
        fast_links.classList.remove('query-view')
      }
    })
    document.addEventListener("mousemove", function(e) {
        if (e.clientY <= 50) {
          navbar.classList.add("show"); // Add the 'show' class when the cursor is near the top
        } else {
          navbar.classList.remove("show"); // Remove the 'show' class when the cursor is not near the top
        }
      });

      window.addEventListener('scroll', function() {
        if (window.scrollY < 56) {
            navbar.classList.remove('hide')
            navbar.classList.add('show')
        }
        else {
            navbar.classList.remove('show')
            navbar.classList.add('hide')
        }
      });
})