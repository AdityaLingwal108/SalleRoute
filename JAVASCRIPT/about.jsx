document.addEventListener('DOMContentLoaded', function() {
  // Add animation classes to team members for staggered entrance
  const teamMembers = document.querySelectorAll('.team-member');
  
  teamMembers.forEach((member, index) => {
    // Add a slight delay based on index for staggered animation
    setTimeout(() => {
      member.style.opacity = '0';
      member.style.transform = 'translateY(20px)';
      
      // Trigger animation
      setTimeout(() => {
        member.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        member.style.opacity = '1';
        member.style.transform = 'translateY(0)';
      }, 100);
    }, index * 150);
  });
  
  // Optional: Add scroll reveal for team member cards
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    teamMembers.forEach(member => {
      observer.observe(member);
    });
  }
});